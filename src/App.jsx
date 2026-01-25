import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { HRTrimmed  } from 'flowbite-react';

import { PortraitCard, JSONProfileCard, ParagraphCard } from './components/Cards'
import { VerticalTimeline } from './components/Timeline'
import { AnchorLink } from './components/Text'
import ProjectsDisplay from './components/ProjectsDisplay'
import SkillsDisplay from './components/SkillsDisplay'
import CoursesDisplay from './components/CoursesDisplay'

import itsaleswebLanding from './assets/projects/itsalesweb-landing.png';
import cfLanding from './assets/projects/cf-landing.png';
import inventoryImage from './assets/projects/inventory-index.png';
import itnsLogo from './assets/logos/itnetworks-logo.png';
import toolsData from './constants/tools';
import { Languages } from './constants/languages';
import './App.css';

import fundamentosJava from './assets/pdf/fundamentos_java.pdf';
import senior2025 from './assets/pdf/metaphorcesenior_java.pdf';
import middle2024 from './assets/pdf/metaphorcemiddle_java.pdf';
import junior2023 from './assets/pdf/metaphorcejunior_java.pdf';


function App() {
  const { language } = useOutletContext();
  const t = Languages[language];

  useEffect(() => {
    console.log('CURRENT LANG', language);
  },[])

  return (
    <>
      <div className="p-0 sm:p-7 w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="order-1 md:order-2">
            <PortraitCard 
              location={t.portrait.location}
            />
          </div>

          <div className="order-2 md:order-1 md:row-span-2 h-full">
            <JSONProfileCard comment={t.comment} profileData={t.json}/>
          </div>

          <div className="order-3 md:order-3">
            <ParagraphCard 
              title={t.bio.title} 
              subtitle={t.bio.subtitle} 
              content={t.bio.content}
              className='w-full h-full border-none overflow-hidden
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
                  <div>Participación fullstack en el desarrollo de la <AnchorLink href="https://web.itsales.mx">versión web</AnchorLink> con microservicios del ERP de escritorio 
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
                  Durante esta etapa colaboré en el <strong>desarrollo de un ERP para una prestigiosa financiera</strong> queretana.
                  Este sistema fue desarrollado con Laravel, PHP y SQL Server. Permite gestionar toda la lógica del negocio como clientes, empleados, créditos, pagos, entre otras.
                </div>,
                contributions: [
                  <div>
                    Colaboración en desarrollo del módulo de facturación electrónica ante el SAT utilizando la librería
                    <AnchorLink href="https://multifacturas.com"> Multifacturas</AnchorLink>.
                  </div>,
                  <div>
                    Colaboración en desarrollo del módulo de mensajería WhatsApp utlizando la librería
                    <AnchorLink href="https://waapi.app"> WaAPI</AnchorLink>.
                  </div>
                ],
                tools: ["Laravel", "PHP", "JavaScript", "SQL Server", "Bootstrap", "HTML", "CSS", "JQuery"]
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
                  Participación en el <strong>desarrollo y diseño de todos los microservicios</strong> y, especialmente, en el <strong>API Gateway</strong> (Enrutamiendo, seguridad, usuarios).
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
            },
            {
              "image": cfLanding,
              "title": "ERP Financiera",
              "status": "Finalizado",
              "color": "blue",
              "summary": 
                <div className='flex flex-col gap-2 text-justify'>
                  <div>
                    ERP web desarrollado para una empresa de <strong>servicios financieros</strong>. Este proyecto surgió con el objetivo de
                    modernizar y automatizar la gestión empresarial del cliente.
                  </div>
                  <div>
                    Desarrollado con Laravel, PHP y SQL Server, el proyecto incluye módulos críticos de facturación electrónica y modelos de amortización, encontrándose actualmente en producción y uso diario
                  </div>
                </div>,
              "description": 
                <div className='flex flex-col gap-3'>
                  <div>
                    El sistema transformó procesos que antes hacían a mano, máquina de escribir o Excel
                    en procesos automatizados y confiables dentro de una aplicación web optimizada.
                  </div>
                  <div>
                    Además de permitir gestionar la lógica de negocio principal como el <strong>manejo de créditos</strong>, <strong>pagos</strong> y <strong>moratorias</strong>, 
                    también permite a los usuarios administrar clientes, empleados, roles y permisos, entre otros. 
                  </div>
                  <div>
                    Este proyecto estaba en su etapa inicial cuando me uní al equipo como practicante y fue hasta que terminé mi pasantía que finalizó su desarrollo.
                    Actualmente el equipo, incluyéndome, da mantenimiento y soporte al sistema.
                  </div>
                </div>,
              "contributions": [
                <div>
                  Participé en el desarrollo del módulo de <strong>generación y timbrado de facturas electrónicas</strong> ante el SAT.
                </div>,
                <div>
                  Colaboré en el desarrollo del <strong>módulo de mensajería</strong> vía <strong>WhatsApp</strong> para mensajes automatizados.
                </div>,
                <div>
                  Implementación de cálculos de <strong>tablas de amortización</strong> personalizadas según las necesidades del cliente.
                </div>,
                <div>
                  Automatización del cálculo de intereses moratorios y generación de reportes financieros.
                </div>,
                <div>
                  Desarrollo fullstack del sistema en general.
                </div>
              ],
              "tools": [
                "Laravel", "PHP", "SQL Server", "Bootstrap", 
                "JavaScript", "JQuery", "HTML", "CSS", "GitLab",
                "Finanzas", "Tablas de Amortización"
              ],
            },
            {
              "image": inventoryImage,
              "title": "Gestión Inventarios",
              "status": "En Proceso",
              "color": "purple",
              "summary": 
                <div className='flex flex-col gap-2 text-justify'>
                  <div>
                    Sistema de gestión de inventarios para un negocio local en Guanajuato. El propósito es permitirle a los dueños
                    <strong> administrar las entradas y salidas de productos</strong> en su tienda de artículos misceláneos. Cuenta además con bitácoras de movimientos.
                  </div>
                  <div>
                    El proyecto está en desarrollo desde noviembre del 2025 y cuenta con una versión de código abierto que puede ser
                    visualizada en <AnchorLink href={"https://github.com/MiguelRuizL/warehouse-miguel-frontend"}>mi GitHub</AnchorLink>.
                  </div>
                </div>,
              "description": 
                <div className='flex flex-col gap-3'>
                  <div>
                    El sistema tiene como objetivo cubrir la <strong>necesidad de administrar</strong> y <strong>visualizar</strong> con mayor detalle <strong>el inventario</strong> del local, pues los dueños
                    reciéntemente han estado notando inconsistencias con las ganancias del negocio y la cantidad de artículos vendidos.
                  </div>
                  <div>
                    Actualmente el sistema sigue en desarrollo, sin embargo, <strong>desde enero del 2026 ya opera</strong> en un entorno real en fase beta.
                  </div>
                  <div>
                    El proyecto implementa una arquitectura desacoplada con un <strong>Backend en Java</strong> (<strong>Spring Boot</strong>) y un <strong>Frontend en React</strong>.
                  </div>
                </div>,
              "contributions": [
                <div>
                  Desarrollo fullstack del sistema en dos aplicaciones: frontend y backend.
                </div>,
                <div>
                  Autenticación y autorización con <strong>Spring Security</strong> y <strong>JWT</strong> en base a roles y permisos.
                </div>,
                <div>
                  Desarrollo del módulo de bitácora que permite filtrar movimientos por empleado, fechas y actividad.
                </div>,
                <div>
                  Uso de componentes React reutilizables y escalables.
                </div>,
              ],
              "tools": [
                "React", "Spring Boot", "Java", "JavaScript", 
                "Tailwind", "Spring Security", "SQL Server", "JWT", "Maven", "Git",
                "GitHub", "Flowbite", "Postman", "REST APIs", "JSON"
              ],
            },
          ]} />
        </div>
        <HRTrimmed  className='bg-green-500 dark:bg-cyan-700 !mb-0'/>
        <div>
          <CoursesDisplay courses={[
            {
              title: "Fundamentos de Java",
              provider: "TECNM",
              date: "Enero 2026",
              description: <div>Propedéutico introductorio a <strong>Java</strong> y a sus <strong>fundamentos como lenguaje</strong>. 
                Es requisito para un curso posterior más avanzado.
              </div>,
              techs: ["Java", "POO"],
              pdfUrl: fundamentosJava,
            },
            {
              title: "Booster: Java Backend Senior",
              provider: "Metaphorce",
              date: "Noviembre 2025",
              description: <div>Tópicos avanzados de desarrollo <strong>Java</strong>, <strong>DevOps</strong>, <strong>CI/CD</strong> y del <strong>stack de Spring</strong> (Spring Boot, Security, Data).</div>,
              techs: ["Java", "Docker", "Kubernetes", "Docker Swarm", "JWT", "Spring Boot", "Eclipse IDE", "Jakarta EE", "Maven", "JPA", "Hibernate", "REST APIs", "Postman", "Swagger"],
              pdfUrl: senior2025
            },
            {
              title: "Fundamentos IA OCI (Oracle Cloud Infrastructure)",
              provider: "Oracle",
              date: "Septiembre 2025",
              description: <div>Fundamentos de <strong>Inteligencia Artificial</strong> y derivados, así como la <strong>infraestructura de Oracle Cloud</strong>.</div>,
              techs: ["Oracle Cloud", "Inteligencia Artifical", "Machine Learning", "Deep Learning", "Python", "Anaconda"],
              badgeUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6715D9556A7F5360C0FE29A03306263F0FD9E59B2AFCCF99927E96C54810600A",
            },
            {
              title: "Booster: Java Backend Middle (Microservicios)",
              provider: "Metaphorce",
              date: "Julio 2024",
              description: <div>Desarrollo enfocado en <strong>microservicios</strong> con Java y Spring Boot empleando <strong>Docker</strong> y <strong>Maven</strong>.</div>,
              techs: ["Java", "Microservicios", "Spring Boot", "Docker", "Maven", "MySQL", "REST APIs", "JWT", "Postman", "JSON", "Swagger", "Mockito", "Jakarta EE", "JPA", "Hibernate"],
              pdfUrl: middle2024
            },
            {
              title: "Booster: Java Backend Jr-Mid y Habilidades Blandas",
              provider: "Metaphorce",
              date: "Noviembre 2023",
              description: <div>Fundamentos de <strong>Spring Boot</strong> con Maven y <strong>creación de APIs</strong>. Además, incluía talleres de <strong>habilidades blandas.</strong></div>,
              techs: ["Java", "Spring Boot", "Maven", "MySQL", "REST APIs", "JWT", "Postman", "JSON", "Swagger", "Jakarta EE", "JPA", "Hibernate", "Empatía", "Asertividad", "Liderazgo", "Trabajo en Equipo"],
              pdfUrl: junior2023
            }
          ]}/>
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
