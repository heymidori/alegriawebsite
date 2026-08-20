import React from 'react';
import { useNavigate } from 'react-router-dom';
import iconAlegria from '../assets/images/IconAlegria.webp';
import bgDark1 from '../assets/images/BGDark1.webp';
import { useReveal } from '../hooks/useReveal';
import { useLang } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export default function Product() {
  const navigate = useNavigate();
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
              <div className="hp-badge hero-anim hero-anim-1">{t.heroBadge}</div>
              <h1 id="product-hero-heading">
                {t.heroH1a}<br />
                <span className="accent">{t.heroH1b}</span>
              </h1>
              <p className="hp-sub hero-anim hero-anim-2">{t.heroSub}</p>
              <div className="hp-cta hero-anim hero-anim-3">
                <button className="hp-btn-primary" onClick={() => navigate('/contacto')}>{t.heroCtaPrimary}</button>
                <button className="hp-btn-secondary" onClick={() => document.getElementById('cap-heading')?.scrollIntoView({ behavior: 'smooth' })}>{t.heroCtaSecondary}</button>
              </div>
              <p className="hp-trust hero-anim hero-anim-4">{t.heroTrust}</p>
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
              <svg viewBox="0 0 260 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="pvLg1" x1="60" y1="20" x2="200" y2="260" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c084fc"/><stop offset="1" stopColor="#60a5fa"/>
                  </linearGradient>
                  <linearGradient id="pvLg2" x1="60" y1="110" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a855f7"/><stop offset="1" stopColor="#6366f1"/>
                  </linearGradient>
                  <linearGradient id="pvShine" x1="80" y1="60" x2="180" y2="130" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.18"/><stop offset="1" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                  <radialGradient id="pvGlow" cx="50%" cy="55%" r="45%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0"/>
                  </radialGradient>
                  <filter id="pvBlur">
                    <feGaussianBlur stdDeviation="18"/>
                  </filter>
                  <filter id="pvGlowF">
                    <feGaussianBlur stdDeviation="5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                {/* Ambient glow */}
                <ellipse cx="130" cy="155" rx="90" ry="85" fill="url(#pvGlow)" filter="url(#pvBlur)"/>

                {/* Outer dashed orbit */}
                <circle cx="130" cy="148" r="108" stroke="rgba(197,149,252,0.1)" strokeWidth="1" strokeDasharray="3 9" fill="none"/>
                {/* Inner ring */}
                <circle cx="130" cy="148" r="80" stroke="rgba(197,149,252,0.08)" strokeWidth="1" fill="none"/>

                {/* Shield shape */}
                <path d="M130 34 L205 70 L205 148 C205 194 168 222 130 238 C92 222 55 194 55 148 L55 70 Z"
                      fill="rgba(88,40,160,0.28)" stroke="url(#pvLg1)" strokeWidth="1.5"/>
                {/* Shield top gloss */}
                <path d="M130 42 L197 75 L197 112 C173 107 152 105 130 105 C108 105 87 107 63 112 L63 75 Z"
                      fill="url(#pvShine)"/>

                {/* Lock shackle */}
                <path d="M101 128 L101 104 A29 29 0 0 1 159 104 L159 128"
                      stroke="url(#pvLg1)" strokeWidth="8" strokeLinecap="round" fill="none" filter="url(#pvGlowF)"/>

                {/* Lock body */}
                <rect x="78" y="124" width="104" height="80" rx="16" fill="url(#pvLg2)"/>
                {/* Body top highlight */}
                <rect x="78" y="124" width="104" height="36" rx="16" fill="rgba(255,255,255,0.1)"/>
                {/* Body bottom shadow */}
                <rect x="78" y="172" width="104" height="32" rx="0" fill="rgba(0,0,0,0.08)"/>
                <rect x="78" y="172" width="104" height="32" rx="16" fill="rgba(0,0,0,0)"/>

                {/* Keyhole circle */}
                <circle cx="130" cy="157" r="12" fill="rgba(255,255,255,0.18)"/>
                {/* Keyhole slot */}
                <rect x="125.5" y="157" width="9" height="16" rx="4.5" fill="rgba(255,255,255,0.18)"/>

                {/* Checkmark */}
                <path d="M116 157 L126 167 L146 144" stroke="white" strokeWidth="4.5"
                      strokeLinecap="round" strokeLinejoin="round"/>

                {/* Network nodes — top left cluster */}
                <circle cx="28" cy="88" r="4.5" fill="rgba(192,132,252,0.55)"/>
                <circle cx="44" cy="62" r="3" fill="rgba(192,132,252,0.38)"/>
                <line x1="31" y1="86" x2="41" y2="65" stroke="rgba(192,132,252,0.22)" strokeWidth="1"/>
                <line x1="32" y1="88" x2="55" y2="100" stroke="rgba(192,132,252,0.18)" strokeWidth="1"/>

                {/* Network nodes — top right */}
                <circle cx="218" cy="72" r="5" fill="rgba(96,165,250,0.5)"/>
                <circle cx="238" cy="96" r="3" fill="rgba(96,165,250,0.35)"/>
                <line x1="213" y1="72" x2="205" y2="82" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
                <line x1="220" y1="75" x2="235" y2="93" stroke="rgba(96,165,250,0.18)" strokeWidth="1"/>

                {/* Network nodes — bottom left */}
                <circle cx="20" cy="196" r="3.5" fill="rgba(192,132,252,0.4)"/>
                <line x1="23" y1="194" x2="55" y2="180" stroke="rgba(192,132,252,0.15)" strokeWidth="1"/>

                {/* Network nodes — bottom right */}
                <circle cx="240" cy="200" r="4.5" fill="rgba(96,165,250,0.4)"/>
                <circle cx="224" cy="230" r="2.5" fill="rgba(96,165,250,0.3)"/>
                <line x1="236" y1="200" x2="205" y2="190" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
                <line x1="238" y1="204" x2="226" y2="227" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>

                {/* Tiny accent dots */}
                <circle cx="170" cy="30" r="2" fill="rgba(192,132,252,0.45)"/>
                <circle cx="86" cy="24" r="1.5" fill="rgba(96,165,250,0.4)"/>
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
