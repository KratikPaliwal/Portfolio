import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from "react-icons/fi";

const experiences = [
    {
        role: "Machine Learning Intern",
        company: "Wavenet Technologies",
        link: "https://wavenetsolutions.in",
        location: "Mumbai, India",
        period: "Jan 2026 - Present",
        description: [
            "Engineered an AI-powered B2B lead automation system (ALIOE), reducing processing time by 90% from 10–15 mins to under 1 min.",
            "Architected a master-sub-agent framework using LangChain and LLM APIs with a 4-layer email validation pipeline.",
            "Delivered scalable personalized email generation with 80-85% quality through intelligent prompt engineering."
        ],
        skills: ["LangChain", "LLMs", "Python", "Automation"]
    },
    {
        role: "Research Intern",
        company: "IIIT Nagpur",
        link: "https://iiitn.ac.in",
        location: "Nagpur, India",
        period: "May 2025 - Aug 2025",
        description: [
            "Conducted ML research in sports analytics to improve football match outcome prediction using large-scale league data.",
            "Designed a three-layer ensemble combining XGBoost, BiLSTM, and 1D-CNN with a Logistic Regression meta-learner.",
            "Automated end-to-end preprocessing pipelines in Python for 13,000+ match records and 40+ features."
        ],
        skills: ["Machine Learning", "Python", "XGBoost", "Deep Learning"]
    }
];

function Experience() {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col mb-12 space-y-4 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                    Work <span className="text-gradient">Experience</span>
                </h2>
                <p className="text-gray-400 max-w-2xl text-base md:text-lg mx-auto md:mx-0">
                    My professional journey and the impact I've made through
                    internships and research positions.
                </p>
            </div>

            <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        {/* Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 glass-card bg-black z-10 absolute left-0 md:left-1/2 md:-ml-5 transition-all duration-300 group-hover:border-purple-500/50 group-hover:scale-110">
                            <FiBriefcase className="text-purple-400" />
                        </div>

                        {/* Content */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-5 sm:p-7 md:p-8 rounded-[2rem] sm:rounded-[2.5rem] ml-14 sm:ml-16 md:ml-0">
                            <div className="flex flex-col gap-2 mb-4">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium mt-0.5"
                                    >
                                        {exp.company} <FiExternalLink className="text-[10px]" />
                                    </a>
                                </div>
                                <div className="flex flex-wrap items-center gap-3 mt-1">
                                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-purple-400/80 uppercase tracking-widest">
                                        <FiCalendar /> {exp.period}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
                                        <FiMapPin /> {exp.location}
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-2.5 mb-5">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-gray-400 text-xs sm:text-sm leading-relaxed flex gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/40 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
