import React from 'react';
import { Music, Trophy, Moon, Film, Shield, Users, Activity, HeartPulse, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { IMAGES } from '../constants';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      id: 'festivals',
      title: 'Festivals & Large Events',
      icon: Music,
      image: IMAGES.services.festival,
      description: 'From boutique gatherings to major multi-stage festivals, we provide complete medical infrastructure.',
      features: [
        'Field Hospitals & Medical Centres',
        'Multidisciplinary Teams (Doctors, Paramedics, Nurses)',
        'Welfare & Safeguarding Integration',
        'Ambulance Transport & Cycle Response'
      ],
      link: '/get-quote?type=Festival'
    },
    {
      id: 'sport',
      title: 'Sporting Events',
      icon: Trophy,
      image: IMAGES.services.sport,
      description: 'Dynamic medical cover for high-impact sports, ensuring athlete safety and rapid response.',
      features: [
        'Pitch-side Trauma Teams',
        'Crowd Medical Safety',
        'Concussion Management Protocols',
        'Physiotherapy Support'
      ],
      link: '/get-quote?type=Sport'
    },
    {
      id: 'nightlife',
      title: 'Nightlife & Venues',
      icon: Moon,
      image: IMAGES.services.nightclub,
      description: 'Supporting venue licensing and patron safety with discreet, professional medical teams.',
      features: [
        'Alcohol & Drug Harm Reduction',
        'Minor Injury Treatment (preventing hospital admissions)',
        'Staff Training & Support',
        'Rapid Response to Medical Emergencies'
      ],
      link: '/get-quote?type=Nightclub'
    },
    {
      id: 'film',
      title: 'Film & TV Production',
      icon: Film,
      image: IMAGES.services.film,
      description: 'Specialist Unit Medics for cast and crew, operating in studios or remote locations.',
      features: [
        'Set Medics & Construction Medics',
        'Remote Location Support (4x4 Capability)',
        'Stunt Cover & Risk Assessment',
        'Discreet & Professional Service'
      ],
      link: '/get-quote?type=Film'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      
      {/* Header Section */}
      <div className="bg-aegis-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src={IMAGES.hero} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-aegis-navy/80 to-aegis-navy"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Clinical Excellence</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We deliver CQC-standard medical care tailored to the unique environment of your event.
          </p>
        </div>
      </div>

      {/* Detailed Services List */}
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
        {serviceCategories.map((service, index) => (
          <div 
            key={service.id} 
            id={service.id}
            className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-aegis-teal/20 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-0 right-0 bg-white p-4 rounded-bl-2xl z-10">
                        <service.icon className="w-8 h-8 text-aegis-navy" />
                    </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-heading font-bold text-aegis-navy mb-4">{service.title}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-aegis-teal mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium text-sm">{feature}</span>
                    </div>
                ))}
              </div>

              <Button to={service.link} variant="primary">
                Get a Quote for {service.title}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Features Grid */}
      <div className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-heading font-bold text-aegis-navy mb-4">Why Choose Aegis?</h2>
                <p className="text-slate-600">Beyond just first aid, we provide a complete clinical governance structure.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                        <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-aegis-navy mb-3">Clinical Governance</h3>
                    <p className="text-slate-600 text-sm">
                        Oversight by senior NHS consultants ensuring all care meets current UK guidelines and best practices.
                    </p>
                </div>
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                        <Users className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-aegis-navy mb-3">Qualified Professionals</h3>
                    <p className="text-slate-600 text-sm">
                        Our staff are registered professionals (HCPC Paramedics, NMC Nurses, GMC Doctors) backed by experienced FREC responders.
                    </p>
                </div>
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                        <HeartPulse className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-aegis-navy mb-3">Advanced Equipment</h3>
                    <p className="text-slate-600 text-sm">
                        We deploy with hospital-grade monitoring, resuscitation, and diagnostic equipment as standard.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
