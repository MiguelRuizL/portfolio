import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
  Badge
} from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { BaseCard } from "./Cards";
import { motion } from "framer-motion";

function VerticalTimeline({timelineData = []}) {
    const timelineItemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" } 
        },
    };

    return (
        <>
        <BaseCard 
            title="Experiencia Laboral"
            subtitle="Trayectoria profesional"
            className="bg-linear-to-r from-white to-gray-100 dark:from-green-900/60 dark:to-gray-900"
            >
            <div className="m-5">
                {/* Envolvemos la Timeline en un contenedor de motion para agrupar los ítems */}
                <Timeline className="!border-gray-300 dark:!border-white">
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index}>
                            <motion.div variants={timelineItemVariants}>
                                <TimelinePoint 
                                    icon={() => <HiCalendar className="text-green-600 dark:text-green-700 h-4 w-4" />}
                                    className="[&_span]:bg-green-200 [&_span]:dark:bg-white text-white"/>
                                <TimelineContent>
                                    <TimelineTime className="text-green-600 dark:text-green-400 font-bold">{item.date}</TimelineTime>
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
                                    <TimelineBody>
                                        <div className="text-black dark:text-gray-100">
                                            <div className="flex flex-wrap gap-2">
                                                {item.tools && item.tools.map((tool, index) => (
                                                    <Badge key={index} className="px-3 py-1 rounded-full border bg-green-100 hover:bg-green-200 text-green-800 dark:bg-sky-500/20 dark:border-sky-500/30 dark:hover:bg-sky-700 dark:text-sky-300 dark:hover:text-white text-sm font-bold">
                                                        {tool}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="my-2">{item.description}</div>
                                            <span className="font-medium text-green-600 dark:text-green-400">
                                                Aportaciones destacadas:
                                            </span>
                                            <ul>
                                                {item.contributions && item.contributions.map((contribution, cIndex) => (
                                                    <li key={cIndex} className="list-disc ml-5 mt-2">
                                                        {contribution}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </TimelineBody>
                                </TimelineContent>
                            </motion.div>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </BaseCard>
        </>
    );
}

export { VerticalTimeline };