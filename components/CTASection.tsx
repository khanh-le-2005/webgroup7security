import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-brand-blue py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-brand-navy font-bold tracking-widest uppercase mb-2">We delivering the best security solutions</p>
        <h2 className="text-4xl md:text-6xl font-black text-brand-navy uppercase mb-8">
          Don't be an easy target
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-brand-navy font-bold uppercase tracking-wider text-sm md:text-base">
          <div className="flex items-center"><span className="w-2 h-2 bg-brand-navy rounded-full mr-2"></span> Log Analysis</div>
          <div className="flex items-center"><span className="w-2 h-2 bg-brand-navy rounded-full mr-2"></span> Malware Detection</div>
          <div className="flex items-center"><span className="w-2 h-2 bg-brand-navy rounded-full mr-2"></span> Compliance</div>
          <div className="flex items-center"><span className="w-2 h-2 bg-brand-navy rounded-full mr-2"></span> Real-time Alerting</div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;