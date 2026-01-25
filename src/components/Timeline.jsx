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
import { GenericBadge } from "./Badges";
import { motion } from "framer-motion";

function VerticalTimeline({ labels, timelineData = [] }) {
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
    
    return (
        <BaseCard
            title={labels.title}
            subtitle={labels.subtitle}
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
                                <GenericBadge key={tIndex} index={tIndex} text={tool}></GenericBadge>
                            ))}
                        </motion.div>

                        <motion.div variants={childVariants} className="my-4 leading-relaxed text-justify">
                            {item.description}
                        </motion.div>

                        <motion.div variants={childVariants}>
                            <span className="font-bold text-green-600 dark:text-green-400">
                            {labels.contributions}:
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