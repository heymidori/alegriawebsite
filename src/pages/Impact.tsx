import { useReveal } from "../hooks/useReveal";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import heroChar from "../assets/images/heroimage.png";
import fcLogo from "../assets/images/LogoFinConectaAI.png";
import bgDark2 from "../assets/images/BGDark2.png";
import bgDark4 from "../assets/images/BGDark4.png";
import pedroImg from "../assets/images/PedroCaseImage.png";

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
      <section className="hero" aria-labelledby="nos-hero-heading">
        <div className="hero-text">
          <div className="hero-badge">{t.heroBadge}</div>
          <h1 id="nos-hero-heading">
            {t.heroH1a}
            <br />
            <span className="accent">{t.heroH1b}</span>
          </h1>
          <p className="hero-sub">{t.heroSub}</p>
        </div>
        <img
          src={heroChar}
          className="hero-character"
          alt=""
          aria-hidden="true"
        />
      </section>

      {/* FINCONECTA BAND */}
      <div className="nos-fc-band" aria-label="FinConecta">
        <div className="nos-fc-inner">
          <div className="nos-fc-logo-wrap">
            <span className="nos-fc-by">{t.fcBy}</span>
            <a href="https://finconecta.com" target="_blank" rel="noopener noreferrer" aria-label="FinConecta">
              <img src={fcLogo} className="nos-fc-logo" alt="FinConecta AI" />
            </a>
          </div>
          <div className="nos-fc-divider" aria-hidden="true" />
          <p className="nos-fc-text">{t.fcDesc}</p>
          <a
            href="https://finconecta.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nos-fc-link"
          >
            {t.fcLink}
          </a>
        </div>
      </div>

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
