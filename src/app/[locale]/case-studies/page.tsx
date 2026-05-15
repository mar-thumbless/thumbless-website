import { getTranslation, isValidLocale, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactCTA } from '@/components/home/ContactCTA';
import { TrendingUp } from 'lucide-react';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function CaseStudiesPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'en';
  const t = getTranslation(locale);
  const c = t.caseStudies;

  return (
    <>
      <Header locale={locale} t={t} />
      <main>
        <section className="relative pt-32 pb-20 section-dark overflow-hidden">
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(108,172,228,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,172,228,0.04) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="badge-dark mb-6">{c.badge}</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">{c.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed">{c.subtitle}</p>
          </div>
        </section>

        <section className="py-20 section-dark-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {c.items.map((item, i) => (
                <div key={i} className="card-dark p-8 rounded-2xl flex flex-col gap-5">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4"
                      style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.9)' }}>
                      {item.industry}
                    </span>
                    <h2 className="text-xl font-bold text-white mb-3">{item.title}</h2>
                    <p className="text-slate-200 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2 p-4 rounded-xl"
                    style={{ background: 'rgba(108,172,228,0.08)', border: '1px solid rgba(108,172,228,0.15)' }}>
                    <TrendingUp className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className="text-primary-300 font-semibold text-sm">{item.result}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/15 border border-white/30 text-white/90">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA locale={locale} t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
