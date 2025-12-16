import React from 'react';
import { Shield, User, MapPin, Award, Calendar, Linkedin } from 'lucide-react';
import { IMAGES, COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-slate-50">
       {/* Header */}
       <div className="bg-aegis-navy text-white py-24 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-aegis-navy via-slate-900 to-aegis-blue opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">Our Story</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            Oxford-based excellence in pre-hospital care and event safety.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* The Story & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-start">
          <div>
            <span className="text-aegis-teal font-bold uppercase tracking-wider mb-2 block">The Philosophy</span>
            <h2 className="text-3xl font-heading font-bold text-aegis-navy mb-6">Behind the Name "Aegis"</h2>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-4">
                In ancient Greek mythology, the <strong>Aegis</strong> was the legendary shield carried by Zeus and Athena. It wasn't just a tool of war; it was a symbol of divine protection, authority, and safety.
              </p>
              <p className="mb-4">
                At Aegis Medical Solutions, we have adopted this symbol as our mandate. In the unpredictable environment of live events, we act as that shield.
              </p>
              <blockquote className="border-l-4 border-aegis-teal pl-4 italic text-slate-700 my-6 bg-white p-4 rounded-r-lg shadow-sm">
                "Our core values—Protect, Support, and Care—are the pillars of our operation. We protect your attendees, support your event infrastructure, and care for those in need."
              </blockquote>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative">
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <Shield className="w-32 h-32" />
            </div>
            <h3 className="text-xl font-heading font-bold text-aegis-navy mb-6 border-b border-slate-100 pb-4">Company Profile</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <Calendar className="w-5 h-5 text-aegis-teal mr-4 mt-1" />
                <div>
                    <span className="block font-semibold text-slate-900">Established</span>
                    <span className="text-slate-600">February 2025</span>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-aegis-teal mr-4 mt-1" />
                <div>
                    <span className="block font-semibold text-slate-900">Headquarters</span>
                    <span className="text-slate-600">Headington, Oxford</span>
                </div>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-aegis-teal mr-4 mt-1" />
                <div>
                    <span className="block font-semibold text-slate-900">Legal Entity</span>
                    <span className="text-slate-600">Private Limited Company (No. {COMPANY_INFO.companyNumber})</span>
                </div>
              </li>
              </ul>
            </div>
        </div>

        {/* Leadership */}
        <div className="bg-aegis-navy rounded-3xl shadow-2xl overflow-hidden mb-24 text-white">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-5/12 relative min-h-[400px]">
                    <img 
                        src={IMAGES.founder} 
                        alt="Jack Naylor Dunn" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-aegis-navy via-transparent to-transparent md:bg-gradient-to-r"></div>
                </div>
                <div className="md:w-7/12 p-8 md:p-16 flex flex-col justify-center">
                    <div className="mb-6">
                        <h3 className="text-3xl md:text-4xl font-heading font-bold mb-2">Jack Naylor Dunn</h3>
                        <p className="text-aegis-teal font-semibold text-lg uppercase tracking-wide">Founder & Managing Director</p>
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed text-lg font-light mb-8">
                        <p>
                            Jack's journey in pre-hospital care began at the age of sixteen. Now a Student Paramedic with the South Central Ambulance Service, he brings a unique blend of youthful innovation and serious clinical discipline to the private sector.
                        </p>
                        <p>
                            Jack founded Aegis with a clear vision: to elevate the standard of event medicine. He believes that private medical cover should mirror the professionalism, clinical governance, and compassion of the NHS.
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <a 
                            href="https://www.linkedin.com/in/jacknaylordunn/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5] hover:bg-[#005582] text-white rounded-md transition-colors font-semibold text-sm"
                        >
                            <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Gallery Grid */}
        <div>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-aegis-navy">Aegis in Action</h2>
                <p className="text-slate-500 mt-2">A glimpse into our deployments across the UK.</p>
            </div>
            
            <div className="columns-1 md:columns-3 gap-4 space-y-4">
                {IMAGES.gallery.map((img, idx) => (
                    <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                        <img 
                            src={img} 
                            alt={`Gallery ${idx}`} 
                            className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" 
                        />
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;