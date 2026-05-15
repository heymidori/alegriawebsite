/**
 * Auto-generates the `es` translation block from the `en` block using Claude API.
 * Usage: npm run translate
 * Requires: ANTHROPIC_API_KEY environment variable
 */
import Anthropic from '@anthropic-ai/sdk';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { translations } from '../src/i18n/translations';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const TRANSLATIONS_PATH = resolve(__dirname, '../src/i18n/translations.ts');

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('Error: ANTHROPIC_API_KEY environment variable is not set.');
  process.exit(1);
}

const client = new Anthropic();

const SYSTEM_PROMPT = `You are a professional translator for a US-based AI companionship product targeting Latin American and US Hispanic markets.

Your task: translate a JSON object of UI strings from English to Spanish (Latin American, warm and natural tone).

STRICT RULES:
1. Return ONLY valid JSON. No markdown, no code fences, no comments, no explanation.
2. Translate only string VALUES. Never change object keys.
3. Keep UNCHANGED: URL paths (strings starting with /), emojis, numbers and numeric strings (like "5 min", "24/7", "100%"), abbreviations like "B2C" / "B2B2C" / "WCAG 2.1 AA", brand names "Alegría" and "FinConecta", the string "Both".
4. Emojis inside strings must stay exactly where they are within the string.
5. Match the warmth, care, and professional tone of the English original.
6. "Alegría" is both the brand name and the Spanish word for joy — keep it unchanged.
7. Route values like "/producto", "/mercados", "/nosotros", "/contacto" must never be translated.`;

async function main() {
  const enData = translations.en;

  console.log('Calling Claude API to translate en → es...');

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 16000,
    system: SYSTEM_PROMPT,
    messages: [{
      role: 'user',
      content: `Translate all string values to Spanish. Return only the JSON:\n\n${JSON.stringify(enData, null, 2)}`,
    }],
  });

  const raw = response.content[0];
  if (raw.type !== 'text') throw new Error('Unexpected response type from Claude API');

  const jsonText = raw.text.trim().replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');

  let esData: unknown;
  try {
    esData = JSON.parse(jsonText);
  } catch {
    console.error('Claude returned invalid JSON. Raw response saved to scripts/translate-debug.json');
    writeFileSync(resolve(__dirname, 'translate-debug.json'), jsonText, 'utf-8');
    process.exit(1);
  }

  const fileContent = `// DO NOT EDIT the \`es\` block — it is auto-generated from \`en\` via \`npm run translate\`.
// To update translations: edit strings in \`en\`, then run \`npm run translate\`.
export const translations = {
  en: ${JSON.stringify(enData, null, 2)},
  es: ${JSON.stringify(esData, null, 2)},
};

export type Lang = 'es' | 'en';
`;

  writeFileSync(TRANSLATIONS_PATH, fileContent, 'utf-8');
  console.log('✓ src/i18n/translations.ts updated — es block regenerated from en.');
}

main().catch((err) => {
  console.error('Translation failed:', err.message ?? err);
  process.exit(1);
});
