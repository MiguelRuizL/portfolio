import { useState } from "react";
import { BaseCard, ProjectCard } from "./Cards"
import ProjectModal from "./modal/ProjectModal";

export default function ProjectsDisplay({projects = []}) {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
    const setSelectedData = (project) => {
        setOpenModal(true);
        setSelectedProject(project);
    }

    return (
        <>
            <BaseCard 
                title="Proyectos" 
                subtitle='Proyectos en los que he colaborado y desarrollado' 
                className="bg-transparent shadow-none dark:bg-gray-900"
            >
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {projects && projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            setSelectedData={setSelectedData}
                        />
                    ))}                    
                </div>
            </BaseCard>
            <ProjectModal 
                openModal={openModal} 
                setOpenModal={setOpenModal}
                project={selectedProject}
            />
        </>
    )
}