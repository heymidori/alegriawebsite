import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoHorizontal from '../assets/images/LogoAlegriaHorizontal.png';
import { useLang } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { lang, setLang } = useLang();
  const t = translations[lang].nav;

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav role="navigation" aria-label={t.mainNav}>
      <button
        className="nav-logo"
        onClick={() => { navigate('/'); closeMenu(); }}
        aria-label={t.goHome}
      >
        <img src={logoHorizontal} alt="Alegría AI" className="nav-logo-img" />
      </button>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks" role="menubar">
        {t.links.map(({ to, label }) => (
          <li key={to} role="none">
            <NavLink
              role="menuitem"
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          </li>
        ))}
        <li role="none">
          <NavLink
            role="menuitem"
            to="/contacto"
            className="nav-cta"
            onClick={closeMenu}
          >
            {t.cta}
          </NavLink>
        </li>
      </ul>

      <button
        className="lang-toggle"
        onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
        aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      >
        <span className={lang === 'es' ? 'lang-active' : ''}>ES</span>
        <span className="lang-sep">|</span>
        <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
      </button>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label={t.openMenu}
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
