"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-12 relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-neutral-100 border-4 border-white shadow-lg overflow-hidden">
            <Image 
              src="/profile.jpg" 
              alt="Profile" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-neutral-100 text-neutral-600 text-sm font-medium tracking-wide border border-neutral-200">
            {t.hero.location}
          </span>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900">
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-500 font-medium max-w-2xl mx-auto">
            {t.hero.role}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a 
              href="/resume.pdf" 
              className="group px-8 py-3.5 bg-neutral-900 text-white rounded-full font-medium flex items-center gap-2 hover:bg-neutral-800 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              <span>{t.hero.resume}</span>
            </a>
            <a 
              href="#contact" 
              className="group px-8 py-3.5 bg-white border border-neutral-200 text-neutral-900 rounded-full font-medium hover:border-neutral-400 transition-all hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{t.hero.contact}</span>
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-400"
      >
        <ArrowRight className="w-5 h-5 rotate-90" />
      </motion.div>
    </section>
  );
}
