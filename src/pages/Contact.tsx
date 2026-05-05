import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useLang } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export default function Contact() {
  const revealRef = useReveal();
  const { lang } = useLang();
  const t = translations[lang].contact;
  const [formData, setFormData] = useState({ name: '', email: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
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
        <div className="ct-types-inner">
          {t.types.map(({ icon, title, desc, value }) => (
            <button
              key={value}
              className={`ct-type-card reveal${formData.type === value ? ' ct-type-card--active' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, type: value }))}
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
              <button type="submit" className="ct-submit">{t.submitBtn}</button>
            </form>
          )}
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="ct-trust">
        <span>🔒 {t.trust1}</span>
        <span className="ct-trust-dot" aria-hidden="true">·</span>
        <span>⚡ {t.trust2}</span>
        <span className="ct-trust-dot" aria-hidden="true">·</span>
        <span>💜 {t.trust3}</span>
      </div>

    </main>
  );
}
