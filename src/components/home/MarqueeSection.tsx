'use client';

const items = [
  { label: 'Pipedrive CRM' },
  { label: 'Odoo ERP' },
  { label: 'Next.js' },
  { label: 'LangChain AI' },
  { label: 'n8n Automation' },
  { label: 'Make.com' },
  { label: 'React' },
  { label: 'Python' },
  { label: 'TypeScript' },
  { label: 'Docker' },
  { label: 'HubSpot' },
  { label: 'ChatGPT API' },
  { label: 'REST API' },
  { label: 'PostgreSQL' },
  { label: 'Claude AI' },
  { label: 'GitHub Actions' },
];

const doubled = [...items, ...items];

export function MarqueeSection() {
  return (
    <section className="py-10 bg-white border-y border-primary-100 overflow-hidden">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        <div className="animate-marquee">
          {doubled.map((item, i) => (
            <div key={i} className="inline-flex items-center gap-3 mx-4 flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: '#6CACE4' }} />
              <span className="text-sm font-semibold text-slate-600 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
