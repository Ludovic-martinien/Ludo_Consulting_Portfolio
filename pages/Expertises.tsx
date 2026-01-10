
import React from 'react';
import { View } from '../App';
import { SERVICES } from '../constants';

const Expertises: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-display font-extrabold mb-6">Nos <span className="text-brand-cyan">Expertises</span></h1>
          <p className="text-xl text-gray-400">Une maîtrise complète du cycle de vie numérique pour garantir votre succès.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {SERVICES.map((s, idx) => (
            <div key={idx} className="p-12 rounded-[40px] bg-white/5 border border-white/10 hover:border-brand-indigo/40 transition-all flex flex-col md:flex-row gap-8 items-center">
              <div className="text-6xl">{s.icon}</div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="text-gray-400">{s.description}</p>
                <div className="flex gap-2">
                   <span className="px-3 py-1 bg-brand-indigo/20 text-brand-indigo text-xs font-bold rounded-full">Expertise Senior</span>
                   <span className="px-3 py-1 bg-brand-cyan/20 text-brand-cyan text-xs font-bold rounded-full">Support 24/7</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-brand-indigo/20 to-brand-cyan/20 p-12 rounded-[40px] border border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'une expertise spécifique ?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Nous adaptons nos équipes en fonction de la complexité technique de votre projet.</p>
          <button onClick={() => onNavigate('start')} className="px-8 py-4 bg-white text-brand-dark rounded-xl font-bold hover:scale-105 transition-transform">Consulter nos experts</button>
        </div>
      </div>
    </div>
  );
};

export default Expertises;
