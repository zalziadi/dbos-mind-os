"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang, t } from "@/lib/translations";

type AnyTranslations = typeof t.en | typeof t.ar;

interface LangContextType {
  lang: Lang;
  tr: AnyTranslations;
  toggle: () => void;
  isRTL: boolean;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  tr: t.en,
  toggle: () => {},
  isRTL: false,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("dbos-lang") as Lang | null;
    if (saved === "ar" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    localStorage.setItem("dbos-lang", lang);
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "ar" : "en"));

  return (
    <LangContext.Provider value={{ lang, tr: t[lang], toggle, isRTL: lang === "ar" }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
