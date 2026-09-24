import { useEffect, useState } from "react";

export type Locale = "en" | "sw";

export function getLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("vow-locale");
  return saved === "sw" ? "sw" : "en";
}

export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>(getLocale);
  useEffect(() => {
    const onChange = () => setLocale(getLocale());
    window.addEventListener("vow-locale-change", onChange);
    return () => window.removeEventListener("vow-locale-change", onChange);
  }, []);
  return locale;
}

export function setLocale(locale: Locale) {
  localStorage.setItem("vow-locale", locale);
  document.documentElement.lang = locale;
  window.dispatchEvent(new Event("vow-locale-change"));
}
