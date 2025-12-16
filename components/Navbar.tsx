import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Guide', path: '/guide' },
    { name: 'Join Us', path: '/join-us' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex items-center gap-3">
                <img 
                    src={IMAGES.logo} 
                    alt="Aegis Medical Solutions" 
                    className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'} w-auto object-contain`}
                />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-heading font-semibold tracking-wide transition-colors duration-200 uppercase ${
                  location.pathname === link.path
                    ? 'text-aegis-teal'
                    : 'text-aegis-navy hover:text-aegis-teal'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-gray-200 mx-1"></div>

            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} 
              className="flex items-center text-aegis-navy hover:text-aegis-teal text-sm font-heading font-bold whitespace-nowrap"
            >
              <Phone className="w-4 h-4 mr-2 text-aegis-teal" />
              {COMPANY_INFO.phone}
            </a>
            <Button to="/get-quote" variant="primary" size="sm" className="ml-2 whitespace-nowrap">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-aegis-navy hover:text-aegis-teal focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden bg-white border-t border-gray-100 absolute w-full transition-all duration-300 ease-in-out shadow-xl ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-base font-heading font-medium flex justify-between items-center ${
                location.pathname === link.path
                  ? 'text-aegis-teal bg-teal-50'
                  : 'text-aegis-navy hover:text-aegis-teal hover:bg-slate-50'
              }`}
            >
              {link.name}
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
          ))}
           <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} 
              className="block px-4 py-3 text-base font-heading font-bold text-aegis-navy flex items-center"
            >
              <Phone className="w-4 h-4 mr-3 text-aegis-teal" />
              Call: {COMPANY_INFO.phone}
            </a>
            <div className="pt-4">
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