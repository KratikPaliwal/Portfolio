import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { cn } from "../src/utils/cn";

/* ─── Data ──────────────────────────────────────────────────────────
   Add a new project by appending an object here. Keep `featured: true`
   for at most 1–2 projects — they get the full-width two-column
   treatment; everything else lands in the compact grid below.
   See bottom of file for screenshot guidance. */
const projects = [
  {
    id: "football-prediction",
    title: "Football Match Prediction System",
    category: "ML & AI",
    summary:
      "Three-layer stacked ensemble that fuses probability-based meta-features to predict match outcomes.",
    metrics: [
      { value: "88%+", label: "Accuracy" },
      { value: "13K+", label: "Matches trained" },
      { value: "3-layer", label: "Stacked ensemble" },
    ],
    tags: ["Python", "XGBoost", "Deep Learning", "CNN", "LSTM"],
    credit: "Supervised by Dr. Jitendra V. Tembhurne, IIIT Nagpur",
    image: "Images/Football.png",
    imageAlt: "Football analytics dashboard showing match predictor, league table, and top scorer stats",
    liveUrl: "https://github.com/KratikPaliwal/Sport_Prediction.git",
    githubUrl: "https://github.com/KratikPaliwal/Sport_Prediction.git",
    featured: true,
  },
  {
    id: "alioe-automation",
    title: "ALIOE Automation Engine",
    category: "ML & AI",
    summary:
      "AI-powered B2B lead automation engine with a master-sub-agent framework and a 4-layer email validation pipeline.",
    metrics: [
      { value: "90%", label: "Faster processing" },
      { value: "4-layer", label: "Validation pipeline" },
      { value: "80–85%", label: "Email quality" },
    ],
    tags: ["LangChain", "LLM", "React", "Python"],
    image: "Images/ALIOE.png",
    imageAlt: "ALIOE automation engine dashboard interface",
    liveUrl: "https://github.com/KratikPaliwal/ALIOE",
    githubUrl: "https://github.com/KratikPaliwal/ALIOE",
    featured: true,
  },
  {
    id: "trade-twice",
    title: "Trade Twice Marketplace",
    category: "Mobile",
    summary:
      "Cross-platform campus marketplace with secure auth, dynamic routing, and sub-second UI updates.",
    metrics: [
      { value: "50+", label: "Active users" },
      { value: "Sub-second", label: "UI updates" },
    ],
    tags: ["Flutter", "Firebase", "Real-time", "Cloud Storage"],
    credit: "Supervised by Dr. Venkatadri Marriboyina, NMIMS University",
    image: "Images/tradeTwice.png",
    imageAlt: "Trade Twice marketplace app login and listing screens",
    liveUrl: "https://github.com/KratikPaliwal/Trade_Twice",
    githubUrl: "https://github.com/KratikPaliwal/Trade_Twice",
    featured: false,
  },
  {
    id: "expense-buddy",
    title: "Expense Buddy",
    category: "Mobile",
    summary:
      "Personal finance tracker with offline-first storage and seamless cross-device sync.",
    metrics: [
      { value: "Offline", label: "SQLite support" },
      { value: "Real-time", label: "Cloud sync" },
    ],
    tags: ["Flutter", "Dart", "Firebase", "SQLite"],
    image: "Images/expense_buddy.png",
    imageAlt: "Expense Buddy personal finance tracking app home screen",
    liveUrl: "https://github.com/KratikPaliwal/expenseBuddy",
    githubUrl: "https://github.com/KratikPaliwal/expenseBuddy",
    featured: false,
  },
  {
    id: "cold-email",
    title: "Cold Email Outreach Engine",
    category: "Web",
    summary:
      "Full-stack outreach platform generating hyper-personalized cold emails with live open/reply tracking.",
    metrics: [
      { value: "LLM", label: "Personalized copy" },
      { value: "Real-time", label: "Reply tracking" },
    ],
    tags: ["React", "Node.js", "LLM", "MongoDB", "Automation"],
    image: "Images/cold_email.png",
    imageAlt: "Cold Email outreach dashboard with lead list and reply tracking",
    liveUrl: "https://cold-email-gold.vercel.app/",
    githubUrl: "https://github.com/KratikPaliwal/Cold_Email",
    featured: false,
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

/* ─── Shared bits ──────────────────────────────────────────────────── */
function Tag({ label, accent }) {
  return (
    <span
      className={cn(
        "px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider border whitespace-nowrap",
        accent
          ? "bg-primary/8 text-primary border-primary/25"
          : "bg-zinc-100 text-zinc-600 border-zinc-200"
      )}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {label}
    </span>
  );
}

function TagRow({ tags, max = 5 }) {
  const visible = tags.slice(0, max);
  const extra = tags.length - visible.length;
  return (
    <div className="flex flex-wrap gap-1.5">
      {visible.map((t, i) => (
        <Tag key={t} label={t} accent={i === 0} />
      ))}
      {extra > 0 && <Tag label={`+${extra}`} />}
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <div
        className="text-xl sm:text-2xl font-bold text-zinc-900 tabular-nums leading-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {value}
      </div>
      <div className="text-[11px] sm:text-xs text-zinc-500 mt-0.5">{label}</div>
    </div>
  );
}

/* Screenshot frame: object-contain on a dark backdrop so no image is ever
   cropped, regardless of its aspect ratio (portrait app shots included). */
function Screenshot({ image, alt, className }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-900 shadow-xl shadow-zinc-900/10",
        className
      )}
    >
      <div className="flex items-center gap-1.5 px-4 py-3 bg-black/20">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
      </div>
      <div className="aspect-[16/10] flex items-center justify-center p-4 sm:p-6 bg-zinc-950">
        <img
          src={image}
          alt={alt}
          className="max-w-full max-h-full object-contain rounded"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

function ActionLinks({ project, size = "md" }) {
  const isSm = size === "sm";
  return (
    <div className={cn("flex items-center", isSm ? "gap-2" : "gap-3")}>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} project`}
          className={cn(
            "group inline-flex items-center justify-center gap-2 rounded-full font-bold text-white bg-zinc-900 hover:bg-zinc-800 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            isSm ? "flex-1 py-2 text-xs" : "px-5 py-2.5 text-sm"
          )}
        >
          View Project
          <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className={cn(
            "inline-flex items-center justify-center gap-1.5 rounded-full font-semibold text-zinc-700 border border-zinc-300 bg-white hover:border-zinc-400 hover:bg-zinc-50 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            isSm ? "px-3 py-2 text-xs" : "px-5 py-2.5 text-sm"
          )}
        >
          <FiGithub size={isSm ? 13 : 15} />
          {!isSm && "GitHub"}
        </a>
      )}
    </div>
  );
}

/* ─── Featured project (full-width, two columns on desktop) ─────────── */
function FeaturedProject({ project, index, total }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay: Math.min(index, 3) * 0.06 }}
      className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 items-center py-10 lg:py-14 border-b border-zinc-200 last:border-b-0"
    >
      <div className="order-2 lg:order-1">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-[11px] font-semibold tracking-wider text-zinc-400"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="section-label !mb-0">{project.category}</span>
        </div>

        <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-zinc-600 text-base leading-relaxed mb-7 max-w-md">{project.summary}</p>

        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-7">
          {project.metrics.map((m) => (
            <Metric key={m.label} {...m} />
          ))}
        </div>

        <div className="mb-6">
          <TagRow tags={project.tags} />
        </div>

        {project.credit && <p className="text-sm text-zinc-500 mb-6">{project.credit}</p>}

        <ActionLinks project={project} />
      </div>

      <motion.div
        className="order-1 lg:order-2"
        whileHover={reduceMotion ? undefined : { y: -4, rotate: -0.4, scale: 1.015 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Screenshot image={project.image} alt={project.imageAlt} />
      </motion.div>
    </motion.article>
  );
}

/* ─── Compact grid card ───────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const reduceMotion = useReducedMotion();
  const metric = project.metrics[0];

  return (
    <motion.article
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: Math.min(index, 5) * 0.06 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden flex flex-col hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-900/5 transition-[box-shadow,border-color]"
    >
      <div className="relative aspect-[16/10] bg-zinc-950 flex items-center justify-center p-3 overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="max-w-full max-h-full object-contain rounded transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span
          className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-2"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {project.category}
        </span>
        <h3 className="text-base font-bold text-zinc-900 mb-1.5 leading-snug">{project.title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-4 flex-1">{project.summary}</p>

        {metric && (
          <div className="mb-4 flex items-baseline gap-1.5">
            <span
              className="text-lg font-bold text-zinc-900 tabular-nums"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {metric.value}
            </span>
            <span className="text-xs text-zinc-500">{metric.label}</span>
          </div>
        )}

        <div className="mb-5">
          <TagRow tags={project.tags} max={4} />
        </div>

        <div className="mt-auto">
          <ActionLinks project={project} size="sm" />
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Main section ────────────────────────────────────────────────── */
export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 md:mb-14"
      >
        <div className="flex items-center justify-end mb-4">
          <span
            className="text-xs font-semibold text-zinc-400 tracking-wide"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-3">
          Featured Projects
        </h2>
        <p className="text-zinc-500 max-w-lg text-sm sm:text-base">
          From ML research to production apps — a selection of what I've shipped.
        </p>
      </motion.div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-10 md:mb-14" role="group" aria-label="Filter projects by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-semibold transition-all border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              filter === cat
                ? "bg-zinc-900 text-white border-zinc-900"
                : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-zinc-900"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured projects */}
      {featured.length > 0 && (
        <div>
          <AnimatePresence mode="popLayout" initial={false}>
            {featured.map((p) => {
              const globalIndex = projects.findIndex((x) => x.id === p.id);
              return (
                <FeaturedProject key={p.id} project={p} index={globalIndex} total={projects.length} />
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {/* Remaining projects */}
      {rest.length > 0 && (
        <div
          className={cn(
            "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6",
            featured.length > 0 && "mt-10 md:mt-14"
          )}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {rest.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="text-center text-zinc-400 py-16">No projects in this category yet.</p>
      )}
    </div>
  );
}

/* ─── Notes ────────────────────────────────────────────────────────
   Add a project:   append an object to `projects` above. Set
                     `featured: true` for the 1–2 you want full-width
                     (keep it rare — that's what makes it feel premium).
   Swap a screenshot: just drop a new PNG in public/Images and point
                     `image` at it — any aspect ratio works as-is,
                     portrait or landscape, because the frame uses
                     object-contain on a dark backdrop instead of
                     cropping. No resizing/pre-cropping needed. */
