import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export default function NotFound() {
  const { lang } = useLang();
  const t = translations[lang].notFound;

  return (
    <main
      role="main"
      aria-label={t.title}
      style={{
        paddingTop: 72,
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '6rem 1.5rem',
      }}
    >
      <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '0.75rem' }}>{t.title}</h2>
      <p style={{ color: 'var(--gray)', marginBottom: '2rem', maxWidth: 480 }}>{t.desc}</p>
      <Link to="/" className="btn-primary">{t.cta}</Link>
    </main>
  );
}
