'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { locales, localeNames } from '@/lib/i18n';
import type { Locale, Translation } from '@/lib/i18n';

interface HeaderProps {
  locale: Locale;
  t: Translation;
}

export function Header({ locale, t }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const localePath = (targetLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/') || `/${targetLocale}`;
  };

  const navLink = (path: string) => `/${locale}${path}`;

  const services = [
    { label: t.nav.crm, href: '/services/crm-erp' },
    { label: t.nav.webDev, href: '/services/web-development' },
    { label: t.nav.automation, href: '/services/automation' },
    { label: t.nav.ai, href: '/services/ai-solutions' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-dark shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={navLink('')} className="flex items-center gap-3 group">
            <img src="/logo.svg" alt="thumbless.cz logo" className="w-9 h-9" />
            <span className="text-white font-bold text-xl tracking-tight">
              thumbless.cz
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href={navLink('')}
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200">
              {t.nav.home}
            </Link>
            <Link href={navLink('/about')}
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200">
              {t.nav.about}
            </Link>

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200">
                {t.nav.services}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 glass-dark rounded-xl shadow-2xl shadow-black/40 py-2 border border-white/10">
                  <Link href={navLink('/services')}
                    className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => setServicesOpen(false)}>
                    {t.nav.services}
                  </Link>
                  <div className="h-px bg-white/10 my-1" />
                  {services.map((s) => (
                    <Link key={s.href} href={navLink(s.href)}
                      className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setServicesOpen(false)}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href={navLink('/technologies')}
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200">
              {t.nav.technologies}
            </Link>
            <Link href={navLink('/case-studies')}
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200">
              {t.nav.caseStudies}
            </Link>
            <Link href={navLink('/career')}
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200">
              {t.nav.career}
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-white/5 text-sm font-medium transition-all duration-200">
                <Globe className="w-4 h-4" />
                <span className="uppercase">{locale}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 glass-dark rounded-xl shadow-2xl shadow-black/40 py-2 border border-white/10">
                  {locales.map((l) => (
                    <Link key={l} href={localePath(l)}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        l === locale
                          ? 'text-primary-400 bg-primary-400/10'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setLangOpen(false)}>
                      {localeNames[l]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href={navLink('/contact')} className="btn-primary text-sm py-2.5">
              {t.nav.getStarted}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-dark border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link href={navLink('')} className="px-4 py-3 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">
              {t.nav.home}
            </Link>
            <Link href={navLink('/about')} className="px-4 py-3 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">
              {t.nav.about}
            </Link>
            <Link href={navLink('/services')} className="px-4 py-3 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">
              {t.nav.services}
            </Link>
            {services.map((s) => (
              <Link key={s.href} href={navLink(s.href)} className="px-8 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-sm transition-colors">
                {s.label}
              </Link>
            ))}
            <Link href={navLink('/technologies')} className="px-4 py-3 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">
              {t.nav.technologies}
            </Link>
            <Link href={navLink('/case-studies')} className="px-4 py-3 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">
              {t.nav.caseStudies}
            </Link>
            <Link href={navLink('/career')} className="px-4 py-3 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">
              {t.nav.career}
            </Link>
            <Link href={navLink('/contact')} className="px-4 py-3 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">
              {t.nav.contact}
            </Link>

            <div className="h-px bg-white/10 my-2" />

            {/* Language switcher mobile */}
            <div className="flex gap-2 px-4">
              {locales.map((l) => (
                <Link key={l} href={localePath(l)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium uppercase transition-colors ${
                    l === locale
                      ? 'bg-primary-400/20 text-primary-400'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}>
                  {l}
                </Link>
              ))}
            </div>

            <Link href={navLink('/contact')} className="btn-primary mt-2 text-center text-sm">
              {t.nav.getStarted}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
