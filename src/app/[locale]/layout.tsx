import type { Metadata } from 'next';
import { locales, getTranslation, isValidLocale } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { LangSetter } from '@/components/LangSetter';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { CookieConsentProvider } from '@/lib/cookie-consent';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : 'en';
  const t = getTranslation(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', cs: '/cs', de: '/de' },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: 'website',
      locale,
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'en';
  return (
    <CookieConsentProvider>
      <LangSetter locale={locale} />
      {children}
      <CookieBanner />
    </CookieConsentProvider>
  );
}
