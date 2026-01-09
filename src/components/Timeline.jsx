import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
  Badge
} from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import { BaseCard } from "./Cards";
import { motion } from "framer-motion";

function VerticalTimeline({ timelineData = [] }) {
    // 1. Orquestador del ítem completo
    const timelineItemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
        opacity: 1,
        x: 0,
        transition: { 
            duration: 0.5, 
            ease: "easeOut",
            staggerChildren: 0.15 // Tiempo entre cada elemento interno
        },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: { duration: 0.3 } 
        },
    };

    const badgeVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 15 } 
        },
    };

    return (
        <BaseCard
            title="Experiencia Laboral"
            subtitle="Trayectoria profesional"
            className="bg-linear-to-r from-white to-gray-100 dark:from-green-900/60 dark:to-gray-900"
        >
        <div className="m-5">
            <Timeline className="!border-gray-300 dark:!border-white">
            {timelineData.map((item, index) => (
                <TimelineItem key={index} className="mb-10">
                <motion.div 
                    variants={timelineItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20px" }}
                >
                    <TimelinePoint
                        icon={() => <HiCalendar className="text-green-600 dark:text-green-500 h-4 w-4" />}
                        className="[&_span]:bg-green-200 [&_span]:dark:bg-white text-white"
                    />
                    <TimelineContent>
                    <motion.div variants={childVariants}>
                        <TimelineTime className="text-green-600 dark:text-green-400 font-bold">
                        {item.date}
                        </TimelineTime>
                    </motion.div>

                    <motion.div variants={childVariants}>
                        <TimelineTitle className="flex items-center gap-4 mb-2">
                        {item.logo && (
                            <div className="flex-shrink-0">
                            <img
                                src={item.logo}
                                alt={`${item.company} logo`}
                                className="w-12 h-12 rounded-xl object-contain bg-white p-1.5 shadow-md border border-gray-200 dark:border-gray-700"
                            />
                            </div>
                        )}
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                                {item.job}
                            </span>
                            <span className="text-lg font-medium text-green-600 dark:text-green-400">
                                {item.company}
                            </span>
                        </div>
                        </TimelineTitle>
                    </motion.div>

                    <TimelineBody>
                        <div className="text-black dark:text-gray-100">
                        <motion.div 
                            className="flex flex-wrap gap-2"
                            variants={childVariants} // Contenedor de badges
                        >
                            {item.tools && item.tools.map((tool, tIndex) => (
                            <motion.div 
                                key={tIndex} 
                                variants={badgeVariants}
                                whileHover={{ 
                                    scale: 1.15, 
                                    y: -3,
                                    filter: "drop-shadow(0 0 8px rgba(0, 255, 127, 0.4))" 
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="cursor-pointer"
                            >
                                <Badge className="px-3 py-1 rounded-full border bg-green-100 hover:bg-green-200 text-green-800 dark:bg-sky-500/20 dark:border-sky-500/30 dark:hover:bg-sky-700 dark:text-sky-300 dark:hover:text-white text-sm font-bold transition-colors">
                                {tool}
                                </Badge>
                            </motion.div>
                            ))}
                        </motion.div>

                        <motion.div variants={childVariants} className="my-4 leading-relaxed text-justify">
                            {item.description}
                        </motion.div>

                        <motion.div variants={childVariants}>
                            <span className="font-bold text-green-600 dark:text-green-400">
                            Aportaciones destacadas:
                            </span>
                            <ul className="space-y-2 mt-2">
                            {item.contributions && item.contributions.map((contribution, cIndex) => (
                                <motion.li 
                                key={cIndex} 
                                variants={childVariants} // Cada LI entra individualmente
                                className="list-disc ml-5 text-gray-700 dark:text-gray-300"
                                >
                                {contribution}
                                </motion.li>
                            ))}
                            </ul>
                        </motion.div>
                        </div>
                    </TimelineBody>
                    </TimelineContent>
                </motion.div>
                </TimelineItem>
            ))}
            </Timeline>
        </div>
        </BaseCard>
    );
}

export { VerticalTimeline };