import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useLang } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          size?: 'invisible';
          callback: (token: string) => void;
          'error-callback'?: () => void;
        }
      ) => string;
      execute: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string;

export default function Contact() {
  const revealRef = useReveal();
  const { lang } = useLang();
  const t = translations[lang].contact;
  const [formData, setFormData] = useState({ name: '', email: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const pendingFormRef = useRef<typeof formData | null>(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;

    function renderWidget() {
      if (!turnstileRef.current || !window.turnstile || widgetIdRef.current) return;
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        size: 'invisible',
        callback: async (token: string) => {
          const pending = pendingFormRef.current;
          if (!pending) return;
          await sendContactRequest(pending, token);
        },
        'error-callback': () => {
          setSending(false);
          setSendError(true);
        },
      });
    }

    if (window.turnstile) {
      renderWidget();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src^="https://challenges.cloudflare.com/turnstile"]'
    );
    if (existing) {
      existing.addEventListener('load', renderWidget);
      return () => existing.removeEventListener('load', renderWidget);
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    script.onload = renderWidget;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  async function sendContactRequest(data: typeof formData, turnstileToken: string) {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, turnstileToken }),
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
      pendingFormRef.current = null;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.type) {
      setTypeError(true);
      return;
    }
    setSendError(false);
    setSending(true);
    pendingFormRef.current = formData;

    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.execute(widgetIdRef.current);
    } else {
      setSending(false);
      setSendError(true);
    }
  }

  return (
    <main ref={revealRef} role="main" aria-label={t.pageLabel} style={{ paddingTop: 72 }}>

      {/* HERO */}
      <section className="ct-hero">
        <div className="ct-hero-glow" aria-hidden="true" />
        <div className="ct-hero-inner reveal">
          <div className="section-label" style={{ color: 'var(--purple-light)' }}>{t.label}</div>
          <h1>{t.h1a} <span className="ct-h1-accent">{t.h1b}</span></h1>
          <p className="ct-hero-sub">{t.sub}</p>
        </div>
      </section>

      {/* WHO ARE YOU */}
      <section className="ct-types">
        <div className="ct-types-inner reveal">
          {t.types.map(({ icon, title, desc, value }) => (
            <button
              key={value}
              className={`ct-type-card${formData.type === value ? ' ct-type-card--active' : ''}${typeError && !formData.type ? ' ct-type-card--error' : ''}`}
              onClick={() => { setFormData(prev => ({ ...prev, type: value })); setTypeError(false); }}
              type="button"
              aria-pressed={formData.type === value}
            >
              <span className="ct-type-icon">{icon}</span>
              <strong className="ct-type-title">{title}</strong>
              <span className="ct-type-desc">{desc}</span>
            </button>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="ct-form-section">
        <div className="ct-form-wrap">
          {submitted ? (
            <div className="ct-success reveal">
              <span className="ct-success-icon">✅</span>
              <h2>{t.successTitle}</h2>
              <p>{t.successSub}</p>
            </div>
          ) : (
            <form className="ct-form reveal" onSubmit={handleSubmit} noValidate>
              <div className="ct-form-row">
                <div className="ct-field">
                  <label htmlFor="ct-name">{t.fieldName}</label>
                  <input
                    id="ct-name"
                    type="text"
                    required
                    placeholder={t.placeholderName}
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-email">{t.fieldEmail}</label>
                  <input
                    id="ct-email"
                    type="email"
                    required
                    placeholder={t.placeholderEmail}
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>
              <div className="ct-field">
                <label htmlFor="ct-message">{t.fieldMessage}</label>
                <textarea
                  id="ct-message"
                  rows={5}
                  required
                  placeholder={t.placeholderMessage}
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>
              <div ref={turnstileRef} />
              {sendError && (
                <p className="ct-form-error" role="alert">{t.sendError}</p>
              )}
              <button type="submit" className="ct-submit" disabled={sending}>
                {sending ? t.sendingBtn : t.submitBtn}
              </button>
            </form>
          )}
        </div>
      </section>

    </main>
  );
}
