
import React from 'react';
import { View } from '../App';

const Blog: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  const articles = [
    { title: "L'IA au service du business gabonais", date: "01 Jan 2026", tag: "Innovation", img: "/assets/img/L'IA au service du business gabonais.png" },
    { title: "Pourquoi choisir React pour votre prochain projet ?", date: "02 Nov 2025", tag: "Tech", img: "/assets/img/React pour votre prochain projet.png" },
    { title: "Sécurité des données : Les enjeux de 2026", date: "20 Dec 2025", tag: "Cyber", img: "/assets/img/Sécurité des données  Les enjeux de 2026.png" }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-display font-extrabold mb-12">Le Mag <span className="text-brand-indigo">Innovation</span></h1>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-video">
                <img src={art.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={art.title} />
                <span className="absolute top-4 left-4 bg-brand-indigo px-3 py-1 rounded-full text-xs font-bold">{art.tag}</span>
              </div>
              <p className="text-brand-cyan text-sm font-bold mb-2">{art.date}</p>
              <h3 className="text-xl font-bold group-hover:text-brand-indigo transition-colors">{art.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
