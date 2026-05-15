import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { useLang } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import bgDark1 from '../assets/images/BGDark1.png';
import bgDark4 from '../assets/images/BGDark4.png';
import heroImg1 from '../assets/images/imageheromarket1.png';
import heroImg2 from '../assets/images/imageheromarket2.png';
import heroImg3 from '../assets/images/imageheromarket3.png';

export default function Comunidades() {
  const revealRef = useReveal();
  const { lang } = useLang();
  const t = translations[lang].comunidades;
  const tDeploy = translations[lang].deployment;
  const tMarkets = translations[lang].markets;

  return (
    <main ref={revealRef} style={{ paddingTop: 72 }} role="main" aria-label="Comunidades de cuidado">

      {/* HERO */}
      <section className="hero hero-markets" aria-labelledby="comunidades-hero-heading">
        <div className="hero-text">
          <div className="hero-badge">{t.heroBadge}</div>
          <h1 id="comunidades-hero-heading">
            {t.heroH1a}<br />
            <span className="accent">{t.heroH1b}</span>
          </h1>
          <p className="hero-sub">{t.heroSub}</p>
          <Link to="/contacto" className="btn btn-primary" aria-label={t.heroCta}>
            {t.heroCta}
          </Link>
        </div>
        <div className="markets-hero-imgs" aria-hidden="true">
          <img src={heroImg1} className="markets-img markets-img--1" alt="" />
          <img src={heroImg2} className="markets-img markets-img--2" alt="" />
          <img src={heroImg3} className="markets-img markets-img--3" alt="" />
        </div>
      </section>

      {/* ORGANIZATION TYPES */}
      <section
        className="problem-section"
        aria-labelledby="orgs-heading"
        style={{ backgroundImage: `url(${bgDark4})` }}
      >
        <div className="container">
          <div className="section-label">{t.orgsLabel}</div>
          <h2 id="orgs-heading">{t.orgsH2}</h2>
          <div className="seg-grid" role="list">
            {t.orgs.map(({ icon, title, desc }) => (
              <div className="seg-card problem-card reveal" role="listitem" key={title}>
                <div className="seg-badge seg-badge--dark seg-badge--purple" aria-hidden="true">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED MODES */}
      <section className="chatbot-section" aria-labelledby="chatbot-heading">
        <div className="container chatbot-container">
          <div className="section-label chatbot-label">{tMarkets.chatbotLabel}</div>
          <h2 id="chatbot-heading" className="chatbot-h2">{tMarkets.chatbotH2}</h2>
          <p className="chatbot-desc">{tMarkets.chatbotDesc}</p>
          <div className="chatbot-grid" role="list">
            {tMarkets.chatbotModes.map(({ badge, title, desc, features }, i) => (
              <div
                className={`chatbot-card chatbot-card--${['purple', 'gradient', 'blue'][i]} reveal`}
                role="listitem"
                key={badge}
              >
                <div className="chatbot-card-badge">{badge}</div>
                <h3 className="chatbot-card-title">{title}</h3>
                <p className="chatbot-card-desc">{desc}</p>
                <ul className="chatbot-card-list" role="list">
                  {features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 5-step flow */}
      <section
        className="market-deep market-deep--dark"
        aria-labelledby="community-heading"
        style={{ backgroundImage: `url(${bgDark1})` }}
      >
        <div className="container">
          <div className="market-deep-header reveal">
            <div className="section-label" style={{ color: 'var(--purple-light)' }}>{tMarkets.communityLabel}</div>
            <h2 id="community-heading" style={{ color: '#fff' }}>{tMarkets.communityH2}</h2>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto' }}>{tMarkets.communityIntro}</p>
          </div>
          <div className="comm-flow" role="list">
            {tMarkets.communitySteps.map(({ icon, title }, i) => [
              <div
                key={`step-${i}`}
                className={`comm-step${i === tMarkets.communitySteps.length - 1 ? ' comm-step--highlight' : ''} reveal`}
                role="listitem"
              >
                <div className="comm-step-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="comm-step-icon">{icon}</div>
                <h3>{title}</h3>
              </div>,
              i < tMarkets.communitySteps.length - 1 && (
                <div key={`conn-${i}`} className="comm-connector" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 4l6 6-6 6" stroke="rgba(197,149,252,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )
            ])}
          </div>
          <p className="comm-closing">{tMarkets.communityClosing}</p>
        </div>
      </section>

      {/* ORGANIZATIONAL BENEFITS */}
      <section className="chatbot-section" aria-labelledby="benefits-heading">
        <div className="container chatbot-container">
          <div className="section-label chatbot-label">{t.benefitsLabel}</div>
          <h2 id="benefits-heading" className="chatbot-h2">{t.benefitsH2}</h2>
          <div className="chatbot-grid" role="list">
            {t.benefits.map(({ icon, title, desc }, i) => (
              <div
                className={`chatbot-card chatbot-card--${['purple', 'gradient', 'blue', 'purple', 'gradient'][i]} reveal`}
                role="listitem"
                key={title}
              >
                <div className="chatbot-card-badge" aria-hidden="true">{icon}</div>
                <h3 className="chatbot-card-title">{title}</h3>
                <p className="chatbot-card-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT ROADMAP */}
      <section
        className="problem-section"
        aria-labelledby="roadmap-heading"
        style={{ backgroundImage: `url(${bgDark4})` }}
      >
        <div className="container">
          <div className="section-label">{t.roadmapLabel}</div>
          <h2 id="roadmap-heading">{t.roadmapH2}</h2>
          <p className="section-intro" style={{ margin: '0 auto 2.5rem' }}>{t.roadmapIntro}</p>
          <div className="seg-grid" role="list">
            {tDeploy.phases.map(({ num, title, items }) => (
              <div className="seg-card problem-card reveal" role="listitem" key={num}>
                <div className="seg-badge seg-badge--dark seg-badge--blue">{tDeploy.phaseLabel} {num}</div>
                <h3>{title}</h3>
                <ul className="seg-list" role="list">
                  {items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY & COMPLIANCE */}
      <section className="market-deep market-deep--light" aria-labelledby="privacy-heading">
        <div className="container">
          <div className="market-deep-header reveal">
            <div className="section-label">{t.privacyLabel}</div>
            <h2 id="privacy-heading">{t.privacyH2}</h2>
          </div>
          <div className="seg-grid" role="list">
            {t.privacyItems.map(({ icon, title, desc }) => (
              <div className="seg-card reveal" role="listitem" key={title}>
                <div className="seg-badge" aria-hidden="true">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 id="cta-heading">{t.ctaH2}</h2>
          <Link to="/contacto" className="btn btn-primary" aria-label={t.ctaBtn}>
            {t.ctaBtn}
          </Link>
        </div>
      </section>

    </main>
  );
}
