import { testimonials } from '../data/data.jsx'
import { TerminalIcon } from '../icons/TerminalIcon'
import { UsersIcon } from '../icons/UsersIcon.jsx'

export default function Testimonials () {
  return (
    <section id='testimonials' className='scroll-my-[40px]'>
      <div className='w-full bg-gray-900'>
        <div className='max-w-[1300px] container px-5 py-10 mx-auto text-center flex flex-col items-center'>
          <UsersIcon className='w-10 inline-block mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
            Experiencia
          </h1>
          <div className='flex flex-wrap mx-4 items-center justify-center'>
            {testimonials.map((testimonial, index) => (
              <div className='px-4 py-4 md:w-1/2 w-full min-w-[380px] max-w-[400px]' key={index}>
                <div className='h-full bg-gray-800 bg-opacity-40 rounded py-4 px-2 flex flex-col w-full'>
                  <div className='flex items-center justify-center h-14 mb-2 p-8'>
                    <img
                      alt='testimonial'
                      src={testimonial.image}
                      className='w-12 rounded-full flex-shrink-0 object-cover object-center self-center mt-2'
                    />
                    <span className='flex-grow flex flex-col pl-4'>
                      <span className='title-font font-medium text-white'>
                        {testimonial.name}
                      </span>
                      <span className='text-gray-500 text-sm uppercase'>
                        {testimonial.company}
                      </span>
                    </span>
                  </div>
                  <div className=''>
                    <ul className='tasks'>
                      {testimonial.quote.map((task, index) => {
                        return (
                          <li key={index} className='py-2 bg-gray-800 my-2 w-full rounded-md text-white'>{task}</li>
                        )
                      })}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
