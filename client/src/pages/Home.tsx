import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion + Enhanced Interactivity
 * - Extensive scroll-triggered animations
 * - Parallax effects and floating elements
 * - Rich interactive elements that respond to scroll
 * - Vibrant animations that make the portfolio feel alive
 */

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP animations on mount
    if (!containerRef.current) return;

    // Stagger animation for all section elements
    const sections = containerRef.current.querySelectorAll('[data-animate]');
    sections.forEach((section: Element) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'cubic.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: false,
            markers: false,
          },
        }
      );
    });

    // Add parallax effect to background elements
    const parallaxElements = containerRef.current.querySelectorAll('[data-parallax]');
    parallaxElements.forEach((element: Element) => {
      gsap.to(element, {
        y: (i) => i * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          scrub: 1,
          markers: false,
        },
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
