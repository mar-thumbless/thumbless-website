import type { Translation } from '@/lib/i18n';

interface ProcessTimelineProps {
  t: Translation;
}

export function ProcessTimeline({ t }: ProcessTimelineProps) {
  const p = t.process;

  return (
    <section className="py-24 section-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="badge mb-4">{p.badge}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">{p.title}</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">{p.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {p.steps.map((step, i) => (
            <div key={i} className="relative card-light p-7 rounded-2xl group">
              {/* Number */}
              <div className="text-6xl font-bold mb-4 leading-none select-none"
                style={{
                  background: 'linear-gradient(135deg, #6CACE4, rgba(108,172,228,0.3))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                {step.number}
              </div>

              {/* Accent line */}
              <div className="w-12 h-0.5 mb-4 rounded-full"
                style={{ background: 'linear-gradient(90deg, #6CACE4, transparent)' }} />

              <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
