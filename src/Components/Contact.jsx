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
    console.log(dataForm)
    setShowLoaderSpinner(true)
    setTimeout(() => {
      emailjs.sendForm('service_v3tmfis', 'template_93elmbn', e.target, 'IShr0lkfuk1OoQPEU')
        .then(res => {
          console.log(res)
          setDataForm(formTemplate)
          setShowLoaderSpinner(false)
          setShowModalMessage(true)
          setModalMessageToShow({
            type: 'success',
            message: 'Mail successfully sent. I will contact you soon'
          })
        })
        .catch(error => {
          console.log(error)
          setShowLoaderSpinner(false)
          setShowModalMessage(true)
          setModalMessageToShow({
            type: 'error',
            message: 'Please try again in a moment'
          })
        })
    }, 3000)
  }

  return (
    <section id='contact' className='relative'>
      <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
        <form
          name='contact'
          onSubmit={handleSubmit}
          className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
        >
          <h2 className='text-gray-800 sm:text-4xl text-3xl mb-1 font-medium title-font'>
            Contáctame
          </h2>
          <p className='leading-relaxed mb-5'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className='relative mb-4'>
            <label htmlFor='name' className='leading-7 text-sm text-gray-400'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              required
              value={dataForm.name}
              onChange={handleChange}
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-sm text-gray-400'>
              Your Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              value={dataForm.email}
              onChange={handleChange}
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className='leading-7 text-sm text-gray-400'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              required
              value={dataForm.message}
              onChange={handleChange}
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
            />
          </div>
          <button
            type='submit'
            className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
