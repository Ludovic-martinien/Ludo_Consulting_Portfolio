
import React, { useState } from 'react';
import { View } from '../App';
import { gemini } from '../services/geminiService';

const AuditTool: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    techStack: '',
    challenges: '',
    goals: ''
  });
  const [report, setReport] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateAudit = async () => {
    setLoading(true);
    const prompt = `Génère un rapport d'audit digital professionnel pour une entreprise de type "${formData.businessType}". 
    Leurs outils actuels sont: "${formData.techStack}". 
    Leurs défis majeurs sont: "${formData.challenges}". 
    Leurs objectifs sont: "${formData.goals}".
    Structure le rapport avec: 1. État des lieux, 2. Risques identifiés, 3. Recommandations stratégiques (incluant l'IA), 4. Roadmap estimée. Ton ton doit être celui d'un consultant senior de Ludo_Consulting.`;

    const response = await gemini.sendMessage([], prompt);
    setReport(response);
    setLoading(false);
    setStep(3);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-display font-extrabold mb-4">Audit Digital <span className="text-brand-cyan">IA</span></h1>
          <p className="text-gray-400">Obtenez un diagnostic gratuit et instantané de votre présence numérique.</p>
        </header>

        <div className="max-w-4xl mx-auto">
          {step === 1 && (
            <div className="glass-card p-12 rounded-[40px] border border-white/5 space-y-8 animate-float">
              <h2 className="text-2xl font-bold">Commençons l'analyse</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Type d'entreprise / Secteur</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Cabinet Médical, E-commerce de luxe..."
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-brand-cyan outline-none"
                    value={formData.businessType}
                    onChange={e => setFormData({...formData, businessType: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Outils actuels (Stack Tech)</label>
                  <textarea 
                    placeholder="Ex: WordPress, Excel pour la compta, WhatsApp pour le client..."
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-brand-cyan outline-none"
                    value={formData.techStack}
                    onChange={e => setFormData({...formData, techStack: e.target.value})}
                  />
                </div>
                <button 
                  onClick={() => setStep(2)}
                  disabled={!formData.businessType}
                  className="w-full bg-brand-indigo py-4 rounded-xl font-bold shadow-xl shadow-brand-indigo/30"
                >
                  Étape Suivante
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="glass-card p-12 rounded-[40px] border border-white/5 space-y-8">
              <h2 className="text-2xl font-bold">Défis & Objectifs</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Quels sont vos points de blocage ?</label>
                  <textarea 
                    placeholder="Ex: Processus lents, perte de données, manque de visibilité..."
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-brand-cyan outline-none"
                    value={formData.challenges}
                    onChange={e => setFormData({...formData, challenges: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Quels sont vos objectifs à 6 mois ?</label>
                  <textarea 
                    placeholder="Ex: Doubler les ventes, automatiser le support client..."
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-brand-cyan outline-none"
                    value={formData.goals}
                    onChange={e => setFormData({...formData, goals: e.target.value})}
                  />
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="flex-1 border border-white/10 py-4 rounded-xl font-bold">Retour</button>
                  <button 
                    onClick={generateAudit}
                    className="flex-[2] bg-brand-cyan text-brand-dark py-4 rounded-xl font-bold shadow-xl shadow-brand-cyan/20 flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-brand-dark border-t-transparent rounded-full animate-spin"></span>
                        Analyse par l'IA en cours...
                      </>
                    ) : 'Générer mon Audit Gratuit'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && report && (
            <div className="space-y-8 animate-in fade-in duration-700">
              <div className="glass-card p-12 rounded-[40px] border border-brand-cyan/20 bg-brand-dark/50 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <span className="text-8xl font-black">AI</span>
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-brand-cyan text-brand-dark rounded-full flex items-center justify-center font-bold">L</div>
                  <div>
                    <h3 className="text-xl font-bold">Rapport d'Audit Stratégique</h3>
                    <p className="text-xs text-brand-cyan font-bold uppercase tracking-widest">Généré par Ludo_IA Engine</p>
                  </div>
                </div>
                <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-wrap text-sm">
                  {report}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <button onClick={() => window.print()} className="flex-1 bg-white/5 border border-white/10 py-4 rounded-xl font-bold hover:bg-white/10">Imprimer le Rapport</button>
                <button onClick={() => onNavigate('start')} className="flex-[2] bg-brand-indigo py-4 rounded-xl font-bold shadow-xl shadow-brand-indigo/30">Discuter de ce rapport avec un expert</button>
              </div>
              <button onClick={() => setStep(1)} className="w-full text-gray-500 text-sm hover:underline">Recommencer un audit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditTool;
