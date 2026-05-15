import { getTranslation, isValidLocale, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function PrivacyPolicyPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'en';
  const t = getTranslation(locale);
  const p = t.privacy;

  return (
    <>
      <Header locale={locale} t={t} />
      <main>
        <section className="pt-32 pb-20 section-dark">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white mb-3">{p.title}</h1>
            <p className="text-slate-500 mb-12">{p.lastUpdated}</p>
            <div className="space-y-8">
              {p.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-lg font-semibold text-white mb-3">{section.title}</h2>
                  <p className="text-slate-400 leading-relaxed text-sm">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
