import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion
 * - Timeline layout with animated reveals
 * - Minimal visual indicators with teal accents
 * - Staggered animations for each experience item
 */

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll('[data-experience-item]');
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'cubic.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Led development of scalable web applications, mentored junior developers, and improved system performance by 40%.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Built responsive web applications for diverse clients, implemented modern design patterns, and optimized user experiences.',
    },
    {
      title: 'Junior Developer',
      company: 'Startup Studio',
      period: '2019 - 2020',
      description: 'Developed front-end features, collaborated with designers, and contributed to product development initiatives.',
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/30"
      data-animate
    >
      <div className="container max-w-4xl">
        <h2 className="section-title mb-12">
          <span className="animated-underline">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-experience-item
              className="relative pl-8 pb-8 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300"
            >
              <div className="absolute -left-4 top-0 w-6 h-6 rounded-full bg-accent border-4 border-background"></div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                <p className="text-accent font-medium text-sm">{exp.company}</p>
                <p className="text-muted-foreground text-sm">{exp.period}</p>
                <p className="text-foreground text-base leading-relaxed mt-3 font-light">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
