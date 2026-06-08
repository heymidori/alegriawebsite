import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { useLang } from './context/LanguageContext';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Impact from './pages/Impact';
import Comunidades from './pages/Comunidades';
import Familias from './pages/Familias';
import Contact from './pages/Contact';

const pageTitles: Record<string, { es: string; en: string }> = {
  '/':           { es: 'Alegría — Compañía con IA para adultos mayores', en: 'Alegría — AI Companion for Older Adults' },
  '/producto':   { es: 'Producto — Alegría', en: 'Product — Alegría' },
  '/comunidades':{ es: 'Comunidades — Alegría', en: 'Communities — Alegría' },
  '/familias':   { es: 'Familias — Alegría', en: 'Families — Alegría' },
  '/nosotros':   { es: 'Nosotros — Alegría', en: 'About — Alegría' },
  '/contacto':   { es: 'Contacto — Alegría', en: 'Contact — Alegría' },
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

function PageTitle() {
  const { pathname } = useLocation();
  const { lang } = useLang();
  useEffect(() => {
    const entry = pageTitles[pathname];
    document.title = entry ? entry[lang] : 'Alegría';
  }, [pathname, lang]);
  return null;
}

function Layout() {
  return (
    <>
      <LangSync />
      <PageTitle />
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
        <Route path="*" element={<Navigate to="/" replace />} />
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
