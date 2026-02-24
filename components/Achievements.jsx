import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiAward, FiStar, FiUsers, FiTrendingUp, FiGlobe, FiZap } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";

/* ── Animated Count-Up Hook ──────────────────────────────────── */
function useCountUp(target, duration = 2000, shouldStart = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldStart) return;

        let startTime = null;
        const startValue = 0;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * (target - startValue) + startValue));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
        };

        requestAnimationFrame(step);
    }, [target, duration, shouldStart]);

    return count;
}

/* ── Format number with commas ───────────────────────────────── */
function formatNumber(n) {
    return n.toLocaleString("en-US");
}

/* ── Single Animated Stat ─────────────────────────────────────── */
function AnimatedStat({ value, suffix = "", label, icon, color, started }) {
    const count = useCountUp(value, 2200, started);
    return (
        <div className="flex flex-col items-center text-center p-4">
            <div className={`text-2xl mb-1 ${color}`}>{icon}</div>
            <div className={`text-3xl font-black text-white tabular-nums`}>
                {formatNumber(count)}{suffix}
            </div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">{label}</div>
        </div>
    );
}

/* ── Achievements Data ──────────────────────────────────────────── */
const achievements = [
    {
        title: "Build With India Hackathon",
        rank: "8th Nationally",
        rankValue: 8,
        rankSuffix: "th",
        rankLabel: "National Rank",
        rankIcon: <FaTrophy />,
        rankColor: "text-yellow-400",
        stats: [
            { value: 5000, suffix: "+", label: "Teams Competed", icon: <FiUsers />, color: "text-yellow-400" },
            { value: 1, suffix: "%", label: "Top Percentile", icon: <FiTrendingUp />, color: "text-orange-400" },
        ],
        description: "Demonstrated strong innovation and execution in a high-stakes national competition.",
        icon: <FaTrophy className="text-yellow-500" />,
        accentColor: "from-yellow-500/10 to-orange-500/5",
        borderHover: "hover:border-yellow-500/30",
    },
    {
        title: "TCS CodeVita",
        rank: "Ranked 4,717 Globally",
        rankValue: 4717,
        rankSuffix: "",
        rankLabel: "Global Rank",
        rankIcon: <FiGlobe />,
        rankColor: "text-blue-400",
        stats: [
            { value: 500000, suffix: "+", label: "Participants", icon: <FiUsers />, color: "text-blue-400" },
            { value: 9, suffix: "%", label: "Top 0.9% Global", icon: <FiZap />, color: "text-violet-400" },
        ],
        description: "Proved advanced competitive programming and complex problem-solving abilities on a global stage.",
        icon: <FiAward className="text-blue-500" />,
        accentColor: "from-blue-500/10 to-violet-500/5",
        borderHover: "hover:border-blue-500/30",
    },
];

/* ── Main Component ──────────────────────────────────────────────── */
function Achievements() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <div ref={sectionRef} className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="flex flex-col mb-16 space-y-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold tracking-tight"
                >
                    Milestones &amp; <span className="text-gradient">Achievements</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg"
                >
                    Recognitions and competitive rankings that validate my
                    problem-solving skills and technical excellence.
                </motion.p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((ach, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        className={`group glass-card p-8 rounded-[3rem] relative overflow-hidden border border-white/5 ${ach.borderHover} transition-all duration-500`}
                    >
                        {/* Background gradient accent */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${ach.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]`} />

                        {/* Large background icon */}
                        <div className="absolute -top-6 -right-6 text-[9rem] opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500">
                            {ach.icon}
                        </div>

                        <div className="relative z-10">
                            {/* Icon + Rank badge */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">
                                    {ach.icon}
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/15 text-purple-300 text-xs font-black uppercase tracking-[0.15em]">
                                    <FiStar className="text-yellow-400 fill-yellow-400 text-[10px]" />
                                    {ach.rank}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-6 leading-tight group-hover:text-purple-300 transition-colors duration-300">
                                {ach.title}
                            </h3>

                            {/* ── Animated Stat Counters ── */}
                            <div className="grid grid-cols-2 gap-4 mb-6 bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
                                {/* Rank counter */}
                                <div className="flex flex-col items-center text-center p-4 border-r border-white/5">
                                    <div className={`text-2xl mb-1 ${ach.rankColor}`}>{ach.rankIcon}</div>
                                    <div className="text-3xl font-black text-white tabular-nums">
                                        {isInView ? (
                                            <CountUpValue target={ach.rankValue} suffix={ach.rankSuffix} duration={2000} />
                                        ) : (
                                            <span>0{ach.rankSuffix}</span>
                                        )}
                                    </div>
                                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">{ach.rankLabel}</div>
                                </div>

                                {/* Participants / main stat counter */}
                                <div className="flex flex-col items-center text-center p-4">
                                    <div className={`text-2xl mb-1 ${ach.stats[0].color}`}>{ach.stats[0].icon}</div>
                                    <div className="text-3xl font-black text-white tabular-nums">
                                        {isInView ? (
                                            <CountUpValue target={ach.stats[0].value} suffix={ach.stats[0].suffix} duration={2400} />
                                        ) : (
                                            <span>0{ach.stats[0].suffix}</span>
                                        )}
                                    </div>
                                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">{ach.stats[0].label}</div>
                                </div>
                            </div>

                            {/* Percentile pill */}
                            <div className="flex items-center gap-2 mb-5">
                                <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-bold ${ach.stats[1].color}`}>
                                    <FiStar className="fill-current" />
                                    {ach.stats[1].label}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed italic text-sm">
                                &ldquo;{ach.description}&rdquo;
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

/* ── Count-Up Sub-component ───────────────────────────────────── */
function CountUpValue({ target, suffix = "", duration = 2000 }) {
    const count = useCountUp(target, duration, true);
    return <>{formatNumber(count)}{suffix}</>;
}

export default Achievements;
