import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion + Enhanced Interactivity
 * - Animated footer with scroll reveals
 * - Interactive navigation links
 * - Smooth transitions and hover effects
 */

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.fromTo(
      footerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: 'cubic.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
      }
    );

    // Animate footer links on hover
    const links = footerRef.current.querySelectorAll('[data-footer-link]');
    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          x: 5,
          color: '#14b8a6',
          duration: 0.3,
          ease: 'cubic.out',
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          x: 0,
          color: 'inherit',
          duration: 0.3,
          ease: 'cubic.out',
        });
      });
    });
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="bg-foreground/5 border-t border-border py-12 relative overflow-hidden"
    >
      {/* Subtle background animation */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="container max-w-5xl relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" data-footer-link className="nav-link text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" data-footer-link className="nav-link text-sm">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" data-footer-link className="nav-link text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#achievements" data-footer-link className="nav-link text-sm">
                  Achievements
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:excelsean777@gmail.com" data-footer-link className="nav-link text-sm">
                  Email
                </a>
              </li>
              <li>
                <a href="#" data-footer-link className="nav-link text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" data-footer-link className="nav-link text-sm">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" data-footer-link className="nav-link text-sm">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" data-footer-link className="nav-link text-sm">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" data-footer-link className="nav-link text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" data-footer-link className="nav-link text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">About</h3>
            <p className="text-muted-foreground text-sm">
              Excel Sean - Results-driven professional with proven leadership strength and commitment to excellence.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Excel Sean. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Designed & Built with <span className="text-accent">❤</span> using React, TypeScript & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
