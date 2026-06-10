import { useReveal } from "../hooks/useReveal";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import heroImpact from "../assets/images/imageheroabout.png";
import bgDark1 from "../assets/images/BGDark1.png";
import bgDark2 from "../assets/images/BGDark2.png";
import bgDark4 from "../assets/images/BGDark4.png";
import pedroImg from "../assets/images/PedroCaseImage.png";
import logoAlegria from "../assets/images/LogoAlegria.svg";
import grandma3 from "../assets/images/grandma3.png";

export default function Impact() {
  const revealRef = useReveal();
  const { lang } = useLang();
  const t = translations[lang].impact;

  return (
    <main
      ref={revealRef}
      style={{ paddingTop: 72 }}
      role="main"
      aria-label="Sobre Nosotros"
    >
      {/* HERO */}
      <section className="nos-hero" aria-labelledby="nos-hero-heading">
        <div className="nos-hero-glow nos-hero-glow--left" aria-hidden="true" />
        <div
          className="nos-hero-glow nos-hero-glow--right"
          aria-hidden="true"
        />
        <div className="nos-hero-inner">
          <div className="nos-hero-text">
            <div className="hero-badge">{t.heroBadge}</div>
            <h1 id="nos-hero-heading">
              {t.heroH1a}
              <br />
              <span className="accent">{t.heroH1b}</span>
            </h1>
            <p className="hero-sub">{t.heroSub}</p>
          </div>
          <div className="nos-hero-img-wrap" aria-hidden="true">
            <img src={heroImpact} className="nos-hero-img" alt="" />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section
        className="nos-mission"
        aria-labelledby="nos-mission-heading"
        style={{
          backgroundImage: `url(${bgDark2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="nos-mission-blob" aria-hidden="true" />
        <div className="container nos-mission-inner">
          <div className="nos-mission-left reveal">
            <div
              className="section-label"
              style={{ color: "var(--purple-light)" }}
            >
              {t.missionLabel}
            </div>
            <blockquote className="nos-quote" id="nos-mission-heading">
              <span className="nos-quote-mark" aria-hidden="true">
                "
              </span>
              {t.missionQuote.replace(/^"|"$/g, "")}
              <span className="nos-quote-mark" aria-hidden="true">
                "
              </span>
            </blockquote>
          </div>
          <div className="nos-mission-right reveal">
            <p className="nos-mission-p">{t.missionP}</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="nos-fc-section" aria-label={t.teamLabel}>
        <div className="container nos-fc-inner">
          <div className="nos-fc-left reveal">
            <div className="nos-fc-badge">{t.teamLabel}</div>
            <img src={logoAlegria} className="nos-fc-logo-img" alt="Alegría" />
            <h2 className="nos-fc-h2">{t.fcHeading}</h2>
            <p className="nos-fc-body">{t.teamDesc}</p>
          </div>
          <div className="nos-fc-right reveal" aria-hidden="true">
            <img src={grandma3} className="nos-fc-img" alt="" />
          </div>
        </div>
      </section>

      {/* REALITY */}
      <section
        className="nos-reality"
        aria-labelledby="nos-reality-heading"
        style={{
          backgroundImage: `url(${bgDark1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="nos-reality-header reveal">
            <div
              className="section-label"
              style={{ color: "var(--purple-light)" }}
            >
              {t.realityLabel}
            </div>
            <h2 id="nos-reality-heading" style={{ color: "#fff" }}>
              {t.realityH2}
            </h2>
            <p className="nos-reality-intro">{t.realityIntro}</p>
          </div>
          <div className="nos-reality-grid" role="list">
            {t.realityCards.map(({ stat, icon, title, desc, note }) => (
              <article
                className="nos-reality-card reveal"
                role="listitem"
                key={title}
              >
                <div className="nos-reality-card-top">
                  <span className="nos-reality-stat">{stat}</span>
                  <span className="nos-reality-icon" aria-hidden="true">
                    {icon}
                  </span>
                </div>
                <h3 className="nos-reality-title">{title}</h3>
                <p className="nos-reality-desc">{desc}</p>
                <p className="nos-reality-note">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        className="nos-values-section"
        aria-labelledby="nos-values-heading"
      >
        <div className="container">
          <div
            className="nos-section-header reveal"
            style={{ textAlign: "center" }}
          >
            <div className="section-label">{t.valuesLabel}</div>
            <h2 id="nos-values-heading">{t.valuesH2}</h2>
          </div>
          <div className="nos-values-grid" role="list">
            {t.values.map(({ icon, title, desc }) => (
              <article
                className="nos-value-card reveal"
                role="listitem"
                key={title}
              >
                <div className="nos-value-icon" aria-hidden="true">
                  {icon}
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section
        className="nos-origin"
        aria-labelledby="nos-origin-heading"
        style={{
          backgroundImage: `url(${bgDark4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="nos-origin-blob nos-origin-blob--tl"
          aria-hidden="true"
        />
        <div
          className="nos-origin-blob nos-origin-blob--br"
          aria-hidden="true"
        />
        <div className="container nos-origin-inner">
          {/* LEFT — text */}
          <div className="nos-origin-text reveal">
            <div
              className="section-label"
              style={{ color: "var(--purple-light)" }}
            >
              {t.originLabel}
            </div>
            <h2 id="nos-origin-heading">{t.originH2}</h2>
            <p className="nos-origin-p">{t.originP1}</p>
            <p className="nos-origin-p nos-origin-p--2">{t.originP2}</p>
          </div>

          {/* RIGHT — image + floats */}
          <div className="nos-origin-visual reveal" aria-hidden="true">
            <img src={pedroImg} className="nos-origin-img" alt="" />
            {t.originFloats.map(({ icon, label, text }, i) => (
              <div
                className={`nos-origin-float nos-origin-float--${i + 1}`}
                key={label}
              >
                <span className="nos-origin-float-icon">{icon}</span>
                <div>
                  <p className="nos-origin-float-label">{label}</p>
                  <p className="nos-origin-float-text">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
