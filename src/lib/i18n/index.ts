import { en } from './en';
import { cs } from './cs';
import { de } from './de';
import type { Locale, Translation } from './types';

export type { Locale, Translation };

export const locales: Locale[] = ['cs', 'de', 'en'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  cs: 'Čeština',
  de: 'Deutsch',
};

export const translations: Record<Locale, Translation> = { en, cs, de };

export function getTranslation(locale: Locale): Translation {
  return translations[locale] ?? translations.en;
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
