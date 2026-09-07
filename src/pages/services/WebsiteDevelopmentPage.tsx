import React from 'react';
import { ServiceTemplate } from '../../components/ServiceDetail/ServiceTemplate';
import {
  MetricsGrid,
  Metric,
  ComparisonSection,
  ComparisonCard,
  DeliverablesSection,
  DeliverableCard,
  TechStackSection,
  TechCategoryCard,
  RoadmapSection,
  RoadmapStep,
  FAQAccordion,
  FAQItem
} from '../../components/ServiceDetail/blocks';

import imgWebDev from '../../assets/services/Web Development.jpg';

export const WebsiteDevelopmentPage: React.FC = () => {
  return (
    <ServiceTemplate
      title="Website Development"
      eyebrow="ENGINEERING & ARCHITECTURE // ENTERPRISE WEB SYSTEMS"
      heroTagline="Bespoke Web Development Across WordPress, Webflow, Shopify & Custom Engineering"
      heroDescription="We architect and build high-performance web platforms tailored to your business model. Whether you need an enterprise custom React/Next.js platform, a flexible WordPress CMS, an agile Webflow build, or a high-converting Shopify storefront, we deliver clean code, sub-second speeds, and built-in technical SEO."
      heroImage={imgWebDev}
      specLabel="ARCHITECTURE GRADE"
      specValue="Production Enterprise SLA"
      metaTitle="Website Development Services — WordPress, Webflow, Shopify & Custom | Dynova Cloud"
      metaDescription="End-to-end website development across WordPress, Webflow, Shopify, and custom React/Next.js platforms. Engineered for sub-second speed, 95+ Core Web Vitals, and organic search dominance."
    >
      {/* ── Key Performance Metrics ── */}
      <MetricsGrid>
        <Metric
          value="99.8%"
          label="Core Web Vitals SLA"
          detail="Guaranteed green benchmarks across LCP, CLS, and INP on all target devices."
        />
        <Metric
          value="< 400ms"
          label="Global TTFB Average"
          detail="Edge-rendered and globally cached via modern CDN infrastructure."
        />
        <Metric
          value="4 Platforms"
          label="Full-Stack Mastery"
          detail="Expert engineering across WordPress, Webflow, Shopify, and Custom React/Next.js."
        />
        <Metric
          value="+185%"
          label="Organic Visibility Index"
          detail="Semantic HTML5 hierarchies and structured JSON-LD schema markup built-in."
        />
      </MetricsGrid>

      {/* ── Strategic Architecture: Problem vs. Solution ── */}
      <ComparisonSection
        eyebrow="STRATEGIC ARCHITECTURE // THE DIFFERENCE"
        title="Engineering Beyond Conventional Limitations"
      >
        <ComparisonCard
          type="problem"
          badge="THE INDUSTRY STANDARD"
          title="One Size Does Not Fit All in Web Development"
          delay={0}
        >
          <p>
            Many agencies force clients into their single favorite tool—whether forcing a simple marketing site into an overly complex custom app, or stretching a rigid commercial template beyond its limits with 40+ plugins. The result is bloated code, maintenance headaches, sluggish load times, and poor conversion rates that drain ad spend.
          </p>
        </ComparisonCard>

        <ComparisonCard
          type="solution"
          badge="THE DYNOVA STANDARD"
          title="The Right Platform Engineered for Your Goals"
          delay={0.1}
        >
          <p>
            We evaluate your business objectives, team workflow, and scalability needs to select and architect the perfect stack. Whether leveraging the rapid visual power of Webflow, the editorial flexibility of WordPress, the commercial engine of Shopify, or the unlimited capabilities of custom React/Next.js, every build is crafted with strict speed standards, zero bloat, and conversion-first engineering.
          </p>
        </ComparisonCard>
      </ComparisonSection>

      {/* ── Core Technical Deliverables ── */}
      <DeliverablesSection
        eyebrow="WHAT WE BUILD // CORE DELIVERABLES"
        title="Production-Grade Capabilities Included in Every Engagement"
        leadText="Every line of code and architectural decision is guided by strict benchmarks for conversion, SEO visibility, and high concurrency resilience."
      >
        <DeliverableCard
          num="01"
          title="Custom React & Next.js Web Platforms"
          summary={
            <p>
              Bespoke, serverless web applications and dynamic customer portals built with React 19, Next.js App Router, and TypeScript for brands that have outgrown off-the-shelf site builders.
            </p>
          }
          features={[
            'Server-side rendering (SSR) and incremental static regeneration (ISR)',
            'Sub-second route transitions with edge-cached state synchronization',
            'Custom API integrations, webhook consumers, and multi-tenant databases',
            'Strict TypeScript type safety and accessible component primitives'
          ]}
          delay={0}
        />

        <DeliverableCard
          num="02"
          title="High-Performance WordPress Engineering"
          summary={
            <p>
              Clean, modular custom WordPress themes and headless WP implementations with zero bloated page-builder code and guaranteed top-tier Core Web Vitals.
            </p>
          }
          features={[
            'Custom Gutenberg block systems tailored to your content editors',
            'Advanced Custom Fields (ACF Pro) data modeling for structured content',
            'Redis object caching, MariaDB query optimization, and asset minification',
            'Enterprise security hardening and automated daily snapshot backups'
          ]}
          delay={0.1}
        />

        <DeliverableCard
          num="03"
          title="Conversion-Focused Shopify Storefronts"
          summary={
            <p>
              Custom Liquid and Hydrogen headless Shopify architectures designed to eliminate checkout friction, maximize average order value (AOV), and scale effortlessly during traffic spikes.
            </p>
          }
          features={[
            'Custom theme development engineered for rapid page speed benchmarks',
            '1-click express checkout funnels and conversion-tested cart drawers',
            'Dynamic product bundle builders and personalized upsell triggers',
            'Seamless ERP, CRM, and fulfillment inventory synchronization'
          ]}
          delay={0.2}
        />

        <DeliverableCard
          num="04"
          title="Rapid-Launch Webflow Experiences"
          summary={
            <p>
              Bespoke Webflow websites engineered using the Client-First design system, clean semantic markup, custom GSAP interactions, and painless CMS management for your marketing team.
            </p>
          }
          features={[
            'Scalable Relume and Client-First class naming architectures',
            'Custom JavaScript extensions for dynamic filtering and complex forms',
            'Fluid responsive typography and responsive layouts down to 320px screens',
            'Complete video walkthrough training and documentation for your internal team'
          ]}
          delay={0.3}
        />
      </DeliverablesSection>

      {/* ── Technical Stack & Infrastructure ── */}
      <TechStackSection
        eyebrow="TECHNOLOGY ECOSYSTEM // MODERN TOOLS"
        title="Best-in-Class Engineering Stack"
        leadText="We work with proven, industry-standard modern frameworks and infrastructure to guarantee reliability, security, and developer productivity."
      >
        <TechCategoryCard
          category="Frontend & Frameworks"
          technologies={['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vite', 'GSAP & Motion']}
          delay={0}
        />
        <TechCategoryCard
          category="CMS & Commercial Platforms"
          technologies={['WordPress (ACF Pro)', 'Webflow', 'Shopify Plus', 'Hydrogen / Liquid', 'Sanity / Strapi']}
          delay={0.08}
        />
        <TechCategoryCard
          category="Performance & Infrastructure"
          technologies={['Cloudflare Edge', 'Vercel CDN', 'Redis Object Cache', 'Docker', 'AWS S3', 'NGINX']}
          delay={0.16}
        />
        <TechCategoryCard
          category="Analytics & SEO Architecture"
          technologies={['Google Tag Manager', 'JSON-LD Schema', 'OpenGraph Meta', 'Sitemaps XML', 'Core Web Vitals CI']}
          delay={0.24}
        />
      </TechStackSection>

      {/* ── Phased Roadmap & Execution Timeline ── */}
      <RoadmapSection
        eyebrow="EXECUTION ROADMAP // HOW WE DELIVER"
        title="Four-Stage Production Protocol"
        leadText="From initial technical discovery through to zero-downtime DNS deployment, our milestone structure guarantees transparency, precision, and predictable delivery dates."
      >
        <RoadmapStep
          phase="STAGE 01"
          timeline="Week 1 — Discovery"
          title="Architecture Blueprint & Technical Discovery"
          delay={0}
        >
          <p>
            We audit your current tech stack, analyze search intent, define your platform requirements, and deliver a comprehensive project specification document including data models, URL structure, and conversion milestones.
          </p>
        </RoadmapStep>

        <RoadmapStep
          phase="STAGE 02"
          timeline="Weeks 2-3 — Design"
          title="UI/UX System & Interactive Wireframes"
          delay={0.1}
        >
          <p>
            High-fidelity responsive layouts in Figma, including design tokens, typography scales, mobile navigation patterns, and micro-interaction states reviewed and approved before code execution begins.
          </p>
        </RoadmapStep>

        <RoadmapStep
          phase="STAGE 03"
          timeline="Weeks 3-5 — Engineering"
          title="Full-Stack Development & Clean Code"
          delay={0.2}
        >
          <p>
            Component development, CMS schema setup, database integrations, and performance optimizations executed with automated linting, type-checking, and cross-browser testing on real devices.
          </p>
        </RoadmapStep>

        <RoadmapStep
          phase="STAGE 04"
          timeline="Week 6 — Deployment"
          title="Performance Audits, SEO & Go-Live"
          delay={0.3}
        >
          <p>
            End-to-end Lighthouse audits, 301 redirect map verification, SSL certificate configuration, and zero-downtime DNS transition followed by post-launch indexing monitoring in Google Search Console.
          </p>
        </RoadmapStep>
      </RoadmapSection>

      {/* ── Frequently Asked Questions ── */}
      <FAQAccordion
        eyebrow="COMMON INQUIRIES // FAQ"
        title="Frequently Asked Technical Questions"
      >
        <FAQItem question="How do you decide between WordPress, Webflow, Shopify, or Custom Code?" defaultOpen={true}>
          <p>
            We start from your <strong>business objectives, editorial frequency, and commercial needs</strong>. If you are selling physical goods and need deep inventory management, <strong>Shopify</strong> is typically ideal. If your marketing team needs to launch landing pages weekly without developer dependencies, <strong>Webflow</strong> is phenomenal. If you need deep editorial publishing and customized taxonomies, <strong>WordPress</strong> with ACF is unmatched. For dynamic user portals or SaaS interfaces, <strong>custom React/Next.js</strong> provides total freedom.
          </p>
        </FAQItem>

        <FAQItem question="Will my team be able to edit text and images easily after launch?">
          <p>
            Yes. Every website we build includes a <strong>tailored content management interface</strong> designed specifically for non-technical users. Whether in Webflow, WordPress, Shopify, or a headless CMS, we provide dedicated training videos and documentation so your team can publish updates with total confidence.
          </p>
        </FAQItem>

        <FAQItem question="Do you guarantee high Core Web Vitals and fast load speeds?">
          <p>
            Yes. Performance is engineered into our foundation, not added as an afterthought. We guarantee <strong>90+ Core Web Vitals scores</strong> on desktop and mobile, with sub-second time-to-first-byte (TTFB), optimized modern image formats (WebP/AVIF), and zero bloated third-party scripts.
          </p>
        </FAQItem>

        <FAQItem question="How do you handle existing SEO rankings and 301 redirects?">
          <p>
            Preserving your search traffic is non-negotiable. Before launch, we scrape your entire existing domain, generate a 1-to-1 <strong>301 redirect map</strong>, preserve all high-ranking URL slugs where possible, and verify that title tags, meta descriptions, and canonical headers match or improve upon your current rankings.
          </p>
        </FAQItem>
      </FAQAccordion>
    </ServiceTemplate>
  );
};

export default WebsiteDevelopmentPage;
