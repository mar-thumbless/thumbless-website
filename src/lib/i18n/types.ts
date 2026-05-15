export type Locale = 'en' | 'cs' | 'de';

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    crm: string;
    webDev: string;
    automation: string;
    ai: string;
    technologies: string;
    caseStudies: string;
    blog: string;
    career: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    titleEnd: string;
    description: string;
    cta1: string;
    cta2: string;
    stats: Array<{ value: string; label: string }>;
  };
  trust: {
    title: string;
    subtitle: string;
    items: Array<{ value: string; label: string; description: string }>;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
  };
  crm: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    cta: string;
    tools: string[];
  };
  webDev: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    cta: string;
  };
  automationAI: {
    badge: string;
    title: string;
    subtitle: string;
    automation: {
      title: string;
      description: string;
      features: string[];
    };
    ai: {
      title: string;
      description: string;
      features: string[];
    };
    cta: string;
  };
  techStack: {
    badge: string;
    title: string;
    subtitle: string;
    categories: Array<{
      name: string;
      items: string[];
    }>;
  };
  whyFamily: {
    badge: string;
    title: string;
    subtitle: string;
    reasons: Array<{
      title: string;
      description: string;
    }>;
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  caseStudies: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      industry: string;
      title: string;
      description: string;
      result: string;
      tags: string[];
    }>;
    cta: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      quote: string;
      author: string;
      role: string;
      company: string;
    }>;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contactCta: {
    badge: string;
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  footer: {
    tagline: string;
    columns: {
      company: {
        title: string;
        links: Array<{ label: string; href: string }>;
      };
      services: {
        title: string;
        links: Array<{ label: string; href: string }>;
      };
      technologies: {
        title: string;
        links: Array<{ label: string; href: string }>;
      };
      resources: {
        title: string;
        links: Array<{ label: string; href: string }>;
      };
      legal: {
        title: string;
        links: Array<{ label: string; href: string }>;
      };
    };
    contact: {
      title: string;
      email: string;
      phone?: string;
      address: string;
    };
    copyright: string;
    madeWith: string;
  };
  about: {
    hero: { badge: string; title: string; subtitle: string };
    story: { title: string; paragraphs: string[] };
    mission: { title: string; text: string };
    vision: { title: string; text: string };
    values: { title: string; items: Array<{ title: string; description: string }> };
    team: { title: string; subtitle: string };
  };
  contact: {
    hero: { badge: string; title: string; subtitle: string };
    form: {
      name: string;
      email: string;
      phone?: string;
      company: string;
      service: string;
      message: string;
      submit: string;
      success: string;
      services: string[];
    };
    info: {
      title: string;
      email: string;
      phone?: string;
      hours: string;
      hoursValue: string;
    };
  };
  privacy: {
    title: string;
    lastUpdated: string;
    sections: Array<{ title: string; content: string }>;
  };
  terms: {
    title: string;
    lastUpdated: string;
    sections: Array<{ title: string; content: string }>;
  };
  imprint: {
    title: string;
    sections: Array<{ title: string; content: string | string[] }>;
  };
}
