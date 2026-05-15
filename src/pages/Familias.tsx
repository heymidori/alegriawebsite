import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { useLang } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import heroImg1 from '../assets/images/imageheromarket1.png';
import heroImg2 from '../assets/images/imageheromarket2.png';
import heroImg3 from '../assets/images/imageheromarket3.png';

export default function Familias() {
  const revealRef = useReveal();
  const { lang } = useLang();
  const t = translations[lang].familias;
  const tHome = translations[lang].home;
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

      {/* THE PROBLEM */}
      <section className="problem-section-light" aria-labelledby="problem-heading">
        <div className="container">
          <div className="section-label">{tHome.problemLabel}</div>
          <h2 id="problem-heading">{tHome.problemH2}</h2>
          <p className="section-intro" style={{ margin: '0 auto 2.5rem' }}>{tHome.problemIntro}</p>
          <div className="problem-grid" role="list">
            {tHome.problems.map(({ icon, title, desc }) => (
              <div className="problem-card reveal" role="listitem" key={title}>
                <div className="problem-icon" aria-hidden="true">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO ALEGRÍA SERVES */}
      <section className="serve-section" aria-labelledby="serve-heading">
        <div className="container">
          <div className="section-label">{tHome.serveLabel}</div>
          <h2 id="serve-heading">
            {tHome.serveH2a}<br />
            <span className="accent">{tHome.serveH2b}</span>
          </h2>
          <p className="section-intro" style={{ margin: '0 auto 2.5rem' }}>{tHome.serveIntro}</p>
          <div className="serve-grid" role="list">
            {tHome.serveCards.map(({ title, desc }) => (
              <div className="serve-card reveal" role="listitem" key={title}>
                <div className="serve-card-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
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
