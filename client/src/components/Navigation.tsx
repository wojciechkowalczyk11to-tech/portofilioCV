import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion
 * - Floating navigation that transforms on scroll
 * - Smooth hover effects with animated underlines
 * - Minimal visual elements with teal accent on interaction
 */

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const isScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      
      if (scrolled !== isScrolled.current && navRef.current) {
        isScrolled.current = scrolled;
        gsap.to(navRef.current, {
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
          backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
          boxShadow: scrolled ? '0 2px 8px rgba(0, 0, 0, 0.05)' : '0 0px 0px rgba(0, 0, 0, 0)',
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0)',
        backdropFilter: 'blur(0px)',
      }}
    >
      <div className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="text-lg font-bold text-foreground">Portfolio</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="nav-link text-sm font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="nav-link text-sm font-medium"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="nav-link text-sm font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="nav-link text-sm font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="nav-link text-sm font-medium"
          >
            Contact
          </button>
        </div>

        <button className="hidden md:block px-6 py-2 bg-accent text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm font-medium">
          Download CV
        </button>
      </div>
    </nav>
  );
}
