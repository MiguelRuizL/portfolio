import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { HRTrimmed  } from 'flowbite-react';

import { PortraitCard, JSONProfileCard, ParagraphCard } from './components/Cards'
import { VerticalTimeline } from './components/Timeline'
import ProjectsDisplay from './components/ProjectsDisplay'
import SkillsDisplay from './components/SkillsDisplay'
import CoursesDisplay from './components/CoursesDisplay'

import toolsData from './constants/tools';
import { Languages } from './constants/languages';
import './App.css';

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
            labels={t.timeline.labels}
            timelineData={t.timeline.timeline}
          ></VerticalTimeline>
        </div>
        <HRTrimmed  className='bg-green-500 dark:bg-cyan-700 !mb-0'/>
        <div>
          <ProjectsDisplay projects={t.projects} />
        </div>
        <HRTrimmed  className='bg-green-500 dark:bg-cyan-700 !mb-0'/>
        <div>
          <CoursesDisplay labels={t.courses.labels} courses={t.courses.courses}/>
        </div>
        <HRTrimmed  className='bg-green-500 dark:bg-cyan-700 !mb-0'/>
        <div>
          <SkillsDisplay labels={t.skills.labels} tools={toolsData} />
        </div>
      </div>
    </>
  )
}

export default App
