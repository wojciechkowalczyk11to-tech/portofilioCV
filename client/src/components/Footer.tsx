/**
 * Dark Glassmorphism Footer
 */

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#080810',
        borderTop: '1px solid rgba(30, 30, 46, 0.8)',
        padding: '40px 0 24px',
      }}
    >
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800,
                fontSize: '18px',
                color: '#e2e8f0',
                marginBottom: '8px',
              }}
            >
              Wojciech Kowalczyk
            </div>
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                color: '#f59e0b',
                marginBottom: '12px',
                fontWeight: 600,
              }}
            >
              AI Software Engineer
            </div>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                color: '#475569',
                lineHeight: 1.7,
                maxWidth: '280px',
              }}
            >
              Twórca NEXUS — ekosystemu AI z 8 LLM, RAG, 44 narzędziami MCP i
              infrastrukturą produkcyjną GCP + Cloudflare.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '13px',
                color: '#94a3b8',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Nawigacja
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'O mnie', id: 'about' },
                { label: 'Projekty', id: 'projects' },
                { label: 'Umiejętności', id: 'skills' },
                { label: 'Doświadczenie', id: 'experience' },
                { label: 'Kontakt', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '13px',
                      color: '#475569',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#a78bfa')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#475569')}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '13px',
                color: '#94a3b8',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Linki
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'GitHub', href: 'https://github.com/wojciechkowalczyk11to-tech' },
                { label: 'N.O.C Live', href: 'https://nexus-backend-r56g4gr2da-uc.a.run.app' },
                { label: 'MCP Server', href: 'https://mcp.nexus-oc.pl' },
                { label: 'Gangus AI', href: 'https://wojciechkowalczyk11to-tech.github.io/gangus-ai-landing/' },
                { label: 'Portfolio', href: 'https://portfolio.nexus-oc.pl' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '13px',
                      color: '#475569',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#67e8f9')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#475569')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(30, 30, 46, 0.6)',
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '12px',
              color: '#334155',
            }}
          >
            © {year} Wojciech Kowalczyk. Wszelkie prawa zastrzeżone.
          </p>
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '12px',
              color: '#334155',
            }}
          >
            Zbudowane z{' '}
            <span style={{ color: '#7c3aed' }}>♥</span>
            {' '}React · TypeScript · GSAP · Dark Glassmorphism
          </p>
        </div>
      </div>
    </footer>
  );
}
