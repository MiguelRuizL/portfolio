import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
  Card
} from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { BaseCard } from "./Cards";
import { motion } from "framer-motion";

function VerticalTimeline() {
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
            subtitle="Mi trayectoria profesional"
            className="bg-linear-to-r from-white to-gray-100 dark:from-green-900 dark:to-gray-900"
            >
            <div className="m-5">
                {/* Envolvemos la Timeline en un contenedor de motion para agrupar los ítems */}
                <Timeline className="dark:!border-white">
                
                    {/* ÍTEM 1 */}
                    <TimelineItem className="!border-white">
                        <motion.div variants={timelineItemVariants}>
                            <TimelinePoint icon={HiCalendar} className="bg-green-500 text-white" />
                            <TimelineContent>
                                <TimelineTime className="dark:text-green-300 font-bold">February 2022</TimelineTime>
                                <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
                                <TimelineBody>
                                Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order.
                                </TimelineBody>
                            </TimelineContent>
                        </motion.div>
                    </TimelineItem>

                    {/* ÍTEM 2 */}
                    <TimelineItem className="!border-white">
                        <motion.div variants={timelineItemVariants}>
                        <TimelinePoint icon={HiCalendar} />
                        <TimelineContent>
                            <TimelineTime className="dark:text-green-300 font-bold">March 2022</TimelineTime>
                            <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
                            <TimelineBody>
                            All of the pages and components are first designed in Figma and we keep a parity between the two versions.
                            </TimelineBody>
                        </TimelineContent>
                        </motion.div>
                    </TimelineItem>

                    {/* ÍTEM 3 */}
                    <TimelineItem className="!border-white">
                        <motion.div variants={timelineItemVariants}>
                        <TimelinePoint icon={HiCalendar} />
                        <TimelineContent>
                            <TimelineTime className="dark:text-green-300 font-bold">April 2022</TimelineTime>
                            <TimelineTitle>E-Commerce UI code in Tailwind CSS</TimelineTitle>
                            <TimelineBody>
                            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                            </TimelineBody>
                        </TimelineContent>
                        </motion.div>
                    </TimelineItem>

                </Timeline>
            </div>
        </BaseCard>
        </>
    );
}

export { VerticalTimeline };