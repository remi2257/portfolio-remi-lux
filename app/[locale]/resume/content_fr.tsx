import { Content, GithubStars, Section, Strong } from "./content";

const jobTitle = "Ingénieur Full-Stack";

const education: Section = {
  name: "Éducation",
  subSectionList: [
    {
      name: "Ingénieur Computer Vision & IA\nGrenoble INP Phelma",
      subtitle: "Septembre 2016 à Septembre 2019",
      points: [
        "Master SICOM : Signal, Image, Communication & Multimédia",
        "Spécialité : Computer Vision",
      ],
    },
    {
      name: "Classe préparatoire scientifique\nLycée Fabert, Metz",
      subtitle: "Septembre 2014 à Septembre 2016",
      points: ["PCSI/PC* (Physique/Chimie)"],
    },
  ],
};

const professionalExperience: Section = {
  name: "Expérience professionnelle",
  subSectionList: [
    {
      name: "CTO as a Service | Souk, Paris",
      subtitle: "Janvier 2024 à Mai 2024",
      points: [
        "Refonte totale de Souk, un scraper Vinted haute performance.",
        "Next.js / React Native (Expo) / Golang / AWS",
      ],
    },
    {
      name: "Co-Fondateur & CTO | Serendy, Paris",
      subtitle: "Mars 2023 à Novembre 2023",
      points: [
        "Création d'une application de rencontres permettant aux utilisateurs de se rencontrer instantanément dans des lieux chics",
        "React Native (Expo) / Next.js / Supabase / PostgreSQL",
      ],
    },
    {
      name: "Développeur Front-end | Milleis Banque Privée, Paris",
      subtitle: "Mars 2023 à Juin 2023 (Freelance)",
      points: [
        "Développement d'outils pour les banquiers privés (signature en ligne, etc)",
        "Angular 15 / Nx / TailwindCSS / PostgreSQL",
      ],
    },
    {
      name: "Développeur Full-Stack | MASA Group, Paris",
      subtitle: "Juillet 2022 à Novembre 2022 (Freelance)",
      points: [
        "Développement de l'outil de gestion pour l'armée française",
        "Angular 13 / Nest.js / Nx / PostgreSQL / TypeORM",
      ],
    },
    {
      name: "Développeur Front-end | Stockly, Paris",
      subtitle: "Février 2022 à Juillet 2022 (Freelance)",
      points: [
        <>
          Développement en <Strong>Angular</Strong> du Back Office permettant
          aux Ops&apos; d&apos;acheter et d&apos;expédier des produits
        </>,
        <>
          Collaboration avec le designer UI/UX sur <Strong>Figma</Strong>
        </>,
      ],
    },
    {
      name: "Ingénieur Robotique Full-stack | Forssea Robotics, Paris",
      subtitle: "Mai 2021 à Février 2022 (CDI)",
      points: [
        "Conception et développement de l'architecture du NAVCAM V5",
        <>
          Développement de l&apos;IHM en <Strong>Angular</Strong>
        </>,
      ],
    },
    {
      name: "Ingénieur Robotique – Computer Vision | Niryo, Lille",
      subtitle: "Septembre 2019 à Avril 2021 (CDI)",
      points: [
        "Chef de projet pour le Vision Set pour le Niryo One & Niryo Ned",
        "Responsable logiciel pour le Niryo Ned",
        <>
          Développement de l&apos;IHM en <Strong>Angular</Strong>
        </>,
      ],
    },
  ],
};

const skills: Section = {
  name: "Compétences",
  subSectionList: [
    {
      name: "Stack Web",
      points: [
        "React.js / Next.js / Angular",
        "HMTL/CSS - JavaScript/TypeScript",
        "Mobile : React Native / Expo",
        "Style : TailwindCSS/SCSS",
        "Back-End : Node.js / Nest.js",
        "BDD : PostgreSQL & Firestore",
        "Déploiement: AWS / Vercel / Docker",
        "Tests: Jest",
      ],
    },
    {
      name: "Divers",
      points: [
        "Git - Linux",
        "CI/CD : GitHub Action/GitLab CI",
        "Node.js / Go / Python / C++",
        "UI/UX : Figma",
        "Vision: OpenCV",
        "IA : Tensorflow",
        "Robotics : ROS",
      ],
    },
  ],
};

const personalProjects: Section = {
  name: "Projets personnels",
  subSectionList: [
    {
      name: "TGV Max Extra | SaaS | Août 2021 – Février 2022",
      points: [
        "Système d'alerte notifiant les utilisateurs lorsque de nouveaux trains TGV Max sont disponibles",
        "500+ abonnés, 1000+ alertes envoyées",
      ],
    },
    {
      name: "Sudoku Solver | Computer Vision | 2019",
      nameExtra: <GithubStars stars={600} />,
      points: [
        "Extraction, Résolution & Reconstruction de grilles de Sudoku extraites d'un flux vidéo en temps réel",
      ],
    },
  ],
};

const content: Content = {
  jobTitle,

  education,
  professionalExperience,
  skills,
  personalProjects,
};

export default content;
