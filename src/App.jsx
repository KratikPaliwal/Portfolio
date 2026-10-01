import Header from '../components/Header'
import About from '../components/About'
import Tech from '../components/Tech'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Connect from '../components/Connect'
import { FiArrowUp } from 'react-icons/fi'

function App() {
  return (
    <div className="min-h-screen bg-mesh selection:bg-indigo-600/15 selection:text-indigo-900">

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

        <section id="connect">
          <Connect />
        </section>
      </main>

      <footer className="relative z-10 py-10 md:py-12 text-center text-zinc-500 text-sm border-t border-zinc-200 bg-white/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-5">
          <p>© {new Date().getFullYear()} <span className="text-zinc-900 font-semibold">Kratik Paliwal</span></p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/KratikPaliwal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kratikpaliwal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-zinc-300 bg-white text-zinc-600 text-xs font-semibold hover:border-zinc-400 hover:text-zinc-900 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <FiArrowUp size={13} /> Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
