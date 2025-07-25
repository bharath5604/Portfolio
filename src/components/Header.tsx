import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-white">Port</span>
            <span className="text-cyan-400">folio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 relative group ${
                  index === 0 ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Download CV Button */}
         {/* ====== MODIFICATION START: Desktop Download CV Button ====== */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            {/* Wrap the button in an anchor tag */}
            <a href="/Bhavesh-Perumalla-Resume.pdf" download>
              <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105">
                <Download size={16} />
                <span>Download CV</span>
              </button>
            </a>
          </div>
          {/* ====== MODIFICATION END ====== */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              {/* ====== MODIFICATION START: Mobile Download CV Button ====== */}
              {/* Wrap the button in an anchor tag */}
              <a href="/Bhavesh-Perumalla-Resume.pdf" download>
                <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 w-fit">
                  <Download size={16} />
                  <span>Download CV</span>
                </button>
              </a>
              {/* ====== MODIFICATION END ====== */}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;