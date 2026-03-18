import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * Dark Glassmorphism Navigation
 * - Frosted glass on scroll
 * - Gold accent logo
 * - Smooth hover underlines
 * - Mobile hamburger menu
 */

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const isScrolled = useRef(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 60;
      if (scrolled !== isScrolled.current && navRef.current) {
        isScrolled.current = scrolled;
        gsap.to(navRef.current, {
          backgroundColor: scrolled
            ? 'rgba(10, 10, 15, 0.85)'
            : 'rgba(10, 10, 15, 0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          borderBottomColor: scrolled
            ? 'rgba(30, 30, 46, 0.8)'
            : 'rgba(30, 30, 46, 0)',
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'O mnie', id: 'about' },
    { label: 'Projekty', id: 'projects' },
    { label: 'Umiejętności', id: 'skills' },
    { label: 'Doświadczenie', id: 'experience' },
    { label: 'Kontakt', id: 'contact' },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent"
      style={{ backgroundColor: 'rgba(10, 10, 15, 0)' }}
    >
      <div className="container flex items-center justify-between py-5">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)',
            }}
          >
            WK
          </div>
          <div>
            <span
              className="text-base font-bold block leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#e2e8f0' }}
            >
              Wojciech Kowalczyk
            </span>
            <span className="text-xs" style={{ color: '#f59e0b', fontFamily: 'Poppins, sans-serif' }}>
              AI Software Engineer
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="mailto:wojciech.kowalczyk11to@gmail.com"
          className="hidden md:flex btn-glow items-center gap-2 text-sm"
          style={{ padding: '10px 20px' }}
        >
          <span>Kontakt</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: '#e2e8f0',
                transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: '#e2e8f0',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: '#e2e8f0',
                transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-4 pb-6 pt-2"
          style={{
            background: 'rgba(10, 10, 15, 0.95)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(30, 30, 46, 0.8)',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-3 nav-link border-b"
              style={{ borderColor: 'rgba(30, 30, 46, 0.5)' }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="mailto:wojciech.kowalczyk11to@gmail.com"
            className="btn-glow mt-4 text-center block"
          >
            Napisz do mnie
          </a>
        </div>
      )}
    </nav>
  );
}
