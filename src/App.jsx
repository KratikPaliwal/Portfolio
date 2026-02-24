import { useEffect } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Tech from '../components/Tech'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import Connect from '../components/Connect'
import CustomCursor from '../components/CustomCursor'
import { motion, useScroll, useSpring } from 'framer-motion'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-mesh selection:bg-purple-500/30 overflow-x-hidden" style={{ cursor: 'none' }}>

      {/* Grain / Noise Overlay */}
      <div className="grain-overlay" />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Header />

      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-32 mb-20 md:mb-32">
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

      <footer className="relative z-10 py-12 text-center text-gray-500 text-sm border-t border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} <span className="text-gradient font-semibold">Kratik Paliwal</span>. Built with React & Tailwind.</p>
          <div className="flex gap-8">
            <a
              href="https://github.com/KratikPaliwal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors hover:text-purple-400"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kratikpaliwal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors hover:text-blue-400"
            >
              LinkedIn
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-purple-400 transition-colors"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
