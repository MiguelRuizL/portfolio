import { Card, Tooltip } from "flowbite-react";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaLinkedin, FaGithubSquare, FaArrowRight, FaFilePdf, FaExternalLinkAlt, FaAward, FaCode , FaCircle} from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { HiOutlineAcademicCap, HiOutlineCalendar } from 'react-icons/hi';
import { GenericBadge, StatusBadge } from "./Badges";
import profilePic from "../assets/profile_picture.png";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/miguel-angel-ruiz-lopez",
    icon: <FaLinkedin size="2em" />,
    hoverBg: "hover:bg-sky-700",
  },
  {
    name: "GitHub",
    href: "https://github.com/MiguelRuizL",
    icon: <FaGithubSquare size="2em" />,
    hoverBg: "hover:bg-gray-900",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@stinglish7663?si=C_75Dqoh6vWI1e8H",
    icon: <FaSquareYoutube size="2em" />,
    hoverBg: "hover:bg-red-700",
  },
];

function BaseCard({ title = "", subtitle = "", children, className = "", topRight = null }) {
    const baseVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
            duration: 0.5,
            ease: "easeOut",
            when: "beforeChildren", // Orquesta para que el título salga antes que el contenido
            staggerChildren: 0.2,
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.4 }
        },
    };

  return (
    <Card className={`w-full border-none shadow-lg dark:text-white ${className} pt-0`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={baseVariants}
        className="flex flex-col gap-3"
      >
        <div className="flex justify-between">
          <div className="flex flex-col">
            <motion.span 
              variants={titleVariants}
              className="font-bold text-2xl text-green-500 dark:text-green-400"
            >
              {title}
            </motion.span>
            <motion.span 
              variants={titleVariants}
              className="font-semibold text-xl"
            >
              {subtitle}
            </motion.span>
          </div>
          {topRight && (
            <motion.div variants={titleVariants}>
                {topRight}
            </motion.div>
          )}
        </div>
        <div className="flex flex-col gap-3">
          {children}
        </div>
      </motion.div>
    </Card>
  );
}

