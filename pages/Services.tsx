import React from 'react';
import { Music, Trophy, Moon, Film, Syringe, Ambulance, FileCheck, Users, Check } from 'lucide-react';
import Button from '../components/Button';
import { IMAGES } from '../constants';

const Services: React.FC = () => {
  const detailedServices = [
    {
      id: 'festival',
      title: 'Festival & Music Events',
      icon: Music,
      image: IMAGES.services.festival,
      description: "We provide comprehensive medical infrastructure for music festivals and concerts. From minor injuries units to roving response teams, we ensure thousands of attendees stay safe.",
      features: [
        "Crowd density medical planning",
        "On-site field hospitals & treatment centers",
        "Alcohol and drug related care specialists",
        "Rapid extraction teams for dense crowds"
      ]
    },
    {
      id: 'sport',
      title: 'Sporting Competitions',
      icon: Trophy,
      image: IMAGES.services.sport,
      description: "Our teams are experienced in pitch-side and ringside trauma management. We cater to rugby tournaments, boxing matches, marathons, and equestrian events.",
      features: [
        "Immediate trauma care & spinal management",
        "Concussion assessment & protocols",
        "Physiotherapy support availability",
        "Ambulance transport coordination"
      ]
    },
    {
      id: 'nightclub',
      title: 'Nightclub & Venues',
      icon: Moon,
      image: IMAGES.services.nightclub,
      description: "Busy nightlife venues face unique challenges. Our medics handle intoxication, minor injuries, and medical emergencies on-site, significantly reducing liability and 999 calls.",
      features: [
        "Welfare & vulnerability support teams",
        "Acute intoxication management",
        "Conflict resolution awareness",
        "Detailed incident reporting for licensing"
      ]
    },
    {
      id: 'film',
      title: 'Film & TV Production',
      icon: Film,
      image: IMAGES.services.film,
      description: "We understand the nuances of a working set. Our unit medics are discreet, professional, and equipped to deal with long shooting days, stunts, and remote locations.",
      features: [
        "Risk assessment for stunts & special effects",
        "Remote location support & 4x4 capability",
        "Crew health & welfare monitoring",
        "Discreet presence compatible with set etiquette"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-aegis-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-aegis-teal font-bold tracking-wider uppercase mb-4 block">Our Capabilities</span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">World-Class Medical Cover</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            Tailored medical solutions delivered by qualified Paramedics, EMTs, and First Responders.
          </p>
        </div>
      </div>

      {/* Main Service List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {detailedServices.map((service, index) => (
            <div key={service.id} id={service.id} className={`scroll-mt-28 flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-aegis-teal/20 rounded-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-aegis-navy/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                        <div className="bg-white p-3 rounded-lg inline-block mb-2 shadow-lg">
                            <service.icon className="w-6 h-6 text-aegis-navy" />
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-heading font-bold text-aegis-navy mb-4">{service.title}</h2>
                <div className="h-1 w-20 bg-aegis-teal mb-6"></div>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm mb-8">
                    <h3 className="text-sm font-bold text-aegis-navy uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Service Inclusions</h3>
                    <ul className="grid grid-cols-1 gap-3">
                    {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                        <Check className="flex-shrink-0 w-5 h-5 text-aegis-teal mt-0.5 mr-3" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                        </li>
                    ))}
                    </ul>
                </div>

                <Button to={`/get-quote?type=${encodeURIComponent(service.title)}`} variant="primary">
                  Request Quote for {service.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process / Standards Section */}
      <div className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-aegis-navy">The Aegis Guarantee</h2>
                <p className="text-slate-500 mt-2">Consistent high standards across every deployment.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-aegis-teal/50 transition-colors">
                    <Syringe className="w-10 h-10 text-aegis-teal mb-4" />
                    <h4 className="font-bold text-lg text-aegis-navy mb-2">Clinical Governance</h4>
                    <p className="text-sm text-slate-600">Operating under strict medical directives and JRCALC guidelines for patient safety.</p>
                 </div>
                 <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-aegis-teal/50 transition-colors">
                    <Ambulance className="w-10 h-10 text-aegis-teal mb-4" />
                    <h4 className="font-bold text-lg text-aegis-navy mb-2">Logistical Power</h4>
                    <p className="text-sm text-slate-600">From 4x4 response vehicles to fully equipped pop-up medical centers.</p>
                 </div>
                 <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-aegis-teal/50 transition-colors">
                    <FileCheck className="w-10 h-10 text-aegis-teal mb-4" />
                    <h4 className="font-bold text-lg text-aegis-navy mb-2">Risk Assessed</h4>
                    <p className="text-sm text-slate-600">Every event receives a bespoke medical plan and risk assessment document.</p>
                 </div>
                 <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-aegis-teal/50 transition-colors">
                    <Users className="w-10 h-10 text-aegis-teal mb-4" />
                    <h4 className="font-bold text-lg text-aegis-navy mb-2">Expert Staff</h4>
                    <p className="text-sm text-slate-600">Uniformed, vetted, and highly qualified professionals who integrate with your team.</p>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;