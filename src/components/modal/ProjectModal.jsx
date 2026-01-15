import { SimpleBadge, StatusBadge } from "../Badges";
import BaseModal from "./BaseModal";
import { motion } from "framer-motion";

export default function ProjectModal({ openModal = false, setOpenModal, project }) {
    if (!project) return null;

    return (
        <BaseModal 
            openModal={openModal} 
            setOpenModal={setOpenModal}
            title={project.title}
        >
            <div className="flex flex-col gap-8">
                
                <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto max-h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 drop-shadow-md">
                        <StatusBadge status={project.status} color={project.color} />
                    </div>
                </div>
                        
                <div className="flex flex-col gap-5 md:col-span-12 order-1 md:order-2">
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-green-500 mb-4">
                            Sobre el Proyecto
                        </h4>
                        <div className="text-gray-600 dark:text-gray-200 leading-7 text-justify space-y-4">
                            {project.description}
                        </div>
                    </div>

                    <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-green-500 mb-3">
                            Mis Aportaciones:
                        </h4>
                        <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic">
                            <ul className="">
                            {project.contributions && project.contributions.map((contribution, cIndex) => (
                                <motion.li 
                                key={cIndex} 
                                className="list-disc ml-5 text-gray-700 dark:text-gray-300"
                                >
                                {contribution}
                                </motion.li>
                            ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-green-500 mb-3">
                            Stack Tecnológico
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tools?.map((tool, i) => {
                                return (
                                    <SimpleBadge key={i} text={tool} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </BaseModal>
    );
}