import React from 'react';
import { Shield, MapPin, Calendar, UserCheck, HeartHandshake } from 'lucide-react';
import { IMAGES, COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
       {/* Header */}
       <div className="bg-aegis-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="block text-aegis-teal font-bold uppercase tracking-widest text-sm mb-4">Established 2025</span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">Our Story</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            Oxford-based excellence in pre-hospital care, driven by a commitment to protect, support, and care.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Leadership Section */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden mb-20">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-5/12">
                    <img 
                        src={IMAGES.founder} 
                        alt="Jack Naylor Dunn" 
                        className="w-full h-full object-cover min-h-[400px]"
                    />
                </div>
                <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                        <span className="text-aegis-teal font-bold uppercase tracking-wider text-xs mb-2 block">Leadership</span>
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-aegis-navy mb-2">Jack Naylor Dunn</h3>
                        <p className="text-slate-500 font-medium text-lg">Founder & Managing Director</p>
                    </div>
                    
                    <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light mb-8">
                        <p>
                            Jack's journey in pre-hospital care is defined by dedication and early capability. Working in the sector since the age of sixteen, he has built a reputation for clinical excellence and operational reliability.
                        </p>
                        <p>
                            Currently a <strong>Student Paramedic with the South Central Ambulance Service</strong>, Jack brings the rigour of NHS frontline experience to the private events sector. 
                        </p>
                        <p>
                            He founded Aegis Medical Solutions in February 2025 with a clear vision: to professionalise event medical cover by deploying qualified staff who adhere to the highest clinical governance standards.
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                         <div className="flex items-center gap-2">
                             <UserCheck className="w-5 h-5 text-aegis-teal" />
                             <span className="text-sm font-semibold text-aegis-navy">NHS Experience</span>
                         </div>
                         <div className="flex items-center gap-2">
                             <HeartHandshake className="w-5 h-5 text-aegis-teal" />
                             <span className="text-sm font-semibold text-aegis-navy">Patient Focused</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        {/* The Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
          <div>
            <span className="text-aegis-teal font-bold uppercase tracking-wider mb-2 block text-xs">The Brand</span>
            <h2 className="text-3xl font-heading font-bold text-aegis-navy mb-6">Why "Aegis"?</h2>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-4">
                In ancient Greek mythology, the <strong>Aegis</strong> was the legendary shield carried by Zeus. It was a symbol of divine protection and unshakeable authority.
              </p>
              <p className="mb-4">
                We adopted this name because it perfectly encapsulates our role at your event. We are the shield that protects your attendees, your license, and your reputation.
              </p>
              <blockquote className="border-l-4 border-aegis-teal pl-4 italic text-slate-800 my-8 bg-white p-6 rounded-r-lg shadow-sm">
                "Our core values—<strong>Protect, Support, and Care</strong>—are the pillars of our operation. We protect lives, support event operations, and provide compassionate care."
              </blockquote>
            </div>
          </div>
          
          <div className="bg-aegis-navy p-8 rounded-xl shadow-xl text-white">
            <h3 className="text-xl font-heading font-bold mb-6 border-b border-slate-700 pb-4">Company Facts</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-slate-800 p-2 rounded-lg mr-4">
                    <Calendar className="w-5 h-5 text-aegis-teal" />
                </div>
                <div>
                    <span className="block font-semibold text-white">Incorporated</span>
                    <span className="text-slate-400">February 2025</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-slate-800 p-2 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-aegis-teal" />
                </div>
                <div>
                    <span className="block font-semibold text-white">Headquarters</span>
                    <span className="text-slate-400">Headington, Oxford<br/>Covering London & South East</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-slate-800 p-2 rounded-lg mr-4">
                    <Shield className="w-5 h-5 text-aegis-teal" />
                </div>
                <div>
                    <span className="block font-semibold text-white">Legal Entity</span>
                    <span className="text-slate-400">Private Limited Company<br/>No. {COMPANY_INFO.companyNumber}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Gallery Grid */}
        <div>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-aegis-navy">Aegis in Action</h2>
                <p className="text-slate-500 mt-2">Professionalism in every environment.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {IMAGES.gallery.map((img, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                        <img 
                            src={img} 
                            alt={`Gallery ${idx}`} 
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
                            loading="lazy"
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