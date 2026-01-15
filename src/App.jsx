import { useState } from 'react'
import { PortraitCard, ParagraphCard} from './components/Cards'
import { VerticalTimeline } from './components/Timeline'
import { AnchorLink } from './components/Text'
import ProjectsDisplay from './components/ProjectsDisplay'


import itsaleswebLanding from './assets/projects/itsalesweb-landing.png';
import itnsLogo from './assets/logos/itnetworks-logo.png';
import './App.css'
import { HRTrimmed  } from 'flowbite-react'

function App() {

  return (
    <>
      <div className="p-0 sm:p-7 w-full">
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
                  <div>Desarrollo de la <AnchorLink href="https://web.itsales.mx">versión web</AnchorLink> con microservicios del ERP de escritorio 
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
        <HRTrimmed  className='!mb-0'/>
        <div>
          <ProjectsDisplay projects={[
            {
              "image": itsaleswebLanding,
              "title": "ITSales Web",
              "status": "En Proceso",
              "color": "purple",
              "summary": 
                <div className='flex flex-col gap-2 text-justify'>
                  <div>
                    Versión web del ERP de escritorio <AnchorLink href='https://itnetworks.mx/servicios/ITSales'>ITSales</AnchorLink>.
                    Su objetivo es migrar la potente tecnología del ERP de escritorio a la web, de manera que
                    sus funcionalidades puedan ser accesibles desde cualquier lugar, plataforma y sistema, siendo el único requisito contar con internet.
                  </div>
                  <div>
                    Este proyecto está siendo desarrollado en cuatro etapas de lanzamiento, las cuales
                    abarcan desde mayo hasta octubre.
                  </div>
                </div>,
              "description": 
                <div className='flex flex-col gap-3'>
                  <div>
                    El sistema permite gestionar clientes, proveedores, productos, facturación electrónica, entre otras; así como generar reportes de ventas, compras, inventarios y rotaciones que permiten visualizar
                    información clave y resumida para una efectiva administración empresarial.
                  </div>
                  <div>
                    Para el desarrollo de la <AnchorLink href="https://web.itsales.mx">versión web</AnchorLink>, se utilizan tecnologías y conceptos innovadores acordes a tendencias actuales,
                    como microservicios, JWT para autenticación, y frameworks modernos como React para el frontend y Node.js con Express para el backend.
                  </div>
                </div>,
              "contributions": [
                <div>
                  Generación de componentes React escalables y reutilizables.
                </div>,
                <div>
                  Desarrollo y diseño del API Gateway (Enrutamiendo, seguridad, usuarios).
                </div>,
                <div>
                  Autenticación y autorización en base a roles con JWT.
                </div>,
                <div>
                  Consultas SQL optimizadas para generación de reportes.
                </div>,
              ],
              "tools": [
                "React", "Tailwind", "Node.js", "Express.js", 
                "JavaScript", "JWT", "Microservicios", "Git",
                "SQL Server", "Prisma", "Postman", "JSON"
              ],
            }
          ]} />
        </div>
      </div>
    </>
  )
}

export default App
