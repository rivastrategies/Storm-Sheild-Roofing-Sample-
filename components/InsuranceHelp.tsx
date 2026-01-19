
import React from 'react';

const InsuranceHelp: React.FC = () => {
  return (
    <section id="insurance" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/10 skew-x-12 transform translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              STOP FIGHTING <br/>THE <span className="text-orange-500">ADJUSTERS.</span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Filing a claim can be a nightmare. We provide expert public adjusters and documentation teams to maximize your payout. Most homeowners receive 40% more when using our certified damage reports.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Direct Billing to Carriers",
                "Full Property Inspection",
                "No Upfront Deductibles",
                "Supplement Expertise"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="bg-orange-500 rounded-full p-1 shadow-lg shadow-orange-900/40">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl text-slate-900 shadow-2xl">
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Claim Support Request</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-black text-slate-500 uppercase mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-orange-500 outline-none transition font-bold"
                />
              </div>
              <div>
                <label className="block text-sm font-black text-slate-500 uppercase mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="(555) 000-0000"
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-orange-500 outline-none transition font-bold"
                />
              </div>
              <div>
                <label className="block text-sm font-black text-slate-500 uppercase mb-2">Insurance Carrier</label>
                <select className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-orange-500 outline-none transition font-bold">
                  <option>Select Carrier...</option>
                  <option>State Farm</option>
                  <option>Allstate</option>
                  <option>Progressive</option>
                  <option>Liberty Mutual</option>
                  <option>Other</option>
                </select>
              </div>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-5 rounded-xl text-xl font-black uppercase tracking-wider transition-all transform hover:scale-[1.02] shadow-xl border-b-4 border-orange-800">
                Send Request
              </button>
              <p className="text-center text-sm text-slate-400 font-semibold mt-4">
                🔒 Your data is encrypted and secure.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceHelp;
