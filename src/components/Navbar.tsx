"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  const navItems = [
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300 px-4",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div 
        className={cn(
          "max-w-5xl w-full flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300",
          scrolled 
            ? "bg-white/70 backdrop-blur-md border border-neutral-200/50 shadow-sm" 
            : "bg-transparent"
        )}
      >
        <a href="#" className="text-lg font-bold tracking-tight text-neutral-900">
          Yuhan Wen
        </a>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-black transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-medium bg-neutral-100 hover:bg-neutral-200 transition-colors px-3 py-1.5 rounded-full"
          >
            <span className={cn("transition-colors", language === "zh" ? "text-neutral-900 font-bold" : "text-neutral-400")}>中</span>
            <span className="text-neutral-300">/</span>
            <span className={cn("transition-colors", language === "en" ? "text-neutral-900 font-bold" : "text-neutral-400")}>En</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
