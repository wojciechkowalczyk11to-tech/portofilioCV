import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion + Enhanced Interactivity
 * - Animated reveals with staggered timing
 * - Hover effects on feature cards
 * - Scroll-triggered animations
 * - Animated accent underlines
 */

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll('[data-animate-item]');
    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30, x: index % 2 === 0 ? -20 : 20 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.7,
          delay: index * 0.1,
          ease: 'cubic.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    });

    // Animate feature cards on hover
    const cards = sectionRef.current.querySelectorAll('[data-feature-card]');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          boxShadow: '0 20px 40px rgba(20, 184, 166, 0.15)',
          duration: 0.3,
          ease: 'cubic.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          duration: 0.3,
          ease: 'cubic.out',
        });
      });
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
      data-animate
    >
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-4xl relative z-10">
        <h2 className="section-title mb-12" data-animate-item>
          <span className="animated-underline">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div data-animate-item>
            <p className="text-lg text-foreground mb-6 leading-relaxed font-light">
              I'm <span className="text-accent font-medium">Excel Sean</span>, a results-driven and adaptable professional with proven leadership strength and the ability to understand people, build trust, and resolve challenges with clarity and empathy.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed font-light">
              Recognized as a <span className="text-accent font-medium">proactive initiator</span>, I excel at uniting diverse perspectives, driving progress, and delivering dependable results. With a strong work ethic and commitment to continuous growth, I bring both the qualities of a high-performing contributor and the humility of a lifelong learner.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-light">
              My goal is to create <span className="text-accent font-medium">meaningful impact</span> within any organization, combining technical excellence with human-centered leadership.
            </p>
          </div>

          <div data-animate-item className="space-y-4">
            <div
              data-feature-card
              className="p-6 bg-secondary/30 rounded-lg border border-border hover:border-accent transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Leadership</h3>
                  <p className="text-muted-foreground text-sm">Proven ability to lead teams, mentor others, and drive organizational growth</p>
                </div>
              </div>
            </div>

            <div
              data-feature-card
              className="p-6 bg-secondary/30 rounded-lg border border-border hover:border-accent transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Problem Solving</h3>
                  <p className="text-muted-foreground text-sm">Strategic thinker who resolves complex challenges with clarity and empathy</p>
                </div>
              </div>
            </div>

            <div
              data-feature-card
              className="p-6 bg-secondary/30 rounded-lg border border-border hover:border-accent transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Proactive Initiator</h3>
                  <p className="text-muted-foreground text-sm">Drives progress through continuous learning and delivering dependable results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
