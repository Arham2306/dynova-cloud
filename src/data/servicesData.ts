import imgWebDev from '../assets/services/Web Development.jpg';
import imgEcommerce from '../assets/services/E-Commerce.jpg';
import imgLogoDesigning from '../assets/services/Logo Designing.jpg';
import imgDigitalMarketing from '../assets/services/Digital Marketing.jpg';

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

export interface DeliverableItem {
  num: string;
  title: string;
  summary: string;
  features: string[];
}

export interface TechCategory {
  category: string;
  technologies: string[];
}

export interface RoadmapPhase {
  phase: string;
  timeline: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  heroDescription: string;
  heroImage: string;
  keyMetrics: MetricItem[];
  overview: {
    problemTitle: string;
    problemDescription: string;
    solutionTitle: string;
    solutionDescription: string;
  };
  deliverables: DeliverableItem[];
  techStack: TechCategory[];
  processRoadmap: RoadmapPhase[];
  faqs: FaqItem[];
  relatedServices: {
    title: string;
    slug: string;
    description: string;
  }[];
}

export const SERVICES_PAGE_DATA: Record<string, ServicePageData> = {
  'website-development': {
    slug: 'website-development',
    title: 'Website Development',
    eyebrow: 'ENGINEERING & ARCHITECTURE // ENTERPRISE WEB SYSTEMS',
    metaTitle: 'Website Development Services — WordPress, Webflow, Shopify & Custom | Dynova Cloud',
    metaDescription: 'End-to-end website development across WordPress, Webflow, Shopify, and custom React/Next.js platforms. Engineered for sub-second speed, 95+ Core Web Vitals, and organic search dominance.',
    heroTagline: 'Bespoke Web Development Across WordPress, Webflow, Shopify & Custom Engineering',
    heroDescription: 'We architect and build high-performance web platforms tailored to your business model. Whether you need an enterprise custom React/Next.js platform, a flexible WordPress CMS, an agile Webflow build, or a high-converting Shopify storefront, we deliver clean code, sub-second speeds, and built-in technical SEO.',
    heroImage: imgWebDev,
    keyMetrics: [
      {
        value: '99.8%',
        label: 'Core Web Vitals SLA',
        detail: 'Guaranteed green benchmarks across LCP, CLS, and INP on all platforms.'
      },
      {
        value: '< 400ms',
        label: 'Global TTFB Average',
        detail: 'Edge-rendered and globally cached via modern CDN infrastructure.'
      },
      {
        value: '4 Platforms',
        label: 'Full-Stack Mastery',
        detail: 'Expertise across WordPress, Webflow, Shopify, and Custom React/Next.js.'
      },
      {
        value: '+185%',
        label: 'Organic Visibility Index',
        detail: 'Semantic HTML5 hierarchies and structured JSON-LD schema markup built-in.'
      }
    ],
    overview: {
      problemTitle: 'One Size Does Not Fit All in Web Development',
      problemDescription: 'Many agencies force clients into their single favorite tool—whether forcing a simple marketing site into a complex custom app, or stretching a rigid commercial template beyond its limits. The result is bloated code, maintenance headaches, sluggish load times, and poor conversion rates that drain ad spend.',
      solutionTitle: 'The Right Platform Engineered for Your Goals',
      solutionDescription: 'We evaluate your business objectives, team workflow, and scalability needs to select and architect the perfect stack. Whether leveraging the rapid visual power of Webflow, the editorial flexibility of WordPress, the commercial engine of Shopify, or the unlimited capabilities of custom React/Next.js, every build is crafted with strict speed standards, zero bloat, and conversion-first engineering.'
    },
    deliverables: [
      {
        num: '01',
        title: 'Custom React & Next.js Web Engineering',
        summary: 'Bespoke web applications and composable platforms built for enterprise scale, custom logic, and instant speeds.',
        features: [
          'Next.js Server Components and dynamic code-splitting for minimal bundle weight',
          'TypeScript end-to-end type safety for maximum stability and zero runtime errors',
          'Decoupled API architectures, custom database backends, and microservices',
          'Strict WCAG 2.1 AA accessibility compliance across all interactive elements'
        ]
      },
      {
        num: '02',
        title: 'Enterprise WordPress & Headless CMS',
        summary: 'Clean, secure, and speed-optimized WordPress architectures with bespoke themes and intuitive Gutenberg blocks.',
        features: [
          'Custom-engineered themes without sluggish visual page builder bloat',
          'Custom Gutenberg block libraries tailored to your marketing team’s workflow',
          'Headless WordPress setups utilizing WPGraphQL and modern decoupled frontends',
          'Hardened enterprise security configurations, Redis caching, and automated backups'
        ]
      },
      {
        num: '03',
        title: 'Webflow Design Systems & CMS Scaling',
        summary: 'Fast, design-forward Webflow websites with clean component structures, responsive layouts, and dynamic CMS collections.',
        features: [
          'Bespoke design systems built with Client-First or Relume architectural standards',
          'Dynamic multi-reference CMS collections for rapid content scaling',
          'Custom JavaScript, GSAP animations, and third-party API integrations',
          'SEO-optimized semantic HTML5 tags and clean-code export capabilities'
        ]
      },
      {
        num: '04',
        title: 'Custom Shopify & E-Commerce Web Development',
        summary: 'High-converting Shopify storefronts engineered with custom Liquid code, instant checkout, and app optimization.',
        features: [
          'Bespoke Shopify theme development with zero reliance on bulky commercial templates',
          'Frictionless 1-click checkout optimization and mobile conversion funnels',
          'Custom Shopify app integrations, ERP/CRM synchronization, and webhooks',
          'Sub-1.2 second load times across catalog, collection, and product pages'
        ]
      },
      {
        num: '05',
        title: 'Technical On-Page SEO & Schema Architecture',
        summary: 'Search-engine-first engineering built directly into the codebase across every platform.',
        features: [
          'Comprehensive JSON-LD schema markup (Organization, Service, FAQ, Breadcrumb)',
          'Automated dynamic XML sitemaps, canonical link governance, and robots rules',
          'Semantic HTML5 document hierarchy with logical heading and landmark structures',
          'Optimized social OpenGraph and Twitter Card media for maximum click-throughs'
        ]
      },
      {
        num: '06',
        title: 'Performance Engineering & Core Web Vitals Optimization',
        summary: 'Rigorous optimization ensuring your platform passes all Google page experience benchmarks.',
        features: [
          'Largest Contentful Paint (LCP) consistently optimized under 1.2 seconds',
          'Zero Cumulative Layout Shift (CLS: 0.00) via fixed media aspect ratios',
          'Interaction to Next Paint (INP) under 100ms through streamlined JS execution',
          'Next-generation WebP/AVIF media delivery and server-level edge caching'
        ]
      }
    ],
    techStack: [
      {
        category: 'CMS & Storefront Platforms',
        technologies: ['WordPress (Custom & Headless)', 'Webflow', 'Shopify & Shopify Plus', 'Sanity.io', 'Strapi']
      },
      {
        category: 'Frontend & Frameworks',
        technologies: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Modern Liquid / HTML5']
      },
      {
        category: 'Edge & Cloud Infrastructure',
        technologies: ['Cloudflare CDN', 'Vercel Edge', 'WP Engine / Kinsta', 'AWS S3', 'GitHub Actions']
      },
      {
        category: 'Testing & Telemetry',
        technologies: ['Google Lighthouse CI', 'Google Search Console', 'GTmetrix', 'Sentry Monitoring']
      }
    ],
    processRoadmap: [
      {
        phase: 'PHASE 01',
        timeline: 'Week 1 – 2',
        title: 'Platform Discovery & Information Architecture',
        description: 'Comprehensive audit of current digital assets, tech stack evaluation (WordPress, Webflow, Shopify, or Custom), SEO keyword hierarchy mapping, and wireframing.'
      },
      {
        phase: 'PHASE 02',
        timeline: 'Week 2 – 3',
        title: 'Design Tokens & High-Fidelity UI Prototyping',
        description: 'Creation of a bespoke design system, typography scales, color palettes, responsive desktop/mobile mockups, and interactive user-testing prototypes.'
      },
      {
        phase: 'PHASE 03',
        timeline: 'Week 4 – 6',
        title: 'Platform Development & Integration',
        description: 'Production-grade engineering on your chosen platform, CMS collection configuration, third-party API wiring, on-page SEO schema implementation, and performance budgeting.'
      },
      {
        phase: 'PHASE 04',
        timeline: 'Week 7',
        title: 'Rigorous QA, Core Web Vitals Audit & Launch',
        description: 'Cross-browser compatibility testing, mobile usability checks, SEO schema validation, edge caching configuration, and a seamless zero-downtime DNS cutover.'
      }
    ],
    faqs: [
      {
        question: 'Which web platform is right for my business (WordPress, Webflow, Shopify, or Custom Next.js)?',
        answer: 'It depends on your business model, content velocity, and team workflow. For content-heavy marketing teams, WordPress offers unmatched editorial flexibility. For high-growth SaaS and design-forward brands, Webflow provides rapid visual deployment. For commerce, Shopify is the gold standard. For complex web applications and high concurrency portals, custom React/Next.js provides limitless power. During our discovery phase, we evaluate your needs and recommend the exact right stack.'
      },
      {
        question: 'Can you build a high-performance, fast site on WordPress or Webflow without plugin bloat?',
        answer: 'Yes, absolutely. Slow WordPress sites are caused by pre-packaged commercial themes and dozens of conflicting plugins. We build bespoke, lightweight WordPress themes using custom Gutenberg blocks and clean code that consistently achieve 95+ Google Lighthouse scores. Similarly, our Webflow builds adhere strictly to Client-First CSS standards and lightweight scripts.'
      },
      {
        question: 'Will our new website pass Google Core Web Vitals on all platforms?',
        answer: 'Yes, 100% guaranteed. Regardless of whether we build on WordPress, Webflow, Shopify, or custom React/Next.js, every site is audited and optimized to pass all Core Web Vitals (LCP under 1.2s, CLS 0.00, and INP under 100ms) on mobile and desktop.'
      },
      {
        question: 'Can you migrate our existing website to a new platform without losing SEO rankings?',
        answer: 'Yes. We conduct a rigorous 1-to-1 URL mapping audit, implement permanent 301 redirects, preserve all existing on-page metadata, and verify Google Search Console indexation to safeguard and grow your organic traffic.'
      },
      {
        question: 'What happens after launch? Do you provide ongoing maintenance and SLA support?',
        answer: 'Yes. We offer dedicated SLA support packages tailored to your chosen platform, including 24/7 uptime monitoring, core updates, security patching, CDN management, and ongoing feature development.'
      }
    ],
    relatedServices: [
      {
        title: 'E-Commerce',
        slug: 'ecommerce',
        description: 'High-conversion Shopify Plus & headless storefronts built for checkout velocity.'
      },
      {
        title: 'Logo Designing',
        slug: 'logo-designing',
        description: 'Distinctive brand identities, iconic vector marks, and complete design guidelines.'
      },
      {
        title: 'Digital Marketing',
        slug: 'digital-marketing',
        description: 'Data-driven omnichannel acquisition funnels, technical SEO, and high-ROAS paid media.'
      }
    ]
  },
  'ecommerce': {
    slug: 'ecommerce',
    title: 'E-Commerce',
    eyebrow: 'COMMERCE ARCHITECTURE // HIGH-VELOCITY STOREFRONTS',
    metaTitle: 'E-Commerce Development & Shopify Plus Architecture | Dynova Cloud',
    metaDescription: 'High-converting Shopify Plus and headless commerce architectures built for checkout velocity, mobile conversion rate optimization, and international scale.',
    heroTagline: 'High-Conversion Storefronts Engineered for Velocity & Scale',
    heroDescription: 'We design and engineer high-performance e-commerce platforms that transform browsing traffic into high-value customers. Leveraging Shopify Plus and headless architectures, we deliver sub-1.2s checkouts, seamless ERP/CRM integrations, and custom shopping experiences.',
    heroImage: imgEcommerce,
    keyMetrics: [
      {
        value: '< 1.2s',
        label: 'Checkout Velocity',
        detail: 'Frictionless 1-click accelerated checkout paths.'
      },
      {
        value: '+148%',
        label: 'Mobile Conversion Lift',
        detail: 'Engineered specifically for handheld conversion psychology.'
      },
      {
        value: '99.99%',
        label: 'Peak Traffic Uptime',
        detail: 'Tested and proven through high-volume Black Friday flash sales.'
      },
      {
        value: '3.9x',
        label: 'Average Customer LTV Lift',
        detail: 'Integrated post-purchase upsells and retention funnels.'
      }
    ],
    overview: {
      problemTitle: 'The Revenue Leak of Slow, Clunky Storefronts',
      problemDescription: 'Every 100ms of checkout latency costs e-commerce stores 1% in conversions. Off-the-shelf themes with dozens of conflicting apps cause slow page loads, cart abandonment, and clunky mobile experiences that drain ad profitability.',
      solutionTitle: 'The Dynova High-Velocity Commerce Architecture',
      solutionDescription: 'We build streamlined, custom Shopify Plus and headless storefronts engineered around conversion rate optimization (CRO). Clean code, instant page loads, intuitive collection filters, and frictionless checkout flows maximize average order value (AOV) and gross merchandise value (GMV).'
    },
    deliverables: [
      {
        num: '01',
        title: 'Shopify Plus & Custom Headless Storefront Architecture',
        summary: 'Bespoke commerce storefronts engineered for high-transaction velocity, sub-second product pages, and zero layout shift.',
        features: [
          'Shopify Liquid 2.0 & Headless React/Next.js store architectures',
          'Sub-1.2 second average mobile checkout completion rates',
          'Custom collection filters, faceted search, and predictive suggestions',
          'Zero-CLS responsive image pipelines and modern WebP/AVIF compression'
        ]
      },
      {
        num: '02',
        title: 'Frictionless 1-Click Checkout & Payment Orchestration',
        summary: 'Accelerated checkout funnels that remove friction, eliminate drop-off, and capture maximum conversion intent.',
        features: [
          'Native Shop Pay, Apple Pay, Google Pay & Klarna integrations',
          'Custom checkout branding and dynamic cart drawer progress bars',
          'Frictionless address autocomplete and multi-currency conversion',
          'Post-purchase upsell and cross-sell trigger workflows'
        ]
      },
      {
        num: '03',
        title: 'ERP, Inventory & Automated Logistics Integrations',
        summary: 'Real-time multi-channel inventory synchronization that eliminates overselling and automates fulfillment pipelines.',
        features: [
          'Bi-directional ERP sync (NetSuite, SAP, Katana, QuickBooks)',
          'Automated 3PL, ShipStation, and custom fulfillment webhooks',
          'Real-time warehouse inventory reservations and low-stock alerts',
          'Automated tracking notifications via SMS and branded email'
        ]
      },
      {
        num: '04',
        title: 'E-Commerce Technical SEO & Structured Schema Architecture',
        summary: 'Deep product catalog search engine optimization designed to dominate commercial search results and Google Shopping feeds.',
        features: [
          'Comprehensive Product, Offer, AggregateRating & Breadcrumb JSON-LD markup',
          'Automated Google Merchant Center & Meta Catalog XML feeds',
          'Clean URL hierarchies and canonicalization preventing duplicate content',
          'Faceted navigation SEO indexing controls preventing crawl budget waste'
        ]
      },
      {
        num: '05',
        title: 'Customer Retention, Loyalty & Lifecycle Automation',
        summary: 'High-converting lifecycle engines engineered to maximize Customer Lifetime Value (LTV) and drive repeat purchases.',
        features: [
          'Klaviyo email & SMS automated flows (abandoned cart, browse abandonment, win-back)',
          'Tiered VIP customer rewards and loyalty program implementations (Yotpo, Smile.io)',
          'Subscription billing infrastructure (Recharge, Skio) for recurring revenue',
          'Direct customer review capture workflows with rich snippets'
        ]
      },
      {
        num: '06',
        title: 'Enterprise Security, Compliance & Flash-Sale Resilience',
        summary: 'Battle-tested infrastructure engineered to maintain 99.99% uptime through extreme traffic spikes and Black Friday surges.',
        features: [
          'Level 1 PCI-DSS compliant checkout and tokenized credit card data',
          'DDoS protection and edge rate limiting via enterprise Cloudflare CDN',
          'Synthetic stress-testing simulating 10,000+ simultaneous checkouts',
          'Continuous uptime monitoring and automated rollback safeguards'
        ]
      }
    ],
    techStack: [
      {
        category: 'Commerce Engines',
        technologies: ['Shopify Plus', 'Shopify Hydrogen', 'WooCommerce', 'BigCommerce', 'Medusa']
      },
      {
        category: 'Frontend & Architecture',
        technologies: ['React', 'Next.js Commerce', 'Tailwind CSS', 'GraphQL Storefront API', 'TypeScript']
      },
      {
        category: 'Retention & Payments',
        technologies: ['Klaviyo', 'Shop Pay', 'Stripe', 'Recharge Subscriptions', 'Gorgias', 'Yotpo']
      },
      {
        category: 'Infrastructure & Edge',
        technologies: ['Shopify Edge', 'Cloudflare Workers', 'Vercel Enterprise', 'Algolia Search']
      }
    ],
    processRoadmap: [
      {
        phase: 'PHASE 01',
        timeline: 'Week 1 – 2',
        title: 'Commerce Architecture & Catalog Audit',
        description: 'Deep audit of existing SKUs, collection hierarchies, third-party app dependencies, checkout bottlenecks, and conversion leakage.'
      },
      {
        phase: 'PHASE 02',
        timeline: 'Week 2 – 4',
        title: 'UX/UI Wireframing & High-Converting Prototyping',
        description: 'Designing bespoke desktop and mobile checkout journeys, interactive collection filter mockups, and friction-free product pages.'
      },
      {
        phase: 'PHASE 03',
        timeline: 'Week 4 – 7',
        title: 'Storefront Engineering & System Integration',
        description: 'Full-stack theme development, third-party ERP/CRM webhook integration, product catalog migration, and automated email flow deployment.'
      },
      {
        phase: 'PHASE 04',
        timeline: 'Week 8',
        title: 'Checkout QA, Load Testing & Seamless Launch',
        description: 'End-to-end payment gateway validation, multi-currency testing, synthetic load simulation, 301 URL redirect verification, and DNS cutover.'
      }
    ],
    faqs: [
      {
        question: 'Why choose Shopify Plus or custom development over generic commercial themes?',
        answer: 'Generic off-the-shelf themes are weighed down by thousands of lines of unused JavaScript, rigid layouts, and app conflicts that destroy mobile speed. Our bespoke builds are engineered from scratch for sub-second speeds, tailored brand aesthetics, and maximum conversion rates.'
      },
      {
        question: 'Can you migrate our existing store from WooCommerce, Magento, or BigCommerce to Shopify?',
        answer: 'Yes. We manage end-to-end data migrations including product catalogs, customer accounts, order histories, and SEO redirects. Every existing URL is mapped 1:1 with 301 redirects to ensure zero loss in search engine rankings.'
      },
      {
        question: 'How do you ensure our store performs fast despite tracking pixels and apps?',
        answer: 'We utilize Google Tag Manager Server-Side and Meta Conversions API (CAPI) to execute tracking on cloud servers rather than loading bulky scripts on the shopper’s device. This keeps your mobile storefront blazing fast while delivering 100% accurate attribution.'
      },
      {
        question: 'Can we offer subscriptions and recurring billing?',
        answer: 'Yes. We integrate enterprise subscription infrastructure such as Recharge, Skio, or native Shopify Subscriptions directly into your product pages and customer portal.'
      },
      {
        question: 'What ongoing support do you offer for high-volume stores?',
        answer: 'We provide monthly growth retainers covering continuous CRO A/B testing, speed maintenance, new feature rollouts, and priority flash-sale engineering support during peak retail seasons.'
      }
    ],
    relatedServices: [
      {
        title: 'Website Development',
        slug: 'website-development',
        description: 'Bespoke web platforms across WordPress, Webflow, Shopify, and custom React/Next.js.'
      },
      {
        title: 'Digital Marketing',
        slug: 'digital-marketing',
        description: 'Omnichannel paid acquisition, technical SEO, and high-ROAS Meta & Google funnels.'
      },
      {
        title: 'Logo Designing',
        slug: 'logo-designing',
        description: 'Iconic vector logo marks, typography hierarchies, and complete visual guidelines.'
      }
    ]
  },
  'logo-designing': {
    slug: 'logo-designing',
    title: 'Logo Designing',
    eyebrow: 'BRAND IDENTITY // VISUAL SYSTEMS & AESTHETICS',
    metaTitle: 'Logo Designing & Brand Identity Systems | Dynova Cloud',
    metaDescription: 'Iconic logo design, comprehensive vector systems, and luxury brand identity guidelines that establish authority and command market recognition.',
    heroTagline: 'Distinctive Visual Identities Crafted to Command Market Authority',
    heroDescription: 'A great brand identity creates instant trust and commands premium positioning. We craft iconic vector logo marks, typography hierarchies, and complete visual design guidelines that resonate across digital, print, and physical touchpoints.',
    heroImage: imgLogoDesigning,
    keyMetrics: [
      {
        value: '96.4%',
        label: 'Brand Recall Rate',
        detail: 'Distinctive geometric marks built for lasting memorability.'
      },
      {
        value: '100%',
        label: 'Vector Scalability',
        detail: 'Infinitely scalable from 16px favicons to billboard displays.'
      },
      {
        value: '40+',
        label: 'Brand Assets Delivered',
        detail: 'Complete design tokens, lockups, color codes, and social kits.'
      },
      {
        value: '100%',
        label: 'Trademark Ready',
        detail: 'Original, bespoke vector craftsmanship with full copyright handover.'
      }
    ],
    overview: {
      problemTitle: 'Generic Logos Inhibit Growth & Erode Trust',
      problemDescription: 'Template logos and AI-generated emblems look cheap, lack brand personality, and fail to differentiate your business in competitive markets. Without a cohesive visual identity, customers perceive lower product value and hesitate to convert.',
      solutionTitle: 'Strategic Brand Identity Systems',
      solutionDescription: 'We distill your brand essence, market positioning, and audience psychology into a memorable visual identity. From vector emblems to typography guidelines and color science, we equip your business with a brand system that radiates credibility and prestige.'
    },
    deliverables: [
      {
        num: '01',
        title: 'Bespoke Vector Logo Marks & Lockup Suite',
        summary: 'Original, iconic vector marks designed with mathematical harmony, balance, and distinctive geometric silhouettes.',
        features: [
          'Primary horizontal and stacked vertical logo orientations',
          'Minimalist icon/monogram variation for mobile and app icons',
          'Reverse monochrome, dark mode, and high-contrast accessibility variants',
          'Infinitely scalable vector assets in AI, EPS, SVG, and high-res PNG formats'
        ]
      },
      {
        num: '02',
        title: 'Comprehensive Brand Identity Guidelines (Style Guide)',
        summary: 'An authoritative brand Bible defining rules of engagement, visual dos and don’ts, and brand governance.',
        features: [
          'Clearspace rules, minimum reproduction sizes, and improper usage warnings',
          'Grid construction geometry and visual alignment blueprints',
          'Voice, tone, and brand positioning alignment documentation',
          'Exported as an interactive digital guide and executive PDF manual'
        ]
      },
      {
        num: '03',
        title: 'Color Science & Cross-Medium Color Palettes',
        summary: 'Scientifically calibrated color palettes formulated for digital screens, print collateral, and packaging.',
        features: [
          'Exact Pantone (PMS) spot color specifications for physical manufacturing',
          'CMYK formulas for premium offset and digital commercial printing',
          'RGB and HEX design tokens for responsive web and mobile interfaces',
          'WCAG 2.1 AA/AAA accessibility contrast compliance certification'
        ]
      },
      {
        num: '04',
        title: 'Typography System & Custom Type Pairing Hierarchy',
        summary: 'Curated typographic pairings that establish instant readability, visual hierarchy, and brand authority.',
        features: [
          'Primary display typeface, secondary body font, and tabular numeral pairings',
          'Open-source and commercial webfont licensing guidance (Google Fonts / Adobe)',
          'Desktop and mobile responsive type scale rules (H1 through H6, captions)',
          'Custom kerning pairs and display font treatment specifications'
        ]
      },
      {
        num: '05',
        title: 'Digital Collateral, Social Media & Marketing Kit',
        summary: 'Turnkey visual assets formatted and optimized for modern digital channels, social platforms, and stationery.',
        features: [
          'Social media avatar kits, cover banners, and link preview OpenGraph graphics',
          'Branded email signatures, invoice headers, and business card vector templates',
          'Vector favicon packages for web (16px, 32px, 180px Apple Touch Icons)',
          'Presentation deck master templates in Figma, PowerPoint, and Google Slides'
        ]
      },
      {
        num: '06',
        title: '100% Intellectual Property & Trademark Clearance',
        summary: 'Complete legal transfer of all vector source files and copyright documentation for global trademark registration.',
        features: [
          'Comprehensive USPTO/WIPO preliminary visual similarity screening',
          'Full unconditional copyright and intellectual property assignment deed',
          'Clean vector source files with organized layers, outlines, and zero hidden fonts',
          'Lifetime archive backup on secure cloud storage'
        ]
      }
    ],
    techStack: [
      {
        category: 'Vector Engineering',
        technologies: ['Adobe Illustrator', 'Figma', 'Glyphs App', 'Astute Graphics']
      },
      {
        category: 'Color & Systematics',
        technologies: ['Pantone Matching System (PMS)', 'CMYK Color Science', 'WCAG 2.1 Contrast Tokens', 'Tailwind CSS Tokens']
      },
      {
        category: 'Asset Delivery & Formats',
        technologies: ['Scalable Vector Graphics (SVG)', 'Adobe PDF/X-4', 'Encapsulated PostScript (EPS)', 'OptiPNG / WebP']
      }
    ],
    processRoadmap: [
      {
        phase: 'PHASE 01',
        timeline: 'Week 1',
        title: 'Brand Discovery & Visual Landscape Audit',
        description: 'Analyzing your industry competitors, brand values, target audience psychology, and defining aesthetic positioning directions.'
      },
      {
        phase: 'PHASE 02',
        timeline: 'Week 2',
        title: 'Concept Ideation & Geometric Exploration',
        description: 'Sketching and digital rendering of 3–4 distinct conceptual directions exploring varied visual metaphors and typography pairings.'
      },
      {
        phase: 'PHASE 03',
        timeline: 'Week 3',
        title: 'Refinement, Precision Grids & Color Calibration',
        description: 'Selecting the winning concept, applying mathematical grid geometry, optical balancing, and finalizing the color token matrix.'
      },
      {
        phase: 'PHASE 04',
        timeline: 'Week 4',
        title: 'Guidelines Authoring & Full Asset Delivery',
        description: 'Compiling the comprehensive brand identity guide, packaging all production-ready vector assets, and signing over full copyright.'
      }
    ],
    faqs: [
      {
        question: 'What file formats will we receive upon completion?',
        answer: 'You will receive an organized master folder containing editable vector source files (AI, EPS, SVG, PDF) and raster files in multiple resolutions (PNG with transparent backgrounds, JPG, WebP), as well as dedicated social media kits and web favicons.'
      },
      {
        question: 'Do we own full copyright and trademark rights to our logo?',
        answer: 'Yes, 100%. Upon final project sign-off, full intellectual property and exclusive copyright ownership are transferred to your organization. You have complete legal freedom to trademark and monetize your logo worldwide.'
      },
      {
        question: 'Can you refresh or modernize an existing logo without losing our current brand recognition?',
        answer: 'Yes. We specialize in strategic brand evolutions—refining geometry, modernizing typography, and improving digital scalability while preserving the core visual equity and emotional connection your customers already recognize.'
      },
      {
        question: 'How many design concepts do you provide?',
        answer: 'We present 3 to 4 distinctly unique conceptual directions during the initial review, each accompanied by real-world mockups showing how the mark lives across website headers, packaging, mobile apps, and business cards.'
      },
      {
        question: 'Will our logo look sharp on both tiny 16px favicons and large billboards?',
        answer: 'Yes. Every logo is mathematically engineered as an infinite vector. We specifically test and optimize simplified responsive variations (monograms/favicons) to guarantee maximum visual clarity at micro scales.'
      }
    ],
    relatedServices: [
      {
        title: 'Website Development',
        slug: 'website-development',
        description: 'Custom React, WordPress, Webflow, and Shopify platforms bringing your brand to life.'
      },
      {
        title: 'Digital Marketing',
        slug: 'digital-marketing',
        description: 'Targeted paid media and technical SEO funnels that establish brand authority.'
      },
      {
        title: 'E-Commerce',
        slug: 'ecommerce',
        description: 'High-converting online storefronts branded with your unique visual identity.'
      }
    ]
  },
  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    eyebrow: 'GROWTH & ACQUISITION // REVENUE ENGINES',
    metaTitle: 'Digital Marketing & Technical SEO Agency | Dynova Cloud',
    metaDescription: 'Data-driven omnichannel acquisition, technical SEO dominance, and high-ROAS paid advertising on Meta and Google engineered for scalable revenue.',
    heroTagline: 'Data-Driven Acquisition Engines Built for Scalable Revenue',
    heroDescription: 'We engineer multi-channel growth systems that capture intent and scale qualified customer acquisition. Combining technical SEO dominance with algorithmic paid media buying on Meta and Google, we turn traffic into predictable, compounding revenue.',
    heroImage: imgDigitalMarketing,
    keyMetrics: [
      {
        value: '+185%',
        label: 'Acquisition Surge',
        detail: 'Multi-touch funnels capturing high-intent search and social demand.'
      },
      {
        value: '3.99x',
        label: 'Target ROAS Delivered',
        detail: 'Algorithmic creative testing matrices maximizing ad spend efficiency.'
      },
      {
        value: '48–72h',
        label: 'Early Signal Window',
        detail: 'Rapid paid validation providing immediate customer behavior telemetry.'
      },
      {
        value: '100%',
        label: 'Attribution Clarity',
        detail: 'Live analytics dashboards tracking actual revenue ROI over vanity clicks.'
      }
    ],
    overview: {
      problemTitle: 'Wasted Ad Spend & Invisible Search Presence',
      problemDescription: 'Most marketing campaigns burn cash on unoptimized audiences, generic creative ads, and fragmented agencies that do not communicate with developers. Without technical attribution and deep SEO foundations, scaling ad spend simply compounds losses.',
      solutionTitle: 'The Dynova Integrated Acquisition Engine',
      solutionDescription: 'We align technical on-page SEO with algorithmic paid media buying. We capture immediate high-intent leads within 48 to 72 hours via Meta and Google Ads, while compounding organic search rankings that build long-term enterprise equity.'
    },
    deliverables: [
      {
        num: '01',
        title: 'Technical & Enterprise Search Engine Optimization (SEO)',
        summary: 'Deep architectural optimization that establishes search engine dominance and secures compounding organic traffic.',
        features: [
          'Full-site crawl budget optimization, canonical auditing & indexation tuning',
          'Structured data (JSON-LD) implementation for Rich Snippets & Knowledge Graph',
          'Core Web Vitals performance remediation (LCP, CLS, INP optimization)',
          'Topical authority map construction and high-intent keyword cluster targeting'
        ]
      },
      {
        num: '02',
        title: 'High-ROAS Paid Acquisition (Google Ads & Meta Ads)',
        summary: 'Data-backed media buying engineered to capture high-intent buyers and drive measurable pipeline revenue.',
        features: [
          'Google Search, Performance Max, and YouTube intent-based campaigns',
          'Meta (Facebook & Instagram) algorithmic broad targeting and Advantage+ funnels',
          'Iterative A/B creative testing matrices (hook rate, hold rate, CTR optimization)',
          'Negative keyword hygiene and automated bid strategy calibration'
        ]
      },
      {
        num: '03',
        title: 'Conversion Rate Optimization (CRO) & Funnel Engineering',
        summary: 'Scientific landing page architectures engineered to convert expensive paid clicks into qualified pipeline.',
        features: [
          'High-velocity A/B split-testing of headlines, value propositions, and forms',
          'Heatmap analysis, session recording auditing, and drop-off funnel diagnostics',
          'Mobile checkout and lead inquiry form frictionless redesigns',
          'Exit-intent value offers and dynamic personalization triggers'
        ]
      },
      {
        num: '04',
        title: 'Server-Side Tracking & Multi-Touch Attribution Modeling',
        summary: 'Bulletproof telemetry that circumvents iOS 14.5/17 cookie restrictions and attributes every dollar of revenue.',
        features: [
          'Meta Conversions API (CAPI) and Google Tag Manager Server-Side integration',
          'GA4 custom event tagging and CRM revenue integration',
          'First-party data collection strategies and offline conversion sync',
          'Elimination of double-counted conversions and accurate ROAS reporting'
        ]
      },
      {
        num: '05',
        title: 'High-Authority Content Marketing & Editorial Strategy',
        summary: 'Publishing comprehensive, search-optimized content that answers commercial search intent and attracts authoritative backlinks.',
        features: [
          'Authoritative pillar content and comprehensive cluster topic modeling',
          'Search intent-mapped articles optimized for ranking on Google SGE & AI Overviews',
          'Digital PR outreach and natural editorial backlink acquisition',
          'Content refreshes and historical optimization for decaying rankings'
        ]
      },
      {
        num: '06',
        title: 'Live Telemetry & Real-Time Executive Reporting',
        summary: 'Transparent, 24/7 executive dashboards tracking real revenue metrics, Customer Acquisition Cost (CAC), and LTV.',
        features: [
          'Custom Looker Studio / Power BI dashboards unified across all ad channels',
          'Blended Customer Acquisition Cost (CAC) and Lifetime Value (LTV) modeling',
          'Bi-weekly strategic growth reviews with senior acquisition architects',
          'Zero smoke-and-mirrors: reporting focuses on pipeline revenue, not vanity impressions'
        ]
      }
    ],
    techStack: [
      {
        category: 'Paid Acquisition Engines',
        technologies: ['Meta Ads Manager', 'Google Ads', 'LinkedIn Campaign Manager', 'TikTok Ads']
      },
      {
        category: 'SEO & Market Intelligence',
        technologies: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'SurferSEO']
      },
      {
        category: 'Attribution & Analytics',
        technologies: ['Google Analytics 4', 'GTM Server-Side', 'Meta Conversions API (CAPI)', 'Looker Studio']
      },
      {
        category: 'CRO & User Behavior',
        technologies: ['Microsoft Clarity', 'Hotjar', 'PostHog', 'Optimizely']
      }
    ],
    processRoadmap: [
      {
        phase: 'PHASE 01',
        timeline: 'Week 1 – 2',
        title: 'Full-Funnel Audit & Server-Side Telemetry Setup',
        description: 'Auditing ad accounts, historical data, keyword rankings, and configuring server-side tracking (CAPI) for 100% data fidelity.'
      },
      {
        phase: 'PHASE 02',
        timeline: 'Week 2 – 3',
        title: 'Campaign Architecture & High-Converting Creative Build',
        description: 'Structuring ad campaigns, authoring compelling copy, producing visual creatives, and launching dedicated landing pages.'
      },
      {
        phase: 'PHASE 03',
        timeline: 'Week 4 – 6',
        title: 'Algorithmic Testing & Rapid Validation (48–72h Signal)',
        description: 'Deploying controlled ad spend to test audience clusters and creative hooks, analyzing initial conversion telemetry and cutting losers.'
      },
      {
        phase: 'PHASE 04',
        timeline: 'Week 7+',
        title: 'Aggressive Scaling & Compounding Organic SEO',
        description: 'Scaling winning ad creatives with automated budget rules while systematically building backlinks and compounding organic search rank.'
      }
    ],
    faqs: [
      {
        question: 'How quickly will we see results from paid marketing vs. SEO?',
        answer: 'Paid media on Meta and Google delivers early data signals and leads within 48 to 72 hours of launch. In contrast, technical SEO is a compounding long-term investment that typically shows significant rank and traffic momentum between months 3 and 6. Combining both gives you immediate cash flow while building durable enterprise value.'
      },
      {
        question: 'How do you prevent ad spend wastage on broad targeting?',
        answer: 'We utilize strict negative keyword lists, tight audience exclusions, conversion-optimized landing pages, and server-side tracking signals that guide the ad platform algorithms to hunt exclusively for high-intent, paying customers.'
      },
      {
        question: 'Do we own our advertising accounts and data?',
        answer: 'Yes, 100%. All advertising accounts, tracking pixels, and analytics dashboards remain under your complete ownership and billing. We operate with full transparency—you see every dollar spent and every dollar returned.'
      },
      {
        question: 'What is server-side tracking and why is it essential?',
        answer: 'Browser ad-blockers and privacy updates (like iOS 14.5+ and cookie deprecation) block up to 30% of browser-based tracking pixels. Server-side tracking (Meta CAPI and server GTM) sends conversion data directly from your web server to the ad network, ensuring 100% attribution accuracy and significantly lower cost per acquisition.'
      },
      {
        question: 'What minimum ad spend do you recommend to test profitably?',
        answer: 'We generally recommend a minimum monthly media budget of $3,000–$5,000 to ensure sufficient daily conversion volume for the advertising algorithms to exit the learning phase and optimize effectively.'
      }
    ],
    relatedServices: [
      {
        title: 'Website Development',
        slug: 'website-development',
        description: 'High-speed web platforms engineered to maximize search visibility and conversion rates.'
      },
      {
        title: 'E-Commerce',
        slug: 'ecommerce',
        description: 'High-converting online storefronts optimized for checkout velocity and retention.'
      },
      {
        title: 'Logo Designing',
        slug: 'logo-designing',
        description: 'Memorable brand identity systems that establish immediate credibility in ad creatives.'
      }
    ]
  }
};
