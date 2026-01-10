
import React from 'react';
import { View } from '../App';
import { SERVICES } from '../constants';

interface ServiceDetailProps {
  id: string;
  onNavigate: (view: View) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ id, onNavigate }) => {
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <div className="pt-32 text-center">Service non trouvé.</div>;

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => onNavigate('home')} 
          className="mb-8 flex items-center gap-2 text-brand-cyan hover:text-white transition-colors font-bold"
        >
          ← Retour
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="w-20 h-20 rounded-3xl bg-brand-indigo/20 border border-brand-indigo/30 flex items-center justify-center text-5xl shadow-2xl">
              {service.icon}
            </div>
            <h1 className="text-5xl font-display font-extrabold">{service.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {service.description} Nous apportons une vision à 360° pour transformer cette expertise en valeur ajoutée concrète pour votre structure.
            </p>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold border-l-4 border-brand-cyan pl-4">Ce que nous apportons :</h3>
              <ul className="grid gap-4">
                {[
                  "Analyse approfondie de l'écosystème",
                  "Mise en œuvre agile et itérative",
                  "Optimisation des performances et scalabilité",
                  "Accompagnement post-déploiement"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400 bg-white/5 p-4 rounded-2xl">
                    <span className="text-brand-cyan">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-card p-10 rounded-[40px] border border-white/10 space-y-8 sticky top-32">
            <h3 className="text-2xl font-bold">Prêt à approfondir ?</h3>
            <p className="text-gray-400">
              Chaque projet est unique. Discutez avec nos experts pour définir une stratégie adaptée à vos besoins spécifiques.
            </p>
            <div className="space-y-4">
               <button 
                onClick={() => onNavigate('start')}
                className="w-full bg-brand-indigo py-4 rounded-xl font-bold shadow-xl shadow-brand-indigo/30 hover:scale-[1.02] transition-transform"
               >
                 Demander une étude
               </button>
               <button 
                onClick={() => onNavigate('home')}
                className="w-full border border-white/10 py-4 rounded-xl font-bold hover:bg-white/5 transition-colors"
               >
                 Parler à un conseiller
               </button>
            </div>
            <div className="pt-6 border-t border-white/5 text-center">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Expertise Garantie par Ludo_Consulting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
