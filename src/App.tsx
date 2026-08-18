import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { useLang } from './context/LanguageContext';
import { translations } from './i18n/translations';
import Nav from './components/Nav';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Product = lazy(() => import('./pages/Product'));
const Impact = lazy(() => import('./pages/Impact'));
const Comunidades = lazy(() => import('./pages/Comunidades'));
const Familias = lazy(() => import('./pages/Familias'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const SITE_URL = 'https://alegria.finconecta.com';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const pageMeta: Record<string, { es: { title: string; desc: string }; en: { title: string; desc: string } }> = {
  '/': {
    es: { title: 'Alegría — Compañía con IA para adultos mayores', desc: 'Alegría es un compañero de IA para adultos mayores, personas con deterioro cognitivo y adultos con discapacidades. Por teléfono o app, un amigo presente cada día.' },
    en: { title: 'Alegría — AI Companion for Older Adults', desc: 'Alegría is an AI companion for older adults, elderly people with cognitive decline, and adults with disabilities. By phone or app, a friend who is present every day.' },
  },
  '/producto': {
    es: { title: 'Cómo funciona Alegría — IA por voz para mayores', desc: 'Conversación natural, recordatorios de medicación, check-ins diarios y resúmenes para cuidadores — sin pantallas, sin apps. Privacidad desde el diseño.' },
    en: { title: 'How Alegría Works — Voice AI for Older Adults', desc: 'Natural conversation, medication reminders, daily check-ins and caregiver summaries — no screens, no apps required. Privacy by design.' },
  },
  '/comunidades': {
    es: { title: 'Alegría para Comunidades y Residencias de Cuidado', desc: 'Alegría se integra en el flujo de trabajo de cuidado — tu equipo lo configura, tus residentes lo usan, tu organización obtiene visibilidad real sobre bienestar y engagement.' },
    en: { title: 'Alegría for Senior Living Communities', desc: 'Alegría fits into your existing care workflow — your staff configures it, your residents use it, and your organization gets real visibility into wellbeing and engagement.' },
  },
  '/familias': {
    es: { title: 'Alegría para Familias — Compañía diaria para tus seres queridos', desc: 'Configura el compañero de IA en minutos: sus temas favoritos, sus rutinas, sus personas. Alegría cuida a tu familiar cuando tú no puedes estar presente.' },
    en: { title: 'Alegría for Families — Daily AI Companion for Loved Ones', desc: 'Set up the AI companion in minutes — their favorite topics, routines, and people. Alegría keeps your loved one company when you cannot be there.' },
  },
  '/nosotros': {
    es: { title: 'Sobre Alegría — IA construida para la dignidad y el cuidado', desc: 'Alegría fue construida con la convicción de que cada persona mayor merece compañía constante y cálida, sin importar dónde vivan o quién las cuide.' },
    en: { title: 'About Alegría — AI Built for Dignity and Care', desc: 'Alegría was built on the belief that every older adult deserves consistent, warm companionship, regardless of where they live or who cares for them.' },
  },
  '/contacto': {
    es: { title: 'Contacto — Habla con el equipo de Alegría', desc: 'Cuéntanos sobre tu comunidad, tu familia o tu proyecto. Respondemos en menos de 24 horas.' },
    en: { title: 'Contact — Talk to the Alegría Team', desc: 'Tell us about your community, your family, or your project. We reply within 24 hours.' },
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
      <Suspense fallback={null}>
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
      </Suspense>
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
