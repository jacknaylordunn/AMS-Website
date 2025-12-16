import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, Heart, Activity, Globe, Lock, Ambulance, Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_INFO, IMAGES, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-aegis-navy text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info - Spans 2 cols on LG */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <img src={IMAGES.logo} alt="Logo" className="h-12 w-auto bg-white rounded p-1" />
            </div>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed max-w-sm">
              Oxford-based specialists in pre-hospital care. We provide Clinical Governance, registered professionals, and logistical support for events across the UK.
            </p>
            
            <div className="flex space-x-4 mb-8">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-aegis-teal transition-colors group" aria-label="Facebook">
                    <Facebook className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-aegis-teal transition-colors group" aria-label="Instagram">
                    <Instagram className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-aegis-teal transition-colors group" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </a>
            </div>

            <div className="flex space-x-6">
              <div className="flex items-center text-aegis-teal text-sm font-semibold tracking-wide">
                <Shield className="w-4 h-4 mr-2" /> PROTECT
              </div>
              <div className="flex items-center text-aegis-teal text-sm font-semibold tracking-wide">
                <Activity className="w-4 h-4 mr-2" /> SUPPORT
              </div>
              <div className="flex items-center text-aegis-teal text-sm font-semibold tracking-wide">
                <Heart className="w-4 h-4 mr-2" /> CARE
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-slate-400">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-300 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link to="/guide" className="text-slate-300 hover:text-white transition-colors text-sm">Medical Guide</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><Link to="/invoicing-terms" className="text-slate-300 hover:text-white transition-colors text-sm">Invoicing Terms</Link></li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-slate-400">Divisions & Portals</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://tech.aegismedicalsolutions.co.uk" target="_blank" rel="noreferrer" className="flex items-center text-slate-300 hover:text-aegis-teal transition-colors text-sm group">
                  <Globe className="w-4 h-4 mr-2 opacity-50 group-hover:opacity-100" /> Aegis Tech
                </a>
              </li>
              <li>
                <a href="https://asm.aegismedicalsolutions.co.uk" target="_blank" rel="noreferrer" className="flex items-center text-slate-300 hover:text-aegis-teal transition-colors text-sm group">
                  <Ambulance className="w-4 h-4 mr-2 opacity-50 group-hover:opacity-100" /> Street Medics
                </a>
              </li>
               <li><Link to="/join-us" className="text-slate-300 hover:text-white transition-colors text-sm">Careers / Recruitment</Link></li>
            </ul>

            <div className="mt-6 pt-6 border-t border-slate-800">
               <a href="https://staff.aegismedicalsolutions.co.uk" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-slate-700 hover:bg-aegis-teal transition-colors w-full group">
                  <Lock className="w-4 h-4 mr-2 text-slate-400 group-hover:text-white transition-colors" /> Staff Login
               </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-slate-400">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-aegis-teal mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-aegis-teal mr-3 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-slate-300 hover:text-white text-sm">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-aegis-teal mr-3 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-white text-sm break-all">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
             <span>Company No: {COMPANY_INFO.companyNumber}</span>
             <span className="hidden md:inline">&bull;</span>
             <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;