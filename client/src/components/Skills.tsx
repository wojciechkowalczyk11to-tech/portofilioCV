import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Dark Glassmorphism Skills Section
 * - Animated skill bars (fill on scroll)
 * - Tech pill badges with hover glow
 * - Categorized skill groups
 */

const skillBars = [
  { name: 'Python / FastAPI / asyncio', level: 92 },
  { name: 'LLM Integration (8 providers)', level: 95 },
  { name: 'RAG / pgvector / Embeddings', level: 88 },
  { name: 'GCP (Cloud Run, Compute, SQL)', level: 85 },
  { name: 'Docker / CI/CD / GitHub Actions', level: 87 },
  { name: 'Cloudflare (Tunnel, Workers, Zero Trust)', level: 90 },
];

const skillGroups = [
  {
    label: 'Backend & AI',
    color: 'pill-purple',
    pills: ['Python 3.12', 'FastAPI', 'asyncio', 'Pydantic', 'SQLAlchemy', 'PostgreSQL', 'pgvector', 'Redis', 'Celery'],
  },
  {
    label: 'Multi-LLM Orchestration',
    color: 'pill-cyan',
    pills: ['OpenAI / GPT-4', 'Anthropic / Claude', 'xAI / Grok', 'Gemini / Vertex AI', 'DeepSeek', 'Groq', 'Mistral', 'OpenRouter'],
  },
  {
    label: 'Cloud & Infrastruktura',
    color: 'pill-green',
    pills: ['GCP Cloud Run', 'GCP Compute Engine', 'Cloud SQL', 'Cloudflare Workers', 'Cloudflare Tunnel', 'Cloudflare KV', 'R2', 'Zero Trust', 'Docker'],
  },
  {
    label: 'DevOps & Tooling',
    color: 'pill-gold',
    pills: ['Git / GitHub', 'GitHub Actions', 'CI/CD', 'Bash / Linux', 'systemd', 'nginx', 'Termux / Android'],
  },
  {
    label: 'Protokoły & Integracje',
    color: 'pill-red',
    pills: ['MCP Protocol', 'LangChain', 'LangGraph', 'aiogram', 'Telegram API', 'REST API', 'WebSockets'],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate skill bars
    const bars = sectionRef.current.querySelectorAll('[data-skill-bar]');
    bars.forEach((bar, i) => {
      const fill = bar.querySelector('.skill-bar-fill') as HTMLElement;
      const level = bar.getAttribute('data-level') || '0';

      gsap.fromTo(
        fill,
        { width: '0%' },
        {
          width: `${level}%`,
          duration: 1.4,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: bar, start: 'top 85%' },
        }
      );
    });

    // Animate section items
    const items = sectionRef.current.querySelectorAll('[data-animate-item]');
    items.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        }
      );
    });
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0d1a 0%, #0a0a0f 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.07) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="container max-w-5xl relative" style={{ zIndex: 1 }}>
        <div data-animate-item className="section-label">Umiejętności</div>
        <h2 data-animate-item className="section-title">Stack technologiczny</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Skill bars */}
          <div data-animate-item>
            <h3
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: '#e2e8f0',
                marginBottom: '24px',
              }}
            >
              Poziom biegłości
            </h3>
            <div className="space-y-5">
              {skillBars.map((skill, i) => (
                <div key={i} data-skill-bar data-level={skill.level}>
                  <div className="flex justify-between items-center mb-2">
                    <span
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '13px',
                        color: '#94a3b8',
                        fontWeight: 500,
                      }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#7c3aed',
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy / Highlights */}
          <div data-animate-item className="space-y-4">
            <h3
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: '#e2e8f0',
                marginBottom: '24px',
              }}
            >
              Wyróżniki
            </h3>
            {[
              {
                icon: '🎯',
                title: 'MCP Protocol Author',
                desc: '44 narzędzia własnego serwera MCP — jedyny taki projekt w Polsce.',
                color: '#7c3aed',
              },
              {
                icon: '⚡',
                title: 'Multi-LLM Routing',
                desc: 'Inteligentny routing ECO/SMART/DEEP przez 8 dostawców AI.',
                color: '#06b6d4',
              },
              {
                icon: '🔍',
                title: 'RAG & Semantic Search',
                desc: 'pgvector + embeddings + quality monitoring w produkcji.',
                color: '#f59e0b',
              },
              {
                icon: '🏗️',
                title: 'Production GCP',
                desc: 'Cloud Run, Compute Engine, Cloud SQL — live 24/7.',
                color: '#10b981',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card p-4 flex gap-3 items-start"
                style={{ borderColor: `${item.color}22` }}
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: '13px',
                      color: item.color,
                      marginBottom: '3px',
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '12px',
                      color: '#64748b',
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech pill groups */}
        <div className="space-y-8">
          {skillGroups.map((group, gi) => (
            <div key={gi} data-animate-item>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#64748b',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '10px',
                }}
              >
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.pills.map((pill, pi) => (
                  <span key={pi} className={`tech-pill ${group.color}`}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
