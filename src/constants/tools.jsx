import { FaPhp, FaLaravel, FaReact, FaNodeJs, FaDocker, FaBootstrap } from "react-icons/fa6";
import { SiExpress, SiSpringboot, SiMysql, SiTailwindcss } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { BiLogoPostgresql  } from "react-icons/bi";

import spring from "../../public/spring.svg"
import vite from "../assets/logos/vite.svg";
import java from "../assets/logos/java.svg"
import csharp from "../assets/logos/csharp.svg"
import css3 from "../assets/logos/css3.svg"
import dart from "../assets/logos/dart.svg"
import figma from "../assets/logos/figma.svg"
import flutter from "../assets/logos/flutter.svg"
import html5 from "../assets/logos/html5.svg"
import intellij from "../assets/logos/intellij.svg"
import javascript from "../assets/logos/javascript.svg"
import postman from "../assets/logos/postman.svg"
import vscode from "../assets/logos/vscode.svg"

const baseSize = "w-10 h-10";

export const toolsData = [
  {
    name: "PHP",
    icon: <FaPhp className={`${baseSize} text-[#777BB4]`} />
  },
  {
    name: "Laravel",
    icon: <FaLaravel className={`${baseSize} text-[#F55247]`} />
  },
  {
    name: "React",
    icon: <FaReact className={`${baseSize} text-[#61DAFB]`} />
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className={`${baseSize} text-[#339933]`} />
  },
  {
    name: "Express.js",
    // Aquí sí aplicamos el cambio de color para que sea visible en ambos temas
    icon: <SiExpress className={`${baseSize} text-gray-900 dark:text-white`} />
  },
  {
    name: "JavaScript",
    icon: <img src={javascript} alt="" className={baseSize} />
  },
  {
    name: "SQL Server",
    icon: <DiMsqlServer className={`${baseSize} text-[#CC2927]`} />
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className={`${baseSize} text-[#06B6D4]`} />
  },
  {
    name: "Java",
    icon: <img src={java} alt="" className={baseSize} />
  },
  {
    name: "Spring",
    icon: <img src={spring} alt="" className={baseSize} />
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className={`${baseSize} text-[#6DB33F]`} />
  },
  {
    name: "MySQL",
    icon: <SiMysql className={`${baseSize} text-[#4479A1] dark:text-sky-500`} />
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql  className={`${baseSize} text-[#4479A1]`} />
  },
  {
    name: "Docker",
    icon: <FaDocker className={`${baseSize} text-[#2496ED]`} />
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className={`${baseSize} text-[#7952B3]`} />
  },
  {
    name: "HTML",
    icon: <img src={html5} alt="" className={baseSize} />
  },
  {
    name: "CSS",
    icon: <img src={css3} alt="" className={baseSize} />
  },
  {
    name: "Vite",
    icon: <img src={vite} alt="" />
  },
  {
    name: "Postman",
    icon: <img src={postman} alt="" className={baseSize} />
  },
  {
    name: "C#",
    icon: <img src={csharp} alt="" className={baseSize} />
  },
  {
    name: "GitHub",
    icon: <svg fill="currentColor" class={`${baseSize}`} viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
    </svg>
  },
  {
    name: "Dart",
    icon: <img src={dart} alt="" className={baseSize} />
  },
  {
    name: "Flutter",
    icon: <img src={flutter} alt="" className={baseSize} />
  },
  {
    name: "Figma",
    icon: <img src={figma} alt="" className={baseSize} />
  },
  {
    name: "IntelliJ",
    icon: <img src={intellij} alt="" className={baseSize} />
  },
  {
    name: "Visual Studio Code",
    icon: <img src={vscode} alt="" className={baseSize} />
  }
];

export default toolsData;