
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

interface PortfolioProps {
  onProjectClick?: (id: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectClick }) => {
  const [filter, setFilter] = useState('Tous');

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'Tous') return true;
    return project.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl space-y-4">
            <h2 className="text-4xl font-display font-bold">Études de <span className="text-brand-indigo">Cas</span></h2>
            <p className="text-gray-400">
              Découvrez comment nous avons aidé nos clients à relever leurs défis les plus complexes à travers des solutions innovantes.
            </p>
          </div>
          <div className="flex gap-4 p-1 bg-white/5 rounded-full border border-white/10">
             {['Tous', 'Digital', 'AI'].map((cat) => (
               <button 
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-6 py-2 rounded-full transition-all font-medium text-sm ${
                   filter === cat 
                   ? 'bg-brand-indigo text-white shadow-lg' 
                   : 'text-white/40 hover:text-white'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => onProjectClick?.(project.id)}
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 shadow-2xl aspect-[4/3] bg-brand-gray">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/70 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-xs font-bold text-brand-cyan mb-2 tracking-widest uppercase">{project.category}</div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h3>
                </div>
              </div>
              <div className="px-2 space-y-4">
                <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 text-[10px] font-bold rounded-full text-white/60 border border-white/5">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-500">Aucun projet trouvé pour cette catégorie.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
