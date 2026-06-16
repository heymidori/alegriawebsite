import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { useLang } from './context/LanguageContext';
import { translations } from './i18n/translations';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Impact from './pages/Impact';
import Comunidades from './pages/Comunidades';
import Familias from './pages/Familias';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const SITE_URL = 'https://alegria.finconecta.com';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const pageMeta: Record<string, { es: { title: string; desc: string }; en: { title: string; desc: string } }> = {
  '/': {
    es: { title: 'Alegría — Compañía con IA para adultos mayores', desc: 'Alegría es un compañero de IA para adultos mayores, personas con deterioro cognitivo y adultos con discapacidades. Por teléfono o app, un amigo presente cada día.' },
    en: { title: 'Alegría — AI Companion for Older Adults', desc: 'Alegría is an AI companion for older adults, elderly people with cognitive decline, and adults with disabilities. By phone or app, a friend who is present every day.' },
  },
  '/producto': {
    es: { title: 'Producto — Alegría', desc: 'Una voz que te conoce, te acompaña y te da estructura — sin pantallas ni complicaciones. Alegría es paciente, cálida y siempre disponible.' },
    en: { title: 'Product — Alegría', desc: 'A voice that knows you, keeps you company, and gives you structure — no screens, no complications. Alegría is patient, warm, and always available.' },
  },
  '/comunidades': {
    es: { title: 'Comunidades — Alegría', desc: 'Alegría se integra en tu flujo de trabajo de cuidado existente — tu equipo lo configura, tus residentes lo usan, y tu organización obtiene visibilidad real.' },
    en: { title: 'Communities — Alegría', desc: "Alegría fits into your existing care workflow — your staff configures it, your residents use it, and your organization gets real visibility." },
  },
  '/familias': {
    es: { title: 'Familias — Alegría', desc: 'Configuras el compañero en minutos — su historia, sus personas, sus rutinas — y Alegría se encarga del resto.' },
    en: { title: 'Families — Alegría', desc: 'You set up the companion in minutes — their stories, their people, their routines — and Alegría handles the rest.' },
  },
  '/nosotros': {
    es: { title: 'Nosotros — Alegría', desc: 'Alegría fue construida con la convicción de que cada persona mayor merece compañía constante y cálida, sin importar dónde vivan o quién las cuide.' },
    en: { title: 'About — Alegría', desc: 'Alegría was built on the belief that every older adult deserves consistent, warm companionship, regardless of where they live or who cares for them.' },
  },
  '/contacto': {
    es: { title: 'Contacto — Alegría', desc: 'Cuéntanos sobre tu comunidad, tu familia o tu proyecto. Te respondemos en menos de 24 horas.' },
    en: { title: 'Contact — Alegría', desc: 'Tell us about your community, your family, or your project. We reply within 24 hours.' },
  },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function LangSync() {
  const { lang } = useLang();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function SEO() {
  const { pathname } = useLocation();
  const { lang } = useLang();
  useEffect(() => {
    const entry = pageMeta[pathname]?.[lang];
    const isKnownRoute = Boolean(entry);
    const title = entry ? entry.title : translations[lang].notFound.title;
    const description = entry ? entry.desc : translations[lang].notFound.desc;
    const url = `${SITE_URL}${pathname}`;

    document.title = title;
    setMetaTag('name', 'robots', isKnownRoute ? 'index, follow' : 'noindex, nofollow');

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = isKnownRoute ? url : SITE_URL;

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:image', OG_IMAGE);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Alegría AI');
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', OG_IMAGE);
  }, [pathname, lang]);
  return null;
}

function Layout() {
  return (
    <>
      <LangSync />
      <SEO />
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<Product />} />
        <Route path="/comunidades" element={<Comunidades />} />
        <Route path="/familias" element={<Familias />} />
        <Route path="/mercados" element={<Navigate to="/comunidades" replace />} />
        <Route path="/nosotros" element={<Impact />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </LanguageProvider>
  );
}
