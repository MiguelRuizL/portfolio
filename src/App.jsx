import { useState } from 'react'
import { PortraitCard, ParagraphCard } from './components/Cards'
import { ProfileSidebar } from './components/Sidebar'
import { VerticalTimeline } from './components/Timeline'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-5 w-full">
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <div className='col-span-1'>
            <PortraitCard></PortraitCard>
          </div>
          <div className='flex flex-col col-span-1 sm:col-span-2 gap-3'>
            <ParagraphCard 
              title={"Miguel Ruiz López"} 
              subtitle={"Desarrollador de Software Junior"} 
              content={[
                <div>
                  Desarrollador de software fullstack, <strong className='text-green-500 dark:text-green-400'>especializado en aplicaciones web y en la administración de bases de datos</strong>. 
                  Apasionado por la tecnología y el aprendizaje continuo; me esfuerzo por estar en constante crecimiento
                  profesional y personal.
                </div>,
                <p className=''>
                  Me gusta convivir con las personas, aprender de sus experiencias y compartir las mías, pues creo que todos tenemos algo valioso
                  para aportar. Además, me encantan los idiomas y continuamente estoy reforzando mis habilidades en
                  <strong className='text-green-500 dark:text-green-400'> inglés, francés y alemán</strong>.
                </p>,
              ]}>
            </ParagraphCard>
            <VerticalTimeline></VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
