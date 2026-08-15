import React from 'react';
import { motion } from 'motion/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Marquee } from '@/components/ui/3d-testimonails';
import { Star } from 'lucide-react';
import BlurText from '../BlurText/BlurText';
import './Testimonials.css';

// Dynova Cloud Client Reviews & Testimonials Data
const testimonials = [
  {
    name: 'Marcus Vance',
    username: '@marcus.vance',
    role: 'Chief Technology Officer',
    company: 'OmniScale Inc.',
    body: 'Dynova Cloud rebuilt our entire infrastructure. Global TTFB dropped under 400ms and we achieved 99.99% uptime through peak seasonal traffic.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    country: '🇺🇸 USA',
  },
  {
    name: 'Elena Rostova',
    username: '@elena_growth',
    role: 'Head of Growth',
    company: 'NexaCommerce',
    body: 'Their Meta Ads strategy scaled our monthly revenue from $40k to $310k in under 90 days with a consistent 4.2x ROAS. Exceptional creative testing.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    country: '🇩🇪 Germany',
  },
  {
    name: 'David Chen',
    username: '@dchen_dev',
    role: 'Founder & CEO',
    company: 'CloudPulse',
    body: 'The web engineering caliber is outstanding. Next.js architecture, edge deployment, and Core Web Vitals all at 100% across the board.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    country: '🇸🇬 Singapore',
  },
  {
    name: 'Sophia Laurent',
    username: '@sophialux',
    role: 'Creative Director',
    company: 'Aetheria Luxury',
    body: 'Flawless execution on our headless Shopify storefront. Conversion rates jumped by 48% immediately after the new custom checkout went live.',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
    country: '🇫🇷 France',
  },
  {
    name: 'Liam Thorne',
    username: '@liam.thorne',
    role: 'VP of Marketing',
    company: 'Apex Health',
    body: 'Their multi-touch attribution dashboards gave us transparency we never had with previous agencies. We know where every marketing dollar goes.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    country: '🇬🇧 UK',
  },
  {
    name: 'Aria Sharma',
    username: '@ariasharma',
    role: 'Chief Marketing Officer',
    company: 'Horizon Fintech',
    body: 'Dynova delivers real business growth. Professional team, ultra-fast turnarounds, and engineering that withstands strict security audits.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    country: '🇦🇺 Australia',
  },
  {
    name: 'Carlos Mendez',
    username: '@carlos_m',
    role: 'Chief Operating Officer',
    company: 'Global Logistics',
    body: 'Automated our reporting telemetry and data pipelines end-to-end. Saved our executive leadership 15+ hours every single week.',
    img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
    country: '🇪🇸 Spain',
  },
  {
    name: 'Naomi Tanaka',
    username: '@naomitanaka',
    role: 'Brand & Community Lead',
    company: 'Kura Studios',
    body: 'Social media growth and community engagement expanded our organic brand presence across Asia and North America rapidly.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    country: '🇯🇵 Japan',
  },
];

function TestimonialCard({ img, name, role, company, body, country }: (typeof testimonials)[number]) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-inner">
        {/* Card Header */}
        <div className="testimonial-card-header">
          <div className="testimonial-card-profile">
            <Avatar className="testimonial-avatar">
              <AvatarImage src={img} alt={name} className="object-cover" />
              <AvatarFallback style={{ background: '#002244', color: '#FFC300', fontWeight: 600, fontSize: '10px' }}>{name[0]}</AvatarFallback>
            </Avatar>
            <div className="testimonial-card-info">
              <span className="testimonial-card-name">
                {name} <span className="testimonial-card-country">{country}</span>
              </span>
              <span className="testimonial-card-role">{role}</span>
              <span className="testimonial-card-company">{company}</span>
            </div>
          </div>
          <div className="testimonial-card-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill="#FFC300" strokeWidth={0} />
            ))}
          </div>
        </div>

        {/* Quote */}
        <blockquote className="testimonial-card-quote">
          "{body}"
        </blockquote>
      </div>
    </div>
  );
}

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      {/* Header Container */}
      <div className="testimonials-header-container">
        <div className="testimonials-header">
          {/* Eyebrow — normal fade in */}
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

          {/* H2 Title — blur text reveal on scroll */}
          <h2 className="testimonials-title-wrapper">
            <BlurText
              text="Trusted by Industry Leaders & Fast-Scaling Brands"
              delay={80}
              className="testimonials-title"
              direction="bottom"
              stepDuration={0.35}
            />
          </h2>

          {/* Subtitle paragraph — delayed fade reveal after blur title finishes */}
          <motion.p 
            className="testimonials-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Explore verified feedback from enterprise leaders, founders, and growth executives who scale with Dynova Cloud.
          </motion.p>
        </div>
      </div>

      {/* Full-Width 3D Testimonials Marquee Stage */}
      <div className="testimonials-3d-stage-wrapper">
        <div className="testimonials-3d-stage">
          <div className="testimonials-perspective-track">
            {/* Column 1 (downward) */}
            <Marquee vertical pauseOnHover repeat={4} className="[--duration:36s] gap-5">
              {testimonials.map((review, idx) => (
                <TestimonialCard key={`c1-${idx}`} {...review} />
              ))}
            </Marquee>

            {/* Column 2 (upward) */}
            <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:42s] gap-5">
              {testimonials.map((review, idx) => (
                <TestimonialCard key={`c2-${idx}`} {...review} />
              ))}
            </Marquee>

            {/* Column 3 (downward) */}
            <Marquee vertical pauseOnHover repeat={4} className="[--duration:34s] gap-5">
              {testimonials.map((review, idx) => (
                <TestimonialCard key={`c3-${idx}`} {...review} />
              ))}
            </Marquee>

            {/* Column 4 (upward) */}
            <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:44s] gap-5">
              {testimonials.map((review, idx) => (
                <TestimonialCard key={`c4-${idx}`} {...review} />
              ))}
            </Marquee>

            {/* Column 5 (downward) */}
            <Marquee vertical pauseOnHover repeat={4} className="[--duration:38s] gap-5">
              {testimonials.map((review, idx) => (
                <TestimonialCard key={`c5-${idx}`} {...review} />
              ))}
            </Marquee>

            {/* Column 6 (upward) */}
            <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:40s] gap-5">
              {testimonials.map((review, idx) => (
                <TestimonialCard key={`c6-${idx}`} {...review} />
              ))}
            </Marquee>
          </div>

          {/* Edge Depth Vignette Gradients — outside the 3D track so they stay flat */}
          <div className="testimonials-fade testimonials-fade-top" />
          <div className="testimonials-fade testimonials-fade-bottom" />
          <div className="testimonials-fade testimonials-fade-left" />
          <div className="testimonials-fade testimonials-fade-right" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
