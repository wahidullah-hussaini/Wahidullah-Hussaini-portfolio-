// Maps a skill id (from src/data/skills.js) to its logo component.
// Every icon is imported from the react-icons package. Run
// `npm run verify:icons` after changing this file.
//
// HTML5, CSS3 and Java come from the "fa" set because their names stay the
// same across react-icons versions; the other logos come from "si".

import {
  SiBootstrap,
  SiCplusplus,
  SiFigma,
  SiGit,
  SiGithub,
  SiGo,
  SiJavascript,
  SiMysql,
  SiNetlify,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaJava } from "react-icons/fa";

export const techIcons = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: SiJavascript,
  react: SiReact,
  bootstrap: SiBootstrap,
  tailwind: SiTailwindcss,
  figma: SiFigma,
  git: SiGit,
  github: SiGithub,
  vercel: SiVercel,
  netlify: SiNetlify,
  python: SiPython,
  java: FaJava,
  go: SiGo,
  php: SiPhp,
  cpp: SiCplusplus,
  mysql: SiMysql,
};
