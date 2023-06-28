import './App.css'
import { About } from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import { Skills } from './Components/Skills'
import Testimonials from './Components/Testimonials'

function App () {
  return (
    <>
      <main className='text-gray-400 bg-gray-900 body-font'>
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}

export default App
