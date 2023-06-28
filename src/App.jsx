import { useState } from 'react'
import './App.css'
import { About } from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import { Skills } from './Components/Skills'
import Testimonials from './Components/Testimonials'
import { HashLoaderModal } from './Components/spinner/HashLoaderModal'
import { ModalMessage } from './Components/modalMessage/ModalMessage'
import Navbar from './Components/navbar/Navbar'

function App () {
  const [showLoaderSpinner, setShowLoaderSpinner] = useState(false)
  const [showModalMessage, setShowModalMessage] = useState(false)
  const [modalMessageToShow, setModalMessageToShow] = useState({ type: '', message: '' })
  return (
    <>
      <main className='text-gray-400 body-font'>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact
          setShowLoaderSpinner={setShowLoaderSpinner}
          setModalMessageToShow={setModalMessageToShow}
          setShowModalMessage={setShowModalMessage}
        />
        {showLoaderSpinner
          ? <HashLoaderModal />
          : null}

        {showModalMessage
          ? <ModalMessage
              setShowModalMessage={setShowModalMessage}
              modalMessageToShow={modalMessageToShow}
            />
          : null}

      </main>
    </>
  )
}

export default App
