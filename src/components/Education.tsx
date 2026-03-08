"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Education() {
  const { t } = useLanguage();
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-24 px-6 bg-neutral-50 border-t border-b border-neutral-200/50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-neutral-900 mb-16">{t.education.title}</h2>
        
        <div className="relative border-l border-neutral-200 ml-3 pl-8 md:pl-16 space-y-12">
            {/* Timeline Item 1 */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group"
            >
                <span className="absolute -left-[41px] md:-left-[73px] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-neutral-900 shadow-sm z-10" />
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">{t.education.zju.school}</h3>
                <p className="text-neutral-500 mb-1 font-medium">{t.education.zju.degree}</p>
                <span className="text-sm text-neutral-400 block mb-4 font-mono">{t.education.zju.date}</span>
                <p className="text-neutral-600 leading-relaxed max-w-2xl">
                    {t.education.zju.desc}
                </p>
            </motion.div>
            
            {/* Timeline Item 2 */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
                <span className="absolute -left-[41px] md:-left-[73px] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-neutral-400 shadow-sm z-10" />
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">{t.education.nuist.school}</h3>
                <p className="text-neutral-500 mb-1 font-medium">{t.education.nuist.degree}</p>
                <span className="text-sm text-neutral-400 block mb-4 font-mono">{t.education.nuist.date}</span>
                <p className="text-neutral-600 leading-relaxed max-w-2xl">
                    {t.education.nuist.desc}
                </p>
            </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
