import { skills } from '../data/data.jsx'
import { ChipIcon } from '../icons/ChipIcon.jsx'

const Skills = () => {
  return (
    <section id='skills' className='scroll-my-[40px]'>
      <div className='container px-5 py-10 mx-auto'>
        <div className='text-center mb-4 flex flex-col items-center'>
          <ChipIcon />
          <h1 className='sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-4'>
            Tecnologías implementadas
          </h1>
          <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-[#6b6767]'>
            A lo largo del desarrollo de proyectos personales he fortalecido mis conocimientos en las siguientes tecnologías:
          </p>
        </div>
        <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
          {skills.map((skill, index) => (
            <div key={index} className='p-2 sm:w-1/2 w-full'>
              <div className='bg-gray-800 rounded flex p-4 h-full items-center justify-center'>
                <img src={skill.icon} className='w-6 mx-2' />
                <span className='title-font font-medium text-white'>
                  {skill.tool}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Skills }
