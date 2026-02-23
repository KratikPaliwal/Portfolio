import React from "react";
import { FiLink, FiGithub, FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Football Match Prediction System",
      guide: "Dr. Jitendra V. Tembhurne (IIIT Nagpur)",
      description: "Designed a three-layer stacked ensemble using XGBoost, BiLSTM, and 1D-CNN on 13,000+ matches. Achieved over 88% accuracy by fusing probability-based meta-features.",
      img: "Images/Football.png",
      live: "https://github.com/KratikPaliwal/Sport_Prediction.git",
      github: "https://github.com/KratikPaliwal",
      tags: ["Python", "XGBoost", "Deep Learning", "CNN", "LSTM"]
    },
    {
      title: "ALIOE automation engine",
      description: "Developed at Wavenet Technologies. An AI-powered B2B lead automation engine utilizing LangChain and LLM APIs with a 4-layer validation pipeline.",
      img: "Images/ALIOE.png",
      live: "https://github.com/KratikPaliwal/ALIOE",
      github: "https://github.com/KratikPaliwal",
      tags: ["LangChain", "LLM", "React", "Python"]
    },
    {
      title: "Trade Twice Marketplace",
      guide: "Dr. Venkatadri Marriboyina (NMIMS University)",
      description: "Cross-platform campus marketplace using Flutter and Firebase. Features secure authentication, dynamic routing, and sub-second UI updates for 50+ active users.",
      img: "Images/tradeTwice.png",
      live: "https://github.com/KratikPaliwal",
      github: "https://github.com/KratikPaliwal",
      tags: ["Flutter", "Firebase", "Real-time", "Cloud Storage"]
    },
    {
      title: "Expense Buddy",
      description: "Comprehensive financial tracking application designed for personal finance management. Built with Flutter, Firebase, and local SQL Lite for offline support.",
      img: "Images/ExpenseBuddy.png",
      live: "https://github.com/KratikPaliwal",
      github: "https://github.com/KratikPaliwal",
      tags: ["Flutter", "Dart", "Firebase", "SQLite", "Rest API"]
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Detailed technical implementations ranging from machine learning
          research to production-ready mobile applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group glass-card rounded-[2.5rem] overflow-hidden flex flex-col bg-[#0a0a0a]"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[#111]">
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

              <div className="absolute top-6 right-6 flex gap-2">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:bg-white/10 transition-colors border border-white/5"
                >
                  <FiGithub fontSize={20} />
                </a>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-10 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-widest leading-none">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors tracking-tight">
                {proj.title}
              </h3>

              {proj.guide && (
                <p className="text-purple-400/60 text-xs font-semibold uppercase tracking-widest mb-4">
                  Guide: {proj.guide}
                </p>
              )}

              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                {proj.description}
              </p>

              <div className="pt-6 border-t border-white/5 mt-auto">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-bold text-sm group/btn"
                >
                  Explore Implementation
                  <FiArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
