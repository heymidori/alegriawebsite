import { useNavigate } from 'react-router-dom';
import AlegriaLogo from './AlegriaLogo';
import { useLang } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export default function Footer() {
  const navigate = useNavigate();
  const { lang } = useLang();
  const t = translations[lang].footer;
  const navLinks = translations[lang].nav.links;

  return (
    <footer role="contentinfo" aria-label={t.footerAria}>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.75rem' }}>
              <AlegriaLogo gradientId="footerLogoGrad" />
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white' }}>
                  <strong>Alegria</strong> AI
                </div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)' }}>
                  Powered by FinConecta
                </div>
              </div>
            </div>
            <p>{t.brandDesc}</p>
          </div>

          <div className="footer-col">
            <h4>{t.pagesLabel}</h4>
            <ul role="list">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <a
                    role="link"
                    tabIndex={0}
                    onClick={() => { navigate(to); window.scrollTo({ top: 0 }); }}
                    onKeyDown={(e) => e.key === 'Enter' && navigate(to)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.contactLabel}</h4>
            <ul role="list">
              <li><a href="https://finconecta.com" target="_blank" rel="noopener noreferrer">FinConecta.com</a></li>
              <li><a>{t.privacyLink}</a></li>
              <li><a>{t.termsLink}</a></li>
              <li><a>{t.accessibilityLink}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t.copyright}</p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
            {t.wcag}
          </p>
        </div>
      </div>

      <div className="footer-deco" aria-hidden="true">
        <svg viewBox="0 0 617.21 415.99" fill="white">
          <path d="M223.62,221.2c4.02-.83,5.89-5.57,3.44-8.86-11.86-15.91-26.45-25.97-44.82-31-32.23-8.83-62.68-2.15-90.48,14.27-23.22,13.72-44.98,29.89-68.27,45.86-2.41,1.65-5.69,1.19-7.55-1.06-4.47-5.4-9.32-11.27-14.64-17.71-2-2.41-1.66-6,.77-7.98,45.6-37.29,91.23-71.84,153.38-70.77,49.74.86,87.82,22.01,110.29,68.08,2.09,4.29,7.42,7.86,12.06,9.91,20.18,8.88,41,16.35,60.85,25.87,7.95,3.81,13.04,4.73,19.24-1.97,8.27-8.94,21.72-16.02,24.53-26.22,2.62-9.52-5.47-22.16-9.33-33.26-15.17-43.63-22.25-87.72-8.32-133.12,6.47-21.09,19.51-36.7,39.61-46.09,43-20.08,85.94,3.75,91.42,50.8,4.53,38.88-6.67,74.24-26.05,107.16-9.9,16.81-21.74,32.52-33.28,48.31-3.89,5.32-5.4,9.45-.81,14.86,10.12,11.9,18.86,25.25,30.26,35.74,37.44,34.47,81.53,36.28,122.62,6.44,1.91-1.39,3.88-2.7,6.11-4.18,2.52-1.67,5.9-1.06,7.69,1.37,4.61,6.29,9.08,12.37,13.77,18.78,1.8,2.45,1.33,5.89-1.04,7.79-33.09,26.38-68.71,40.43-110.95,29.67-40.2-10.24-69.04-36.68-94.67-69.45-2.04-2.61-5.89-2.88-8.3-.62-6.86,6.44-13.41,12.58-20.05,18.81-2.06,1.93-2.37,5.08-.75,7.39,6.42,9.1,12.81,17.52,18,26.63,12.12,21.29,16.26,44.07,8.46,67.87-9.16,27.94-34.85,44.58-62.28,40.99-27.76-3.64-50.9-27.27-50.43-56.22.27-16.81,5.87-33.91,11.35-50.11,2.83-8.36,8.64-15.71,14.65-24.58,1.93-2.85.9-6.75-2.19-8.26-8.99-4.4-18.03-8.84-28.01-13.73-3.59-1.76-7.82.67-8.12,4.65-.38,4.88-.67,8.77-.93,12.66-4.37,67.35-54.82,122.31-117.84,132.82-104.69,17.46-137.69-38.92-73.04-123.08,13.23-17.22,30.09-30.77,50.2-40.03,21.98-10.12,45.54-16.88,68.54-24.74,4.63-1.58,9.46-2.57,14.92-3.68Z" />
        </svg>
      </div>
    </footer>
  );
}
