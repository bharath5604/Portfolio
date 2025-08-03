import React, { useEffect, useRef, useState } from 'react';
import { Award, Calendar, ExternalLink, Download, Star, Trophy, Medal, AlignCenterVertical as Certificate, Briefcase } from 'lucide-react';

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('internships');
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

  const internships = [
    {
      id: 1,
      title: 'Full Stack Developer Intern',
      company: 'Tech Solutions Inc.',
      duration: '3 months',
      date: '2024',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Developed web applications using React and Node.js, collaborated with senior developers on client projects',
      responsibilities: ['Frontend Development', 'API Integration', 'Database Design', 'Code Review'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      certificateUrl: '#',
      companyUrl: '#'
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'Analytics Corp',
      duration: '2 months',
      date: '2023',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Worked on data analysis projects, created visualizations and reports using Python and Power BI',
      responsibilities: ['Data Analysis', 'Report Generation', 'Data Visualization', 'Statistical Modeling'],
      technologies: ['Python', 'Power BI', 'SQL', 'Pandas'],
      certificateUrl: '#',
      companyUrl: '#'
    },
    {
      id: 3,
      title: 'Web Development Intern',
      company: 'Digital Agency',
      duration: '2 months',
      date: '2023',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Built responsive websites for clients, learned modern web development practices and frameworks',
      responsibilities: ['Website Development', 'Client Communication', 'Testing & Debugging', 'Performance Optimization'],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      certificateUrl: '#',
      companyUrl: '#'
    }
  ];
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'FreeCodeCamp',
      date: '2024',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive certification covering HTML, CSS, JavaScript, React, Node.js, and MongoDB',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      credentialUrl: '#',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Python Programming',
      issuer: 'Coursera',
      date: '2023',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced Python programming including data structures, algorithms, and web frameworks',
      skills: ['Python', 'Django', 'Flask', 'Data Structures'],
      credentialUrl: '#',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Database Management Systems',
      issuer: 'Oracle',
      date: '2023',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Database design, SQL optimization, and database administration',
      skills: ['MySQL', 'SQL', 'Database Design', 'Performance Tuning'],
      credentialUrl: '#',
      downloadUrl: '#'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Dean\'s List',
      organization: 'University',
      date: '2023-2024',
      icon: Trophy,
      description: 'Achieved Dean\'s List recognition for academic excellence with GPA above 3.5',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 2,
      title: 'Best Project Award',
      organization: 'College Tech Fest',
      date: '2024',
      icon: Medal,
      description: 'Won first place for innovative web application in college technical festival',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Coding Competition Winner',
      organization: 'HackerRank',
      date: '2023',
      icon: Star,
      description: 'Secured top 10 position in national level coding competition',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Open Source Contributor',
      organization: 'GitHub',
      date: '2023-Present',
      icon: Award,
      description: 'Active contributor to open source projects with 50+ contributions',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Experience & <span className="text-cyan-400">Credentials</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              My internships, certifications, and achievements that showcase my professional growth and learning journey
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm p-2 rounded-xl border border-slate-700/50">
              <button
                onClick={() => setActiveTab('internships')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'internships'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Briefcase size={20} />
                <span>Internships</span>
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'certificates'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Certificate size={20} />
                <span>Certificates</span>
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'achievements'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Trophy size={20} />
                <span>Achievements</span>
              </button>
            </div>
          </div>

          {/* Internships Tab */}
          {activeTab === 'internships' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internships.map((internship, index) => (
                <div
                  key={internship.id}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Internship Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={internship.image}
                      alt={internship.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    
                    {/* Internship Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Briefcase size={20} className="text-white" />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={internship.companyUrl}
                        className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition-colors duration-300"
                        title="View Company"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={internship.certificateUrl}
                        className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-300"
                        title="View Certificate"
                      >
                        <Download size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Internship Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {internship.title}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-cyan-400 font-semibold">{internship.company}</span>
                      <span className="text-gray-500">•</span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {internship.date} ({internship.duration})
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {internship.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold text-sm mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {internship.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-center text-xs text-gray-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded-md hover:bg-slate-600/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Certificate Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    
                    {/* Certificate Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Award size={20} className="text-white" />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={cert.credentialUrl}
                        className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition-colors duration-300"
                        title="View Credential"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={cert.downloadUrl}
                        className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-300"
                        title="Download Certificate"
                      >
                        <Download size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {cert.title}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
                      <span className="text-gray-500">•</span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {cert.date}
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded-md hover:bg-slate-600/50 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    {/* Achievement Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <achievement.icon size={28} className="text-white" />
                    </div>

                    {/* Achievement Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-cyan-400 font-semibold">{achievement.organization}</span>
                        <span className="text-gray-500">•</span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {achievement.date}
                        </div>
                      </div>

                      <p className="text-gray-400 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-8 text-lg">
              Want to see more of my experience and credentials?
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;