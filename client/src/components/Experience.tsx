import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion + Enhanced Interactivity
 * - Animated timeline with staggered reveals
 * - Interactive experience cards with hover effects
 * - Animated connecting line
 * - Rich scroll interactions
 */

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate timeline line
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'cubic.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
          },
        }
      );
    }

    const items = sectionRef.current.querySelectorAll('[data-experience-item]');
    items.forEach((item, index) => {
      // Stagger the items
      gsap.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.7,
          delay: index * 0.15,
          ease: 'cubic.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        }
      );

      // Hover animation
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          y: -8,
          boxShadow: '0 20px 40px rgba(20, 184, 166, 0.15)',
          duration: 0.3,
          ease: 'cubic.out',
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          y: 0,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          duration: 0.3,
          ease: 'cubic.out',
        });
      });
    });
  }, []);

  const experiences = [
    {
      title: 'Human Resource Development Head',
      company: 'HIMPRENEUR',
      period: 'Nov 2024 - Nov 2025',
      description: 'Led and mentored the HR team in resolving complex interpersonal conflicts and mediating disputes. Implemented a structured recruitment method that achieved a 60% improvement in candidate quality.',
      highlights: ['Team Leadership', 'Conflict Resolution', 'Recruitment Strategy'],
    },
    {
      title: 'Human Resource Development Deputy Manager',
      company: 'Bina Nusantara Computer Club (BNCC)',
      period: 'Oct 2024 - Oct 2025',
      description: 'Developed training programs that enhanced members\' technical and soft skills, resulting in a 40% improvement in performance evaluations. Led strategic HR initiatives supporting organizational growth.',
      highlights: ['Training Development', 'Strategic Planning', 'Performance Management'],
    },
    {
      title: 'Freshmen Partner (FP)',
      company: 'Bina Nusantara University First Year Program',
      period: 'Sep 2024 - Sep 2025',
      description: 'Led a group of freshmen in executing impactful community service projects. Mentored 7+ freshmen throughout the academic year, supporting their academic, personal, and leadership growth.',
      highlights: ['Mentorship', 'Community Service', 'Leadership Development'],
    },
    {
      title: 'Student Council President',
      company: 'SMAK St Bonaventura Senior Highschool',
      period: 'Nov 2021 - Oct 2022',
      description: 'Created 15+ events that became valued parts of school culture. Organized successful campaigns to raise money for charitable causes and maintained strong school presence.',
      highlights: ['Event Management', 'Fundraising', 'Leadership'],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden"
      data-animate
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-4xl relative z-10">
        <h2 className="section-title mb-16">
          <span className="animated-underline">Experience</span>
        </h2>

        <div className="relative">
          {/* Animated timeline line */}
          <div
            ref={timelineRef}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-accent/30 md:transform md:-translate-x-1/2"
          ></div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-experience-item
                className={`md:flex md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex md:w-1/2 md:justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-accent border-4 border-background shadow-lg"></div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-all duration-300 cursor-pointer">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                    <p className="text-accent font-medium text-sm mb-1">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                    <p className="text-foreground text-base leading-relaxed font-light mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
