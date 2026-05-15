import { Shield, Clock, Code2, MessageSquare, Settings, Target } from 'lucide-react';
import type { Translation } from '@/lib/i18n';

interface WhyFamilyProps {
  t: Translation;
}

const icons = [Shield, Clock, Code2, MessageSquare, Settings, Target];

export function WhyFamily({ t }: WhyFamilyProps) {
  const w = t.whyFamily;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="badge mb-4">{w.badge}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">{w.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{w.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {w.reasons.map((reason, i) => {
            const Icon = icons[i];
            return (
              <div key={i}
                className="group p-7 rounded-2xl border border-slate-100 bg-white hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, rgba(108,172,228,0.15) 0%, rgba(74,142,199,0.08) 100%)', border: '1px solid rgba(108,172,228,0.2)' }}>
                  <Icon className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
