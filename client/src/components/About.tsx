import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Dark Glassmorphism About Section
 * - Glassmorphic feature cards
 * - Scroll-triggered fade-in
 * - Gold accent highlights
 */

export default function About() {
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

  const features = [
    {
      icon: '🧠',
      title: 'AI Systems Architect',
      desc: 'Projektuję i buduję kompletne systemy AI — od backendu FastAPI przez routing LLM po RAG z pgvector i multi-agent runtime.',
      color: '#7c3aed',
    },
    {
      icon: '☁️',
      title: 'Cloud & Infra',
      desc: 'Wdrożenia produkcyjne na GCP Cloud Run. Cloudflare Tunnel, Zero Trust, Workers, R2, KV — pełna infrastruktura serverless.',
      color: '#06b6d4',
    },
    {
      icon: '🔧',
      title: 'MCP Protocol Author',
      desc: 'Autor własnego serwera MCP z 44 narzędziami — AI Proxy, GCP, Cloudflare, GitHub, Vercel, Google Drive, Shell.',
      color: '#f59e0b',
    },
    {
      icon: '🚀',
      title: 'Solo Builder',
      desc: 'Wszystkie projekty zbudowane samodzielnie — od architektury przez implementację po deployment i monitoring produkcyjny.',
      color: '#10b981',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0d1a 0%, #0a0a0f 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          right: '-10%',
          transform: 'translateY(-50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="container max-w-5xl relative" style={{ zIndex: 1 }}>
        <div data-animate-item className="section-label">O mnie</div>
        <h2
          data-animate-item
          className="section-title"
        >
          Kim jestem
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: Text */}
          <div data-animate-item>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '15px',
                color: '#94a3b8',
                lineHeight: 1.9,
                marginBottom: '20px',
              }}
            >
              Jestem{' '}
              <span style={{ color: '#a78bfa', fontWeight: 600 }}>
                samodzielnym AI Systems Developerem
              </span>{' '}
              z Łodzi, specjalizującym się w budowaniu kompletnych ekosystemów AI.
              Moje projekty działają produkcyjnie 24/7 na GCP Cloud Run z Cloudflare.
            </p>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '15px',
                color: '#94a3b8',
                lineHeight: 1.9,
                marginBottom: '20px',
              }}
            >
              Zbudowałem{' '}
              <span style={{ color: '#06b6d4', fontWeight: 600 }}>N.O.C (Nexus Omega Core)</span>{' '}
              — backend obsługujący 8 dostawców LLM z inteligentnym routingiem ECO/SMART/DEEP,
              RAG z pgvector, systemem RBAC i monetyzacją Telegram Stars.
            </p>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '15px',
                color: '#94a3b8',
                lineHeight: 1.9,
              }}
            >
              Mój{' '}
              <span style={{ color: '#f59e0b', fontWeight: 600 }}>NEXUS MCP Server</span>{' '}
              z 44 narzędziami jest dostępny live pod{' '}
              <a
                href="https://mcp.nexus-oc.pl"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#a78bfa', textDecoration: 'underline' }}
              >
                mcp.nexus-oc.pl
              </a>{' '}
              i integruje się z LangChain/LangGraph.
            </p>

            {/* Quick facts */}
            <div
              className="mt-8 p-5 glass-card"
              style={{ borderColor: 'rgba(124, 58, 237, 0.2)' }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Lokalizacja', value: 'Łódź, Polska' },
                  { label: 'Dostępność', value: 'Natychmiast' },
                  { label: 'Email', value: 'wojciech.kowalczyk11to@gmail.com' },
                  { label: 'Angielski', value: 'B2' },
                ].map((item, i) => (
                  <div key={i}>
                    <div
                      style={{
                        fontSize: '10px',
                        color: '#64748b',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontFamily: 'Poppins, sans-serif',
                        marginBottom: '4px',
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        color: '#e2e8f0',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 500,
                        wordBreak: 'break-all',
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 gap-4">
            {features.map((feat, i) => (
              <div
                key={i}
                data-animate-item
                className="glass-card p-5 flex gap-4 items-start"
                style={{ borderColor: `${feat.color}22` }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${feat.color}20`, border: `1px solid ${feat.color}30` }}
                >
                  {feat.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#e2e8f0',
                      marginBottom: '6px',
                    }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '12px',
                      color: '#64748b',
                      lineHeight: 1.7,
                    }}
                  >
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
