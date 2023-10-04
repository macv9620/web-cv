import { useEffect, useState } from 'react'
import './App.css'
import { About } from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import { Skills } from './Components/Skills'
import Testimonials from './Components/Testimonials'
import { HashLoaderModal } from './Components/spinner/HashLoaderModal'
import { ModalMessage } from './Components/modalMessage/ModalMessage'
import Navbar from './Components/navbar/Navbar'
import { ScrollTopButton } from './Components/scrollTop/ScrollTopButton'
import axios from 'axios'

function App () {
  const [showLoaderSpinner, setShowLoaderSpinner] = useState(false)
  const [showModalMessage, setShowModalMessage] = useState(false)
  const [modalMessageToShow, setModalMessageToShow] = useState({
    type: 'error',
    message: ''
  })
  const [description, setDescription] = useState('')

  useEffect(() => {
    setShowLoaderSpinner(true)

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
        authorization: 'Basic MTc0MDc5REUtRjg4NS00REE4LUIwRjAtOTc3QTEwQTRERTJFOnlhRmJxT1M4Z2RqS01STklRMDdQcXpXSFRUYXMwdVU0Rnlnc2ROdlFzWDRPY1c4WFVqdFhuYmZRaHk5cGhEUUVtbEkwUHFVY0dxU0UxbFJqWlFTeG13PT0='
      },
      body: new URLSearchParams({
        is_primary: 'true',
        phone_number: '573146592538',
        message: 'Se ha ingresado al Web CV',
        message_type: 'ARN'
      })
    }

    fetch('https://rest-ww.telesign.com/v1/messaging', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err))

    setTimeout(() => {
      setShowLoaderSpinner(false)
    }, 2500)
    axios('https://get-yours.onrender.com/users')
      .then(res => console.log('Ok'))
      .catch(err => console.log(err))

    axios('https://productsapi-euyr.onrender.com/API/v1/products')
      .then(res => console.log('Ok'))
      .catch(err => console.log(err))

    axios('https://market-spring-api.onrender.com/products/all')
      .then(res => console.log('Ok'))
      .catch(err => console.log(err))
  }, [])

  return (
    <>

      <main className='parallax-container text-gray-400 body-font'>
        <Navbar />
        <div className='content__background' />
        <div className='content__front'>
          <About
            description={description}
            setDescription={setDescription}
          />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact
            setShowLoaderSpinner={setShowLoaderSpinner}
            setModalMessageToShow={setModalMessageToShow}
            setShowModalMessage={setShowModalMessage}
          />
          {showLoaderSpinner ? <HashLoaderModal /> : null}

          {showModalMessage
            ? (
              <ModalMessage
                setShowModalMessage={setShowModalMessage}
                modalMessageToShow={modalMessageToShow}
              />
              )
            : null}
          <a href='#about'>
            <ScrollTopButton />
          </a>
        </div>

      </main>

    </>
  )
}

export default App
