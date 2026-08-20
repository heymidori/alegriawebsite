import { useNavigate } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import alegriaPhone from "../assets/images/alegriaphone.webp";
import bgHomeHero from "../assets/images/BGHomeHero.webp";
import bgDark1 from "../assets/images/BGDark1.webp";
import bgDark2 from "../assets/images/BGDark2.webp";
import bgDark3 from "../assets/images/BGDark3.webp";
import PhoneMockup from "../assets/images/PhoneMockupAlegria.webp";
import grandma2 from "../assets/images/grandma2.webp";
import grandmaKnitting from "../assets/images/GrandmaKnitting.webp";
import manPainting from "../assets/images/ManPainting.webp";
import grandpaWaving from "../assets/images/GrandpaWaving.webp";

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
          <div className="hero-badge hero-anim hero-anim-1">
            <span className="hero-badge-full">{t.heroBadge}</span>
            <span className="hero-badge-short">{t.heroBadgeShort}</span>
          </div>
          <h1 id="hero-heading">
            {t.heroH1a}
            <br />
            <span className="accent">{t.heroH1b}</span>
          </h1>
          <p className="hero-sub hero-anim hero-anim-2">{t.heroSub}</p>
          <div className="hero-btns hero-anim hero-anim-3">
            <button
              className="btn-primary"
              onClick={() => navigate("/comunidades")}
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
              onClick={() => navigate("/familias")}
              aria-label={t.btn2Aria}
            >
              {t.btn2}
            </button>
          </div>
        </div>

        {/* ── Phone + floating glass bubbles ── */}
        <div className="hero-phone-wrap" aria-hidden="true">
          {/* Background blob */}
          <img src={bgHomeHero} className="hero-phone-bg" alt="" fetchPriority="high" />
          {/* Bubble 1 — top right: greeting */}
          <div className="hero-bubble hero-bubble--1">
            <div className="hero-bubble-avatar">💜</div>
            <div className="hero-bubble-body">
              <p className="hero-bubble-name">{t.bubble1Name}</p>
              <p className="hero-bubble-msg">{t.bubble1Msg}</p>
            </div>
          </div>

          {/* Bubble 2 — left: active call status */}
          <div className="hero-bubble hero-bubble--2">
            <span className="hero-bubble-dot" />
            <div className="hero-bubble-body">
              <p className="hero-bubble-name">{t.bubble2Label}</p>
              <p className="hero-bubble-msg">{t.bubble2Time}</p>
            </div>
          </div>

          {/* Phone image */}
          <img src={alegriaPhone} className="hero-phone-img" alt="" fetchPriority="high" width={545} height={1100} />

          {/* Bubble 3 — bottom left: reply */}
          <div className="hero-bubble hero-bubble--3">
            <div className="hero-bubble-avatar hero-bubble-avatar--blue">🎙️</div>
            <div className="hero-bubble-body">
              <p className="hero-bubble-msg">{t.bubble3Msg}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section
        className="problem-section"
        aria-labelledby="problem-heading"
        style={{ backgroundImage: `url(${bgDark1})` }}
      >
        <div className="container">
          <div className="section-label reveal">{t.problemLabel}</div>
          <h2 id="problem-heading" className="reveal">{t.problemH2}</h2>
          <p className="section-intro reveal">{t.problemIntro}</p>
          <div className="problem-grid" role="list">
            {t.problems.map(({ icon, title, desc }, i) => (
              <div
                className="problem-card reveal"
                role="listitem"
                key={title}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="problem-icon" aria-hidden="true">
                  {icon}
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <p className="problem-closing reveal">{t.problemClosing}</p>
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
            <div className="section-label reveal">{t.serveLabel}</div>
            <h2 id="serve-heading" className="reveal">
              {t.serveH2a}<br />
              <span className="accent">{t.serveH2b}</span>
            </h2>
            <p className="section-intro reveal">{t.serveIntro}</p>
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
            ].map(({ img, alt, title, desc }, i) => (
              <article
                className="serve-card reveal"
                role="listitem"
                key={title}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="serve-card-img-wrap">
                  <img src={img} alt={alt} className="serve-card-img" loading="lazy" />
                </div>
                <div className="serve-card-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <button
                    className="serve-card-btn"
                    onClick={() => navigate('/comunidades')}
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
          <div className="ba-header-area reveal">
            <div className="section-label">{t.baLabel}</div>
            <h2 id="ba-heading">{t.baH2}</h2>
          </div>
          <div className="ba-legend reveal" aria-hidden="true">
            <span className="ba-legend-pill ba-legend-pill--before">
              {t.baBeforeHeader}
            </span>
            <span className="ba-legend-pill ba-legend-pill--after">
              {t.baAfterHeader}
            </span>
          </div>
          <div className="ba-pairs" role="table" aria-label={t.baTableAria}>
            {t.baBefore.map((beforeItem, i) => (
              <div
                className="ba-pair reveal"
                role="row"
                key={beforeItem}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
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
            <div className="what-visual reveal" aria-hidden="true">
              <img
                src={grandma2}
                alt=""
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
            </div>
            <div>
              <div className="section-label reveal">{t.whatLabel}</div>
              <h2 id="what-heading" className="reveal">{t.whatH2}</h2>
              <p className="section-intro reveal">{t.whatIntro}</p>
              <div className="what-features" role="list">
                {t.features.map(({ icon, title, desc }, i) => (
                  <div
                    className="feature-item reveal"
                    role="listitem"
                    key={title}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
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
              <h2 id="flex-heading" className="flex-h2 reveal" style={{ transitionDelay: "70ms" }}>
                <span className="flex-h2-plain">
                  {t.flexH2.slice(0, t.flexH2.indexOf(". ") + 1)}
                </span>
                <span className="flex-h2-gradient">
                  {t.flexH2.slice(t.flexH2.indexOf(". ") + 1)}
                </span>
              </h2>
              <p className="flex-desc reveal" style={{ transitionDelay: "140ms" }}>{t.flexDesc}</p>
              <p className="flex-closing reveal" style={{ transitionDelay: "210ms" }}>{t.flexClosing}</p>
            </div>

            {/* RIGHT — mockup + floating cards */}
            <div className="flex-mockup-wrap reveal" aria-hidden="true">
              <img src={PhoneMockup} alt="" className="flex-mockup-img" loading="lazy" />
              <div
                className="flex-float-card flex-float-card--phone reveal"
                style={{ transitionDelay: "120ms" }}
              >
                <span className="flex-float-emoji">{t.flexCards[0].icon}</span>
                <div>
                  <p className="flex-float-title">{t.flexCards[0].title}</p>
                  <p className="flex-float-tag">{t.flexCards[0].tag}</p>
                </div>
              </div>
              <div
                className="flex-float-card flex-float-card--app reveal"
                style={{ transitionDelay: "220ms" }}
              >
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
            className="reveal"
            style={{
              color: "white",
              fontSize: "clamp(1.6rem,3vw,2.4rem)",
              marginBottom: "1rem",
            }}
          >
            {t.ctaH2}
          </h2>
          <p
            className="reveal"
            style={{
              color: "rgba(255,255,255,0.85)",
              marginBottom: "2rem",
              fontSize: "1.05rem",
              transitionDelay: "80ms",
            }}
          >
            {t.ctaP}
          </p>
          <button
            className="btn-secondary reveal"
            onClick={() => navigate("/mercados")}
            style={{
              background: "white",
              color: "var(--purple-mid)",
              borderColor: "white",
              transitionDelay: "160ms",
            }}
          >
            {t.ctaBtn}
          </button>
        </div>
      </section>
    </main>
  );
}
