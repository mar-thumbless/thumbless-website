import Link from 'next/link';
import { getTranslation, isValidLocale, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactCTA } from '@/components/home/ContactCTA';
import { Check, ArrowRight, Database } from 'lucide-react';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function CRMERPPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'en';
  const t = getTranslation(locale);
  const c = t.crm;
  const navLink = (path: string) => `/${locale}${path}`;

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
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">{c.title}</h1>
            <p className="text-xl text-primary-600 font-semibold mb-6">{c.subtitle}</p>
            <p className="text-lg text-slate-200 leading-relaxed">{c.description}</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">What&apos;s included</h2>
                <ul className="space-y-4">
                  {c.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'linear-gradient(135deg, #6CACE4, #4A8EC7)' }}>
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      <span className="text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #6CACE4, #4A8EC7)' }}>
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900">Platforms We Work With</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {c.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200 bg-white text-slate-700">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={navLink('/contact')} className="btn-primary w-full justify-center text-base py-4">
                  {c.cta} <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA locale={locale} t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
