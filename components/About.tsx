
import React from 'react';
import { View } from '../App';

interface AboutProps {
  onNavigate: (view: View) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const stats = [
    { label: 'Projets Livrés', value: '10+' },
    { label: 'Experts Tech', value: '7' },
    { label: 'Satisfaction Client', value: '90%' },
    { label: 'Années d\'Expérience', value: '7' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="space-y-4 pt-12">
                <img src="/assets/img/1.jpeg" className="rounded-2xl w-full h-64 object-cover shadow-2xl" alt="About 1" />
                <img src="/assets/img/7.jpeg" className="rounded-2xl w-full h-40 object-cover shadow-2xl" alt="About 2" />
             </div>
             <div className="space-y-4">
                <img src="/assets/img/9.jpeg" className="rounded-2xl w-full h-40 object-cover shadow-2xl" alt="About 3" />
                <img src="/assets/img/10.jpeg" className="rounded-2xl w-full h-64 object-cover shadow-2xl" alt="About 4" />
             </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-display font-bold">Votre Partenaire de <span className="text-brand-indigo">Confiance</span> au Gabon</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Chez Ludo_Consulting, nous croyons que la technologie est un levier puissant pour transformer les idées en réalités pérennes. Notre mission est de simplifier la complexité numérique.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-brand-cyan font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="pt-4">
               <button 
                onClick={() => onNavigate('vision')}
                className="flex items-center gap-2 text-white font-bold hover:text-brand-indigo transition-colors group"
               >
                 Découvrir notre vision 
                 <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
