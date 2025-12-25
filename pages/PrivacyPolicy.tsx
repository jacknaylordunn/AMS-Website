import React from 'react';
import { ShieldCheck, Mail, Phone } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-aegis-navy text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-aegis-teal/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4 text-aegis-teal">
            <ShieldCheck className="w-6 h-6" />
            <span className="font-bold tracking-wider uppercase text-sm">Data Protection</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-300">
            Effective Date: February 2025.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
            <p className="text-slate-600 mb-8 text-lg">
                Aegis Medical Solutions Ltd ("we", "us", "our") is committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.
            </p>

            <div className="space-y-10">
                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">1. Who We Are</h2>
                    <div className="space-y-3 text-slate-700">
                        <p>For the purposes of the Data Protection Act 2018 and the General Data Protection Regulation (GDPR), the Data Controller is <strong>Aegis Medical Solutions Ltd</strong>.</p>
                        <p><strong>Registered Address:</strong> Thornhill Court, London Road, Headington, Oxford, OX3 9GJ.</p>
                        <p><strong>Company Number:</strong> {COMPANY_INFO.companyNumber}</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">2. Information We Collect</h2>
                    <div className="space-y-3 text-slate-700">
                        <p>We may collect and process the following data about you:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Identity Data:</strong> First name, last name, job title.</li>
                            <li><strong>Contact Data:</strong> Email address, telephone numbers, billing address, delivery address.</li>
                            <li><strong>Event Data:</strong> Details about events you are organising (dates, locations, attendee numbers, risk profiles).</li>
                            <li><strong>Technical Data:</strong> Internet Protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">3. How We Use Your Data</h2>
                    <div className="space-y-3 text-slate-700">
                        <p>We use your data for the following specific purposes:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>To provide you with the medical services, risk assessments, and quotes you request.</li>
                            <li>To manage our relationship with you (e.g., invoicing, notifying you about changes to terms).</li>
                            <li>To comply with legal or regulatory obligations (e.g., keeping clinical records).</li>
                            <li>To improve our website and services.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">4. Legal Basis for Processing</h2>
                    <div className="space-y-3 text-slate-700">
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Performance of Contract:</strong> Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li><strong>Legal Obligation:</strong> Where we need to comply with a legal or regulatory obligation.</li>
                            <li><strong>Legitimate Interests:</strong> Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        </ul>
                    </div>
                </section>

                 <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">5. Data Retention</h2>
                    <div className="space-y-3 text-slate-700">
                        <p>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
                        <p>By law, we have to keep basic information about our customers (including Contact, Identity, Financial and Transaction Data) for six years after they cease being customers for tax purposes.</p>
                        <p>Clinical records generated during events are retained in accordance with NHS Records Management Code of Practice 2021.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">6. Your Rights</h2>
                    <div className="space-y-3 text-slate-700">
                        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Request access to your personal data.</li>
                            <li>Request correction of your personal data.</li>
                            <li>Request erasure of your personal data.</li>
                            <li>Object to processing of your personal data.</li>
                            <li>Request restriction of processing your personal data.</li>
                            <li>Request transfer of your personal data.</li>
                            <li>Right to withdraw consent.</li>
                        </ul>
                        <p>If you wish to exercise any of the rights set out above, please contact us.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">7. Contact Us</h2>
                    <div className="space-y-3 text-slate-700 bg-blue-50 p-6 rounded-lg border border-blue-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <div>
                             <p><strong>7.1.</strong> For any privacy-specific questions, please contact our Data Protection Officer:</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center text-aegis-blue font-bold hover:underline">
                                <Mail className="w-4 h-4 mr-2" /> {COMPANY_INFO.email}
                            </a>
                            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center text-aegis-blue font-bold hover:underline">
                                <Phone className="w-4 h-4 mr-2" /> {COMPANY_INFO.phone}
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 text-center">
                <Button to="/" variant="outline">Return Home</Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;