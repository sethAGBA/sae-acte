export const navTabs = ['accueil', 'acte', 'sae', 'insertion', 'blog', 'contact'] as const;
export type NavTab = (typeof navTabs)[number];

export const services = [
  {
    id: 'expertise',
    name: 'Expertise comptable',
    desc: 'Gestion comptable complète et conseil financier',
    image: '/hero/scene-de-bureau-avec-ordinateur-portable.jpg',
    points: [
      'Tenue et surveillance de comptabilité',
      'Établissement des états financiers (bilan, compte de résultat)',
      'Conseil en gestion et organisation comptable',
      'Audit contractuel'
    ]
  },
  {
    id: 'fiscale',
    name: 'Expertise Fiscale',
    desc: 'Optimisation fiscale et conformité',
    image:
      '/hero/portrait-de-jolie-femme-cubaine-presentant-les-informations-statistiques-a-son-patron-meconnaissable.jpg',
    points: [
      'Déclarations fiscales mensuelles et annuelles',
      'Optimisation de la charge fiscale',
      'Assistance en cas de contrôle fiscal',
      'Veille juridique et fiscale'
    ]
  },
  {
    id: 'sociale',
    name: 'Expertise Sociale',
    desc: 'Gestion sociale et paie',
    image:
      '/hero/les-femmes-d-affaires-parlant-pres-du-bureau-pendant-une-pause-cafe-dans-le-couloir-de-la-grande-societe.jpg',
    points: [
      'Gestion de la paie et des bulletins de salaire',
      'Déclarations sociales (CNSS, ITS)',
      'Gestion des contrats de travail',
      'Conseil en droit du travail'
    ]
  },
  {
    id: 'rh',
    name: 'Expertise RH',
    desc: 'Recrutement et gestion des talents',
    image: '/hero/homme-se-presentant-aux-employeurs-lors-de-l-entretien-d-embauche-au-bureau.jpg',
    points: [
      'Recrutement et sélection de talents',
      'Gestion prévisionnelle des emplois et compétences (GPEC)',
      'Évaluation des performances',
      'Développement de la marque employeur'
    ]
  },
  {
    id: 'marketing',
    name: 'Expertise en Communication, Marketing et Digitale',
    desc: 'Stratégie marketing et communication',
    image:
      '/hero/affilies-collaborant-dans-un-espace-de-travail-haut-de-gamme-pour-determiner-l-allocation-des-ressources.jpg',
    points: [
      'Études de marché et de positionnement',
      'Élaboration de stratégies de communication',
      'Gestion de l\'image de marque (Branding)',
      'Marketing opérationnel et digital'
    ]
  },
  {
    id: 'digital',
    name: 'Expertise en IA et Data',
    desc: 'IA et Analyse de données',
    image:
      '/hero/heureuse-femme-d-affaires-afro-americaine-travaillant-sur-un-pave-tactile-au-bureau.jpg',
    points: [
      'Mise en place de solutions d\'intelligence artificielle',
      'Analyse et visualisation de données métier',
      'Automatisation des processus (RPA)',
      'Big Data et prédictions statistiques'
    ]
  },
  {
    id: 'audit',
    name: 'Expertise en Contrôle de Gestion et Audit',
    desc: 'Audit interne et contrôle de gestion',
    image:
      '/hero/equipe-de-collegues-afro-americains-analysant-des-rapports-de-vente-sur-des-documents-travaillant-sur-une-strategie-financiere-pour-la-croissance-de-l-entreprise-employes-de-l-entreprise-travaillant-en-equipe.jpg',
    points: [
      'Audit interne et opérationnel',
      'Mise en place de manuels de procédures',
      'Contrôle de gestion et pilotage de la performance',
      'Gestion des risques et conformité'
    ]
  },
  {
    id: 'projet',
    name: 'Expertise en Gestion de Projet',
    desc: 'Pilotage et management de projets',
    image: '/hero/reunion-d-affaires-dans-un-cafe.jpg',
    points: [
      'Planification et suivi de projets complexes',
      'Gestion des ressources et des budgets',
      'Accompagnement au changement',
      'Méthodologies Agiles et Scrum'
    ]
  }
];

