import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { useLeadModal } from '../../context/LeadModalContext';
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
    keyword: 'DATA-FIRST STRATEGY',
    title: 'Discovery & Data-First Strategy',
    description: 'We base every strategy on real search intent volumes, verified conversion data, and technical site performance metrics. No guesswork, no generic templates.'
  },
  {
    num: '02',
    keyword: 'UNIFIED GROWTH ENGINE',
    title: 'Unified Execution, Not Execution Silos',
    description: 'Most agencies run ads without fixing slow backend code, or build sites without understanding search intent. Dynova Cloud operates as one unified growth engine, combining SEO, paid media, and full-stack development under a single strategy.'
  },
  {
    num: '03',
    keyword: 'RAPID PAID MEDIA SIGNAL',
    title: 'Early Signal Within 48–72 Hours',
    description: 'Paid campaigns across Google Search, Meta, and LinkedIn Ads deliver direct conversion data and lead generation within 48 to 72 hours of launch, giving you immediate performance signal while long-term SEO compounds in the background.'
  },
  {
    num: '04',
    keyword: 'COMPOUNDING ORGANIC GROWTH',
    title: 'Compounding Growth Over 4–6 Months',
    description: 'SEO campaigns build cumulative organic growth, typically delivering initial rank improvements within 30 to 60 days and substantial revenue scaling within 4 to 6 months.',
    hasCta: true
  }
];

export const Process: React.FC = () => {
  const { openLeadModal } = useLeadModal();
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
                      <button
                        type="button"
                        onClick={() => openLeadModal()}
                        className="process-slide-cta-btn"
                        aria-label="Initiate Phase 01 blueprint"
                      >
                        <span>Initiate Phase 01</span>
                        <ArrowUpRight size={16} className="process-cta-arrow" />
                      </button>
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
