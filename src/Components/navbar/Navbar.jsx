import React from 'react'
import { ArrowRightIcon } from '../../icons/ArrowRightIcon'
import './Navbar.css'

export default function Navbar () {
  return (
    <header className='bg-gray-800 md:sticky top-0 z-10' id='top'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <div className='title-font font-medium text-white mb-4 md:mb-0'>
          <a href='#about' className='ml-3 text-xl'>
            Mateo Vasco
          </a>
        </div>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center'>
          <a href='#projects' className='mr-5 hover:text-white'>
            Proyectos
          </a>
          <a href='#skills' className='mr-5 hover:text-white'>
            Tecnologías
          </a>
          <a href='#testimonials' className='mr-5 hover:text-white'>
            Experiencia
          </a>
        </nav>
        <a
          href='#contact'
          className='flex gap-2 items-center bg-gray-800 border-0 py-1 focus:outline-none hover:bg-[#e76f51] hover:text-white px-4 hover:transition duration-1000 rounded text-base mt-4 md:mt-0'
        >
          Hablemos
          <ArrowRightIcon className='w-4 h-4 ml-1' />
        </a>
      </div>
    </header>
  )
}
