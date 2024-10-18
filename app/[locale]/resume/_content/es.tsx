import {
  Content,
  EducationSection,
  PersonalProjectsSection,
  ProfessionalExperienceSection,
  SkillsSection,
} from "./content.type";

import { GithubStars } from "../_components/GithubStars";
import { Strong } from "../_components/Strong";

const professionnalTitle = "Ingeniero Full-Stack";

const education: EducationSection = {
  name: "Educación",
  subSectionRecord: {
    phelma: {
      name: "Ingeniero en Visión por Computadora e IA\nGrenoble INP Phelma",
      subtitle: "Septiembre 2016 a Septiembre 2019",
      points: [
        "Máster SICOM: Señal, Imagen, Comunicación y Multimedia",
        "Especialidad: Visión por Computadora",
      ],
    },
    prepa: {
      name: "Clase preparatoria científica\nLycée Fabert, Metz",
      subtitle: "Septiembre 2014 a Septiembre 2016",
      points: ["PCSI/PC* (Física/Química)"],
    },
  },
};

const professionalExperience: ProfessionalExperienceSection = {
  name: "Experiencia profesional",
  subSectionRecord: {
    meero: {
      name: "Ingeniero Front-end Senior | Meero, París",
      subtitle: "Desde junio 2024 (Contrato)",
      points: [
        "Desarrollo del WebPlayer, un Web Component que permite a los concesionarios de automóviles integrar los medios procesados por Meero en su sitio web.",
        "Despliegue del paquete en NPM con varios adaptadores (React, Vue, ...).",
        "React / TailwindCSS / Web Components / TurboRepo",
      ],
    },
    souk: {
      name: "CTO como Servicio | Souk, París",
      subtitle: "Enero 2024 a Mayo 2024",
      points: [
        "Reestructuración completa de Souk, un scraper de Vinted de alto rendimiento.",
        "Next.js / React Native (Expo) / Golang / AWS",
      ],
    },
    serendy: {
      name: "Co-Fundador y CTO | Serendy, París",
      subtitle: "Marzo 2023 a Noviembre 2023",
      points: [
        "Creación de una aplicación de citas que permite a los usuarios reunirse instantáneamente en lugares elegantes",
        "React Native (Expo) / Next.js / Supabase / PostgreSQL",
      ],
    },
    milleis: {
      name: "Desarrollador Front-end | Milleis Banque Privée, París",
      subtitle: "Marzo 2023 a Junio 2023 (Freelance)",
      points: [
        "Desarrollo de herramientas para banqueros privados (firma en línea, etc.)",
        "Angular 15 / Nx / TailwindCSS / PostgreSQL",
      ],
    },
    masa: {
      name: "Desarrollador Full-Stack | MASA Group, París",
      subtitle: "Julio 2022 a Noviembre 2022 (Freelance)",
      points: [
        "Desarrollo de la herramienta de gestión para el ejército francés",
        "Angular 13 / Nest.js / Nx / PostgreSQL / TypeORM",
      ],
    },
    stockly: {
      name: "Desarrollador Front-end | Stockly, París",
      subtitle: "Febrero 2022 a Julio 2022 (Freelance)",
      points: [
        <>
          Desarrollo en <Strong>Angular</Strong> del Back Office que permite a
          los Ops comprar y enviar productos
        </>,
        <>
          Colaboración con el diseñador UI/UX en <Strong>Figma</Strong>
        </>,
      ],
    },
    forssea: {
      name: "Ingeniero Robótico Full-stack | Forssea Robotics, París",
      subtitle: "Mayo 2021 a Febrero 2022 (Contrato)",
      points: [
        "Diseño y desarrollo de la arquitectura del NAVCAM V5",
        <>
          Desarrollo de la IHM en <Strong>Angular</Strong>
        </>,
      ],
    },
    niryo: {
      name: "Ingeniero Robótico – Visión por Computadora | Niryo, Lille",
      subtitle: "Septiembre 2019 a Abril 2021 (Contrato)",
      points: [
        "Jefe de proyecto para el Vision Set para el Niryo One y el Niryo Ned",
        "Responsable de software para el Niryo Ned",
        <>
          Desarrollo de la IHM en <Strong>Angular</Strong>
        </>,
      ],
    },
  },
};

const skills: SkillsSection = {
  name: "Habilidades",
  subSectionRecord: {
    web: {
      name: "Stack Web",
      points: [
        "React.js / Next.js / Angular",
        "TypeScript - TailwindCSS",
        "Móvil: React Native / Expo",
        "Back-End: Node.js / Nest.js",
        "BDD: PostgreSQL & Firestore",
        "Despliegue: AWS / Vercel / Docker",
        "Pruebas: Jest",
      ],
    },
    misc: {
      name: "Varios",
      points: [
        "Git - Linux",
        "CI/CD: GitHub Action/GitLab CI",
        "Scraping",
        "Go / Python / C++",
        "UI/UX: Figma",
        "Visión: OpenCV",
        "IA: Tensorflow",
        "Robótica: ROS",
      ],
    },
  },
};

const personalProjects: PersonalProjectsSection = {
  name: "Proyectos personales",
  subSectionRecord: {
    tgvMaxExtra: {
      name: "TGV Max Extra | SaaS | 2021/22",
      points: [
        "Notifica a los usuarios cuando nuevos trenes TGV Max están disponibles a 0€",
        "500+ suscriptores, 1000+ alertas enviadas",
      ],
    },
    sudokuSolver: {
      name: "Sudoku Solver | 2019",
      nameExtra: <GithubStars stars={600} />,
      points: ["Resolución de Sudokus en tiempo real"],
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
