
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-600 p-1.5 rounded-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">
                Storm<span className="text-orange-500">Shield</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 font-medium">
              The nation's most trusted emergency roofing network. Over 15,000 storm claims handled successfully.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-orange-600 transition cursor-pointer">
                <span className="font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-orange-600 transition cursor-pointer">
                <span className="font-bold">X</span>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-orange-600 transition cursor-pointer">
                <span className="font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-widest text-orange-500">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><a href="#" className="hover:text-white transition">Emergency Tarping</a></li>
              <li><a href="#" className="hover:text-white transition">Damage Assessment</a></li>
              <li><a href="#" className="hover:text-white transition">Insurance Help</a></li>
              <li><a href="#" className="hover:text-white transition">Roof Replacement</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-widest text-orange-500">Locations</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li>Texas Headquarters</li>
              <li>Florida Rapid-Response</li>
              <li>Midwest Hub (Oklahoma)</li>
              <li>Carolinas Dispatch</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-widest text-orange-500">Contact</h4>
            <div className="space-y-6">
              <a href="tel:5559117663" className="block p-4 bg-white/5 rounded-xl border border-white/10 hover:border-orange-500 transition group">
                <p className="text-xs text-orange-500 font-black uppercase mb-1">Emergency Dispatch</p>
                <p className="text-xl font-black group-hover:text-orange-500">(555) 911-ROOF</p>
              </a>
              <div className="flex items-center gap-3 text-slate-400 font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                help@stormshield.com
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-bold gap-4">
          <p>© 2024 StormShield Emergency Roofing. All Rights Reserved.</p>
          <div className="flex gap-8 uppercase tracking-widest text-xs">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
