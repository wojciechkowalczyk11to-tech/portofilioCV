import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * Dark Glassmorphism Hero
 * - Canvas floating particles
 * - Typing animation for role
 * - Stat cards with glass effect
 * - Glow CTA buttons
 */

const TYPING_STRINGS = [
  'AI Software Engineer',
  'Python Backend Developer',
  'LLM Systems Architect',
  'RAG & pgvector Expert',
  'GCP Cloud Builder',
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setTypedText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setStringIndex((i) => (i + 1) % TYPING_STRINGS.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, stringIndex]);

  // Canvas particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      r: number; opacity: number; color: string;
    }> = [];

    const colors = ['#7c3aed', '#06b6d4', '#f59e0b', '#a78bfa'];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#7c3aed';
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // GSAP entrance animations
  useEffect(() => {
    if (!heroRef.current) return;
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      heroRef.current.querySelectorAll('[data-hero-item]'),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  const stats = [
    { value: '8+', label: 'LLM Providers' },
    { value: '44', label: 'MCP Tools' },
    { value: '776', label: 'Vector Docs' },
    { value: '100%', label: 'Solo Built' },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d1a 100%)' }}
    >
      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Radial glow backgrounds */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <div
          className="absolute"
          style={{
            top: '10%',
            left: '5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: '10%',
            right: '5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.10) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.04) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
      </div>

      <div className="container max-w-5xl relative" style={{ zIndex: 1 }} ref={heroRef}>
        {/* Label */}
        <div data-hero-item className="section-label mb-4">
          AI Systems Developer — Łódź, Polska
        </div>

        {/* Name */}
        <h1
          data-hero-item
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#f0f0ff',
            marginBottom: '8px',
          }}
        >
          WOJCIECH
        </h1>
        <h1
          data-hero-item
          className="gradient-text"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
          }}
        >
          KOWALCZYK
        </h1>

        {/* Typing animation */}
        <div
          data-hero-item
          className="flex items-center gap-3 mb-6"
          style={{ minHeight: '40px' }}
        >
          <span
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              fontWeight: 500,
              color: '#06b6d4',
            }}
          >
            {typedText}
          </span>
          <span
            style={{
              width: '2px',
              height: '1.4rem',
              background: '#7c3aed',
              display: 'inline-block',
              animation: 'typing-cursor 1s infinite',
            }}
          />
        </div>

        {/* Description */}
        <p
          data-hero-item
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '15px',
            color: '#94a3b8',
            lineHeight: 1.8,
            maxWidth: '600px',
            marginBottom: '32px',
          }}
        >
          Samodzielnie zbudowałem{' '}
          <span style={{ color: '#a78bfa', fontWeight: 600 }}>NEXUS</span> — kompletny
          ekosystem AI z 8 dostawcami LLM, RAG (pgvector), multi-agent runtime i
          infrastrukturą produkcyjną na{' '}
          <span style={{ color: '#06b6d4', fontWeight: 600 }}>GCP + Cloudflare</span>.
          Autor własnego serwera MCP z{' '}
          <span style={{ color: '#f59e0b', fontWeight: 600 }}>44 narzędziami</span>.
        </p>

        {/* Contact pills */}
        <div data-hero-item className="flex flex-wrap gap-2 mb-8">
          {[
            { icon: '✉', text: 'wojciech.kowalczyk11to@gmail.com', href: 'mailto:wojciech.kowalczyk11to@gmail.com' },
            { icon: '🌐', text: 'portfolio.nexus-oc.pl', href: 'https://portfolio.nexus-oc.pl' },
            { icon: '💻', text: 'github.com/wojciechkowalczyk11to-tech', href: 'https://github.com/wojciechkowalczyk11to-tech' },
            { icon: '📍', text: 'Łódź, Polska', href: null },
          ].map((item, i) => (
            item.href ? (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  padding: '6px 14px',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  borderRadius: '20px',
                  fontSize: '11px',
                  color: '#94a3b8',
                  background: 'rgba(124, 58, 237, 0.06)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  fontFamily: 'Poppins, sans-serif',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor = 'rgba(124, 58, 237, 0.5)';
                  (e.target as HTMLElement).style.color = '#a78bfa';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor = 'rgba(124, 58, 237, 0.2)';
                  (e.target as HTMLElement).style.color = '#94a3b8';
                }}
              >
                {item.icon} {item.text}
              </a>
            ) : (
              <span
                key={i}
                style={{
                  padding: '6px 14px',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  borderRadius: '20px',
                  fontSize: '11px',
                  color: '#94a3b8',
                  background: 'rgba(124, 58, 237, 0.06)',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {item.icon} {item.text}
              </span>
            )
          ))}
        </div>

        {/* CTA Buttons */}
        <div data-hero-item className="flex flex-wrap gap-4 mb-16">
          <button
            className="btn-glow animate-glow-pulse"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Zobacz projekty
          </button>
          <a
            href="mailto:wojciech.kowalczyk11to@gmail.com"
            className="btn-outline-glow"
          >
            Skontaktuj się
          </a>
          <a
            href="https://github.com/wojciechkowalczyk11to-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-glow"
            style={{ borderColor: 'rgba(6, 182, 212, 0.4)', color: '#67e8f9' }}
          >
            GitHub →
          </a>
        </div>

        {/* Stats */}
        <div
          data-hero-item
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 1 }}
      >
        <span style={{ fontSize: '10px', color: '#64748b', letterSpacing: '3px', fontFamily: 'Poppins, sans-serif' }}>
          SCROLL
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(180deg, #7c3aed, transparent)',
            animation: 'float-particle 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
