import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Dark Glassmorphism Projects Section
 * - Glassmorphic project cards with glow hover
 * - Live Demo + GitHub buttons
 * - Tech stack pills
 * - Scroll-triggered stagger animations
 */

const projects = [
  {
    icon: '🧠',
    title: 'N.O.C — Nexus Omega Core',
    subtitle: 'Flagship Multi-LLM Backend',
    description:
      'Centralny backend ekosystemu NEXUS. FastAPI + PostgreSQL + pgvector + Redis + Celery. Obsługuje 8 dostawców LLM (Claude, GPT-4, Grok, Gemini, DeepSeek, Groq, Mistral, OpenRouter) z inteligentnym routingiem ECO/SMART/DEEP. RAG z semantic search, RBAC + invite system, monetyzacja Telegram Stars, multi-agent runtime. Deployed na GCP Cloud Run.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'Celery', 'Docker', 'GCP Cloud Run'],
    tagColor: 'pill-purple',
    accentColor: '#7c3aed',
    live: 'https://nexus-backend-r56g4gr2da-uc.a.run.app',
    github: 'https://github.com/wojciechkowalczyk11to-tech/N.O.C',
    metrics: ['8 LLM providers', 'RAG pgvector', 'GCP Cloud Run', 'RBAC + invite'],
  },
  {
    icon: '🔧',
    title: 'NEXUS MCP Server',
    subtitle: 'Unified AI Control Plane — 44 Tools',
    description:
      'Własny serwer MCP (Model Context Protocol) z 44 narzędziami. Moduły: AI Proxy, GCP, Cloudflare, GitHub, Vercel, Google Drive (Vertex AI), Shell. Architektura: HTTPS Streamable HTTP, Cloudflare Tunnel, integracja z LangChain/LangGraph. Live 24/7.',
    tags: ['Python', 'FastMCP', 'Cloudflare Tunnel', 'LangChain', 'LangGraph', 'MCP Protocol'],
    tagColor: 'pill-cyan',
    accentColor: '#06b6d4',
    live: 'https://mcp.nexus-oc.pl',
    github: 'https://github.com/wojciechkowalczyk11to-tech/nexus-mcp-server',
    metrics: ['44 narzędzia', 'HTTPS Streamable', 'Live 24/7', 'LangChain/LangGraph'],
  },
  {
    icon: '💰',
    title: 'Gangus AI',
    subtitle: 'Komercyjny LLM Orchestrator ($49)',
    description:
      'Komercyjny produkt — orkiestrator LLM z multi-model routing, cost optimizer i evaluator layer. Redukcja kosztów o 90%. Monetyzacja przez LemonSqueezy ($49). Mobile-first na Termux/Android. Własny landing page.',
    tags: ['Python', 'LemonSqueezy', 'Termux', 'Multi-model routing', 'Cost optimizer'],
    tagColor: 'pill-gold',
    accentColor: '#f59e0b',
    live: 'https://wojciechkowalczyk11to-tech.github.io/gangus-ai-landing/',
    github: 'https://github.com/wojciechkowalczyk11to-tech/gangus-ai-landing',
    metrics: ['90% cost savings', '$49 pricing', 'Mobile-first', 'Evaluator layer'],
  },
  {
    icon: '🤖',
    title: 'GigaGrok Telegram Bot',
    subtitle: 'Advanced Multimodal AI Bot',
    description:
      'Zaawansowany bot Telegram z multimodal (voice + images), xAI Collections (776-doc vector KB), streaming responses, workspace management. Deployed na GCP z Cloudflare Tunnel. Integracja z Grok 4.20 API.',
    tags: ['Python', 'aiogram', 'Grok API', 'GCP', 'Cloudflare Tunnel', 'pgvector'],
    tagColor: 'pill-green',
    accentColor: '#10b981',
    live: null,
    github: 'https://github.com/wojciechkowalczyk11to-tech/gigagrok-bot',
    metrics: ['776 vector docs', 'Voice + images', 'Streaming', 'GCP deployed'],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('[data-project-card]');
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: i * 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        }
      );
    });
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d1a 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.07) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="container max-w-6xl relative" style={{ zIndex: 1 }}>
        <div className="section-label">Projekty</div>
        <h2 className="section-title">Ekosystem NEXUS</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              data-project-card
              className="glass-card p-6 flex flex-col"
              style={{ borderColor: `${project.accentColor}22` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    background: `${project.accentColor}18`,
                    border: `1px solid ${project.accentColor}30`,
                  }}
                >
                  {project.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: '17px',
                      color: '#f0f0ff',
                      marginBottom: '3px',
                    }}
                  >
                    {project.title}
                  </h3>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: project.accentColor,
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {project.subtitle}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '13px',
                  color: '#64748b',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                  flexGrow: 1,
                }}
              >
                {project.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.map((m, mi) => (
                  <span
                    key={mi}
                    style={{
                      padding: '3px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 600,
                      fontFamily: 'Poppins, sans-serif',
                      background: `${project.accentColor}15`,
                      color: project.accentColor,
                      border: `1px solid ${project.accentColor}25`,
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag, ti) => (
                  <span key={ti} className={`tech-pill ${project.tagColor}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}cc)`,
                      color: 'white',
                      fontFamily: 'Poppins, sans-serif',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${project.accentColor}50`;
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      (e.currentTarget as HTMLElement).style.transform = 'none';
                    }}
                  >
                    🌐 Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${project.accentColor}30`,
                    color: '#94a3b8',
                    fontFamily: 'Poppins, sans-serif',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = project.accentColor;
                    (e.currentTarget as HTMLElement).style.color = '#e2e8f0';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${project.accentColor}30`;
                    (e.currentTarget as HTMLElement).style.color = '#94a3b8';
                    (e.currentTarget as HTMLElement).style.transform = 'none';
                  }}
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
