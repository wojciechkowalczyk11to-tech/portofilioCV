import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Dark Glassmorphism Contact Section
 * - Glassmorphic contact card
 * - Glow CTA buttons
 * - Social links with hover animation
 */

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll('[data-animate-item]');
    items.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      );
    });
  }, []);

  const contactItems = [
    {
      icon: '✉',
      label: 'Email',
      value: 'wojciech.kowalczyk11to@gmail.com',
      href: 'mailto:wojciech.kowalczyk11to@gmail.com',
      color: '#7c3aed',
    },
    {
      icon: '📱',
      label: 'Telefon',
      value: '+48 453 120 666',
      href: 'tel:+48453120666',
      color: '#06b6d4',
    },
    {
      icon: '🌐',
      label: 'Portfolio',
      value: 'portfolio.nexus-oc.pl',
      href: 'https://portfolio.nexus-oc.pl',
      color: '#f59e0b',
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'wojciechkowalczyk11to-tech',
      href: 'https://github.com/wojciechkowalczyk11to-tech',
      color: '#10b981',
    },
    {
      icon: '📍',
      label: 'Lokalizacja',
      value: 'Łódź, Polska',
      href: null,
      color: '#94a3b8',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0d1a 0%, #0a0a0f 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="container max-w-4xl relative" style={{ zIndex: 1 }}>
        <div data-animate-item className="section-label text-center">Kontakt</div>
        <h2
          data-animate-item
          className="section-title text-center"
        >
          Porozmawiajmy
        </h2>

        <p
          data-animate-item
          className="text-center mb-12"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '15px',
            color: '#64748b',
            maxWidth: '500px',
            margin: '0 auto 48px',
            lineHeight: 1.8,
          }}
        >
          Szukam nowych wyzwań w obszarze AI/ML i backend development.
          Jestem dostępny do rozmów rekrutacyjnych.
        </p>

        {/* CTA Buttons */}
        <div
          data-animate-item
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="mailto:wojciech.kowalczyk11to@gmail.com"
            className="btn-glow animate-glow-pulse"
            style={{ textDecoration: 'none' }}
          >
            ✉ Napisz do mnie
          </a>
          <a
            href="https://github.com/wojciechkowalczyk11to-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-glow"
            style={{ textDecoration: 'none' }}
          >
            💻 GitHub
          </a>
          <a
            href="https://portfolio.nexus-oc.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-glow"
            style={{
              borderColor: 'rgba(6, 182, 212, 0.4)',
              color: '#67e8f9',
              textDecoration: 'none',
            }}
          >
            🌐 Portfolio
          </a>
        </div>

        {/* Contact grid */}
        <div
          data-animate-item
          className="glass-card p-8"
          style={{ borderColor: 'rgba(124, 58, 237, 0.2)' }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {contactItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '10px',
                      color: '#64748b',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontFamily: 'Poppins, sans-serif',
                      marginBottom: '3px',
                    }}
                  >
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '13px',
                        color: item.color,
                        fontWeight: 500,
                        textDecoration: 'none',
                        wordBreak: 'break-all',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.7')}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '13px',
                        color: '#94a3b8',
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'rgba(255,255,255,0.06)',
              margin: '28px 0',
            }}
          />

          {/* Availability badge */}
          <div className="flex items-center justify-center gap-3">
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 8px #10b981',
                animation: 'glow-pulse 2s infinite',
              }}
            />
            <span
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '13px',
                color: '#10b981',
                fontWeight: 600,
              }}
            >
              Dostępny do rozmów rekrutacyjnych
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
