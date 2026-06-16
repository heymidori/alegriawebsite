import { createContext, useContext, useState } from 'react';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'alegria-lang';

function getInitialLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'es' || stored === 'en') return stored;
  return 'es';
}

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LangContextType>({ lang: 'es', setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);
  function setLang(l: Lang) {
    localStorage.setItem(STORAGE_KEY, l);
    setLangState(l);
  }
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  return useContext(LanguageContext);
}
