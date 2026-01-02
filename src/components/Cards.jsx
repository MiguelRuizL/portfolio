import { Card } from "flowbite-react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

function BaseCard({ title = "", subtitle = "", children, className = "" }) {
    // Variantes base para la tarjeta y los títulos
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
    <Card className={`w-full border-none shadow-lg dark:text-white ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={baseVariants}
        className="flex flex-col gap-3"
      >
        {/* Cabecera de la Card: Título y Subtítulo */}
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

        {/* Contenido dinámico que varía en cada componente */}
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
        staggerChildren: 0.2, // Tiempo entre la imagen, el nombre, etc.
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
    <Card className="w-full shadow-xl border-none
    bg-radial-[at_25%_25%] from-white to-gray-300/20 to-95% 
    dark:from-green-500 dark:to-gray-900 dark:to-65%">
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

        {/* Contenedor de botones animado */}
        <motion.div 
            className="mt-6 flex space-x-3"
            variants={buttonContainerVariants} // Usa su propio stagger
        >
          {/* Botón LinkedIn */}
          <motion.a
            variants={buttonVariants}
            href="https://www.linkedin.com/in/miguel-angel-ruiz-lopez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-cyan-700 p-1 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 transition-colors"
            whileHover={{ scale: 1.1 }} // Pequeño zoom al pasar el mouse
            whileTap={{ scale: 0.95 }} // Efecto de click
          >
            <FaLinkedin size="2em" />
          </motion.a>

          {/* Botón Github */}
          <motion.a
            variants={buttonVariants}
            href="https://github.com/MiguelRuizL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white p-1 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithubSquare size="2em" />
          </motion.a>

          {/* Botón Youtube */}
          <motion.a
            variants={buttonVariants}
            href="https://youtube.com/@stinglish7663?si=C_75Dqoh6vWI1e8H"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none text-white bg-red-700 p-1 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSquareYoutube size="2em" />
          </motion.a>
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
      className="bg-linear-to-r from-white from-0% via-gray-50/50 via-40% to-gray-100 to-60%
                 dark:from-green-900 dark:from-0% dark:via-green-900/20 dark:via-30% dark:to-gray-900 dark:to-60%"
    >
      {/* El contenido dinámico se pasa como children */}
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

export { BaseCard, PortraitCard, ParagraphCard };