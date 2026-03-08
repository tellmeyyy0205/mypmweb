"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Tag, Layers } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { ProjectGallery } from "@/components/ProjectGallery";

interface Project {
  title: string;
  subtitle: string;
  prdLink?: string;
  role: string;
  date: string;
  desc: string;
  tags: string[];
  overview: string;
  highlights: string[];
  gallery: {
    src: string;
    caption: string;
    videoSrc?: string;
    title?: string;
    subtitle?: string;
    desc?: string;
    secondarySrc?: string;
  }[];
  techStack: string[];
}

export function Experience() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Cast the content to Project type to satisfy TypeScript
  const projects = [
    t.projects.smartgrade as unknown as Project,
    t.projects.foodlens as unknown as Project,
    t.projects.agent as unknown as Project,
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">{t.projects.title}</h2>
      </motion.div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row h-auto md:h-[320px]"
          >
            {/* Left: Info Area (5/12) */}
            <div className="w-full md:w-5/12 p-8 flex flex-col justify-between bg-white z-10 relative">
              <div>
                <div className="flex justify-between items-center mb-4">
                   <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-50 text-neutral-900 group-hover:bg-black group-hover:text-white transition-colors">
                      <Layers className="w-5 h-5" />
                   </span>
                   {project.prdLink && (
                     <a 
                       href={project.prdLink} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       onClick={(e) => e.stopPropagation()}
                       className="text-xs font-medium text-blue-600 hover:underline bg-blue-50 px-2 py-1 rounded-md border border-blue-100"
                     >
                       飞书PRD文档
                     </a>
                   )}
                   <span className="text-xs font-mono text-neutral-400 border border-neutral-100 px-2 py-1 rounded-full">{project.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">{project.title}</h3>
                <p className="text-sm font-bold text-neutral-500 mb-4">{project.subtitle}</p>
                <p className="text-sm text-neutral-600 line-clamp-3 mb-6 leading-relaxed">{project.desc}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag: string) => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-neutral-50 text-neutral-600 rounded-md border border-neutral-100 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-sm font-medium text-neutral-900 group/link">
                   {t.projects.viewDetails}
                   <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </div>
              </div>
            </div>

            {/* Right: Visual Area (7/12) */}
            <div className="w-full md:w-7/12 bg-neutral-50 relative overflow-hidden group-hover:bg-neutral-100 transition-colors">
               {project.gallery ? (
                  <div className="absolute inset-0 flex items-center overflow-hidden">
                    <ProjectCarousel images={project.gallery} />
                  </div>
               ) : (
                  <div className="absolute inset-4 md:inset-6 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center overflow-hidden">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-neutral-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Layers className="w-8 h-8 text-neutral-300" />
                        </div>
                        <p className="text-neutral-400 text-sm font-medium">Project Visual / Demo</p>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -z-10 opacity-60" />
                  </div>
               )}
            </div>
          </motion.div>
        ))}
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">{selectedProject.subtitle}</span>
                {selectedProject.prdLink && (
                  <>
                    <span className="text-neutral-300 hidden sm:inline">-</span>
                    <a 
                      href={selectedProject.prdLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-1"
                    >
                      飞书PRD文档链接
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </>
                )}
              </div>
              <h2 className="text-4xl font-bold text-neutral-900">{selectedProject.title}</h2>
              <div className="flex flex-wrap gap-4 text-sm text-neutral-500 pt-2">
                 <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedProject.date}</span>
                 <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> {selectedProject.role}</span>
              </div>
            </div>

            {selectedProject.gallery ? (
               <ProjectGallery images={selectedProject.gallery} />
            ) : (
               <div className="h-64 md:h-96 bg-neutral-100 rounded-2xl flex items-center justify-center text-neutral-400 relative overflow-hidden">
                  <span className="text-lg font-medium relative z-10">Detailed Project Visual / Demo Video</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200" />
               </div>
            )}

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">Overview</h3>
                  <p className="text-neutral-600 leading-relaxed text-lg">{selectedProject.overview}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">Key Highlights</h3>
                  <ul className="space-y-3">
                    {selectedProject.highlights.map((highlight: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-600">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tag: string) => (
                      <span key={tag} className="text-sm px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
