import { getTranslation, isValidLocale, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactCTA } from '@/components/home/ContactCTA';
import { Briefcase, Code2, MapPin, Clock, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const positions = {
  cs: [
    {
      id: 'business-dev',
      icon: Briefcase,
      tag: 'Obchod',
      title: 'Obchodní zastoupení',
      subtitle: 'Business Development Representative',
      location: 'Praha / Remote',
      type: 'Kontrakt nebo HPP',
      description:
        'Hledáme obchodního zástupce, který nám pomůže rozšiřovat portfolio klientů v Česku a Německu. Budete prvním kontaktem pro nové klienty, budete prezentovat naše technologické řešení a budovat dlouhodobé vztahy.',
      requirements: [
        'Zkušenosti v B2B obchodu (min. 2 roky)',
        'Komunikativní němčina nebo angličtina výhodou',
        'Zájem o technologie a digitální transformaci',
        'Schopnost samostatné práce a proaktivní přístup',
        'Řidičský průkaz skupiny B',
      ],
      offer: [
        'Flexibilní pracovní doba',
        'Práce z domu nebo z kanceláře (Praha)',
        'Atraktivní provizní systém',
        'Zázemí stabilní technologické firmy',
      ],
    },
    {
      id: 'fullstack-dev',
      icon: Code2,
      tag: 'Vývoj',
      title: 'Full-Stack Developer',
      subtitle: 'React / Node.js / Python',
      location: 'Remote / Praha',
      type: 'Kontrakt nebo HPP',
      description:
        'Hledáme zkušeného vývojáře, který se zapojí do vývoje webových aplikací, CRM integrací a automatizačních řešení. Budete pracovat na reálných projektech pro klienty z různých odvětví — od letectví po automotive.',
      requirements: [
        'Znalost React, TypeScript, Node.js nebo Python',
        'Zkušenost s REST API a databázemi (PostgreSQL, MySQL)',
        'Zkušenost s CRM systémy (Pipedrive, HubSpot) výhodou',
        'Git, Docker — samozřejmost',
        'Zájem o AI nástroje a automatizace (n8n, LangChain)',
      ],
      offer: [
        'Zajímavé projekty v CZ a DE trhu',
        'Moderní tech stack (Next.js, Python, AI)',
        'Plně remote nebo hybridní',
        'Partnerství s etablovanými firmami',
      ],
    },
  ],
  en: [
    {
      id: 'business-dev',
      icon: Briefcase,
      tag: 'Business',
      title: 'Business Development Representative',
      subtitle: 'Sales & Partnerships',
      location: 'Prague / Remote',
      type: 'Contract or Full-time',
      description:
        'We are looking for a business development representative to help us grow our client portfolio in Czech Republic and Germany. You will be the first point of contact for new clients, presenting our technology solutions and building long-term relationships.',
      requirements: [
        'B2B sales experience (min. 2 years)',
        'Communicative German or English is a plus',
        'Interest in technology and digital transformation',
        'Ability to work independently and proactively',
        "Driver's license (category B)",
      ],
      offer: [
        'Flexible working hours',
        'Work from home or office (Prague)',
        'Attractive commission structure',
        'Stable technology company backing',
      ],
    },
    {
      id: 'fullstack-dev',
      icon: Code2,
      tag: 'Engineering',
      title: 'Full-Stack Developer',
      subtitle: 'React / Node.js / Python',
      location: 'Remote / Prague',
      type: 'Contract or Full-time',
      description:
        'We are looking for an experienced developer to join web application development, CRM integrations, and automation projects. You will work on real-world projects for clients across various industries — from aviation to automotive.',
      requirements: [
        'React, TypeScript, Node.js or Python skills',
        'Experience with REST APIs and databases (PostgreSQL, MySQL)',
        'CRM systems experience (Pipedrive, HubSpot) is a plus',
        'Git, Docker — standard tools',
        'Interest in AI tools and automation (n8n, LangChain)',
      ],
      offer: [
        'Interesting projects in CZ and DE markets',
        'Modern tech stack (Next.js, Python, AI)',
        'Fully remote or hybrid',
        'Partnerships with established companies',
      ],
    },
  ],
  de: [
    {
      id: 'business-dev',
      icon: Briefcase,
      tag: 'Vertrieb',
      title: 'Business Development Representative',
      subtitle: 'Vertrieb & Partnerschaften',
      location: 'Prag / Remote',
      type: 'Vertrag oder Vollzeit',
      description:
        'Wir suchen einen Vertriebsmitarbeiter, der uns hilft, unser Kundenportfolio in Tschechien und Deutschland auszubauen. Sie sind der erste Ansprechpartner für neue Kunden, präsentieren unsere Technologielösungen und bauen langfristige Beziehungen auf.',
      requirements: [
        'B2B-Vertriebserfahrung (mind. 2 Jahre)',
        'Kommunikatives Deutsch oder Englisch von Vorteil',
        'Interesse an Technologie und digitaler Transformation',
        'Selbstständige und proaktive Arbeitsweise',
        'Führerschein der Klasse B',
      ],
      offer: [
        'Flexible Arbeitszeiten',
        'Homeoffice oder Büro (Prag)',
        'Attraktives Provisionsmodell',
        'Stabiles Technologieunternehmen im Hintergrund',
      ],
    },
    {
      id: 'fullstack-dev',
      icon: Code2,
      tag: 'Entwicklung',
      title: 'Full-Stack Entwickler',
      subtitle: 'React / Node.js / Python',
      location: 'Remote / Prag',
      type: 'Vertrag oder Vollzeit',
      description:
        'Wir suchen einen erfahrenen Entwickler für die Entwicklung von Webanwendungen, CRM-Integrationen und Automatisierungslösungen. Sie arbeiten an realen Projekten für Kunden aus verschiedenen Branchen — von der Luftfahrt bis zur Automobilindustrie.',
      requirements: [
        'Kenntnisse in React, TypeScript, Node.js oder Python',
        'Erfahrung mit REST-APIs und Datenbanken (PostgreSQL, MySQL)',
        'Erfahrung mit CRM-Systemen (Pipedrive, HubSpot) von Vorteil',
        'Git, Docker — Selbstverständlichkeit',
        'Interesse an KI-Tools und Automatisierung (n8n, LangChain)',
      ],
      offer: [
        'Interessante Projekte auf dem CZ- und DE-Markt',
        'Moderner Tech-Stack (Next.js, Python, KI)',
        'Vollständig remote oder hybrid',
        'Partnerschaften mit etablierten Unternehmen',
      ],
    },
  ],
};

const hero = {
  cs: { badge: 'Kariéra', title: 'Přidejte se k nám', subtitle: 'Hledáme talentované lidi, kteří chtějí pracovat na zajímavých technologických projektech v Česku a Německu.' },
  en: { badge: 'Career', title: 'Join Our Team', subtitle: 'We are looking for talented people who want to work on interesting technology projects in Czech Republic and Germany.' },
  de: { badge: 'Karriere', title: 'Werden Sie Teil unseres Teams', subtitle: 'Wir suchen talentierte Menschen, die an interessanten Technologieprojekten in Tschechien und Deutschland arbeiten möchten.' },
};

const labels = {
  cs: { requirements: 'Požadujeme', offer: 'Nabízíme', apply: 'Mám zájem', location: 'Lokalita', type: 'Typ spolupráce' },
  en: { requirements: 'Requirements', offer: 'We offer', apply: 'Apply now', location: 'Location', type: 'Employment type' },
  de: { requirements: 'Anforderungen', offer: 'Wir bieten', apply: 'Bewerben', location: 'Standort', type: 'Beschäftigungsart' },
};

export default function CareerPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'en';
  const t = getTranslation(locale);
  const h = hero[locale];
  const l = labels[locale];
  const jobs = positions[locale];

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
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ background: '#6CACE4' }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="badge-dark mb-6">{h.badge}</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">{h.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed">{h.subtitle}</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {jobs.map((job) => {
                const Icon = job.icon;
                return (
                  <div key={job.id} className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
                    <div className="p-8 border-b border-slate-100"
                      style={{ background: 'linear-gradient(135deg, #EFF7FD 0%, #DBEFFE 100%)' }}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: 'linear-gradient(135deg, #6CACE4 0%, #4A8EC7 100%)' }}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
                              style={{ background: 'rgba(108,172,228,0.2)', color: '#2563eb' }}>
                              {job.tag}
                            </span>
                          </div>
                          <h2 className="text-2xl font-bold text-slate-900">{job.title}</h2>
                          <p className="text-primary-600 font-medium text-sm mt-0.5">{job.subtitle}</p>
                          <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4 text-primary-400" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4 text-primary-400" />
                              {job.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <p className="text-slate-600 leading-relaxed mb-8">{job.description}</p>

                      <div className="grid sm:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                            {l.requirements}
                          </h3>
                          <ul className="space-y-2.5">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{ background: '#6CACE4' }} />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                            {l.offer}
                          </h3>
                          <ul className="space-y-2.5">
                            {job.offer.map((item, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{ background: '#6CACE4' }} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <a
                        href={`mailto:support@thumbless.cz?subject=${encodeURIComponent(job.title)}`}
                        className="btn-primary inline-flex items-center gap-2">
                        {l.apply}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <ContactCTA locale={locale} t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
