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

import imgLogoDesigning from '../../assets/services/Logo Designing.jpg';

export const LogoDesigningPage: React.FC = () => {
  return (
    <ServiceTemplate
      title="Logo Designing"
      eyebrow="BRAND IDENTITY & AESTHETICS // ICONIC DESIGN SYSTEMS"
      heroTagline="Distinctive Brand Marks, Vector Design Systems & Authoritative Visual Guidelines"
      heroDescription="We craft iconic, timeless brand identities and comprehensive design token systems that build brand recall, command premium pricing, and scale across digital, print, and physical environments."
      heroImage={imgLogoDesigning}
      specLabel="BRAND IDENTITY SYSTEM"
      specValue="Complete Vector Master Kit"
      metaTitle="Logo Designing & Brand Identity Systems | Dynova Cloud"
      metaDescription="Iconic logo design, vector marks, typography hierarchies, and complete brand design systems crafted for modern digital-first enterprises."
    >
      {/* ── Key Performance Metrics ── */}
      <MetricsGrid>
        <Metric
          value="96.4%"
          label="Brand Recall Index"
          detail="Tested across audience demographics for distinct visual memorability."
        />
        <Metric
          value="100%"
          label="Vector Scalability"
          detail="Infinite mathematical fidelity from a 16px favicon to giant stadium billboards."
        />
        <Metric
          value="40+ Assets"
          label="Design Token Kit"
          detail="Complete typography rules, color tokens, and layout guidelines delivered."
        />
        <Metric
          value="100% IP"
          label="Full Legal Ownership"
          detail="Complete transfer of all commercial copyrights and master source files."
        />
      </MetricsGrid>

      {/* ── Strategic Architecture: Problem vs. Solution ── */}
      <ComparisonSection
        eyebrow="STRATEGIC ARCHITECTURE // THE DIFFERENCE"
        title="More Than Just a Symbol — A Scalable Visual Language"
      >
        <ComparisonCard
          type="problem"
          badge="THE INDUSTRY STANDARD"
          title="Generic Templates & Disconnected Freelance Files"
          delay={0}
        >
          <p>
            Many businesses settle for quick marketplace logos or AI generators that deliver flat images with no responsive variations. When implemented in the real world, the logo breaks on dark backgrounds, looks illegible on mobile headers, and offers zero typography rules or color guidelines for developers.
          </p>
        </ComparisonCard>

        <ComparisonCard
          type="solution"
          badge="THE DYNOVA STANDARD"
          title="End-to-End Enterprise Identity Systems"
          delay={0.1}
        >
          <p>
            We approach brand identity as an engineering discipline. Every logo mark is precision-crafted with optical weight balancing, tested across light and dark modes, and delivered with responsive lockups, accessible color contrast ratios, and direct design tokens ready for web, mobile, and print.
          </p>
        </ComparisonCard>
      </ComparisonSection>

      {/* ── Core Technical Deliverables ── */}
      <DeliverablesSection
        eyebrow="WHAT WE BUILD // CORE DELIVERABLES"
        title="Complete Brand Identity Deliverables"
        leadText="Everything your marketing, development, and executive teams need to represent your brand with absolute authority."
      >
        <DeliverableCard
          num="01"
          title="Primary & Secondary Responsive Lockups"
          summary={
            <p>
              A cohesive family of marks including primary horizontal logos, stacked vertical variants, compact icon emblems, and sub-mark badges.
            </p>
          }
          features={[
            'Primary horizontal lockup for desktop navigation and letterheads',
            'Compact stacked lockup for mobile navigation and square avatar placements',
            'Standalone monogram emblem and 16px/32px optimized web favicon',
            'Full inverted color versions for dark-mode and monochrome applications'
          ]}
          delay={0}
        />

        <DeliverableCard
          num="02"
          title="Master Production Vector Package"
          summary={
            <p>
              Organized, industry-standard file formats prepared for both digital high-density displays and ultra-high-resolution offset commercial printing.
            </p>
          }
          features={[
            'Editable Adobe Illustrator (.AI) and vector PDF master source files',
            'Clean, minified SVG 2.0 vectors optimized for modern web developers',
            'Transparent background PNGs rendered across standard and 2x/3x Retina scales',
            'Pre-configured print files calibrated in CMYK and Pantone matching systems'
          ]}
          delay={0.1}
        />

        <DeliverableCard
          num="03"
          title="Typography Hierarchy & Color Tokens"
          summary={
            <p>
              A calibrated design system ensuring your typography and brand colors maintain emotional resonance and strict WCAG accessibility compliance.
            </p>
          }
          features={[
            'Curated headline, subhead, and body font pairing recommendations',
            'Primary, secondary, and accent color palettes with HEX, RGB, and CMYK values',
            'WCAG 2.1 AA/AAA contrast ratios verified for digital readability',
            'CSS Custom Properties and Tailwind CSS color token export files'
          ]}
          delay={0.2}
        />

        <DeliverableCard
          num="04"
          title="Comprehensive Brand Guidelines Bible"
          summary={
            <p>
              An exhaustive digital brand manual specifying minimum clear space, incorrect usage rules, and real-world mockups to keep your brand unified.
            </p>
          }
          features={[
            'Clear space bounding boxes and minimum sizing specifications',
            'Strict "Do\'s and Don\'ts" visual examples preventing brand degradation',
            'Social media kit: profile avatars, LinkedIn headers, and OpenGraph cards',
            'Physical collateral templates: business cards, stationery, and slide decks'
          ]}
          delay={0.3}
        />
      </DeliverablesSection>

      {/* ── Technical Stack & Creative Tools ── */}
      <TechStackSection
        eyebrow="CREATIVE ECOSYSTEM // PROFESSIONAL TOOLS"
        title="Precision Design Software & Standards"
        leadText="Crafted with industry-leading vector engineering tools to guarantee geometric precision and flawless output."
      >
        <TechCategoryCard
          category="Vector & Typography"
          technologies={['Adobe Illustrator', 'Figma', 'Glyphs App', 'FontLab', 'Bezier Curves']}
          delay={0}
        />
        <TechCategoryCard
          category="Color & Accessibility"
          technologies={['Pantone Color Bridge', 'CMYK Offset Print', 'WCAG Contrast Checker', 'P3 Wide Gamut']}
          delay={0.08}
        />
        <TechCategoryCard
          category="Digital File Formats"
          technologies={['SVG 2.0 (Clean Code)', 'High-Res PNG', 'WebP Lossless', 'PDF/X-1a (Print)', 'AI Master']}
          delay={0.16}
        />
        <TechCategoryCard
          category="Developer Tokens"
          technologies={['CSS Variables', 'Tailwind Config', 'Figma Variables', 'JSON Design Tokens']}
          delay={0.24}
        />
      </TechStackSection>

      {/* ── Phased Roadmap & Execution Timeline ── */}
      <RoadmapSection
        eyebrow="EXECUTION ROADMAP // HOW WE DELIVER"
        title="From Concept to Iconic Identity"
        leadText="A collaborative design protocol that transforms your core brand values into memorable visual authority."
      >
        <RoadmapStep
          phase="STAGE 01"
          timeline="Week 1 — Strategy"
          title="Brand Archetype & Competitor Landscape"
          delay={0}
        >
          <p>
            We analyze your market niche, target customer psychology, and competitor visual identities to determine the strategic aesthetic positioning for your brand.
          </p>
        </RoadmapStep>

        <RoadmapStep
          phase="STAGE 02"
          timeline="Week 2 — Exploration"
          title="Vector Concept Exploration & Moodboards"
          delay={0.1}
        >
          <p>
            We develop 3 distinct creative directions with moodboards, geometric sketches, and real-world mockups demonstrating how each mark lives on web and mobile.
          </p>
        </RoadmapStep>

        <RoadmapStep
          phase="STAGE 03"
          timeline="Week 3 — Refinement"
          title="Optical Balancing, Kerning & Color Systems"
          delay={0.2}
        >
          <p>
            Your chosen direction is refined with mathematical precision, optical kerning, custom typography adjustments, and dark/light mode palette testing.
          </p>
        </RoadmapStep>

        <RoadmapStep
          phase="STAGE 04"
          timeline="Week 4 — Delivery"
          title="Master Export & Brand Guidelines Manual"
          delay={0.3}
        >
          <p>
            Delivery of the complete master asset library in every file format, accompanied by the comprehensive PDF Brand Guidelines book and full commercial copyright transfer.
          </p>
        </RoadmapStep>
      </RoadmapSection>

      {/* ── Frequently Asked Questions ── */}
      <FAQAccordion
        eyebrow="COMMON INQUIRIES // FAQ"
        title="Frequently Asked Logo Design Questions"
      >
        <FAQItem question="Do we receive full copyright and commercial ownership of the logo?" defaultOpen={true}>
          <p>
            <strong>Yes, 100%.</strong> Upon project completion and final payment, all legal copyrights, intellectual property rights, and commercial ownership are fully transferred to your company. You have unrestricted freedom to trademark and use your logo worldwide.
          </p>
        </FAQItem>

        <FAQItem question="What file formats are included in the final master package?">
          <p>
            You receive an organized directory containing <strong>vector source files</strong> (AI, EPS, SVG, and print-ready vector PDF) and <strong>raster files</strong> (PNG with transparent backgrounds, high-resolution JPG, and WebP). We also include dedicated web favicons and social media profile kits.
          </p>
        </FAQItem>

        <FAQItem question="How many initial concept directions do you provide?">
          <p>
            We present <strong>3 fundamentally distinct creative directions</strong> based on our discovery strategy. Each concept is demonstrated with real-world applications (website header, mobile app icon, business card, and merchandise) so you can clearly visualize the identity in context.
          </p>
        </FAQItem>

        <FAQItem question="What is a 'responsive logo' and why does our business need one?">
          <p>
            A responsive logo is an identity designed to scale gracefully across different display sizes. In small contexts like a <strong>smartphone header or 16px browser tab</strong>, a complex logo becomes illegible. We provide simplified compact emblems and horizontal wordmarks that preserve brand clarity at any resolution.
          </p>
        </FAQItem>
      </FAQAccordion>
    </ServiceTemplate>
  );
};

export default LogoDesigningPage;
