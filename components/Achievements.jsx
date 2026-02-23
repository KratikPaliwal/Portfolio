import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiStar } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";

const achievements = [
    {
        title: "Build With India Hackathon",
        rank: "8th Nationally",
        stats: "Top 0.1% among 5,000+ teams",
        description: "Demonstrated strong innovation and execution in a high-stakes national competition.",
        icon: <FaTrophy className="text-yellow-500" />
    },
    {
        title: "TCS CodeVita",
        rank: "Ranked 4,717 Globally",
        stats: "Top 0.9% out of 500,000+ participants",
        description: "Proved advanced competitive programming and complex problem-solving abilities on a global stage.",
        icon: <FiAward className="text-blue-500" />
    }
];

function Achievements() {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col mb-16 space-y-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Milestones & <span className="text-gradient">Achievements</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Recognitions and competitive rankings that validate my
                    problem-solving skills and technical excellence.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((ach, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group glass-card p-10 rounded-[3rem] relative overflow-hidden"
                    >
                        {/* Background Icon Glow */}
                        <div className="absolute -top-10 -right-10 text-[10rem] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                            {ach.icon}
                        </div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                                {ach.icon}
                            </div>

                            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/10 text-purple-400 text-xs font-black uppercase tracking-[0.2em] mb-4">
                                {ach.rank}
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                                {ach.title}
                            </h3>

                            <div className="flex items-center gap-2 text-gray-300 font-semibold text-sm mb-6">
                                <FiStar className="text-yellow-500 fill-yellow-500" />
                                {ach.stats}
                            </div>

                            <p className="text-gray-400 leading-relaxed max-w-md italic gap-3">
                                "{ach.description}"
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Achievements;
