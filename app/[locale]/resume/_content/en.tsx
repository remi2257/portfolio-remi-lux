import {
  Content,
  EducationSection,
  PersonalProjectsSection,
  ProfessionalExperienceSection,
  SkillsSection,
} from "./content.type";

import { GithubStars } from "../_components/GithubStars";
import { Strong } from "../_components/Strong";

const headerSubtitle = "5+ years of experience";

const education: EducationSection = {
  name: "Education",
  subSectionRecord: {
    phelma: {
      name: "Computer Vision & AI Engineer\nGrenoble INP Phelma",
      subtitle: "From Sept. 2016 to Sept. 2019",
      points: [
        "SICOM Master: Signal, Image, Communication & Multimedia",
        "Specialty: Computer Vision",
      ],
    },
    prepa: {
      name: "Scientific preparatory class\nLycée Fabert, Metz",
      subtitle: "From Sept. 2014 to Sept. 2016",
      points: ["PCSI/PC* (Physics/Chemistry)"],
    },
  },
};

const professionalExperience: ProfessionalExperienceSection = {
  name: "Professional experience",
  subSectionRecord: {
    meero: {
      name: "Senior Front-End Engineer | Meero, Paris",
      subtitle: "Since June 2024 (Contract)",
      points: [
        "Development of the WebPlayer, a customisable Web Component enabling car dealerships to showcase Meero-processed media directly on their sites → React / TailwindCSS",
        "Publication on NPM with various adapters (Next.js, Vue, ...)",
        "Development of the Back-Office application → Next.js",
      ],
    },
    freelance: {
      name: "Freelance Full-Stack Engineer | Paris",
      subtitle: "From February 2022 to May 2024",
      points: [
        <>
          <Strong>Souk</Strong>: Rebranding & scaling of a high-performance
          Vinted scraper. Publication of the mobile application on both stores &
          the Web app
          {"\n"}→ Next.js / React Native (Expo) / Golang
        </>,
        <>
          <Strong>Serendy</Strong>: Creation of a dating app enabling users to
          meet instantly in chic locations. Published on both App Store and Play
          Store
          {"\n"}→ React Native (Expo) / Next.js / PostgreSQL
        </>,
        <>
          <Strong>Milleis Private Bank</Strong>: Development of tools for
          private bankers (creating & managing customer records, online
          signatures, ...)
          {"\n"}→ React / TailwindCSS
        </>,
        <>
          <Strong>MASA Group</Strong>: Development of a management tool for the
          French army
          {"\n"}→ Angular / Nest.js / PostgreSQL
        </>,
        <>
          <Strong>Stockly</Strong>: Development of the Back-Office application
          enabling operational staff to purchase and ship products
          {"\n"}→ Angular
        </>,
      ],
    },
    forssea: {
      name: "Software Engineer | Forssea Robotics, Paris",
      subtitle: "From May 2021 to February 2022 (Contract)",
      points: [
        "Architecture and development of the NAVCAM → C++",
        "NAVCAM's GUI development → Angular",
      ],
    },
    niryo: {
      name: "Software Engineer | Niryo, Lille",
      subtitle: "From Sept. 2019 to April 2021 (Contract)",
      points: [
        "Architecture and development of the Niryo Ned & its Vision Set → Python",
        "Development of the Niryo Studio GUI → Angular",
      ],
    },
  },
};

const skills: SkillsSection = {
  name: "Skills",
  subSectionRecord: {
    web: {
      name: "Web Stack",
      points: [
        "React.js / Next.js",
        "TypeScript - TailwindCSS",
        "Mobile: React Native / Expo",
        "Back-End: Node.js / PostgreSQL",
      ],
    },
    misc: {
      name: "Miscellaneous",
      points: [
        "Git - Linux",
        "CI/CD: GitHub Actions/GitLab CI",
        "Go / Python / C++",
        "UI/UX: Figma",
      ],
    },
  },
};

const personalProjects: PersonalProjectsSection = {
  name: "Personnal projects",
  subSectionRecord: {
    tgvMaxExtra: {
      name: "TGV Max Extra | SaaS | 2021/22",
      points: [
        "Alert system notifying users when new TGV Max trains are available at 0€",
        "500+ subscribers, 1000+ alerts sent",
      ],
    },
    sudokuSolver: {
      name: "Sudoku Solver | 2019",
      nameExtra: <GithubStars stars={600} />,
      points: ["Sudokus solving in real-time"],
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
