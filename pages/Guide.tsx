import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { BookOpen, AlertTriangle, ShieldCheck, FileCheck, Stethoscope, ArrowRight, TrendingUp, Users, Scale, Activity } from 'lucide-react';
import Button from '../components/Button';

const Guide: React.FC = () => {
  const phemChartRef = useRef<HTMLCanvasElement>(null);
  const roiChartRef = useRef<HTMLCanvasElement>(null);
  const chartInstances = useRef<any[]>([]);

  useEffect(() => {
    // Destroy previous charts to prevent canvas reuse errors
    chartInstances.current.forEach(chart => chart.destroy());
    chartInstances.current = [];

    // --- Chart 1: Clinical Capability (Vertical Ladder) ---
    // Visualizes the difference in scope of practice between grades
    if (phemChartRef.current) {
      const phemChart = new Chart(phemChartRef.current, {
        type: 'bar',
        data: {
            labels: ['First Aider', 'Responder', 'Technician', 'Paramedic', 'Doctor'],
            datasets: [{
                label: 'Clinical Scope of Practice',
                // Arbitrary score representing autonomy, drugs, and interventions
                data: [15, 35, 60, 85, 100], 
                backgroundColor: [
                    '#cbd5e1', // Slate 300 (First Aid)
                    '#5eead4', // Teal 300 (Responder)
                    '#0d9488', // Teal 600 (Tech)
                    '#0f172a', // Navy (Paramedic)
                    '#1e40af'  // Blue (Doctor)
                ],
                borderRadius: 4,
                barPercentage: 0.6,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    padding: 12,
                    titleFont: { family: 'Montserrat', size: 14 },
                    bodyFont: { family: 'Inter', size: 13 },
                    callbacks: {
                        label: (context) => {
                            const descriptions = [
                                'Basic Life Support (BLS) Only',
                                'Oxygen, AED, Basic Trauma',
                                'Intermediate Life Support & Drugs',
                                'Advanced Life Support (ALS) & Autonomy',
                                'Full Clinical Authority & Diagnostics'
                            ];
                            return descriptions[context.dataIndex];
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: { color: '#f1f5f9' },
                    ticks: { display: false }, // Hide numbers to keep it abstract
                    title: { display: true, text: 'Clinical Authority & Skill Level', font: { weight: 'bold', family: 'Inter' } }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { weight: 'bold', family: 'Montserrat' }, color: '#334155' }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
      });
      chartInstances.current.push(phemChart);
    }

    // --- Chart 2: Patient Outcomes (Stacked Horizontal Bar) ---
    // Visualizes the reduction in hospital transfers
    if (roiChartRef.current) {
        const roiChart = new Chart(roiChartRef.current, {
            type: 'bar',
            data: {
                labels: ['Basic First Aid Only', 'Aegis Specialist Team'],
                datasets: [
                    {
                        label: 'Hospital Transfer Required',
                        data: [28, 4], // High transfer rate vs Low transfer rate
                        backgroundColor: '#ef4444', // Red
                        barThickness: 50,
                    },
                    {
                        label: 'Treated & Discharged On-Site',
                        data: [72, 96], // Remainder
                        backgroundColor: '#0d9488', // Teal
                        barThickness: 50,
                    }
                ]
            },
            options: {
                indexAxis: 'y', // Horizontal
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { usePointStyle: true, padding: 20, font: { family: 'Inter' } }
                    },
                    tooltip: {
                         backgroundColor: 'rgba(15, 23, 42, 0.9)',
                         padding: 12,
                         callbacks: {
                             label: (context) => `${context.dataset.label}: ${context.raw}%`
                         }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        max: 100,
                        grid: { color: '#f1f5f9' },
                        ticks: { callback: (v) => `${v}%`, font: { family: 'Inter' } }
                    },
                    y: {
                        stacked: true,
                        grid: { display: false },
                        ticks: { font: { weight: 'bold', size: 13, family: 'Montserrat' }, color: '#0f172a' }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
        chartInstances.current.push(roiChart);
    }

    return () => {
        chartInstances.current.forEach(chart => chart.destroy());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // adjust for header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50 text-slate-800 font-sans">
        {/* Hero Header */}
        <header className="bg-aegis-navy text-white py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-aegis-teal rounded-full blur-[100px] opacity-20"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aegis-teal/20 border border-aegis-teal/30 text-xs font-bold uppercase tracking-wider mb-8 text-aegis-teal">
                            <BookOpen className="w-3 h-3" /> Event Safety Whitepaper
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 leading-tight">
                            The Event Organiser's<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aegis-teal to-blue-400">Guide to Medical Safety</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed font-light">
                            Navigate the complexities of The Purple Guide, understand clinical grades, and learn how professional medical cover protects both your attendees and your reputation.
                        </p>
                    </div>
                </div>
            </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Sticky Sidebar Navigation */}
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-28">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                            <h3 className="font-heading font-bold text-aegis-navy mb-6 text-sm uppercase tracking-wider">Contents</h3>
                            <nav className="space-y-1">
                                {[
                                    { id: 'legal', label: '1. Duty of Care', icon: Scale },
                                    { id: 'assessment', label: '2. Risk Assessment', icon: Activity },
                                    { id: 'qualifications', label: '3. Clinical Grades', icon: Users },
                                    { id: 'roi', label: '4. Outcomes & ROI', icon: TrendingUp },
                                    { id: 'checklist', label: '5. Provider Checklist', icon: FileCheck },
                                ].map((item) => (
                                    <button 
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="group w-full flex items-center px-3 py-3 text-sm font-medium text-slate-600 hover:text-aegis-teal hover:bg-slate-50 rounded-lg transition-all"
                                    >
                                        <item.icon className="w-4 h-4 mr-3 text-slate-400 group-hover:text-aegis-teal" />
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <Button to="/calculator" variant="primary" size="sm" className="w-full justify-center">
                                    Risk Calculator
                                </Button>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="lg:col-span-9 space-y-24">
                    
                    {/* Section 1: Legal */}
                    <section id="legal">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-aegis-navy text-white font-bold font-heading">1</span>
                            <h2 className="text-3xl font-heading font-bold text-aegis-navy">The Stakes Have Never Been Higher</h2>
                        </div>
                        
                        <div className="prose prose-lg text-slate-600 max-w-none mb-8">
                            <p>
                                Event medical cover is not a "box-ticking" exercise. Under the <strong>Health and Safety at Work Act 1974</strong>, organisers have a non-delegable statutory duty to ensure the safety of everyone at their event.
                            </p>
                            <p>
                                Relying on volunteers or under-qualified staff creates a liability vacuum. If an incident occurs and your medical provision is found to be inadequate compared to the risk profile, you face criminal prosecution and unlimited fines.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-l-4 border-aegis-teal shadow-sm">
                            <h3 className="font-bold text-aegis-navy mb-2 flex items-center">
                                <ShieldCheck className="w-5 h-5 mr-2 text-aegis-teal" /> Key Takeaway
                            </h3>
                            <p className="text-slate-600 italic">
                                "You can outsource the medical provision, but you cannot outsource the legal responsibility. Choose a partner that carries adequate Medical Malpractice insurance to protect your organisation."
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Assessment */}
                    <section id="assessment">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-aegis-navy text-white font-bold font-heading">2</span>
                            <h2 className="text-3xl font-heading font-bold text-aegis-navy">The Purple Guide Assessment</h2>
                        </div>
                        
                        <p className="text-slate-600 text-lg mb-10">
                            The industry standard for event safety (The Purple Guide) mandates a structured approach to determining medical needs. We break this down into three phases:
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { 
                                    step: "01", 
                                    title: "Profile Analysis", 
                                    desc: "We analyze the demographic (age, behaviour), the venue (terrain, access), and the activity (high-risk sport vs seated conference)." 
                                },
                                { 
                                    step: "02", 
                                    title: "Historical Data", 
                                    desc: "We review data from previous years or similar events to predict 'Patient Presentation Rates' (PPR) and likely injury types." 
                                },
                                { 
                                    step: "03", 
                                    title: "Resource Mapping", 
                                    desc: "We calculate the staffing mix required to handle the predicted PPR without being overwhelmed or relying on NHS 999." 
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 text-9xl font-bold text-slate-100 -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500">
                                        {item.step}
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-aegis-navy mb-3">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 3: Qualifications */}
                    <section id="qualifications">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-aegis-navy text-white font-bold font-heading">3</span>
                            <h2 className="text-3xl font-heading font-bold text-aegis-navy">Decoding Clinical Grades</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="prose prose-lg text-slate-600">
                                    <p>
                                        The term "Medic" is ambiguous and not legally protected. This can lead to organisers paying for a "Medic" but receiving a First Aider.
                                    </p>
                                    <p>
                                        At Aegis, we use the <strong>PHEM (Pre-hospital Emergency Medicine)</strong> framework to define capability. 
                                    </p>
                                    <p>
                                        The chart to the right illustrates the massive leap in clinical autonomy between a First Aider (who can only apply bandages and CPR) and a Paramedic (who can administer life-saving drugs and perform invasive procedures).
                                    </p>
                                </div>
                                <div className="mt-8 p-4 bg-slate-100 rounded-lg text-sm text-slate-700">
                                    <strong className="block text-aegis-navy mb-1">Why it matters:</strong>
                                    A Paramedic can treat an asthma attack or allergic reaction on-site. A First Aider can only call 999.
                                </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 h-[500px] flex flex-col">
                                <canvas ref={phemChartRef}></canvas>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: ROI */}
                    <section id="roi">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-aegis-navy text-white font-bold font-heading">4</span>
                            <h2 className="text-3xl font-heading font-bold text-aegis-navy">Outcomes & ROI</h2>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                            <div className="p-8 md:p-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                    <div className="h-[300px] w-full">
                                        <canvas ref={roiChartRef}></canvas>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-aegis-navy mb-4">The Cost of "Cheap" Cover</h3>
                                        <p className="text-slate-600 mb-6">
                                            Investing in a higher-skilled team yields a direct return on investment by reducing hospital transfers. 
                                        </p>
                                        <ul className="space-y-4">
                                            <li className="flex items-start">
                                                <TrendingUp className="w-5 h-5 text-red-500 mr-3 mt-1" />
                                                <span className="text-slate-700 text-sm">
                                                    <strong>Basic Cover:</strong> High transfer rate (28%). Every ambulance call-out disrupts your event and risks your license if local NHS capacity is overwhelmed.
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <TrendingUp className="w-5 h-5 text-green-500 mr-3 mt-1" />
                                                <span className="text-slate-700 text-sm">
                                                    <strong>Specialist Team:</strong> High "See & Treat" rate (96%). We treat minor injuries, suturing, and medical episodes on-site, keeping attendees at the event.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Checklist */}
                    <section id="checklist" className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-aegis-navy text-white font-bold font-heading">5</span>
                            <h2 className="text-3xl font-heading font-bold text-aegis-navy">Provider Due Diligence</h2>
                        </div>
                        <p className="text-slate-600 mb-8">Before instructing a medical provider, demand to see the following documents. If they cannot provide them, they are a risk to your event.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Medical Malpractice Insurance", desc: "Public Liability is not enough. They must be insured for clinical negligence." },
                                { title: "Clinical Governance Policy", desc: "Who is their Medical Director? What guidelines do they operate under?" },
                                { title: "Staff Qualification Logs", desc: "Proof of HCPC/NMC registration for all lead clinicians." },
                                { title: "CQC Registration (if applicable)", desc: "Required if they are transporting patients or providing ambulance services." },
                                { title: "Drug Protocols (PGDs)", desc: "Legal authority to possess and administer prescription medications." },
                                { title: "DBS Checks", desc: "Enhanced disclosure for all staff interacting with the public." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 bg-white rounded-lg border border-slate-200">
                                    <div className="flex-shrink-0 mt-1">
                                        <FileCheck className="w-5 h-5 text-aegis-teal" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-aegis-navy text-sm mb-1">{item.title}</h3>
                                        <p className="text-xs text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                         <div className="mt-10 p-6 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-4">
                            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-amber-900 mb-1">Warning Sign</h4>
                                <p className="text-sm text-amber-800">
                                    Be wary of providers who quote significantly below market rate. Professional medical equipment and registered staff are expensive assets. A "cheap" quote often means uninsured staff or lack of clinical governance.
                                </p>
                            </div>
                         </div>
                    </section>

                    {/* Bottom CTA */}
                    <section className="bg-aegis-navy rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-aegis-blue/20"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold font-heading mb-4">Secure Your Event Today</h2>
                            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                                Let Aegis Medical Solutions handle the complexity of medical planning. We provide a complete safety net, from risk assessment to post-event reporting.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button to="/contact" variant="secondary">Speak to a Planner</Button>
                                <Button to="/calculator" variant="white">Calculate Your Risk</Button>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    </div>
  );
};

export default Guide;