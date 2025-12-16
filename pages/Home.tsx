import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Music, Trophy, Moon, Film, CheckCircle, ArrowRight, Star } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO, IMAGES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
            src={IMAGES.hero} 
            alt="Event Crowd" 
            className="w-full h-full object-cover animate-fade-in"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-aegis-navy/95 via-aegis-navy/80 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-aegis-teal/20 border border-aegis-teal/30 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-aegis-teal mr-2 animate-pulse"></span>
              <span className="text-aegis-teal text-sm font-bold tracking-wide uppercase">Oxford Based &bull; Nationwide Coverage</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-6">
              Expert Medical <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aegis-teal to-blue-400">Cover & Safety</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 font-light leading-relaxed max-w-xl">
              From high-energy festivals to film sets and sporting events, we provide the "Shield of Protection" your event needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/get-quote" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button to="/services" variant="white" size="lg">
                Explore Services
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-aegis-teal" />
                    <span>CQC Standards</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-aegis-teal" />
                    <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-aegis-teal" />
                    <span>NHS Experienced</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-aegis-teal font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-aegis-navy mb-6">Medical Solutions for Every Sector</h3>
            <p className="text-slate-600 text-lg">
              We tailor our medical provision to the specific risk profile and requirements of your industry, ensuring complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Festival & Music', icon: Music, img: IMAGES.services.festival, desc: 'Comprehensive medical infrastructure for large-scale events.' },
              { title: 'Sporting Events', icon: Trophy, img: IMAGES.services.sport, desc: 'Pitch-side trauma care and ringside support.' },
              { title: 'Nightlife', icon: Moon, img: IMAGES.services.nightclub, desc: 'On-site welfare and medical care for venues.' },
              { title: 'Film & TV', icon: Film, img: IMAGES.services.film, desc: 'Discreet unit medics for cast and crew safety.' },
            ].map((service, index) => (
              <Link 
                key={index}
                to="/services" 
                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                    <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-aegis-navy/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="w-12 h-12 bg-aegis-navy/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-aegis-teal group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-aegis-navy group-hover:text-white" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-aegis-navy mb-3">{service.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{service.desc}</p>
                  <span className="text-aegis-teal font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About/Mission Section */}
      <section className="py-24 bg-aegis-navy text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-aegis-blue/10 skew-x-12 transform origin-top translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-aegis-teal/5 -skew-x-12 transform origin-bottom -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-10 h-10 text-aegis-teal" />
                <span className="text-2xl font-heading font-bold">The Aegis Standard</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
                Protect. Support. Care.
              </h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                Named after the mythical shield of Zeus, Aegis Medical Solutions was founded with a singular mission: to provide an unshakeable defense for your events.
              </p>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Led by professionals, our team bridges the gap between voluntary first aid and professional NHS-level response. We don't just attend; we integrate, plan, and protect.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex items-center gap-3">
                      <Star className="w-5 h-5 text-aegis-teal fill-current" />
                      <span className="font-semibold">Event Specialist</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex items-center gap-3">
                      <Shield className="w-5 h-5 text-aegis-teal fill-current" />
                      <span className="font-semibold">Risk Management</span>
                  </div>
              </div>

              <Button to="/about" variant="secondary">
                Read Our Story
              </Button>
            </div>
            
            <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                    <img 
                        src={IMAGES.gallery[2]} 
                        alt="Medical Team" 
                        className="rounded-2xl shadow-2xl w-full h-64 object-cover transform translate-y-8"
                    />
                    <img 
                        src={IMAGES.gallery[3]} 
                        alt="On site" 
                        className="rounded-2xl shadow-2xl w-full h-64 object-cover transform -translate-y-8"
                    />
                </div>
                {/* Center Badge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-xl">
                    <img src={IMAGES.logo} alt="Aegis Logo" className="w-16 h-16 object-contain" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aegis-navy mb-6">
            Ready to Secure Your Event?
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Don't leave safety to chance. Contact our Oxford headquarters today for a tailored risk assessment and medical plan.
          </p>
          <div className="flex justify-center gap-4">
            <Button to="/get-quote" variant="primary" size="lg">
                Get a Quote
            </Button>
            <Button to={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} variant="outline" size="lg">
                Call {COMPANY_INFO.phone}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;