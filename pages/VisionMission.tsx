
import React, { useState } from 'react';
import { View } from '../App';

const VisionMission: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    projectType: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:3002/api/scoping-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Votre demande de cadrage a été envoyée avec succès !');
        setFormData({ companyName: '', projectType: '', description: '' });
      } else {
        setSubmitMessage('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      setSubmitMessage('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="max-w-4xl mb-20">
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-8">Notre <span className="text-brand-indigo">Vision</span> & Notre Engagement</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Façonner un avenir où la technologie et l'humain collaborent harmonieusement pour créer une valeur durable.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-brand-cyan">La Vision Ludo_Consulting</h3>
              <p className="text-gray-400 leading-relaxed">
                Devenir le leader du conseil digital en Afrique centrale en apportant des solutions innovantes, éthiques et performantes. Nous voyons chaque défi technologique comme une opportunité de croissance pour nos partenaires.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-brand-indigo">Notre Mission Quotidienne</h3>
              <p className="text-gray-400 leading-relaxed">
                Accompagner, former et bâtir. Nous ne nous contentons pas de livrer des produits, nous construisons des écosystèmes numériques capables d'évoluer avec les besoins du marché gabonais et international.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src="/assets/img/WhatsApp Image 2025-12-08 at 21.37.24.jpeg" className="rounded-[40px] shadow-2xl" alt="Collaboration" />
            <div className="absolute -bottom-8 -left-8 p-8 bg-brand-indigo rounded-3xl shadow-xl hidden md:block">
              <span className="text-4xl font-bold">100%</span>
              <p className="text-sm opacity-80 uppercase tracking-widest">Dévouement Client</p>
            </div>
          </div>
        </div>

        <section className="py-20 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Valeurs Fondamentales</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Intégrité', desc: 'Une transparence totale dans tous nos processus.' },
              { title: 'Innovation', desc: "L'exploration constante des nouvelles technologies." },
              { title: 'Excellence', desc: 'Le souci du détail et la qualité sans compromis.' }
            ].map(val => (
              <div key={val.title} className="p-10 rounded-3xl glass-card">
                <h4 className="text-xl font-bold mb-4">{val.title}</h4>
                <p className="text-gray-400">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 border-t border-white/10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Demande de Cadrage</h2>
            <p className="text-gray-400 text-center mb-12">
              Remplissez ce formulaire pour obtenir un cadrage personnalisé de votre projet.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                  Nom de l'entreprise *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo text-white placeholder-gray-500"
                  placeholder="Votre entreprise"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                  Type de projet *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo text-white"
                >
                  <option value="">Sélectionnez un type de projet</option>
                  <option value="site-web">Site Web</option>
                  <option value="application-mobile">Application Mobile</option>
                  <option value="e-commerce">E-commerce</option>
                  <option value="logiciel-sur-mesure">Logiciel sur Mesure</option>
                  <option value="consulting-digital">Consulting Digital</option>
                  <option value="audit-securite">Audit Sécurité</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Description du projet *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo text-white placeholder-gray-500 resize-none"
                  placeholder="Décrivez votre projet en détail..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-indigo hover:bg-brand-indigo/80 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-brand-indigo/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer la demande'
                )}
              </button>

              {submitMessage && (
                <div className={`text-center p-4 rounded-xl ${submitMessage.includes('succès') ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </section>

        <div className="mt-20 text-center">
           <button onClick={() => onNavigate('home')} className="text-brand-cyan font-bold hover:underline">← Retour à l'accueil</button>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
