import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import About from '../components/About'
import Tech from '../components/Tech'
import Projects from '../components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Header />
    <About />
    <Tech />
    <Projects />
    </div>

    </>
  )
}

export default App
