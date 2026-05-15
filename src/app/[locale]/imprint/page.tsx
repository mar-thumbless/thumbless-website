import { getTranslation, isValidLocale, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function ImprintPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'en';
  const t = getTranslation(locale);
  const imp = t.imprint;

  return (
    <>
      <Header locale={locale} t={t} />
      <main>
        <section className="pt-32 pb-20 section-dark">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white mb-12">{imp.title}</h1>
            <div className="space-y-6">
              {imp.sections.map((section, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 py-4 border-b border-white/5">
                  <div className="text-slate-500 text-sm font-medium">{section.title}</div>
                  <div className="col-span-2 text-slate-300 text-sm">
                    {Array.isArray(section.content)
                      ? section.content.map((line, j) => <div key={j}>{line}</div>)
                      : section.content
                    }
                  </div>
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
