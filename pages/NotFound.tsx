import React from 'react';
import { AlertTriangle, Home, FileText, Phone } from 'lucide-react';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
         <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-aegis-teal/10 mb-6">
            <AlertTriangle className="h-10 w-10 text-aegis-teal" />
         </div>
         <h2 className="text-center text-3xl font-heading font-bold tracking-tight text-aegis-navy">
            Page Not Found
         </h2>
         <p className="mt-2 text-center text-sm text-slate-500">
            Error 404
         </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-10 px-6 shadow-xl shadow-slate-200 rounded-xl sm:px-10 border border-slate-100">
            <div className="space-y-6 text-center">
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                    We have recently upgraded our website to serve you better.
                </p>
                <p className="text-slate-600">
                     The page you are looking for may have been moved or renamed during our improvements. We apologize for the inconvenience.
                </p>
                
                <div className="pt-6 space-y-3">
                    <Button to="/" variant="primary" className="w-full justify-center">
                        <Home className="w-4 h-4 mr-2" /> Return to Homepage
                    </Button>
                    <Button to="/services" variant="outline" className="w-full justify-center">
                        <FileText className="w-4 h-4 mr-2" /> View Our Services
                    </Button>
                </div>
                
                <div className="relative mt-10">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-slate-200" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-white px-2 text-sm text-slate-500 uppercase tracking-wide">Need assistance?</span>
                    </div>
                </div>

                <div className="mt-4">
                     <Button to="/contact" variant="secondary" size="sm" className="w-full justify-center">
                        <Phone className="w-4 h-4 mr-2" /> Contact Support
                    </Button>
                </div>
            </div>
        </div>
        <div className="text-center mt-6">
            <p className="text-slate-400 text-xs">Aegis Medical Solutions &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;