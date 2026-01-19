
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DamageScanner from './components/DamageScanner';
import InsuranceHelp from './components/InsuranceHelp';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple check for smooth scrolling and intersection observers could go here if needed.
  
  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-500 selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Urgent Ticker */}
        <div className="bg-red-700 py-3 overflow-hidden whitespace-nowrap border-y border-red-800">
          <div className="flex animate-[marquee_20s_linear_infinite] gap-12 items-center">
            {[1,2,3,4,5,6].map(i => (
              <span key={i} className="text-white font-black uppercase text-sm tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                LIVE DISPATCH ACTIVE IN DALLAS, TX • RAPID HAIL DAMAGE RESPONSE • INSURANCE PROS ON-SITE
              </span>
            ))}
          </div>
        </div>

        <Services />
        <DamageScanner />
        
        {/* Urgent Call-To-Action Block */}
        <section className="bg-orange-500 py-16">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-2 uppercase italic">
                DON'T LET THE RAIN <br/>DESTROY YOUR HOME.
              </h2>
              <p className="text-xl text-slate-900 font-bold opacity-80">
                Call now for immediate tarping and prevent interior water damage.
              </p>
            </div>
            <a 
              href="tel:5559117663" 
              className="bg-slate-900 text-white px-12 py-6 rounded-2xl text-2xl font-black shadow-2xl hover:bg-slate-800 transition transform hover:-rotate-1 active:scale-95"
            >
              (555) 911-ROOF
            </a>
          </div>
        </section>

        <InsuranceHelp />

        {/* Testimonials Ticker */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Jenkins",
                    loc: "Houston, TX",
                    text: "The storm hit at 2AM. StormShield had a crew tarping my roof by 3:15AM. Absolutely incredible service."
                  },
                  {
                    name: "Mark Thompson",
                    loc: "Oklahoma City, OK",
                    text: "My insurance agent tried to deny half the claim. StormShield's AI report and public adjusters got me the full replacement!"
                  },
                  {
                    name: "David Rivera",
                    loc: "Orlando, FL",
                    text: "Fast, professional, and they handled all the paperwork. I didn't pay a dime out of pocket."
                  }
                ].map((t, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative shadow-sm">
                    <div className="text-orange-500 text-4xl font-serif absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-slate-700 italic font-medium mb-6 relative z-10">{t.text}</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                      <div>
                        <p className="font-black text-slate-900">{t.name}</p>
                        <p className="text-sm text-orange-600 font-bold uppercase">{t.loc}</p>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      ` }} />
    </div>
  );
};

export default App;
