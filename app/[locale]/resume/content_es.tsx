import { Content, GithubStars, Section, Strong } from "./content";

const jobTitle = "Ingeniero Full-Stack";

const education: Section = {
  name: "Educación",
  subSectionList: [
    {
      name: "Ingeniero en Visión por Computadora e IA\nGrenoble INP Phelma",
      subtitle: "Septiembre 2016 a Septiembre 2019",
      points: [
        "Máster SICOM: Señal, Imagen, Comunicación y Multimedia",
        "Especialidad: Visión por Computadora",
      ],
    },
    {
      name: "Clase preparatoria científica\nLycée Fabert, Metz",
      subtitle: "Septiembre 2014 a Septiembre 2016",
      points: ["PCSI/PC* (Física/Química)"],
    },
  ],
};

const professionalExperience: Section = {
  name: "Experiencia profesional",
  subSectionList: [
    {
      name: "CTO como Servicio | Souk, París",
      subtitle: "Enero 2024 a Mayo 2024",
      points: [
        "Reestructuración completa de Souk, un scraper de Vinted de alto rendimiento.",
        "Next.js / React Native (Expo) / Golang / AWS",
      ],
    },
    {
      name: "Co-Fundador y CTO | Serendy, París",
      subtitle: "Marzo 2023 a Noviembre 2023",
      points: [
        "Creación de una aplicación de citas que permite a los usuarios reunirse instantáneamente en lugares elegantes",
        "React Native (Expo) / Next.js / Supabase / PostgreSQL",
      ],
    },
    {
      name: "Desarrollador Front-end | Milleis Banque Privée, París",
      subtitle: "Marzo 2023 a Junio 2023 (Freelance)",
      points: [
        "Desarrollo de herramientas para banqueros privados (firma en línea, etc.)",
        "Angular 15 / Nx / TailwindCSS / PostgreSQL",
      ],
    },
    {
      name: "Desarrollador Full-Stack | MASA Group, París",
      subtitle: "Julio 2022 a Noviembre 2022 (Freelance)",
      points: [
        "Desarrollo de la herramienta de gestión para el ejército francés",
        "Angular 13 / Nest.js / Nx / PostgreSQL / TypeORM",
      ],
    },
    {
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
    {
      name: "Ingeniero Robótico Full-stack | Forssea Robotics, París",
      subtitle: "Mayo 2021 a Febrero 2022 (CDI)",
      points: [
        "Diseño y desarrollo de la arquitectura del NAVCAM V5",
        <>
          Desarrollo de la IHM en <Strong>Angular</Strong>
        </>,
      ],
    },
    {
      name: "Ingeniero Robótico – Visión por Computadora | Niryo, Lille",
      subtitle: "Septiembre 2019 a Abril 2021 (CDI)",
      points: [
        "Jefe de proyecto para el Vision Set para el Niryo One y el Niryo Ned",
        "Responsable de software para el Niryo Ned",
        <>
          Desarrollo de la IHM en <Strong>Angular</Strong>
        </>,
      ],
    },
  ],
};

const skills: Section = {
  name: "Habilidades",
  subSectionList: [
    {
      name: "Stack Web",
      points: [
        "React.js / Next.js / Angular",
        "HTML/CSS - JavaScript/TypeScript",
        "Móvil: React Native / Expo",
        "Estilo: TailwindCSS/SCSS",
        "Back-End: Node.js / Nest.js",
        "BDD: PostgreSQL & Firestore",
        "Despliegue: AWS / Vercel / Docker",
        "Pruebas: Jest",
      ],
    },
    {
      name: "Varios",
      points: [
        "Git - Linux",
        "CI/CD: GitHub Action/GitLab CI",
        "Node.js / Go / Python / C++",
        "UI/UX: Figma",
        "Visión: OpenCV",
        "IA: Tensorflow",
        "Robótica: ROS",
      ],
    },
  ],
};

const personalProjects: Section = {
  name: "Proyectos personales",
  subSectionList: [
    {
      name: "TGV Max Extra | SaaS | Agosto 2021 – Febrero 2022",
      points: [
        "Sistema de alerta que notifica a los usuarios cuando nuevos trenes TGV Max están disponibles",
        "500+ suscriptores, 1000+ alertas enviadas",
      ],
    },
    {
      name: "Sudoku Solver | Visión por Computadora | 2019",
      nameExtra: <GithubStars stars={600} />,
      points: [
        "Extracción, Resolución y Reconstrucción de rejillas de Sudoku extraídas de un flujo de video en tiempo real",
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
