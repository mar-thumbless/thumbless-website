import Link from 'next/link';
import { getTranslation, isValidLocale, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactCTA } from '@/components/home/ContactCTA';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const blogPosts = [
  {
    category: 'CRM & ERP',
    title: 'How to Choose Between Pipedrive and Odoo for Your Business',
    excerpt: 'A practical comparison of two leading platforms to help you make the right decision for your team.',
    date: '2024-06-15',
    readTime: '8 min read',
    slug: 'pipedrive-vs-odoo',
  },
  {
    category: 'Automation',
    title: 'Getting Started with n8n: Building Your First Business Workflow',
    excerpt: 'A step-by-step guide to automating your first business process with n8n workflow automation.',
    date: '2024-05-28',
    readTime: '12 min read',
    slug: 'n8n-getting-started',
  },
  {
    category: 'AI',
    title: 'Practical AI for Small and Medium Businesses in 2024',
    excerpt: 'Real-world AI applications that SMBs can implement today without a data science team.',
    date: '2024-05-10',
    readTime: '10 min read',
    slug: 'ai-for-smb-2024',
  },
  {
    category: 'Web Development',
    title: 'Why Your Company Website is a Business Asset, Not a Cost',
    excerpt: 'How a professionally built website creates measurable ROI and competitive advantage.',
    date: '2024-04-22',
    readTime: '7 min read',
    slug: 'website-as-business-asset',
  },
  {
    category: 'CRM & ERP',
    title: 'Odoo Implementation Checklist: What to Prepare Before You Start',
    excerpt: 'The key decisions and preparations that make Odoo implementations successful.',
    date: '2024-04-05',
    readTime: '9 min read',
    slug: 'odoo-implementation-checklist',
  },
  {
    category: 'Automation',
    title: 'Make.com vs n8n: Which Automation Platform is Right for You?',
    excerpt: 'An honest comparison of two leading automation platforms from a practitioner\'s perspective.',
    date: '2024-03-18',
    readTime: '11 min read',
    slug: 'make-vs-n8n',
  },
];

const categoryColors: Record<string, string> = {
  'CRM & ERP': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'Automation': 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  'AI': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'Web Development': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
};

export default function BlogPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'en';
  const t = getTranslation(locale);

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
            <span className="badge mb-6">{t.nav.blog}</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              {locale === 'cs' ? 'Náš blog' : locale === 'de' ? 'Unser Blog' : 'Our Blog'}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              {locale === 'cs'
                ? 'Tipy, průvodci a postřehy o CRM, automatizaci, AI a vývoji webu.'
                : locale === 'de'
                ? 'Tipps, Anleitungen und Einblicke zu CRM, Automatisierung, KI und Webentwicklung.'
                : 'Tips, guides, and insights on CRM, automation, AI, and web development.'}
            </p>
          </div>
        </section>

        <section className="py-20 section-dark-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <article key={post.slug}
                  className="card-dark p-7 rounded-2xl flex flex-col gap-4 group hover:shadow-xl transition-all duration-300">
                  <span className={`inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[post.category] || 'text-primary-400 bg-primary-400/10 border-primary-400/20'}`}>
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold text-white leading-snug group-hover:text-primary-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString(locale === 'cs' ? 'cs-CZ' : locale === 'de' ? 'de-DE' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-primary-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read article <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
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
