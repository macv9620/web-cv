import React from 'react'
import { projects } from '../data/data.jsx'
import { CodeIcon } from '../icons/CodeIcon'

export default function Projects () {
  return (
    <div id='projects' className='scroll-my-[40px]'>
      <section className='text-gray-400 bg-gray-900 body-font'>
        <div className='container flex flex-col px-5 py-10 text-center lg:px-40 mx-auto'>
          <div className='flex flex-col w-full mb-10 items-center'>
            <CodeIcon className='w-10 mb-4' />
            <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-white'>
              Aplicaciones que he construido
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
              facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
              fuga dolore.
            </p>
          </div>
          <div className='flex flex-wrap items-center justify-center max-w-[1500px]'>
            {projects.map((project) => (
              <div
                key={project.image}
                className='sm:w-1/2 w-100 p-4'
              >
                <div className='card-container flex relative items-center justify-center'>
                  <div className='card'>
                    <div className='face front'>
                      <img
                        alt='gallery'
                        className='absolute inset-0 w-full h-full object-cover object-center'
                        src={project.image}
                      />
                    </div>
                    <div className='face back px-8 py-10 z-8 w-full border-4 border-gray-800 bg-gray-900'>
                      <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
                        {project.subtitle}
                      </h2>
                      <h1 className='title-font text-lg font-medium text-white mb-3'>
                        {project.title}
                      </h1>
                      <p className='leading-relaxed'>{project.description}</p>
                      <div className='flex justify-center self-center mt-4'>
                        <a
                          href='#'
                          className='self-center h-full flex text-white bg-[#e76f51] border-0 py-2 px-6 focus:outline-none hover:bg-[#d8694d] rounded text-lg text-center'
                        >
                          Deploy
                        </a>
                        <a
                          href='#'
                          className='ml-4 flex self-center text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg text-center'
                        >
                          Repositorio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
