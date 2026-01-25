import { AnchorLink } from '../components/Text'

import itnsLogo from '../assets/logos/itnetworks-logo.png';
import itsaleswebLanding from '../assets/projects/itsalesweb-landing.png';
import cfLanding from '../assets/projects/cf-landing.png';
import inventoryImage from '../assets/projects/inventory-index.png';

import fundamentosJava from '../assets/pdf/fundamentos_java.pdf';
import senior2025 from '../assets/pdf/metaphorcesenior_java.pdf';
import middle2024 from '../assets/pdf/metaphorcemiddle_java.pdf';
import junior2023 from '../assets/pdf/metaphorcejunior_java.pdf';

export const Languages = {
    es: { // spanish
        header: {
            portfolio: "Portafolio"
        },
        footer: {
            madeWith: <>Hecho con <span className="text-cyan-500 dark:text-cyan-400">React & TailwindCSS</span></>
        },
        portrait: {
            location: "Guanajuato, México"
        },
        comment: "datos del perfil",
        json: {
            me: {
                name: "Miguel Ángel Ruiz López",
                title: "Desarrollador de Software Junior",
                languages: ["Español", "Inglés", "Francés", "Alemán"]
            },
            stack_summary: {
                languages: ["PHP", "Java", "JavaScript"],
                frontend: ["React", "Tailwind"],
                backend: ["Node.js", "Spring Boot"],
                fullstack: ["Laravel"],
                databases: ["SQL Server", "MySQL", "PostgreSQL"],
                devops: ["Git", "Docker"],
                other: ["Microservicios", "JWT", "REST APIs"]
            },
            experience: "1 año",
                interests: {
                video_games: ["Dota 2", "Warcraft", "The Legend of Zelda"],
                video_editing: "Edición de video (Sony Vegas)",
                sports: "Ciclismo",
                art: "Dibujo"
            }
        },
        bio: {
            title: "Miguel Ruiz",
            subtitle: "Desarrollador de Software Junior",
            content: [
                <div key="bio">
                    Desarrollador de software fullstack, <strong>especializado en aplicaciones web</strong> y en la <strong>administración de bases de datos</strong>. 
                    Apasionado por la tecnología y el aprendizaje continuo; me esfuerzo por 
                    estar en constante crecimiento profesional y personal.
                </div>,
                <p key="hobbies">
                    Aparte de programar, me encantan los idiomas y continuamente estoy reforzando mis habilidades en
                    <strong> inglés</strong>, <strong>francés</strong> y <strong>alemán</strong>.
                </p>,
            ],
        },
        contributions_label: "Aportaciones destacadas",
        timeline: {
            labels: {
                title: "Experiencia Laboral",
                subtitle: "Trayectoria profesional",
                contributions: "Aportaciones destacadas"
            },
            timeline: [
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
            ]
        },
        projects: {
            title: "Proyectos",
            subtitle: "Proyectos en los que he colaborado y desarrollado",
            labels: {
                details: "Ver detalles",
                about: "Sobre el proyecto",
                contributions: "Mis aportaciones",
                stack: "Stack Tecnológico",
                close: "Cerrar"
            },
            projects: [
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
                        visualizada en <AnchorLink href={"https://github.com/MiguelRuizL/warehouse-miguel-frontend"}> mi GitHub</AnchorLink>.
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
                }
            ]
        },
        courses: {
            labels: {
                title: "Cursos y Certificaciones",
                subtitle: "Conocimientos adquiridos a través de cursos y boosters",
                more_technologies: "Más Tecnologías",
                pdf: "Consultar PDF",
                badge: "Ver Insignia",
                knowledge_accquired: "Conocimiento adquirido"
            },
            courses: [
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
            ]
        },
        skills: {
            labels: {
                title: "Habilidades Técnicas",
                subtitle: "Habilidades que he adquirido y que actualmente sigo desarrollando"
            }
        }
    },



    
    en: { // english
        header: {
            portfolio: "Portfolio"
        },
        footer: {
            madeWith: <>Made with <span className="text-cyan-500 dark:text-cyan-400">React & TailwindCSS</span></>
        },
        portrait: {
            location: "Guanajuato, Mexico"
        },
        comment: "profile data",
        json: {
            me: {
                name: "Miguel Ángel Ruiz López",
                title: "Junior Software Developer",
                languages: ["Spanish (Native)", "English", "French", "German"]
            },
            stack_summary: {
                languages: ["PHP", "Java", "JavaScript"],
                frontend: ["React", "Tailwind"],
                backend: ["Node.js", "Spring Boot"],
                fullstack: ["Laravel"],
                databases: ["SQL Server", "MySQL", "PostgreSQL"],
                devops: ["Git", "Docker"],
                other: ["Microservices", "JWT", "REST APIs"]
            },
            experience: "1 year",
                interests: {
                video_games: ["Dota 2", "Warcraft", "The Legend of Zelda"],
                video_editing: "Video Editing (Sony Vegas)",
                sports: "Cycling",
                art: "Drawing"
            }
        },
        bio: {
            title: "Miguel Ruiz",
            subtitle: "Junior Software Developer",
            content: [                
                <div key="bio">
                    Full-stack software developer <strong>specialized in web development</strong> and <strong>database management</strong>. 
                    Passionate about technology and continuous learning, I am committed 
                    to constant professional and personal growth.
                </div>,
                <p key="hobbies">
                    Beyond coding, I am a language enthusiast currently improving my proficiency in
                    <strong> English</strong>, <strong>French</strong> and <strong>German</strong>.
                </p>
            ],
        },
        contributions_label: "Key Contributions",
        timeline: {
            labels: {
                title: "Work Experience",
                subtitle: "Professional Path",
                contributions: "Key Contributions"
            },
            timeline: [
                {
                    date: "January 2025 - Present", 
                    job: "Junior Fullstack Developer", 
                    logo: itnsLogo,
                    company: "ITNetworks Mexico",
                    description: <div>
                        I am part of a team responsible for developing and maintaining various web applications for diverse clients. These clients operate in sectors such as <strong>finance</strong>, <strong>technology</strong>, and
                        <strong> entertainment</strong>. My role spans from <strong>database administration</strong> and 
                        <strong> backend/frontend development</strong> to API testing, application deployment, and version control with Git.
                    </div>,
                    contributions: [
                        <div>Fullstack participation in developing the <AnchorLink href="https://web.itsales.mx">web version</AnchorLink> (microservices-based) of the 
                        <AnchorLink href='https://itnetworks.mx/servicios/ITSales' target='_blank'> ITSales</AnchorLink> desktop ERP using Node.js, Express, React, and Tailwind.</div>,
                        <div>Implementation of <strong>Clean Code</strong> principles, such as "Don't Repeat Yourself" (DRY), in Laravel and React components as well as backend functions, reducing new feature implementation time by 30%.</div>,
                        <div>Achieved a 70% reduction in SQL query response times for massive datasets by refactoring queries and creating strategic indexes.</div>
                    ],
                    tools: ["Laravel", "React", "Node.js", "Express.js", "Microservices", "JWT", "PHP", "JavaScript", "SQL Server", "Tailwind", "Flowbite", "Git", "GitHub", "Kanban", "Trello"]
                },
                { 
                    date: "June 2024 - December 2024", 
                    job: "Fullstack Development Intern",
                    logo: itnsLogo,
                    company: "ITNetworks Mexico", 
                    description: <div>
                        During this period, I collaborated on the <strong>development of an ERP for a prestigious financial firm</strong> in Querétaro.
                        Built with Laravel, PHP, and SQL Server, the system manages core business logic, including clients, employees, credits, payments, and more.
                    </div>,
                    contributions: [
                        <div>
                            Collaborated on the development of the electronic invoicing module (SAT) using the 
                            <AnchorLink href="https://multifacturas.com"> Multifacturas</AnchorLink> library.
                        </div>,
                        <div>
                            Collaborated on the development of the WhatsApp messaging module using the 
                            <AnchorLink href="https://waapi.app"> WaAPI</AnchorLink> library.
                        </div>
                    ],
                    tools: ["Laravel", "PHP", "JavaScript", "SQL Server", "Bootstrap", "HTML", "CSS", "JQuery"]
                }
            ]
        },
        projects: {
            title: "Projects",
            subtitle: "Projects I have collaborated on and developed",
            labels: {
                details: "Show details",
                about: "About the Project",
                contributions: "My Contributions",
                stack: "Tech Stack",
                close: "Close"
            },
            projects: [
                {
                    "image": itsaleswebLanding,
                    "title": "ITSales Web",
                    "status": "In Progress",
                    "color": "purple",
                    "summary": 
                    <div className='flex flex-col gap-2 text-justify'>
                        <div>
                        Web version of the <AnchorLink href='https://itnetworks.mx/servicios/ITSales'>ITSales</AnchorLink> desktop ERP.
                        Its goal is to migrate the robust technology of the desktop ERP to the web, ensuring its 
                        functionalities are accessible from any location, platform, and system, with internet access being the only requirement.
                        </div>
                        <div>
                        This project is being developed in four release stages, spanning from May to October.
                        </div>
                    </div>,
                    "description": 
                    <div className='flex flex-col gap-3'>
                        <div>
                        The system enables the management of clients, suppliers, products, and electronic invoicing, among others. It also generates sales, purchase, inventory, and rotation reports that visualize key summarized information for effective business administration.
                        </div>
                        <div>
                        The <AnchorLink href="https://web.itsales.mx">web version</AnchorLink> is developed using innovative technologies and current trends, such as microservices, JWT for authentication, and modern frameworks like React for the frontend and Node.js with Express for the backend.
                        </div>
                    </div>,
                    "contributions": [
                    <div>
                        Generation of scalable and reusable React components.
                    </div>,
                    <div>
                        Participation in the <strong>design and development of all microservices</strong>, specifically the <strong>API Gateway</strong> (Routing, security, user management).
                    </div>,
                    <div>
                        Role-based authentication and authorization with JWT.
                    </div>,
                    <div>
                        Optimized SQL queries for report generation.
                    </div>,
                    ],
                    "tools": [
                    "React", "Tailwind", "Node.js", "Express.js", 
                    "JavaScript", "JWT", "Microservices", "SQL Server", "Git",
                    "Flowbite", "Prisma", "Postman", "JSON"
                    ],
                },
                {
                    "image": cfLanding,
                    "title": "Financial ERP",
                    "status": "Completed",
                    "color": "blue",
                    "summary": 
                    <div className='flex flex-col gap-2 text-justify'>
                        <div>
                        Web ERP developed for a <strong>financial services</strong> company. This project aimed to modernize and automate the client's business management.
                        </div>
                        <div>
                        Developed with Laravel, PHP, and SQL Server, the project includes critical electronic invoicing and amortization modules, currently in production and daily use.
                        </div>
                    </div>,
                    "description": 
                    <div className='flex flex-col gap-3'>
                        <div>
                        The system transformed manual processes—previously done by hand, typewriter, or Excel—into automated and reliable workflows within an optimized web application.
                        </div>
                        <div>
                        In addition to managing <strong>core business logic</strong> such as <strong>loan management</strong>, <strong>payments</strong>, and <strong>late fees</strong>, it also allows users to manage clients, employees, roles, and permissions.
                        </div>
                        <div>
                        I joined the team as an intern during the initial stage, and development was completed by the end of my internship. Currently, the team—including myself—provides maintenance and support for the system.
                        </div>
                    </div>,
                    "contributions": [
                    <div>
                        Participated in the development of the <strong>electronic invoicing and stamping module</strong> (SAT).
                    </div>,
                    <div>
                        Collaborated on the <strong>automated WhatsApp messaging module</strong>.
                    </div>,
                    <div>
                        Implemented custom <strong>amortization schedule</strong> calculations based on client needs.
                    </div>,
                    <div>
                        Automation of interest calculations and financial report generation.
                    </div>,
                    <div>
                        Fullstack development of the overall system.
                    </div>
                    ],
                    "tools": [
                    "Laravel", "PHP", "SQL Server", "Bootstrap", 
                    "JavaScript", "JQuery", "HTML", "CSS", "GitLab",
                    "Finances", "Amortization Schedules"
                    ],
                },
                {
                    "image": inventoryImage,
                    "title": "Inventory Management",
                    "status": "In Progress",
                    "color": "purple",
                    "summary": 
                    <div className='flex flex-col gap-2 text-justify'>
                        <div>
                        Inventory management system for a local business in Guanajuato. The purpose is to allow owners to 
                        <strong> manage product stock entries and exits</strong> in their general store. It also includes transaction logs.
                        </div>
                        <div>
                        The project has been under development since November 2025 and features an open-source version available on 
                        <AnchorLink href={"https://github.com/MiguelRuizL/warehouse-miguel-frontend"}> my GitHub</AnchorLink>.
                        </div>
                    </div>,
                    "description": 
                    <div className='flex flex-col gap-3'>
                        <div>
                        The system aims to meet the <strong>need for detailed inventory management</strong> and <strong>visualization</strong>, as the owners recently noticed inconsistencies between business profits and the number of items sold.
                        </div>
                        <div>
                        While still under development, the system <strong>has been operating in a real beta environment since January 2026</strong>.
                        </div>
                        <div>
                        The project implements a <strong>decoupled architecture</strong> with a <strong>Java Backend</strong> (<strong>Spring Boot</strong>) and a <strong>React Frontend</strong>.
                        </div>
                    </div>,
                    "contributions": [
                    <div>
                        Fullstack development of the system across two applications: frontend and backend.
                    </div>,
                    <div>
                        Authentication and authorization with <strong>Spring Security</strong> and <strong>JWT</strong> based on roles and permissions.
                    </div>,
                    <div>
                        Development of the log module that allows filtering transactions by employee, date, and activity.
                    </div>,
                    <div>
                        Use of reusable and scalable React components.
                    </div>,
                    ],
                    "tools": [
                    "React", "Spring Boot", "Java", "JavaScript", 
                    "Tailwind", "Spring Security", "SQL Server", "JWT", "Maven", "Git",
                    "GitHub", "Flowbite", "Postman", "REST APIs", "JSON"
                    ],
                }
            ]
        },
        courses: {
            labels: {
                title: "Courses & Certifications",
                subtitle: "Knowledge acquired through courses and boosters",
                more_technologies: "More Technologies",
                pdf: "View PDF",
                badge: "View Badge",
                knowledge_accquired: "Knowledge Acquired"
            },
            courses: [
                {
                    title: "Java Fundamentals",
                    provider: "TECNM",
                    date: "January 2026",
                    description: <div>Introductory preparatory course on <strong>Java</strong> and its <strong>fundamentals as a language</strong>. 
                        It is a prerequisite for a subsequent advanced course.
                    </div>,
                    techs: ["Java", "OOP"],
                    pdfUrl: fundamentosJava,
                },
                {
                    title: "Booster: Senior Java Backend",
                    provider: "Metaphorce",
                    date: "November 2025",
                    description: <div>Advanced topics in <strong>Java</strong> development, <strong>DevOps</strong>, <strong>CI/CD</strong>, and the <strong>Spring stack</strong> (Spring Boot, Security, Data).</div>,
                    techs: ["Java", "Docker", "Kubernetes", "Docker Swarm", "JWT", "Spring Boot", "Eclipse IDE", "Jakarta EE", "Maven", "JPA", "Hibernate", "REST APIs", "Postman", "Swagger"],
                    pdfUrl: senior2025
                },
                {
                    title: "AI Foundations OCI (Oracle Cloud Infrastructure)",
                    provider: "Oracle",
                    date: "September 2025",
                    description: <div>Foundations of <strong>Artificial Intelligence</strong> and its derivatives, as well as <strong>Oracle Cloud infrastructure</strong>.</div>,
                    techs: ["Oracle Cloud", "Artificial Intelligence", "Machine Learning", "Deep Learning", "Python", "Anaconda"],
                    badgeUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6715D9556A7F5360C0FE29A03306263F0FD9E59B2AFCCF99927E96C54810600A",
                },
                {
                    title: "Booster: Middle Java Backend (Microservices)",
                    provider: "Metaphorce",
                    date: "July 2024",
                    description: <div>Development focused on <strong>microservices</strong> with Java and Spring Boot using <strong>Docker</strong> and <strong>Maven</strong>.</div>,
                    techs: ["Java", "Microservices", "Spring Boot", "Docker", "Maven", "MySQL", "REST APIs", "JWT", "Postman", "JSON", "Swagger", "Mockito", "Jakarta EE", "JPA", "Hibernate"],
                    pdfUrl: middle2024
                },
                {
                    title: "Booster: Jr-Mid Java Backend and Soft Skills",
                    provider: "Metaphorce",
                    date: "November 2023",
                    description: <div><strong>Spring Boot</strong> fundamentals with Maven and <strong>API creation</strong>. It also included <strong>soft skills</strong> workshops.</div>,
                    techs: ["Java", "Spring Boot", "Maven", "MySQL", "REST APIs", "JWT", "Postman", "JSON", "Swagger", "Jakarta EE", "JPA", "Hibernate", "Empathy", "Assertiveness", "Leadership", "Teamwork"],
                    pdfUrl: junior2023
                }
            ]
        },
        skills: {
            labels: {
                title: "Technical Skills",
                subtitle: "Skills I have acquired and continue to develop every day"
            }
        }
    },




    fr: { // french
        header: {
            portfolio: "Portfolio"
        },
        footer: {
            madeWith: <>Fait avec <span className="text-cyan-500 dark:text-cyan-400">React & TailwindCSS</span></>
        },
        portrait: {
            location: "Guanajuato, Mexique"
        },
        comment: "données du profil",
        json: {
            me: {
                name: "Miguel Ángel Ruiz López",
                title: "Développeur Logiciel Junior",
                languages: ["Espagnol (Maternel)", "Anglais", "Français", "Allemand"]
            },
            stack_summary: {
                languages: ["PHP", "Java", "JavaScript"],
                frontend: ["React", "Tailwind"],
                backend: ["Node.js", "Spring Boot"],
                fullstack: ["Laravel"],
                databases: ["SQL Server", "MySQL", "PostgreSQL"],
                devops: ["Git", "Docker"],
                other: ["Microservices", "JWT", "REST APIs"]
            },
            experience: "1 an",
                interests: {
                video_games: ["Dota 2", "Warcraft", "The Legend of Zelda"],
                video_editing: "Montage vidéo (Sony Vegas)",
                sports: "Cyclisme",
                art: "Dessin"
            }
        },
        bio: {
            title: "Miguel Ruiz",
            subtitle: "Développeur Logiciel Junior",
            content: [                
                <div key="bio">
                    Développeur logiciel fullstack, <strong>spécialisé dans le développement web</strong> et <strong>l'administration de bases de données</strong>. 
                    Passionné par la technologie et l'apprentissage continu, je cherche toujours à 
                    évoluer dans une constante croissance professionnelle et personnelle.
                </div>,
                <p key="hobbies">
                    Au-delà de la programmation, j'adore les langues et je perfectionne actuellement mon niveau en
                    <strong> anglais</strong>, <strong>français</strong> et <strong>allemand</strong>.
                </p>
            ],
        },
        contributions_label: "Réalisations marquantes",
        timeline: {
            labels: {
                title: "Expérience professionnelle",
                subtitle: "Parcours professionnel",
                contributions: "Réalisations marquantes"
            },
            timeline: [
                {
                    date: "Janvier 2025 - Présent", 
                    job: "Développeur Fullstack Jr.", 
                    logo: itnsLogo,
                    company: "ITNetworks Mexique",
                    description: <div>
                        Je fais partie d'une équipe chargée de la création et de la maintenance de diverses applications web pour différents clients. Ces clients opèrent dans des secteurs clés tels que la <strong>finance</strong>, la <strong>technologie</strong> et le
                        <strong> divertissement</strong>. Mon rôle englobe l'<strong>administration de bases de données</strong>, le 
                        <strong> développement backend et frontend</strong>, le test de code/APIs, le déploiement d'applications et la gestion des versions avec Git.
                    </div>,
                    contributions: [
                        <div>Participation fullstack au développement de la <AnchorLink href="https://web.itsales.mx">version web</AnchorLink> (basée sur des microservices) de l'ERP desktop 
                        <AnchorLink href='https://itnetworks.mx/servicios/ITSales' target='_blank'> ITSales</AnchorLink> avec Node.js, Express, React et Tailwind.</div>,
                        <div>Mise en œuvre des principes <strong>Clean Code</strong> (tels que DRY) dans les composants Laravel et React, ainsi que dans les fonctions backend, permettant de réduire le temps d'implémentation de nouvelles fonctionnalités de 30 %.</div>,
                        <div>Réduction de 70 % des temps de réponse des requêtes SQL pour des données massives grâce à la refactorisation des requêtes et à la création d'index stratégiques.</div>
                    ],
                    tools: ["Laravel", "React", "Node.js", "Express.js", "Microservices", "JWT", "PHP", "JavaScript", "SQL Server", "Tailwind", "Flowbite", "Git", "GitHub", "Kanban", "Trello"]
                },
                { 
                    date: "Juin 2024 - Décembre 2024", 
                    job: "Stagiaire en Développement Fullstack",
                    logo: itnsLogo,
                    company: "ITNetworks Mexique", 
                    description: <div>
                        Durant cette étape, j'ai collaboré au <strong>développement d'un ERP pour une société financière prestigieuse</strong> à Querétaro.
                        Ce système, développé avec Laravel, PHP et SQL Server, permet de gérer toute la logique métier (clients, employés, crédits, paiements, etc.).
                    </div>,
                    contributions: [
                        <div>
                            Collaboration au développement du module de facturation électronique (normes SAT) en utilisant la bibliothèque
                            <AnchorLink href="https://multifacturas.com"> Multifacturas</AnchorLink>.
                        </div>,
                        <div>
                            Collaboration au développement du module de messagerie WhatsApp via la bibliothèque
                            <AnchorLink href="https://waapi.app"> WaAPI</AnchorLink>.
                        </div>
                    ],
                    tools: ["Laravel", "PHP", "JavaScript", "SQL Server", "Bootstrap", "HTML", "CSS", "JQuery"]
                }
            ]
        },
        projects: {
            title: "Projets",
            subtitle: "Projets auxquels j'ai collaboré et que j'ai développés",
            labels: {
                details: "Voir les détails",
                about: "À propos du projet",
                contributions: "Mes contributions",
                stack: "Stack technique",
                close: "Fermer"
            },
            projects: [
                {
                    "image": itsaleswebLanding,
                    "title": "ITSales Web",
                    "status": "En cours",
                    "color": "purple",
                    "summary": 
                    <div className='flex flex-col gap-2 text-justify'>
                        <div>
                        Version web de l'ERP desktop <AnchorLink href='https://itnetworks.mx/servicios/ITSales'>ITSales</AnchorLink>. 
                        L'objectif est de migrer la technologie robuste de l'ERP desktop vers le web, afin que ses 
                        fonctionnalités soient accessibles de n'importe où et sur n'importe quel système, avec pour seul prérequis une connexion internet.
                        </div>
                        <div>
                        Ce projet est développé en quatre étapes de lancement, s'étalant de mai à octobre.
                        </div>
                    </div>,
                    "description": 
                    <div className='flex flex-col gap-3'>
                        <div>
                        Le système permet de gérer les clients, les fournisseurs, les produits et la facturation électronique, entre autres. Il génère également des rapports de ventes, d'achats, de stocks et de rotations qui visualisent les informations clés pour une gestion d'entreprise efficace.
                        </div>
                        <div>
                        Pour le développement de la <AnchorLink href="https://web.itsales.mx">version web</AnchorLink>, des technologies et des concepts innovants sont utilisés, tels que les microservices, JWT pour l'authentification, ainsi que des frameworks modernes comme React pour le frontend et Node.js avec Express pour le backend.
                        </div>
                    </div>,
                    "contributions": [
                    <div>
                        Génération de composants React évolutifs et réutilisables.
                    </div>,
                    <div>
                        Participation au <strong>développement et à la conception de tous les microservices</strong> et, plus particulièrement, de l'<strong>API Gateway</strong> (Routage, sécurité, gestion des utilisateurs).
                    </div>,
                    <div>
                        Authentification et autorisation basées sur les rôles avec JWT.
                    </div>,
                    <div>
                        Requêtes SQL optimisées pour la génération de rapports.
                    </div>,
                    ],
                    "tools": [
                    "React", "Tailwind", "Node.js", "Express.js", 
                    "JavaScript", "JWT", "Microservices", "SQL Server", "Git",
                    "Flowbite", "Prisma", "Postman", "JSON"
                    ],
                },
                {
                    "image": cfLanding,
                    "title": "ERP Financier",
                    "status": "Terminé",
                    "color": "blue",
                    "summary": 
                    <div className='flex flex-col gap-2 text-justify'>
                        <div>
                        ERP web développé pour une société de <strong>services financiers</strong>. Ce projet est né dans le but de 
                        moderniser et d'automatiser la gestion opérationnelle du client.
                        </div>
                        <div>
                        Développé avec Laravel, PHP et SQL Server, le projet inclut des modules critiques de facturation électronique et des modèles d'amortissement ; il est actuellement en production et utilisé quotidiennement.
                        </div>
                    </div>,
                    "description": 
                    <div className='flex flex-col gap-3'>
                        <div>
                        Le système a transformé des processus manuels (auparavant réalisés à la main, à la machine à écrire ou sur Excel) en flux automatisés et fiables au sein d'une application web optimisée.
                        </div>
                        <div>
                        En plus de gérer la <strong>logique métier principale</strong> telle que la <strong>gestion des crédits</strong>, des <strong>paiements</strong> et des <strong>arriérés</strong>, il permet également aux utilisateurs de gérer les clients, les employés, les rôles et les permissions.
                        </div>
                        <div>
                        J'ai rejoint l'équipe en tant que stagiaire lors de la phase initiale et le développement s'est achevé à la fin de mon stage. Actuellement, l'équipe (dont je fais partie) assure la maintenance et le support du système.
                        </div>
                    </div>,
                    "contributions": [
                    <div>
                        Participation au développement du module de <strong>génération et de certification (stamping) des factures électroniques</strong> (normes SAT).
                    </div>,
                    <div>
                        Collaboration au développement du <strong>module de messagerie</strong> via <strong>WhatsApp</strong> pour l'envoi de messages automatisés.
                    </div>,
                    <div>
                        Mise en œuvre des calculs de <strong>tableaux d'amortissement</strong> personnalisés selon les besoins du client.
                    </div>,
                    <div>
                        Automatisation du calcul des intérêts moratoires et génération de rapports financiers.
                    </div>,
                    <div>
                        Développement fullstack du système global.
                    </div>
                    ],
                    "tools": [
                    "Laravel", "PHP", "SQL Server", "Bootstrap", 
                    "JavaScript", "JQuery", "HTML", "CSS", "GitLab",
                    "Finance", "Tableaux d'amortissement"
                    ],
                },
                {
                    "image": inventoryImage,
                    "title": "Gestion de Stocks",
                    "status": "En cours",
                    "color": "purple",
                    "summary": 
                    <div className='flex flex-col gap-2 text-justify'>
                        <div>
                        Système de gestion des stocks pour un commerce local à Guanajuato. L'objectif est de permettre aux propriétaires de 
                        <strong> gérer les entrées et sorties de produits</strong> dans leur magasin. Il comprend également des journaux de mouvements.
                        </div>
                        <div>
                        Le projet est en développement depuis novembre 2025 et dispose d'une version open-source consultable sur 
                        <AnchorLink href={"https://github.com/MiguelRuizL/warehouse-miguel-frontend"}> mon GitHub</AnchorLink>.
                        </div>
                    </div>,
                    "description": 
                    <div className='flex flex-col gap-3'>
                        <div>
                        Le système vise à répondre au <strong>besoin de gérer</strong> et de <strong>visualiser</strong> en détail <strong>l'inventaire</strong> du local, les propriétaires ayant récemment constaté des incohérences entre les bénéfices et la quantité d'articles vendus.
                        </div>
                        <div>
                        Bien que le système soit toujours en cours de développement, <strong>il est opérationnel depuis janvier 2026</strong> dans un environnement réel en phase bêta.
                        </div>
                        <div>
                        Le projet implémente une <strong>architecture découplée</strong> avec un <strong>Backend en Java</strong> (<strong>Spring Boot</strong>) et un <strong>Frontend en React</strong>.
                        </div>
                    </div>,
                    "contributions": [
                    <div>
                        Développement fullstack du système sur deux applications : frontend et backend.
                    </div>,
                    <div>
                        Authentification et autorisation avec <strong>Spring Security</strong> et <strong>JWT</strong> basées sur les rôles et les permissions.
                    </div>,
                    <div>
                        Développement du module de journalisation permettant de filtrer les mouvements par employé, dates et activités.
                    </div>,
                    <div>
                        Utilisation de composants React réutilisables et évolutifs.
                    </div>,
                    ],
                    "tools": [
                    "React", "Spring Boot", "Java", "JavaScript", 
                    "Tailwind", "Spring Security", "SQL Server", "JWT", "Maven", "Git",
                    "GitHub", "Flowbite", "Postman", "REST APIs", "JSON"
                    ],
                }
            ]
        },
        courses: {
            labels: {
                title: "Cours et Certifications",
                subtitle: "Connaissances acquises grâce aux cours et aux boosters",
                more_technologies: "Plus de technologies",
                pdf: "Consulter le PDF",
                badge: "Voir le badge",
                knowledge_accquired: "Connaissances acquises"
            },
            courses: [
                {
                    title: "Fondamentaux de Java",
                    provider: "TECNM",
                    date: "Janvier 2026",
                    description: <div>Cours propédeutique d'introduction à <strong>Java</strong> et à ses <strong>fondamentaux en tant que langage</strong>. 
                        C'est un prérequis pour un cours ultérieur plus avancé.
                    </div>,
                    techs: ["Java", "POO"],
                    pdfUrl: fundamentosJava,
                },
                {
                    title: "Booster : Java Backend Senior",
                    provider: "Metaphorce",
                    date: "Novembre 2025",
                    description: <div>Sujets avancés de développement <strong>Java</strong>, <strong>DevOps</strong>, <strong>CI/CD</strong> et de la <strong>stack Spring</strong> (Spring Boot, Security, Data).</div>,
                    techs: ["Java", "Docker", "Kubernetes", "Docker Swarm", "JWT", "Spring Boot", "Eclipse IDE", "Jakarta EE", "Maven", "JPA", "Hibernate", "REST APIs", "Postman", "Swagger"],
                    pdfUrl: senior2025
                },
                {
                    title: "Fondamentaux de l'IA OCI (Oracle Cloud Infrastructure)",
                    provider: "Oracle",
                    date: "Septembre 2025",
                    description: <div>Fondamentaux de l'<strong>intelligence artificielle</strong> et de ses dérivés, ainsi que de l'<strong>infrastructure Oracle Cloud</strong>.</div>,
                    techs: ["Oracle Cloud", "Intelligence Artificielle", "Machine Learning", "Deep Learning", "Python", "Anaconda"],
                    badgeUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6715D9556A7F5360C0FE29A03306263F0FD9E59B2AFCCF99927E96C54810600A",
                },
                {
                    title: "Booster : Java Backend Middle (Microservices)",
                    provider: "Metaphorce",
                    date: "Juillet 2024",
                    description: <div>Développement axé sur les <strong>microservices</strong> avec Java et Spring Boot en utilisant <strong>Docker</strong> et <strong>Maven</strong>.</div>,
                    techs: ["Java", "Microservices", "Spring Boot", "Docker", "Maven", "MySQL", "REST APIs", "JWT", "Postman", "JSON", "Swagger", "Mockito", "Jakarta EE", "JPA", "Hibernate"],
                    pdfUrl: middle2024
                },
                {
                    title: "Booster : Java Backend Jr-Mid et Soft Skills",
                    provider: "Metaphorce",
                    date: "Novembre 2023",
                    description: <div>Fondamentaux de <strong>Spring Boot</strong> avec Maven et <strong>création d'API</strong>. Comprend également des ateliers sur les <strong>soft skills</strong>.</div>,
                    techs: ["Java", "Spring Boot", "Maven", "MySQL", "REST APIs", "JWT", "Postman", "JSON", "Swagger", "Jakarta EE", "JPA", "Hibernate", "Empathie", "Assertivité", "Leadership", "Travail d'équipe"],
                    pdfUrl: junior2023
                }
            ]
        },
        skills: {
            labels: {
                title: "Compétences techniques",
                subtitle: "Compétences acquises que je continue de perfectionner"
            }
        }
    },




    de: { // german
        header: {
            portfolio: "Portfolio"
        },
        footer: {
            madeWith: <>Erstellt mit <span className="text-cyan-500 dark:text-cyan-400">React & TailwindCSS</span></>
        },
        portrait: {
            location: "Guanajuato, Mexiko"
        },
        comment: "profildaten",
        json: {
            me: {
                name: "Miguel Ángel Ruiz López",
                title: "Junior-Softwareentwickler",
                languages: ["Spanisch (Muttersprache)", "Englisch", "Französisch", "Deutsch"]
            },
            stack_summary: {
                languages: ["PHP", "Java", "JavaScript"],
                frontend: ["React", "Tailwind"],
                backend: ["Node.js", "Spring Boot"],
                fullstack: ["Laravel"],
                databases: ["SQL Server", "MySQL", "PostgreSQL"],
                devops: ["Git", "Docker"],
                other: ["Microservices", "JWT", "REST-APIs"]
            },
            experience: "1 Jahr",
            interests: {
                video_games: ["Dota 2", "Warcraft", "The Legend of Zelda"],
                video_editing: "Videobearbeitung (Sony Vegas)",
                sports: "Radfahren",
                art: "Zeichnen"
            }
        },
        bio: {
            title: "Miguel Ruiz",
            subtitle: "Junior-Softwareentwickler",
            content: [
                <div key="bio">
                    Fullstack-Softwareentwickler, <strong>spezialisiert auf Webentwicklung</strong> und <strong>Datenbankverwaltung</strong>. 
                    Ich begeistere mich für Technologie und kontinuierliches Lernen und strebe 
                    nach ständiger beruflicher und persönlicher Weiterentwicklung.
                </div>,
                <p key="hobbies">
                    Neben dem Programmieren begeistere ich mich für Sprachen und vertiefe derzeit meine Kenntnisse in 
                    <strong> Englisch</strong>, <strong>Französisch</strong> und <strong>Deutsch</strong>.
                </p>
            ],
        },
        contributions_label: "Wichtige Beiträge",
        timeline: {
            labels: {
                title: "Berufserfahrung",
                subtitle: "Beruflicher Werdegang",
                contributions: "Wichtige Beiträge"
            },
            timeline: [
                {
                    date: "Januar 2025 - Heute", 
                    job: "Junior Fullstack-Entwickler", 
                    logo: itnsLogo,
                    company: "ITNetworks Mexiko",
                    description: <div>
                        Ich bin Teil eines Teams, das für die Entwicklung und Wartung verschiedener Webanwendungen für unterschiedliche Kunden zuständig ist. Zu diesen Kunden zählen Unternehmen aus den Bereichen <strong>Finanzen</strong>, <strong>Technologie</strong> und
                        <strong> Unterhaltung</strong>. Mein Aufgabenbereich umfasst die <strong>Datenbankverwaltung</strong>, die 
                        <strong> Backend- und Frontend-Entwicklung</strong>, API-Testing, das Deployment von Anwendungen sowie die Versionsverwaltung mit Git.
                    </div>,
                    contributions: [
                        <div>Fullstack-Beteiligung an der Entwicklung der <AnchorLink href="https://web.itsales.mx">Webversion</AnchorLink> (basierend auf Microservices) des Desktop-ERP-Systems 
                        <AnchorLink href='https://itnetworks.mx/servicios/ITSales' target='_blank'> ITSales</AnchorLink> mit Node.js, Express, React und Tailwind.</div>,
                        <div>Implementierung von <strong>Clean-Code-Prinzipien</strong> (wie DRY) in Laravel- und React-Komponenten sowie in Backend-Funktionen, wodurch die Implementierungszeit neuer Funktionen um 30 % reduziert wurde.</div>,
                        <div>Reduzierung der SQL-Abfragezeiten bei massiven Datensätzen um 70 % durch Refactoring der Queries und Erstellung strategischer Indizes.</div>
                    ],
                    tools: ["Laravel", "React", "Node.js", "Express.js", "Microservices", "JWT", "PHP", "JavaScript", "SQL Server", "Tailwind", "Flowbite", "Git", "GitHub", "Kanban", "Trello"]
                },
                { 
                    date: "Juni 2024 - Dezember 2024", 
                    job: "Praktikant Fullstack-Entwicklung",
                    logo: itnsLogo,
                    company: "ITNetworks Mexiko", 
                    description: <div>
                        Während dieser Zeit war ich an der <strong>Entwicklung eines ERP-Systems für ein renommiertes Finanzunternehmen</strong> in Querétaro beteiligt.
                        Das mit Laravel, PHP und SQL Server entwickelte System verwaltet die gesamte Geschäftslogik, einschließlich Kunden, Mitarbeiter, Kredite, Zahlungen und mehr.
                    </div>,
                    contributions: [
                        <div>
                            Mitarbeit bei der Entwicklung des Moduls für die elektronische Rechnungsstellung (SAT) unter Verwendung der Bibliothek
                            <AnchorLink href="https://multifacturas.com"> Multifacturas</AnchorLink>.
                        </div>,
                        <div>
                            Mitarbeit bei der Entwicklung des WhatsApp-Messaging-Moduls unter Verwendung der Bibliothek
                            <AnchorLink href="https://waapi.app"> WaAPI</AnchorLink>.
                        </div>
                    ],
                    tools: ["Laravel", "PHP", "JavaScript", "SQL Server", "Bootstrap", "HTML", "CSS", "JQuery"]
                }
            ]
        },
        projects: {
            title: "Projekte",
            subtitle: "Projekte, an denen ich mitgewirkt und die ich entwickelt habe",
            labels: {
                details: "Details ansehen",
                about: "Über das Projekt",
                contributions: "Meine Beiträge",
                stack: "Tech-Stack",
                close: "Schließen"
            },
            projects: [
                {
                    "image": itsaleswebLanding,
                    "title": "ITSales Web",
                    "status": "In Entwicklung",
                    "color": "purple",
                    "summary": 
                    <div className='flex flex-col gap-2 text-justify'>
                        <div>
                        Webversion des Desktop-ERP-Systems <AnchorLink href='https://itnetworks.mx/servicios/ITSales'>ITSales</AnchorLink>. 
                        Ziel ist es, die robuste Desktop-Technologie ins Web zu migrieren, sodass alle 
                        Funktionen plattformunabhängig von überall aus über das Internet zugänglich sind.
                        </div>
                        <div>
                        Dieses Projekt wird in vier Phasen entwickelt, die den Zeitraum von Mai bis Oktober abdecken.
                        </div>
                    </div>,
                    "description": 
                    <div className='flex flex-col gap-3'>
                        <div>
                        Das System ermöglicht die Verwaltung von Kunden, Lieferanten, Produkten, elektronischer Rechnungsstellung und mehr. Zudem generiert es Berichte über Verkäufe, Einkäufe und Lagerbestände, die wichtige Kennzahlen für eine effiziente Unternehmensführung liefern.
                        </div>
                        <div>
                        Für die <AnchorLink href="https://web.itsales.mx">Webversion</AnchorLink> werden innovative Technologien wie Microservices, JWT zur Authentifizierung sowie moderne Frameworks wie React für das Frontend und Node.js mit Express für das Backend eingesetzt.
                        </div>
                    </div>,
                    "contributions": [
                    <div>
                        Erstellung skalierbarer und wiederverwendbarer React-Komponenten.
                    </div>,
                    <div>
                        Beteiligung an der <strong>Konzeption und Entwicklung aller Microservices</strong>, insbesondere des <strong>API-Gateways</strong> (Routing, Sicherheit, Benutzerverwaltung).
                    </div>,
                    <div>
                        Rollenbasierte Authentifizierung und Autorisierung mit JWT.
                    </div>,
                    <div>
                        Optimierte SQL-Abfragen für die Berichterstellung.
                    </div>,
                    ],
                    "tools": [
                    "React", "Tailwind", "Node.js", "Express.js", 
                    "JavaScript", "JWT", "Microservices", "SQL Server", "Git",
                    "Flowbite", "Prisma", "Postman", "JSON"
                    ],
                },
                {
                    "image": cfLanding,
                    "title": "Finanz-ERP",
                    "status": "Abgeschlossen",
                    "color": "blue",
                    "summary": 
                    <div className='flex flex-col gap-2 text-justify'>
                        <div>
                        Web-ERP, entwickelt für ein Unternehmen im Bereich <strong>Finanzdienstleistungen</strong>. Ziel des Projekts war die Modernisierung und Automatisierung der Geschäftsabläufe des Kunden.
                        </div>
                        <div>
                        Entwickelt mit Laravel, PHP und SQL Server; das Projekt umfasst kritische Module für die elektronische Rechnungsstellung und Tilgungspläne. Es befindet sich derzeit im täglichen Produktiveinsatz.
                        </div>
                    </div>,
                    "description": 
                    <div className='flex flex-col gap-3'>
                        <div>
                        Das System hat manuelle Prozesse, die zuvor handschriftlich oder in Excel erledigt wurden, in automatisierte und zuverlässige Workflows innerhalb einer optimierten Webanwendung transformiert.
                        </div>
                        <div>
                        Neben der <strong>Kern-Geschäftslogik</strong> wie der <strong>Kreditverwaltung</strong>, <strong>Zahlungen</strong> und <strong>Mahnwesen</strong> ermöglicht es auch die Verwaltung von Kunden, Mitarbeitern, Rollen und Berechtigungen.
                        </div>
                        <div>
                        Ich bin dem Team als Praktikant in der Anfangsphase beigetreten und habe das Projekt bis zum Abschluss meiner Zeit dort begleitet. Derzeit leiste ich zusammen mit dem Team Wartung und Support für das System.
                        </div>
                    </div>,
                    "contributions": [
                    <div>
                        Beteiligung an der Entwicklung des Moduls zur <strong>Erstellung und Zertifizierung elektronischer Rechnungen</strong> (SAT-Konformität).
                    </div>,
                    <div>
                        Mitarbeit am <strong>WhatsApp-Messaging-Modul</strong> für automatisierte Benachrichtigungen.
                    </div>,
                    <div>
                        Implementierung individueller <strong>Tilgungsplan-Berechnungen</strong> basierend auf Kundenanforderungen.
                    </div>,
                    <div>
                        Automatisierung der Zinsberechnungen und Erstellung von Finanzberichten.
                    </div>,
                    <div>
                        Fullstack-Entwicklung des Gesamtsystems.
                    </div>
                    ],
                    "tools": [
                    "Laravel", "PHP", "SQL Server", "Bootstrap", 
                    "JavaScript", "JQuery", "HTML", "CSS", "GitLab",
                    "Finanzen", "Tilgungspläne"
                    ],
                },
                {
                    "image": inventoryImage,
                    "title": "Bestandsverwaltung",
                    "status": "In Entwicklung",
                    "color": "purple",
                    "summary": 
                    <div className='flex flex-col gap-2 text-justify'>
                        <div>
                        Lagerverwaltungssystem für ein lokales Geschäft in Guanajuato. Es ermöglicht den Besitzern die 
                        <strong> Verwaltung von Wareneingängen und -ausgängen</strong> sowie die Einsicht in Bewegungsprotokolle.
                        </div>
                        <div>
                        Das Projekt wird seit November 2025 entwickelt; eine Open-Source-Version ist auf 
                        <AnchorLink href={"https://github.com/MiguelRuizL/warehouse-miguel-frontend"}> meinem GitHub</AnchorLink> einsehbar.
                        </div>
                    </div>,
                    "description": 
                    <div className='flex flex-col gap-3'>
                        <div>
                        Das System deckt den <strong>Bedarf an detaillierter Inventarkontrolle</strong>, da die Besitzer Unstimmigkeiten zwischen Gewinnen und verkauften Artikeln festgestellt hatten.
                        </div>
                        <div>
                        Obwohl noch in Entwicklung, <strong>ist das System seit Januar 2026</strong> in einer realen Beta-Umgebung im Einsatz.
                        </div>
                        <div>
                        Das Projekt nutzt eine <strong>entkoppelte Architektur</strong> mit einem <strong>Java-Backend</strong> (<strong>Spring Boot</strong>) und einem <strong>React-Frontend</strong>.
                        </div>
                    </div>,
                    "contributions": [
                    <div>
                        Fullstack-Entwicklung des Systems über zwei Anwendungen hinweg: Frontend und Backend.
                    </div>,
                    <div>
                        Authentifizierung und Autorisierung mit <strong>Spring Security</strong> und <strong>JWT</strong> basierend auf Rollen und Rechten.
                    </div>,
                    <div>
                        Entwicklung des Protokollmoduls zur Filterung von Bewegungen nach Mitarbeiter, Datum und Aktivität.
                    </div>,
                    <div>
                        Einsatz von wiederverwendbaren und skalierbaren React-Komponenten.
                    </div>,
                    ],
                    "tools": [
                    "React", "Spring Boot", "Java", "JavaScript", 
                    "Tailwind", "Spring Security", "SQL Server", "JWT", "Maven", "Git",
                    "GitHub", "Flowbite", "Postman", "REST-APIs", "JSON"
                    ],
                }
            ]
        },
        courses: {
            labels: {
                title: "Kurse & Zertifizierungen",
                subtitle: "Durch Kurse und Booster erworbenes Wissen",
                more_technologies: "Weitere Technologien",
                pdf: "PDF ansehen",
                badge: "Badge ansehen",
                knowledge_accquired: "Erworbene Kenntnisse"
            },
            courses: [
                {
                    title: "Java-Grundlagen",
                    provider: "TECNM",
                    date: "Januar 2026",
                    description: <div>Einführungskurs in <strong>Java</strong> und seine <strong>Grundlagen als Programmiersprache</strong>. 
                        Er ist Voraussetzung für einen späteren Aufbaukurs.
                    </div>,
                    techs: ["Java", "OOP"],
                    pdfUrl: fundamentosJava,
                },
                {
                    title: "Booster: Java Backend Senior",
                    provider: "Metaphorce",
                    date: "November 2025",
                    description: <div>Fortgeschrittene Themen der <strong>Java</strong>-Entwicklung, <strong>DevOps</strong>, <strong>CI/CD</strong> und des <strong>Spring-Stacks</strong> (Spring Boot, Security, Data).</div>,
                    techs: ["Java", "Docker", "Kubernetes", "Docker Swarm", "JWT", "Spring Boot", "Eclipse IDE", "Jakarta EE", "Maven", "JPA", "Hibernate", "REST APIs", "Postman", "Swagger"],
                    pdfUrl: senior2025
                },
                {
                    title: "KI-Grundlagen OCI (Oracle Cloud Infrastructure)",
                    provider: "Oracle",
                    date: "September 2025",
                    description: <div>Grundlagen der <strong>Künstlichen Intelligenz</strong> und ihrer Ableitungen sowie der <strong>Oracle Cloud-Infrastruktur</strong>.</div>,
                    techs: ["Oracle Cloud", "Künstliche Intelligenz", "Machine Learning", "Deep Learning", "Python", "Anaconda"],
                    badgeUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6715D9556A7F5360C0FE29A03306263F0FD9E59B2AFCCF99927E96C54810600A",
                },
                {
                    title: "Booster: Java Backend Middle (Mikroservices)",
                    provider: "Metaphorce",
                    date: "Juli 2024",
                    description: <div>Entwicklung mit Fokus auf <strong>Mikroservices</strong> mit Java und Spring Boot unter Verwendung von <strong>Docker</strong> und <strong>Maven</strong>.</div>,
                    techs: ["Java", "Mikroservices", "Spring Boot", "Docker", "Maven", "MySQL", "REST APIs", "JWT", "Postman", "JSON", "Swagger", "Mockito", "Jakarta EE", "JPA", "Hibernate"],
                    pdfUrl: middle2024
                },
                {
                    title: "Booster: Java Backend Jr-Mid und Soft Skills",
                    provider: "Metaphorce",
                    date: "November 2023",
                    description: <div>Grundlagen von <strong>Spring Boot</strong> mit Maven und <strong>Erstellung von APIs</strong>. Enthielt zudem Workshops zu <strong>Soft Skills</strong>.</div>,
                    techs: ["Java", "Spring Boot", "Maven", "MySQL", "REST APIs", "JWT", "Postman", "JSON", "Swagger", "Jakarta EE", "JPA", "Hibernate", "Empathie", "Durchsetzungsvermögen", "Leadership", "Teamarbeit"],
                    pdfUrl: junior2023
                }
            ]
        },
        skills: {
            labels: {
                title: "Technische Fähigkeiten",
                subtitle: "Erworbene Fähigkeiten, die ich kontinuierlich weiterentwickle"
            }
        }
    },



    zh: { // mandarin
        header: {
            portfolio: "作品集"
        },
        footer: {
            madeWith: <>使用 <span className="text-cyan-500 dark:text-cyan-400">React & TailwindCSS</span> 构建</>
        },
        portrait: {
            location: "瓜纳华托，墨西哥"
        },
        comment: "个人资料",
        json: {
            me: {
                name: "Miguel Ángel Ruiz López",
                title: "初级软件开发工程师",
                languages: ["西班牙语 (母语)", "英语", "法语", "德语"]
            },
            stack: {
                languages: ["PHP", "Java", "JavaScript"],
                frontend: ["React", "Tailwind"],
                backend: ["Node.js", "Spring Boot"],
                fullstack: ["Laravel"],
                databases: ["SQL Server", "MySQL", "PostgreSQL"],
                devops: ["Git", "Docker"],
                other: ["微服务", "JWT", "REST APIs"]
            },
            experience: "1年",
            interests: {
                video_games: ["Dota 2", "Warcraft", "The Legend of Zelda"],
                video_editing: "视频剪辑 (Sony Vegas)",
                sports: "自行车运动",
                art: "绘画"
            }
        },
        bio: {
            title: "Miguel Ruiz",
            subtitle: "初级软件开发工程师",
            content: [
                <div key="bio">
                    全栈软件开发工程师，<strong>专注于 Web 应用开发</strong>与<strong>数据库管理</strong>。
                    我对技术充满热情，并坚持持续学习；我致力于实现
                    职业与个人的不断成长。
                </div>,
                <p key="hobbies">
                    除了编程，我热爱语言学习，并不断提升我的
                    <strong>英语</strong>、<strong>法语</strong>和<strong>德语</strong>水平。
                </p>,
            ],
        },
        contributions_label: "主要贡献",
        timeline: {
            labels: {
                title: "工作经验",
                subtitle: "职业历程",
                contributions: "主要贡献"
            },
            timeline: [
                {
                    date: "2025年1月 - 至今", 
                    job: "初级全栈开发工程师", 
                    logo: itnsLogo,
                    company: "ITNetworks Mexico",
                    description: <div>
                        我是一个开发团队的一员，负责为不同客户开发和维护各类 Web 应用程序。客户群体涵盖 <strong>金融</strong>、<strong>科技</strong> 和
                        <strong> 娱乐</strong> 等行业。我的职责包括 <strong>数据库管理</strong>、
                        <strong> 后端及前端开发</strong>、代码与 API 测试、应用部署以及使用 Git 进行版本控制。
                    </div>,
                    contributions: [
                        <div>全栈参与 ITSales 桌面 ERP 的 <AnchorLink href="https://web.itsales.mx">Web 版本</AnchorLink>（基于微服务架构）开发，使用 Node.js、Express、React 和 Tailwind。</div>,
                        <div>在 Laravel 和 React 组件以及后端函数中应用 <strong>整洁代码 (Clean Code)</strong> 原则（如 DRY），将新功能的开发时间缩短了 30%。</div>,
                        <div>通过重构 (Refactoring) SQL 查询语句并创建战略性索引，将海量数据的查询响应时间降低了 70%。</div>
                    ],
                    tools: ["Laravel", "React", "Node.js", "Express.js", "微服务", "JWT", "PHP", "JavaScript", "SQL Server", "Tailwind", "Flowbite", "Git", "GitHub", "Kanban", "Trello"]
                },
                { 
                    date: "2024年6月 - 2024年12月", 
                    job: "全栈开发实习生",
                    logo: itnsLogo,
                    company: "ITNetworks Mexico", 
                    description: <div>
                        在此期间，我参与了 <strong>Querétaro 一家知名金融机构 ERP 系统</strong> 的开发。
                        该系统基于 Laravel、PHP 和 SQL Server 开发，负责管理客户、员工、信贷和支付等核心业务逻辑。
                    </div>,
                    contributions: [
                        <div>
                            协作开发了基于 <AnchorLink href="https://multifacturas.com"> Multifacturas</AnchorLink> 库的 SAT 电子发票模块。
                        </div>,
                        <div>
                            协作开发了基于 <AnchorLink href="https://waapi.app"> WaAPI</AnchorLink> 库的 WhatsApp 消息模块。
                        </div>
                    ],
                    tools: ["Laravel", "PHP", "JavaScript", "SQL Server", "Bootstrap", "HTML", "CSS", "JQuery"]
                }
            ]
        },
        projects: {
            title: "项目",
            subtitle: "我参与协作与开发的各个项目",
            labels: {
                details: "查看详情",
                about: "项目介绍",
                contributions: "我的贡献",
                stack: "技术栈",
                close: "关闭"
            },
            projects: [
                {
                    "image": itsaleswebLanding,
                    "title": "ITSales Web版",
                    "status": "开发中",
                    "color": "purple",
                    "summary": 
                    <div className='flex flex-col gap-2 text-justify'>
                        <div>
                        这是 <AnchorLink href='https://itnetworks.mx/servicios/ITSales'>ITSales</AnchorLink> 桌面端 ERP 的 Web 版本。
                        其目标是将桌面端 ERP 的强大技术迁移至 Web 端，确保其功能可以从任何地点、平台和系统访问，唯一的门槛仅需连接互联网。
                        </div>
                        <div>
                        该项目分为四个发布阶段进行开发，周期从 5 月持续到 10 月。
                        </div>
                    </div>,
                    "description": 
                    <div className='flex flex-col gap-3'>
                        <div>
                        该系统支持管理客户、供应商、产品及电子发票等；同时能生成销售、采购、库存和周转率报表，通过可视化关键汇总信息实现有效的企业管理。
                        </div>
                        <div>
                        在 <AnchorLink href="https://web.itsales.mx">Web 版本</AnchorLink> 的开发中，使用了符合当前趋势的创新技术与概念，如微服务架构、用于身份验证的 JWT，以及现代框架（前端 React，后端 Node.js 配合 Express）。
                        </div>
                    </div>,
                    "contributions": [
                    <div>
                        开发可扩展且可复用的 React 组件。
                    </div>,
                    <div>
                        参与<strong>所有微服务的设计与开发</strong>，特别是 <strong>API 网关 (API Gateway)</strong>（包括路由、安全和用户管理）。
                    </div>,
                    <div>
                        基于 JWT 实现的角色访问控制（身份验证与授权）。
                    </div>,
                    <div>
                        针对报表生成进行 SQL 查询优化。
                    </div>,
                    ],
                    "tools": [
                    "React", "Tailwind", "Node.js", "Express.js", 
                    "JavaScript", "JWT", "微服务", "SQL Server", "Git",
                    "Flowbite", "Prisma", "Postman", "JSON"
                    ],
                },
                {
                    "image": cfLanding,
                    "title": "金融服务 ERP",
                    "status": "已完成",
                    "color": "blue",
                    "summary": 
                    <div className='flex flex-col gap-2 text-justify'>
                        <div>
                        为一家<strong>金融服务</strong>公司开发的 Web 端 ERP 系统。该项目旨在实现客户企业管理的现代化与自动化。
                        </div>
                        <div>
                        使用 Laravel、PHP 和 SQL Server 开发，包含电子发票和摊销模型等关键模块。目前已正式上线并投入日常使用。
                        </div>
                    </div>,
                    "description": 
                    <div className='flex flex-col gap-3'>
                        <div>
                        该系统将原本通过手动、打字机或 Excel 完成的流程，转化为优化 Web 应用中自动化且可靠的工作流。
                        </div>
                        <div>
                        除了管理<strong>核心业务逻辑</strong>（如<strong>贷款管理</strong>、<strong>还款</strong>和<strong>逾期罚息</strong>），还允许用户管理客户、员工、角色及权限等。
                        </div>
                        <div>
                        我在实习初期加入团队，并在实习结束前完成了该项目的开发。目前，包括我在内的团队负责系统的维护与支持工作。
                        </div>
                    </div>,
                    "contributions": [
                    <div>
                        参与开发向 SAT 提交的<strong>电子发票生成与认证模块</strong>。
                    </div>,
                    <div>
                        协作开发基于 <strong>WhatsApp</strong> 的<strong>自动化消息模块</strong>。
                    </div>,
                    <div>
                        根据客户需求实现自定义<strong>还款计划表 (Amortization tables)</strong> 的计算逻辑。
                    </div>,
                    <div>
                        实现逾期利息自动计算及财务报表生成。
                    </div>,
                    <div>
                        系统的全栈式开发。
                    </div>
                    ],
                    "tools": [
                    "Laravel", "PHP", "SQL Server", "Bootstrap", 
                    "JavaScript", "JQuery", "HTML", "CSS", "GitLab",
                    "金融", "还款计划表"
                    ],
                },
                {
                    "image": inventoryImage,
                    "title": "库存管理系统",
                    "status": "开发中",
                    "color": "purple",
                    "summary": 
                    <div className='flex flex-col gap-2 text-justify'>
                        <div>
                        为瓜纳华托州一家本地企业开发的库存管理系统。其目的是帮助业主<strong>管理杂货店产品的入库与出库</strong>，并记录操作日志。
                        </div>
                        <div>
                        该项目自 2025 年 11 月开始开发，并在 <AnchorLink href={"https://github.com/MiguelRuizL/warehouse-miguel-frontend"}>我的 GitHub</AnchorLink> 上提供了开源版本。
                        </div>
                    </div>,
                    "description": 
                    <div className='flex flex-col gap-3'>
                        <div>
                        该系统旨在解决业主对<strong>精细化管理</strong>与<strong>库存可视化</strong>的需求，因为业主近期发现业务利润与售出商品数量之间存在不一致的情况。
                        </div>
                        <div>
                        尽管系统仍在开发中，但<strong>自 2026 年 1 月起已在真实环境的 Beta 阶段运行</strong>。
                        </div>
                        <div>
                        项目采用了<strong>解耦架构</strong>，后端使用 <strong>Java</strong> (<strong>Spring Boot</strong>)，前端使用 <strong>React</strong>。
                        </div>
                    </div>,
                    "contributions": [
                    <div>
                        负责前端与后端两个应用的全栈开发。
                    </div>,
                    <div>
                        使用 <strong>Spring Security</strong> 和 <strong>JWT</strong> 实现基于角色和权限的身份验证与授权。
                    </div>,
                    <div>
                        开发日志模块，支持按员工、日期和活动类型筛选操作记录。
                    </div>,
                    <div>
                        使用可复用且可扩展的 React 组件。
                    </div>,
                    ],
                    "tools": [
                    "React", "Spring Boot", "Java", "JavaScript", 
                    "Tailwind", "Spring Security", "SQL Server", "JWT", "Maven", "Git",
                    "GitHub", "Flowbite", "Postman", "REST APIs", "JSON"
                    ],
                }
            ]
        },
        courses: {
            labels: {
                title: "课程与认证",
                subtitle: "通过课程和强化训练获得的内容",
                more_technologies: "更多技术",
                pdf: "查看 PDF",
                badge: "查看徽章",
                knowledge_accquired: "所获知识"
            },
            courses: [
                {
                    title: "Java 基础",
                    provider: "TECNM",
                    date: "2026年1月",
                    description: <div><strong>Java</strong> 及其<strong>语言基础</strong>的入门预备课程。
                        这是后续高级课程的必修前提。
                    </div>,
                    techs: ["Java", "面向对象编程 (OOP)"],
                    pdfUrl: fundamentosJava,
                },
                {
                    title: "Java 后端高级强化班 (Booster)",
                    provider: "Metaphorce",
                    date: "2025年11月",
                    description: <div><strong>Java</strong> 开发的高级课题，涵盖 <strong>DevOps</strong>、<strong>CI/CD</strong> 以及 <strong>Spring 技术栈</strong>（Spring Boot, Security, Data）。</div>,
                    techs: ["Java", "Docker", "Kubernetes", "Docker Swarm", "JWT", "Spring Boot", "Eclipse IDE", "Jakarta EE", "Maven", "JPA", "Hibernate", "REST APIs", "Postman", "Swagger"],
                    pdfUrl: senior2025
                },
                {
                    title: "OCI (Oracle Cloud Infrastructure) 人工智能基础",
                    provider: "Oracle",
                    date: "2025年9月",
                    description: <div><strong>人工智能</strong>及其衍生领域的基础知识，以及 <strong>Oracle Cloud 基础架构</strong>。</div>,
                    techs: ["Oracle Cloud", "人工智能", "机器学习", "深度学习", "Python", "Anaconda"],
                    badgeUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6715D9556A7F5360C0FE29A03306263F0FD9E59B2AFCCF99927E96C54810600A",
                },
                {
                    title: "Java 后端中级强化班 (微服务架构)",
                    provider: "Metaphorce",
                    date: "2024年7月",
                    description: <div>专注于使用 Java 和 Spring Boot 进行<strong>微服务</strong>开发，并结合 <strong>Docker</strong> 和 <strong>Maven</strong> 的应用。</div>,
                    techs: ["Java", "微服务", "Spring Boot", "Docker", "Maven", "MySQL", "REST APIs", "JWT", "Postman", "JSON", "Swagger", "Mockito", "Jakarta EE", "JPA", "Hibernate"],
                    pdfUrl: middle2024
                },
                {
                    title: "Java 后端初中级强化班与软技能",
                    provider: "Metaphorce",
                    date: "2023年11月",
                    description: <div><strong>Spring Boot</strong> 与 Maven 的基础应用及 <strong>API 创建</strong>。此外还包括<strong>软技能</strong>工作坊。</div>,
                    techs: ["Java", "Spring Boot", "Maven", "MySQL", "REST APIs", "JWT", "Postman", "JSON", "Swagger", "Jakarta EE", "JPA", "Hibernate", "共情能力", "沟通能力", "领导力", "团队合作"],
                    pdfUrl: junior2023
                }
            ]
        },
        skills: {
            labels: {
                title: "技术技能",
                subtitle: "我已掌握并持续提升的技术能力"
            }
        }
    },
}