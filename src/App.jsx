import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import About from '../components/About'
import Tech from '../components/Tech'
import Projects from '../components/Projects'
import Connect from '../components/Connect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="pt-16"> {/* Pushes content below fixed header */}

        <div id="about" className="pt-20">
          <About />
        </div>

        <div id="portfolio" className="pt-20">
          <Tech />
        </div>

        <div id="projects" className="pt-20">
          <Projects />
        </div>

        <div id="connect" className="pt-20">
          <Connect />
        </div>
      </div>
    </>
  )
}

export default App
