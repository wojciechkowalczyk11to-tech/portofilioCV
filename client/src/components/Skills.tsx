import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion + Enhanced Interactivity
 * - Animated skill bars that fill on scroll
 * - Interactive skill cards with hover effects
 * - Staggered animations for visual interest
 * - Rotating skill badges
 */

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate skill bars
    const skillBars = sectionRef.current.querySelectorAll('[data-skill-bar]');
    skillBars.forEach((bar, index) => {
      gsap.fromTo(
        bar.querySelector('.skill-bar-fill'),
        { width: '0%' },
        {
          width: bar.getAttribute('data-skill-level') || '0%',
          duration: 1.5,
          delay: index * 0.1,
          ease: 'cubic.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
          },
        }
      );
    });

    // Animate tech badges with rotation
    const badges = sectionRef.current.querySelectorAll('[data-tech-badge]');
    badges.forEach((badge, index) => {
      gsap.fromTo(
        badge,
        { opacity: 0, scale: 0.8, rotateZ: -180 },
        {
          opacity: 1,
          scale: 1,
          rotateZ: 0,
          duration: 0.7,
          delay: index * 0.05,
          ease: 'back.out',
          scrollTrigger: {
            trigger: badge,
            start: 'top 85%',
          },
        }
      );

      // Hover animation
      badge.addEventListener('mouseenter', () => {
        gsap.to(badge, {
          scale: 1.1,
          y: -5,
          boxShadow: '0 10px 25px rgba(20, 184, 166, 0.2)',
          duration: 0.3,
          ease: 'cubic.out',
        });
      });

      badge.addEventListener('mouseleave', () => {
        gsap.to(badge, {
          scale: 1,
          y: 0,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          duration: 0.3,
          ease: 'cubic.out',
        });
      });
    });
  }, []);

  const technicalSkills = [
    { name: 'Leadership', level: '95%' },
    { name: 'Problem Solving', level: '92%' },
    { name: 'Time Management', level: '90%' },
    { name: 'Delegation', level: '88%' },
    { name: 'Team Work', level: '95%' },
    { name: 'Adaptability', level: '92%' },
  ];

  const technologies = [
    'Microsoft Office',
    'Google Workspace',
    'Figma',
    'n8n',
    'SQL',
    'Python',
    'Java',
    'English (IELTS 8.0)',
    'Bahasa Indonesia (Native)',
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
      data-animate
    >
      {/* Animated background elements */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-4xl relative z-10">
        <h2 className="section-title mb-12">
          <span className="animated-underline">Skills & Competencies</span>
        </h2>

        {/* Technical Skills with Progress Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                data-skill-bar
                data-skill-level={skill.level}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-foreground">{skill.name}</h4>
                  <span className="text-sm text-accent font-semibold">{skill.level}</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar-fill"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies and Tools */}
        <div className="pt-12 border-t border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                data-tech-badge
                className="px-4 py-3 bg-secondary rounded-full text-sm text-foreground font-medium hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer border border-border hover:border-accent shadow-sm hover:shadow-md"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Non-Technical Skills */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Additional Strengths</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {['Creativity', 'Precision and Accuracy', 'Adaptive Resilience'].map((strength, index) => (
              <div
                key={index}
                data-tech-badge
                className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-accent transition-all duration-300 cursor-pointer text-foreground font-medium"
              >
                ✨ {strength}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