function PortraitCard({ location }) {
  // Orquestación principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // Pequeña pausa antes de empezar
        staggerChildren: 0.2,
      },
    },
  };

  // Elementos verticales
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  // Botones
  const buttonContainerVariants = {
    hidden: { opacity: 1 }, // Ya es visible, solo orquesta a los hijos
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Los botones aparecen más rápido entre sí
      }
    }
  };

  // Hover de botones
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0, y: 10 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 260, damping: 20 } 
    },
  };

  return (
    <Card className="w-full h-full shadow-lg border-none overflow-hidden
      bg-linear-to-b from-white via-gray-100 to-gray-300/40 from-0% via-60% to-70%
      dark:bg-gray-900
      dark:bg-[linear-gradient(to_bottom,var(--color-green-900)_0%,transparent_25%),radial-gradient(ellipse_at_top_left,var(--color-green-900)_0%,transparent_50%),radial-gradient(ellipse_at_top_right,#16a34a99_0%,transparent_50%)]
      md:dark:bg-[radial-gradient(at_top_right,var(--color-green-800)_0%,transparent_70%)]">
      <motion.div
        className="flex flex-col items-center p-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }} // Se activa un poco antes de entrar por completo
      >
        <motion.div
          variants={itemVariants}
          className="mb-3 relative h-24 w-24 rounded-full shadow-lg overflow-hidden"
        >
          <img
            src={profilePic}
            alt="Me. My Photo"
            className="absolute h-[130%] w-[130%] max-w-none top-14 left-11.5 -translate-y-1/2 -translate-x-1/2 object-cover"
          />
        </motion.div>
        <motion.h5 variants={itemVariants} className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
          Miguel Ruiz
        </motion.h5>
        <motion.span variants={itemVariants} className="text-sm text-gray-500 dark:text-gray-400">
          {location}
        </motion.span>

        <motion.div 
            className="mt-6 flex space-x-3"
            variants={buttonContainerVariants}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              variants={buttonVariants}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.hoverBg} inline-flex items-center p-1 rounded-lg border bg-green-100 text-green-800 dark:bg-sky-500/20 dark:border-sky-500/30 dark:text-sky-300 hover:text-white text-sm font-bold transition-colors duration-300`}
              whileHover={{ 
                  scale: 1.15, 
                  y: -3,
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </Card>
  );
}

function JSONProfileCard({ comment, profileData = null}) {

  const SyntaxHighlightedJson = ({ data, indent = 0 }) => {
    return Object.entries(data).map(([key, value], index) => {
      const isObject = typeof value === 'object' && !Array.isArray(value);
      const isArray = Array.isArray(value);

      return (
        <div key={key} style={{ paddingLeft: `${indent * 20}px` }} className="font-mono text-xs sm:text-sm">
          <span className="text-blue-700 dark:text-cyan-400">"{key}"</span>:{" "}
          
          {isObject ? (
            <>
              <span className="text-gray-500">{"{"}</span>
              <SyntaxHighlightedJson data={value} indent={indent + 1} />
              <span className="text-gray-500">{"}"}{index < Object.keys(data).length - 1 ? "," : ""}</span>
            </>
          ) : (
            <>
              <span className={`${isArray ? "text-orange-600 dark:text-orange-400" : "text-green-700 dark:text-green-400"}`}>
                {JSON.stringify(value).replace(/,/g, ", ")}
              </span>
              {index < Object.keys(data).length - 1 ? "," : ""}
            </>
          )}
        </div>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-full rounded-2xl border transition-all duration-300
        bg-slate-50 dark:bg-slate-900 
        border-slate-200 dark:border-white/10 
        shadow-lg dark:shadow-2xl overflow-hidden"
    >
      {/* Barra de título estilo Editor */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-200/50 dark:bg-white/5 border-b border-slate-200 dark:border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          profile_miguel.json
        </span>
      </div>

      {/* Contenido del JSON */}
      <div className="p-6 overflow-x-auto">
        <div className="text-slate-400 dark:text-slate-500 italic text-xs mb-4">
          // {comment}
        </div>
        <div className="text-slate-800 dark:text-slate-300">
          <span className="text-gray-500">{"{"}</span>
          <SyntaxHighlightedJson data={profileData} indent={1} />
          <span className="text-gray-500">{"}"}</span>
        </div>
      </div>
    </motion.div>
  );
}

function ParagraphCard({ title, subtitle, content, className = "" }) {
    const paragraphVariants = {
        hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: { duration: 0.3 } 
        },
    };

  return (
    <BaseCard 
      title={title} 
      subtitle={subtitle}
      className={!className ? "bg-linear-to-r from-white to-gray-100 dark:from-green-900/60 dark:to-gray-900" : className}
    >
      {content.map((paragraph, index) => (
        <motion.div 
          key={index} 
          variants={paragraphVariants} 
          className="text-justify leading-relaxed"
        >
          {paragraph}
        </motion.div>
      ))}
    </BaseCard>
  );
}

function ProjectCard({ labels, project, className = "", setSelectedData}) {
  return (
    <BaseCard 
      title={project.title}
      topRight={<StatusBadge status={project.status} color={project.color}/>}
      className={`bg-linear-to-br 
        from-white to-gray-50 
        dark:bg-linear-to-br dark:from-green-800/20 dark:via-gray-900/60 dark:to-green-950/40
        dark:border-green-500/30 ${className}`}
    >
      <motion.div
        className="border-4 border-x-0 dark:border-green-500 rounded-xl"
      >
        <img src={project.image} alt="" className="rounded-xl" />
      </motion.div>
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        className="text-gray-600 dark:text-white text-sm leading-relaxed"
      >
        {project.summary}
      </motion.div>

      <div className="flex flex-wrap gap-2 mt-2">
        {project.tools?.slice(0, 9).map((tool, i) => (
          <GenericBadge key={i} text={tool} />
        ))}
        {project.tools?.length > 9 && (
          <GenericBadge text="..." />
        )}
      </div>

      <motion.div 
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0 }
        }}
        className="flex justify-end"
      >
        <button 
          type="button"
          onClick={() => {
            setSelectedData(project)
          }}
          className="flex items-center justify-end gap-1 text-sm font-medium text-green-600 dark:text-green-400 hover:underline"
        >
          {labels.details} <FaArrowRight />
        </button>
      </motion.div>
    </BaseCard>
  );
}

function ToolCard({ tool }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="perspective-[1000px] flex items-center justify-center p-4"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.1 }}
        className="relative w-28 h-28 rounded-xl bg-linear-to-br 
          from-white to-gray-100 dark:from-green-900/40 dark:to-gray-900 
          border border-white/10 shadow-xl cursor-pointer flex justify-center items-center"
      >
        <div 
          style={{ transform: "translateZ(40px)" }} 
          className="pointer-events-none w-20 h-20 flex items-center justify-center"
        >
          {tool.icon}
        </div>
        <div
          style={{ 
            transform: "translateX(-50%) translateZ(50px)", 
            left: "50%",
            bottom: "-8px"
          }}
          className="absolute whitespace-nowrap px-2 py-0.5 rounded-md 
            bg-white/80 dark:bg-slate-900/90 
            border border-gray-200 dark:border-white/20 
            text-green-600 dark:text-green-400
            text-[10px] font-bold uppercase tracking-wider 
            shadow-lg backdrop-blur-md pointer-events-none transition-colors duration-300"
        >
          {tool.name}
        </div>
      </motion.div>
    </div>
  );
}

function CertificateCard({ labels, course }) {
  const { title, provider, description, techs, pdfUrl, badgeUrl, date } = course;
  
  // Lógica para limitar badges visibles
  const visibleTechs = techs?.slice(0, 2) || [];
  const remainingTechs = techs?.slice(2) || [];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative flex flex-col h-full p-6 rounded-2xl border border-gray-200 dark:border-gray-800 
                 bg-white dark:bg-cyan-900/30 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all text-green-600 dark:text-green-400">
        <FaAward size={40} />
      </div>

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row gap-1 mb-3">
          <div className="flex items-center gap-2">
            <HiOutlineAcademicCap className="text-green-600 dark:text-green-400" size={20} />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {provider}
            </span>
          </div>
          <div className="justify-center items-center hidden sm:flex">
            <FaCircle className="text-sky-400 dark:text-cyan-800 w-2 h-2" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-medium">
            {date || "s.f."}
          </div>
        </div>

        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white leading-snug group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
          {title}
        </h3>

        <div className="text-sm mt-3 text-gray-600 dark:text-gray-400 line-clamp-5 leading-relaxed">
          {description}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-5">
          {visibleTechs.map((tech) => (
            <span 
              key={tech}
              className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold rounded-full 
                         bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-100 dark:border-green-800"
            >
              <FaCode size={10} />
              {tech}
            </span>
          ))}

          {/* Tecnologías restantes */}
          {remainingTechs.length > 0 && (
            <Tooltip
              content={
                <div className="w-48 sm:w-64 p-2">
                  <p className="text-[11px] font-bold border-b border-gray-400 dark:border-gray-600 mb-3 pb-1 text-green-700 dark:text-gray-300">
                    {labels.more_technologies}:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {remainingTechs.map((t) => (
                      <span 
                        key={t} 
                        className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold rounded-full 
                         bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              }
              placement="top"
              className="border shadow-xl bg-gray-100 dark:bg-slate-800 border-green-200 dark:border-gray-700"
            >
              <button className="flex items-center px-3 py-1 text-[11px] font-bold rounded-full 
                                bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700
                                hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">
                +{remainingTechs.length}
              </button>
            </Tooltip>
          )}
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center">
        {pdfUrl ? (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
          >
            <FaFilePdf size={18} className="text-red-500" />
            {labels.pdf}
          </a>
        ) : badgeUrl ? (
          <a
            href={badgeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            <FaExternalLinkAlt size={16} className="text-blue-500" />
            {labels.badge}
          </a>
        ) : (
          <div className="flex items-center gap-2 text-xs italic text-gray-400">
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700" />
            {labels.knowledge_accquired}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export { 
  BaseCard, 
  PortraitCard, 
  JSONProfileCard,
  ParagraphCard, 
  ProjectCard,
  ToolCard,
  CertificateCard
};