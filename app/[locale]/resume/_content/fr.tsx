import {
  Content,
  EducationSection,
  PersonalProjectsSection,
  ProfessionalExperienceSection,
  SkillsSection,
} from "./content.type";

import { GithubStars } from "../_components/GithubStars";
import { Strong } from "../_components/Strong";

const professionnalTitle = "Ingénieur Full-Stack";

const education: EducationSection = {
  name: "Éducation",
  subSectionRecord: {
    phelma: {
      name: "Ingénieur Computer Vision & IA\nGrenoble INP Phelma",
      subtitle: "Septembre 2016 à Septembre 2019",
      points: [
        "Master SICOM : Signal, Image, Communication & Multimédia",
        "Spécialité : Computer Vision",
      ],
    },
    prepa: {
      name: "Classe préparatoire scientifique\nLycée Fabert, Metz",
      subtitle: "Septembre 2014 à Septembre 2016",
      points: ["PCSI/PC* (Physique/Chimie)"],
    },
  },
};

const professionalExperience: ProfessionalExperienceSection = {
  name: "Expérience professionnelle",
  subSectionRecord: {
    meero: {
      name: "Ingénieur Front-end Sénior | Meero, Paris",
      subtitle: "Depuis Juin 2024 (CDI)",
      points: [
        "Création du WebPlayer, un Web Component permettant aux concessionnaires automobiles d'intégrer les médias traités par Meero directement sur leur site web.",
        "Déploiement du package sur NPM avec différents adaptateurs (React, Vue, ...).",
        "React / TailwindCSS / Web Components / TurboRepo",
      ],
    },
    souk: {
      name: "CTO as a Service | Souk, Paris",
      subtitle: "Janvier 2024 à Mai 2024",
      points: [
        "Refonte totale de Souk, un scraper Vinted haute performance.",
        "Next.js / React Native (Expo) / Golang / AWS",
      ],
    },
    serendy: {
      name: "Co-Fondateur & CTO | Serendy, Paris",
      subtitle: "Mars 2023 à Novembre 2023",
      points: [
        "Création d'une application de rencontres permettant aux utilisateurs de se rencontrer instantanément dans des lieux chics",
        "React Native (Expo) / Next.js / Supabase / PostgreSQL",
      ],
    },
    milleis: {
      name: "Développeur Front-end | Milleis Banque Privée, Paris",
      subtitle: "Mars 2023 à Juin 2023 (Freelance)",
      points: [
        "Développement d'outils pour les banquiers privés (signature en ligne, etc)",
        "Angular 15 / Nx / TailwindCSS / PostgreSQL",
      ],
    },
    masa: {
      name: "Développeur Full-Stack | MASA Group, Paris",
      subtitle: "Juillet 2022 à Novembre 2022 (Freelance)",
      points: [
        "Développement de l'outil de gestion pour l'armée française",
        "Angular 13 / Nest.js / Nx / PostgreSQL / TypeORM",
      ],
    },
    stockly: {
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
    forssea: {
      name: "Ingénieur Robotique Full-stack | Forssea Robotics, Paris",
      subtitle: "Mai 2021 à Février 2022 (CDI)",
      points: [
        "Conception et développement de l'architecture du NAVCAM V5",
        <>
          Développement de l&apos;IHM en <Strong>Angular</Strong>
        </>,
      ],
    },
    niryo: {
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
  },
};

const skills: SkillsSection = {
  name: "Compétences",
  subSectionRecord: {
    web: {
      name: "Stack Web",
      points: [
        "React.js / Next.js / Angular",
        "TypeScript - TailwindCSS",
        "Mobile : React Native / Expo",
        "Back-End : Node.js / Nest.js",
        "BDD : PostgreSQL & Firestore",
        "Déploiement: AWS / Vercel / Docker",
        "Tests: Jest",
      ],
    },
    misc: {
      name: "Divers",
      points: [
        "Git - Linux",
        "CI/CD : GitHub Action/GitLab CI",
        "Go / Python / C++",
        "Scraping",
        "UI/UX : Figma",
        "Vision: OpenCV",
        "IA : Tensorflow",
        "Robotics : ROS",
      ],
    },
  },
};

const personalProjects: PersonalProjectsSection = {
  name: "Projets personnels",
  subSectionRecord: {
    tgvMaxExtra: {
      name: "TGV Max Extra | SaaS | 2021/22",
      points: [
        "Alerte les utilisateurs lorsque de nouveaux billets TGV Max sont disponibles à 0€",
        "500+ abonnés, 1000+ alertes envoyées",
      ],
    },
    sudokuSolver: {
      name: "Sudoku Solver | 2019",
      nameExtra: <GithubStars stars={600} />,
      points: ["Résolution de Sudokus en temps réel"],
    },
  },
};

const content: Content = {
  professionnalTitle,

  education,
  professionalExperience,
  skills,
  personalProjects,
};

export default content;
