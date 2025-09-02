import EcommerceMainPage from "../assets/images/projects/MainPage_Ecommerce.png";
import FlexiWallet from "../assets/images/projects/FlexiWallet.png";

import PostBlog from "../assets/images/projects/PostBlog.png";

import EntertainmentApp from "../assets/images/projects/Entertainment.png";
import Markdown from "../assets/images/projects/Markdown.png";
import TicTacToe from "../assets/images/projects/Tic-tac-toe.png";
import Designo from "../assets/images/projects/designo.png";
import ReactjsSvg from "../assets/icons/reactjs.svg";
import ReduxSvg from "../assets/icons/redux.svg";
import DjangoSvg from "../assets/icons/django.svg";
import Nextdotjs from "../assets/icons/nextdotjs.svg";
import TypeScript from "../assets/icons/typescript.svg";
import TailwindCss from "../assets/icons/tailwindcss.svg";
import DaisyUI from "../assets/icons/daisyui.svg";
import ShadCn from "../assets/icons/shadcnui.svg";
import JavaScript from "../assets/icons/javascript.svg";

export const PROJECT_DATA = [
  {
    projectName: "Bank Management System",
    create: "Next.js",
    icon: [Nextdotjs, TypeScript, TailwindCss, ShadCn],
    image: FlexiWallet,
    url: "https://bank-management-system-sandy.vercel.app/",
    invertColor: true,
    github: "https://github.com/SandeebAdhikari/Bank_Management_System",
  },
  {
    projectName: "E-commerce Platform",
    create: "Redux",
    icon: [ReduxSvg, TailwindCss, DaisyUI],
    image: EcommerceMainPage,
    url: "e-commerce-mu-ten-81.vercel.app",
    invertColor: false,
    github: "https://github.com/SandeebAdhikari/E-Commerce",
  },
  {
    projectName: "Entertainment App",
    create: "Next.js",
    icon: [Nextdotjs, TypeScript, TailwindCss],
    image: EntertainmentApp,
    url: "https://entertainment-app-gules.vercel.app/",
    invertColor: true,
    github: "https://github.com/SandeebAdhikari/Entertainment_App",
  },
  {
    projectName: "Markdown Editor",
    create: "React.js",
    icon: [ReactjsSvg, TypeScript, TailwindCss],
    image: Markdown,
    url: "https://markdown-app-six.vercel.app/",
    invertColor: false,
    github: "https://github.com/SandeebAdhikari/Markdown_APP",
  },
  {
    projectName: "TicTacToe",
    create: "React.js",
    icon: [ReactjsSvg, JavaScript, TailwindCss],
    image: TicTacToe,
    url: "https://tic-tac-toe-six-navy.vercel.app/",
    invertColor: false,
    github: "https://github.com/SandeebAdhikari/Tic_Tac_Toe",
  },
  {
    projectName: "Design App",
    create: "React.js",
    icon: [Nextdotjs, TypeScript, TailwindCss],
    image: Designo,
    url: "https://memento-design.vercel.app/",
    invertColor: false,
    github: "https://github.com/SandeebAdhikari/Memento_Design",
  },
  {
    projectName: "Post-Blog Django App",
    create: "Django",
    icon: [DjangoSvg],
    image: PostBlog,
    url: "https://post-blog-django-project.vercel.app/",
    invertColor: false,
    github: "https://github.com/SandeebAdhikari/Post_blog_Django_Project",
  },
];
