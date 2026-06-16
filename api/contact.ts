import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

interface ContactBody {
  name: string;
  email: string;
  type: string;
  message: string;
  turnstileToken: string;
}

async function verifyTurnstile(token: string, remoteIp?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) throw new Error('TURNSTILE_SECRET_KEY is not configured');

  const params = new URLSearchParams();
  params.append('secret', secret);
  params.append('response', token);
  if (remoteIp) params.append('remoteip', remoteIp);

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: params,
  });
  const data = await res.json();
  return data.success === true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, type, message, turnstileToken } = req.body as ContactBody;

  if (!name || !email || !type || !message || !turnstileToken) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    const remoteIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim();
    const verified = await verifyTurnstile(turnstileToken, remoteIp);
    if (!verified) {
      return res.status(403).json({ error: 'Captcha verification failed' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL || 'contact@finconecta.com',
      replyTo: email,
      subject: `[Alegría] ${type} — ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTipo: ${type}\n\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
