import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/Icons";
import { type SkillShowcaseProps } from "@/components/skills/SkillShowCase";

// Languages
import HtmlSvg from "../assets/icons/html.svg";
import CsssSvg from "../assets/icons/css.svg";
import SassSvg from "../assets/icons/sass.svg";
import JavascriptSvg from "../assets/icons/javascript.svg";
import TypescriptSvg from "../assets/icons/typescript.svg";
import PythonSvg from "../assets/icons/python.svg";
import JavaSvg from "../assets/icons/java.svg";
import CppSvg from "../assets/icons/cpp.svg";
import CSvg from "../assets/icons/c.svg";

// Libraries
import ReactjsSvg from "../assets/icons/reactjs.svg";
import SolidjsSvg from "../assets/icons/solidjs.svg";
import ReduxSvg from "../assets/icons/redux.svg";
import TailwindcssSvg from "../assets/icons/tailwindcss.svg";
import MuiSvg from "../assets/icons/mui.svg";
import ViteSvg from "../assets/icons/vite.svg";

// Backend
import NodejsSvg from "../assets/icons/nodejs.svg";
import DjangoSvg from "../assets/icons/django.svg";

// Database and ORMs
import MongoDBSvg from "../assets/icons/mongodb.svg";
import PostgressSvg from "../assets/icons/postgresql.svg";
import MysqlSvg from "../assets/icons/mysql.svg";

// Tools and Tech
import GitSvg from "../assets/icons/git.svg";
import DockerSvg from "../assets/icons/docker.svg";
import AwsSvg from "../assets/icons/aws.svg";
import PostmanSvg from "../assets/icons/postman.svg";
import RedisSvg from "../assets/icons/redis.svg";

export const SKILLS_DATA: SkillShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CsssSvg },
      { name: "Javascript", icon: JavascriptSvg },
      { name: "Typescript", icon: TypescriptSvg },
      { name: "Python", icon: PythonSvg },
      { name: "Java", icon: JavaSvg },
      { name: "C++", icon: CppSvg },
      { name: "C", icon: CSvg },
      { name: "Sass", icon: SassSvg },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      { name: "Reactjs", icon: ReactjsSvg },
      {
        name: "Nextjs",
        icon: <SiNextdotjs className="h-5 w-5 sm:h-8 sm:w-8" />,
      },
      { name: "Solidjs", icon: SolidjsSvg },
      {
        name: "React Router Dom",
        icon: <ReactRouterDomIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
      },
      { name: "Redux", icon: ReduxSvg },
      { name: "Tailwindcss", icon: TailwindcssSvg },
      { name: "MUI", icon: MuiSvg },
      {
        name: "Framer motion",
        icon: <FramerMotionIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
      },
      { name: "Vite", icon: ViteSvg },
      {
        name: "Vite PWA",
        icon: <VitePwaIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      { name: "Nodejs", icon: NodejsSvg },
      {
        name: "Express",
        icon: <SiExpress className="h-5 w-5 sm:h-8 sm:w-8" />,
      },
      {
        name: "Socket.io",
        icon: <SiSocketdotio className="h-5 w-5 sm:h-8 sm:w-8" />,
      },
      { name: "Flask", icon: <SiFlask className="h-5 w-5 sm:h-8 sm:w-8" /> },
      { name: "Django", icon: DjangoSvg },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      { name: "MongoDB", icon: MongoDBSvg },
      { name: "Postgress", icon: PostgressSvg },
      { name: "Prisma", icon: <SiPrisma className="h-5 w-5 sm:h-8 sm:w-8" /> },
      { name: "Mysql", icon: MysqlSvg },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      { name: "Git", icon: GitSvg },
      { name: "Docker", icon: DockerSvg },
      { name: "AWS", icon: AwsSvg },
      { name: "Postman", icon: PostmanSvg },
      { name: "Redis", icon: RedisSvg },
    ],
  },
];
