'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Translation } from '@/lib/i18n';

interface FAQProps {
  t: Translation;
}

export function FAQ({ t }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);
  const faq = t.faq;

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="badge mb-4">{faq.badge}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">{faq.title}</h2>
          <p className="text-slate-500 text-lg">{faq.subtitle}</p>
        </div>

        <div className="space-y-3">
          {faq.items.map((item, i) => (
            <div key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? 'border-primary-200 shadow-md'
                  : 'border-slate-100 hover:border-slate-200'
              }`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left gap-4">
                <span className={`font-semibold text-sm sm:text-base transition-colors ${open === i ? 'text-primary-600' : 'text-slate-800'}`}>
                  {item.question}
                </span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                  open === i ? 'rotate-180 text-primary-500' : 'text-slate-400'
                }`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed text-sm">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
