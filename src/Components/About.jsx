import CodingIcon from '../assets/coding.svg'

const About = () => {
  return (
    <section id='about'>
      <div className='container mx-auto flex px-10 py-10 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800 text-center'>
            Hola, soy Mateo
            <br className='hidden lg:inline-block text-lg' /> <span className='text-xl'>Disfruto construir aplicaciones web.</span>
          </h1>
          <p className='mb-8 leading-relaxed text-justify text-[#6b6767]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className='flex justify-center self-center'>
            <a
              href='#contact'
              className='self-center h-full flex text-white bg-[#2a9d8f] border-0 py-2 px-6 focus:outline-none hover:bg-[#2a857a] rounded text-lg text-center'
            >
              Contacto
            </a>
            <a
              href='#projects'
              className='ml-4 flex self-center text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg text-center'
            >
              Proyectos
            </a>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src={CodingIcon}
          />
        </div>
      </div>
    </section>
  )
}

export { About }
