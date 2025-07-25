import React from 'react';

import {  Linkedin, ArrowRight, Sparkles, Github } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bhavesh-perumalla-b856972a6/?trk=opento_sprofile_goalscard', color: 'hover:text-blue-600' },
    { icon: Github, href: 'https://github.com/bharath5604', color: 'hover:text-gray-800' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400 font-medium">
                <Sparkles size={20} className="animate-pulse" />
                <span>Hello, I'm</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Bhavesh Perumalla
              </h1>
              <div className="text-xl lg:text-2xl text-gray-300">
                And I'm a{' '}
                <span className="text-cyan-400 font-semibold relative">
                  Full Stack Developer
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></span>
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-slate-700 ${social.color} hover:shadow-lg`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 group">
                <span>Hire Me</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              </a>
              <a href="#contact">
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                Contact Me
              </button>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up delay-300">
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                <div className="w-full h-full bg-slate-900 rounded-full"></div>
              </div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                  <img
                   src="assets/profile.jpg" alt="Bhavesh Perumalla"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;