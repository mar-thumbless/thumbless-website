import { getTranslation, isValidLocale, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactCTA } from '@/components/home/ContactCTA';
import { Code2, Users, Target, Eye, Lightbulb, Shield } from 'lucide-react';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'en';
  const t = getTranslation(locale);
  const a = t.about;

  const valueIcons = [Shield, Users, Target, Eye, Lightbulb, Code2];

  return (
    <>
      <Header locale={locale} t={t} />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 section-dark overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(rgba(108,172,228,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,172,228,0.04) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }} />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
              style={{ background: '#6CACE4' }} />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="badge-dark mb-6">{a.hero.badge}</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">{a.hero.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed">{a.hero.subtitle}</p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{a.story.title}</h2>
                <div className="space-y-4">
                  {a.story.paragraphs.map((p, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl border border-primary-100 bg-primary-50">
                  <h3 className="font-bold text-primary-800 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5" /> {a.mission.title}
                  </h3>
                  <p className="text-primary-700 text-sm leading-relaxed">{a.mission.text}</p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50">
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-slate-500" /> {a.vision.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{a.vision.text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 section-dark-alt" id="values">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">{a.values.title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {a.values.items.map((item, i) => {
                const Icon = valueIcons[i % valueIcons.length];
                return (
                  <div key={i} className="card-dark p-6 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.35)' }}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-100 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-20 bg-white" id="team">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-500 text-lg">{a.team.subtitle}</p>
          </div>
        </section>

        <ContactCTA locale={locale} t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
