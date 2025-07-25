import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-white">Port</span>
              <span className="text-cyan-400">folio</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about data-driven solutions and scalable applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-400 flex items-center">
                <Mail size={16} className="mr-2 text-cyan-400" />
                bhaveshperumalla@gmail.com
              </p>
              <p className="text-gray-400">
                Available for freelance work and collaborations
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Currently available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
            Made with <Heart size={16} className="mx-2 text-red-500 animate-pulse" /> by Bhavesh Perumalla
          </p>
          <p className="text-gray-400 text-sm">
            © 2024 Portfolio. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;