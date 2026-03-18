import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  { icon: '🏆', title: '8 Dostawców LLM', desc: 'N.O.C obsługuje OpenAI, Anthropic, xAI/Grok, Gemini, DeepSeek, Groq, Mistral, OpenRouter z inteligentnym routingiem ECO/SMART/DEEP.', color: '#7c3aed' },
  { icon: '🔧', title: '44 Narzędzia MCP', desc: 'Własny serwer MCP Protocol z 44 narzędziami — jedyny taki projekt open-source w Polsce. Live 24/7 via Cloudflare Tunnel.', color: '#06b6d4' },
  { icon: '📚', title: '776 Dokumentów Vector KB', desc: 'GigaGrok Bot z xAI Collections — 776-dokumentowa baza wiedzy w formacie wektorowym dla semantic search.', color: '#f59e0b' },
  { icon: '💰', title: '90% Redukcja Kosztów LLM', desc: 'Gangus AI — komercyjny orkiestrator ($49) z cost optimizer i evaluator layer. Realna redukcja kosztów o 90%.', color: '#10b981' },
  { icon: '☁️', title: 'GCP Cloud Run Production', desc: 'Wszystkie projekty wdrożone na GCP Cloud Run z Cloudflare Tunnel — zero downtime, auto-scaling.', color: '#ef4444' },
  { icon: '🛡️', title: 'Zero Trust Security', desc: 'Cloudflare Zero Trust, RBAC, invite system, 2FA, Port Knocking — enterprise-grade security w projektach indie.', color: '#a78bfa' },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll('[data-achievement-card]');
    cards.forEach((card, i) => {
      gsap.fromTo(card, { opacity: 0, y: 40, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.6, delay: i * 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 88%' },
      });
    });
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d1a 100%)' }}>
      <div className="absolute pointer-events-none" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)', borderRadius: '50%' }} />
      <div className="container max-w-5xl relative" style={{ zIndex: 1 }}>
        <div className="section-label">Osiągnięcia</div>
        <h2 className="section-title">Kluczowe metryki</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <div key={i} data-achievement-card className="glass-card p-6" style={{ borderColor: `${item.color}22` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '15px', color: item.color, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12.5px', color: '#64748b', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
