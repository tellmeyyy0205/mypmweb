"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const skillsData = {
  "Product Design": ["PRD Writing", "Figma", "Axure", "Xmind", "Python", "SQL", "Excel Data Analysis"],
  "AI Engineering": ["Cursor", "Claude", "Gemini", "CNN", "RNN", "Transformer", "RAG", "Prompt Engineering", "Agent Workflow"],
  "Languages": ["English (CET-6)", "普通话 (二级甲等)"]
};

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-neutral-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-neutral-900 mb-12">{t.skills.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, items], idx) => (
                <motion.div 
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                    <h3 className="text-lg font-bold text-neutral-900 mb-6 flex items-center gap-2">
                        {t.skills.categories[category as keyof typeof t.skills.categories]}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {items.map(skill => (
                            <span 
                                key={skill} 
                                className="px-3 py-1.5 bg-white border border-neutral-200 text-neutral-600 rounded-full text-xs font-medium hover:border-neutral-400 hover:text-neutral-900 hover:shadow-sm transition-all cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  )
}
