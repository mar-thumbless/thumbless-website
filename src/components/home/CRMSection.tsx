import Link from 'next/link';
import { Check, Database, ArrowRight } from 'lucide-react';
import type { Locale, Translation } from '@/lib/i18n';

interface CRMSectionProps {
  locale: Locale;
  t: Translation;
}

export function CRMSection({ locale, t }: CRMSectionProps) {
  const c = t.crm;
  const navLink = (path: string) => `/${locale}${path}`;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="badge mb-4">{c.badge}</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3 tracking-tight">{c.title}</h2>
            <p className="text-primary-700 font-semibold text-lg mb-6">{c.subtitle}</p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">{c.description}</p>

            <ul className="space-y-3 mb-10">
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

            <Link href={navLink('/services/crm-erp')} className="btn-primary inline-flex">
              {c.cta} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl opacity-10 blur-2xl"
              style={{ background: 'linear-gradient(135deg, #6CACE4, #4A8EC7)' }} />
            <div className="relative rounded-3xl p-8 border border-slate-100 bg-slate-50">
              {/* CRM Pipeline Visual */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #6CACE4, #4A8EC7)' }}>
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">CRM Pipeline</div>
                    <div className="text-xs text-slate-500">Powered by Pipedrive & Odoo</div>
                  </div>
                </div>

                {/* Pipeline stages */}
                {['Lead Qualification', 'Proposal Sent', 'Negotiation', 'Closed Won'].map((stage, i) => (
                  <div key={stage} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                    <div className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: `hsl(${210 + i * 10}, ${70 + i * 5}%, ${55 + i * 5}%)` }} />
                    <span className="text-sm font-medium text-slate-700">{stage}</span>
                    <div className="ml-auto flex items-center gap-1">
                      <div className="h-1.5 rounded-full bg-slate-100" style={{ width: `${80 - i * 15}px` }}>
                        <div className="h-full rounded-full" style={{ width: `${75 - i * 10}%`, background: 'linear-gradient(90deg, #6CACE4, #4A8EC7)' }} />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Tools */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs text-slate-400 mb-3 font-medium uppercase tracking-wider">Supported Platforms</div>
                  <div className="flex flex-wrap gap-2">
                    {c.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600 shadow-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
