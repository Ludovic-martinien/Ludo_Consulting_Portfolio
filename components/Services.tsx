
import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onServiceClick?: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-24 bg-brand-gray/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-display font-bold">Nos Domaines d'<span className="text-brand-cyan">Intervention</span></h2>
          <p className="text-gray-400">
            Une expertise complète pour couvrir l'ensemble de votre cycle de développement et de conseil stratégique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="glass-card p-8 rounded-3xl hover:border-brand-indigo/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-8xl select-none">{service.icon}</span>
              </div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 bg-brand-dark border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4 group-hover:text-brand-cyan transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <button 
                onClick={() => onServiceClick?.(service.id)}
                className="inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-colors"
              >
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
