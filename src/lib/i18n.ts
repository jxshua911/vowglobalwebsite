export type Locale = "en";

export function getLocale(): Locale {
  return "en";
}

export function useLocale(): Locale {
  return "en";
}

export function setLocale(_locale: Locale = "en") {
  document.documentElement.lang = "en";
}
