
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1628533225734-79e71511283d?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          alt="Stormy sky background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 animate-bounce shadow-lg shadow-red-900/50">
          ⚠️ Critical Storm Warning Active
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6 uppercase tracking-tight">
          24/7 Emergency <br/>
          <span className="text-orange-500">Storm Damage</span> Roofing
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
          Is your roof leaking? Don't wait. We have emergency crews standing by for immediate tarping and rapid damage repair.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="tel:5559117663" 
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-xl font-extrabold px-12 py-5 rounded-xl shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 border-b-4 border-red-800"
          >
            CALL NOW: (555) 911-ROOF
          </a>
          <a 
            href="#scanner" 
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md text-xl font-bold px-12 py-5 rounded-xl border border-white/30 transition-all flex items-center justify-center gap-3"
          >
            Request Inspection
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 opacity-80">
          <div className="flex items-center gap-2 text-white font-semibold">
            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            60-Min Response Time
          </div>
          <div className="flex items-center gap-2 text-white font-semibold">
            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Insurance Claims Pros
          </div>
          <div className="flex items-center gap-2 text-white font-semibold">
            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Zero Out-of-Pocket
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
