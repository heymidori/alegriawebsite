import { useReveal } from '../hooks/useReveal';
import { useLang } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import bgDark4 from '../assets/images/BGDark4.png';
import bgDark1 from '../assets/images/BGDark1.png';
import heroImg1 from '../assets/images/imageheromarket1.png';
import heroImg2 from '../assets/images/imageheromarket2.png';
import heroImg3 from '../assets/images/imageheromarket3.png';

export default function Markets() {
  const revealRef = useReveal();
  const { lang } = useLang();
  const t = translations[lang].markets;

  return (
    <main ref={revealRef} style={{ paddingTop: 72 }} role="main" aria-label="Mercados">

      <section className="hero hero-markets" aria-labelledby="markets-hero-heading">
        <div className="hero-text">
          <div className="hero-badge">{t.heroBadge}</div>
          <h1 id="markets-hero-heading">
            {t.heroH1a}<br />
            <span className="accent">{t.heroH1b}</span>
          </h1>
          <p className="hero-sub">{t.heroSub}</p>
        </div>
        <div className="markets-hero-imgs" aria-hidden="true">
          <img src={heroImg1} className="markets-img markets-img--1" alt="" />
          <img src={heroImg2} className="markets-img markets-img--2" alt="" />
          <img src={heroImg3} className="markets-img markets-img--3" alt="" />
        </div>
      </section>

      {/* SEGMENTS */}
      <section
        className="problem-section"
        aria-labelledby="seg-heading"
        style={{ backgroundImage: `url(${bgDark4})` }}
      >
        <div className="container">
          <div className="section-label">{t.segLabel}</div>
          <h2 id="seg-heading">{t.segH2}</h2>
          <div className="seg-grid" role="list">
            <div className="seg-card problem-card reveal" role="listitem" aria-label={t.b2cAria}>
              <div className="seg-badge seg-badge--dark seg-badge--purple">{t.b2cBadge}</div>
              <h3>{t.b2cTitle}</h3>
              {t.b2cTagline && <p className="seg-tagline">{t.b2cTagline}</p>}
              <p>{t.b2cDesc}</p>
              <ul className="seg-list" role="list">
                {t.b2cItems.map(item => <li key={item}>{item}</li>)}
              </ul>
              {t.b2cBtn && <button className="seg-btn seg-btn--b2c">{t.b2cBtn}</button>}
            </div>
            <div className="seg-card problem-card reveal" role="listitem" aria-label={t.b2bAria}>
              <div className="seg-badge seg-badge--dark seg-badge--blue">{t.b2bBadge}</div>
              <h3>{t.b2bTitle}</h3>
              {t.b2bTagline && <p className="seg-tagline">{t.b2bTagline}</p>}
              <p>{t.b2bDesc}</p>
              <ul className="seg-list" role="list">
                {t.b2bItems.map(item => <li key={item}>{item}</li>)}
              </ul>
              {t.b2bBtn && <button className="seg-btn seg-btn--b2b">{t.b2bBtn}</button>}
            </div>
          </div>
        </div>
      </section>

      {/* NOT A GENERIC CHATBOT */}
      <section className="chatbot-section" aria-labelledby="chatbot-heading">
        <div className="container chatbot-container">
          <div className="section-label chatbot-label">{t.chatbotLabel}</div>
          <h2 id="chatbot-heading" className="chatbot-h2">{t.chatbotH2}</h2>
          <p className="chatbot-desc">{t.chatbotDesc}</p>
          <div className="chatbot-grid" role="list">
            {t.chatbotModes.map(({ badge, title, desc, features }, i) => (
              <div className={`chatbot-card chatbot-card--${['purple','gradient','blue'][i]} reveal`} role="listitem" key={badge}>
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

      {/* CARE COMMUNITIES DEEP DIVE */}
      <section
        className="market-deep market-deep--dark"
        aria-labelledby="community-heading"
        style={{ backgroundImage: `url(${bgDark1})` }}
      >
        <div className="container">
          <div className="market-deep-header reveal">
            <div className="section-label" style={{ color: 'var(--purple-light)' }}>{t.communityLabel}</div>
            <h2 id="community-heading" style={{ color: '#fff' }}>{t.communityH2}</h2>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto' }}>{t.communityIntro}</p>
          </div>
          <div className="comm-flow" role="list">
            {t.communitySteps.map(({ icon, title }, i) => [
              <div
                key={`step-${i}`}
                className={`comm-step${i === t.communitySteps.length - 1 ? ' comm-step--highlight' : ''} reveal`}
                role="listitem"
              >
                <div className="comm-step-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="comm-step-icon">{icon}</div>
                <h3>{title}</h3>
              </div>,
              i < t.communitySteps.length - 1 && (
                <div key={`conn-${i}`} className="comm-connector" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 4l6 6-6 6" stroke="rgba(197,149,252,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )
            ])}
          </div>
          <p className="comm-closing">{t.communityClosing}</p>
        </div>
      </section>

      {/* FAMILIES DEEP DIVE */}
      <section className="market-deep market-deep--light" aria-labelledby="family-heading">
        <div className="container">
          <div className="market-deep-header reveal">
            <div className="section-label">{t.familyLabel}</div>
            <h2 id="family-heading">{t.familyH2}</h2>
            <p className="section-intro" style={{ margin: '0 auto' }}>{t.familyIntro}</p>
          </div>
          <div className="fam-timeline" role="list">
            {t.familySteps.map(({ icon, title, desc }, i) => {
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


    </main>
  );
}
