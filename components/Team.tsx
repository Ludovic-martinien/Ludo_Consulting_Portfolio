
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold mb-4">L'Équipe d'<span className="text-brand-indigo">Experts</span></h2>
            <p className="text-gray-400">Des talents multidisciplinaires unis par une même passion : l'excellence technologique.</p>
          </div>
          <div className="hidden md:block">
            <div className="px-6 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-cyan">
              Innovation Hub Gabon
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {TEAM.map((member, i) => (
            <div key={i} className="group relative">
              <div className="absolute inset-0 bg-brand-indigo/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass-card rounded-[40px] p-8 border border-white/5 group-hover:border-brand-indigo/30 transition-all duration-500 text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-brand-cyan/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full border-4 border-brand-dark shadow-2xl relative z-10 mx-auto grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-brand-cyan text-sm font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-gray-400 text-sm leading-relaxed">{member.specialty}</p>
                </div>
                <div className="mt-6 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <button className="text-white/40 hover:text-brand-indigo">LinkedIn</button>
                  <button className="text-white/40 hover:text-brand-cyan">Expertise</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
