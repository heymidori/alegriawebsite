import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { useLang } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import bgDark4 from '../assets/images/BGDark4.png';
import heroImg1 from '../assets/images/imageheromarket1.png';
import heroImg2 from '../assets/images/imageheromarket2.png';
import heroImg3 from '../assets/images/imageheromarket3.png';

export default function Familias() {
  const revealRef = useReveal();
  const { lang } = useLang();
  const t = translations[lang].familias;
  const tMarkets = translations[lang].markets;

  return (
    <main ref={revealRef} style={{ paddingTop: 72 }} role="main" aria-label="Para familias">

      {/* HERO */}
      <section className="hero hero-markets" aria-labelledby="familias-hero-heading">
        <div className="hero-text">
          <div className="hero-badge">{t.heroBadge}</div>
          <h1 id="familias-hero-heading">
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

      {/* SCENARIOS */}
      <section
        className="problem-section"
        aria-labelledby="scenarios-heading"
        style={{ backgroundImage: `url(${bgDark4})` }}
      >
        <div className="container">
          <div className="section-label">{t.scenariosLabel}</div>
          <h2 id="scenarios-heading">{t.scenariosH2}</h2>
          <div className="seg-grid" role="list">
            {t.scenarios.map(({ icon, title, desc }) => (
              <div className="seg-card problem-card reveal" role="listitem" key={title}>
                <div className="seg-badge seg-badge--dark seg-badge--blue" aria-hidden="true">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU PUT IN / WHAT YOU GET BACK */}
      <section className="market-deep market-deep--light" aria-labelledby="exchange-heading">
        <div className="container">
          <div className="market-deep-header reveal">
            <div className="section-label">{t.exchangeLabel}</div>
            <h2 id="exchange-heading">{t.exchangeH2}</h2>
          </div>
          <div className="seg-grid" style={{ marginTop: '2.5rem' }}>
            <div className="seg-card reveal" role="region" aria-label={t.setupTitle}>
              <h3>{t.setupTitle}</h3>
              <ul className="seg-list" role="list">
                {t.setupItems.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="seg-card seg-card--accent reveal" role="region" aria-label={t.receiveTitle}>
              <h3>{t.receiveTitle}</h3>
              <ul className="seg-list" role="list">
                {t.receiveItems.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — family 4-step timeline */}
      <section className="market-deep market-deep--light" aria-labelledby="family-heading">
        <div className="container">
          <div className="market-deep-header reveal">
            <div className="section-label">{tMarkets.familyLabel}</div>
            <h2 id="family-heading">{tMarkets.familyH2}</h2>
            <p className="section-intro" style={{ margin: '0 auto' }}>{tMarkets.familyIntro}</p>
          </div>
          <div className="fam-timeline" role="list">
            {tMarkets.familySteps.map(({ icon, title, desc }, i) => {
              const isRight = i % 2 === 1;
              const isFeatured = i === 2;
              const itemClass = [
                'fam-item',
                'reveal',
                isRight ? 'fam-item--right' : '',
                isFeatured ? 'fam-item--featured' : '',
              ].filter(Boolean).join(' ');
              return (
                <div className="fam-row" role="listitem" key={title}>
                  {isRight ? <div className="fam-empty" aria-hidden="true" /> : (
                    <div className={itemClass}>
                      <div className="fam-item-top">
                        <div className="fam-icon">{icon}</div>
                        <span className="fam-num">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  )}
                  <div className={`fam-dot${isFeatured ? ' fam-dot--featured' : ''}`} aria-hidden="true" />
                  {isRight ? (
                    <div className={itemClass}>
                      <div className="fam-item-top">
                        <div className="fam-icon">{icon}</div>
                        <span className="fam-num">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  ) : <div className="fam-empty" aria-hidden="true" />}
                </div>
              );
            })}
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
