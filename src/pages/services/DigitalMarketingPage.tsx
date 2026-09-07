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

import imgDigitalMarketing from '../../assets/services/Digital Marketing.jpg';

export const DigitalMarketingPage: React.FC = () => {
  return (
    <ServiceTemplate
      title="Digital Marketing"
      eyebrow="GROWTH & ACQUISITION // PERFORMANCE MARKETING"
      heroTagline="Data-Driven Omnichannel Funnels, Technical SEO Dominance & High-ROAS Media Buying"
      heroDescription="We unify precision organic search ranking, algorithmic paid ad management across Google and Meta, and full-funnel conversion tracking into a predictable revenue generation engine."
      heroImage={imgDigitalMarketing}
      specLabel="ATTRIBUTED ROAS"
      specValue="Verified 3.8x - 5.2x Blended"
      metaTitle="Performance Digital Marketing & SEO Services | Dynova Cloud"
      metaDescription="Data-driven performance marketing, technical SEO, high-ROAS Google and Meta Ads campaigns, and full-funnel attribution built to scale qualified revenue."
    >
      {/* ── Key Performance Metrics ── */}
      <MetricsGrid>
        <Metric
          value="4.2x"
          label="Blended ROAS Average"
          detail="Attributed return on ad spend achieved across active client performance accounts."
        />
        <Metric
          value="+185%"
          label="Organic Traffic Growth"
          detail="Targeted non-brand search visibility increase within 120 days of technical deployment."
        />
        <Metric
          value="< $24"
          label="Qualified CAC Benchmark"
          detail="Lower customer acquisition costs achieved through systematic creative testing."
        />
        <Metric
          value="100%"
          label="Server-Side Attribution"
          detail="Server-side CAPI and First-Party tracking bypassing iOS browser ad-blockers."
        />
      </MetricsGrid>

      {/* ── Strategic Architecture: Problem vs. Solution ── */}
      <ComparisonSection
        eyebrow="STRATEGIC ARCHITECTURE // THE DIFFERENCE"
        title="Revenue-First Growth, Not Vanity Metrics"
      >
        <ComparisonCard
          type="problem"
          badge="THE INDUSTRY STANDARD"
          title="Wasted Ad Spend & Vague Impression Reports"
          delay={0}
        >
          <p>
            Traditional marketing agencies celebrate "impressions," "reach," and click-through rates while leaving your business blind to actual cost-per-acquisition. Tracking breaks under modern privacy updates, landing pages don't convert, and organic SEO is treated as keyword stuffing without technical foundations.
          </p>
        </ComparisonCard>

        <ComparisonCard
          type="solution"
          badge="THE DYNOVA STANDARD"
          title="Precision Engineering Applied to Growth"
          delay={0.1}
        >
          <p>
            Because we build both the code and the marketing strategy, we fix the entire revenue pipeline. We deploy robust server-side attribution, engineer high-converting bespoke landing pages, optimize crawl budgets for Google search bots, and scale paid budgets only when profitability metrics are verified.
          </p>
        </ComparisonCard>
      </ComparisonSection>

      {/* ── Core Technical Deliverables ── */}
      <DeliverablesSection
        eyebrow="WHAT WE BUILD // CORE DELIVERABLES"
        title="Integrated Growth Capabilities"
        leadText="An end-to-end acquisition framework designed to capture demand, build organic authority, and scale bottom-line revenue."
      >
        <DeliverableCard
          num="01"
          title="High-ROAS Paid Media (Google Ads & Meta Ads)"
          summary={
            <p>
              Data-backed paid acquisition campaigns across Google Search, Performance Max, YouTube, Meta (Facebook/Instagram), and LinkedIn built for maximum capital efficiency.
            </p>
          }
          features={[
            'High-intent Google Search keyword architecture eliminating negative match waste',
            'Dynamic product catalog ads (DPA) and Performance Max shopping campaigns',
            'Creative sprint testing pipelines testing 10+ new ad variations weekly',
            'Aggressive retargeting funnels tailored to specific user journey stages'
          ]}
          delay={0}
        />

        <DeliverableCard
          num="02"
          title="Enterprise Technical SEO & Content Authority"
          summary={
            <p>
              Holistic search engine optimization addressing core crawlability, structured data schema, site architecture, and competitive high-intent keyword capture.
            </p>
          }
          features={[
            'Complete technical audit: crawl depth, canonicalization, and indexation fixes',
            'Comprehensive JSON-LD structured data markup for rich Google search snippets',
            'Semantic topic cluster architecture targeting high-intent commercial keywords',
            'Core Web Vitals speed optimization to secure algorithmic ranking bonuses'
          ]}
          delay={0.1}
        />

        <DeliverableCard
          num="03"
          title="Conversion Rate Optimization (CRO) & Dedicated Landing Pages"
          summary={
            <p>
              Custom-coded, lightning-fast landing pages engineered specifically for paid ad traffic, tested to outperform standard homepage conversion rates by 2x to 4x.
            </p>
          }
          features={[
            'Sub-second mobile loading speeds engineered to minimize ad bounce rates',
            'Psychology-backed visual hierarchies, sticky CTAs, and frictionless lead forms',
            'Multi-variant A/B testing on headlines, value propositions, and social proof',
            'Dynamic text replacement matching ad headline search terms in real time'
          ]}
          delay={0.2}
        />

        <DeliverableCard
          num="04"
          title="Server-Side Tracking & Attribution Dashboards"
          summary={
            <p>
              Future-proof measurement infrastructure that accurately records conversions even with ad-blockers and iOS Safari ITP restrictions active.
            </p>
          }
          features={[
            'Server-side Google Tag Manager (sGTM) and Cloudflare edge container setup',
            'Meta Conversions API (CAPI) with 9.0+ Event Quality Match scores',
            'Custom live Looker Studio dashboards reporting blended ROAS, CAC, and LTV',
            'First-party data tracking compliant with GDPR and California CCPA guidelines'
          ]}
          delay={0.3}
        />
      </DeliverablesSection>

      {/* ── Technical Stack & Marketing Tools ── */}
      <TechStackSection
        eyebrow="GROWTH ECOSYSTEM // MODERN TOOLS"
        title="Modern Performance & Analytics Stack"
        leadText="Industry-leading marketing technology ensuring precise audience targeting and transparent data visibility."
      >
        <TechCategoryCard
          category="Paid Media Channels"
          technologies={['Google Ads (PMax, Search)', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'YouTube Video Ads', 'TikTok Ads']}
          delay={0}
        />
        <TechCategoryCard
          category="SEO & Search Intelligence"
          technologies={['Ahrefs Enterprise', 'SEMrush', 'Google Search Console', 'Screaming Frog SEO Spider', 'SurferSEO']}
          delay={0.08}
        />
        <TechCategoryCard
          category="Attribution & Telemetry"
          technologies={['Server-Side GTM', 'Meta CAPI', 'Google Analytics 4 (GA4)', 'Segment CDP', 'Triple Whale']}
          delay={0.16}
        />
        <TechCategoryCard
          category="BI & Reporting"
          technologies={['Looker Studio', 'BigQuery', 'Supermetrics', 'Hotjar Heatmaps']}
          delay={0.24}
        />
      </TechStackSection>

      {/* ── Phased Roadmap & Execution Timeline ── */}
      <RoadmapSection
        eyebrow="EXECUTION ROADMAP // HOW WE DELIVER"
        title="Scalable Growth Protocol"
        leadText="A disciplined four-stage process that turns marketing budgets into reliable, compounding revenue."
      >
        <RoadmapStep
          phase="STAGE 01"
          timeline="Week 1 — Audit"
          title="Telemetry & Full-Funnel Growth Audit"
          delay={0}
        >
          <p>
            We audit your historical ad spend, customer unit economics, SEO health, and conversion tracking to identify immediate quick-win opportunities and plug budget leaks.
          </p>
        </RoadmapStep>

        <RoadmapStep
          phase="STAGE 02"
          timeline="Weeks 2-3 — Launch"
          title="Landing Page & Campaign Infrastructure"
          delay={0.1}
        >
          <p>
            We deploy server-side tracking, design and code dedicated high-converting landing pages, write copy hooks, and launch structured Google and Meta campaigns.
          </p>
        </RoadmapStep>

        <RoadmapStep
          phase="STAGE 03"
          timeline="Weeks 4-6 — Optimization"
          title="Creative Iteration & Bid Calibration"
          delay={0.2}
        >
          <p>
            We analyze initial conversion data, eliminate non-performing keywords and ad sets, double down on winning creative angles, and launch technical SEO enhancements.
          </p>
        </RoadmapStep>

        <RoadmapStep
          phase="STAGE 04"
          timeline="Ongoing — Scale"
          title="Budget Scaling & Market Expansion"
          delay={0.3}
        >
          <p>
            With verified profitable CAC and ROAS benchmarks in place, we scale ad budgets systematically and expand organic keyword capture to dominate your market.
          </p>
        </RoadmapStep>
      </RoadmapSection>

      {/* ── Frequently Asked Questions ── */}
      <FAQAccordion
        eyebrow="COMMON INQUIRIES // FAQ"
        title="Frequently Asked Digital Marketing Questions"
      >
        <FAQItem question="How quickly do we see results from SEO compared to Paid Ads?" defaultOpen={true}>
          <p>
            <strong>Paid Ads generate immediate traffic and conversions within 24 to 48 hours</strong> of campaign launch, making them ideal for rapid revenue and creative testing. <strong>SEO is a compounding long-term asset</strong> that typically delivers noticeable non-brand ranking growth within 90 to 120 days, ultimately providing sustainable, high-margin customer acquisition with zero ongoing cost-per-click.
          </p>
        </FAQItem>

        <FAQItem question="How do you ensure conversion tracking accuracy despite iOS privacy updates?">
          <p>
            We implement <strong>Server-Side Google Tag Manager (sGTM)</strong> and <strong>Meta Conversions API (CAPI)</strong>. Instead of relying on vulnerable client-side browser cookies, events are sent securely from your server to the advertising platforms. This typically recovers 20% to 35% of previously untracked conversions and enables ad algorithms to optimize accurately.
          </p>
        </FAQItem>

        <FAQItem question="Do we maintain direct ownership of our ad accounts and creative assets?">
          <p>
            <strong>Yes, 100%.</strong> All ad accounts, Google Tag Manager containers, Google Analytics properties, and creative collateral belong entirely to your company. We manage them via agency partner access. You retain complete transparency and control over your budget and data at all times.
          </p>
        </FAQItem>

        <FAQItem question="What is your creative testing framework for paid advertising?">
          <p>
            Creative fatigue is the number one reason ad costs rise. We run a continuous <strong>weekly creative testing sprint</strong>: testing new visual hooks, headline angles, customer testimonials, and problem-solution formats. Winning creatives are promoted to our high-budget scaling campaigns, while underperforming variations are paused quickly to protect your capital.
          </p>
        </FAQItem>
      </FAQAccordion>
    </ServiceTemplate>
  );
};

export default DigitalMarketingPage;
