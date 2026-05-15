import { getTranslation, isValidLocale, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactCTA } from '@/components/home/ContactCTA';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const techDetails = [
  {
    id: 'pipedrive',
    name: 'Pipedrive',
    category: 'CRM',
    description: 'Leading sales CRM for pipeline management, deal tracking, and sales automation. We implement, customize, and manage Pipedrive for sales teams of all sizes.',
    color: '#1F9B3B',
  },
  {
    id: 'odoo',
    name: 'Odoo',
    category: 'ERP',
    description: 'Open-source ERP suite covering accounting, manufacturing, inventory, CRM, and more. We implement Odoo as a complete business operations platform.',
    color: '#714B67',
  },
  {
    id: 'n8n',
    name: 'n8n',
    category: 'Automation',
    description: 'Powerful workflow automation tool for connecting APIs and services. We build complex, production-grade automation workflows with n8n.',
    color: '#EA4B71',
  },
  {
    id: 'make',
    name: 'Make.com',
    category: 'Automation',
    description: 'Visual automation platform (formerly Integromat) for no-code/low-code integrations between hundreds of apps.',
    color: '#6D00CC',
  },
  {
    id: 'ai',
    name: 'LangChain & AI',
    category: 'AI',
    description: 'Framework for building LLM-powered applications. We use LangChain to build RAG systems, AI assistants, document processors, and custom AI tools.',
    color: '#6CACE4',
  },
  {
    id: 'dev',
    name: 'Python & JavaScript',
    category: 'Development',
    description: 'Core development languages for our backend services, automation scripts, web applications, and AI integrations.',
    color: '#F7C948',
  },
  {
    id: 'devops',
    name: 'Docker & DevOps',
    category: 'Infrastructure',
    description: 'We containerize applications with Docker, manage version control with GitHub, and implement CI/CD pipelines for reliable deployments.',
    color: '#2496ED',
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'Development',
    description: 'Used for WordPress, custom CMSes, and legacy system integrations. We build and maintain PHP applications with modern best practices.',
    color: '#8892BF',
  },
];

export default function TechnologiesPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'en';
  const t = getTranslation(locale);
  const ts = t.techStack;

  return (
    <>
      <Header locale={locale} t={t} />
      <main>
        <section className="relative pt-32 pb-20 section-dark overflow-hidden">
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(108,172,228,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,172,228,0.04) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="badge-dark mb-6">{ts.badge}</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">{ts.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed">{ts.subtitle}</p>
          </div>
        </section>

        <section className="py-20 section-dark-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {techDetails.map((tech) => (
                <div key={tech.id} id={tech.id} className="card-dark p-6 rounded-2xl group hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
                      style={{ background: 'rgba(255,255,255,0.22)', border: '1px solid rgba(255,255,255,0.4)', color: tech.color }}>
                      {tech.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{tech.name}</div>
                      <div className="text-xs text-blue-200">{tech.category}</div>
                    </div>
                  </div>
                  <p className="text-blue-100 text-xs leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ts.categories.map((cat, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-slate-50">
                  <h3 className="font-semibold text-slate-700 mb-3 text-sm uppercase tracking-wider">{cat.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white border border-slate-200 text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA locale={locale} t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
