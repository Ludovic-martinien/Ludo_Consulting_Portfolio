
import React from 'react';
import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'consulting',
    title: 'Conseil & Consulting Digital',
    description: 'Accompagnement stratégique pour naviguer dans la transformation numérique complexe.',
    icon: '📊',
    color: '#5B5FFF'
  },
  {
    id: 'development',
    title: 'Développement Web & Mobile',
    description: 'Solutions sur mesure robustes, performantes et scalables utilisant les dernières stacks.',
    icon: '💻',
    color: '#00E5FF'
  },
  {
    id: 'ai',
    title: 'Solutions IA & Automatisation',
    description: 'Intégration d\'intelligence artificielle pour optimiser vos processus et vos coûts.',
    icon: '🤖',
    color: '#A855F7'
  },
  {
    id: 'uxui',
    title: 'Design UI/UX',
    description: 'Interfaces intuitives et expériences mémorables centrées sur l\'utilisateur.',
    icon: '🎨',
    color: '#F43F5E'
  },
  {
    id: 'management',
    title: 'Gestion de Projets Numériques',
    description: 'Pilotage agile de vos projets, du cadrage au déploiement final.',
    icon: '🚀',
    color: '#10B981'
  },
  {
    id: 'training',
    title: 'Formation & Accompagnement',
    description: 'Montée en compétence de vos équipes sur les outils et méthodes digitales.',
    icon: '📚',
    color: '#F59E0B'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FinTech Dashboard',
    category: 'Finance / Web',
    imageUrl: '/assets/img/IMG-20250923-WA0020.jpg',
    description: 'Visualisation de données en temps réel pour une banque d\'investissement.',
    tech: ['React', 'D3.js', 'Node.js']
  },
  {
    id: '2',
    title: 'E-Health Mobile App',
    category: 'Healthcare / Mobile',
    imageUrl: '/assets/img/IMG-20250923-WA0022.jpg',
    description: 'Application de télémédecine permettant la gestion des consultations IA.',
    tech: ['React Native', 'Firebase', 'Gemini API']
  },
  {
    id: '3',
    title: 'Smart Logistics',
    category: 'Industrie / AI',
    imageUrl: '/assets/img/IMG-20250923-WA0018_edit_77694929757412.jpg',
    description: 'Optimisation de chaînes logistiques par algorithmes prédictifs.',
    tech: ['Python', 'TensorFlow', 'Vue.js']
  }
];

export const TEAM = [
  {
    name: "Ludovic Martinien Mve Zogo.",
    role: "Directeur Stratégie & Innovation",
    specialty: "IA & Transformation Digitale",
    image: "/assets/img/dev.jpeg"
  },
  {
    name: "Ludovic Martinien Mve Zogo.",
    role: "Lead Developer Fullstack",
    specialty: "React, Node.js & Cloud Architecture",
    image: "/assets/img/8.jpeg"
  },
  {
    name: "Mélissa Claude Missiassi .",
    role: "Product Designer UI/UX",
    specialty: "Design Thinking & Expérience Utilisateur",
    image: "/assets/img/Generated Image January 06, 2026 - 7_33PM.png"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dev Lictchtenstiner",
    role: "CEO, Gabon Innov",
    text: "L'expertise de Ludo_Consulting a transformé notre vision en un produit concret et performant. Leur approche de l'IA est unique.",
    avatar: "/assets/img/IMG-20250923-WA0024.jpg"
  },
  {
    id: 2,
    name: "Sarah Mendone",
    role: "Directrice Marketing, BGFIBank",
    text: "Une équipe réactive, professionnelle et surtout très créative. Le design UI/UX de notre plateforme a reçu des éloges unanimes.",
    avatar: "/assets/img/Directeur Marketing, BGFIBank.png"
  },
  {
    id: 3,
    name: "Jean-Pierre Nguema",
    role: "Fondateur, TechLibreville",
    text: "Le meilleur partenaire pour la transformation digitale au Gabon. Ils comprennent les enjeux locaux tout en appliquant des standards mondiaux.",
    avatar: "/assets/img/TechLibreville.png"
  }
];

export const PARTNERS = [
  "Microsoft", "Google Cloud", "AWS", "Gabon Telecom", "ANINF", "BGFIBank", "Airtel Business"
];

export const AI_CONTEXT = `
Tu es l'assistant intelligent officiel de Ludo_Consulting. 
Ton ton doit être professionnel, clair, rassurant et orienté solution.
Ludo_Consulting propose les services suivants:
1. Conseil & Consulting Digital
2. Développement Web & Mobile (React, Node, etc.)
3. Solutions IA & Automatisation
4. Design UI/UX
5. Gestion de Projets Numériques
6. Formation & Accompagnement Digital

Nouveau : Nous avons un calculateur de ROI digital sur le site pour aider les clients à estimer leurs gains.
Si on te demande qui est Ludo_Consulting, réponds que c'est un cabinet d'expertise technologique spécialisé dans l'innovation digitale basé à Libreville, Gabon.
Si l'utilisateur semble intéressé par un service, encourage-le à remplir le formulaire de contact ou à essayer notre calculateur de ROI.
`;
