import { Card, Badge } from "flowbite-react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithubSquare, FaArrowRight } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { GenericBadge, StatusBadge } from "./Badges";

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

function PortraitCard() {
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
    <Card className="w-full shadow-xl border-none overflow-hidden
      bg-linear-to-b from-white via-gray-100 to-gray-300/40 from-0% via-60% to-70%
      dark:bg-gray-900
      dark:bg-[linear-gradient(to_bottom,var(--color-green-900)_0%,transparent_25%),radial-gradient(ellipse_at_top_left,var(--color-green-900)_0%,transparent_50%),radial-gradient(ellipse_at_top_right,#16a34a99_0%,transparent_50%)]
      lg:dark:bg-[radial-gradient(at_top_right,var(--color-green-800)_0%,transparent_70%)]">
      <motion.div
        className="flex flex-col items-center p-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }} // Se activa un poco antes de entrar por completo
      >
        <motion.img
          variants={itemVariants}
          src="https://m.media-amazon.com/images/M/MV5BYWFkNjg4YTgtZDdkMC00Y2I3LTk4ODEtZWNkYmRkOTZjMWJlXkEyXkFqcGc@._V1_.jpg"
          alt="Chris Cornell Foto"
          height="96"
          width="96"
          className="mb-3 rounded-full shadow-lg object-cover"
        />
        <motion.h5 variants={itemVariants} className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
          Chris Cornell
        </motion.h5>
        <motion.span variants={itemVariants} className="text-sm text-gray-500 dark:text-gray-400">
          Guanajuato, México
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

function ParagraphCard({ title, subtitle, content }) {
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
      className="bg-linear-to-r from-white to-gray-100 dark:from-green-900/60 dark:to-gray-900"
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

function ProjectCard({project, className = "", setSelectedData}) {
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
          Ver detalles <FaArrowRight />
        </button>
      </motion.div>
    </BaseCard>
  );
}

export { 
  BaseCard, 
  PortraitCard, 
  ParagraphCard, 
  ProjectCard 
};