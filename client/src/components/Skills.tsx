import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion
 * - Animated skill bars that fill on scroll
 * - Minimal visual design with teal accent bars
 * - Staggered animations for visual interest
 */

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const skillBars = sectionRef.current.querySelectorAll('[data-skill-bar]');
    skillBars.forEach((bar) => {
      gsap.fromTo(
        bar.querySelector('.skill-bar-fill'),
        { width: '0%' },
        {
          width: bar.getAttribute('data-skill-level') || '0%',
          duration: 1.2,
          ease: 'cubic.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  const skills = [
    { name: 'React & TypeScript', level: '95%' },
    { name: 'Node.js & Backend', level: '90%' },
    { name: 'UI/UX Design', level: '85%' },
    { name: 'Database Design', level: '88%' },
    { name: 'DevOps & Deployment', level: '80%' },
    { name: 'Problem Solving', level: '92%' },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
      data-animate
    >
      <div className="container max-w-4xl">
        <h2 className="section-title mb-12">
          <span className="animated-underline">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-skill-bar
              data-skill-level={skill.level}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-foreground">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-fill"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills section */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6">Other Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {['JavaScript', 'Python', 'SQL', 'GraphQL', 'Docker', 'AWS', 'Git', 'Figma', 'Tailwind CSS', 'REST APIs'].map(
              (tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground font-medium hover:bg-accent hover:text-white transition-all duration-300"
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
