import React, { useState } from 'react';
import { Upload, CheckCircle, Briefcase, Award } from 'lucide-react';
import Button from '../components/Button';

const JoinUs: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      role: 'Operations Manager',
      pin: '',
      coverLetter: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
        const formPayload = new FormData(e.target as HTMLFormElement);
        
        await fetch('/', {
            method: 'POST',
            body: formPayload,
        });
        
        setSubmitted(true);
    } catch (err) {
        setError('Something went wrong. Please try again later.');
        console.error('Submission error', err);
    }
  };

  const vacancies = [
    { title: "Operations Manager", type: "Management", status: "Open" },
    { title: "Practitioners", type: "Clinical (HCP)", status: "Bank" },
    { title: "Paramedics", type: "Clinical (HCP)", status: "Bank" },
    { title: "Techs / AAPs", type: "Clinical", status: "Bank" },
    { title: "First Responders (FREC 3 & 4)", type: "Clinical", status: "Bank" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-aegis-navy py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-aegis-teal/10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">Join the Team</h1>
          <p className="text-xl text-slate-300">
            We are always looking for qualified professionals to join our bank and operations team.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info Side */}
            <div className="space-y-10">
                <div>
                    <h2 className="text-3xl font-heading font-bold text-aegis-navy mb-6">Why Work With Aegis?</h2>
                    <div className="prose prose-lg text-slate-600 mb-6">
                        <p>
                            Aegis Medical Solutions is built by clinicians, for clinicians. We understand the value of a supportive team, high-quality equipment, and clear leadership.
                        </p>
                    </div>
                    
                    <ul className="space-y-3">
                        {[
                            "Competitive rates of pay",
                            "Modern, high-standard equipment",
                            "Supportive clinical governance",
                            "Varied deployments (Festivals, Sport, Film)",
                            "Professional indemnity included"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-slate-700 font-medium">
                                <CheckCircle className="w-5 h-5 text-aegis-teal mr-3" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Vacancies Section */}
                <div>
                    <h3 className="text-xl font-bold text-aegis-navy mb-4 flex items-center">
                        <Briefcase className="w-5 h-5 mr-2 text-aegis-teal" /> Current Vacancies
                    </h3>
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                        {vacancies.map((job, idx) => (
                            <div key={idx} className="p-4 border-b border-slate-100 last:border-0 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                <div>
                                    <span className="block font-bold text-slate-800">{job.title}</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wide">{job.type}</span>
                                </div>
                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${job.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                    {job.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-aegis-navy mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-aegis-blue" /> Minimum Requirements
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li>• Valid Enhanced DBS (within 3 years or on update service)</li>
                        <li>• Proof of qualification (HCPC/NMC Pin or Certificate)</li>
                        <li>• Recent CPD portfolio</li>
                        <li>• Right to work in the UK</li>
                    </ul>
                </div>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 h-fit sticky top-24">
                {submitted ? (
                    <div className="text-center py-16 animate-fade-in">
                        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-50 mb-6 animate-fade-in-up">
                            <CheckCircle className="h-12 w-12 text-green-500" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-aegis-navy mb-4">Application Submitted</h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Thanks for your interest in joining Aegis. Our recruitment team will review your details and contact you if your profile matches our current needs.
                        </p>
                        <Button onClick={() => setSubmitted(false)} variant="outline" className="min-w-[200px]">Back to Careers</Button>
                    </div>
                ) : (
                    <form 
                        name="join-us" 
                        method="POST" 
                        data-netlify="true" 
                        netlify-honeypot="bot-field"
                        onSubmit={handleSubmit} 
                        className="space-y-6"
                    >
                        <input type="hidden" name="form-name" value="join-us" />
                        <div className="hidden">
                           <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                        </div>

                        <div className="border-b border-slate-100 pb-6 mb-6">
                            <h3 className="text-2xl font-bold text-aegis-navy">Staff Application</h3>
                            <p className="text-slate-500 text-sm mt-1">Apply for any of the positions listed.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">First Name</label>
                                <input name="firstName" onChange={handleChange} value={formData.firstName} type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-aegis-teal transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Last Name</label>
                                <input name="lastName" onChange={handleChange} value={formData.lastName} type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-aegis-teal transition" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                            <input name="email" onChange={handleChange} value={formData.email} type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-aegis-teal transition" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Role Applying For</label>
                            <select name="role" onChange={handleChange} value={formData.role} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-aegis-teal transition">
                                <option>Operations Manager</option>
                                <option>Practitioner (Nurse/Paramedic/Dr)</option>
                                <option>Paramedic</option>
                                <option>Technician / AAP</option>
                                <option>First Responder (FREC 3/4)</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                             <label className="block text-sm font-bold text-slate-700 mb-1">Professional PIN (if applicable)</label>
                             <input name="pin" onChange={handleChange} value={formData.pin} type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-aegis-teal transition" placeholder="e.g. PA12345" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Experience / Cover Letter</label>
                            <textarea name="coverLetter" onChange={handleChange} value={formData.coverLetter} rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-aegis-teal transition"></textarea>
                        </div>
                        
                        <div>
                             <label className="block text-sm font-bold text-slate-700 mb-1">Upload CV (PDF/Word)</label>
                             <input 
                                type="file" 
                                name="cv" 
                                accept=".pdf,.doc,.docx"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-aegis-teal transition text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-aegis-teal/10 file:text-aegis-teal hover:file:bg-aegis-teal/20" 
                             />
                        </div>

                        {error && <p className="text-red-500 text-sm font-bold">{error}</p>}

                        <Button type="submit" variant="primary" size="lg" className="w-full">
                            Submit Application
                        </Button>
                    </form>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;