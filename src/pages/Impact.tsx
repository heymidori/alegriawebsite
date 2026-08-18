import { useReveal } from "../hooks/useReveal";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import heroImpact from "../assets/images/imageheroabout.webp";
import bgDark1 from "../assets/images/BGDark1.webp";
import bgDark2 from "../assets/images/BGDark2.webp";
import bgDark4 from "../assets/images/BGDark4.webp";
import pedroImg from "../assets/images/PedroCaseImage.webp";
import logoFC from "../assets/images/LogoFinConectaAI.webp";
import grandma3 from "../assets/images/grandma3.webp";

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
            <div className="nos-hero-pills">
              {t.heroPills.map(({ icon, label }) => (
                <span className="nos-hero-pill" key={label}>
                  <span aria-hidden="true">{icon}</span> {label}
                </span>
              ))}
            </div>
          </div>
          <div className="nos-hero-img-wrap" aria-hidden="true">
            <div className="nos-char-wrap">

              {/* Heart bubble — upper right */}
              <div className="nos-char-bubble nos-char-bubble--heart">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="b-heart" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#e879f9"/>
                      <stop offset="100%" stopColor="#a855f7"/>
                    </linearGradient>
                  </defs>
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="url(#b-heart)"/>
                </svg>
              </div>

              {/* Chat bubble — left middle */}
              <div className="nos-char-bubble nos-char-bubble--chat">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="b-chat" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#818cf8"/>
                      <stop offset="100%" stopColor="#60a5fa"/>
                    </linearGradient>
                  </defs>
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="url(#b-chat)"/>
                  <circle cx="8" cy="10" r="1" fill="white"/>
                  <circle cx="12" cy="10" r="1" fill="white"/>
                  <circle cx="16" cy="10" r="1" fill="white"/>
                </svg>
              </div>

              {/* Smile bubble — lower right */}
              <div className="nos-char-bubble nos-char-bubble--smile">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="b-smile" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#c595fc"/>
                      <stop offset="100%" stopColor="#818cf8"/>
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="10" fill="url(#b-smile)"/>
                  <path d="M8.5 14c1 1.5 2.5 2 3.5 2s2.5-.5 3.5-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <circle cx="9.5" cy="10" r="1.5" fill="white"/>
                  <circle cx="14.5" cy="10" r="1.5" fill="white"/>
                </svg>
              </div>

              <img src={heroImpact} className="nos-hero-img" alt="" fetchPriority="high" />
            </div>
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

      {/* FINCONECTA */}
      <section className="nos-fc-section" aria-label={t.teamLabel}>
        <div className="container nos-fc-inner">
          <div className="nos-fc-left reveal">
            <div className="nos-fc-badge">{t.teamLabel}</div>
            <img src={logoFC} className="nos-fc-logo-img" alt="FinConecta AI" loading="lazy" />
            <h2 className="nos-fc-h2">{t.fcHeading}</h2>
            <p className="nos-fc-body">{t.teamDesc}</p>
            <a
              href={t.fcLinkHref}
              className="nos-fc-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.fcLink}
            </a>
          </div>
          <div className="nos-fc-right reveal" aria-hidden="true">
            <img src={grandma3} className="nos-fc-img" alt="" loading="lazy" />
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
            <img src={pedroImg} className="nos-origin-img" alt="" loading="lazy" />
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
