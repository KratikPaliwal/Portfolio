import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiCpu, FiCode, FiLayers } from "react-icons/fi";

const titles = [
  { text: "Intelligent Interfaces", icon: <FiCpu className="text-purple-400" /> },
  { text: "Full Stack Solutions", icon: <FiCode className="text-blue-400" /> },
  { text: "AI-Powered Systems", icon: <FiLayers className="text-pink-400" /> }
];

function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full max-w-6xl py-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center lg:text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Based in India 🇮🇳
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight text-white">
          Hi, I'm <span className="text-gradient">Kratik</span>
        </h1>

        <div className="h-20 mb-8 overflow-hidden flex flex-col items-center lg:items-start justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={titles[index].text}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="flex items-center gap-4"
            >
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-2xl">
                {titles[index].icon}
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-200">
                {titles[index].text}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="max-w-xl text-gray-400 text-base md:text-lg mb-10 leading-relaxed mx-auto lg:mx-0">
          Crafting sophisticated software at the intersection of
          <span className="text-white font-medium"> Machine Learning</span> and
          <span className="text-white font-medium"> Modern Frontend</span>.
          Expertise in building scalable, AI-driven automation systems.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm flex items-center gap-2 hover:bg-gray-100 transition-all"
          >
            My Work <FiArrowRight />
          </motion.a>

          <div className="flex gap-3">
            <a
              href="https://github.com/KratikPaliwal" target="_blank" rel="noopener noreferrer"
              className="p-3.5 rounded-full glass hover:bg-white/5 hover:text-white transition-all border border-white/5"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/kratikpaliwal/" target="_blank" rel="noopener noreferrer"
              className="p-3.5 rounded-full glass hover:bg-white/5 hover:text-white transition-all border border-white/5"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative group shrink-0"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-[3rem] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 p-2.5 glass">
          <img
            src="Images/profile.jpeg"
            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-[2.2rem] grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
            alt="Kratik Paliwal"
          />
        </div>

        {/* Improved Minimal Badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-6 md:-left-10 glass px-6 py-5 rounded-[2rem] border border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <FiCpu className="text-purple-400 text-xl" />
            </div>
            <div>
              <div className="text-xl font-black text-white leading-none">ALIOE</div>
              <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">Core Engine</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
