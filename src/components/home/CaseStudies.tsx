import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import type { Locale, Translation } from '@/lib/i18n';

interface CaseStudiesProps {
  locale: Locale;
  t: Translation;
}

const cardColors = [
  'border-blue-500/20 hover:border-blue-400/40',
  'border-emerald-500/20 hover:border-emerald-400/40',
  'border-violet-500/20 hover:border-violet-400/40',
  'border-amber-500/20 hover:border-amber-400/40',
];

const tagColors = [
  'bg-blue-50 text-blue-400 border-blue-100',
  'bg-emerald-50 text-emerald-400 border-emerald-100',
  'bg-violet-50 text-violet-400 border-violet-100',
  'bg-amber-50 text-amber-400 border-amber-100',
];

export function CaseStudies({ locale, t }: CaseStudiesProps) {
  const c = t.caseStudies;
  const navLink = (path: string) => `/${locale}${path}`;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="badge mb-4">{c.badge}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">{c.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {c.items.map((item, i) => (
            <div key={i}
              className={`group rounded-2xl p-7 border bg-white hover:shadow-xl transition-all duration-300 ${cardColors[i % cardColors.length]}`}>
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${tagColors[i % tagColors.length]}`}>
                  {item.industry}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-600 mb-3 group-hover:text-primary-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{item.description}</p>

              {/* Result */}
              <div className="flex items-center gap-2 p-3 rounded-xl mb-5"
                style={{ background: 'linear-gradient(135deg, rgba(108,172,228,0.1) 0%, rgba(74,142,199,0.05) 100%)', border: '1px solid rgba(108,172,228,0.2)' }}>
                <TrendingUp className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-primary-400">{item.result}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href={navLink('/case-studies')} className="btn-outline text-sm">
            {c.cta} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
