import { useState } from 'react'
import './App.css'
import { About } from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import { Skills } from './Components/Skills'
import Testimonials from './Components/Testimonials'
import { HashLoaderModal } from './Components/spinner/HashLoaderModal'
import { ModalMessage } from './Components/modalMessage/ModalMessage'

function App () {
  const [showLoaderSpinner, setShowLoaderSpinner] = useState(false)
  const [showModalMessage, setShowModalMessage] = useState(false)
  const [modalMessageToShow, setModalMessageToShow] = useState({ type: '', message: '' })
  return (
    <>
      <main className='text-gray-400 bg-gray-900 body-font'>
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
