import React from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGit,
  SiGithub, SiFlutter, SiDart, SiMongodb, SiMysql, SiCplusplus,
  SiPython, SiTypescript
} from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  { icon: <SiHtml5 />,       label: "HTML",       color: "#e34f26" },
  { icon: <SiCss3 />,        label: "CSS",        color: "#2965f1" },
  { icon: <SiJavascript />,  label: "JavaScript", color: "#f7df1e" },
  { icon: <SiTypescript />,  label: "TypeScript", color: "#3178c6" },
  { icon: <SiReact />,       label: "React",      color: "#61dafb" },
  { icon: <SiTailwindcss />, label: "Tailwind",   color: "#38bdf8" },
  { icon: <SiPython />,      label: "Python",     color: "#3776ab" },
  { icon: <SiMongodb />,     label: "MongoDB",    color: "#47a248" },
  { icon: <SiMysql />,       label: "MySQL",      color: "#4479a1" },
  { icon: <SiFlutter />,     label: "Flutter",    color: "#54c5f8" },
  { icon: <SiDart />,        label: "Dart",       color: "#0175c2" },
  { icon: <SiCplusplus />,   label: "C++",        color: "#9c7fd4" },
  { icon: <SiGit />,         label: "Git",        color: "#f05032" },
  { icon: <SiGithub />,      label: "GitHub",     color: "#18181b" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { type: "spring", stiffness: 130, damping: 15 } },
};

function Tech() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3 text-zinc-900">
          My Stack
        </h2>
        <p className="text-zinc-500 max-w-sm mx-auto text-sm">
          Tools I use to build things that actually work.
        </p>
      </motion.div>

      {/* Responsive grid: 3 cols mobile, 4 cols tablet, 7 cols desktop (2 rows × 14 cards) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -5, scale: 1.06 }}
            className="tech-card group rounded-2xl py-6 px-3 flex flex-col items-center justify-center gap-3 cursor-default"
            style={{ "--card-glow": `${tech.color}33` }}
          >
            {/* Icon */}
            <div
              className="text-4xl transition-all duration-300 group-hover:scale-110"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>

            {/* Label */}
            <p
              className="text-[10px] font-semibold text-zinc-400 group-hover:text-zinc-600 transition-colors tracking-wider text-center"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {tech.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Tech;
