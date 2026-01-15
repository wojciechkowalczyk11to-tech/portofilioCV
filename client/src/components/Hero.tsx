import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion + Enhanced Interactivity
 * - Large display typography with animated reveal
 * - Smooth parallax scrolling on hero section
 * - Floating animated background elements
 * - Character-by-character text reveal animation
 * - Multiple animation layers for depth
 */

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate background elements
    if (bgRef.current) {
      const floatingElements = bgRef.current.querySelectorAll('[data-float]');
      floatingElements.forEach((el, index) => {
        gsap.to(el, {
          y: -30,
          opacity: 0.6,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }

    // Animate title with character reveal effect
    if (titleRef.current) {
      const titleText = titleRef.current.textContent || '';
      titleRef.current.innerHTML = titleText
        .split('')
        .map((char) => `<span class="inline-block">${char}</span>`)
        .join('');

      timeline.fromTo(
        titleRef.current.querySelectorAll('span'),
        { opacity: 0, y: 30, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.08,
          stagger: 0.03,
          ease: 'back.out',
        },
        0
      );
    }

    // Animate subtitle
    if (subtitleRef.current) {
      timeline.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'cubic.out' },
        0.4
      );
    }

    // Animate CTA button with glow effect
    if (ctaRef.current) {
      timeline.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'cubic.out' },
        0.6
      );

      // Continuous glow animation
      gsap.to(ctaRef.current, {
        boxShadow: '0 0 20px rgba(20, 184, 166, 0.5), 0 0 40px rgba(20, 184, 166, 0.2)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Hover animation
      ctaRef.current.addEventListener('mouseenter', () => {
        gsap.to(ctaRef.current, {
          scale: 1.1,
          duration: 0.3,
          ease: 'cubic.out',
        });
      });

      ctaRef.current.addEventListener('mouseleave', () => {
        gsap.to(ctaRef.current, {
          scale: 1,
          duration: 0.3,
          ease: 'cubic.out',
        });
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div ref={bgRef} className="absolute inset-0 -z-10">
        <div
          data-float
          className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        ></div>
        <div
          data-float
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        ></div>
        <div
          data-float
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-accent/8 rounded-full blur-3xl"
        ></div>
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="container max-w-4xl relative z-10">
        <h1
          ref={titleRef}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
          style={{ letterSpacing: '-0.02em', perspective: '1000px' }}
        >
          Excel Sean
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-2xl"
          style={{ letterSpacing: '0.01em' }}
        >
          Results-driven professional with proven leadership strength, driving progress through proactive initiatives and delivering dependable results.
        </p>

        <button
          ref={ctaRef}
          className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:shadow-xl transition-all duration-300 inline-block"
        >
          Explore My Journey
        </button>
      </div>

      {/* Scroll indicator with animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
