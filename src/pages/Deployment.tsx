import { useReveal } from '../hooks/useReveal';
import { useLang } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export default function Deployment() {
  const revealRef = useReveal();
  const { lang } = useLang();
  const t = translations[lang].deployment;

  return (
    <main ref={revealRef} style={{ paddingTop: 72 }} role="main" aria-label="Implementación">

      <section className="hero hero-sub-page" aria-labelledby="deploy-hero-heading">
        <div className="hero-content">
          <div className="hero-badge">{t.heroBadge}</div>
          <h1 id="deploy-hero-heading">
            {t.heroH1a}<br />
            <span className="accent">{t.heroH1b}</span>
          </h1>
          <p className="hero-sub">{t.heroSub}</p>
        </div>
      </section>

      {/* TIMELINE */}
      <section aria-labelledby="timeline-heading">
        <div className="container">
          <div className="section-label">{t.timelineLabel}</div>
          <h2 id="timeline-heading">{t.timelineH2}</h2>
          <div className="timeline" role="list">
            {t.phases.map(({ num, title, items }) => (
              <div className="tl-item reveal" role="listitem" key={num} aria-label={`${t.phaseLabel} ${num}: ${title}`}>
                <div className="tl-dot" aria-hidden="true">{num}</div>
                <div className="tl-content">
                  <div className="tl-phase">{t.phaseLabel} {num}</div>
                  <h3>{title}</h3>
                  <ul role="list">
                    {items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION NOTE */}
      <section style={{ background: 'var(--gradient-section)' }} aria-labelledby="integration-heading">
        <div className="container">
          <div className="section-label">{t.integrationLabel}</div>
          <h2 id="integration-heading">{t.integrationH2}</h2>
          <p className="section-intro">{t.integrationIntro}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }} role="list">
            {t.limits.map(({ icon, title, desc }) => (
              <div
                key={title}
                role="listitem"
                className="reveal"
                style={{ background: 'white', borderRadius: 16, padding: '1.5rem', border: '1px solid rgba(197,149,252,0.2)' }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{icon}</div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem' }}>{title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
