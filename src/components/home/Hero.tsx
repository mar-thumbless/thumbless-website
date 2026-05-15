'use client';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import type { Locale, Translation } from '@/lib/i18n';

interface HeroProps {
  locale: Locale;
  t: Translation;
}

export function Hero({ locale, t }: HeroProps) {
  const h = t.hero;
  const navLink = (path: string) => `/${locale}${path}`;

  return (
    <section className="relative min-h-screen flex items-center section-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(108,172,228,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,172,228,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6CACE4 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #4A8EC7 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #93C5FD 0%, transparent 70%)' }} />

        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-primary-400 opacity-60 animate-pulse" />
        <div className="absolute top-1/3 left-16 w-2 h-2 rounded-full bg-primary-300 opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 right-32 w-2 h-2 rounded-full bg-primary-400 opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="badge-dark mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            {h.badge}
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.15] text-balance">
            {h.title}{' '}
            <span className="gradient-text">{h.titleAccent}</span>
            {' '}{h.titleEnd}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto text-balance">
            {h.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href={navLink('/contact')} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white text-blue-800 hover:bg-blue-50 transition-all duration-300 shadow-lg w-full sm:w-auto text-base">
              {h.cta1}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href={navLink('/services')} className="btn-outline-white text-base px-8 py-4 w-full sm:w-auto">
              {h.cta2}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            {h.stats.map((stat, i) => (
              <div key={i} className="card-dark p-5 text-center">
                <div className="text-3xl font-bold mb-1 text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-primary-400" />
        </div>
      </div>
    </section>
  );
}
