import Link from 'next/link';
import { Database, Globe, Zap, Brain, LayoutDashboard, Link2, ArrowRight, Check } from 'lucide-react';
import type { Locale, Translation } from '@/lib/i18n';

interface ServicesGridProps {
  locale: Locale;
  t: Translation;
}

const icons = [Database, Globe, Zap, Brain, LayoutDashboard, Link2];
const hrefs = ['/services/crm-erp', '/services/web-development', '/services/automation', '/services/ai-solutions', '/services#tools', '/services#api'];

export function ServicesGrid({ locale, t }: ServicesGridProps) {
  const s = t.services;
  const navLink = (path: string) => `/${locale}${path}`;

  return (
    <section className="py-24 section-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="badge mb-4">{s.badge}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">{s.title}</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">{s.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Link key={i} href={navLink(hrefs[i] || '/services')}
                className="card-light p-7 group flex flex-col gap-5 rounded-2xl">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #6CACE4 0%, #4A8EC7 100%)' }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-500">
                        <Check className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-1 text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
