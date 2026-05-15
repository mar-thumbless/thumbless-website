import type { Translation } from '@/lib/i18n';
import { Badge } from '@/components/ui/Badge';

interface StatsProps {
  t: Translation;
}

export function Stats({ t }: StatsProps) {
  const s = t.trust;
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge className="mb-4">{s.title}</Badge>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {s.items.map((item, i) => (
            <div key={i}
              className="relative group text-center p-8 rounded-2xl border border-slate-100 bg-white hover:border-primary-200 hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(108,172,228,0.05) 0%, rgba(74,142,199,0.02) 100%)' }} />
              <div className="relative">
                <div className="text-4xl lg:text-5xl font-bold mb-2"
                  style={{ background: 'linear-gradient(135deg, #6CACE4, #4A8EC7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {item.value}
                </div>
                <div className="font-semibold text-slate-800 mb-1 text-lg">{item.label}</div>
                <div className="text-slate-500 text-sm leading-snug">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
