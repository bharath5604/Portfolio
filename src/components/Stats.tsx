import React, { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  number: string;
  label: string;
  sublabel: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, sublabel }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const target = parseInt(number.replace('+', ''));
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <div ref={ref} className="text-center group">
      <div className="relative">
        <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
          {count}
          {number.includes('+') && '+'}
        </div>
        <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
          {label}
        </div>
        <div className="text-gray-400 text-xs mt-1">
          {sublabel}
        </div>
        
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-110"></div>
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { number: 'Fresher', label: 'Experience', sublabel: 'Level' },
    { number: '8+', label: 'Projects', sublabel: 'completed' },
    { number: '8+', label: 'Technologies', sublabel: 'mastered' },
    { number: '100%', label: 'Dedication', sublabel: 'to learning' },
  ];

  return (
    <section className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, cyan 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <StatItem {...stat} />
              
              {/* Separator Line */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-cyan-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Stats;