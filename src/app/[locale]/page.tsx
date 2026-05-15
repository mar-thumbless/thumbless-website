import { getTranslation, isValidLocale, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { Stats } from '@/components/home/Stats';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { CRMSection } from '@/components/home/CRMSection';
import { WebSection } from '@/components/home/WebSection';
import { AutomationAISection } from '@/components/home/AutomationAISection';
import { TechStack } from '@/components/home/TechStack';
import { WhyFamily } from '@/components/home/WhyFamily';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { CaseStudies } from '@/components/home/CaseStudies';
import { Testimonials } from '@/components/home/Testimonials';
import { FAQ } from '@/components/home/FAQ';
import { ContactCTA } from '@/components/home/ContactCTA';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : 'en';
  const t = getTranslation(locale);

  return (
    <>
      <Header locale={locale} t={t} />
      <main>
        <Hero locale={locale} t={t} />
<Stats t={t} />
        <ServicesGrid locale={locale} t={t} />
        <CRMSection locale={locale} t={t} />
        <WebSection locale={locale} t={t} />
        <AutomationAISection locale={locale} t={t} />
        <TechStack t={t} />
        <WhyFamily t={t} />
        <ProcessTimeline t={t} />
        <CaseStudies locale={locale} t={t} />
        <Testimonials t={t} />
        <FAQ t={t} />
        <ContactCTA locale={locale} t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
