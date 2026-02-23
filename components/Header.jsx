import React, { useState, useEffect } from "react";
import { cn } from "../src/utils/cn";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-8 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <nav
        className={cn(
          "flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 pointer-events-auto",
          scrolled
            ? "bg-black/60 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] scale-105"
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
    </header>
  );
}

export default Header;