import { useState } from 'react'
import { PortraitCard, JSONProfileCard, ParagraphCard } from './components/Cards'
import { VerticalTimeline } from './components/Timeline'
import { AnchorLink } from './components/Text'
import ProjectsDisplay from './components/ProjectsDisplay'
import SkillsDisplay from './components/SkillsDisplay'


import itsaleswebLanding from './assets/projects/itsalesweb-landing.png';
import itnsLogo from './assets/logos/itnetworks-logo.png';
import toolsData from './constants/tools';
import './App.css';
import { HRTrimmed  } from 'flowbite-react';

function App() {

  return (
    <>
      <div className="p-0 sm:p-7 w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="order-1 md:order-2">
            <PortraitCard />
          </div>

          <div className="order-2 md:order-1 md:row-span-2 h-full">
            <JSONProfileCard profileData={
              {
                "yo": {
                  "nombre": "Miguel Ángel Ruiz López",
                  "ocupacion": "Desarrollador Fullstack Jr.",
                  "idiomas": ["Español", "Inglés", "Francés", "Alemán"]
                },
                "stack_resumen": {
                  "lenguajes": ["PHP", "Java", "JavaScript"],
                  "frontend": ["React", "Tailwind"],
                  "backend": ["Node.js", "Spring Boot"],
                  "fullstack": ["Laravel"],
                  "bases_datos": ["SQL Server", "MySQL", "PostgreSQL"],
                  "devops": ["Git", "Docker"],
                  "otros": ["Microservicios", "JWT", "REST APIs"]
                },
                "experiencia": "1 año",
                "intereses": {
                  "videojuegos": ["Dota 2", "Warcraft", "The Legend of Zelda"],
                  "edicion_videos": ["Sony Vegas Pro", "YouTube"],
                  "deportes": ["Ciclismo"],
                  "arte": "Dibujo"
                }
              }
            }/>
          </div>

          <div className="order-3 md:order-3">
            <ParagraphCard 
              title={"Miguel Ruiz López"} 
              subtitle={"Desarrollador de Software Junior"} 
              content={[
                <div key="bio">
                  Desarrollador de software fullstack, <strong>especializado en aplicaciones web</strong> y en la <strong>administración de bases de datos</strong>. 
                  Apasionado por la tecnología y el aprendizaje continuo; me esfuerzo por 
                  estar en constante crecimiento profesional y personal.
                </div>,
                <p key="hobbies">
                  Además, me encantan los idiomas y continuamente estoy reforzando mis habilidades en
                  <strong> inglés</strong>, <strong>francés</strong> y <strong>alemán</strong>.
                </p>,
              ]}
              className='w-full border-none overflow-hidden
              bg-linear-to-br from-white to-gray-200/60
              md:bg-linear-to-bl md:from-gray-200/90 md:to-white
              dark:bg-gray-900 dark:bg-linear-to-r
              dark:from-green-900/60 dark:to-gray-900
              md:dark:bg-[radial-gradient(at_bottom_left,var(--color-teal-950)_0%,transparent_70%)]'
            />
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
        <HRTrimmed  className='bg-green-500 dark:bg-cyan-700 !mb-0'/>
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
                "JavaScript", "JWT", "Microservicios", "SQL Server", "Git",
                "Flowbite", "Prisma", "Postman", "JSON"
              ],
            }
          ]} />
        </div>
        <HRTrimmed  className='bg-green-500 dark:bg-cyan-700 !mb-0'/>
        <div>
          <SkillsDisplay tools={toolsData} />
        </div>
      </div>
    </>
  )
}

export default App
