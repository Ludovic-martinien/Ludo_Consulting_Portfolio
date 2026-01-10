
import React, { useState, useEffect } from 'react';
import { View } from '../App';

interface NavbarProps {
  onNavigate: (view: View) => void;
  currentView: View;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks: { label: string; view: View }[] = [
    { label: 'Accueil', view: 'home' },
    { label: 'Calculateur ROI', view: 'roi-calculator' },
    { label: 'Expertises', view: 'expertises' },
    { label: 'Catalogue', view: 'catalogue' },
    { label: 'Blog', view: 'blog' },
  ];

  const handleMobileNav = (view: View) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${isScrolled || currentView !== 'home' || isMenuOpen ? 'bg-brand-dark/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button onClick={() => handleMobileNav('home')} className="text-2xl font-display font-extrabold tracking-tighter flex items-center gap-2 relative z-[70]">
            <span className="bg-gradient-to-r from-brand-indigo to-brand-cyan bg-clip-text text-transparent">Ludo</span>
            <span className="text-white">_Consulting</span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map(link => (
              <button 
                key={link.view}
                onClick={() => onNavigate(link.view)} 
                className={`transition-colors ${currentView === link.view ? 'text-brand-cyan' : 'hover:text-brand-cyan text-white/80'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => onNavigate('start')}
              className="bg-gradient-to-r from-brand-indigo to-brand-cyan hover:opacity-90 px-6 py-2 rounded-full transition-all shadow-lg shadow-brand-indigo/20 font-bold"
            >
              Démarrer un Projet
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white relative z-[70] p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[55] bg-brand-dark/95 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center">
          <div className="space-y-6 w-full">
            {navLinks.map((link, i) => (
              <button
                key={link.view}
                onClick={() => handleMobileNav(link.view)}
                className={`block w-full text-3xl font-display font-bold transition-all transform ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                } ${currentView === link.view ? 'text-brand-cyan' : 'text-white hover:text-brand-indigo'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <div className={`w-full pt-8 border-t border-white/10 transition-all transform duration-500 delay-500 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <button 
              onClick={() => handleMobileNav('start')}
              className="w-full bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-xl font-bold py-5 rounded-2xl shadow-2xl shadow-brand-indigo/30"
            >
              Démarrer un Projet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
