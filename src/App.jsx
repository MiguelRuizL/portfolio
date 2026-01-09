import { useState } from 'react'
import { PortraitCard, ParagraphCard } from './components/Cards'
import { VerticalTimeline } from './components/Timeline'
import { AnchorLink } from './components/Text'

import itnsLogo from './assets/logos/itnetworks-logo.png';
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
                logo: itnsLogo,
                company: "ITNetworks México", 
                description: <div>
                  Formo parte de un equipo encargado de crear y mantener diferentes aplicaciones web para diversos clientes. Entre el giro de estos clientes
                  se destacan sectores como el <strong>financiero</strong>, <strong>tecnológico</strong> y de
                  <strong> entretenimiento</strong>. Mi rol abarca desde la <strong>administración de bases de datos</strong>, 
                  <strong> desarrollo 
                  backend y frontend</strong>, testeo de código/APIs, despliegue de aplicaciones y manejo de control de versiones con Git.
                </div>,
                contributions: [
                  <div>Desarrollo de la <AnchorLink href="https://web.itsales.mx">versión web</AnchorLink> del ERP de escritorio 
                  <AnchorLink href='https://itnetworks.mx/servicios/ITSales' target='_blank'> ITSales</AnchorLink> con Node.js, Express, React y Tailwind.</div>,
                  <div>Implementación de principios <strong>Clean Code</strong> como "Don't Repeat Yourself" (DRY) en componentes Laravel y React, así como en funciones de backend, logrando reducir el tiempo de implementación de nuevas funcionalidades en un 30%.</div>,
                  <div>Reducción del 70% de tiempos de respuesta de consultas SQL de datos masivos al refactorizar las queries y crear índices estratégicos.</div>
                ],
                tools: ["Laravel", "React", "Node.js", "Express.js", "Microservicios", "JWT", "PHP", "JavaScript", "SQL Server", "Tailwind", "Flowbite", "Git", "GitHub", "Kanban", "Trello"]
              },
              { 
                date: "Junio 2024 - Diciembre 2024", 
                job: "Practicante en Desarrollo Fullstack",
                logo: itnsLogo,
                company: "ITNetworks México", 
                description: <div>
                  Durante esta etapa colaboré en el <strong>desarrollo de un ERP para una financiera</strong> llamada CreditFactor.
                  Este sistema fue desarrollado con Laravel, PHP y SQL Server. Permite gestionar toda la lógica del negocio como clientes, empleados, créditos, pagos, entre otras.
                </div>,
                contributions: [
                  <div>
                    Desarrollo del módulo de facturación electrónica ante el SAT utilizando la librería
                    <AnchorLink href="https://multifacturas.com"> Multifacturas</AnchorLink>.
                  </div>,
                  <div>
                    Desarrollo del módulo de mensajería WhatsApp utlizando la librería
                    <AnchorLink href="https://waapi.app"> WaAPI</AnchorLink>.
                  </div>
                ],
                tools: ["Laravel", "PHP", "JavaScript", "SQL Server", "Bootstrap", "HTML", "CSS"]
              }
            ]}
          ></VerticalTimeline>
        </div>
        
      </div>
    </>
  )
}

export default App
