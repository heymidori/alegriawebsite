import { createContext, useContext, useState } from 'react';

export type Lang = 'es' | 'en';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LangContextType>({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
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
