"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-neutral-900 text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col justify-between min-h-[40vh] relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-12">{t.footer.title}</h2>
            <div className="flex flex-col gap-6 text-lg md:text-xl text-neutral-400">
                <a href="mailto:wenyh200302@163.com" className="hover:text-white transition-colors flex items-center gap-4 w-fit group">
                    <div className="p-3 bg-neutral-800 rounded-full group-hover:bg-neutral-700 transition-colors">
                        <Mail className="w-5 h-5" /> 
                    </div>
                    wenyh200302@163.com
                </a>
                <a href="tel:18851700205" className="hover:text-white transition-colors flex items-center gap-4 w-fit group">
                     <div className="p-3 bg-neutral-800 rounded-full group-hover:bg-neutral-700 transition-colors">
                        <Phone className="w-5 h-5" /> 
                    </div>
                    18851700205
                </a>
                 <span className="flex items-center gap-4 w-fit group cursor-default">
                    <div className="p-3 bg-neutral-800 rounded-full group-hover:bg-neutral-700 transition-colors">
                        <MessageCircle className="w-5 h-5" /> 
                    </div>
                    WeChat: Aqr5_www
                </span>
            </div>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end md:items-center pt-24 border-t border-neutral-800 mt-24"
        >
            <p className="text-neutral-500 text-sm">{t.footer.copyright}</p>
            {/* Social icons removed as requested */}
        </motion.div>
      </div>
    </footer>
  )
}
