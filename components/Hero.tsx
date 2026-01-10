
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { View } from '../App';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-indigo/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-indigo/30 bg-brand-indigo/10 text-brand-indigo font-semibold text-sm tracking-wide">
            INNOVATION & EXCELLENCE DIGITALE
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-tight">
            Propulsez votre Vision dans l'<span className="bg-gradient-to-r from-brand-indigo to-brand-cyan bg-clip-text text-transparent">Ère de l'IA</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
            Ludo_Consulting accompagne les entreprises visionnaires dans leur transformation numérique à travers des solutions sur mesure.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => onNavigate('start')} className="px-8 py-4 bg-brand-indigo hover:bg-brand-indigo/80 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-brand-indigo/25">
              Démarrer un Projet
            </button>
            <button onClick={() => onNavigate('discussion-hub')} className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all flex items-center gap-2 group">
              Brainstormer avec l'IA
              <span className="inline-block animate-pulse w-2 h-2 bg-brand-cyan rounded-full"></span>
            </button>
          </div>
          
          <div className="flex items-center gap-8 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/${i+100}/100`} className="w-10 h-10 rounded-full border-2 border-brand-dark" alt="Client" />
              ))}
            </div>
            <p className="text-sm text-gray-400">
              <span className="text-white font-bold">+50 Entreprises</span> nous font confiance au Gabon.
            </p>
          </div>

          <div className="pt-6">
            <div className="inline-flex items-center gap-4 glass-card p-4 rounded-xl border border-white/10">
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">Accès Mobile</p>
                <QRCodeSVG value="http://192.168.137.50:3002" size={64} bgColor="transparent" fgColor="#ffffff" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white font-medium">Scannez pour accéder</p>
                <p className="text-xs text-gray-400">sur votre mobile</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="relative z-5 rounded-3xl overflow-hidden shadow-2xl animate-float">
             <img src="/assets/img/10.jpeg" alt="Innovation" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
          </div>
          <div onClick={() => onNavigate('audit-tool')} className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-2xl border-brand-cyan/30 cursor-pointer group hover:bg-brand-cyan/10 transition-all">
            <div className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-2">Audit Instantané</div>
            <div className="text-white text-sm font-medium">Obtenez votre rapport IA en 30 secondes →</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
