
import React, { useState } from 'react';
import { View } from '../App';

const StartProject: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ company: '', type: '', description: '' });
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    { title: "Discovery", desc: "Audit de vos besoins et définition des objectifs stratégiques.", icon: "🔍" },
    { title: "Stratégie", desc: "Élaboration de la roadmap technologique et budgétisation.", icon: "📈" },
    { title: "Design UI/UX", desc: "Conception centrée utilisateur pour une expérience mémorable.", icon: "🎨" },
    { title: "Développement", desc: "Codage agile avec les standards de sécurité les plus élevés.", icon: "🛠️" },
    { title: "Déploiement", desc: "Mise en production et formation de vos équipes.", icon: "🚀" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.company || !formData.description) return;

    // Persist to localStorage for Admin view
    const submissions = JSON.parse(localStorage.getItem('project_submissions') || '[]');
    const newSubmission = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      status: 'Nouveau'
    };
    localStorage.setItem('project_submissions', JSON.stringify([newSubmission, ...submissions]));

    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="text-center mb-20">
          <h1 className="text-5xl font-display font-extrabold mb-6">Lancer votre <span className="text-brand-indigo">Projet</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Suivez notre parcours structuré pour transformer votre idée en un produit d'exception.</p>
        </header>

        <div className="grid md:grid-cols-5 gap-4 mb-20">
          {steps.map((step, i) => (
            <div key={i} className="relative p-6 rounded-3xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{step.icon}</div>
              <h4 className="font-bold mb-2 text-brand-cyan">0{i+1}. {step.title}</h4>
              <p className="text-xs text-gray-500">{step.desc}</p>
              {i < 4 && <div className="hidden md:block absolute top-1/2 -right-4 text-white/20">→</div>}
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto glass-card rounded-[40px] p-12">
          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 bg-brand-cyan/20 text-brand-cyan rounded-full flex items-center justify-center text-4xl mx-auto animate-bounce">✓</div>
              <h2 className="text-3xl font-bold">Demande Envoyée !</h2>
              <p className="text-gray-400">Votre vision est maintenant entre nos mains. Un consultant vous contactera sous 24h pour organiser votre session de cadrage.</p>
              <div className="flex justify-center gap-4">
                <button onClick={() => onNavigate('home')} className="text-brand-indigo font-bold hover:underline">Retour Accueil</button>
                <button onClick={() => onNavigate('discussion-hub')} className="bg-brand-indigo px-6 py-2 rounded-xl font-bold">Brainstormer avec l'IA</button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-brand-indigo flex items-center justify-center text-sm">📝</span>
                Décrivez votre vision
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    required
                    placeholder="Nom de l'entreprise" 
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-brand-indigo outline-none transition-all"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                  <select 
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-brand-indigo outline-none text-gray-400"
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value})}
                  >
                    <option value="">Type de projet</option>
                    <option value="Application Mobile">Application Mobile</option>
                    <option value="Logiciel Métier">Logiciel Métier</option>
                    <option value="Refonte Digitale">Refonte Digitale</option>
                    <option value="IA & Automatisation">IA & Automatisation</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <textarea 
                  required
                  placeholder="Décrivez brièvement votre projet, vos objectifs et vos contraintes..." 
                  rows={5} 
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-brand-indigo outline-none transition-all"
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                ></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-brand-indigo to-brand-cyan py-4 rounded-xl font-bold shadow-xl shadow-brand-indigo/30 hover:scale-[1.01] transition-transform">
                  Soumettre ma demande de cadrage
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartProject;
