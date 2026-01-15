import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion
 * - Clean text layout with animated reveals
 * - Subtle accent underlines on key terms
 * - Scroll-triggered animations
 */

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll('[data-animate-item]');
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'cubic.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
      data-animate
    >
      <div className="container max-w-4xl">
        <h2 className="section-title mb-12" data-animate-item>
          <span className="animated-underline">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div data-animate-item>
            <p className="text-lg text-foreground mb-6 leading-relaxed font-light">
              I'm a full-stack developer with a passion for creating beautiful, functional digital experiences. With over 5 years of experience in web development, I've worked with startups and established companies to bring their visions to life.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed font-light">
              My approach combines <span className="text-accent font-medium">clean code</span>, thoughtful design, and a deep understanding of user needs. I believe that great software is both powerful and intuitive.
            </p>
          </div>

          <div data-animate-item>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Full-Stack Development</h3>
                  <p className="text-muted-foreground text-sm">React, Node.js, TypeScript, and modern web technologies</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">UI/UX Design</h3>
                  <p className="text-muted-foreground text-sm">Creating intuitive interfaces with attention to detail</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Problem Solving</h3>
                  <p className="text-muted-foreground text-sm">Tackling complex challenges with elegant solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
