'use client';
import { useCookieConsent } from '@/lib/cookie-consent';

export function CookieBanner() {
  const { consent, accept, reject } = useCookieConsent();

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-slate-600 flex-1 leading-relaxed">
          <span className="font-semibold text-slate-800">Thumbless.cz</span> používá cookies pro zajištění správné funkčnosti webu a analýzu návštěvnosti.
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={reject}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 whitespace-nowrap">
            Odmítnout
          </button>
          <button
            onClick={accept}
            className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap">
            Přijmout vše
          </button>
        </div>
      </div>
    </div>
  );
}
