import { useState } from 'react'
import emailjs from '@emailjs/browser'

// eslint-disable-next-line react/prop-types
export default function Contact ({ setShowLoaderSpinner, setModalMessageToShow, setShowModalMessage }) {
  const formTemplate = {
    name: '',
    email: '',
    message: ''

  }
  const [dataForm, setDataForm] = useState(formTemplate)

  const handleChange = (e) => {
    const updatedForm = { ...dataForm, [e.target.name]: e.target.value }
    setDataForm(updatedForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowLoaderSpinner(true)
    setTimeout(() => {
      emailjs.sendForm('service_v3tmfis', 'template_93elmbn', e.target, 'IShr0lkfuk1OoQPEU')
        .then(res => {
          setDataForm(formTemplate)
          setShowLoaderSpinner(false)
          setShowModalMessage(true)
          setModalMessageToShow({
            type: 'success',
            message: '¡Correo enviado! Te contactaré en breve'
          })
        })
        .catch(error => {
          console.log(error)
          setShowLoaderSpinner(false)
          setShowModalMessage(true)
          setModalMessageToShow({
            type: 'error',
            message: 'Por favor intenta de nuevo en un momento'
          })
        })
    }, 3000)
  }

  return (
    <section id='contact' className='relative flex justify-center scroll-my-[40px]'>
      <div className='container flex px-5 py-6 flex sm:flex-nowrap flex-wrap max-w-screen-sm'>
        <form
          name='contact'
          onSubmit={handleSubmit}
          className='flex flex-col w-full md:py-8 mt-8 md:mt-0'
        >
          <h2 className='text-gray-800 sm:text-4xl text-3xl mb-1 font-medium title-font text-center'>
            ¡Hablemos!
          </h2>
          <p className='leading-relaxed mb-5 text-[#6b6767] text-center'>
            Deja tus datos y estaré complacido de contactarte.
          </p>
          <div className='relative mb-4'>
            <label htmlFor='name' className='leading-7 text-sm text-[#6b6767]'>
              Nombre
            </label>
            <input
              type='text'
              id='name'
              name='name'
              required
              value={dataForm.name}
              onChange={handleChange}
              className='w-full bg-white rounded border border-gray-700 focus:border-black focus:transition transition focus:ring-2 focus:ring-black text-base outline-none text-[#6b6767] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-sm text-[#6b6767]'>
              Correo electrónico
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              value={dataForm.email}
              onChange={handleChange}
              className='w-full bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:transition transition focus:ring-black text-base outline-none text-[#6b6767] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className='leading-7 text-sm text-[#6b6767]'
            >
              Mensaje
            </label>
            <textarea
              id='message'
              name='message'
              required
              value={dataForm.message}
              onChange={handleChange}
              className='w-full bg-white rounded border border-gray-700 focus:border-black focus:ring-2 focus:transition transition focus:ring-black h-20 text-base outline-none text-[#6b6767] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
            />
          </div>
          <button
            type='submit'
            className='text-white bg-[#e76f51] border-0 py-2 px-6 focus:outline-none transition hover:transition hover:bg-[#d8694d] rounded text-lg'
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
