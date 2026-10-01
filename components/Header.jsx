import React, { useState, useEffect } from "react";
import { cn } from "../src/utils/cn";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Desktop pill nav ─────────────────────────────────── */}
      <header className="fixed top-8 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
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
              className="px-5 py-2.5 rounded-full text-[12px] font-bold text-zinc-500 hover:text-zinc-900 transition-all hover:bg-zinc-900/5 whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* ── Mobile top bar ───────────────────────────────────── */}
        <div className="md:hidden flex items-center justify-between w-full pointer-events-auto">
          {/* Logo / Name */}
          <div
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-black text-zinc-900 transition-all duration-500",
              scrolled
                ? "bg-white/80 backdrop-blur-3xl border border-zinc-200"
                : "bg-white/60 backdrop-blur-md border border-zinc-200/70"
            )}
          >
            KP<span className="text-primary">.</span>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className={cn(
              "w-11 h-11 rounded-full flex flex-col items-center justify-center gap-[5px] transition-all duration-500 pointer-events-auto",
              scrolled
                ? "bg-white/80 backdrop-blur-3xl border border-zinc-200"
                : "bg-white/60 backdrop-blur-md border border-zinc-200/70"
            )}
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

      {/* ── Mobile Full-Screen Menu ──────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-zinc-900/30 backdrop-blur-xl z-[90] md:hidden"
              onClick={closeMenu}
            />

            {/* Slide-in-from-right panel */}
            <motion.nav
              key="mobile-menu"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-24 right-4 bottom-4 left-4 z-[95] md:hidden bg-white/95 border border-zinc-200 rounded-[2rem] p-6 shadow-[0_40px_80px_-20px_rgba(24,24,27,0.25)] overflow-y-auto"
            >
              <ul className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, ease: "easeOut" }}
                  >
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between px-5 py-4 rounded-2xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-900/5 active:bg-zinc-900/10 transition-all text-base font-semibold group"
                    >
                      {item.name}
                      <span className="text-zinc-300 group-hover:text-primary transition-colors">→</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* CTA row inside menu */}
              <div className="mt-6 pt-5 border-t border-zinc-200 flex gap-3">
                <a
                  href="/resume.pdf"
                  download="Kratik_Paliwal_Resume.pdf"
                  onClick={closeMenu}
                  className="flex-1 py-3 rounded-2xl bg-primary/8 border border-primary/25 text-primary text-sm font-bold text-center hover:bg-primary/15 transition-all"
                >
                  ↓ Download CV
                </a>
                <a
                  href="#connect"
                  onClick={closeMenu}
                  className="flex-1 py-3 rounded-2xl bg-zinc-900 text-white text-sm font-bold text-center hover:bg-zinc-800 transition-all"
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
