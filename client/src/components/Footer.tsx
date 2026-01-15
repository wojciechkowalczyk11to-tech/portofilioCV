import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion
 * - Clean footer with minimal information
 * - Subtle animations on scroll
 * - Teal accent for interactive elements
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
        duration: 0.6,
        ease: 'cubic.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
      }
    );
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="bg-foreground/5 border-t border-border py-12"
    >
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="nav-link text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="nav-link text-sm">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link text-sm">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="nav-link text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-sm">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-sm">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="nav-link text-sm">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Designed & Built with <span className="text-accent">❤</span> using React & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
