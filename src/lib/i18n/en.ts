import type { Translation } from './types';

export const en: Translation = {
  meta: {
    title: 'thumbless.cz — Technology Company',
    description: 'We implement CRM & ERP systems, build websites and web apps, automate business processes, and deploy AI solutions — with personal care and long-term commitment.',
  },
  nav: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    crm: 'CRM & ERP',
    webDev: 'Web Development',
    automation: 'Automation',
    ai: 'AI Solutions',
    technologies: 'Technologies',
    caseStudies: 'Case Studies',
    blog: 'Blog',
    career: 'Career',
    contact: 'Contact',
    getStarted: 'Get Started',
  },
  hero: {
    badge: 'Technology Company',
    title: 'Technology That',
    titleAccent: 'Grows With',
    titleEnd: 'Your Business',
    description: 'We implement CRM & ERP systems, build custom websites and web applications, automate your workflows, and deploy intelligent AI solutions — all with personal care, deep expertise, and a long-term partnership mindset.',
    cta1: 'Book a Free Consultation',
    cta2: 'Explore Our Services',
    stats: [
      { value: '50+', label: 'Projects Delivered' },
      { value: '5+', label: 'Years Active' },
    ],
  },
  trust: {
    title: 'Results That Speak',
    subtitle: 'Numbers behind our commitment to excellence',
    items: [
      { value: '50+', label: 'Projects Completed', description: 'Across multiple industries and business sizes' },
      { value: '5+', label: 'Years in Business', description: 'Building technology partnerships that last' },
      { value: '3', label: 'Countries Served', description: 'Czech Republic, Germany, and Austria' },
    ],
  },
  services: {
    badge: 'What We Do',
    title: 'End-to-End Technology Services',
    subtitle: 'From strategy to implementation and beyond — we cover every aspect of your digital transformation journey.',
    items: [
      {
        title: 'CRM & ERP Solutions',
        description: 'Implement and manage Pipedrive and Odoo to streamline sales, operations, and customer relationships.',
        features: ['Pipedrive CRM setup', 'Odoo ERP implementation', 'Custom workflows', 'Team training'],
      },
      {
        title: 'Web Development',
        description: 'Custom websites and web applications built for performance, scalability, and exceptional user experience.',
        features: ['Custom web applications', 'Corporate websites', 'E-commerce solutions', 'API integrations'],
      },
      {
        title: 'Business Automation',
        description: 'Eliminate repetitive tasks and connect your tools with intelligent automation workflows.',
        features: ['n8n workflows', 'Make.com scenarios', 'Process optimization', 'Data synchronization'],
      },
      {
        title: 'AI Implementation',
        description: 'Deploy cutting-edge AI solutions that enhance productivity and unlock new business capabilities.',
        features: ['LangChain applications', 'Custom AI assistants', 'AI company scoring', 'Predictive analytics'],
      },
      {
        title: 'Internal Tools',
        description: 'Custom dashboards, admin panels, and internal tools tailored to your team\'s unique workflows.',
        features: ['Admin dashboards', 'Reporting tools', 'Data visualization', 'Workflow tools'],
      },
      {
        title: 'API Integrations',
        description: 'Seamlessly connect your existing systems and third-party services for unified data flow.',
        features: ['REST API development', 'Webhook automation', 'Data migration', 'System synchronization'],
      },
    ],
  },
  crm: {
    badge: 'CRM & ERP',
    title: 'Streamline Your Business with the Right Systems',
    subtitle: 'Pipedrive & Odoo Specialists',
    description: 'We help businesses implement, configure, and get the most from their CRM and ERP systems. Whether you\'re adopting Pipedrive to supercharge your sales pipeline or deploying Odoo to unify your entire operation — we deliver solutions that actually work.',
    features: [
      'Full Pipedrive implementation and customization',
      'Odoo ERP setup across all business modules',
      'Custom pipelines, workflows, and automations',
      'Team training and onboarding support',
      'Ongoing management and optimization',
      'Data migration from legacy systems',
      'Integration with marketing and finance tools',
      'Custom reporting and analytics dashboards',
    ],
    cta: 'Discuss Your CRM Needs',
    tools: ['Pipedrive', 'Odoo', 'HubSpot', 'Zapier', 'Make.com'],
  },
  webDev: {
    badge: 'Web Development',
    title: 'Websites and Applications That Deliver Results',
    subtitle: 'Custom development, modern technology',
    description: 'We build more than websites — we build digital products that represent your brand, serve your customers, and grow your business. From sleek corporate sites to complex web applications, every project is crafted with precision and purpose.',
    features: [
      'Custom website design and development',
      'React, Next.js, and modern JavaScript frameworks',
      'PHP and Python backend development',
      'Database design and optimization',
      'E-commerce and payment integrations',
      'Performance optimization and SEO',
      'Progressive Web Apps (PWA)',
      'Accessibility (WCAG) compliance',
    ],
    cta: 'Start Your Project',
  },
  automationAI: {
    badge: 'Automation & AI',
    title: 'Work Smarter, Not Harder',
    subtitle: 'Automation and AI that transforms operations',
    automation: {
      title: 'Business Process Automation',
      description: 'Free your team from repetitive tasks. We design and deploy automation workflows using n8n, Make.com, and custom code that connect your systems and eliminate manual work.',
      features: [
        'Workflow design and documentation',
        'n8n and Make.com scenario building',
        'Cross-platform data synchronization',
        'Automated reporting and notifications',
        'Error handling and monitoring',
      ],
    },
    ai: {
      title: 'AI Solutions for Business',
      description: 'Leverage the power of modern AI to unlock new capabilities. From intelligent chatbots to AI company scoring and predictive analytics — we implement AI that delivers real business value.',
      features: [
        'Custom AI assistants and chatbots',
        'LangChain RAG applications',
        'AI systems for company scoring and evaluation',
        'AI-powered data analysis',
        'Integration with Claude, ChatGPT, and Codex',
      ],
    },
    cta: 'Automate Your Business',
  },
  techStack: {
    badge: 'Our Technology Stack',
    title: 'Built with Industry-Leading Tools',
    subtitle: 'We work with proven, modern technologies to deliver reliable and scalable solutions.',
    categories: [
      { name: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'PHP'] },
      { name: 'AI & Automation', items: ['LangChain', 'n8n', 'Make.com', 'Claude Code', 'ChatGPT', 'Codex'] },
      { name: 'CRM & ERP', items: ['Pipedrive', 'Odoo', 'HubSpot'] },
      { name: 'Infrastructure', items: ['Docker', 'GitHub', 'Linux', 'Nginx'] },
    ],
  },
  whyFamily: {
    badge: 'Why Thumbless',
    title: 'The Advantage of a Specialized Technology Partner',
    subtitle: 'Working with us is different from working with a large agency or a freelancer.',
    reasons: [
      {
        title: 'Personal Accountability',
        description: 'You work directly with the people building your product. No project managers in the middle, no hand-offs, no lost context.',
      },
      {
        title: 'Long-Term Thinking',
        description: 'We build for the future. Our recommendations prioritize what\'s right for your business over the next 5 years, not just the next sprint.',
      },
      {
        title: 'Deep Technical Expertise',
        description: 'Our team has hands-on experience across the full technology stack — from infrastructure to AI, from CRM to custom development.',
      },
      {
        title: 'Transparent Communication',
        description: 'Regular updates, honest timelines, and clear pricing. You always know where your project stands.',
      },
      {
        title: 'Flexible Engagement',
        description: 'From one-off projects to long-term managed partnerships — we adapt to what you need at each stage of your growth.',
      },
      {
        title: 'Real Outcomes',
        description: 'We measure our success by the business results we deliver for you, not just by code shipped or features launched.',
      },
    ],
  },
  process: {
    badge: 'Our Process',
    title: 'How We Work',
    subtitle: 'A clear, structured approach to every project — so you always know what comes next.',
    steps: [
      {
        number: '01',
        title: 'Discovery & Strategy',
        description: 'We start by deeply understanding your business, goals, and challenges. Then we design a technology strategy that makes sense.',
      },
      {
        number: '02',
        title: 'Planning & Design',
        description: 'Detailed project planning, technical architecture, and design concepts — all reviewed and approved before development begins.',
      },
      {
        number: '03',
        title: 'Development & Implementation',
        description: 'Agile development with regular check-ins and demos. You see progress at every stage, not just at the end.',
      },
      {
        number: '04',
        title: 'Testing & Quality Assurance',
        description: 'Thorough testing across all features, integrations, and edge cases before anything goes live.',
      },
      {
        number: '05',
        title: 'Launch & Deployment',
        description: 'Smooth, coordinated deployment with zero downtime. We handle all technical aspects so you can focus on your business.',
      },
      {
        number: '06',
        title: 'Support & Growth',
        description: 'Ongoing support, monitoring, and continuous improvement. We grow with you as your needs evolve.',
      },
    ],
  },
  caseStudies: {
    badge: 'Case Studies',
    title: 'Real Results for Large Projects',
    subtitle: 'A selection of projects that showcase what we deliver.',
    items: [
      {
        industry: 'Manufacturing',
        title: 'Odoo ERP Implementation for a Czech Manufacturer',
        description: 'Complete Odoo deployment covering inventory, production planning, accounting, and CRM for a mid-size manufacturing company.',
        result: '60% reduction in manual data entry',
        tags: ['Odoo', 'ERP', 'Manufacturing'],
      },
      {
        industry: 'Professional Services',
        title: 'Pipedrive CRM & Sales Automation',
        description: 'Full Pipedrive setup with custom pipelines, email automation, and integration with their accounting software.',
        result: '3x faster deal closing process',
        tags: ['Pipedrive', 'CRM', 'Automation'],
      },
      {
        industry: 'Aviation',
        title: 'Web Application for OGN Flight Tracking',
        description: 'Next.js web application for tracking flights from the OGN network with an aeroclub portal, member management, and flight planning.',
        result: 'Real-time automated flight tracking',
        tags: ['Next.js', 'Web App', 'Aeroclub'],
      },
      {
        industry: 'Automotive',
        title: 'AI System for Company Scoring',
        description: 'LangChain-based system that analyzes and evaluates company data for automated decision-making in business cooperation.',
        result: '70% reduction in company evaluation time',
        tags: ['AI', 'LangChain', 'Scoring'],
      },
    ],
    cta: 'View All Case Studies',
  },
  testimonials: {
    badge: 'Testimonials',
    title: 'What Our Clients Say',
    subtitle: 'Hear from the businesses we\'ve partnered with.',
    items: [
      {
        quote: 'Thumbless transformed how we manage our sales process. The Pipedrive implementation was exactly what we needed, and the ongoing support has been exceptional.',
        author: 'Jana Procházková',
        role: 'CSO',
        company: '',
      },
      {
        quote: 'The system Thumbless designed has fundamentally simplified how we run our aeroclub. Members love the access to flight statistics and the OGN integration works flawlessly.',
        author: 'Martin Novák',
        role: 'Aeroclub Chairman',
        company: '',
      },
      {
        quote: 'Our new website looks incredible and performs brilliantly. What impressed us most was how well they understood our business before writing a single line of code.',
        author: 'Stefan Müller',
        role: 'Managing Director',
        company: '',
      },
    ],
  },
  faq: {
    badge: 'FAQ',
    title: 'Frequently Asked Questions',
    subtitle: 'Answers to the questions we hear most often.',
    items: [
      {
        question: 'How do you typically structure a project engagement?',
        answer: 'We start with a free discovery call to understand your needs. From there, we prepare a detailed proposal with scope, timeline, and pricing. Projects are typically structured in phases with regular check-ins and deliverables at each stage.',
      },
      {
        question: 'Do you work with small businesses or only larger companies?',
        answer: 'We work with businesses of all sizes. Our focused team structure means we can be flexible and cost-effective for smaller clients while having the expertise to handle complex enterprise requirements.',
      },
      {
        question: 'What happens after the project is delivered?',
        answer: 'We offer ongoing support and maintenance packages. Many of our clients work with us on a monthly retainer basis for continued development, optimization, and support.',
      },
      {
        question: 'Do you support Pipedrive and Odoo after implementation?',
        answer: 'Yes — we provide ongoing CRM and ERP management, including user support, workflow adjustments, new module implementation, and performance optimization.',
      },
      {
        question: 'Can you integrate with our existing systems?',
        answer: 'Absolutely. API integration is one of our core competencies. We\'ve connected dozens of systems — from accounting software to marketing platforms to custom databases.',
      },
      {
        question: 'How do you handle data security and privacy?',
        answer: 'We take data security seriously. All projects follow best practices for secure development, and we\'re happy to sign NDAs and data processing agreements as required.',
      },
    ],
  },
  contactCta: {
    badge: 'Ready to Start?',
    title: 'Let\'s Build Something Great Together',
    subtitle: 'Book a free 30-minute consultation. No commitment, no pressure — just an honest conversation about your technology needs.',
    cta1: 'Book a Free Consultation',
    cta2: 'Send Us a Message',
  },
  footer: {
    tagline: 'A technology company delivering CRM & ERP, web development, automation, and AI solutions with personal care and long-term commitment.',
    columns: {
      company: {
        title: 'Company',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Our Team', href: '/about#team' },
          { label: 'Our Values', href: '/about#values' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Career', href: '/career' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      services: {
        title: 'Services',
        links: [
          { label: 'All Services', href: '/services' },
          { label: 'CRM & ERP Solutions', href: '/services/crm-erp' },
          { label: 'Web Development', href: '/services/web-development' },
          { label: 'Business Automation', href: '/services/automation' },
          { label: 'AI Implementation', href: '/services/ai-solutions' },
          { label: 'API Integrations', href: '/services#api' },
          { label: 'Internal Tools', href: '/services#tools' },
        ],
      },
      technologies: {
        title: 'Technologies',
        links: [
          { label: 'Pipedrive', href: '/technologies#pipedrive' },
          { label: 'Odoo', href: '/technologies#odoo' },
          { label: 'n8n Automation', href: '/technologies#n8n' },
          { label: 'Make.com', href: '/technologies#make' },
          { label: 'LangChain & AI', href: '/technologies#ai' },
          { label: 'Python & JavaScript', href: '/technologies#dev' },
          { label: 'Docker & DevOps', href: '/technologies#devops' },
        ],
      },
      resources: {
        title: 'Resources',
        links: [
          { label: 'Career', href: '/career' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Technologies Overview', href: '/technologies' },
          { label: 'Book a Consultation', href: '/contact' },
          { label: 'FAQ', href: '/#faq' },
        ],
      },
      legal: {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/privacy-policy' },
          { label: 'Terms of Service', href: '/terms-of-service' },
          { label: 'Imprint', href: '/imprint' },
          { label: 'Cookie Policy', href: '/privacy-policy#cookies' },
        ],
      },
    },
    contact: {
      title: 'Get in Touch',
      email: 'support@thumbless.cz',
      address: 'Prague, Dvůr Králové, Czech Republic',
    },
    copyright: '© 2026 thumbless.cz. All rights reserved.',
    madeWith: 'Built with care in the Czech Republic',
  },
  about: {
    hero: {
      badge: 'About Us',
      title: 'A Team with a Technology Heart',
      subtitle: 'We combine deep technical expertise with enthusiasm for the latest technologies — transparency, accountability, and genuine care for our clients.',
    },
    story: {
      title: 'Our Story',
      paragraphs: [
        'Thumbless was born from a shared passion for technology. As graduates of technical universities with a deep interest in the latest trends, we decided to combine our expertise and build a company that delivers modern technology solutions with a personal touch.',
        'We\'ve been active for 5 years and have established a strong presence in the Czech market, while also growing in the German market — through both direct client projects and larger engagements in partnership with specialized firms. Our experience spans CRM/ERP implementations, custom web application development, and AI solution deployment.',
        'We follow technological trends with enthusiasm and strive to apply them meaningfully in practice. We approach every project as an opportunity to deliver real value to our clients — and that\'s what drives us forward.',
      ],
    },
    mission: {
      title: 'Our Mission',
      text: 'To empower businesses with technology solutions that are practical, powerful, and built to last — delivered with the personal commitment of a trusted long-term partner.',
    },
    vision: {
      title: 'Our Vision',
      text: 'A world where every business, regardless of size, has access to modern technology implemented by people who truly understand their needs.',
    },
    values: {
      title: 'Our Values',
      items: [
        { title: 'Transparency', description: 'Honest communication, clear pricing, and no surprises.' },
        { title: 'Excellence', description: 'We hold ourselves to the highest technical and professional standards.' },
        { title: 'Partnership', description: 'Your success is our success. We think long-term, not transactional.' },
        { title: 'Accountability', description: 'We own our commitments and deliver on our promises.' },
        { title: 'Innovation', description: 'We continuously evolve to bring you the best modern solutions.' },
        { title: 'Care', description: 'Every client and project receives our full attention and genuine dedication.' },
      ],
    },
    team: {
      title: 'The Team Behind thumbless.cz',
      subtitle: 'Experienced technology enthusiasts for your digital projects.',
    },
  },
  contact: {
    hero: {
      badge: 'Contact Us',
      title: 'Let\'s Start a Conversation',
      subtitle: 'Tell us about your project and we\'ll get back to you within one business day.',
    },
    form: {
      name: 'Your Name',
      email: 'Email Address',
      company: 'Company Name',
      service: 'Service You\'re Interested In',
      message: 'Tell us about your project...',
      submit: 'Send Message',
      success: 'Thank you! We\'ll be in touch within one business day.',
      services: [
        'CRM & ERP Implementation',
        'Web Development',
        'Business Automation',
        'AI Solutions',
        'API Integration',
        'Internal Tools',
        'Consultation Only',
        'Other',
      ],
    },
    info: {
      title: 'Contact Information',
      email: 'support@thumbless.cz',
      hours: 'Business Hours',
      hoursValue: 'Monday – Friday, 9:00 – 18:00 CET',
    },
  },
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: January 1, 2026',
    sections: [
      {
        title: '1. Data Controller',
        content: 'thumbless.cz is the controller of your personal data. We process personal data in accordance with Regulation (EU) 2016/679 (GDPR) and applicable Czech data protection law.',
      },
      {
        title: '2. Data We Collect',
        content: 'We collect data you provide directly (name, email, company name) when you contact us or use our services. We may also collect technical data such as IP address and browser type through standard web analytics.',
      },
      {
        title: '3. Purpose of Processing',
        content: 'We use your data to respond to inquiries, provide our services, send service-related communications, and improve our website. We do not sell your data to third parties.',
      },
      {
        title: '4. Your Rights',
        content: 'You have the right to access, correct, delete, or restrict processing of your personal data. You may also object to processing or request data portability. Contact us at support@thumbless.cz to exercise these rights.',
      },
      {
        title: '5. Cookies',
        content: 'Our website uses essential cookies for functionality and analytics cookies to improve user experience. You can control cookie preferences through your browser settings.',
      },
      {
        title: '6. Data Retention',
        content: 'We retain personal data for as long as necessary to provide our services or as required by law. Inquiry data is typically retained for 3 years unless you request deletion.',
      },
      {
        title: '7. Contact',
        content: 'For privacy-related inquiries, contact us at: support@thumbless.cz',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'Last updated: January 1, 2026',
    sections: [
      {
        title: '1. Scope',
        content: 'These Terms of Service govern the use of thumbless.cz services and website. By engaging our services, you agree to these terms.',
      },
      {
        title: '2. Services',
        content: 'thumbless.cz provides technology services including CRM/ERP implementation, web development, automation, and AI solutions. The specific scope of services is defined in individual project agreements.',
      },
      {
        title: '3. Payment Terms',
        content: 'Payment terms are specified in individual project proposals. Invoices are due within 14 days of issuance unless otherwise agreed. Late payments may incur interest.',
      },
      {
        title: '4. Intellectual Property',
        content: 'Upon full payment, clients receive ownership of custom deliverables. Third-party tools, libraries, and frameworks remain subject to their respective licenses.',
      },
      {
        title: '5. Confidentiality',
        content: 'We treat all client information as confidential and do not disclose it to third parties without consent, except as required by law.',
      },
      {
        title: '6. Limitation of Liability',
        content: 'Our liability is limited to the value of the project or service in question. We are not liable for indirect or consequential damages.',
      },
      {
        title: '7. Governing Law',
        content: 'These terms are governed by Czech law. Disputes shall be resolved in Czech courts.',
      },
    ],
  },
  imprint: {
    title: 'Imprint / Legal Notice',
    sections: [
      { title: 'Name', content: 'thumbless.cz' },
      { title: 'Legal Form', content: 'Limited Liability Company (s.r.o.)' },
      { title: 'Registered Office', content: 'Prague, Dvůr Králové, Czech Republic' },
      { title: 'Registration', content: 'Registered in the Commercial Register maintained by the relevant Czech Regional Court' },
      { title: 'VAT Number', content: 'CZ000000000' },
      { title: 'Contact', content: ['Email: support@thumbless.cz'] },
      { title: 'Responsible for Content', content: 'Managing Director, thumbless.cz' },
      { title: 'Dispute Resolution', content: 'The European Commission provides a platform for online dispute resolution: https://ec.europa.eu/consumers/odr/' },
    ],
  },
};
