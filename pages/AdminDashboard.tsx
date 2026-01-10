
import React, { useState, useEffect } from 'react';
import { View } from '../App';

const AdminDashboard: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('project_submissions') || '[]');
    setSubmissions(data);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simulation d'authentification
      setIsAuthenticated(true);
    } else {
      alert('Mot de passe incorrect');
    }
  };

  const deleteSubmission = (id: number) => {
    const updated = submissions.filter(s => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem('project_submissions', JSON.stringify(updated));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="glass-card p-10 rounded-[40px] w-full max-w-md border border-brand-indigo/30">
          <h2 className="text-2xl font-bold mb-6 text-center">Accès Administration</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Mot de passe" 
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-brand-indigo outline-none"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button className="w-full bg-brand-indigo py-4 rounded-xl font-bold">Se connecter</button>
            <button type="button" onClick={() => onNavigate('home')} className="w-full text-gray-500 text-sm">Retour à l'accueil</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-display font-extrabold mb-2">Tableau de Bord <span className="text-brand-cyan">Admin</span></h1>
            <p className="text-gray-400">Gestion des demandes et leads Ludo_Consulting.</p>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="px-4 py-2 border border-white/10 rounded-lg text-sm hover:bg-white/5">Déconnexion</button>
        </div>

        <div className="grid gap-6">
          {submissions.length === 0 ? (
            <div className="text-center py-20 glass-card rounded-[40px] text-gray-500">
              Aucune soumission pour le moment.
            </div>
          ) : (
            submissions.map((sub) => (
              <div key={sub.id} className="glass-card p-8 rounded-[32px] border border-white/5 flex flex-col md:flex-row justify-between gap-6 hover:border-brand-indigo/30 transition-all">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-brand-cyan/20 text-brand-cyan text-[10px] font-bold uppercase rounded-full">{sub.type || 'Non spécifié'}</span>
                    <span className="text-xs text-gray-500">{sub.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{sub.company}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{sub.description}</p>
                </div>
                <div className="flex md:flex-col justify-end gap-3">
                  <button className="bg-brand-indigo px-6 py-2 rounded-xl text-sm font-bold">Répondre</button>
                  <button onClick={() => deleteSubmission(sub.id)} className="text-red-500/50 hover:text-red-500 text-sm font-bold transition-colors">Archiver</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
