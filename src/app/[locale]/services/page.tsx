import Link from 'next/link';
import { getTranslation, isValidLocale, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactCTA } from '@/components/home/ContactCTA';
import { Database, Globe, Zap, Brain, LayoutDashboard, Link2, ArrowRight, Check } from 'lucide-react';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const icons = [Database, Globe, Zap, Brain, LayoutDashboard, Link2];
const hrefs = ['/services/crm-erp', '/services/web-development', '/services/automation', '/services/ai-solutions', '/services#tools', '/services#api'];

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'en';
  const t = getTranslation(locale);
  const s = t.services;
  const navLink = (path: string) => `/${locale}${path}`;

  return (
    <>
      <Header locale={locale} t={t} />
      <main>
        <section className="relative pt-32 pb-20 section-dark overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(rgba(108,172,228,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,172,228,0.04) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }} />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="badge-dark mb-6">{s.badge}</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">{s.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed">{s.subtitle}</p>
          </div>
        </section>

        <section className="py-20 section-dark-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {s.items.map((item, i) => {
                const Icon = icons[i];
                return (
                  <Link key={i} href={navLink(hrefs[i] || '/services')}
                    className="card-dark p-8 group flex flex-col gap-5 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.35)' }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-blue-100 text-sm leading-relaxed mb-5">{item.description}</p>
                      <ul className="space-y-2">
                        {item.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-blue-200">
                            <Check className="w-3.5 h-3.5 text-white/70 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-1 text-primary-400 text-sm font-medium">
                      Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <ContactCTA locale={locale} t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
