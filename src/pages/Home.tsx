import { useNavigate } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import heroChar from "../assets/images/heroimage.png";
import bgDark1 from "../assets/images/BGDark1.png";
import bgDark2 from "../assets/images/BGDark2.png";
import bgDark3 from "../assets/images/BGDark3.png";
import PhoneMockup from "../assets/images/PhoneMockupAlegria.png";
import grandma2 from "../assets/images/grandma2.png";
import grandmaKnitting from "../assets/images/GrandmaKnitting.jpeg";
import manPainting from "../assets/images/ManPainting.jpeg";
import grandpaWaving from "../assets/images/GrandpaWaving.jpeg";

export default function Home() {
  const navigate = useNavigate();
  const revealRef = useReveal();
  const { lang } = useLang();
  const t = translations[lang].home;

  return (
    <main
      ref={revealRef}
      style={{ paddingTop: 0 }}
      role="main"
      aria-label="Inicio"
    >
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-heading">
        {/* ── Text content ── */}
        <div className="hero-text">
          <div className="hero-badge">{t.heroBadge}</div>
          <h1 id="hero-heading">
            {t.heroH1a}
            <br />
            <span className="accent">{t.heroH1b}</span>
          </h1>
          <p className="hero-sub">{t.heroSub}</p>
          <div className="hero-btns">
            <button
              className="btn-primary"
              onClick={() => navigate("/producto")}
              aria-label={t.btn1Aria}
            >
              {t.btn1}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate("/mercados")}
              aria-label={t.btn2Aria}
            >
              {t.btn2}
            </button>
          </div>
        </div>

        {/* ── Character illustration ── */}
        <img
          src={heroChar}
          className="hero-character"
          alt=""
          aria-hidden="true"
        />
      </section>

      {/* PROBLEM */}
      <section
        className="problem-section"
        aria-labelledby="problem-heading"
        style={{ backgroundImage: `url(${bgDark1})` }}
      >
        <div className="container">
          <div className="section-label">{t.problemLabel}</div>
          <h2 id="problem-heading">{t.problemH2}</h2>
          <p className="section-intro">{t.problemIntro}</p>
          <div className="problem-grid" role="list">
            {t.problems.map(({ icon, title, desc }) => (
              <div className="problem-card reveal" role="listitem" key={title}>
                <div className="problem-icon" aria-hidden="true">
                  {icon}
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <p className="problem-closing">{t.problemClosing}</p>
        </div>
      </section>

      {/* A QUIÉN SIRVE */}
      <section
        id="a-quien-sirve"
        className="serve-section"
        aria-labelledby="serve-heading"
      >
        <div className="serve-deco serve-deco--left" aria-hidden="true" />
        <div className="serve-deco serve-deco--right" aria-hidden="true" />
        <div className="container">
          <div className="serve-header">
            <div className="section-label">{t.serveLabel}</div>
            <h2 id="serve-heading">
              {t.serveH2a}<br />
              <span className="accent">{t.serveH2b}</span>
            </h2>
            <p className="section-intro">{t.serveIntro}</p>
          </div>
          <div className="serve-grid" role="list">
            {[
              {
                img: grandmaKnitting,
                alt: t.serveCards[0].title,
                ...t.serveCards[0],
              },
              {
                img: grandpaWaving,
                alt: t.serveCards[1].title,
                ...t.serveCards[1],
              },
              {
                img: manPainting,
                alt: t.serveCards[2].title,
                ...t.serveCards[2],
              },
            ].map(({ img, alt, title, desc }) => (
              <article
                className="serve-card reveal"
                role="listitem"
                key={title}
              >
                <div className="serve-card-img-wrap">
                  <img src={img} alt={alt} className="serve-card-img" />
                </div>
                <div className="serve-card-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <button
                    className="serve-card-btn"
                    onClick={() => navigate('/mercados')}
                  >
                    {t.serveBtn}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE VS AFTER */}
      <section
        className="ba-section"
        aria-labelledby="ba-heading"
        style={{ backgroundImage: `url(${bgDark2})` }}
      >
        <div className="ba-glow ba-glow--left" aria-hidden="true" />
        <div className="ba-glow ba-glow--right" aria-hidden="true" />
        <div className="container">
          <div className="ba-header-area">
            <div className="section-label">{t.baLabel}</div>
            <h2 id="ba-heading">{t.baH2}</h2>
          </div>
          <div className="ba-legend" aria-hidden="true">
            <span className="ba-legend-pill ba-legend-pill--before">
              {t.baBeforeHeader}
            </span>
            <span className="ba-legend-pill ba-legend-pill--after">
              {t.baAfterHeader}
            </span>
          </div>
          <div className="ba-pairs" role="table" aria-label={t.baTableAria}>
            {t.baBefore.map((beforeItem, i) => (
              <div className="ba-pair reveal" role="row" key={beforeItem}>
                <div className="ba-pill ba-pill--before" role="cell">
                  {beforeItem}
                </div>
                <div className="ba-arrow" aria-hidden="true">
                  →
                </div>
                <div className="ba-pill ba-pill--after" role="cell">
                  {t.baAfter[i]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS ALEGRÍA */}
      <section aria-labelledby="what-heading">
        <div className="container">
          <div className="what-grid">
            <div className="what-visual" aria-hidden="true">
              <img
                src={grandma2}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
            </div>
            <div>
              <div className="section-label">{t.whatLabel}</div>
              <h2 id="what-heading">{t.whatH2}</h2>
              <p className="section-intro">{t.whatIntro}</p>
              <div className="what-features" role="list">
                {t.features.map(({ icon, title, desc }) => (
                  <div className="feature-item" role="listitem" key={title}>
                    <div className="feature-icon" aria-hidden="true">
                      {icon}
                    </div>
                    <div className="feature-text">
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLEXIBLE BY DESIGN */}
      <section className="flex-section" aria-labelledby="flex-heading" style={{ backgroundImage: `url(${bgDark3})` }}>
        <div className="flex-blob flex-blob--tl" aria-hidden="true" />
        <div className="flex-blob flex-blob--br" aria-hidden="true" />
        <div className="container">
          <div className="flex-two-col">

            {/* LEFT — text content */}
            <div className="flex-text-col">
              <div className="section-label reveal">{t.flexLabel}</div>
              <h2 id="flex-heading" className="flex-h2 reveal">
                <span className="flex-h2-plain">
                  {t.flexH2.slice(0, t.flexH2.indexOf(". ") + 1)}
                </span>
                <span className="flex-h2-gradient">
                  {t.flexH2.slice(t.flexH2.indexOf(". ") + 1)}
                </span>
              </h2>
              <p className="flex-desc reveal">{t.flexDesc}</p>
              <p className="flex-closing reveal">{t.flexClosing}</p>
            </div>

            {/* RIGHT — mockup + floating cards */}
            <div className="flex-mockup-wrap" aria-hidden="true">
              <img src={PhoneMockup} alt="" className="flex-mockup-img" />
              <div className="flex-float-card flex-float-card--phone">
                <span className="flex-float-emoji">{t.flexCards[0].icon}</span>
                <div>
                  <p className="flex-float-title">{t.flexCards[0].title}</p>
                  <p className="flex-float-tag">{t.flexCards[0].tag}</p>
                </div>
              </div>
              <div className="flex-float-card flex-float-card--app">
                <span className="flex-float-emoji">{t.flexCards[1].icon}</span>
                <div>
                  <p className="flex-float-title">{t.flexCards[1].title}</p>
                  <p className="flex-float-tag">{t.flexCards[1].tag}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section
        style={{
          background: "var(--gradient-accent)",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              color: "white",
              fontSize: "clamp(1.6rem,3vw,2.4rem)",
              marginBottom: "1rem",
            }}
          >
            {t.ctaH2}
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              marginBottom: "2rem",
              fontSize: "1.05rem",
            }}
          >
            {t.ctaP}
          </p>
          <button
            className="btn-secondary"
            onClick={() => navigate("/mercados")}
            style={{
              background: "white",
              color: "var(--purple-mid)",
              borderColor: "white",
            }}
          >
            {t.ctaBtn}
          </button>
        </div>
      </section>
    </main>
  );
}
