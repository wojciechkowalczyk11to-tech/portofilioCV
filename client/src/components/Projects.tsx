import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion + Enhanced Interactivity
 * - Project cards with hover animations
 * - Staggered reveals on scroll
 * - Tag animations with rotation
 * - Rich interactive effects
 */

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('[data-project-card]');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: index * 0.15,
          ease: 'back.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );

      // Hover animation
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -12,
          boxShadow: '0 25px 50px rgba(20, 184, 166, 0.2)',
          duration: 0.3,
          ease: 'cubic.out',
        });

        // Animate tags
        const tags = card.querySelectorAll('[data-project-tag]');
        tags.forEach((tag, tagIndex) => {
          gsap.to(tag, {
            scale: 1.1,
            delay: tagIndex * 0.05,
            duration: 0.3,
            ease: 'cubic.out',
          });
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          duration: 0.3,
          ease: 'cubic.out',
        });

        const tags = card.querySelectorAll('[data-project-tag]');
        tags.forEach((tag) => {
          gsap.to(tag, {
            scale: 1,
            duration: 0.3,
            ease: 'cubic.out',
          });
        });
      });
    });
  }, []);

  const projects = [
    {
      title: 'Business Pitch Competition Winner',
      description: 'Led a team to victory in the BMPC Business Pitch Competition, developing innovative business strategies and compelling presentations.',
      tags: ['Leadership', 'Strategy', 'Innovation'],
      year: '2024',
    },
    {
      title: 'International Business Plan Development',
      description: 'Created comprehensive business plan that won 1st place in SCUBA International Business Plan Competition at Brawijaya University.',
      tags: ['Planning', 'Analysis', 'Execution'],
      year: '2024',
    },
    {
      title: 'Community Service Initiatives',
      description: 'Executed multiple impactful community service projects as Freshmen Partner, creating meaningful contributions to local communities.',
      tags: ['Community', 'Leadership', 'Impact'],
      year: '2024-2025',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
      data-animate
    >
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-5xl relative z-10">
        <h2 className="section-title mb-12">
          <span className="animated-underline">Notable Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-project-card
              className="group p-6 bg-secondary/30 rounded-lg border border-border hover:border-accent transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300 flex-1">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground font-medium ml-2 flex-shrink-0">
                    {project.year}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      data-project-tag
                      className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center text-accent font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                Learn More
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
