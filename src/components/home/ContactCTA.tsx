import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import type { Locale, Translation } from '@/lib/i18n';

interface ContactCTAProps {
  locale: Locale;
  t: Translation;
}

export function ContactCTA({ locale, t }: ContactCTAProps) {
  const c = t.contactCta;
  const navLink = (path: string) => `/${locale}${path}`;

  return (
    <section className="py-24 section-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-20 blur-3xl rounded-full"
          style={{ background: 'radial-gradient(circle, #6CACE4 0%, transparent 70%)' }} />
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(108,172,228,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(108,172,228,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="badge-dark mb-6">{c.badge}</span>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-balance">
          {c.title}
        </h2>
        <p className="text-blue-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto text-balance">
          {c.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={navLink('/contact')} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white text-blue-800 hover:bg-blue-50 transition-all duration-300 shadow-lg w-full sm:w-auto text-base">
            {c.cta1} <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="mailto:support@thumbless.cz" className="btn-outline-white text-base px-8 py-4 w-full sm:w-auto">
            <Mail className="w-5 h-5" /> {c.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