export const formations = [
  {
    category: 'MÉTIERS DU NUMÉRIQUE / DIGITAL',
    objectif: 'Former des jeunes et des femmes capables de concevoir, développer et gérer des solutions numériques, adaptées aux besoins actuels des entreprises, institutions et entrepreneurs.',
    importance: 'Le numérique est devenu transversal à tous les secteurs. Les compétences digitales sont aujourd’hui indispensables pour l’emploi, l’entrepreneuriat, la compétitivité des entreprises et l’innovation.',
    debouches: [
      'Agences digitales et de communication',
      'Startups et entreprises technologiques',
      'Banques, ONG, institutions',
      'Freelance et travail à distance',
      'E-commerce, médias, services publics'
    ],
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
    objectif: 'Former des profils capables d’assurer une gestion administrative, comptable et fiscale efficace, indispensable à toute organisation.',
    importance: 'La performance et la transparence financière sont devenues des exigences majeures. Une bonne gestion est essentielle pour la pérennité des entreprises et des projets.',
    debouches: [
      'Entreprises privées',
      'Cabinets comptables',
      'ONG et projets',
      'Administrations publiques',
      'Auto-emploi (prestations de gestion)'
    ],
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
    category: 'MÉTIERS DE L’ENTREPRENEURIAT',
    objectif: 'Accompagner les jeunes et les femmes à créer, structurer et développer des entreprises viables et durables.',
    importance: 'Face au chômage et à la mutation du travail, l’entrepreneuriat est un levier clé de création d’emplois, d’innovation et d’autonomie économique.',
    debouches: [
      'Création de PME et startups',
      'Auto-emploi',
      'Incubateurs et structures d’appui',
      'Conseil entrepreneurial'
    ],
    items: [
      'Création et gestion d’entreprise',
      'Élaboration du Business Model et Business Plan',
      'Gestion de projet digital',
      'Pitching et communication entrepreneuriale',
      'Stratégie digitale d’entreprise',
      'Gestion financière et mobilisation de financement',
      'Études de marché & analyse de faisabilité',
      'Accompagnement à la formalisation d’entreprise'
    ]
  },
  {
    category: 'MÉTIERS MAINTENANCE INFORMATIQUE & RÉSEAUX',
    objectif: 'Former des techniciens capables d’installer, maintenir et sécuriser les systèmes informatiques et réseaux.',
    importance: 'Avec la digitalisation croissante, les systèmes informatiques sont au cœur du fonctionnement des organisations, rendant ces compétences stratégiques.',
    debouches: [
      'Entreprises et institutions',
      'Fournisseurs de services Internet',
      'Centres informatiques',
      'Auto-emploi (maintenance, installation)'
    ],
    items: [
      'Informatique avancée et bases de données',
      'Maintenance informatique et diagnostic',
      'Réseaux LAN, WLAN, câblage, routage',
      'Initiation à Linux (Ubuntu)',
      'Administration système de base'
    ]
  },
  {
    category: 'MÉTIERS GOUVERNANCE, CONTRÔLE & AUDIT',
    objectif: 'Former des professionnels capables de garantir la transparence, la performance et la gestion des risques.',
    importance: 'La bonne gouvernance est devenue une exigence mondiale pour la crédibilité, la durabilité et l’accès aux financements.',
    debouches: [
      'Cabinets d’audit et de conseil',
      'Entreprises privées',
      'Banques et institutions financières',
      'ONG et projets internationaux'
    ],
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
    category: 'MÉTIERS MANAGEMENT & LEADERSHIP',
    objectif: 'Développer des leaders capables de manager des équipes, communiquer efficacement et piloter la performance.',
    importance: 'Les organisations ont besoin de leaders adaptables, humains et efficaces, capables de gérer le changement et la diversité.',
    debouches: [
      'Management d’entreprise',
      'ONG et projets',
      'Administration publique',
      'Coaching et formation'
    ],
    items: [
      'Leadership et développement personnel',
      'Communication professionnelle',
      'Prise de parole en public',
      'Management des équipes et gestion des conflits',
      'Gestion du temps et productivité'
    ]
  },
  {
    category: 'MÉTIERS GESTION DE PHARMACIE',
    objectif: 'Former des gestionnaires capables d’optimiser la gestion administrative, commerciale et logistique des pharmacies.',
    importance: 'Une bonne gestion pharmaceutique est essentielle pour la disponibilité des médicaments, la qualité du service et la viabilité économique.',
    debouches: [
      'Pharmacies privées',
      'Dépôts pharmaceutiques',
      'ONG et projets de santé',
      'Gestion indépendante de structures'
    ],
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
    category: 'MÉTIERS GÉOGRAPHIE & TOPOGRAPHIE',
    objectif: 'Former des techniciens capables de réaliser des travaux topographiques fiables et précis.',
    importance: 'L’aménagement du territoire et les infrastructures nécessitent des données géospatiales précises, essentielles au développement durable.',
    debouches: [
      'BTP et génie civil',
      'Cabinets de topographie',
      'Collectivités territoriales',
      'Projets d’aménagement'
    ],
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
    objectif: 'Valoriser la créativité et la culture comme leviers économiques et d’employabilité.',
    importance: 'Les industries culturelles et créatives sont des secteurs porteurs, créateurs d’emplois et d’identité culturelle.',
    debouches: [
      'Restaurants et hôtels',
      'Entrepreneuriat culinaire',
      'Industries créatives',
      'Événementiel et artisanat'
    ],
    items: [
      'Géométrie - Topographie',
      'Cuisine africaine & internationale',
      'Pâtisserie & boulangerie',
      'Décoration culinaire & arts de la table',
      'Création artistique & design visuel',
      'Initiation à l’art créatif (dessin, peinture)'
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
    quote:
      "Mon parcours Gestion et organisation comptable au cabinet ACTe m'a permis de développer des compétences pratiques en comptabilité grâce à des formateurs qualifiés et à des études de cas concrètes. L'encadrement était excellent et l'ambiance professionnelle m'a aidée à mieux comprendre le monde de la comptabilité. En seulement trois mois, j'ai acquis des connaissances solides que je peux désormais appliquer dans mon travail. Oui, j'ai été pleinement satisfaite de la formation. Le cabinet ACTe a non seulement répondu à mes attentes, mais les a également dépassées. Les cours étaient bien structurés, les formateurs étaient disponibles pour répondre à toutes mes questions, et le contenu de la formation était en phase avec les compétences que je souhaitais acquérir. J'ai vraiment apprécié le professionnalisme et l'accompagnement tout au long du processus. Je recommanderai volontier le cabinet ACTe à d'autres personnes car c'est un excellent environnement pour apprendre et se développer.",
    name: 'MOHAMED Richadatou',
    image: '/temoignages/mohamed.png'
  },
  {
    quote:
      "Ma formation au cabinet ACTe, parcours Gestion et organisation comptable et CMD a été enrichissante. L'expertise des formateurs m'ont permis de développer de nouvelles compétences dans le domaine du management et de la technologie. Leur capacité à adapter le contenu de la formation à nos besoins individuels a vraiment fait la différence. Absolument ! Le cabinet ACTe a non seulement répondu à mes attentes, mais a aussi dépassé certaines d'entre elles. J'ai acquis des compétences pratiques qui me seront précieuses pour ma carrière professionnelle future. OUI, je recommande vivement le cabinet ACTe à toute personne cherchant à développer ses compétences. La qualité de l'enseignement et l'approche personnalisée font de ce cabinet un lieu idéal pour se former.",
    name: 'SODOU Sévérine',
    image: '/temoignages/sodou.png'
  },
  {
    quote:
      "Ma formation en assistant de gestion au cabinet a été très fructueuse dans le sens où les cours étaient vraiment axés sur le module que j'ai choisi et j'ai vraiment aimé. J'ai été satisfaite de l'enseignement et j'ai vraiment acquis des compétences outre ce que je suis venue chercher. Sans hésiter, je recommande vivement le Cabinet ACTe à tous ceux qui veulent se faire former. Le cabinet ACTe m'a accordé un stage que je fais actuellement.",
    name: 'MATIMAIN Colette',
    image: '/temoignages/matimain.png'
  },
  {
    quote:
      "Ma formation au cabinet ACTe a été en ce qui me concerne un vrai éveil de conscience. Une expérience passionnante et inspirante au cours de laquelle j'ai pu réaliser les défis qui m'attendent dans le monde professionnel, m'armer des compétences nécessaires et pratiquer pour bâtir la confiance en soi et une mentalité pour y faire face. La formation a répondu à mes attentes et a été satisfaisante. Je recommande le cabinet à tout jeune ayant un esprit d'entreprenariat.",
    name: 'MASSABA Leben Y.',
    image: '/temoignages/massaba.png'
  },
  {
    quote:
      "Ma formation en parcours Gestion et organisation comptable au cabinet acte était excellente vue la discipline et la rigueur. J'ai été satisfaite vu que mon objectif a été atteint, la formation était un succès pour moi. Cette formation m'a apporté d'abord l'intégration sociale ensuite les connaissances nécessaires pour mon parcours professionnel. Oui je vais recommander une ou même plusieurs personnes d'aller suivre leur formation au cabinet ACTe.",
    name: 'TAMASSI Carolle',
    image: '/temoignages/carolle.png'
  }
];

export const stats = [
  { number: '300+', label: 'Jeunes formés' },
  { number: '80+', label: 'Entrepreneurs accompagnés' },
  { number: '25+', label: 'Entreprises partenaires' },
  { number: '3+', label: 'Financements obtenus' }
];

export const entrepreneurServices = [
  "Diagnostic d'entreprise et plan d'action personnalisé",
  'Appui en IA et Data et visibilité digitale',
  'Accompagnement à la recherche de financement',
  'Coaching de pitch et présentation aux investisseurs'
];

export const partners = [
  { name: 'Segal family foundation', logo: '/images_partenaires/SFF-Mobile-Logo.svg' },
  { name: 'YAS', logo: '/images_partenaires/Logo_yas.png' },
  { name: 'TOGO DATA LAB', logo: '/images_partenaires/Logo_togo_data_lab.jpeg' },
  { name: 'UK', logo: '/images_partenaires/Logo_UK.png' },
  { name: 'N\'DEWONE_KONDJI', logo: '/images_partenaires/N\'DEWONE_KONDJI.jpeg' },
  { name: 'AIESEC', logo: '/images_partenaires/Logo_AIESEC.png' },
  { name: 'cabinet ACTe', logo: '/images_partenaires/Logo_acte.jpeg' },
  { name: 'LEVEL UP TOGO', logo: '/images_partenaires/Logo_Level_Up.jpeg' },
  { name: 'TILTULAB', logo: '/images_partenaires/Logo_%20TILTULAB.png' },
  { name: 'FAEIJ', logo: '/images_partenaires/Logo_FAEIJ.png' },
  { name: 'EZAD BTP', logo: '/images_partenaires/Logo_EZAD_BTP.png' },
  { name: 'AMAC GC' },
  { name: 'CABINET FORCE DE LA NATURE' },
  { name: 'STARLAB', logo: '/images_partenaires/STARLAB.png' },
  { name: 'ECOLABTOGO', logo: '/images_partenaires/Logo_ECOLABTOGO.jpeg' },
  { name: 'TOGOCARE' },
  { name: 'EGLIX' },
  { name: 'MIGEC GROUP', logo: '/images_partenaires/Logo_MIGEC_GROUP.jpeg' },
  { name: 'CRE COMMUNICATION', logo: '/images_partenaires/logo_%20CRE.png' },
  { name: 'CEGEC', logo: '/images_partenaires/logo_CEGEC.jpg' },
  { name: 'TEAM DU TIGRE' },
  { name: 'JERANI PEARLS' }
];
