
import React from 'react';
import { View } from '../App';

const Catalogue: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  const offers = [
    { title: "Pack Startup", price: "Sur Devis", items: ["MVP Web", "UI Design", "Hébergement 1 an"] },
    { title: "Audit Digital", price: "Dès 500k CFA", items: ["Audit de code", "Analyse UX", "Recommandations SEO"] },
    { title: "Formation IA", price: "Sur Mesure", items: ["Ateliers pratiques", "Prompt Engineering", "Outils No-Code"] }
  ];

  const additionalServices = [
    {
      title: "Composition de chants sur mesure pour vos évènements",
      price: "Sur Devis",
      description: "Nous composons des chants personnalisés pour tous vos évènements : mariage, anniversaire, cérémonies religieuses, décès. Chaque chant est créé sur mesure selon votre thème, votre message et le style musical que vous aimez, afin de rendre votre moment inoubliable.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    },
    {
      title: "Création de présentation",
      price: "Sur Devis",
      description: "Conception de présentation professionnelle et impactantes",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Formation en développement Web et Mobile",
      price: "15.000 - 30.000k CFA",
      description: "Formation complète sur les langages de base comme html, css, JavaScript, PHP, MySQL et autres idéal pour débutants qui souhaitent apprendre à coder",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Rédaction de lettre de motivation et de demande d'emploi et cahiers des charges",
      price: "10.000 - 15.000k CFA",
      description: "Rédaction personnalisée pour des lettres percutant qui impressionnerons vos employeurs",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Installation de systèmes d'exploitation",
      price: "10.000 - 20.000k CFA",
      description: "Installation professionnelle de systèmes Windows, Mac OS, Linux sur vos ordinateurs",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Maintenance informatique",
      price: "40.000 - 50.000k CFA",
      description: "Réparation d'ordinateur en panne, nettoyage complet des accessoires (clavier, souris, unité centrale UC, etc)",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Mini formation en bureautique",
      price: "12.000 - 18.000k CFA",
      description: "Initiation à l'utilisation efficace des logiciels bureautique (Word, Excel, PowerPoint) pour gagner en productivité",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Conception de cartes de visites professionnelle",
      price: "15.000 - 30.000k CFA",
      description: "Création de cartes de visites modernes et stylisées",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Installation des logiciels et applications sur ordinateur",
      price: "10.000 - 20.000k CFA",
      description: "Installation et configuration de tout type de logiciels adaptés à vos besoins",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Installation du Pack Office",
      price: "20.000k CFA",
      description: "Installation et configuration complète du pack office ( Word, Excel, PowerPoint, etc) Pack Office + Licence",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Création de logiciels, sites web et applications mobiles",
      price: "Sur Devis",
      description: "Développement de solutions numérique adaptées aux besoins des clients, incluant des sites web moderne et des applications mobiles fonctionnelles intuitive",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Création des sites web basique",
      price: "150.000 - 300.000k CFA",
      description: "",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      )
    },
    {
      title: "Applications Mobile",
      price: "500k - 1.000.000k CFA",
      description: "",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Création de CV professionnel",
      price: "5000 - 7000k CFA",
      description: "Rédaction et mise en page de CV qui mettent en valeur vos compétences et expériences",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Création de logos pour des entreprises et associations",
      price: "5000 - 7000k CFA",
      description: "Conception de logos uniques et personnalisés pour refléter l'identité de votre entreprise ou associations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      title: "Déblocage tous genre des smartphones",
      price: "Sur Devis",
      description: "Si ton smartphone est verrouillé ou bloqué et que tu cherches une solution efficace pour le débloquer",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-display font-extrabold mb-12">Nos <span className="text-brand-cyan">Offres</span></h1>
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((off, i) => (
            <div key={i} className="p-10 rounded-[40px] glass-card border border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">{off.title}</h3>
                <div className="text-3xl font-bold text-brand-cyan mb-8">{off.price}</div>
                <ul className="space-y-4 mb-12">
                  {off.items.map(it => <li key={it} className="flex items-center gap-2 text-gray-400">✓ {it}</li>)}
                </ul>
              </div>
              <button onClick={() => onNavigate('start')} className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-brand-cyan hover:text-brand-dark transition-all">Choisir ce pack</button>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-display font-extrabold mt-20 mb-12">Services <span className="text-brand-cyan">Additionnels</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, i) => (
            <div key={i} className="p-8 rounded-[30px] glass-card border border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col justify-between group hover:scale-105">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all">
                    {service.icon}
                  </div>
                  <div className="text-2xl font-bold text-brand-cyan">{service.price}</div>
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                {service.description && <p className="text-gray-400 mb-6">{service.description}</p>}
              </div>
              <button onClick={() => onNavigate('start')} className="w-full py-3 rounded-xl bg-white/5 border border-white/10 font-bold hover:bg-brand-cyan hover:text-brand-dark transition-all">Demander ce service</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
