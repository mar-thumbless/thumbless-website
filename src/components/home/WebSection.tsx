import Link from 'next/link';
import { Check, Globe, ArrowRight, Code2, Layers, Smartphone } from 'lucide-react';
import type { Locale, Translation } from '@/lib/i18n';

interface WebSectionProps {
  locale: Locale;
  t: Translation;
}

export function WebSection({ locale, t }: WebSectionProps) {
  const w = t.webDev;
  const navLink = (path: string) => `/${locale}${path}`;

  const highlights = [
    { icon: Code2, label: 'Next.js & React', desc: 'Modern stack' },
    { icon: Smartphone, label: 'Mobile First', desc: 'Every device' },
    { icon: Layers, label: 'Scalable', desc: 'Grows with you' },
  ];

  return (
    <section className="py-24 section-light-blue overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl"
              style={{ background: 'linear-gradient(135deg, #6CACE4, transparent)' }} />
            <div className="relative rounded-3xl p-8 space-y-4 bg-white shadow-xl border border-primary-100">
              {/* Browser mockup */}
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-800">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  <div className="flex-1 mx-4 h-5 rounded bg-slate-700 flex items-center px-3">
                    <span className="text-xs text-slate-400">thumbless.cz</span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="h-6 rounded-lg w-2/3"
                    style={{ background: 'linear-gradient(90deg, rgba(108,172,228,0.6), rgba(74,142,199,0.3))' }} />
                  <div className="h-3 rounded w-full bg-slate-600/50" />
                  <div className="h-3 rounded w-5/6 bg-slate-600/50" />
                  <div className="h-3 rounded w-4/6 bg-slate-600/50" />
                  <div className="mt-4 h-8 w-36 rounded-lg"
                    style={{ background: 'linear-gradient(135deg, #6CACE4, #4A8EC7)' }} />
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-3">
                {highlights.map((h, i) => (
                  <div key={i} className="bg-primary-50 border border-primary-100 rounded-xl p-4 text-center">
                    <h.icon className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                    <div className="text-xs font-semibold text-slate-800">{h.label}</div>
                    <div className="text-xs text-slate-500">{h.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="badge mb-4">{w.badge}</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3 tracking-tight">{w.title}</h2>
            <p className="text-primary-700 font-semibold text-lg mb-6">{w.subtitle}</p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">{w.description}</p>

            <ul className="space-y-3 mb-10">
              {w.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'linear-gradient(135deg, #6CACE4, #4A8EC7)' }}>
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  <span className="text-slate-700">{f}</span>
                </li>
              ))}
            </ul>

            <Link href={navLink('/services/web-development')} className="btn-primary inline-flex">
              {w.cta} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
