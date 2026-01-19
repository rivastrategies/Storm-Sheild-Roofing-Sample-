
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-2 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tighter uppercase sm:text-2xl">
              Storm<span className="text-orange-500">Shield</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 font-semibold">
            <a href="#services" className="hover:text-orange-500 transition">Services</a>
            <a href="#insurance" className="hover:text-orange-500 transition">Insurance Help</a>
            <a href="#scanner" className="hover:text-orange-500 transition">Request Inspection</a>
          </div>

          <div className="flex items-center">
            <a 
              href="tel:5559117663" 
              className="bg-red-600 animate-pulse-red px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-red-700 transition sm:px-6 sm:py-3"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 2V3z" />
              </svg>
              <span className="hidden sm:inline">24/7 DISPATCH:</span> (555) 911-ROOF
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
