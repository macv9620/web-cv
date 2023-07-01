import React from 'react'
import linkedin from '../../assets/linkedin.png'
import './Navbar.css'

export default function Navbar () {
  return (
    <header className='bg-gray-800 sticky top-0 z-10' id='top'>
      <div className='container mx-auto flex flex-wrap p-3 md:p-5 md:justify-between justify-center md:flex-row items-center'>
        <div className='title-font font-medium text-white mb-4 md:mb-0 hidden md:flex'>
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
          href='https://www.linkedin.com/in/mateo-alejandro-castaño-vasco-702555153'
          target='self'
          className='flex gap-2 items-center bg-gray-800 border-0  focus:outline-none hover:bg-[#e76f51] hover:text-white md:px-4 md:py-1 hover:transition duration-1000 rounded text-base md:mt-0'
        >
          <span className='hidden md:flex'>Contáctame</span>
          <img src={linkedin} className='w-6' />
        </a>
      </div>
    </header>
  )
}
