import type { Translation } from '@/lib/i18n';

interface TechStackProps {
  t: Translation;
}

const categoryColors = [
  'bg-blue-50 border-blue-200',
  'bg-purple-50 border-purple-200',
  'bg-emerald-50 border-emerald-200',
  'bg-orange-50 border-orange-200',
];

const categoryTextColors = ['text-blue-600', 'text-purple-600', 'text-emerald-600', 'text-orange-600'];

const categoryTagColors = [
  'bg-blue-100 text-blue-700 border-blue-200',
  'bg-purple-100 text-purple-700 border-purple-200',
  'bg-emerald-100 text-emerald-700 border-emerald-200',
  'bg-orange-100 text-orange-700 border-orange-200',
];

export function TechStack({ t }: TechStackProps) {
  const ts = t.techStack;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="badge mb-4">{ts.badge}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">{ts.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{ts.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ts.categories.map((cat, i) => (
            <div key={i}
              className={`rounded-2xl p-6 border ${categoryColors[i % categoryColors.length]}`}>
              <h3 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${categoryTextColors[i % categoryTextColors.length]}`}>
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${categoryTagColors[i % categoryTagColors.length]} cursor-default`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
