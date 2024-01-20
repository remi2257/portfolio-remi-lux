export type SmallSectionData = {
  name: React.ReactNode;
  subtitle?: string;
  points: React.ReactNode[];
};

export const educationData: SmallSectionData[] = [
  {
    name: "Computer Vision & AI Engineer\nGrenoble INP Phelma",
    subtitle: "September 2016 to September 2019",
    points: [
      "SICOM Master : Signal, Image, Communication & Multimedia",
      "Specialty : Computer Vision & AI",
    ],
  },
  {
    name: "Scientific preparatory class\nLycée Fabert, Metz",
    subtitle: "September 2014 to September 2016",
    points: ["PCSI/PC* (Physics/Chemistry)"],
  },
];

export const professionalExperienceData: SmallSectionData[] = [
  {
    name: "Co-Founder & CTO | Serendy, Paris",
    subtitle: "March 2023 to November 2023",
    points: [
      "Development of a dating application enabling users to meet instantly in chic locations",
      "React Native / Next.js / Supabase / PostgreSQL",
    ],
  },
  {
    name: "Angular Developer | Milleis Banque Privée, Paris",
    subtitle: "March 2023 to June 2023 (Freelance)",
    points: [
      "Angular development of tools for Milleis private bankers (file creation, online signature, etc)",
    ],
  },
  {
    name: "Full-Stack Developer | MASA Group, Paris",
    subtitle: "July 2022 to November 2022 (Freelance)",
    points: [
      "Development of the management tool for the French army",
      "Angular 13 / Nest.js / Nx / PostgreSQL / TypeORM",
    ],
  },
  {
    name: "Angular Developer | Stockly, Paris",
    subtitle: "February 2022 to July 2022 (Freelance)",
    points: [
      "Development in Angular of the Back Office enabling operational staff to purchase and ship products",
    ],
  },
  {
    name: "Robotics Engineer Full-stack | Forssea Robotics, Paris",
    subtitle: "May 2021 to February 2022 (CDI)",
    points: ["Architecture design and development of the NAVCAM V5"],
  },
  {
    name: "Robotics Engineer – Computer Vision | Niryo, Lille",
    subtitle: "September 2019 to April 2021 (CDI)",
    points: [
      "Project leader for the Vision Set marketed on the Niryo One",
      "Software leader for the Niryo Ned robot",
    ],
  },
];

export const skillsData: SmallSectionData[] = [
  {
    name: "Web Stack",
    points: [
      "React.js / Next.js / Angular",
      "HMTL/CSS - JavaScript/TypeScript",
      "TailwindCSS",
      "Back-End : Node.js / Nest.js",
      "DB : PostgreSQL",
      "ORM : TypeORM",
      "Cloud: Supabase & Firebase",
      "Tests: Jest",
    ],
  },
  {
    name: "Miscellaneous",
    points: [
      "Git - Linux",
      "CI/CD : GitHub Action/GitLab CI",
      "Vision: OpenCV",
      "IA : Tensorflow",
      "Robotics : ROS",
      "Python / C++",
    ],
  },
];

export const personnalProjectsData: SmallSectionData[] = [
  {
    name: "Profile Perfect AI | SaaS | December 2023",
    points: [
      "Lets everyone generate ultra-realistic portraits of themselves",
      "Next.js, Supabase, GPU Cloud, Stripe",
    ],
  },
  {
    name: "TGV Max Extra | SaaS | August 2021 – February 2022",
    points: [
      "Alert system notifying users when new TGV Max trains are available",
      "500+ subscribers, 1000+ alerts sent",
    ],
  },
  {
    name: "Sudoku Solver | Computer Vision | 2019",
    points: [
      "Extraction, Resolution & Reconstruction of Sudoku grids extracted from a real-time video stream",
    ],
  },
];
