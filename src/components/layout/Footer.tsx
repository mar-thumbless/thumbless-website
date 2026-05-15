import Link from 'next/link';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import type { Locale, Translation } from '@/lib/i18n';
import { locales, localeNames } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
  t: Translation;
}

export function Footer({ locale, t }: FooterProps) {
  const navLink = (path: string) => `/${locale}${path}`;
  const f = t.footer;

  return (
    <footer className="section-dark border-t border-white/15">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-3 space-y-6">
            <Link href={navLink('')} className="flex items-center gap-3">
              <img src="/logo.svg" alt="thumbless.cz logo" className="w-9 h-9" />
              <span className="text-white font-bold text-xl tracking-tight">thumbless.cz</span>
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed">{f.tagline}</p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-white/60 uppercase tracking-wider">{f.contact.title}</div>
              <a href={`mailto:${f.contact.email}`}
                className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-white/70 flex-shrink-0" />
                {f.contact.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-blue-100">
                <MapPin className="w-4 h-4 text-white/70 flex-shrink-0 mt-0.5" />
                {f.contact.address}
              </div>
            </div>

            {/* Language Switcher */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-white/60 uppercase tracking-wider">Language</div>
              <div className="flex flex-wrap gap-2">
                {locales.map((l) => (
                  <Link key={l} href={`/${l}`}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      l === locale
                        ? 'bg-white/20 text-white border border-white/35'
                        : 'text-blue-100 hover:text-white border border-white/15 hover:border-white/35'
                    }`}>
                    {localeNames[l]}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">{f.columns.company.title}</h4>
              <ul className="space-y-2.5">
                {f.columns.company.links.map((link) => (
                  <li key={link.href}>
                    <Link href={navLink(link.href)}
                      className="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200 text-primary-400" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">{f.columns.services.title}</h4>
              <ul className="space-y-2.5">
                {f.columns.services.links.map((link) => (
                  <li key={link.href}>
                    <Link href={navLink(link.href)}
                      className="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200 text-primary-400" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">{f.columns.technologies.title}</h4>
              <ul className="space-y-2.5">
                {f.columns.technologies.links.map((link) => (
                  <li key={link.href}>
                    <Link href={navLink(link.href)}
                      className="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200 text-primary-400" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">{f.columns.resources.title}</h4>
              <ul className="space-y-2.5">
                {f.columns.resources.links.map((link) => (
                  <li key={link.href}>
                    <Link href={navLink(link.href)}
                      className="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200 text-primary-400" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">{f.columns.legal.title}</h4>
              <ul className="space-y-2.5">
                {f.columns.legal.links.map((link) => (
                  <li key={link.href}>
                    <Link href={navLink(link.href)}
                      className="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200 text-primary-400" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">{f.copyright}</p>
          <p className="text-sm text-white/60">{f.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
