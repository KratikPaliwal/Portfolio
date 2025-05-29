import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import About from '../components/About'
import Tech from '../components/Tech'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Header />
    <About />
    <Tech />
    </div>

    </>
  )
}

export default App
