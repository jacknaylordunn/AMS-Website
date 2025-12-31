import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for transparency/glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Guide', path: '/guide' },
    { name: 'Join Us', path: '/join-us' },
  ];

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-slate-200 shadow-sm' 
          : 'bg-white border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex items-center gap-3">
                <img 
                    src={IMAGES.logo} 
                    alt="Aegis Medical Solutions" 
                    className="h-16 w-auto object-contain transition-transform hover:scale-105 duration-300"
                />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-heading font-bold tracking-wide transition-all duration-200 uppercase relative group ${
                  location.pathname === link.path
                    ? 'text-aegis-teal'
                    : 'text-aegis-navy hover:text-aegis-teal'
                }`}
              >
                {link.name}
                {/* Underline animation */}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-aegis-teal transform origin-left transition-transform duration-300 ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
            
            <div className="h-8 w-px bg-slate-200 mx-2"></div>

            <div className="flex items-center gap-4">
                <a 
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} 
                className="flex items-center text-aegis-navy hover:text-aegis-teal text-sm font-heading font-bold whitespace-nowrap transition-colors"
                >
                <Phone className="w-4 h-4 mr-2 text-aegis-teal" />
                {COMPANY_INFO.phone}
                </a>
                <Button to="/get-quote" variant="primary" size="sm" className="whitespace-nowrap shadow-md hover:shadow-lg">
                Get Quote
                </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-aegis-navy hover:text-aegis-teal hover:bg-slate-50 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 absolute w-full shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-4 rounded-lg text-base font-heading font-bold flex justify-between items-center transition-colors ${
                location.pathname === link.path
                  ? 'text-aegis-teal bg-teal-50'
                  : 'text-aegis-navy hover:text-aegis-teal hover:bg-slate-50'
              }`}
            >
              {link.name}
              <ChevronRight className={`w-4 h-4 transition-opacity ${location.pathname === link.path ? 'opacity-100' : 'opacity-30'}`} />
            </Link>
          ))}
           <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} 
              className="block px-4 py-4 text-base font-heading font-bold text-aegis-navy flex items-center border-t border-slate-100 mt-2 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 mr-3 text-aegis-teal" />
              Call: {COMPANY_INFO.phone}
            </a>
            <div className="pt-4 px-4">
                <Button to="/get-quote" variant="primary" className="w-full justify-center">
                    Get a Quote
                </Button>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;