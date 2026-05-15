import Link from 'next/link';
import { getTranslation, isValidLocale, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactCTA } from '@/components/home/ContactCTA';
import { Check, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function WebDevPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'en';
  const t = getTranslation(locale);
  const w = t.webDev;
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
            <span className="badge-dark mb-6">{w.badge}</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">{w.title}</h1>
            <p className="text-xl text-primary-600 font-semibold mb-6">{w.subtitle}</p>
            <p className="text-lg text-slate-200 leading-relaxed">{w.description}</p>
          </div>
        </section>

        <section className="py-20 section-dark-alt">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {w.features.map((f, i) => (
                <li key={i} className="card-dark flex items-start gap-3 p-5 rounded-xl">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'linear-gradient(135deg, #6CACE4, #4A8EC7)' }}>
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  <span className="text-slate-300 text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Link href={navLink('/contact')} className="btn-primary text-base px-8 py-4">
                {w.cta} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <ContactCTA locale={locale} t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
