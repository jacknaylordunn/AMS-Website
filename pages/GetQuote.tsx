import React, { useState, useEffect } from 'react';
import { Send, Calendar, Users, MapPin, Clock, FileText } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';

const GetQuote: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      eventDate: '',
      duration: '',
      location: '',
      attendees: '',
      eventType: 'Music Festival',
      requirements: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type) {
        let mappedType = 'Other';
        if (type.includes('Festival') || type.includes('Music')) mappedType = 'Music Festival';
        else if (type.includes('Sport')) mappedType = 'Sporting Event';
        else if (type.includes('Nightclub') || type.includes('Venue')) mappedType = 'Nightclub / Venue';
        else if (type.includes('Film') || type.includes('TV')) mappedType = 'Film / TV Production';
        
        setFormData(prev => ({ ...prev, eventType: mappedType }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Quote Request: ${formData.eventType} - ${formData.organization || formData.fullName}`;
    const body = `Quote Request Details:

--- Personal Details ---
Name: ${formData.fullName}
Organization: ${formData.organization}
Email: ${formData.email}
Phone: ${formData.phone}

--- Event Details ---
Event Type: ${formData.eventType}
Date(s): ${formData.eventDate}
Duration: ${formData.duration}
Location: ${formData.location}
Attendees: ${formData.attendees}

--- Requirements ---
${formData.requirements}`;

    window.location.href = `mailto:contact@aegismedicalsolutions.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-aegis-blue py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">Request a Quote</h1>
          <p className="text-xl text-blue-100">
            Provide us with a few details about your event, and we'll build a tailored medical plan.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
               <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                  <Send className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-aegis-navy mb-4">Draft Email Created</h2>
                <p className="text-slate-600 text-lg mb-8">
                    We have opened your default email client with your quote details pre-filled. Please click 'Send' in your email app to complete the request.
                </p>
                <Button to="/" variant="outline">Return Home</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-aegis-navy border-b border-slate-100 pb-2">Your Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                        <input name="fullName" onChange={handleChange} value={formData.fullName} type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Organization / Company</label>
                        <input name="organization" onChange={handleChange} value={formData.organization} type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                        <input name="email" onChange={handleChange} value={formData.email} type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                        <input name="phone" onChange={handleChange} value={formData.phone} type="tel" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition" />
                    </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-aegis-navy border-b border-slate-100 pb-2">Event Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">
                            <Calendar className="inline w-4 h-4 mr-1 text-slate-400" /> Event Date(s)
                        </label>
                        <input name="eventDate" onChange={handleChange} value={formData.eventDate} type="text" placeholder="e.g. 15th - 17th July 2025" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">
                             <Clock className="inline w-4 h-4 mr-1 text-slate-400" /> Duration / Timings
                        </label>
                        <input name="duration" onChange={handleChange} value={formData.duration} type="text" placeholder="e.g. 12:00 PM - 11:00 PM" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-slate-700 mb-1">
                            <MapPin className="inline w-4 h-4 mr-1 text-slate-400" /> Location / Venue
                        </label>
                        <input name="location" onChange={handleChange} value={formData.location} type="text" placeholder="Venue Name & Postcode" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">
                            <Users className="inline w-4 h-4 mr-1 text-slate-400" /> Estimated Attendees
                        </label>
                        <input name="attendees" onChange={handleChange} value={formData.attendees} type="number" placeholder="e.g. 5000" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Event Type</label>
                        <select name="eventType" onChange={handleChange} value={formData.eventType} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition">
                            <option>Music Festival</option>
                            <option>Sporting Event</option>
                            <option>Corporate Event</option>
                            <option>Film / TV Production</option>
                            <option>Nightclub / Venue</option>
                            <option>Community Event</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-aegis-navy border-b border-slate-100 pb-2">Medical Requirements</h3>
                <div>
                     <label className="block text-sm font-bold text-slate-700 mb-1">
                        <FileText className="inline w-4 h-4 mr-1 text-slate-400" /> Additional Details
                    </label>
                    <textarea 
                        name="requirements"
                        onChange={handleChange}
                        value={formData.requirements}
                        rows={4} 
                        placeholder="Please describe any specific risks, previous medical issues, or specific requirements you have..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition"
                    ></textarea>
                </div>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Generate Email Quote Request
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetQuote;