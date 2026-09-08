import React from 'react';
import { motion } from 'motion/react';
import { Star, Sparkles, ArrowUpRight } from 'lucide-react';
import { useLeadModal } from '../../context/LeadModalContext';
import BlurText from '../BlurText/BlurText';
import './Testimonials.css';

// --- Dynova Cloud Verified Client Reviews ---
interface ClientReview {
  name: string;
  role: string;
  body: string;
  img: string;
}

const testimonials: ClientReview[] = [
  {
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    body: 'Dynova Cloud rebuilt our entire web infrastructure from scratch. Global TTFB dropped under 380ms and we sustained 99.99% uptime through peak seasonal traffic without a single hiccup.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Growth',
    body: 'Their Meta Ads strategy scaled our monthly revenue from $40k to $310k in under 90 days with a consistent 4.2x ROAS. The creative testing framework they built is unmatched.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
  },
  {
    name: 'David Chen',
    role: 'Founder & CEO',
    body: 'The web engineering caliber is outstanding. React architecture, edge deployment, and Core Web Vitals all scored 100% across desktop and mobile. Truly world-class craftsmanship.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
  },
  {
    name: 'Sophia Laurent',
    role: 'Creative Director',
    body: 'Dynova redesigned our entire visual identity and headless Shopify store. Our checkout conversion rate jumped by 48% within the first month after the redesign launched.',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
  },
  {
    name: 'Liam Thorne',
    role: 'VP of Marketing',
    body: 'Their multi-touch attribution dashboards provided crystal-clear transparency we never had before. We finally know the exact return on every dollar spent across Google and Meta.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  },
  {
    name: 'Aria Sharma',
    role: 'Chief Marketing Officer',
    body: 'Dynova delivers real enterprise performance. Ultra-fast turnaround, clean component design, and robust security implementation that sailed through our strictest compliance reviews.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
  },
  {
    name: 'Carlos Mendez',
    role: 'Chief Operating Officer',
    body: 'They automated our data pipelines and business intelligence dashboards end-to-end. Saved our executive leadership team 15+ hours of manual analysis every single week.',
    img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80',
  },
  {
    name: 'Naomi Tanaka',
    role: 'Brand & Community Lead',
    body: 'The brand identity and logo system Dynova developed gave our studio an iconic, memorable presence. Our community engagement and brand recognition grew over 300% across APAC.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
  },
  {
    name: 'Rachel Sterling',
    role: 'Founder',
    body: 'Switching to Dynova for our custom e-commerce redesign and performance marketing unlocked a 3.8x lift in organic search traffic and record-breaking holiday sales.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Component: Testimonials Column ---
interface ColumnProps {
  className?: string;
  items: ClientReview[];
  duration?: number;
}

const TestimonialsColumn = React.memo(function TestimonialsColumn({
  className = '',
  items,
  duration = 28,
}: ColumnProps) {
  return (
    <div className={className}>
      <motion.ul
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0 transform-gpu will-change-transform"
      >
        {Array.from({ length: 2 }, (_, loopIdx) => (
          <React.Fragment key={loopIdx}>
            {items.map(({ name, role, body, img }, idx) => (
              <motion.li
                key={`${loopIdx}-${idx}`}
                aria-hidden={loopIdx === 1}
                tabIndex={loopIdx === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.025,
                  y: -6,
                  transition: { type: 'spring', stiffness: 400, damping: 20 },
                }}
                whileFocus={{
                  scale: 1.025,
                  y: -6,
                  transition: { type: 'spring', stiffness: 400, damping: 20 },
                }}
                className="testimonial-card"
              >
                {/* 5 Rating Stars */}
                <div className="testimonial-card-stars">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} size={12} fill="#FFC300" strokeWidth={0} />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="m-0 p-0">
                  <p className="testimonial-card-quote">
                    "{body}"
                  </p>
                  <footer className="testimonial-card-footer">
                    <img
                      width={40}
                      height={40}
                      src={img}
                      alt={`Portrait of ${name}`}
                      loading="lazy"
                      decoding="async"
                      className="testimonial-card-avatar"
                    />
                    <div className="testimonial-card-author">
                      <cite className="testimonial-card-name">
                        {name}
                      </cite>
                      <span className="testimonial-card-role">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
});

// --- Main Testimonials Component ---
export const Testimonials: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  return (
    <section id="testimonials" className="testimonials-section">
      {/* Header Container: Perfectly Centered */}
      <div className="testimonials-header-container">
        <div className="testimonials-header">
          {/* Eyebrow */}
          <motion.div
            className="testimonials-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="testimonials-square" />
            <span className="testimonials-eyebrow-text">CLIENT VOICES // PROVEN IMPACT</span>
          </motion.div>

          {/* Title with BlurText: Centered */}
          <h2 className="testimonials-title-wrapper">
            <BlurText
              text="Trusted by Brands Scaling SEO, Paid Media & Website Growth"
              delay={80}
              className="testimonials-title"
              direction="bottom"
              stepDuration={0.35}
            />
          </h2>

          {/* Subtitle: Centered */}
          <motion.p
            className="testimonials-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Real feedback from founders and growth leaders who partnered with Dynova Cloud to scale
            organic search visibility, paid media performance, and full-stack custom revenue engines.
          </motion.p>
        </div>
      </div>

      {/* 3-Column Infinite Vertical Scrolling Marquee: Centered with Generous Padding */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 flex justify-center items-center">
        <div
          className="flex justify-center items-start gap-6 max-h-[740px] overflow-hidden select-none w-full"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          }}
          role="region"
          aria-label="Scrolling Client Testimonials"
        >
          {/* Column 1: Always visible */}
          <TestimonialsColumn items={firstColumn} duration={28} className="w-full max-w-[330px] shrink-0" />

          {/* Column 2: Tablet & Desktop */}
          <TestimonialsColumn
            items={secondColumn}
            duration={36}
            className="hidden md:block w-full max-w-[330px] shrink-0"
          />

          {/* Column 3: Large Desktop */}
          <TestimonialsColumn
            items={thirdColumn}
            duration={31}
            className="hidden lg:block w-full max-w-[330px] shrink-0"
          />
        </div>
      </div>

      {/* Post-Testimonials Trust Anchor Banner: Centered */}
      <div className="testimonials-trust-anchor-container">
        <motion.div
          className="testimonials-trust-anchor"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="trust-anchor-left">
            <Sparkles size={16} className="trust-anchor-sparkle" />
            <span className="trust-anchor-text">
              Ready to become our next growth benchmark?
            </span>
          </div>
          <button
            type="button"
            onClick={() => openLeadModal()}
            className="trust-anchor-btn"
            aria-label="Explore partnership options"
          >
            <span>Explore Options</span>
            <ArrowUpRight size={15} className="trust-anchor-arrow" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
