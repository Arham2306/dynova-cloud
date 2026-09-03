import React, { useEffect, useRef, useMemo, type ReactNode, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from '../../lib/usePrefersReducedMotion';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationStart?: string;
  wordAnimationEnd?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.12,
  baseRotation = 1.5,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom 80%',
  wordAnimationStart = 'top 90%',
  wordAnimationEnd = 'center 55%'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="scroll-reveal-word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 90%',
            end: rotationEnd,
            scrub: true
          }
        }
      );

      const wordElements = el.querySelectorAll<HTMLElement>('.scroll-reveal-word');

      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, willChange: 'opacity, filter' },
        {
          ease: 'none',
          opacity: 1,
          stagger: 0.04,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: wordAnimationStart,
            end: wordAnimationEnd,
            scrub: true
          }
        }
      );

      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            ease: 'none',
            filter: 'blur(0px)',
            stagger: 0.04,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: wordAnimationStart,
              end: wordAnimationEnd,
              scrub: true
            }
          }
        );
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationStart, wordAnimationEnd, blurStrength, prefersReducedMotion]);

  return (
    <div ref={containerRef} className={`scroll-reveal-container ${containerClassName}`}>
      <div className={`scroll-reveal-paragraph ${textClassName}`}>
        {splitText}
      </div>
    </div>
  );
};

export default ScrollReveal;
