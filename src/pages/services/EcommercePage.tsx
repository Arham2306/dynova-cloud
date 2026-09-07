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

import imgEcommerce from '../../assets/services/E-Commerce.jpg';

export const EcommercePage: React.FC = () => {
  return (
    <ServiceTemplate
      title="E-Commerce"
      eyebrow="STOREFRONTS & COMMERCE ARCHITECTURE // HIGH-CONVERSION COMMERCE"
      heroTagline="High-Conversion Shopify, Headless Commerce & Revenue-Engineered Storefronts"
      heroDescription="We design and engineer enterprise-grade commerce platforms that maximize average order value (AOV), eliminate checkout drop-off, and scale seamlessly during peak marketing surges."
      heroImage={imgEcommerce}
      specLabel="CHECKOUT SPEED"
      specValue="Sub-1.2s Express Funnel"
      metaTitle="E-Commerce Development & Shopify Plus Architecture | Dynova Cloud"
      metaDescription="Custom Shopify Plus and headless commerce architectures engineered for rapid checkout, high AOV, seamless ERP integrations, and enterprise reliability."
    >
      {/* ── Key Performance Metrics ── */}
      <MetricsGrid>
        <Metric
          value="< 1.2s"
          label="Express Checkout Speed"
          detail="Sub-second cart drawer transitions and 1-click accelerated checkout paths."
        />
        <Metric
          value="+34.6%"
          label="Mobile Conversion Lift"
          detail="Engineered for thumb-driven mobile checkout with zero layout friction."
        />
        <Metric
          value="99.99%"
          label="Peak Traffic Uptime"
          detail="Tested to withstand massive flash sale spikes without latency degradation."
        />
        <Metric
          value="0 Bloat"
          label="App Reduction Strategy"
          detail="Native liquid engineering replacing 20+ monthly subscription apps."
        />
      </MetricsGrid>

      {/* ── Strategic Architecture: Problem vs. Solution ── */}
      <ComparisonSection
        eyebrow="STRATEGIC ARCHITECTURE // THE DIFFERENCE"
        title="Commerce Built for Margin, Not Just Impressions"
      >
        <ComparisonCard
          type="problem"
          badge="THE INDUSTRY STANDARD"
          title="Slow Commercial Themes Cluttered with 30 Apps"
          delay={0}
        >
          <p>
            Most stores rely on generic marketplace themes that load dozens of conflicting JavaScript tracking scripts, monthly subscription plugins, and uncompressed product media. When paid ads surge, the storefront lags, mobile shoppers abandon carts, and apps break during critical checkout moments.
          </p>
        </ComparisonCard>

        <ComparisonCard
          type="solution"
          badge="THE DYNOVA STANDARD"
          title="Lean, Custom-Coded Commerce Engines"
          delay={0.1}
        >
          <p>
            We code custom Shopify themes and headless Hydrogen platforms from the ground up. By building upsells, bundle creators, size guides, and drawer carts directly into native theme code, we cut app subscriptions, boost page speed to the 95th percentile, and capture maximum revenue from every ad click.
          </p>
        </ComparisonCard>
      </ComparisonSection>

      {/* ── Core Technical Deliverables ── */}
      <DeliverablesSection
        eyebrow="WHAT WE BUILD // CORE DELIVERABLES"
        title="Comprehensive E-Commerce Capabilities"
        leadText="Engineered specifically to lower customer acquisition costs (CAC) and increase customer lifetime value (LTV)."
      >
        <DeliverableCard
          num="01"
          title="Bespoke Shopify Plus Storefronts"
          summary={
            <p>
              Custom-designed Liquid themes crafted for luxury, direct-to-consumer (DTC), and high-volume brands with specialized product configuration needs.
            </p>
          }
          features={[
            'Conversion-tested slide-out cart drawers with free-shipping progress bars',
            'Dynamic product bundles, tiered quantity discounts, and cross-sell engines',
            'Sub-second collection filtering without full-page reloads',
            'Optimized responsive checkout workflows compliant with Shopify Checkout Extensibility'
          ]}
          delay={0}
        />

        <DeliverableCard
          num="02"
          title="Headless Hydrogen & Next.js Commerce"
          summary={
            <p>
              Decoupled web storefronts powered by Shopify Storefront API or MedusaJS with React 19 for brands demanding global micro-second rendering.
            </p>
          }
          features={[
            'Instantaneous route transitions and edge-rendered product catalogs',
            'Multi-currency and multi-language localized international storefronts',
            'Seamless integration with headless CMS platforms (Sanity, Strapi, Contentful)',
            'Custom 3D product viewables and interactive visual configuration models'
          ]}
          delay={0.1}
        />

        <DeliverableCard
          num="03"
          title="ERP, CRM & Inventory Synchronization"
          summary={
            <p>
              Robust API pipelines ensuring real-time bidirectional synchronization between your storefront, warehouse fulfillment, accounting, and email marketing.
            </p>
          }
          features={[
            'Automated inventory synchronization across multiple fulfillment centers',
            'Klaviyo event tracking for abandoned cart, back-in-stock, and VIP customer flows',
            'Integration with NetSuite, Katana, QuickBooks, and custom ERP endpoints',
            'Subscription management pipelines powered by Recharge and Shopify Subscriptions'
          ]}
          delay={0.2}
        />

        <DeliverableCard
          num="04"
          title="Conversion Rate Optimization (CRO) Engineering"
          summary={
            <p>
              Data-backed layout optimizations on product detail pages (PDP), collections, and cart flows designed to turn visitors into buyers.
            </p>
          }
          features={[
            'Trust badge hierarchy, verified customer review widgets, and social proof',
            'Sticky mobile add-to-cart bars and clear delivery estimate calculators',
            'Heatmap and scroll-depth analysis to identify drop-off bottlenecks',
            'A/B test implementation for high-stakes hero offers and CTA copy'
          ]}
          delay={0.3}
        />
      </DeliverablesSection>

      {/* ── Technical Stack & Infrastructure ── */}
      <TechStackSection
        eyebrow="TECHNOLOGY ECOSYSTEM // MODERN TOOLS"
        title="Enterprise Commerce Ecosystem"
        leadText="Modern tools selected for reliability, zero security vulnerabilities, and seamless checkout transactions."
      >
        <TechCategoryCard
          category="Commerce Platforms"
          technologies={['Shopify Plus', 'Hydrogen', 'Shopify Liquid', 'MedusaJS', 'BigCommerce']}
          delay={0}
        />
        <TechCategoryCard
          category="Payments & Subscriptions"
          technologies={['Shopify Payments', 'Stripe', 'Apple Pay / Google Pay', 'Recharge Subscriptions', 'Klarna / Afterpay']}
          delay={0.08}
        />
        <TechCategoryCard
          category="Marketing & Retention"
          technologies={['Klaviyo', 'Yotpo Reviews', 'Gorgias Helpdesk', 'Postscript SMS', 'Google Merchant Center']}
          delay={0.16}
        />
        <TechCategoryCard
          category="Data & Analytics"
          technologies={['Shopify Web Pixels API', 'Google Analytics 4 E-commerce', 'Meta Conversions API', 'Segment CDP']}
          delay={0.24}
        />
      </TechStackSection>

      {/* ── Phased Roadmap & Execution Timeline ── */}
      <RoadmapSection
        eyebrow="EXECUTION ROADMAP // HOW WE DELIVER"
        title="Structured Launch Protocol"
        leadText="A proven four-stage execution process ensuring clean catalog migration, zero order disruptions, and immediate conversion lift."
      >
        <RoadmapStep
          phase="STAGE 01"
          timeline="Week 1 — Strategy"
          title="Catalog Audit & Conversion Architecture"
          delay={0}
        >
          <p>
            We audit your existing SKU taxonomy, collection architecture, payment gateways, and third-party app dependencies to create a streamlined technical build roadmap.
          </p>
        </RoadmapStep>

        <RoadmapStep
          phase="STAGE 02"
          timeline="Weeks 2-3 — Design"
          title="High-Converting UI/UX Design"
          delay={0.1}
        >
          <p>
            Custom Figma design systems focused on thumb-friendly mobile layouts, trust-building product detail pages (PDP), and friction-free cart drawer interactions.
          </p>
        </RoadmapStep>

        <RoadmapStep
          phase="STAGE 03"
          timeline="Weeks 3-5 — Development"
          title="Theme Engineering & API Integrations"
          delay={0.2}
        >
          <p>
            Clean Liquid/React coding, native app-feature integration, customer data migration, and third-party API configurations with automated testing.
          </p>
        </RoadmapStep>

        <RoadmapStep
          phase="STAGE 04"
          timeline="Week 6 — Launch"
          title="Stress Testing & Zero-Downtime Cutover"
          delay={0.3}
        >
          <p>
            Rigorous checkout simulation, payment gateway testing, 301 URL redirect verification, and scheduled DNS transition to prevent lost orders.
          </p>
        </RoadmapStep>
      </RoadmapSection>

      {/* ── Frequently Asked Questions ── */}
      <FAQAccordion
        eyebrow="COMMON INQUIRIES // FAQ"
        title="Frequently Asked E-Commerce Questions"
      >
        <FAQItem question="Can you migrate our store from WooCommerce or Magento to Shopify without downtime?" defaultOpen={true}>
          <p>
            Yes. We specialize in <strong>zero-downtime platform migrations</strong>. We migrate all customer records, order histories, product variants, and reviews in the background. Your live store continues accepting orders until DNS cutover occurs, with 100% data fidelity.
          </p>
        </FAQItem>

        <FAQItem question="How do you replace multiple monthly paid apps with custom code?">
          <p>
            Many common apps (such as announcement bars, cart drawers, bundle builders, size charts, and countdown timers) inject bloated scripts into your theme. We build these features <strong>directly into your theme’s native code</strong>. This eliminates recurring app fees and significantly increases page speed.
          </p>
        </FAQItem>

        <FAQItem question="Do you support international selling, multi-currency, and localized taxes?">
          <p>
            Yes. We configure <strong>Shopify Markets and multi-currency checkouts</strong> with automated geolocation routing, local duties/tariffs calculation, and localized payment gateways so your brand can scale globally with ease.
          </p>
        </FAQItem>

        <FAQItem question="What happens to our customer reviews, subscriptions, and SEO URLs?">
          <p>
            We preserve all existing review databases, migrate active subscriber tokens safely into modern subscription gateways, and implement strict <strong>1-to-1 301 URL redirect maps</strong> so your hard-earned organic search rankings are protected.
          </p>
        </FAQItem>
      </FAQAccordion>
    </ServiceTemplate>
  );
};

export default EcommercePage;
