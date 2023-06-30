import { useEffect } from 'react'
import aboutImage from '../assets/aboutImage.svg'

// eslint-disable-next-line react/prop-types
const About = ({ description, setDescription }) => {
  const message = 'Soy Ingeniero Industrial y desarrollador Web en formación, apasionado por proyectos tecnológicos y la Web.'

  useEffect(() => {
    let i = 0
    const up = message.length
    const stepPrint = []
    let string

    const timeRender = setInterval(() => {
      if (i < up) {
        stepPrint.push(message[i])
        i++
        string = stepPrint.join('')
        console.log('Ejecutando interval')
        setDescription(string)
      } else {
        clearInterval(timeRender)
      }
    }, 50)
  }, [])

  return (
    <section id='about' className='scroll-my-[200px]'>
      <div className='max-w-[1000px] container mx-auto flex px-10 py-10 md:flex-row flex-col items-center justify-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-2'>
          <h1 className='self-center title-font sm:text-4xl text-3xl font-medium text-gray-800 text-center'>
            Hola, soy Mateo
          </h1>
          <span className='text-xl text-gray-800 py-2 text-center'>Disfruto construir aplicaciones web.</span>
          <p className='mb-8 leading-relaxed text-justify text-[#6b6767] h-14 pb-2'>
            {description}
          </p>
          <div className='flex justify-center self-center'>
            <a
              href='#contact'
              className='self-center h-full flex text-white bg-[#2a9d8f] border-0 py-2 px-6 focus:outline-none hover:bg-[#2a857a] rounded text-lg text-center'
            >
              ¡Hablemos!
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
            src={aboutImage}
          />
        </div>
      </div>
    </section>
  )
}

export { About }
