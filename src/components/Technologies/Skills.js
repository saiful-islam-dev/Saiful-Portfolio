// React Icons - Di (Devicons)
import { DiHtml5, DiReact, DiNodejs, DiMongodb } from "react-icons/di";

// React Icons - Si (Simple Icons)
import {
  SiFirebase,
  SiCss3,
  SiMysql,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiAntdesign,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiJsonwebtokens,
  SiMongoose 
} from "react-icons/si";

import { FaJsSquare, FaGit } from "react-icons/fa";


export const Skills = [
  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Static webpages and portfolio projects</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Styling of my webpages</>,
  },
  {
    slug: "javascript",
    Component: FaJsSquare,
    title: "JavaScript",
    Description: () => <>Dynamic web development</>,
  },
  {
    slug: "typescript",
    Component: SiTypescript,
    title: "TypeScript",
    Description: () => <>JavaScript with static typing</>,
  },
  {
    slug: "react",
    Component: DiReact,
    title: "ReactJS",
    Description: () => <>Building interactive UIs</>,
  },
  {
    slug: "redux",
    Component: SiRedux,
    title: "Redux",
    Description: () => <>State management for React applications</>,
  },
  {
    slug: "tailwind",
    Component: SiTailwindcss,
    title: "Tailwind CSS",
    Description: () => <>Utility-first CSS framework</>,
  },
  {
    slug: "bootstrap",
    Component: SiBootstrap,
    title: "Bootstrap",
    Description: () => <>Responsive design framework</>,
  },
  {
    slug: "antdesign",
    Component: SiAntdesign,
    title: "Ant Design",
    Description: () => <>UI library for enterprise applications</>,
  },
  {
    slug: "nextjs",
    Component: SiNextdotjs,
    title: "Next.js",
    Description: () => <>React framework for server-side rendering</>,
  },
  {
    slug: "nodejs",
    Component: DiNodejs,
    title: "Node.js",
    Description: () => <>Server-side JavaScript runtime</>,
  },
  {
    slug: "express",
    Component: SiExpress,
    title: "Express",
    Description: () => <>Web application framework for Node.js</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Authentication, database and analytics</>,
  },
  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Storing client and user data</>,
  },
  {
    slug: "mongodb",
    Component: DiMongodb,
    title: "MongoDB",
    Description: () => <>NoSQL database for modern apps</>,
  },
  {
    slug: "postgresql",
    Component: SiPostgresql,
    title: "PostgreSQL",
    Description: () => <>Relational database management system</>,
  },
  {
    slug: "prisma",
    Component: SiPrisma,
    title: "Prisma",
    Description: () => <>Next-generation ORM for Node.js and TypeScript</>,
  },
  {
    slug: "jwt",
    Component: SiJsonwebtokens,
    title: "JWT",
    Description: () => <>Authentication using JSON Web Tokens</>,
  },
  {
    slug: "git",
    Component: FaGit,
    title: "Git",
    Description: () => <>Code management and open-source contributions</>,
  },
  // {
  //   slug: "mongoose",
  //   Component: "SiMongoose",
  //   title: "Mongoose",
  //   Description: () => <>MongoDB object modeling for Node.js</>,
  // },
];
