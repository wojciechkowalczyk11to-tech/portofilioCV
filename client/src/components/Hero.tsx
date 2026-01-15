import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion
 * - Large display typography with animated reveal
 * - Smooth parallax scrolling on hero section
 * - Minimal visual elements with teal accent underline
 * - Character-by-character text reveal animation
 */

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate title with character reveal effect
    if (titleRef.current) {
      const titleText = titleRef.current.textContent || '';
      titleRef.current.innerHTML = titleText
        .split('')
        .map((char) => `<span class="inline-block">${char}</span>`)
        .join('');

      timeline.fromTo(
        titleRef.current.querySelectorAll('span'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.05,
          ease: 'cubic.out',
        },
        0
      );
    }

    // Animate subtitle
    if (subtitleRef.current) {
      timeline.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'cubic.out' },
        0.3
      );
    }

    // Animate CTA button
    if (ctaRef.current) {
      timeline.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'cubic.out' },
        0.5
      );
    }

    // Add hover animation to CTA button
    if (ctaRef.current) {
      ctaRef.current.addEventListener('mouseenter', () => {
        gsap.to(ctaRef.current, {
          scale: 1.05,
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
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-4xl">
        <h1
          ref={titleRef}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          Hello, I'm Your Name
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-2xl"
          style={{ letterSpacing: '0.01em' }}
        >
          A passionate full-stack developer crafting elegant digital experiences through clean code and thoughtful design.
        </p>

        <button
          ref={ctaRef}
          className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:shadow-xl transition-all duration-300 inline-block"
        >
          Explore My Work
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
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
