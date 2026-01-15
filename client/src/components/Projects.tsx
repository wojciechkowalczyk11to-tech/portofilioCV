import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion
 * - Project cards with hover animations
 * - Staggered reveals on scroll
 * - Minimal visual design with teal accents
 */

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('[data-project-card]');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          ease: 'cubic.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );

      // Hover animation
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          boxShadow: '0 20px 40px rgba(20, 184, 166, 0.1)',
          duration: 0.3,
          ease: 'cubic.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          duration: 0.3,
          ease: 'cubic.out',
        });
      });
    });
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive data visualization dashboard for tracking business metrics and KPIs in real-time.',
      tags: ['React', 'D3.js', 'PostgreSQL', 'Express'],
      link: '#',
    },
    {
      title: 'Social Media App',
      description: 'A modern social platform with real-time messaging, notifications, and user engagement features.',
      tags: ['React', 'Firebase', 'WebSockets', 'Tailwind'],
      link: '#',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/30"
      data-animate
    >
      <div className="container max-w-5xl">
        <h2 className="section-title mb-12">
          <span className="animated-underline">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              data-project-card
              className="group p-6 bg-background rounded-lg border border-border hover:border-accent transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center text-accent font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                View Project
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
