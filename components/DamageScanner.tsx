
import React, { useState, useRef } from 'react';

const DamageScanner: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call for form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="scanner" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
              EXPERT INSPECTION
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
              Get a Professional <br/><span className="text-orange-600 underline">Damage Assessment</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Upload a clear photo of your roof damage and our expert inspectors will review it manually. We provide rapid feedback and can schedule an on-site evaluation within 24 hours.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Certified roof inspection report",
                "On-site hail & wind evaluation",
                "Detailed repair cost estimate",
                "Direct insurance claim support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 font-semibold text-slate-800">
                  <div className="bg-orange-500 rounded-full p-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed border-slate-300 shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center">
                  <div className="mb-6">
                    {file ? (
                      <div className="relative inline-block">
                        <img 
                          src={URL.createObjectURL(file)} 
                          alt="Damage preview" 
                          className="max-h-64 rounded-xl shadow-lg border-4 border-white"
                        />
                        <button 
                          type="button"
                          onClick={() => setFile(null)}
                          className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full p-1 shadow-lg"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="cursor-pointer group bg-white border-2 border-dashed border-slate-300 rounded-2xl p-12 transition hover:border-orange-500 hover:bg-orange-50/50"
                      >
                        <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                          <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                        </div>
                        <p className="text-lg font-bold text-slate-900">Upload Damage Photo (Optional)</p>
                        <p className="text-sm text-slate-500">JPG, PNG up to 10MB</p>
                      </div>
                    )}
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileChange} 
                      className="hidden" 
                      accept="image/*" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-orange-500 outline-none"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-orange-500 outline-none"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Property Address" 
                  required 
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-orange-500 outline-none"
                />

                <button 
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-4 rounded-xl text-xl font-bold transition-all shadow-lg ${
                    submitting 
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                    : 'bg-orange-600 text-white hover:bg-orange-700 hover:-translate-y-1'
                  }`}
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Request...
                    </span>
                  ) : "Submit Inspection Request"}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">REQUEST RECEIVED!</h3>
                <p className="text-lg text-slate-600 mb-8">
                  Our dispatch team is reviewing your details. An expert inspector will call you within the hour to coordinate next steps.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition"
                >
                  Back to Form
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DamageScanner;
