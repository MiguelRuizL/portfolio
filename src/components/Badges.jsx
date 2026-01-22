import { motion } from "framer-motion";
import { Badge } from "flowbite-react";

function GenericBadge({ text, color }) {
    const badgeVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 15 } 
        },
    };

    return (
        <>
        <motion.div
            variants={badgeVariants}
            whileHover={{ 
                scale: 1.15, 
                y: -3,
                filter: "drop-shadow(0 0 8px rgba(0, 255, 127, 0.4))" 
            }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
        >
            <Badge className="px-3 py-1 rounded-full border border-green-400/40 bg-green-100 hover:bg-green-200 text-green-800 dark:bg-sky-500/20 dark:border-sky-500/30 dark:hover:bg-sky-700 dark:text-sky-300 dark:hover:text-white text-sm font-bold transition-colors">
            {text}
            </Badge>
        </motion.div>
        </>
    );
}

function SimpleBadge({text}) {
  return (
    <>
      <span
        className="px-2 py-1 text-[11px] font-bold bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-400 rounded border border-gray-200 dark:border-white/5"
      >
          {text}
      </span>
    </>
  );
}

function StatusBadge({ status, color = "green" }) {
  const colorConfigs = {
    green: {
      light: "bg-green-100 text-green-800 hover:bg-green-200 border-green-200",
      dark: "dark:bg-green-500/20 dark:border-green-500/30 dark:text-green-300 dark:hover:bg-green-600 dark:hover:text-white",
    },
    blue: {
      light: "bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200",
      dark: "dark:bg-sky-500/20 dark:border-sky-500/30 dark:text-sky-300 dark:hover:bg-sky-700 dark:hover:text-white",
    },
    red: {
      light: "bg-red-100 text-red-800 hover:bg-red-200 border-red-200",
      dark: "dark:bg-red-500/20 dark:border-red-500/30 dark:text-red-300 dark:hover:bg-red-600 dark:hover:text-white",
    },
    yellow: {
      light: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-200",
      dark: "dark:bg-yellow-500/20 dark:border-yellow-500/30 dark:text-yellow-300 dark:hover:bg-yellow-600 dark:hover:text-white",
    },
    purple: {
      light: "bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-200",
      dark: "dark:bg-purple-500/20 dark:border-purple-300/30 dark:text-purple-300 dark:hover:bg-purple-600 dark:hover:text-white",
    }
  };

  const config = colorConfigs[color] || colorConfigs.green;
  return (
    <Badge 
      className={`
        px-3 py-1 rounded-full border transition-colors duration-300 text-sm font-bold
        ${config.light} 
        ${config.dark}
      `}
    >
      {status}
    </Badge>
  );
}

export { GenericBadge, SimpleBadge, StatusBadge };