import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";
import { BsRobot } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "Linkedin",
    src: "/linkedin.svg",
    link:"https://www.linkedin.com/in/yerson-correa-code/",
  },
  {
    name: "instagram",
    src: "/instagram.svg",
    link:"https://www.instagram.com/yerfe24?igsh=dng4OHRzY3E3MGcz",
  },
  {
    name: "discord",
    src: "/discord.svg",
    link:"https://discord.com/users/1153482675995295834",
  },
];
export const Projects = [
  {
    title: "ChatPro",
    text: "Aplicación de chat en tiempo real regístrate, y charla con cualquiera de los que ya estén registrados. utilizando Firebase, Node.js React, y Mongodb.",
    src: "/ChatPro.png",
    git: "https://github.com/yf2405/ChatPro",
    Link: "https://frontend-chat-9ewb.onrender.com/",
    iconGit: FaGithub
  },
  {
    title: "YerFeState",
    text: "Aplicación  construida para poder vender, comprar, rentar, terrenos o casas, fácil de usar fue un gran reto, para usar inicio de sesión  utilizando Firebase, Node.js React, y Mongodb.",
    src: "/Yerstate.png",
    git: "https://github.com/yf2405/mern-state",
    Link: "https://yerfe-mern-estate.onrender.com/",
    iconGit: FaGithub
  },
  {
    title: "E-commerce-Xcosas",
    text: "La página web representa una solución integral para el comercio electrónico de productos exclusivos y difíciles de encontrar en Colombia. Login y Crud, solo para administrador.",
    src: "/Xcosas-Project.png",
    git: "https://github.com/yf2405/api-pokemon",
    Link: "https://xcosas.up.railway.app/home",
    iconGit: FaGithub
  },
  {
    title: "Shopi",
    text: "Aplicación creada con React Y nodes.js es una aplicación que muestra accesorios y ropa, es traída de la api de platzi.",
    src: "/shopplatzi.png",
    git: "https://github.com/yf2405/ShpiPlatzi",
    Link: "https://yf2405.github.io/ShpiPlatzi/",
    iconGit: FaGithub
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
  {
    name: "/chatBot",
    icon: BsRobot,
    link: "/chatBot",
  },
];