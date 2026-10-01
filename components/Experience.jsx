import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiBriefcase, FiAward, FiExternalLink, FiCalendar, FiMapPin, FiGlobe } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";

const experiences = [
  {
    role: "Machine Learning Intern",
    company: "Wavenet Technologies",
    link: "https://wavenetsolutions.in",
    period: "Jan 2026 - Present",
    description: [
      "Engineered an AI-powered B2B lead automation system (ALIOE), reducing processing time by 90% from 10–15 mins to under 1 min.",
      "Architected a master-sub-agent framework using LangChain and LLM APIs with a 4-layer email validation pipeline.",
      "Delivered scalable personalized email generation with 80-85% quality through intelligent prompt engineering."
    ],
    icon: <FiBriefcase />
  },
  {
    role: "Research Intern",
    company: "IIIT Nagpur",
    link: "https://iiitn.ac.in",
    period: "May 2025 - Aug 2025",
    description: [
      "Conducted ML research in sports analytics to improve football match outcome prediction using large-scale league data.",
      "Designed a three-layer ensemble combining XGBoost, BiLSTM, and 1D-CNN with a Logistic Regression meta-learner.",
      "Automated end-to-end preprocessing pipelines in Python for 13,000+ match records and 40+ features."
    ],
    icon: <FiBriefcase />
  }
];

const achievements = [
  {
    role: "8th Nationally",
    company: "Build With India Hackathon",
    period: "2024",
    description: [
      "Participated as a leader in a high-stakes national competition with 5,000+ teams.",
      "Demonstrated strong innovation and execution, securing a spot in the top percentile.",
      "Developed an AI-driven solution that addressed critical socio-economic challenges."
    ],
    icon: <FaTrophy />
  },
  {
    role: "Ranked 4,717 Globally",
    company: "TCS CodeVita",
    period: "2025",
    description: [
      "Global competitive programming competition by Tata Consultancy Services.",
      "Proved proficiency in complex problem solving and algorithmic efficiency against 500k+ participants.",
      "Handled advanced data structures and high-performance computing tasks under timed pressure."
    ],
    icon: <FiAward />
  }
];

function Experience() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Tab Switcher */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex bg-zinc-50 border border-zinc-200 p-1 rounded-2xl">
          <button
            onClick={() => setActiveTab("work")}
            className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === "work"
              ? "bg-white text-zinc-900 shadow-sm border border-zinc-200"
              : "text-zinc-400 hover:text-zinc-600"
              }`}
          >
            Work
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === "achievements"
              ? "bg-white text-zinc-900 shadow-sm border border-zinc-200"
              : "text-zinc-400 hover:text-zinc-600"
              }`}
          >
            Achievements
          </button>
        </div>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Vertical Line Connector */}
        <div className="absolute left-6 top-2 bottom-0 w-[1px] bg-zinc-200" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {(activeTab === "work" ? experiences : achievements).map((item, index) => (
              <div key={index} className="relative pl-16 group">
                {/* Circular Icon Container */}
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-xl text-primary z-10 overflow-hidden shadow-sm group-hover:border-primary/40 transition-colors">
                  <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="text-zinc-400 text-xs sm:text-sm font-medium tracking-wide">
                    {item.period}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mt-1">
                    {item.company}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-zinc-600 font-medium text-sm sm:text-base">
                      {item.role}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 px-2 rounded-lg bg-zinc-50 border border-zinc-200 text-[10px] text-zinc-500 hover:text-primary hover:bg-zinc-100 transition-all flex items-center gap-1"
                      >
                        <FiExternalLink /> Live
                      </a>
                    )}
                  </div>

                  {/* Description list */}
                  <ul className="mt-4 space-y-3">
                    {item.description.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm sm:text-base text-zinc-500 leading-relaxed font-light">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Experience;
