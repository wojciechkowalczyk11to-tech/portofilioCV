import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion + Enhanced Interactivity
 * - Large, prominent call-to-action section
 * - Animated buttons with glow effects
 * - Interactive social links with hover animations
 * - Scroll-triggered reveals
 */

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const socialRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    });

    // Animate title
    if (titleRef.current) {
      const titleText = titleRef.current.textContent || '';
      titleRef.current.innerHTML = titleText
        .split('')
        .map((char) => `<span class="inline-block">${char}</span>`)
        .join('');

      timeline.fromTo(
        titleRef.current.querySelectorAll('span'),
        { opacity: 0, y: 20, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.05,
          stagger: 0.02,
          ease: 'back.out',
        },
        0
      );
    }

    // Animate buttons
    buttonsRef.current.forEach((btn, index) => {
      if (btn) {
        timeline.fromTo(
          btn,
          { opacity: 0, y: 30, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out' },
          0.3 + index * 0.15
        );

        // Continuous glow animation
        gsap.to(btn, {
          boxShadow: index === 0 
            ? '0 0 20px rgba(20, 184, 166, 0.5), 0 0 40px rgba(20, 184, 166, 0.2)'
            : '0 0 15px rgba(20, 184, 166, 0.3)',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        // Hover animations
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, {
            scale: 1.08,
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

    // Animate social links
    socialRef.current.forEach((link, index) => {
      if (link) {
        timeline.fromTo(
          link,
          { opacity: 0, scale: 0, rotateZ: -180 },
          { opacity: 1, scale: 1, rotateZ: 0, duration: 0.6, ease: 'back.out' },
          0.5 + index * 0.1
        );

        // Hover animations
        link.addEventListener('mouseenter', () => {
          gsap.to(link, {
            scale: 1.2,
            rotateZ: 360,
            duration: 0.5,
            ease: 'back.out',
          });
        });

        link.addEventListener('mouseleave', () => {
          gsap.to(link, {
            scale: 1,
            rotateZ: 0,
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
      className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden"
      data-animate
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-3xl text-center relative z-10">
        <h2
          ref={titleRef}
          className="section-title mb-6"
          style={{ letterSpacing: '-0.02em', perspective: '1000px' }}
        >
          Let's Connect
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, and meaningful conversations. Feel free to reach out through any of the channels below!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            ref={(el) => {
              if (el) buttonsRef.current[0] = el;
            }}
            className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:shadow-xl transition-all duration-300 inline-block"
          >
            📧 Send Me an Email
          </button>
          <button
            ref={(el) => {
              if (el) buttonsRef.current[1] = el;
            }}
            className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-300 inline-block"
          >
            📄 Download My CV
          </button>
        </div>

        {/* Contact Info */}
        <div className="mb-12 p-6 bg-background rounded-lg border border-border">
          <p className="text-foreground font-medium mb-2">📧 Email</p>
          <p className="text-accent text-sm mb-4">excelsean777@gmail.com</p>
          <p className="text-foreground font-medium mb-2">📍 Location</p>
          <p className="text-muted-foreground text-sm mb-4">Jakarta, Indonesia</p>
          <p className="text-foreground font-medium mb-2">📱 Phone</p>
          <p className="text-muted-foreground text-sm">+00-0000-0000-0000</p>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 flex-wrap">
          {[
            { name: 'LinkedIn', icon: '💼', url: '#' },
            { name: 'GitHub', icon: '🐙', url: '#' },
            { name: 'Twitter', icon: '𝕏', url: '#' },
            { name: 'Instagram', icon: '📸', url: '#' },
          ].map((social, index) => (
            <a
              key={index}
              ref={(el) => {
                if (el) socialRef.current[index] = el;
              }}
              href={social.url}
              className="w-14 h-14 rounded-full bg-background hover:bg-accent hover:text-white text-foreground flex items-center justify-center transition-all duration-300 border border-border hover:border-accent text-xl font-bold"
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
