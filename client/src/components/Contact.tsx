import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion
 * - Large, prominent call-to-action section
 * - Animated buttons with hover effects
 * - Minimal design with teal accents
 */

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    });

    if (titleRef.current) {
      timeline.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'cubic.out' },
        0
      );
    }

    buttonsRef.current.forEach((btn, index) => {
      if (btn) {
        timeline.fromTo(
          btn,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'cubic.out' },
          0.2 + index * 0.1
        );

        // Hover animations
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, {
            scale: 1.05,
            duration: 0.3,
            ease: 'cubic.out',
          });
        });

        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, {
            scale: 1,
            duration: 0.3,
            ease: 'cubic.out',
          });
        });
      }
    });
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
      data-animate
    >
      <div className="container max-w-3xl text-center">
        <h2
          ref={titleRef}
          className="section-title mb-6"
          style={{ letterSpacing: '-0.02em' }}
        >
          Let's Work Together
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just say hello!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            ref={(el) => {
              if (el) buttonsRef.current[0] = el;
            }}
            className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:shadow-xl transition-all duration-300 inline-block"
          >
            Send Me an Email
          </button>
          <button
            ref={(el) => {
              if (el) buttonsRef.current[1] = el;
            }}
            className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-300 inline-block"
          >
            View My Resume
          </button>
        </div>

        {/* Social links */}
        <div className="mt-16 flex justify-center gap-6">
          {[
            { name: 'LinkedIn', icon: '🔗' },
            { name: 'GitHub', icon: '🐙' },
            { name: 'Twitter', icon: '𝕏' },
          ].map((social, index) => (
            <a
              key={index}
              href="#"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-accent hover:text-white text-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
