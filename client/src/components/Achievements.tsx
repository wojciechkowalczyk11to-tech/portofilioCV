import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Design Philosophy: Modern Minimalist with Fluid Motion + Enhanced Interactivity
 * - Animated achievement cards with staggered reveals
 * - Rotating medal icons
 * - Hover effects with scale and shadow
 * - Scroll-triggered animations
 */

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('[data-achievement-card]');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40, rotateY: -90 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          delay: index * 0.1,
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

        // Rotate icon
        const icon = card.querySelector('[data-achievement-icon]');
        if (icon) {
          gsap.to(icon, {
            rotateZ: 360,
            duration: 0.6,
            ease: 'back.out',
          });
        }
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

  const achievements = [
    {
      title: '1st Place BMPC: Business Pitch Competition',
      organization: 'Bina Nusantara University',
      date: 'May 2024',
      icon: '🏆',
    },
    {
      title: '1st Place SCUBA International Business Plan Competition',
      organization: 'Faculty of Economics and Business Brawijaya University',
      date: 'Nov 2024',
      icon: '🥇',
    },
    {
      title: 'The Winner of Innovation Business Award',
      organization: 'Inventify Center',
      date: 'May 2025',
      icon: '💡',
    },
    {
      title: 'GOLD MEDAL International Youthpreneur Competition',
      organization: 'Inventify Center',
      date: 'May 2025',
      icon: '🎖️',
    },
    {
      title: 'Top 3 Best Social Ideation',
      organization: 'Pikiran Terbaik Negeri (BUMN)',
      date: 'Aug 2025',
      icon: '⭐',
    },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden"
      data-animate
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-5xl relative z-10">
        <h2 className="section-title mb-12">
          <span className="animated-underline">Achievements & Awards</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              data-achievement-card
              className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-all duration-300 cursor-pointer group"
              style={{ perspective: '1000px' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  data-achievement-icon
                  className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform"
                >
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-sm leading-tight mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-accent text-xs font-medium">{achievement.organization}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-xs">{achievement.date}</p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 pt-12 border-t border-border grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">5+</div>
            <p className="text-foreground font-medium">Major Awards</p>
            <p className="text-muted-foreground text-sm">Recognized for excellence</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">4+</div>
            <p className="text-foreground font-medium">Leadership Roles</p>
            <p className="text-muted-foreground text-sm">Proven track record</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">100%</div>
            <p className="text-foreground font-medium">Commitment</p>
            <p className="text-muted-foreground text-sm">To excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
