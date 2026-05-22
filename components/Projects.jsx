import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "Football Match Prediction System",
    guide: "Dr. Jitendra V. Tembhurne · IIIT Nagpur",
    description:
      "Three-layer stacked ensemble (XGBoost + BiLSTM + 1D-CNN) on 13,000+ matches. Achieved over 88% accuracy by fusing probability-based meta-features.",
    img: "Images/Football.png",
    live: "https://github.com/KratikPaliwal/Sport_Prediction.git",
    github: "https://github.com/KratikPaliwal/Sport_Prediction.git",
    tags: ["Python", "XGBoost", "Deep Learning", "CNN", "LSTM"],
    accent: "#6366f1",
  },
  {
    number: "02",
    title: "ALIOE Automation Engine",
    description:
      "AI-powered B2B lead engine built at Wavenet Technologies. LangChain + LLM APIs with a 4-layer validation pipeline — cut processing time by 90%.",
    img: "Images/ALIOE.png",
    live: "https://github.com/KratikPaliwal/ALIOE",
    github: "https://github.com/KratikPaliwal/ALIOE",
    tags: ["LangChain", "LLM", "React", "Python"],
    accent: "#22d3ee",
  },
  {
    number: "03",
    title: "Trade Twice Marketplace",
    guide: "Dr. Venkatadri Marriboyina · NMIMS University",
    description:
      "Cross-platform campus marketplace with secure auth, dynamic routing, and sub-second UI updates serving 50+ active users.",
    img: "Images/tradeTwice.png",
    live: "https://github.com/KratikPaliwal/Trade_Twice",
    github: "https://github.com/KratikPaliwal/Trade_Twice",
    tags: ["Flutter", "Firebase", "Real-time", "Cloud Storage"],
    accent: "#818cf8",
  },
  {
    number: "04",
    title: "Expense Buddy",
    description:
      "Personal finance tracker with offline support via SQLite. Built with Flutter and Firebase for seamless cross-device sync.",
    img: "Images/expense_buddy.png",
    live: "https://github.com/KratikPaliwal/expenseBuddy",
    github: "https://github.com/KratikPaliwal/expenseBuddy",
    tags: ["Flutter", "Dart", "Firebase", "SQLite"],
    accent: "#34d399",
  },
  {
    number: "05",
    title: "Cold Email Outreach Engine",
    description:
      "Full-stack outreach automation platform — generates hyper-personalized cold emails using LLMs, manages leads via a dashboard, and tracks open/reply rates in real time.",
    img: "Images/cold_email.png",
    live: "https://cold-email-gold.vercel.app/",
    github: "https://github.com/KratikPaliwal/Cold_Email",
    tags: ["React", "Node.js", "LLM", "MongoDB", "Automation"],
    accent: "#f97316",
  },
];

// How many vh of scrolling per project switch (lower = faster switching)
const VH_PER_PROJECT = 50;
// Total container height: N projects × 50vh + 100vh buffer
const CONTAINER_VH = projects.length * VH_PER_PROJECT + 100;

const slideVariants = {
  enter: (d) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
  center: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
  exit: (d) => ({ opacity: 0, y: d > 0 ? -40 : 40, transition: { duration: 0.25 } }),
};

