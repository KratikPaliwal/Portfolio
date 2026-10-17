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
    <div className="max-w-5xl mx-auto md:px-4">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-14"
      >
        <h2 className="text-[length:clamp(1.75rem,5vw+0.75rem,2.25rem)] md:text-5xl font-bold mb-3 text-zinc-900">
          My Stack
        </h2>
        <p className="text-zinc-500 max-w-sm mx-auto text-base md:text-sm text-balance">
          Tools I use to build things that actually work.
        </p>
      </motion.div>

      {/* Wrapping chips on phones, 7-col tile grid from tablet up (2 rows × 14 cards) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 md:grid md:grid-cols-7 md:gap-4"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -5, scale: 1.06 }}
            className="tech-card group rounded-full md:rounded-2xl py-2 pl-3 pr-4 md:py-6 md:px-3 flex md:flex-col items-center justify-center gap-2 md:gap-3 cursor-default"
            style={{ "--card-glow": `${tech.color}33` }}
          >
            {/* Icon */}
            <div
              className="text-lg md:text-4xl transition-all duration-300 group-hover:scale-110"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>

            {/* Label */}
            <p
              className="text-[13px] md:text-[10px] font-semibold text-zinc-400 max-md:text-zinc-600 group-hover:text-zinc-600 transition-colors tracking-wide md:tracking-wider text-center"
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
