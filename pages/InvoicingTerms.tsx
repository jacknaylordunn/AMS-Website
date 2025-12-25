import React from 'react';
import { FileText, Shield, Phone, Mail } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';

const InvoicingTerms: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-aegis-navy text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-aegis-teal/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4 text-aegis-teal">
            <FileText className="w-6 h-6" />
            <span className="font-bold tracking-wider uppercase text-sm">Legal Documentation</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">Invoicing Terms & Conditions</h1>
          <p className="text-lg text-slate-300">
            Aegis Medical Solutions Limited. Last updated: February 2025.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
            <p className="text-slate-600 mb-8 text-lg">
                These terms and conditions apply to all invoices issued by Aegis Medical Solutions Limited ("we", "us", "our") to our clients ("you", "your").
            </p>

            <div className="space-y-10">
                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">1. Payment Due Date</h2>
                    <div className="space-y-3 text-slate-700">
                        <p><strong>1.1.</strong> All invoices are due for payment by the "Due Date" specified on the invoice.</p>
                        <p><strong>1.2.</strong> Unless otherwise agreed in writing, the Due Date will be 15 days from the "Invoice Date".</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">2. Payment Methods</h2>
                    <div className="space-y-3 text-slate-700">
                        <p><strong>2.1.</strong> Payments can be made via BACS transfer to the bank account details provided on the invoice.</p>
                        <p><strong>2.2.</strong> We do not accept payment by cheque or cash unless explicitly agreed in advance.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">3. Late Payment</h2>
                    <div className="space-y-3 text-slate-700">
                        <p><strong>3.1.</strong> If payment is not received by the Due Date, we reserve the right to charge statutory interest on the overdue amount in accordance with the Late Payment of Commercial Debts (Interest) Act 1998, as amended and supplemented by the Late Payment of Commercial Debts Regulations 2002. This interest is calculated at 8% above the Bank of England base rate from the Due Date until the date payment is received in full.</p>
                        <p><strong>3.2.</strong> In addition to interest, we reserve the right to charge a fixed sum compensation for debt recovery costs, also in accordance with the Late Payment of Commercial Debts (Interest) Act 1998. This fixed sum will be:</p>
                        <ul className="list-disc pl-6 space-y-1 bg-slate-50 p-4 rounded-lg">
                            <li>For debts less than £1,000: <strong>£40</strong></li>
                            <li>For debts between £1,000 and £9,999.99: <strong>£70</strong></li>
                            <li>For debts of £10,000 or more: <strong>£100</strong></li>
                        </ul>
                        <p><strong>3.3.</strong> We may also suspend or terminate any further services or future bookings until all outstanding amounts, including interest and compensation, are paid in full.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">4. Invoice Queries and Disputes</h2>
                    <div className="space-y-3 text-slate-700">
                        <p><strong>4.1.</strong> If you have any queries or wish to dispute an invoice, you must notify us in writing within 7 days of the Invoice Date, clearly stating the reasons for the dispute and providing any supporting documentation.</p>
                        <p><strong>4.2.</strong> Failure to notify us of a dispute within this timeframe will result in the invoice being deemed accepted and payable in full by the Due Date.</p>
                        <p><strong>4.3.</strong> Any undisputed portion of an invoice must still be paid by the Due Date. We will work with you to resolve any disputed amounts promptly.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">5. Currency</h2>
                    <div className="space-y-3 text-slate-700">
                        <p><strong>5.1.</strong> All invoices are issued and payable in Great British Pounds (£GBP).</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">6. VAT</h2>
                    <div className="space-y-3 text-slate-700">
                        <p><strong>6.1.</strong> All prices quoted are exclusive of Value Added Tax (VAT). VAT will be added to the total invoice amount at the prevailing UK rate where applicable. Aegis Medical Solutions is not currently VAT registered in the UK.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">7. Confidentiality</h2>
                    <div className="space-y-3 text-slate-700">
                        <p><strong>7.1.</strong> All financial information and terms contained within this invoice are confidential and should not be disclosed to third parties without our prior written consent.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">8. Governing Law</h2>
                    <div className="space-y-3 text-slate-700">
                        <p><strong>8.1.</strong> These Invoicing Terms and Conditions, and any disputes or claims arising out of or in connection with them, shall be governed by and construed in accordance with the laws of England and Wales.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-heading font-bold text-aegis-navy mb-4 border-b border-slate-100 pb-2">9. Contact for Queries</h2>
                    <div className="space-y-3 text-slate-700 bg-blue-50 p-6 rounded-lg border border-blue-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <div>
                             <p><strong>9.1.</strong> For any questions regarding your invoice or these terms, please contact our accounts department:</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a href="mailto:invoicing@aegismedicalsolutions.co.uk" className="flex items-center text-aegis-blue font-bold hover:underline">
                                <Mail className="w-4 h-4 mr-2" /> invoicing@aegismedicalsolutions.co.uk
                            </a>
                            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center text-aegis-blue font-bold hover:underline">
                                <Phone className="w-4 h-4 mr-2" /> {COMPANY_INFO.phone}
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 text-center">
                <Button to="/contact" variant="outline">Contact Support</Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicingTerms;