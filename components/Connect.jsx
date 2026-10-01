import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiMail, FiMapPin, FiCopy, FiCheck, FiDownload,
  FiArrowUpRight, FiLoader, FiCheckCircle, FiAlertCircle,
} from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { cn } from "../src/utils/cn";

/* ─── Single config object — update contact details here ───────────── */
const contactInfo = {
  email: "kratikpaliwal1@gmail.com",
  linkedin: { handle: "@kratikpaliwal", url: "https://www.linkedin.com/in/kratikpaliwal/" },
  github: { handle: "@KratikPaliwal", url: "https://github.com/KratikPaliwal" },
  resumeUrl: "/resume.pdf",
  location: "Madhya Pradesh, India",
  timeZone: "Asia/Kolkata",
  timeZoneLabel: "IST (UTC+5:30)",
  availability: "Open to opportunities",
  replyTime: "I usually reply within 24–48 hours.",
};

const topicOptions = ["Job opportunity", "Freelance project", "Collaboration", "Just saying hi"];

function formatLocalTime(timeZone) {
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone }).format(new Date());
}

function LiveClock({ timeZone }) {
  const [time, setTime] = useState(() => formatLocalTime(timeZone));
  useEffect(() => {
    const id = setInterval(() => setTime(formatLocalTime(timeZone)), 60000);
    return () => clearInterval(id);
  }, [timeZone]);
  return <span className="tabular-nums">{time}</span>;
}

/* Full-row link: icon, label + value, arrow that nudges on hover */
function ContactRow({ icon, label, value, href, download }) {
  return (
    <a
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      download={download}
      className="group flex items-center gap-4 py-3.5 px-2 -mx-2 rounded-xl hover:bg-zinc-50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold text-zinc-900">{label}</div>
        <div className="text-sm text-zinc-500 truncate">{value}</div>
      </div>
      <FiArrowUpRight className="text-zinc-300 shrink-0 transition-all duration-200 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
      {message}
    </p>
  );
}

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  if (!email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!message.trim()) {
    errors.message = "Please enter a message.";
  } else if (message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

const MAX_MESSAGE_LENGTH = 1000;

function Connect() {
  const reduceMotion = useReducedMotion();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState(null);
  const [honeypot, setHoneypot] = useState(""); // spam trap — must stay empty
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [copied, setCopied] = useState(false);

  const textareaRef = useRef(null);
  const chipRefs = useRef([]);

  const handleBlur = (field, values) => {
    const fieldErrors = validate(values);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setTopic(null);
    setErrors({});
    setStatus("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot tripped — silently "succeed" without actually sending anything.
    if (honeypot) {
      setStatus("success");
      return;
    }

    const fieldErrors = validate({ name, email, message });
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      const firstField = ["name", "email", "message"].find((f) => fieldErrors[f]);
      document.getElementById(firstField)?.focus();
      return;
    }

    setStatus("submitting");

    try {
      const subject = `New message from ${name}${topic ? ` — ${topic}` : ""}`;
      const body = `Name: ${name}\nEmail: ${email}${topic ? `\nTopic: ${topic}` : ""}\n\n${message}`;
      const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Brief, honest delay — there's no backend here, this just hands off
      // to the visitor's own email client, so we don't claim "sent".
      window.setTimeout(() => {
        window.location.href = mailtoLink;
        setStatus("success");
      }, reduceMotion ? 0 : 500);
    } catch {
      setStatus("error");
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = contactInfo.email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const handleChipKeyDown = (e, idx) => {
    if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(e.key)) return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
    const next = (idx + dir + topicOptions.length) % topicOptions.length;
    setTopic(topicOptions[next]);
    chipRefs.current[next]?.focus();
  };

  const autoGrow = (el) => {
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mb-10 md:mb-14"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-3">
          Let's Start a Conversation
        </h2>
        <p className="text-zinc-500 max-w-xl text-base md:text-lg">
          Whether you have a specific project in mind or just want to explore possibilities, I'm always open to new connections.
        </p>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
      >
        {/* ── Left: quick contact panel ─────────────────────────── */}
        <div className="lg:col-span-5 h-full">
          <div className="glass-card rounded-[1.75rem] border border-zinc-200 bg-white p-6 sm:p-7 h-full flex flex-col">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                {!reduceMotion && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                )}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {contactInfo.availability}
            </div>

            {/* Email row: mailto link + explicit copy button */}
            <div className="flex items-center gap-4 py-3.5 px-2 -mx-2 rounded-xl hover:bg-zinc-50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center shrink-0">
                <FiMail size={18} />
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="min-w-0 flex-1 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="text-sm font-semibold text-zinc-900">Email</div>
                <div className="text-sm text-zinc-500 truncate">{contactInfo.email}</div>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className={cn(
                  "shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  copied
                    ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                    : "bg-white border-zinc-300 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900"
                )}
              >
                {copied ? <FiCheck size={13} /> : <FiCopy size={13} />}
                {copied ? "Copied" : "Copy"}
              </button>
              <span aria-live="polite" className="sr-only">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </div>

            <ContactRow
              icon={<FaLinkedin size={17} />}
              label="LinkedIn"
              value={contactInfo.linkedin.handle}
              href={contactInfo.linkedin.url}
            />
            <ContactRow
              icon={<FaGithub size={17} />}
              label="GitHub"
              value={contactInfo.github.handle}
              href={contactInfo.github.url}
            />
            <ContactRow
              icon={<FiDownload size={17} />}
              label="Resume"
              value="Download PDF"
              href={contactInfo.resumeUrl}
              download="Kratik_Paliwal_Resume.pdf"
            />

            <div className="h-px bg-zinc-100 my-4" />

            <div className="flex items-start gap-4 py-1 px-2 -mx-2">
              <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center shrink-0">
                <FiMapPin size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-zinc-900">
                  {contactInfo.location} · {contactInfo.timeZoneLabel}
                </div>
                <div className="text-sm text-zinc-500">
                  Local time: <LiveClock timeZone={contactInfo.timeZone} />
                </div>
              </div>
            </div>

            <p className="mt-auto pt-6 text-sm text-zinc-500 border-t border-zinc-100 mt-6">
              {contactInfo.replyTime}
            </p>
          </div>
        </div>

        {/* ── Right: form card ──────────────────────────────────── */}
        <div className="lg:col-span-7 h-full">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[1.75rem] border border-zinc-200 shadow-sm h-full flex flex-col">
            {status === "success" ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                  <FiCheckCircle size={26} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">
                  Almost there{name ? `, ${name}` : ""}!
                </h3>
                <p className="text-zinc-500 text-sm max-w-sm mb-6">
                  I've opened your email app with your message ready — just hit send there to reach me.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {status === "error" && (
                  <div role="alert" className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
                    <FiAlertCircle className="text-red-600 shrink-0 mt-0.5" size={18} />
                    <div className="text-sm">
                      <p className="font-semibold text-red-700 mb-1">Couldn't open your email app.</p>
                      <p className="text-red-600">
                        <button type="button" onClick={handleSubmit} className="underline font-medium">
                          Try again
                        </button>
                        {" "}or email me directly at{" "}
                        <a href={`mailto:${contactInfo.email}`} className="underline font-medium">
                          {contactInfo.email}
                        </a>.
                      </p>
                    </div>
                  </div>
                )}

                {/* Honeypot — hidden from real users, left visible to simple bots */}
                <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className={cn(
                        "w-full min-h-11 px-4 py-3 rounded-xl border bg-white text-zinc-900 text-sm transition-all placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-primary/10",
                        errors.name ? "border-red-400 focus:border-red-400" : "border-zinc-500 focus:border-primary"
                      )}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => handleBlur("name", { name, email, message })}
                      placeholder="John Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    <FieldError id="name-error" message={errors.name} />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={cn(
                        "w-full min-h-11 px-4 py-3 rounded-xl border bg-white text-zinc-900 text-sm transition-all placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-primary/10",
                        errors.email ? "border-red-400 focus:border-red-400" : "border-zinc-500 focus:border-primary"
                      )}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => handleBlur("email", { name, email, message })}
                      placeholder="john@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    <FieldError id="email-error" message={errors.email} />
                  </div>
                </div>

                <div className="mb-5">
                  <span className="block text-sm font-medium text-zinc-700 mb-2">
                    What's this about? <span className="text-zinc-400 font-normal">(optional)</span>
                  </span>
                  <div role="radiogroup" aria-label="What's this about?" className="flex flex-wrap gap-2">
                    {topicOptions.map((opt, i) => (
                      <button
                        key={opt}
                        ref={(el) => (chipRefs.current[i] = el)}
                        type="button"
                        role="radio"
                        aria-checked={topic === opt}
                        tabIndex={topic === opt || (!topic && i === 0) ? 0 : -1}
                        onClick={() => setTopic(opt)}
                        onKeyDown={(e) => handleChipKeyDown(e, i)}
                        className={cn(
                          "px-3.5 py-2 rounded-full text-xs font-semibold border transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                          topic === opt
                            ? "bg-primary/8 text-primary border-primary/30"
                            : "bg-white text-zinc-600 border-zinc-300 hover:border-zinc-400 hover:text-zinc-900"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-2">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                      Message
                    </label>
                    <span className="text-xs text-zinc-400 tabular-nums">{message.length}/{MAX_MESSAGE_LENGTH}</span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    ref={textareaRef}
                    rows={5}
                    maxLength={MAX_MESSAGE_LENGTH}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border bg-white text-zinc-900 text-sm transition-all resize-none placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-primary/10",
                      errors.message ? "border-red-400 focus:border-red-400" : "border-zinc-500 focus:border-primary"
                    )}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      autoGrow(e.target);
                    }}
                    onBlur={() => handleBlur("message", { name, email, message })}
                    placeholder="Tell me about your vision..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  <FieldError id="message-error" message={errors.message} />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto mt-5 h-12 px-7 inline-flex items-center justify-center gap-2 rounded-full font-bold text-sm text-white bg-zinc-900 hover:bg-zinc-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {status === "submitting" ? (
                    <>
                      <FiLoader className={cn(!reduceMotion && "animate-spin")} size={16} />
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
                <span aria-live="polite" className="sr-only">
                  {status === "submitting" ? "Sending your message" : ""}
                </span>

                <p className="mt-3 text-xs text-zinc-400">
                  Your details are only used to reply to you.
                </p>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Connect;
