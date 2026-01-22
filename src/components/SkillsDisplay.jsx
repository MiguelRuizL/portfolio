import { div } from "framer-motion/client"
import { BaseCard, ToolCard } from "./Cards"

export default function SkillsDisplay({tools = []}) {
    return (
        <>
        <BaseCard 
                title="Habilidades Técnicas" 
                subtitle='Habilidades que he adquirido y que actualmente sigo desarrollando' 
                className="bg-transparent shadow-none dark:bg-gray-900"
            >
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-10">
                {tools.map((tool, idx) => {
                    return (<ToolCard key={idx} tool={tool}></ToolCard>)
                })}
            </div>
        </BaseCard>
        </>
    );
}