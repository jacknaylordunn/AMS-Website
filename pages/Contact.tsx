import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, FileText, ChevronRight, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
        const formData = new FormData(e.target as HTMLFormElement);
        
        await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData as any).toString(),
        });
        
        setSubmitted(true);
    } catch (err) {
        setError('Something went wrong. Please try again later or contact us via phone.');
        console.error('Form submission error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-aegis-navy py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Start a Conversation</h1>
          <p className="text-xl text-slate-300">
            Have a question? We're ready to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-full">
              <h2 className="text-xl font-heading font-bold text-aegis-navy mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4 group-hover:bg-aegis-teal group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-aegis-navy group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-lg font-semibold text-aegis-navy hover:text-aegis-teal transition-colors">{COMPANY_INFO.phone}</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4 group-hover:bg-aegis-teal group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5 text-aegis-navy group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg font-semibold text-aegis-navy hover:text-aegis-teal transition-colors break-all">{COMPANY_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4 group-hover:bg-aegis-teal group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5 text-aegis-navy group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-base text-slate-700 leading-snug">
                      {COMPANY_INFO.address.replace(', ', ',\n')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4 group-hover:bg-aegis-teal group-hover:text-white transition-colors">
                    <Clock className="w-5 h-5 text-aegis-navy group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Availability</p>
                    <p className="text-base text-slate-700">24/7 Cover Available</p>
                  </div>
                </div>
              </div>

               {/* Map Placeholder */}
                <div className="mt-8 w-full h-48 bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200">
                    <iframe 
                        title="Oxford Location"
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight={0} 
                        marginWidth={0} 
                        src="https://maps.google.com/maps?q=Oxford%2C%20United%20Kingdom&t=&z=12&ie=UTF8&iwloc=&output=embed"
                        className="opacity-75 hover:opacity-100 transition-opacity"
                    ></iframe>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            
            {/* Quote Redirect Banner */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm">
                <div>
                    <h3 className="text-aegis-navy font-bold text-lg flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-aegis-teal" />
                        Planning an Event?
                    </h3>
                    <p className="text-slate-600 text-sm mt-1">
                        For specific event cover requests, please use our dedicated quote form.
                    </p>
                </div>
                <Link to="/get-quote" className="mt-4 sm:mt-0 inline-flex items-center text-sm font-bold text-white bg-aegis-teal px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                    Get a Quote <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-aegis-navy">General Enquiries</h2>
                <p className="text-slate-500 mt-2">Use the form below for general questions, partnership opportunities, or feedback.</p>
              </div>
              
              {submitted ? (
                <div className="text-center py-20 px-8 bg-white rounded-2xl border border-slate-100 animate-fade-in">
                  <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-50 mb-6 animate-fade-in-up">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-aegis-navy mb-4">Message Sent</h3>
                  <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. A member of our team will review your enquiry and get back to you shortly.
                  </p>
                  <Button to="/" variant="outline" className="min-w-[200px]">
                     Return Home
                  </Button>
                </div>
              ) : (
                <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="hidden">
                     <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-aegis-navy mb-2">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-aegis-navy mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition-all"
                        placeholder="07700 900000"
                        value={formState.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-aegis-navy mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-bold text-aegis-navy mb-2">Topic</label>
                    <div className="relative">
                        <select
                            name="serviceType"
                            id="serviceType"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                            value={formState.serviceType}
                            onChange={handleChange}
                        >
                            <option>General Inquiry</option>
                            <option>Partnership Proposal</option>
                            <option>Feedback</option>
                            <option>Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                             <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-aegis-navy mb-2">Message <span className="text-red-500">*</span></label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                      value={formState.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {error && <p className="text-red-500 text-sm font-bold">{error}</p>}

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;