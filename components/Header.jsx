import React, { useState, useEffect, useRef } from "react";
import { cn } from "../src/utils/cn";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#portfolio" },
  { name: "Projects", href: "#projects" },
  { name: "Connect", href: "#connect" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll while the mobile menu is open (html + body for iOS Safari)
  useEffect(() => {
    if (!menuOpen) return;
    const html = document.documentElement;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      html.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Focus the first link on open; Escape closes and returns focus to the toggle
  useEffect(() => {
    if (!menuOpen) return;
    const raf = requestAnimationFrame(() => firstLinkRef.current?.focus({ preventScroll: true }));
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // Close the menu if the viewport grows into the desktop nav range
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Desktop pill nav ─────────────────────────────────── */}
      <header className="fixed top-0 md:top-8 left-0 right-0 z-[100] flex justify-center md:px-4 pointer-events-none">
        <nav
          className={cn(
            "hidden md:flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 pointer-events-auto",
            scrolled
              ? "bg-white/80 backdrop-blur-3xl border border-zinc-200 shadow-[0_20px_50px_-15px_rgba(24,24,27,0.15)] scale-105"
              : "bg-white/60 backdrop-blur-md border border-zinc-200/70"
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center min-h-11 lg:min-h-0 px-5 py-2.5 rounded-full text-[12px] font-bold text-zinc-500 hover:text-zinc-900 transition-all hover:bg-zinc-900/5 whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* ── Mobile sticky bar ────────────────────────────────── */}
        <div
          className={cn(
            "md:hidden flex items-center justify-between w-full h-16 px-4 pointer-events-auto border-b transition-colors duration-300",
            scrolled || menuOpen
              ? "bg-white/85 backdrop-blur-md border-zinc-200/80"
              : "bg-transparent border-transparent"
          )}
        >
          {/* Logo / Name */}
          <a
            href="#about"
            onClick={closeMenu}
            className="inline-flex items-center justify-center min-w-11 min-h-11 -ml-1 px-1 rounded-lg text-lg font-black text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            style={{ fontFamily: "var(--font-display)" }}
            aria-label="Kratik Paliwal, back to top"
          >
            KP<span className="text-primary">.</span>
          </a>

          {/* Hamburger button */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="w-11 h-11 rounded-full flex flex-col items-center justify-center gap-[5px] bg-white/80 border border-zinc-200 transition-colors active:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span
              className={cn(
                "block h-[1.5px] bg-zinc-900 rounded-full transition-all duration-300 origin-center",
                menuOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] bg-zinc-900 rounded-full transition-all duration-300",
                menuOpen ? "w-0 opacity-0" : "w-3.5"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] bg-zinc-900 rounded-full transition-all duration-300 origin-center",
                menuOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"
              )}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Panel ────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-zinc-900/25 backdrop-blur-sm z-[90] md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Drop-down panel under the bar */}
            <motion.nav
              key="mobile-menu"
              id="mobile-menu"
              aria-label="Mobile"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-[4.5rem] left-4 right-4 z-[95] md:hidden max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain bg-white border border-zinc-200 rounded-[1.75rem] p-3 shadow-[0_40px_80px_-20px_rgba(24,24,27,0.25)]"
            >
              <ul className="flex flex-col">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={reduceMotion ? false : { opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + i * 0.04, ease: "easeOut" }}
                  >
                    <a
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between min-h-12 px-4 rounded-2xl text-zinc-700 active:bg-zinc-900/5 hover:bg-zinc-900/5 transition-colors text-base font-semibold group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
                    >
                      {item.name}
                      <span className="text-zinc-300 group-hover:text-primary group-active:text-primary transition-colors" aria-hidden="true">→</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* CTA row inside menu */}
              <div className="mt-2 pt-3 px-1 pb-1 border-t border-zinc-200 grid grid-cols-2 gap-2">
                <a
                  href="/resume.pdf"
                  download="Kratik_Paliwal_Resume.pdf"
                  onClick={closeMenu}
                  className="flex items-center justify-center min-h-12 rounded-2xl bg-primary/8 border border-primary/25 text-primary text-sm font-bold active:bg-primary/15 transition-colors"
                >
                  ↓ Download CV
                </a>
                <a
                  href="#connect"
                  onClick={closeMenu}
                  className="flex items-center justify-center min-h-12 rounded-2xl bg-zinc-900 text-white text-sm font-bold active:bg-zinc-800 transition-colors"
                >
                  Hire Me
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
