import React from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGit,
  SiGithub, SiFlutter, SiDart, SiMongodb, SiMysql, SiCplusplus
} from "react-icons/si";
import { motion } from "framer-motion";

function Tech() {
  const techStack = [
    { icon: <SiHtml5 />, label: "HTML", color: "text-orange-600" },
    { icon: <SiCss3 />, label: "CSS", color: "text-blue-600" },
    { icon: <SiJavascript />, label: "JavaScript", color: "text-yellow-400" },
    { icon: <SiReact />, label: "React", color: "text-blue-400" },
    { icon: <SiTailwindcss />, label: "Tailwind", color: "text-teal-400" },
    { icon: <SiGit />, label: "Git", color: "text-red-500" },
    { icon: <SiGithub />, label: "GitHub", color: "text-white" },
    { icon: <SiFlutter />, label: "Flutter", color: "text-sky-500" },
    { icon: <SiDart />, label: "Dart", color: "text-blue-500" },
    { icon: <SiMysql />, label: "SQL", color: "text-blue-700" },
    { icon: <SiMongodb />, label: "MongoDB", color: "text-green-600" },
    { icon: <SiCplusplus />, label: "C++", color: "text-indigo-500" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Mastered <span className="text-gradient">Technologies</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I leverage a cutting-edge tech stack to build high-performance,
          scalable, and visually stunning web applications.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-default"
          >
            <div className={`text-4xl sm:text-5xl transition-transform duration-300 group-hover:scale-110 ${tech.color}`}>
              {tech.icon}
            </div>
            <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
              {tech.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Tech;
