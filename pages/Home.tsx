import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Music, Trophy, Moon, Film, ArrowRight, Activity, Clock, CheckCircle, Star, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO, IMAGES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Redesigned for Premium Impact */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
            src={IMAGES.hero} 
            alt="Event Medical Cover" 
            className="w-full h-full object-cover"
          />
          {/* Professional Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-aegis-navy/95 via-aegis-navy/80 to-aegis-navy/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aegis-teal/10 border border-aegis-teal/30 text-aegis-teal font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-aegis-teal animate-pulse"></span>
                Oxford &bull; London &bull; Nationwide
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-8">
              Professional Medical <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aegis-teal to-blue-400">Risk Management</span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-10 font-light leading-relaxed max-w-2xl border-l-4 border-aegis-teal pl-6">
              Bridging the gap between voluntary first aid and NHS-level response. We provide clinical governance, qualified professionals, and logistical support for events, venues, and productions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button to="/get-quote" variant="secondary" size="lg" className="px-10 shadow-xl shadow-aegis-teal/20">
                Request a Quote
              </Button>
              <Button to="/services" variant="outline" size="lg" className="px-10 border-slate-400 text-slate-100 hover:bg-white hover:text-aegis-navy hover:border-white">
                Our Capabilities
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-aegis-teal" /> Fully Insured
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-aegis-teal" /> CQC Standards
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-aegis-teal" /> Clinician Led
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Stats Strip */}
      <section className="bg-white border-b border-slate-100 relative z-20 -mt-8 mx-4 md:mx-auto max-w-7xl rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="p-8 flex items-start gap-5 hover:bg-slate-50 transition-colors">
                  <div className="bg-blue-50 p-3 rounded-lg text-aegis-blue">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                      <h3 className="font-heading font-bold text-aegis-navy text-lg mb-1">Clinical Governance</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">Operating under strict medical directives and JRCALC guidelines for patient safety.</p>
                  </div>
              </div>
              <div className="p-8 flex items-start gap-5 hover:bg-slate-50 transition-colors">
                  <div className="bg-teal-50 p-3 rounded-lg text-aegis-teal">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                      <h3 className="font-heading font-bold text-aegis-navy text-lg mb-1">Risk Assessed</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">Every event receives a bespoke medical plan tailored to your specific risk profile.</p>
                  </div>
              </div>
              <div className="p-8 flex items-start gap-5 hover:bg-slate-50 transition-colors">
                  <div className="bg-slate-100 p-3 rounded-lg text-aegis-navy">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                      <h3 className="font-heading font-bold text-aegis-navy text-lg mb-1">24/7 Availability</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">Round-the-clock support for venues, festivals, and emergency requests.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Services Overview */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <span className="text-aegis-teal font-bold tracking-widest uppercase text-xs mb-3 block">Sector Expertise</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-aegis-navy mb-4">Medical Solutions for Every Environment</h2>
                <p className="text-slate-600 text-lg font-light">
                We tailor our medical provision to the specific risk profile of your industry, ensuring compliance and safety without compromising the guest experience.
                </p>
            </div>
            <Link to="/services" className="group flex items-center font-bold text-aegis-navy hover:text-aegis-teal transition-colors">
                View All Services <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'festival', title: 'Festival & Music', icon: Music, img: IMAGES.services.festival, desc: 'Field hospitals, extraction teams, and crowd welfare.' },
              { id: 'sport', title: 'Sporting Events', icon: Trophy, img: IMAGES.services.sport, desc: 'Pitch-side trauma care and athlete welfare.' },
              { id: 'nightclub', title: 'Nightlife Venues', icon: Moon, img: IMAGES.services.nightclub, desc: 'On-site medic teams to reduce ambulance call-outs.' },
              { id: 'film', title: 'Film & TV', icon: Film, img: IMAGES.services.film, desc: 'Discreet unit medics for cast and crew safety.' },
            ].map((service, index) => (
              <Link to={`/services#${service.id}`} key={index} className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                    src={service.img} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aegis-navy via-aegis-navy/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                   <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-4 border border-white/20 group-hover:bg-aegis-teal group-hover:border-aegis-teal transition-colors">
                        <service.icon className="w-6 h-6" />
                   </div>
                   <h4 className="text-2xl font-heading font-bold text-white mb-2">{service.title}</h4>
                   <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {service.desc}
                   </p>
                   <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                     Learn More <ArrowRight className="w-3 h-3" />
                   </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About/Mission Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-aegis-navy p-3 rounded-xl">
                    <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                    <span className="text-aegis-teal font-bold uppercase tracking-wider text-xs block">The Aegis Standard</span>
                    <span className="text-xl font-heading font-bold text-aegis-navy">Protect. Support. Care.</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-8 text-aegis-navy">
                Unshakeable Defense for Your Event
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                  <p>
                    Named after the mythical shield of Zeus, Aegis Medical Solutions was founded with a singular mission: to provide a robust layer of protection for your attendees.
                  </p>
                  <p>
                    We are led by active pre-hospital professionals who understand the reality of emergency care. We don't just attend; we integrate, plan, and protect.
                  </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="font-bold text-aegis-navy text-3xl mb-1">100%</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Prepared</div>
                  </div>
                   <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="font-bold text-aegis-navy text-3xl mb-1">24/7</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Availability</div>
                  </div>
              </div>

              <div className="mt-10">
                  <Button to="/about" variant="primary">
                    Meet The Leadership
                  </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-aegis-teal/20 rounded-2xl transform rotate-3"></div>
                <img 
                    src={IMAGES.gallery[9]} 
                    alt="Medical Team" 
                    className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                />
                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                    <div className="flex items-center gap-2 mb-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                    <p className="text-slate-700 text-sm italic">
                        "Aegis came to our charity football tournament today, and handled all minor injuries perfectly. Unfortunately in the semi final there was an horrific injury. The team dealt with the issue amazingly and provided him with all the care needed"
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-aegis-navy relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full rotate-180 transform" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Secure Your Event?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">
            Don't leave safety to chance. Contact our Oxford headquarters today for a tailored risk assessment and medical plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/get-quote" variant="secondary" size="lg" className="px-12 py-5 text-lg shadow-xl shadow-teal-900/50">
                Get a Quote
            </Button>
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center font-heading font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 px-8 py-5 text-lg border border-slate-600 text-white hover:bg-white hover:text-aegis-navy">
                Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;