/* ─── Mobile card (simple, no scroll magic) ───────────────────────── */
function MobileCard({ proj }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      className="rounded-[1.5rem] overflow-hidden border bg-[#080b14] flex flex-col"
      style={{ borderColor: `${proj.accent}22` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, #080b14 0%, transparent 60%)` }} />
        <span className="absolute top-3 left-4 text-xs font-bold opacity-30"
          style={{ fontFamily: "var(--font-mono)", color: proj.accent }}>{proj.number}</span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {proj.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-widest border"
              style={{ fontFamily: "var(--font-mono)", color: proj.accent, background: `${proj.accent}14`, borderColor: `${proj.accent}28` }}>
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-white mb-1 leading-snug">{proj.title}</h3>
        {proj.guide && (
          <p className="text-[10px] mb-2 uppercase tracking-widest"
            style={{ fontFamily: "var(--font-mono)", color: `${proj.accent}80` }}>{proj.guide}</p>
        )}
        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{proj.description}</p>
        <div className="flex gap-3">
          <a href={proj.live} target="_blank" rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 rounded-full text-sm font-bold text-white transition-all"
            style={{ background: proj.accent }}>
            View Project
          </a>
          <a href={proj.github} target="_blank" rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 rounded-full text-sm font-semibold text-gray-400 border border-white/10 bg-white/[0.03] hover:text-white transition-all flex items-center justify-center gap-1.5">
            <FiGithub size={13} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main component ──────────────────────────────────────────────── */
export default function Projects() {
  const containerRef = useRef(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);

  /* Detect desktop breakpoint (≥1024px) */
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Scroll tracking — only runs on desktop */
  useEffect(() => {
    if (!isDesktop) return;

    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalH = el.offsetHeight;
      const viewH = window.innerHeight;
      const scrolledIn = -rect.top;
      const scrollable = totalH - viewH;

      if (scrolledIn < 0 || scrolledIn > scrollable) return;

      const progress = scrolledIn / scrollable;
      const next = Math.min(projects.length - 1, Math.floor(progress * projects.length));

      if (next !== activeRef.current) {
        setDir(next > activeRef.current ? 1 : -1);
        activeRef.current = next;
        setActive(next);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  const proj = projects[active];

  return (
    <div className="max-w-6xl mx-auto px-4">

      {/* ── Heading ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 space-y-3"
      >
        <span className="section-label">Projects</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-gray-500 max-w-sm mx-auto text-sm">
          {isDesktop
            ? "Scroll to explore — from ML research to production apps."
            : "From ML research to production apps."}
        </p>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* MOBILE — simple vertical card list                        */}
      {/* ══════════════════════════════════════════════════════════ */}
      {!isDesktop && (
        <div className="flex flex-col gap-6">
          {projects.map((p) => <MobileCard key={p.number} proj={p} />)}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* DESKTOP — sticky scroll showcase                          */}
      {/* ══════════════════════════════════════════════════════════ */}
      {isDesktop && (
        <div
          ref={containerRef}
          style={{ height: `${CONTAINER_VH}vh` }}
          className="relative"
        >
          {/* Sticky panel */}
          <div className="sticky top-20 h-[calc(100vh-5rem)] flex items-center">

            {/* Split: text left, image right */}
            <div className="w-full grid grid-cols-2 gap-16 items-center">

              {/* Left — text */}
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div key={`t${active}`} custom={dir} variants={slideVariants}
                  initial="enter" animate="center" exit="exit">

                  <div className="text-8xl font-black leading-none mb-3 select-none"
                    style={{ fontFamily: "var(--font-display)", color: proj.accent, opacity: 0.1 }}>
                    {proj.number}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {proj.tags.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded-md text-[9px] font-semibold uppercase tracking-widest border"
                        style={{ fontFamily: "var(--font-mono)", color: proj.accent, background: `${proj.accent}14`, borderColor: `${proj.accent}28` }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-snug">{proj.title}</h3>

                  {proj.guide && (
                    <p className="text-xs font-medium mb-4 uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-mono)", color: `${proj.accent}80` }}>
                      {proj.guide}
                    </p>
                  )}

                  <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">{proj.description}</p>

                  <div className="flex items-center gap-3">
                    <a href={proj.live} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105"
                      style={{ background: proj.accent, boxShadow: `0 8px 24px -8px ${proj.accent}60` }}>
                      View Project <FiArrowUpRight />
                    </a>
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-400 border border-white/10 bg-white/[0.03] hover:text-white hover:border-white/20 transition-all">
                      <FiGithub /> GitHub
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Right — image */}
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div key={`i${active}`} custom={dir} variants={slideVariants}
                  initial="enter" animate="center" exit="exit" className="relative">
                  <div className="absolute -inset-4 rounded-[2.5rem] blur-2xl opacity-20 pointer-events-none"
                    style={{ background: proj.accent }} />
                  <div className="relative overflow-hidden rounded-[1.75rem] border"
                    style={{ borderColor: `${proj.accent}30` }}>
                    <img src={proj.img} alt={proj.title} className="w-full aspect-[16/10] object-cover" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 pointer-events-none"
                      style={{ background: `linear-gradient(135deg, ${proj.accent}15, transparent 60%)` }} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
              {projects.map((_, i) => (
                <div key={i} className="rounded-full transition-all duration-500 w-[3px]"
                  style={{
                    height: i === active ? "2rem" : "0.375rem",
                    background: i === active ? proj.accent : "rgba(255,255,255,0.15)",
                  }} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
