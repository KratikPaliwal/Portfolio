import { useEffect } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Tech from '../components/Tech'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import Connect from '../components/Connect'
import { motion, useScroll, useSpring } from 'framer-motion'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-mesh selection:bg-purple-500/30 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-32 mb-32">
        <section id="about" className="min-h-[85vh] flex items-center justify-center pt-20">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="portfolio">
          <Tech />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="achievements">
          <Achievements />
        </section>

        <section id="connect">
          <Connect />
        </section>
      </main>

      <footer className="py-12 text-center text-gray-500 text-sm border-t border-white/5 bg-black">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} Kratik Paliwal. Built with React & Tailwind.</p>
          <div className="flex gap-8">
            <a href="https://github.com/KratikPaliwal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/kratikpaliwal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
