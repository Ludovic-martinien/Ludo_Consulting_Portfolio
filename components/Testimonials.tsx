
import React from 'react';
import { TESTIMONIALS, PARTNERS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-indigo/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        {/* Partners Marquee */}
        <div className="mb-32">
          <p className="text-center text-gray-500 uppercase tracking-[0.3em] text-xs font-bold mb-12">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {PARTNERS.map((partner, i) => (
              <span key={i} className="text-2xl md:text-3xl font-display font-black text-white whitespace-nowrap">{partner}</span>
            ))}
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold mb-6">Ce que disent nos <span className="text-brand-cyan">Clients</span></h2>
          <p className="text-gray-400">Leur succès est notre plus grande fierté. Découvrez les retours d'expérience de nos partenaires.</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-card p-8 rounded-[32px] border border-white/5 hover:border-brand-indigo/30 transition-all group">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-brand-cyan fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-indigo/30" />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-brand-cyan font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
