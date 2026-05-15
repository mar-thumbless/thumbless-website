import Link from 'next/link';
import { getTranslation, isValidLocale, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactCTA } from '@/components/home/ContactCTA';
import { Check, ArrowRight, Zap } from 'lucide-react';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function AutomationPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'en';
  const t = getTranslation(locale);
  const a = t.automationAI;
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
            <span className="badge-dark mb-6">{a.badge}</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">{a.automation.title}</h1>
            <p className="text-lg text-slate-200 leading-relaxed">{a.automation.description}</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6CACE4, #4A8EC7)' }}>
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Automation Features</h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {a.automation.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50">
                  <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <Link href={navLink('/contact')} className="btn-primary text-base px-8 py-4">
              {a.cta} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <ContactCTA locale={locale} t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
