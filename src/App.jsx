import { useState } from 'react'
import { PortraitCard, ParagraphCard } from './components/Cards'
import { ProfileSidebar } from './components/Sidebar'
import { VerticalTimeline } from './components/Timeline'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-7 w-full">
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

          <div className='flex flex-col col-span-1 lg:col-span-2 gap-3 order-2 lg:order-1'>
            <ParagraphCard 
              title={"Miguel Ruiz López"} 
              subtitle={"Desarrollador de Software Junior"} 
              content={[
                <div>
                  Desarrollador de software fullstack, <strong>especializado en aplicaciones web</strong> y en la <strong>administración de bases de datos</strong>. 
                  Apasionado por la tecnología y el aprendizaje continuo; me esfuerzo por estar en constante crecimiento
                  profesional y personal.
                </div>,
                <p className=''>
                  Me gusta convivir con las personas, aprender de sus experiencias y compartir las mías, pues creo que todos tenemos algo valioso
                  para aportar. Además, me encantan los idiomas y continuamente estoy reforzando mis habilidades en
                  <strong> inglés</strong>, <strong>francés</strong> y <strong>alemán</strong>.
                </p>,
              ]}>
            </ParagraphCard>
          </div>
          <div className='col-span-1 order-1 lg:order-2'>
            <PortraitCard></PortraitCard>
          </div>
        </div>
        <div className='my-5'>
          <VerticalTimeline
            timelineData={[
              { 
                date: "Enero 2025 - Actualmente", 
                job: "Desarrollador Fullstack Jr.", 
                logo: "https://logo.clearbit.com/accenture.com",
                company: "ITNetworks México", 
                description: <div>
                  Formo parte de un equipo encargado de crear y mantener aplicaciones web para diversos clientes. Entre el giro de estos clientes
                  se destacan sectores como el <strong>financiero</strong>, <strong>tecnológico</strong> y de
                  <strong> entretenimiento</strong>. Mi rol abarca desde la <strong>administración de bases de datos</strong>, 
                  <strong> desarrollo 
                  backend y frontend</strong>, testeo de código/APIs, despliegue de aplicaciones y manejo de control de versiones con Git.
                </div>,
                contributions: [
                ],
                tools: ["Laravel", "React", "Astro", "Node.js", "Express.js", "PHP", "JavaScript", "SQL Server", "Tailwind", "Flowbite", "Git", "GitHub", "Kanban", "Trello"]
              },
              { 
                date: "Junio 2024 - Diciembre 2024", 
                job: "Practicante en Desarrollo Fullstack",
                logo: "https://logo.clearbit.com/accenture.com",
                company: "ITNetworks México", 
                description: <div>
                  Durante esta etapa colaboré en el <strong>desarrollo de un ERP para una financiera</strong> llamada CreditFactor.
                  Este sistema fue desarrollado con Laravel, PHP y SQL Server. Permite gestionar toda la lógica del negocio como clientes, empleados, créditos, pagos, entre otras.
                </div>,
                contributions: [
                  <div>
                    Desarrollo del módulo de facturación electrónica ante el SAT utilizando la librería
                    <a className="text-blue-600 hover:text-blue-500 ml-1 dark:text-blue-400" target="_blank" 
                    href="https://multifacturas.com">
                    Multifacturas</a>.
                  </div>,
                  <div>
                    Desarrollo del módulo de mensajería WhatsApp utlizando la librería
                    <a className="text-blue-600 hover:text-blue-500 ml-1 dark:text-blue-400" target="_blank"
                    href="https://waapi.app">
                    WaAPI</a>.
                  </div>
                ],
                tools: ["Laravel", "PHP", "JavaScript", "SQL Server", "Bootstrap", "HTML", "CSS"]
              },
              { 
                date: "April 2022", 
                title: "API Integration", 
                description: "Integrated third-party APIs to enhance application functionality and data retrieval." 
              },
            ]}
          ></VerticalTimeline>
        </div>
        
      </div>
    </>
  )
}

export default App
