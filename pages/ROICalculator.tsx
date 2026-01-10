
import React, { useState, useMemo } from 'react';
import { View } from '../App';

const ROICalculator: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  const [employees, setEmployees] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(15000); // en CFA
  const [hoursLost, setHoursLost] = useState(5); // par semaine par employé

  const results = useMemo(() => {
    const weeklyLoss = employees * hourlyRate * hoursLost;
    const monthlyLoss = weeklyLoss * 4;
    const yearlyLoss = monthlyLoss * 12;
    // On estime qu'une solution Ludo_Consulting peut automatiser 60% de ces tâches
    const potentialSaving = yearlyLoss * 0.6;
    
    return {
      yearlyLoss: yearlyLoss.toLocaleString(),
      potentialSaving: potentialSaving.toLocaleString(),
      efficiencyGain: "60%"
    };
  }, [employees, hourlyRate, hoursLost]);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <header className="max-w-4xl mb-16">
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-6">Calculateur de <span className="text-brand-cyan">ROI Digital</span></h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Estimez l'impact financier des inefficacités manuelles et découvrez combien vous pourriez économiser avec nos solutions d'automatisation.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="space-y-10 glass-card p-10 rounded-[40px] border border-white/10">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-bold text-white uppercase tracking-wider text-sm">Nombre d'employés</label>
                <span className="text-brand-cyan font-bold text-2xl">{employees}</span>
              </div>
              <input 
                type="range" min="1" max="200" value={employees} 
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-bold text-white uppercase tracking-wider text-sm">Coût horaire moyen (CFA)</label>
                <span className="text-brand-cyan font-bold text-2xl">{hourlyRate.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="5000" max="100000" step="5000" value={hourlyRate} 
                onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-bold text-white uppercase tracking-wider text-sm">Heures perdues / employé / semaine</label>
                <span className="text-brand-cyan font-bold text-2xl">{hoursLost}h</span>
              </div>
              <input 
                type="range" min="1" max="40" value={hoursLost} 
                onChange={(e) => setHoursLost(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
              <p className="text-[10px] text-gray-500 italic">Temps passé sur des tâches manuelles répétitives (data entry, reporting, etc.)</p>
            </div>
          </div>

          {/* Results Card */}
          <div className="bg-brand-indigo rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <span className="text-[200px] leading-none font-black select-none">%</span>
            </div>
            
            <div className="relative z-10 space-y-12">
              <div>
                <h4 className="text-white/60 uppercase tracking-widest text-xs font-bold mb-2">Perte de productivité annuelle estimée</h4>
                <div className="text-5xl font-display font-black">{results.yearlyLoss} <span className="text-xl font-normal opacity-60">CFA</span></div>
              </div>

              <div className="p-8 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20">
                <h4 className="text-brand-cyan uppercase tracking-widest text-xs font-bold mb-2">Économie potentielle (Optimisation {results.efficiencyGain})</h4>
                <div className="text-6xl font-display font-black text-brand-cyan animate-pulse">{results.potentialSaving} <span className="text-xl font-normal opacity-60 text-white">CFA / an</span></div>
              </div>

              <div className="space-y-6">
                <p className="text-sm opacity-80 leading-relaxed italic">
                  Ces chiffres sont basés sur des moyennes sectorielles d'automatisation. Un audit personnalisé est nécessaire pour valider ces résultats sur votre infrastructure.
                </p>
                <button 
                  onClick={() => onNavigate('start')}
                  className="w-full bg-white text-brand-indigo py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all active:scale-[0.98]"
                >
                  Obtenir mon Audit Personnalisé
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <button onClick={() => onNavigate('home')} className="text-gray-500 hover:text-white transition-colors">← Retour à l'accueil</button>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
