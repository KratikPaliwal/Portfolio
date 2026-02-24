import React, { useState, useEffect } from "react";
import { cn } from "../src/utils/cn";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#portfolio" },
  { name: "Projects", href: "#projects" },
  { name: "Awards", href: "#achievements" },
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
              ? "bg-black/70 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] scale-105"
              : "bg-white/[0.03] backdrop-blur-md border border-white/5"
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-5 py-2.5 rounded-full text-[12px] font-bold text-gray-400 hover:text-white transition-all hover:bg-white/10 whitespace-nowrap"
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
              "px-5 py-2.5 rounded-full text-sm font-black text-white transition-all duration-500",
              scrolled
                ? "bg-black/70 backdrop-blur-3xl border border-white/10"
                : "bg-white/[0.03] backdrop-blur-md border border-white/5"
            )}
          >
            KP<span className="text-purple-400">.</span>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className={cn(
              "w-11 h-11 rounded-full flex flex-col items-center justify-center gap-[5px] transition-all duration-500 pointer-events-auto",
              scrolled
                ? "bg-black/70 backdrop-blur-3xl border border-white/10"
                : "bg-white/[0.03] backdrop-blur-md border border-white/5"
            )}
          >
            <span
              className={cn(
                "block h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center",
                menuOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] bg-white rounded-full transition-all duration-300",
                menuOpen ? "w-0 opacity-0" : "w-3.5"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center",
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
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[90] md:hidden"
              onClick={closeMenu}
            />

            {/* Slide-down panel */}
            <motion.nav
              key="mobile-menu"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-24 left-4 right-4 z-[95] md:hidden bg-[#0c0c0f]/95 border border-white/10 rounded-[2rem] p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)]"
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
                      className="flex items-center justify-between px-5 py-4 rounded-2xl text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-all text-base font-semibold group"
                    >
                      {item.name}
                      <span className="text-gray-600 group-hover:text-purple-400 transition-colors">→</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* CTA row inside menu */}
              <div className="mt-6 pt-5 border-t border-white/5 flex gap-3">
                <a
                  href="/resume.pdf"
                  download="Kratik_Paliwal_Resume.pdf"
                  onClick={closeMenu}
                  className="flex-1 py-3 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-300 text-sm font-bold text-center hover:bg-purple-500/25 transition-all"
                >
                  ↓ Download CV
                </a>
                <a
                  href="#connect"
                  onClick={closeMenu}
                  className="flex-1 py-3 rounded-2xl bg-white text-black text-sm font-bold text-center hover:bg-gray-100 transition-all"
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