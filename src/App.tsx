import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { useLang } from './context/LanguageContext';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Impact from './pages/Impact';
import Markets from './pages/Markets';
import Contact from './pages/Contact';

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

function Layout() {
  return (
    <>
      <LangSync />
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<Product />} />
        <Route path="/mercados" element={<Markets />} />
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
