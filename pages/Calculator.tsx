import React, { useState } from 'react';
import { Calculator as CalcIcon, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import Button from '../components/Button';

// Tier Data Definitions
const tierData: Record<number, { title: string; description: string }> = {
  1: { title: 'Tier 1 Event', description: 'Small, low-risk events where basic first aid provision is often sufficient. The focus is on having a designated, competent person and access to emergency services.' },
  2: { title: 'Tier 2 Event', description: 'Events where illness or injury is possible but unlikely. A dedicated first aid resource is needed, preferably led by a Healthcare Professional (HCP) to manage minor issues on site.' },
  3: { title: 'Tier 3 Event', description: 'Larger events where illness and injury are foreseeable. A dedicated medical team with HCP leadership (Paramedic/Nurse) is required to manage patients and reduce hospital transfers.' },
  4: { title: 'Tier 4 Event', description: 'Complex events with a significant risk of illness and injury. A multi-disciplinary team led by an experienced HCP is needed to handle a high volume of patients and potential emergencies.' },
  5: { title: 'Tier 5 Event', description: 'Mass gatherings or high-risk events where serious incidents are expected. A comprehensive medical service led by a Doctor is essential, often including on-site diagnostics and advanced care capabilities.' }
};

const staffingPackages: Record<number, any> = {
  1: {
      staff: [{ role: 'First Aider (PHEM B/C)', ratio: 500, min: 1 }],
      analysis: { benefits: ["Meets basic HSE requirements", "Low cost"], risks: ["Unable to manage anything beyond minor injuries", "Any serious incident requires a 999 call"] }
  },
  2: {
      staff: [
          { role: 'Medical Lead (e.g., HCP or Lead Responder)', ratio: null, min: 1 },
          { role: 'First Responder (PHEM D)', ratio: 1000, min: 2 }
      ],
      analysis: { benefits: ["Can manage a wider range of minor incidents", "HCP leadership improves on-site decisions"], risks: ["Limited ability to manage acute medical emergencies", "Pain relief and advanced interventions not possible"] }
  },
  3: {
      staff: [
          { role: 'Clinical Lead (Paramedic/Nurse)', ratio: null, min: 1 },
          { role: 'First Responder / EMT (PHEM D/F)', ratio: 1000, min: 2 }
      ],
      vehicles: "At least one crewed ambulance is recommended.",
      analysis: { benefits: ["Ability to administer medications (e.g., pain relief)", "Can manage serious medical issues on site", "Significantly reduces need for NHS 999 calls"], risks: ["May be overwhelmed by mass casualty incidents", "Specialist care (e.g., Doctors) not available on site"] }
  },
  4: {
      staff: [
          { role: 'Clinical Lead (Senior HCP - Paramedic/Nurse/Doctor)', ratio: null, min: 1 },
          { role: 'Healthcare Professional (Paramedic/Nurse)', ratio: 2500, min: 1 },
          { role: 'Technician / EMT (PHEM F)', ratio: 1500, min: 2 },
          { role: 'First Responder (PHEM D/E)', ratio: 750, min: 4 },
      ],
      vehicles: "Multiple response vehicles (e.g., 4x4 for terrain) and at least one crewed ambulance for transport.",
      notes: "A robust command structure and well-equipped medical treatment centre is necessary.",
      analysis: { benefits: ["Strong clinical team can handle most emergencies", "Blended responder team provides wide area coverage", "Reduces event impact on local hospitals"], risks: ["Higher cost, but mitigates significant financial and reputational risk", "Still reliant on hospitals for definitive care"] }
  },
  5: {
      staff: [
          { role: 'Clinical Lead (Doctor - Emergency Medicine)', ratio: null, min: 1 },
          { role: 'Advanced HCP (e.g., Paramedic/Nurse Practitioner)', ratio: 5000, min: 1},
          { role: 'Registered Nurse (for Treatment Centre)', ratio: 3000, min: 1 },
          { role: 'Paramedic', ratio: 2000, min: 2},
          { role: 'Technician / EMT (PHEM F)', ratio: 1000, min: 5 },
          { role: 'First Responder (PHEM D/E)', ratio: 500, min: 10 },
          { role: 'Control & Dispatch Staff', ratio: null, min: 1 }
      ],
      vehicles: "Multiple crewed ambulances, 4x4 response vehicles, and consideration for a mobile treatment centre/command unit.",
      notes: "A comprehensive field hospital and multi-agency command structure is essential.",
      analysis: { benefits: ["'Gold standard' care, capable of running an on-site urgent treatment centre", "Minimal impact on local NHS resources", "Highest level of risk mitigation and legal protection"], risks: ["Highest initial investment", "Requires significant logistical planning and inter-agency cooperation"] }
  }
};

const Calculator: React.FC = () => {
  const [inputs, setInputs] = useState({
    attendees: '',
    duration: '',
    activity: '1',
    sportType: '1',
    intoxication: '1',
    camping: false,
  });

  const [result, setResult] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setInputs(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const calculateRisk = () => {
    const attendees = parseInt(inputs.attendees) || 0;
    if (attendees === 0) {
        alert('Please enter the number of attendees.');
        return;
    }
    const duration = parseInt(inputs.duration) || 0;
    const activityValue = inputs.activity;
    const sportTypeScore = parseInt(inputs.sportType) || 0;
    const intoxicationScore = parseInt(inputs.intoxication) || 0;
    const isCamping = inputs.camping;

    // Calculate score
    let totalScore = 0;
    if (activityValue === 'sport') totalScore += sportTypeScore;
    else totalScore += parseInt(activityValue) || 0;
    
    if (attendees <= 500) totalScore += 1;
    else if (attendees <= 2000) totalScore += 2;
    else if (attendees <= 5000) totalScore += 3;
    else if (attendees <= 10000) totalScore += 4;
    else totalScore += 5;

    if (duration <= 4) totalScore += 1;
    else if (duration <= 12) totalScore += 2;
    else if (duration <= 24) totalScore += 3;
    else totalScore += 4;
    
    totalScore += intoxicationScore;
    if (isCamping) totalScore += 3;

    // Determine Tier
    let finalTier = 1;
    if (totalScore >= 17) finalTier = 5;
    else if (totalScore >= 14) finalTier = 4;
    else if (totalScore >= 10) finalTier = 3;
    else if (totalScore >= 6) finalTier = 2;

    if (activityValue === 'sport' && sportTypeScore >= 5 && finalTier < 3) finalTier = 3;

    setResult({
        tier: finalTier,
        info: tierData[finalTier],
        pkg: staffingPackages[finalTier],
        attendees: attendees
    });
    
    // Smooth scroll to results
    setTimeout(() => {
        const element = document.getElementById('results-section');
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
        <div className="bg-aegis-navy py-16 text-center text-white">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">Event Medical Calculator</h1>
                <p className="text-xl text-slate-300">
                    Estimate your event's risk level and medical requirements.
                </p>
            </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <label htmlFor="attendees" className="block text-sm font-bold text-aegis-navy mb-2">Number of Attendees</label>
                        <input 
                            type="number" 
                            name="attendees" 
                            value={inputs.attendees}
                            onChange={handleInputChange}
                            placeholder="e.g. 1500" 
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="duration" className="block text-sm font-bold text-aegis-navy mb-2">Event Duration (hours)</label>
                        <input 
                            type="number" 
                            name="duration" 
                            value={inputs.duration}
                            onChange={handleInputChange}
                            placeholder="e.g. 8" 
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="activity" className="block text-sm font-bold text-aegis-navy mb-2">Event Category</label>
                        <select 
                            name="activity" 
                            value={inputs.activity}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition"
                        >
                            <option value="1">Seated / Low-Risk (e.g., conference)</option>
                            <option value="2">Standing / Social (e.g., food festival)</option>
                            <option value="3">Music / High-Energy (e.g., concert)</option>
                            <option value="sport">Sporting Event</option> 
                        </select>
                    </div>
                    
                    {inputs.activity === 'sport' && (
                         <div className="animate-fade-in-up">
                            <label htmlFor="sportType" className="block text-sm font-bold text-aegis-navy mb-2">Sport Risk Level</label>
                            <select 
                                name="sportType" 
                                value={inputs.sportType}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition"
                            >
                                <option value="1">Low-Contact (e.g., Athletics, Cricket)</option>
                                <option value="3">Medium-Contact (e.g., Football, Hockey)</option>
                                <option value="5">High-Contact / High-Risk (e.g., Rugby, Motorsport)</option>
                            </select>
                        </div>
                    )}

                    <div>
                        <label htmlFor="intoxication" className="block text-sm font-bold text-aegis-navy mb-2">Alcohol/Drug Use</label>
                        <select 
                            name="intoxication" 
                            value={inputs.intoxication}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-aegis-teal focus:border-transparent outline-none transition"
                        >
                            <option value="1">None / Minimal</option>
                            <option value="2">Social Drinking</option>
                            <option value="3">Widespread Intoxication Expected</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-center mb-8 bg-blue-50 p-4 rounded-lg">
                    <input 
                        id="camping" 
                        name="camping" 
                        type="checkbox" 
                        checked={inputs.camping}
                        onChange={handleInputChange}
                        className="h-5 w-5 rounded border-slate-300 text-aegis-teal focus:ring-aegis-teal"
                    />
                    <label htmlFor="camping" className="ml-3 text-sm font-medium text-aegis-navy">Is there public camping on-site?</label>
                </div>

                <div className="text-center">
                    <Button onClick={calculateRisk} variant="primary" size="lg" className="w-full md:w-auto px-12">
                        Calculate Risk Profile
                    </Button>
                </div>
            </div>

            {result && (
                <div id="results-section" className="mt-12 animate-fade-in-up space-y-8">
                     <div className="p-8 bg-white rounded-xl shadow-lg border-l-8 border-aegis-teal">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                             <div>
                                <h2 className="text-2xl font-bold text-aegis-navy">Estimated Result</h2>
                                <div className="mt-2 text-3xl font-heading font-extrabold text-aegis-teal">{result.info.title}</div>
                             </div>
                             <div className="text-right hidden md:block">
                                <p className="font-bold text-sm text-aegis-navy">Aegis Medical Solutions</p>
                                <p className="text-xs text-slate-500">Official Assessment Tool</p>
                             </div>
                        </div>
                        <p className="mt-4 text-slate-700 text-lg leading-relaxed border-t border-slate-100 pt-4">
                            {result.info.description}
                        </p>
                    </div>

                    <div className="p-8 bg-white rounded-xl shadow-lg">
                        <h3 className="font-bold text-aegis-navy text-xl flex items-center mb-6">
                            <CalcIcon className="mr-2 text-aegis-teal" />
                            Sample Staffing Recommendation
                        </h3>
                        <ul className="space-y-3 mb-6">
                            {result.pkg.staff.map((s: any, idx: number) => {
                                const count = s.ratio ? Math.max(s.min, Math.ceil(result.attendees / s.ratio)) : s.min;
                                return (
                                    <li key={idx} className="flex items-center p-3 bg-slate-50 rounded-lg">
                                        <span className="inline-flex items-center justify-center bg-aegis-teal text-white font-bold rounded-full h-8 w-8 mr-4 shadow-sm">
                                            {count}
                                        </span> 
                                        <span className="font-medium text-slate-700">{s.role}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        {result.pkg.vehicles && (
                            <div className="flex items-start p-4 bg-blue-50 text-blue-800 rounded-lg text-sm mb-4">
                                <Info className="w-5 h-5 mr-2 flex-shrink-0" />
                                <strong>Vehicle Note:</strong> {result.pkg.vehicles}
                            </div>
                        )}
                        {result.pkg.notes && (
                            <p className="text-sm text-slate-500 italic"><strong>Note:</strong> {result.pkg.notes}</p>
                        )}
                    </div>

                    <div className={`p-8 rounded-xl border-2 ${result.tier >= 3 ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
                         <h3 className={`font-bold text-xl flex items-center mb-6 ${result.tier >= 3 ? 'text-green-800' : 'text-amber-800'}`}>
                            Risk vs. Benefit Analysis
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/60 p-5 rounded-lg">
                                <h4 className="font-bold text-green-700 flex items-center mb-3">
                                    <CheckCircle className="w-5 h-5 mr-2" /> Benefits
                                </h4>
                                <ul className="space-y-2 list-disc list-inside text-sm text-slate-700">
                                    {result.pkg.analysis.benefits.map((b: string, i: number) => <li key={i}>{b}</li>)}
                                </ul>
                            </div>
                            <div className="bg-white/60 p-5 rounded-lg">
                                <h4 className="font-bold text-red-700 flex items-center mb-3">
                                    <AlertTriangle className="w-5 h-5 mr-2" /> Risks
                                </h4>
                                <ul className="space-y-2 list-disc list-inside text-sm text-slate-700">
                                    {result.pkg.analysis.risks.map((r: string, i: number) => <li key={i}>{r}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-aegis-navy text-white p-8 rounded-xl shadow-xl flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Ready for a Formal Quote?</h3>
                                <p className="text-slate-300 mb-6">Let our expert team design a bespoke and resilient medical plan for your event based on this profile.</p>
                            </div>
                            <Button to="/get-quote" variant="secondary" className="w-full text-center justify-center">
                                Get a Formal Quote
                            </Button>
                        </div>
                        <div className="bg-white border-2 border-aegis-teal p-8 rounded-xl shadow-md flex flex-col justify-between">
                             <div>
                                <h3 className="text-xl font-bold text-aegis-navy mb-2">Need more guidance?</h3>
                                <p className="text-slate-600 mb-6">Check our Organiser's Guide to understand legal duties and qualifications.</p>
                            </div>
                            <Button to="/guide" variant="outline" className="w-full text-center justify-center">
                                View Medical Guide
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            
            <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto">
                <p><strong>Disclaimer:</strong> This tool provides an estimate based on standard industry guidelines (The Purple Guide) and is for informational purposes only. It is not a substitute for a formal, professional risk assessment.</p>
            </div>
        </div>
    </div>
  );
};

export default Calculator;