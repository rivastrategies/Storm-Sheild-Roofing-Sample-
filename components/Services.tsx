
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "24/7 Emergency Tarping",
      desc: "Prevent further water damage with our rapid-response tarping crews. We arrive within 60 minutes.",
      icon: "⚡",
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Hail & Wind Repair",
      desc: "Specialized repair teams for high-velocity wind damage and impact shingle replacement.",
      icon: "🌪️",
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Leak Detection",
      desc: "Advanced thermal imaging to find hidden moisture before it turns into dangerous mold.",
      icon: "🔍",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Insurance Claim Help",
      desc: "We work directly with your insurance company to ensure you get every penny you deserve.",
      icon: "📑",
      color: "bg-slate-900 text-white"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase">
            Battle-Tested <span className="text-red-600">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            When the storm hits, experience matters. Our specialized crews are trained for high-intensity emergency scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-slate-200 hover:border-orange-500 transition-all transform hover:-translate-y-2">
              <div className={`${s.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
