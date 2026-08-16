import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

interface ProcessPhase {
  num: string;
  keyword: string;
  title: string;
  description: string;
  hasCta?: boolean;
}

const PHASES: ProcessPhase[] = [
  {
    num: '01',
    keyword: 'MARKET INTELLIGENCE',
    title: 'Discovery & Strategy',
    description: 'Forensic audit of your digital ecosystem, competitor growth vectors, and user conversion funnels to build a data-driven growth roadmap.'
  },
  {
    num: '02',
    keyword: 'CONVERSION UI/UX',
    title: 'Architecture & Design',
    description: 'Engineering high-converting design systems, tokenized UI kits, and interactive prototypes built for rapid user engagement.'
  },
  {
    num: '03',
    keyword: 'PRODUCTION SPEED',
    title: 'Engineering & Deploy',
    description: 'Modern Next.js platforms with sub-second page loads, automated CI/CD deployment pipelines, and global edge security standards.'
  },
  {
    num: '04',
    keyword: 'REVENUE ENGINE',
    title: 'Hyper-Scale & Growth',
    description: 'Algorithmic paid media scaling, continuous multi-variant A/B conversion tests, and real-time revenue telemetry to compound ROI.',
    hasCta: true
  }
];

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const lastStepRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    if (!container || !stage) return;

    const ctx = gsap.context(() => {
      const slides = slidesRef.current.filter(Boolean) as HTMLDivElement[];
      if (slides.length === 0) return;

      // Initially set all slides except the first one below and hidden
      slides.forEach((slide, index) => {
        if (index === 0) {
          gsap.set(slide, { opacity: 1, y: 0, filter: 'blur(0px)', pointerEvents: 'auto' });
        } else {
          gsap.set(slide, { opacity: 0, y: 80, filter: 'blur(12px)', pointerEvents: 'none' });
        }
      });

      // Master Timeline linked to ScrollTrigger with pinning
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=300%',
          pin: stage,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Update progress bar directly in DOM without React re-render
            if (progressBarRef.current) {
              gsap.set(progressBarRef.current, { scaleX: self.progress });
            }
            // Update active step indicator only when phase actually changes (4 times total vs 100s of times)
            const step = Math.min(
              Math.floor(self.progress * PHASES.length),
              PHASES.length - 1
            );
            if (step !== lastStepRef.current) {
              lastStepRef.current = step;
              setActiveStep(step);
            }
          }
        }
      });

      // Animate transitions between slides
      for (let i = 0; i < slides.length - 1; i++) {
        const currentSlide = slides[i];
        const nextSlide = slides[i + 1];

        tl.to(
          currentSlide,
          {
            opacity: 0,
            y: -70,
            filter: 'blur(12px)',
            pointerEvents: 'none',
            duration: 1,
            ease: 'power2.inOut'
          },
          `step-${i}`
        )
        .to(
          nextSlide,
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            pointerEvents: 'auto',
            duration: 1,
            ease: 'power2.inOut'
          },
          `step-${i}`
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="process" className="process-pinned-container">
      {/* The Pinned Viewport Stage */}
      <div ref={stageRef} className="process-pinned-stage">
        <div className="process-stage-inner">
          
          {/* Top Control & Header Bar */}
          <div className="process-stage-top">
            <div className="process-stage-eyebrow">
              <span className="process-stage-square" />
              <span className="process-stage-eyebrow-text">OUR METHODOLOGY // HOW WE BUILD</span>
            </div>

            <div className="process-stage-progress-wrap">
              <div className="process-phase-counter">
                <span className="phase-active-num">0{activeStep + 1}</span>
                <span className="phase-divider">/</span>
                <span className="phase-total-num">0{PHASES.length}</span>
              </div>
              <div className="process-progress-track-outer">
                <div ref={progressBarRef} className="process-progress-fill-bar" />
              </div>
            </div>
          </div>

          {/* Center Stage: Giant Typography Kinetic Slides */}
          <div className="process-slides-wrapper">
            {PHASES.map((phase, index) => (
              <div
                key={phase.num}
                ref={(el) => { slidesRef.current[index] = el; }}
                className="process-slide"
              >
                <div className="process-slide-content">
                  {/* Pillar Keyword Badge */}
                  <div className="process-keyword-badge">
                    <Sparkles size={13} className="text-[#003566]" />
                    <span>{phase.keyword}</span>
                  </div>

                  {/* Giant Bold Statement Title */}
                  <h2 className="process-giant-title">
                    <span className="process-title-num">{phase.num}.</span> {phase.title}
                  </h2>

                  {/* Clean 2-line Statement Narrative */}
                  <p className="process-slide-desc">
                    {phase.description}
                  </p>

                  {/* Inline CTA Button on Final Phase */}
                  {phase.hasCta && (
                    <div className="process-slide-cta-wrap">
                      <a href="#contact" className="process-slide-cta-btn">
                        <span>Initiate Phase 01</span>
                        <ArrowUpRight size={16} className="process-cta-arrow" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Indicators & Scroll Prompt Bar */}
          <div className="process-stage-bottom">
            <div className="process-step-indicators">
              {PHASES.map((phase, idx) => (
                <div
                  key={phase.num}
                  className={`process-step-pill ${idx === activeStep ? 'is-active' : ''} ${idx < activeStep ? 'is-completed' : ''}`}
                >
                  <span className="step-pill-dot" />
                  <span className="step-pill-text">{phase.num} {phase.title.split('&')[0]}</span>
                </div>
              ))}
            </div>

            <div className="process-scroll-hint">
              <span>SCROLL TO ADVANCE</span>
              <ArrowDown size={14} className="process-scroll-arrow" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
