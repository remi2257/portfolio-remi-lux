import { Image as ImagePdf, Text, View } from "@react-pdf/renderer";

import { Content, Link, Section, Strong } from "./content";

const jobTitle = "Full-Stack Engineer";

const education: Section = {
  name: "Education",
  subSectionList: [
    {
      name: "Computer Vision & AI Engineer\nGrenoble INP Phelma",
      subtitle: "September 2016 to September 2019",
      points: [
        "SICOM Master: Signal, Image, Communication & Multimedia",
        "Specialty: Computer Vision",
      ],
    },
    {
      name: "Scientific preparatory class\nLycée Fabert, Metz",
      subtitle: "September 2014 to September 2016",
      points: ["PCSI/PC* (Physics/Chemistry)"],
    },
  ],
};

const professionalExperience: Section = {
  name: "Professional experience",
  subSectionList: [
    {
      name: (
        <>
          CTO as a Service | <Link src="https://souk.to">Souk</Link>, Paris
        </>
      ),
      subtitle: "Since January 2024",
      points: [
        "Reimagined Souk fully, a high-performance Vinted scraper.",
        "Next.js / React Native (Expo) / Golang / AWS",
      ],
    },
    {
      name: (
        <>
          Co-Founder & CTO | <Link src="https://serendy.io/">Serendy</Link>,
          Paris
        </>
      ),
      subtitle: "March 2023 to November 2023",
      points: [
        "Creation of a dating app' enabling users to meet instantly in chic locations",
        "React Native (Expo) / Next.js / Supabase / PostgreSQL",
      ],
    },
    {
      name: (
        <>
          Front-end Developer |{" "}
          <Link src="https://www.milleis.fr/">Milleis Banque Privée</Link>,
          Paris
        </>
      ),
      subtitle: "March 2023 to June 2023 (Freelance)",
      points: [
        "Development of tools for private bankers (file creation, online signature, etc)",
        "Angular 15 / Nx / TailwindCSS / PostgreSQL",
      ],
    },
    {
      name: (
        <>
          Full-Stack Developer |{" "}
          <Link src="https://www.masasim.com/">MASA Group</Link>, Paris
        </>
      ),
      subtitle: "July 2022 to November 2022 (Freelance)",
      points: [
        "Development of the management tool for the French army",
        "Angular 13 / Nest.js / Nx / PostgreSQL / TypeORM",
      ],
    },
    {
      name: (
        <>
          Front-end Developer |{" "}
          <Link src="https://www.stockly.ai/"> Stockly</Link>, Paris
        </>
      ),
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
    {
      name: (
        <>
          Robotics Engineer Full-stack |{" "}
          <Link src="https://forssea-robotics.fr/">Forssea Robotics</Link>,
          Paris
        </>
      ),
      subtitle: "May 2021 to February 2022 (CDI)",
      points: [
        "Architecture design and development of the NAVCAM V5",
        <>
          Development of the HMI in <Strong>Angular</Strong>
        </>,
      ],
    },
    {
      name: (
        <>
          Robotics Engineer – Computer Vision |{" "}
          <Link src="https://niryo.com/">Niryo</Link>, Lille
        </>
      ),
      subtitle: "September 2019 to April 2021 (CDI)",
      points: [
        <>
          Project leader for the{" "}
          <Link src="https://niryo.com/products-cobots/robot-ned-2/">
            Vision Set
          </Link>{" "}
          for the Niryo One & Niryo Ned
        </>,
        <>
          Software leader for the{" "}
          <Link src="https://niryo.com/products-cobots/vision-set-ned2/">
            Niryo Ned
          </Link>{" "}
        </>,
        <>
          Development of the HMI in <Strong>Angular</Strong>
        </>,
      ],
    },
  ],
};

const skills: Section = {
  name: "Skills",
  subSectionList: [
    {
      name: "Web Stack",
      points: [
        "React.js / Next.js / Angular",
        "HMTL/CSS - JavaScript/TypeScript",
        "Mobile: React Native / Expo",
        "Styling: TailwindCSS/SCSS",
        "Back-End: Node.js / Nest.js",
        "DB: PostgreSQL & Firestore",
        "Deployment: AWS / Vercel / Docker",
        "Testing: Jest",
      ],
    },
    {
      name: "Miscellaneous",
      points: [
        "Git - Linux",
        "CI/CD: GitHub Action/GitLab CI",
        "Node.js / Go / Python / C++",
        "UI/UX: Figma",
        "Vision: OpenCV",
        "AI: Tensorflow",
        "Robotics: ROS",
      ],
    },
  ],
};

const personnalProjects: Section = {
  name: "Personnal projects",
  subSectionList: [
    {
      name: "TGV Max Extra | SaaS | August 2021 – February 2022",
      points: [
        "Alert system notifying users when new TGV Max trains are available",
        "500+ subscribers, 1000+ alerts sent",
      ],
    },
    {
      name: "Sudoku Solver | Computer Vision | 2019",
      nameExtra: (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 1,
          }}
        >
          <ImagePdf
            src="/assets/github.png"
            style={{
              width: 10,
              height: 10,
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 11,
              marginTop: 1,
              marginLeft: 4,
              marginRight: 1,
            }}
          >
            600{" "}
          </Text>
          <ImagePdf
            src="/assets/github_star.png"
            style={{
              width: 10,
              height: 10,
            }}
          />
        </View>
      ),
      points: [
        "Extraction, Resolution & Reconstruction of Sudoku grids extracted from a real-time video stream",
      ],
    },
  ],
};

const content: Content = {
  jobTitle,
  education,
  professionalExperience,
  skills,
  personnalProjects,
};

export default content;
