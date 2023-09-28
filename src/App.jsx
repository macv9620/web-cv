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
