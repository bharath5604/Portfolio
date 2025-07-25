import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Smartphone, Globe, Award, Coffee, Download} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user interfaces'
    },
    {
      icon: Smartphone,
      title: 'Responsive',
      description: 'Ensuring perfect experience across all devices'
    },
    {
      icon: Globe,
      title: 'Web Standards',
      description: 'Following modern web standards and accessibility guidelines'
    }
  ];

  const achievements = [
    { icon: Award, text: 'Fresh Graduate Ready to Excel' },
    { icon: Coffee, text: 'Passionate About Learning' },
    { icon: Code, text: '8+ Projects Completed' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  I'm Bhavesh Perumalla, a passionate{' '}
                  <span className="text-cyan-400">Full Stack Developer</span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  As a fresher with strong expertise in both frontend and backend technologies, I specialize in creating 
                  robust web applications and data-driven solutions. I'm passionate about 
                  turning complex data into meaningful insights using machine learning and building scalable applications.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I believe in continuous learning and staying updated with the latest 
                  technologies in web development, data science, and machine learning to deliver innovative solutions.
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon size={20} className="text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {achievement.text}
                    </span>
                  </div>
                ))}
              </div>
                <br></br>
              {/* CTA Button */}
               <a href="/Bhavesh-Perumalla-Resume.pdf" download>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Download size={20} /> {/* Optional: Add an icon */}
                  <span>Download Resume</span>
                </button>
              </a>
            </div>

            {/* Right Content - Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;