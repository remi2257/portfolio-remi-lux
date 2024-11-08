import {
  Content,
  EducationSection,
  PersonalProjectsSection,
  ProfessionalExperienceSection,
  SkillsSection,
} from "./content.type";

import { GithubStars } from "../_components/GithubStars";
import { Strong } from "../_components/Strong";

const headerSubtitle = "5+ années d'expérience";

const education: EducationSection = {
  name: "Éducation",
  subSectionRecord: {
    phelma: {
      name: "Ingénieur Computer Vision & IA\nGrenoble INP Phelma",
      subtitle: "De Sept. 2016 à Sept. 2019",
      points: [
        "Master SICOM : Signal, Image, Communication & Multimédia",
        "Spécialité : Computer Vision",
      ],
    },
    prepa: {
      name: "Classe préparatoire scientifique\nLycée Fabert, Metz",
      subtitle: "De Sept. 2014 à Sept. 2016",
      points: ["PCSI/PC* (Physique/Chimie)"],
    },
  },
};

const professionalExperience: ProfessionalExperienceSection = {
  name: "Expérience professionnelle",
  subSectionRecord: {
    meero: {
      name: "Ingénieur Front-End Sénior | Meero, Paris",
      subtitle: "Depuis Juin 2024 (CDI)",
      points: [
        "Création du WebPlayer, un Web Component permettant aux concessionnaires automobiles d'intégrer les médias traités par Meero directement sur leur site web → React / TailwindCSS",
        "Publication sur NPM avec différents adaptateurs (Next.js, Vue, ...)",
        "Développement de l'application Back-Office → Next.js",
      ],
    },
    freelance: {
      name: "Ingénieur Full-Stack Freelance | Paris",
      subtitle: "De Février 2022 à Mai 2024",
      points: [
        <>
          <Strong>Souk</Strong> : Refonte et Scaling d&apos;un scraper Vinted
          haute performance. Création d&apos;une nouvelle image de marque.
          Publication de l&apos;application mobile sur les deux stores et
          déploiement de l&apos;application Web
          {"\n"}→ Next.js / React Native (Expo) / Golang
        </>,
        <>
          <Strong>Serendy</Strong> : Création d&apos;une application de
          rencontres permettant des rencontres instantanées. Publication sur
          l&apos;App Store et le Play Store
          {"\n"}→ React Native (Expo) / Next.js / PostgreSQL
        </>,
        <>
          <Strong>Milleis Banque Privée</Strong> : Développement d&apos;outils
          pour les banquiers : création de fichiers clients, signatures en
          ligne, ...
          {"\n"}→ React / TailwindCSS
        </>,
        <>
          <Strong>MASA Group</Strong> : Développement de GEFORA, un outil
          stratégique permettant à l&apos;armée française de superviser les
          troupes et les opérations
          {"\n"}→ Angular / Nest.js / PostgreSQL
        </>,
        <>
          <Strong>Stockly</Strong> : Développement du Back Office permettant au
          personnel opérationnel de suivre les achats et envois de produits
          {"\n"}→ Angular
        </>,
      ],
    },
    forssea: {
      name: "Ingénieur Logiciel | Forssea Robotics, Paris",
      subtitle: "De Mai 2021 à Février 2022 (CDI)",
      points: [
        "Architecture et développement de la NAVCAM → C++",
        "Développement de l'IHM de la NAVCAM → Angular",
      ],
    },
    niryo: {
      name: "Ingénieur Logiciel | Niryo, Lille",
      subtitle: "De Sept. 2019 à Avril 2021 (CDI)",
      points: [
        "Architecture et développement du Niryo Ned et de son Vision Set → Python",
        "Développement de l'IHM Niryo Studio → Angular",
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
        "React.js / Next.js",
        "TypeScript - TailwindCSS",
        "Mobile : React Native / Expo",
        "Back-End : Node.js / PostgreSQL",
      ],
    },
    misc: {
      name: "Divers",
      points: [
        "Git - Linux",
        "CI/CD : GitHub Actions/GitLab CI",
        "Go / Python / C++",
        "UI/UX : Figma",
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
        "Alerte les utilisateurs lorsque de nouveaux billets à 0€ sont disponibles",
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
  headerSubtitle,

  education,
  professionalExperience,
  skills,
  personalProjects,
};

export default content;
