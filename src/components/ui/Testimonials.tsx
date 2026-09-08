import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

// --- Types ---
export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
export const TestimonialsColumn = React.memo(function TestimonialsColumn({
  className = '',
  testimonials: columnTestimonials,
  duration = 15,
}: TestimonialsColumnProps) {
  return (
    <div className={className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0 transform-gpu will-change-transform"
      >
        {Array.from({ length: 2 }, (_, index) => (
          <React.Fragment key={index}>
            {columnTestimonials.map(({ text, image, name, role }, i) => (
              <motion.li
                key={`${index}-${i}`}
                aria-hidden={index === 1 ? "true" : "false"}
                tabIndex={index === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.025,
                  y: -6,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                whileFocus={{
                  scale: 1.025,
                  y: -6,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                style={{ padding: '30px 28px' }}
                className="rounded-3xl border border-neutral-800/80 shadow-2xl shadow-black/40 max-w-[330px] w-full bg-neutral-900/90 backdrop-blur-md transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-amber-400/40 box-border"
              >
                {/* 5 Stars Header */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} size={12} fill="#FFC300" strokeWidth={0} />
                  ))}
                </div>

                <blockquote className="m-0 p-0">
                  <p className="text-neutral-300 leading-relaxed font-normal m-0 text-[13px]">
                    "{text}"
                  </p>
                  <footer className="flex items-center gap-3 mt-6 pt-4 border-t border-neutral-800">
                    <img
                      width={38}
                      height={38}
                      src={image}
                      alt={`Avatar of ${name}`}
                      loading="lazy"
                      decoding="async"
                      className="h-[38px] w-[38px] rounded-full object-cover ring-2 ring-neutral-800 group-hover:ring-amber-400/40 transition-all duration-300 ease-in-out shrink-0"
                    />
                    <div className="flex flex-col min-w-0">
                      <cite className="font-semibold not-italic tracking-tight leading-5 text-white text-[13px] truncate">
                        {name}
                      </cite>
                      <span className="text-[11.5px] leading-4 tracking-tight text-neutral-400 mt-0.5 truncate">
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

export const Testimonials = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-transparent py-20 relative overflow-hidden w-full flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 z-10 mx-auto flex flex-col items-center"
      >
        <div className="flex flex-col items-center justify-center max-w-[580px] mx-auto mb-16 text-center">
          <div className="flex justify-center">
            <div className="border border-neutral-800 py-1.5 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-300 bg-neutral-800/60">
              Testimonials
            </div>
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-white"
          >
            What our users say
          </h2>
          <p className="text-center mt-5 text-neutral-400 text-sm md:text-base leading-relaxed max-w-md mx-auto">
            Discover how thousands of teams streamline their operations with our platform.
          </p>
        </div>

        <div
          className="flex justify-center items-start gap-6 max-h-[740px] overflow-hidden select-none w-full"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          }}
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} className="w-full max-w-[330px] shrink-0" />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block w-full max-w-[330px] shrink-0" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block w-full max-w-[330px] shrink-0" duration={17} />
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
