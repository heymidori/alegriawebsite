import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import bgDark5 from "../assets/images/BGDark5.png";
import bgDark4 from "../assets/images/BGDark4.png";
import heroImg1 from "../assets/images/imageheromarket1.png";
import heroImg2 from "../assets/images/imageheromarket2.png";
import heroImg3 from "../assets/images/imageheromarket3.png";

export default function Comunidades() {
  const revealRef = useReveal();
  const { lang } = useLang();
  const t = translations[lang].comunidades;
  const tMarkets = translations[lang].markets;

  return (
    <main
      ref={revealRef}
      style={{ paddingTop: 72 }}
      role="main"
      aria-label="Comunidades de cuidado"
    >
      {/* HERO */}
      <section
        className="hero hero-markets"
        aria-labelledby="comunidades-hero-heading"
      >
        <div className="hero-text">
          <div className="hero-badge">{t.heroBadge}</div>
          <h1 id="comunidades-hero-heading">
            {t.heroH1a}
            <br />
            <span className="accent">{t.heroH1b}</span>
          </h1>
          <p className="hero-sub">{t.heroSub}</p>
          <Link
            to="/contacto"
            className="btn btn-primary"
            aria-label={t.heroCta}
          >
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
              <div
                className="seg-card problem-card reveal"
                role="listitem"
                key={title}
              >
                <div
                  className="seg-badge seg-badge--dark seg-badge--purple"
                  aria-hidden="true"
                >
                  {icon}
                </div>
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
          <div className="section-label chatbot-label">
            {tMarkets.chatbotLabel}
          </div>
          <h2 id="chatbot-heading" className="chatbot-h2">
            {tMarkets.chatbotH2}
          </h2>
          <p className="chatbot-desc">{tMarkets.chatbotDesc}</p>
          <div className="chatbot-grid" role="list">
            {tMarkets.chatbotModes.map(
              ({ badge, title, desc, features }, i) => (
                <div
                  className={`chatbot-card chatbot-card--${
                    ["purple", "gradient", "blue"][i]
                  } reveal`}
                  role="listitem"
                  key={badge}
                >
                  <div className="chatbot-card-badge">{badge}</div>
                  <h3 className="chatbot-card-title">{title}</h3>
                  <p className="chatbot-card-desc">{desc}</p>
                  <ul className="chatbot-card-list" role="list">
                    {features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — timeline flow */}
      <section
        className="market-deep market-deep--dark"
        aria-labelledby="community-heading"
        style={{ backgroundImage: `url(${bgDark5})` }}
      >
        <div className="container">
          <div className="market-deep-header reveal">
            <div
              className="section-label"
              style={{ color: "var(--purple-light)" }}
            >
              {tMarkets.communityLabel}
            </div>
            <h2 id="community-heading" style={{ color: "#fff" }}>
              {tMarkets.communityH2}
            </h2>
            <p
              className="section-intro"
              style={{ color: "rgba(255,255,255,0.6)", margin: "0 auto" }}
            >
              {tMarkets.communityIntro}
            </p>
          </div>
          <div className="fam-timeline" role="list">
            {tMarkets.communitySteps.map(({ icon, title, desc }, i) => {
              const isRight = i % 2 === 1;
              const isFeatured = i === 2;
              const itemClass = [
                "fam-item",
                "fam-item--dark",
                "reveal",
                isRight ? "fam-item--right" : "",
                isFeatured ? "fam-item--featured" : "",
              ]
                .filter(Boolean)
                .join(" ");
              return (
                <div className="fam-row" role="listitem" key={title}>
                  {isRight ? (
                    <div className="fam-empty" aria-hidden="true" />
                  ) : (
                    <div className={itemClass}>
                      <div className="fam-item-top">
                        <div className="fam-icon">{icon}</div>
                        <span className="fam-num">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  )}
                  <div
                    className={`fam-dot${
                      isFeatured ? " fam-dot--featured" : ""
                    }`}
                    aria-hidden="true"
                  />
                  {isRight ? (
                    <div className={itemClass}>
                      <div className="fam-item-top">
                        <div className="fam-icon">{icon}</div>
                        <span className="fam-num">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  ) : (
                    <div className="fam-empty" aria-hidden="true" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ORGANIZATIONAL BENEFITS */}
      <section className="chatbot-section" aria-labelledby="benefits-heading">
        <div className="container chatbot-container">
          <div className="section-label chatbot-label">{t.benefitsLabel}</div>
          <h2 id="benefits-heading" className="chatbot-h2">
            {t.benefitsH2}
          </h2>
          <div className="chatbot-grid" role="list">
            {t.benefits.map(({ icon, title, desc }, i) => (
              <div
                className={`chatbot-card chatbot-card--${
                  ["purple", "gradient", "blue", "purple", "gradient"][i]
                } reveal`}
                role="listitem"
                key={title}
              >
                <div className="chatbot-card-badge" aria-hidden="true">
                  {icon}
                </div>
                <h3 className="chatbot-card-title">{title}</h3>
                <p className="chatbot-card-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY & COMPLIANCE */}
      <section
        className="problem-section"
        aria-labelledby="privacy-heading"
        style={{ backgroundImage: `url(${bgDark4})` }}
      >
        <div className="container">
          <div className="section-label">{t.privacyLabel}</div>
          <h2 id="privacy-heading">{t.privacyH2}</h2>
          <div className="seg-grid" role="list">
            {t.privacyItems.map(({ icon, title, desc }) => (
              <div
                className="seg-card problem-card reveal"
                role="listitem"
                key={title}
              >
                <div
                  className="seg-badge seg-badge--dark seg-badge--purple"
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 id="cta-heading">{t.ctaH2}</h2>
          <Link
            to="/contacto"
            className="btn btn-primary"
            aria-label={t.ctaBtn}
          >
            {t.ctaBtn}
          </Link>
        </div>
      </section>
    </main>
  );
}
