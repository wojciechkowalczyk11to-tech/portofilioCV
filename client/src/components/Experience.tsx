import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Dark Glassmorphism Experience Section
 * - Visual timeline with glow dots
 * - Glassmorphic experience cards
 * - Scroll-triggered stagger
 */

const experiences = [
  {
    title: 'AI Systems Developer',
    company: 'Self-employed',
    period: 'Grudzień 2025 — obecnie',
    location: 'Łódź, Polska',
    color: '#7c3aed',
    icon: '🧠',
    highlights: [
      'N.O.C: backend z 8 LLM, RAG (pgvector), multi-agent runtime na GCP Cloud Run',
      'NEXUS MCP Server: 44-narzędziowy serwer MCP, live 24/7 via Cloudflare Tunnel',
      'Gangus AI: komercyjny orkiestrator LLM ($49), 90% redukcja kosztów',
      'GigaGrok Bot: multimodal Telegram bot z 776-doc vector KB',
    ],
    tags: ['FastAPI', 'LLM', 'RAG', 'GCP', 'MCP Protocol', 'Docker'],
  },
  {
    title: 'Doradca Klienta',
    company: 'Orange Polska',
    period: 'Listopad 2021 — Czerwiec 2022',
    location: 'Łódź, Polska',
    color: '#f59e0b',
    icon: '📞',
    highlights: [
      'Obsługa klientów w zakresie usług telekomunikacyjnych',
      'Rozwiązywanie problemów technicznych i sprzedaż produktów',
      'Praca w środowisku wymagającym precyzji i komunikatywności',
    ],
    tags: ['Obsługa klienta', 'Sprzedaż', 'Komunikacja'],
  },
  {
    title: 'Magazynier',
    company: 'TERG SA (Media Expert)',
    period: 'Czerwiec 2020 — Kwiecień 2021',
    location: 'Łódź, Polska',
    color: '#06b6d4',
    icon: '📦',
    highlights: [
      'Zarządzanie magazynem elektroniki użytkowej',
      'Przyjmowanie i wydawanie towarów, inwentaryzacja',
      'Praca w dynamicznym środowisku logistycznym',
    ],
    tags: ['Logistyka', 'Magazyn', 'Organizacja'],
  },
];

const education = [
  {
    title: 'Samokształcenie: AI/ML, Cloud Architecture',
    institution: 'Online (Udemy, YouTube, Dokumentacje)',
    period: '2024 — obecnie',
    color: '#7c3aed',
    icon: '🎓',
    desc: 'Python, FastAPI, LLM APIs, GCP, Docker, pgvector, MCP Protocol — praktyczna nauka przez budowanie projektów produkcyjnych.',
  },
  {
    title: 'Matura',
    institution: 'XXIV LO im. M. Curie-Skłodowskiej, Łódź',
    period: '2017 — 2018',
    color: '#10b981',
    icon: '🏫',
    desc: 'Profil matematyczno-fizyczny.',
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll('[data-exp-item]');
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: i * 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%' },
        }
      );
    });
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d1a 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="container max-w-4xl relative" style={{ zIndex: 1 }}>
        <div className="section-label">Doświadczenie</div>
        <h2 className="section-title">Historia zawodowa</h2>

        {/* Experience Timeline */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="timeline-line" />

          <div className="space-y-8 pl-14">
            {experiences.map((exp, i) => (
              <div key={i} data-exp-item className="relative">
                {/* Timeline dot */}
                <div
                  className="timeline-dot"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}80` }}
                />

                <div
                  className="glass-card p-6"
                  style={{ borderColor: `${exp.color}22` }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{exp.icon}</span>
                      <div>
                        <h3
                          style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 700,
                            fontSize: '17px',
                            color: '#f0f0ff',
                            marginBottom: '2px',
                          }}
                        >
                          {exp.title}
                        </h3>
                        <span
                          style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '13px',
                            fontWeight: 600,
                            color: exp.color,
                          }}
                        >
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '12px',
                          color: '#64748b',
                          marginBottom: '2px',
                        }}
                      >
                        {exp.period}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '11px',
                          color: '#475569',
                        }}
                      >
                        📍 {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        className="flex gap-2 items-start"
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '13px',
                          color: '#94a3b8',
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: exp.color, flexShrink: 0, marginTop: '2px' }}>→</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        style={{
                          padding: '3px 10px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: 600,
                          fontFamily: 'Poppins, sans-serif',
                          background: `${exp.color}15`,
                          color: exp.color,
                          border: `1px solid ${exp.color}25`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="section-label" style={{ marginBottom: '16px' }}>Edukacja</div>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div
                key={i}
                data-exp-item
                className="glass-card p-5 flex gap-4 items-start"
                style={{ borderColor: `${edu.color}22` }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${edu.color}18`, border: `1px solid ${edu.color}30` }}
                >
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between gap-2 mb-1">
                    <h3
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: '#e2e8f0',
                      }}
                    >
                      {edu.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '11px',
                        color: '#64748b',
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '12px',
                      color: edu.color,
                      fontWeight: 600,
                      marginBottom: '6px',
                    }}
                  >
                    {edu.institution}
                  </div>
                  <p
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '12px',
                      color: '#64748b',
                      lineHeight: 1.6,
                    }}
                  >
                    {edu.desc}
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
