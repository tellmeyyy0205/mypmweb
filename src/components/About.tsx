"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const experiences = [
    {
      title: t.about.research.title,
      date: t.about.research.date,
      content: t.about.research.content,
      type: "hanging"
    },
    {
      title: t.about.awards.title,
      date: t.about.awards.date,
      content: t.about.awards.content, // Array
      type: "list"
    },
    {
      title: t.about.campus.title,
      date: t.about.campus.date,
      content: t.about.campus, // Object now: { role, desc } - date is top level but also in obj? content.ts has date at top level too. Wait, content.ts structure for campus is { title, date, role, desc }. I need to access it correctly.
      type: "structured"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-neutral-900 mb-12">{t.about.title}</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b border-neutral-200 pb-4">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className="text-xl font-medium text-neutral-800 group-hover:text-black transition-colors">
                  {exp.title}
                </span>
                <div className="flex items-center gap-4 text-neutral-500">
                  <span className="text-sm font-normal hidden sm:block">{exp.date}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 text-neutral-600 leading-relaxed">
                      {exp.type === "list" && Array.isArray(exp.content) ? (
                        <ul className="space-y-2">
                          {exp.content.map((item, i) => (
                            <li key={i} className="pl-4 -indent-4">{item}</li>
                          ))}
                        </ul>
                      ) : exp.type === "structured" && typeof exp.content === "object" && "role" in exp.content ? (
                        <div className="space-y-3">
                          <p><strong className="text-neutral-900">担任职位：</strong>{exp.content.role}</p>
                          <p><strong className="text-neutral-900">任职时间：</strong>{exp.content.date || exp.date}</p>
                          <div>
                             <strong className="text-neutral-900 block mb-1">主导活动与落地：</strong>
                             <p dangerouslySetInnerHTML={{ 
                               // Simple bold replacement for **text**
                               __html: (exp.content.desc as string).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                             }} />
                          </div>
                        </div>
                      ) : (
                        <p className={exp.type === "hanging" ? "pl-8 -indent-8" : ""}>
                           {/* Add label for Research if it's the hanging one */}
                           {exp.type === "hanging" && <span className="font-medium text-neutral-900">核心成果：</span>}
                           {exp.content as string}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
