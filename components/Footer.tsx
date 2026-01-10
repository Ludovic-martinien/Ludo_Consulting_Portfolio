
import React from 'react';
import { View } from '../App';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-dark pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <button onClick={() => onNavigate('home')} className="text-3xl font-display font-extrabold tracking-tighter flex items-center gap-2">
              <span className="bg-gradient-to-r from-brand-indigo to-brand-cyan bg-clip-text text-transparent">Ludo</span>
              <span className="text-white">_Consulting</span>
            </button>
            <p className="text-gray-400 max-w-sm">
              Ludo_Consulting est votre partenaire stratégique pour une transformation digitale réussie au Gabon et à l'international.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Exploration</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={() => onNavigate('audit-tool')} className="hover:text-brand-cyan transition-colors">Audit IA</button></li>
              <li><button onClick={() => onNavigate('discussion-hub')} className="hover:text-brand-cyan transition-colors">Brainstorming Hub</button></li>
              <li><button onClick={() => onNavigate('vision')} className="hover:text-brand-cyan transition-colors">Notre Vision</button></li>
              <li><button onClick={() => onNavigate('expertises')} className="hover:text-brand-cyan transition-colors">Nos Expertises</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <p className="text-gray-400 text-sm">ludo.consulting3@gmail.com</p>
            <p className="text-gray-400 text-sm mt-2">Libreville, Gabon</p>
            <button onClick={() => onNavigate('admin')} className="mt-8 text-[10px] text-white/5 hover:text-white/20 transition-colors uppercase tracking-[0.3em]">Accès Interne</button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Ludo_Consulting. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
