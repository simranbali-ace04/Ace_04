import React from 'react'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <div className='relative z-10 rounded-xl border border-zinc-800 bg-black/50 text-white px-8 py-4 m-3'>
        <div className="flex items-center justify-center gap-2">
        <h1 className="text-3xl font-heading text-olive-300">PROJECTS</h1>
        <div className="h-px flex-1 bg-linear-to-r from-zinc-700 to-transparent"></div>
      </div>
      <div className="text-md font-light m-4 flex flex-col gap-3 text-olive-200 ">
      <ProjectsCard />
      </div>
    </div>
  )
}

export default Projects
