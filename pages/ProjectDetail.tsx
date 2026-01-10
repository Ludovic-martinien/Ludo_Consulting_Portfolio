
import React from 'react';
import { View } from '../App';
import { PROJECTS } from '../constants';

interface ProjectDetailProps {
  id: string;
  onNavigate: (view: View) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ id, onNavigate }) => {
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <div className="pt-32 text-center">Projet non trouvé.</div>;

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => onNavigate('home')} 
          className="mb-8 flex items-center gap-2 text-brand-indigo hover:text-white transition-colors font-bold"
        >
          ← Retour au Portfolio
        </button>

        <div className="relative h-[60vh] rounded-[40px] overflow-hidden mb-16 shadow-2xl">
          <img src={project.imageUrl} className="w-full h-full object-cover" alt={project.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12">
            <span className="px-4 py-1.5 bg-brand-cyan text-brand-dark font-bold rounded-full text-xs uppercase tracking-widest mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white">{project.title}</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-brand-cyan">Le Challenge</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                {project.description} Nous avons dû repenser l'architecture existante pour répondre aux exigences de performance et de sécurité critiques demandées par le client.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-brand-indigo">Notre Solution</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <h4 className="font-bold mb-2">Innovation Tech</h4>
                  <p className="text-gray-400 text-sm italic">Utilisation de {project.tech.join(', ')}</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <h4 className="font-bold mb-2">Impact Direct</h4>
                  <p className="text-gray-400 text-sm">Amélioration de 45% du temps de traitement des données.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-3xl glass-card border border-white/10">
              <h3 className="text-xl font-bold mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-2 bg-brand-indigo/10 border border-brand-indigo/30 rounded-xl text-brand-indigo font-bold text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-brand-indigo text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Besoin d'un résultat similaire ?</h3>
              <p className="opacity-80 mb-6 text-sm">Ludo_Consulting applique ces méthodologies éprouvées à votre propre contexte métier.</p>
              <button 
                onClick={() => onNavigate('start')}
                className="w-full bg-white text-brand-indigo py-3 rounded-xl font-bold hover:scale-[1.02] transition-transform"
              >
                Démarrer une collaboration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
