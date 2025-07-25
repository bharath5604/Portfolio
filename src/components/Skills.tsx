import React, { useEffect, useRef, useState } from 'react';

interface SkillProps {
  name: string;
  percentage: number;
  color: string;
}

const SkillBar: React.FC<SkillProps> = ({ name, percentage, color }) => {
  const [width, setWidth] = useState(0);
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
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-cyan-400 font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${width}%` }}
        >
          <div className="h-full bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
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

  const frontendSkills = [
    { name: 'Python', percentage: 75, color: 'bg-gradient-to-r from-blue-500 to-yellow-500' },
    { name: 'JavaScript', percentage: 60, color: 'bg-gradient-to-r from-yellow-500 to-orange-500' },
    { name: 'SQL', percentage: 85, color: 'bg-gradient-to-r from-blue-600 to-cyan-500' },
    { name: 'C', percentage: 65, color: 'bg-gradient-to-r from-gray-600 to-blue-600' },
  ];

  const frontendTech = [
    { name: 'HTML', percentage: 90, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { name: 'CSS', percentage: 85, color: 'bg-gradient-to-r from-blue-500 to-purple-500' },
    { name: 'JavaScript', percentage: 60, color: 'bg-gradient-to-r from-yellow-500 to-orange-500' },
    { name: 'Node.js', percentage: 65, color: 'bg-gradient-to-r from-green-500 to-green-600' },
  ];

  const backendSkills = [
    { name: 'MySQL', percentage: 85, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { name: 'MongoDB', percentage: 80, color: 'bg-gradient-to-r from-green-600 to-green-800' },
  ];

  const tools = [
    { name: 'Power BI', percentage: 85, color: 'bg-gradient-to-r from-yellow-500 to-orange-500' },
    { name: 'VS Code', percentage: 90, color: 'bg-gradient-to-r from-blue-500 to-purple-500' },
    { name: 'MySQL Workbench', percentage: 80, color: 'bg-gradient-to-r from-orange-600 to-red-600' },
  ];

  const technologies = [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'SQL', icon: '🗃️' },
    { name: 'C', icon: '⚙️' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Power BI', icon: '📊' },
    { name: 'VS Code', icon: '💻' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MySQL Workbench', icon: '🔧' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              My <span className="text-cyan-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Technology Icons */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-16">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-110 text-center"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Frontend Skills */}
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                <span className="text-cyan-400">Programming</span> Languages
              </h3>
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>

            {/* Frontend Technologies */}
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                <span className="text-purple-400">Frontend</span> Technologies
              </h3>
              {frontendTech.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>

            {/* Backend Skills */}
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                <span className="text-green-400">Backend</span> Technologies
              </h3>
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>

            {/* Tools & Others */}
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                <span className="text-pink-400">Tools</span> & Technologies
              </h3>
              {tools.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;