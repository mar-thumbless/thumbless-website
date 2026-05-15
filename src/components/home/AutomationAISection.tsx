import Link from 'next/link';
import { Zap, Brain, Check, ArrowRight } from 'lucide-react';
import type { Locale, Translation } from '@/lib/i18n';

interface AutomationAISectionProps {
  locale: Locale;
  t: Translation;
}

export function AutomationAISection({ locale, t }: AutomationAISectionProps) {
  const a = t.automationAI;
  const navLink = (path: string) => `/${locale}${path}`;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="badge mb-4">{a.badge}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">{a.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{a.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Automation Card */}
          <div className="relative rounded-3xl p-8 border border-slate-100 bg-gradient-to-br from-slate-50 to-white overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 opacity-5 rounded-full"
              style={{ background: '#6CACE4', transform: 'translate(30%, -30%)' }} />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'linear-gradient(135deg, #6CACE4 0%, #4A8EC7 100%)' }}>
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{a.automation.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{a.automation.description}</p>
              <ul className="space-y-3 mb-8">
                {a.automation.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={navLink('/services/automation')}
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all group-hover:text-primary-500">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* AI Card */}
          <div className="relative rounded-3xl p-8 border overflow-hidden group hover:shadow-xl transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #4B8BBF 0%, #74ACDF 100%)',
              borderColor: 'rgba(255,255,255,0.2)',
            }}>
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full"
              style={{ background: '#ffffff', transform: 'translate(30%, -30%)' }} />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.35)' }}>
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{a.ai.title}</h3>
              <p className="text-blue-100 leading-relaxed mb-6">{a.ai.description}</p>
              <ul className="space-y-3 mb-8">
                {a.ai.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-blue-50 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={navLink('/services/ai-solutions')}
                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href={navLink('/contact')} className="btn-primary text-base px-8 py-4">
            {a.cta} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
