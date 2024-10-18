import {
  Content,
  EducationSection,
  PersonalProjectsSection,
  ProfessionalExperienceSection,
  SkillsSection,
} from "./content.type";

import { GithubStars } from "../_components/GithubStars";
import { Strong } from "../_components/Strong";

const professionnalTitle = "Full-Stack Engineer";

const education: EducationSection = {
  name: "Education",
  subSectionRecord: {
    phelma: {
      name: "Computer Vision & AI Engineer\nGrenoble INP Phelma",
      subtitle: "September 2016 to September 2019",
      points: [
        "SICOM Master: Signal, Image, Communication & Multimedia",
        "Specialty: Computer Vision",
      ],
    },
    prepa: {
      name: "Scientific preparatory class\nLycée Fabert, Metz",
      subtitle: "September 2014 to September 2016",
      points: ["PCSI/PC* (Physics/Chemistry)"],
    },
  },
};

const professionalExperience: ProfessionalExperienceSection = {
  name: "Professional experience",
  subSectionRecord: {
    meero: {
      name: "Senior Front-end Engineer | Meero, Paris",
      subtitle: "Since June 2024 (Contract)",
      points: [
        "Development of the WebPlayer, a Web Component allowing car dealerships to integrate media processed by Meero directly on their website.",
        "Deployment of the package on NPM with various adapters (React, Vue, ...).",
        "React / TailwindCSS / Web Components / TurboRepo",
      ],
    },
    souk: {
      name: "CTO as a Service | Souk, Paris",
      subtitle: "January 2024 to May 2024",
      points: [
        "Reimagined Souk fully, a high-performance Vinted scraper.",
        "Next.js / React Native (Expo) / Golang / AWS",
      ],
    },
    serendy: {
      name: "Co-Founder & CTO | Serendy, Paris",
      subtitle: "March 2023 to November 2023",
      points: [
        "Creation of a dating app' enabling users to meet instantly in chic locations",
        "React Native (Expo) / Next.js / Supabase / PostgreSQL",
      ],
    },
    milleis: {
      name: "Front-end Developer | Milleis Banque Privée, Paris",
      subtitle: "March 2023 to June 2023 (Freelance)",
      points: [
        "Development of tools for private bankers (file creation, online signature, etc)",
        "Angular 15 / Nx / TailwindCSS / PostgreSQL",
      ],
    },
    masa: {
      name: "Full-Stack Developer | MASA Group, Paris",
      subtitle: "July 2022 to November 2022 (Freelance)",
      points: [
        "Development of the management tool for the French army",
        "Angular 13 / Nest.js / Nx / PostgreSQL / TypeORM",
      ],
    },
    stockly: {
      name: "Front-end Developer | Stockly, Paris",
      subtitle: "February 2022 to July 2022 (Freelance)",
      points: [
        <>
          Development in <Strong>Angular</Strong> of the Back Office enabling
          operational staff to purchase and ship products
        </>,
        <>
          Collaboration with the UI/UX designer on <Strong>Figma</Strong>
        </>,
      ],
    },
    forssea: {
      name: "Robotics Engineer Full-stack| Forssea Robotics, Paris",
      subtitle: "May 2021 to February 2022 (Contract)",
      points: [
        "Architecture design and development of the NAVCAM V5",
        <>
          Development of the HMI in <Strong>Angular</Strong>
        </>,
      ],
    },
    niryo: {
      name: "Robotics Engineer – Computer Vision | Niryo, Lille",
      subtitle: "September 2019 to April 2021 (Contract)",
      points: [
        "Software leader for the Vision Set for the Niryo One & Niryo Ned",
        "Software leader for the Niryo Ned",
        <>
          Development of the HMI in <Strong>Angular</Strong>
        </>,
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
        "React.js / Next.js / Angular",
        "TypeScript - TailwindCSS",
        "Mobile: React Native / Expo",
        "Back-End: Node.js / Nest.js",
        "DB: PostgreSQL & Firestore",
        "Deployment: AWS / Vercel / Docker",
        "Testing: Jest",
      ],
    },
    misc: {
      name: "Miscellaneous",
      points: [
        "Git - Linux",
        "CI/CD: GitHub Action/GitLab CI",
        "Scraping",
        "Go / Python / C++",
        "UI/UX: Figma",
        "Vision: OpenCV",
        "AI: Tensorflow",
        "Robotics: ROS",
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
  professionnalTitle,

  education,
  professionalExperience,
  skills,
  personalProjects,
};

export default content;
