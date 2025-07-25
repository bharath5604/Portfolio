import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Smartphone, Globe, Zap, Shield } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Node.js, and more.',
      features: ['Responsive Design', 'Modern Frameworks', 'Clean Code', 'SEO Optimized'],
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'group-hover:border-cyan-400/50'
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: ['Payment Gateway', 'Inventory System', 'Admin Dashboard', 'Analytics'],
      color: 'from-orange-500 to-red-500',
      hoverColor: 'group-hover:border-orange-400/50'
    },
    {
      icon: Palette,
      title: 'Machine Learning Insights',
      description: 'Data analysis and machine learning solutions to extract meaningful insights from your data.',
      features: ['Data Analysis', 'Predictive Models', 'Data Visualization', 'Business Intelligence'],
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'group-hover:border-purple-400/50'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your website and improve user experience with advanced optimization techniques.',
      features: ['Speed Optimization', 'SEO Enhancement', 'Core Web Vitals', 'Caching Strategy'],
      color: 'from-yellow-500 to-orange-500',
      hoverColor: 'group-hover:border-yellow-400/50'
    },
    {
      icon: Shield,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your website running smoothly.',
      features: ['24/7 Support', 'Regular Updates', 'Security Monitoring', 'Backup Solutions'],
      color: 'from-indigo-500 to-purple-500',
      hoverColor: 'group-hover:border-indigo-400/50'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 relative overflow-hidden">
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
              My <span className="text-cyan-400">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              I provide a wide range of services to help bring your digital vision to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 ${service.hoverColor} transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl`}
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} className="text-white" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-8 text-lg">
              Ready to start your project? Let's work together!
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;