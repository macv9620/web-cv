import React, { useState } from 'react'
import { projects } from '../data/data.jsx'
import { Turn } from '../icons/Turn.jsx'
import { Pc } from '../icons/Pc.jsx'

export default function Projects () {
  return (
    <div id='projects' className='scroll-my-[40px]'>
      <section className='text-gray-400 bg-gray-900 body-font'>
        <div className='container flex flex-col px-5 py-10 text-center lg:max-w-[1200px] lg:px-40 mx-auto'>
          <div className='flex flex-col w-full mb-10 items-center'>
            <Pc className='w-10 mb-4' />
            <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-white'>
              Aplicaciones desarrolladas
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Gira las cartas para ver un demo en las aplicaciones Front, consulta en cada repositorio el Readme para más detalle.
            </p>
          </div>
          <div className='flex flex-wrap items-center justify-center max-w-[1500px]'>
            {projects.map((project, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [turn, setTurn] = useState(false)
              return (
                <div
                  key={index}
                  className={!turn ? 'turn-off lg:w-1/2 w-100 p-4' : 'card-container lg:w-1/2 w-100 p-4'}
                >
                  <div className='flex relative items-center justify-center mix-w-[330px]'>
                    <div className='card'>
                      <div className='face back'>

                        <img
                          alt='gallery'
                          className='absolute inset-0 w-full h-full object-contain object-center'
                          src={project.image}
                        />
                        <Turn
                          turnSide={(e) => {
                            setTurn(!turn)
                            e.stopPropagation()
                          }}
                        />
                      </div>
                      <div className='face front px-8 py-10 z-8 w-full border-4 border-gray-800 bg-gray-900 flex flex-col items-center justify-center'>
                        {project.isApi
                          ? null
                          : <Turn
                              turnSide={(e) => {
                                setTurn(!turn)
                                e.stopPropagation()
                              }}
                            />}

                        <div className='flex justify-center gap-4 pb-2 items-center'>
                          {project.techs.map((tech, index) => {
                            return (
                              <div className='w-6' key={index}>
                                <img src={tech} />
                              </div>
                            )
                          })}
                        </div>
                        <h1 className='title-font text-lg font-medium text-white mb-3'>
                          {project.title}
                        </h1>
                        <p className='leading-relaxed'>{project.description}</p>
                        <div className='flex justify-center self-center mt-4'>
                          <a
                            href={project.deploy}
                            target='_blank'
                            className='self-center h-full flex text-white bg-[#e76f51] border-0 py-2 px-6 focus:outline-none hover:bg-[#d8694d] rounded text-lg text-center'
                            rel='noreferrer'
                            onClick={(e) => e.stopPropagation()}
                          >
                            Ver
                          </a>
                          <button>
                            <a
                              href={project.repo}
                              target='_blank'
                              className='ml-4 flex self-center text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg text-center'
                              rel='noreferrer'
                              onClick={(e) => e.stopPropagation()}
                            >
                              Repositorio
                            </a>
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
