import React from 'react';
import iconAlegria from '../assets/images/IconAlegria.png';
import bgDark1 from '../assets/images/BGDark1.png';
import { useReveal } from '../hooks/useReveal';
import { useLang } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export default function Product() {
  const revealRef = useReveal();
  const { lang } = useLang();
  const t = translations[lang].product;

  return (
    <main ref={revealRef} style={{ paddingTop: 72 }} role="main" aria-label="Producto">

      <section className="hero hero-sub-page hero-product" aria-labelledby="product-hero-heading">
        <div className="hero-product-glow" aria-hidden="true" />
        <div className="hp-glow-left" aria-hidden="true" />
        <div className="hero-content">
          <div className="hp-grid">

            {/* LEFT — text */}
            <div className="hp-left">
              <div className="hp-badge">{t.heroBadge}</div>
              <h1 id="product-hero-heading">
                {t.heroH1a}<br />
                <span className="accent">{t.heroH1b}</span>
              </h1>
              <p className="hp-sub">{t.heroSub}</p>
              <div className="hp-cta">
                <button className="hp-btn-primary">{t.heroCtaPrimary}</button>
                <button className="hp-btn-secondary">{t.heroCtaSecondary}</button>
              </div>
              <p className="hp-trust">{t.heroTrust}</p>
            </div>

            {/* RIGHT — conversation mockup */}
            <div className="hp-right" aria-hidden="true">
              <div className="hp-chat-card">
                <div className="hp-float-badge">{t.heroPrivate}</div>
                <div className="hp-chat-bar">
                  <div className="hp-chat-avatar">
                    <img src={iconAlegria} alt="Alegría" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                  </div>
                  <div className="hp-chat-meta">
                    <strong>Alegría</strong>
                    <span>{t.heroOnline}</span>
                  </div>
                </div>
                <div className="hp-messages">
                  <div className="hp-msg-alegria">{t.heroMsg1}</div>
                  <div className="hp-msg-user">{t.heroMsg2}</div>
                  <div className="hp-msg-alegria">{t.heroMsg3}</div>
                  <div className="hp-msg-user">{t.heroMsg4}</div>
                </div>
                <div className="hp-waveform">
                  {[3, 6, 10, 14, 9, 5, 12, 16, 8, 5, 10, 4].map((h, i) => (
                    <span
                      key={i}
                      className="hp-waveform-bar"
                      style={{ height: `${h}px`, '--i': i } as React.CSSProperties}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section aria-labelledby="cap-heading">
        <div className="container">
          <div className="section-label">{t.capLabel}</div>
          <h2 id="cap-heading">{t.capH2}</h2>
          <p className="section-intro">{t.capIntro}</p>
          <div className="cap-grid" role="list">
            {t.capabilities.map(({ icon, title, desc, tag }) => (
              <div className="cap-card reveal" role="listitem" key={title}>
                <div className="cap-card-header">
                  <div className="cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="cap-tag">{tag}</span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY DEEP DIVE */}
      <section className="privacy-section privacy-section--dark" aria-labelledby="privacy-heading" style={{ backgroundImage: `url(${bgDark1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <div className="privacy-grid">
            <div>
              <div className="section-label">{t.privacyLabel}</div>
              <h2 id="privacy-heading">{t.privacyH2}</h2>
              <p className="section-intro">{t.privacyIntro}</p>
              <div className="privacy-list" role="list">
                {t.privacyItems.map(({ title, desc }) => (
                  <div className="privacy-item" role="listitem" key={title}>
                    <div className="privacy-check" aria-hidden="true">✓</div>
                    <p><strong>{title}</strong> — {desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="privacy-visual" aria-hidden="true">
              <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="lockGrad" x1="0" y1="0" x2="200" y2="220" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c595fc" /><stop offset="1" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="120" r="88" fill="rgba(197,149,252,0.07)" stroke="rgba(197,149,252,0.14)" strokeWidth="1" />
                <circle cx="100" cy="120" r="65" fill="rgba(197,149,252,0.05)" stroke="rgba(197,149,252,0.1)" strokeWidth="1" />
                <path d="M66 97 L66 68 A34 34 0 0 1 134 68 L134 97" stroke="url(#lockGrad)" strokeWidth="9" strokeLinecap="round" fill="none" />
                <rect x="36" y="94" width="128" height="98" rx="20" fill="url(#lockGrad)" />
                <circle cx="100" cy="136" r="15" fill="rgba(255,255,255,0.22)" />
                <rect x="93.5" y="136" width="13" height="20" rx="6.5" fill="rgba(255,255,255,0.22)" />
                <path d="M84 136 L95 147 L118 121" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="38" cy="42" r="5" fill="rgba(197,149,252,0.35)" />
                <circle cx="162" cy="28" r="3.5" fill="rgba(96,165,250,0.35)" />
                <circle cx="18" cy="148" r="4" fill="rgba(197,149,252,0.25)" />
                <circle cx="178" cy="162" r="6" fill="rgba(96,165,250,0.22)" />
                <circle cx="155" cy="55" r="2.5" fill="rgba(197,149,252,0.3)" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONALIZATION */}
      <section className="person-section" aria-labelledby="person-heading">
        <div className="container">
          <div className="section-label">{t.personLabel}</div>
          <h2 id="person-heading">{t.personH2}</h2>
          <p className="section-intro">{t.personIntro}</p>
          <div className="person-grid" role="list">
            {t.personFeatures.map(({ icon, title, desc }) => (
              <div className="person-card reveal" role="listitem" key={title}>
                <div className="person-icon" aria-hidden="true">
                  {icon}
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
