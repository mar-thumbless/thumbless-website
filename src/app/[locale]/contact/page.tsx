'use client';
import { useState } from 'react';
import { getTranslation, isValidLocale } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'en';
  const t = getTranslation(locale);
  const c = t.contact;

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', service: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[thumbless.cz] ${form.service || 'Inquiry'} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:support@thumbless.cz?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

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
            <span className="badge-dark mb-6">{c.hero.badge}</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">{c.hero.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed">{c.hero.subtitle}</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(108,172,228,0.15)', border: '1px solid rgba(108,172,228,0.3)' }}>
                      <CheckCircle className="w-8 h-8 text-primary-500" />
                    </div>
                    <p className="text-xl font-semibold text-slate-900">{c.form.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">{c.form.name}</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm({...form, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-400 transition-colors text-sm"
                          placeholder={c.form.name}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">{c.form.email}</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={e => setForm({...form, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-400 transition-colors text-sm"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{c.form.company}</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={e => setForm({...form, company: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-400 transition-colors text-sm"
                        placeholder={c.form.company}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{c.form.service}</label>
                      <select
                        value={form.service}
                        onChange={e => setForm({...form, service: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-primary-400 transition-colors text-sm">
                        <option value="">—</option>
                        {c.form.services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{c.form.message}</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-400 transition-colors text-sm resize-none"
                        placeholder={c.form.message}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full py-4 text-base">
                      {c.form.submit} <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-2xl p-6 border border-primary-100 bg-primary-50">
                  <h3 className="font-semibold text-slate-900 mb-5">{c.info.title}</h3>
                  <div className="space-y-4">
                    <a href={`mailto:${c.info.email}`}
                      className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary-600 transition-colors">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(108,172,228,0.2)' }}>
                        <Mail className="w-4 h-4 text-primary-600" />
                      </div>
                      {c.info.email}
                    </a>
                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'rgba(108,172,228,0.2)' }}>
                        <Clock className="w-4 h-4 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-slate-800 font-medium mb-0.5">{c.info.hours}</div>
                        {c.info.hoursValue}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-6 border border-slate-100 bg-slate-50">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {locale === 'cs'
                      ? 'Obvykle odpovídáme do 24 hodin v pracovní dny. Neváhejte nám napsat přímo na support@thumbless.cz.'
                      : locale === 'de'
                      ? 'Wir antworten normalerweise innerhalb von 24 Stunden an Werktagen. Schreiben Sie uns direkt an support@thumbless.cz.'
                      : 'We typically respond within 24 hours on business days. Feel free to write directly to support@thumbless.cz.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
