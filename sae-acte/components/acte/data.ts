export const navTabs = ['accueil', 'acte', 'sae', 'insertion', 'blog', 'contact'] as const;
export type NavTab = (typeof navTabs)[number];

export const services = [
  { id: 'expertise', name: 'Expertise comptable', desc: 'Gestion comptable complète et conseil financier' },
  { id: 'fiscale', name: 'Fiscale', desc: 'Optimisation fiscale et conformité' },
  { id: 'sociale', name: 'Sociale', desc: 'Gestion sociale et paie' },
  { id: 'rh', name: 'RH', desc: 'Recrutement et gestion des talents' },
  { id: 'marketing', name: 'Marketing', desc: 'Stratégie marketing et communication' },
  { id: 'digital', name: 'Stratégie digitale', desc: 'Transformation digitale' },
  { id: 'audit', name: 'Contrôle et Audit', desc: 'Audit interne et contrôle de gestion' },
  { id: 'projet', name: 'Gestion de projet', desc: 'Pilotage et management de projets' }
];

export const formations = [
  {
    category: 'MÉTIERS DU NUMÉRIQUE / DIGITAL',
    items: [
      'Communication et Marketing digital',
      'Community management',
      'Création de contenu digital (photo, vidéo, montage)',
      'Design graphique (Canva, Photoshop, AI, InDesign)',
      'UI/UX Design et Web design',
      'Intelligence Artificielle',
      'Initiation à la Data & Analyse de données (Excel, Power BI)',
      'Développement web et Mobile',
      'Coding (Python, CSS, JavaScript, Django)'
    ]
  },
  {
    category: 'MÉTIERS DE LA GESTION',
    items: [
      'Organisation et gestion comptable',
      'Organisation et gestion RH',
      'Secrétariat comptable et caisse',
      'Assistant de direction',
      'Assistant juridique',
      'Gestion administrative et bureautique',
      'Fiscalité / Transport et Logistique',
      'Hygiène sécurité et environnement'
    ]
  },
  {
    category: "MÉTIERS DE L'ENTREPRENEURIAT",
    items: [
      "Création et gestion d'entreprise",
      'Élaboration du Business Model et Business Plan',
      'Gestion de projet digital',
      'Pitching et communication entrepreneuriale',
      "Stratégie digitale d'entreprise",
      'Gestion financière et mobilisation de financement',
      "Études de marché & analyse de faisabilité",
      "Accompagnement à la formalisation d'entreprise"
    ]
  },
  {
    category: 'MÉTIERS DE LA PHARMACIE & GESTION DE PHARMACIE',
    items: [
      'Gestionnaire de pharmacie',
      'Gestion des stocks pharmaceutiques',
      'CRM et logistique en pharmacie',
      'Secrétaire et caisse en pharmacie',
      'Éthique et conformité en milieu pharmaceutique',
      'Vente et relation client en pharmacie'
    ]
  },
  {
    category: 'MÉTIERS DE LA GOUVERNANCE, CONTRÔLE & AUDIT',
    items: [
      'Audit interne & audit financier',
      'Contrôle de gestion',
      'Gouvernance et gestion des risques',
      'RSE et Éthique',
      'Évaluation des performances organisationnelles',
      'Management des opérations et amélioration continue'
    ]
  },
  {
    category: 'MÉTIERS GÉOMÉTRIE ET TOPOGRAPHIE',
    items: [
      'Géométrie et Topographie',
      'Étude de GPS',
      'Production topographique',
      'Lecture et interprétation de plans',
      'Implantation et nivellement',
      'Cartographie numérique',
      'SIG – QGIS – ArcGIS - AutoCAD - ArchiCAD'
    ]
  },
  {
    category: 'MÉTIERS ART & CUISINE',
    items: [
      'Géométrie - Topographie',
      'Cuisine africaine & internationale',
      'Pâtisserie & boulangerie',
      'Décoration culinaire & arts de la table',
      'Création artistique & design visuel',
      'Initiation à l’art créatif (dessin, peinture)'
    ]
  },
  {
    category: 'MÉTIERS DU MANAGEMENT & DU LEADERSHIP',
    items: [
      'Leadership et Développement PP',
      'Communication professionnelle',
      'Prise de parole en public',
      'Management des équipes et conflits',
      'Gestion du temps & productivité',
      'Coaching professionnel',
      'Intelligence émotionnelle'
    ]
  },
  {
    category: 'MÉTIERS DE MAINTENANCE INFORMATIQUE & RÉSEAU',
    items: [
      'Informatique avancée / Base de données',
      'Maintenance informatique & diagnostic',
      'Réseaux informatiques (LAN, WLAN, routage, câblage)',
      'Initiation à Linux (Ubuntu)',
      'Administration système de base',
      'Bases de données & SQL (initiation)',
      'Sécurité informatique et protection des données'
    ]
  }
];

export const valeurs = [
  { icon: 'collaboration', title: 'Collaboration', desc: 'La force du collectif pour réussir' },
  { icon: 'engagement', title: 'Engagement', desc: "Tenir nos promesses jusqu'au bout" },
  { icon: 'integrite', title: 'Intégrité', desc: 'Transparence et responsabilité' },
  { icon: 'innovation', title: 'Innovation', desc: 'Solutions nouvelles et adaptées' },
  { icon: 'inclusion', title: 'Inclusion', desc: 'Chaque talent compte' }
];

export const acteStats = [
  { number: '300+', label: 'Jeunes formés' },
  { number: '120+', label: 'Sessions de formation' },
  { number: '25+', label: 'Entreprises partenaires' }
];

export const testimonials = [
  {
    quote: 'ACTE m’a permis de structurer mon projet et de gagner en confiance.',
    name: 'Aïcha K.',
    role: 'Entrepreneure'
  },
  {
    quote: 'Une formation concrète, orientée métier, avec un vrai suivi.',
    name: 'Kossi D.',
    role: 'Développeur junior'
  },
  {
    quote: 'L’équipe est disponible et les contenus sont très actuels.',
    name: 'Mariam S.',
    role: 'Community manager'
  }
];

export const stats = [
  { number: '300+', label: 'Jeunes formés' },
  { number: '80+', label: 'Entrepreneurs accompagnés' },
  { number: '25+', label: 'Entreprises partenaires' },
  { number: '10+', label: 'Financements obtenus' }
];

export const entrepreneurServices = [
  "Diagnostic d'entreprise et plan d'action personnalisé",
  'Appui en communication et visibilité digitale',
  'Accompagnement à la recherche de financement',
  'Coaching de pitch et présentation aux investisseurs'
];
