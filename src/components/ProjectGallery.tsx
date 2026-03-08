"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MacWindow } from "@/components/ui/MacWindow";

interface ProjectGalleryProps {
  images: { 
    src: string; 
    caption: string;
    videoSrc?: string;
    title?: string;
    subtitle?: string;
    desc?: string;
    secondarySrc?: string; // For the bottom image in "Vertical Stack" layout
  }[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  const currentItem = images[currentIndex];
  const isSplitLayout = !!currentItem.title;
  const isVerticalStackLayout = !!currentItem.secondarySrc;

  return (
    <div className="space-y-6 select-none">
      {isVerticalStackLayout ? (
        // Vertical Stack Layout for Agent (Image -> Text -> Image)
        <div className="relative group space-y-8">
           {/* Navigation Buttons (Absolute Positioned for Vertical Layout) */}
           <button 
             onClick={(e) => { e.stopPropagation(); prevImage(); }}
             className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-xl border border-neutral-100 text-neutral-400 hover:text-black hover:scale-110 transition-all z-50 opacity-0 group-hover:opacity-100 hidden md:block"
             aria-label="Previous"
           >
             <ChevronLeft className="w-6 h-6" />
           </button>
           
           <button 
             onClick={(e) => { e.stopPropagation(); nextImage(); }}
             className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-xl border border-neutral-100 text-neutral-400 hover:text-black hover:scale-110 transition-all z-50 opacity-0 group-hover:opacity-100 hidden md:block"
             aria-label="Next"
           >
             <ChevronRight className="w-6 h-6" />
           </button>

           {/* Mobile Nav */}
           <button 
             onClick={(e) => { e.stopPropagation(); prevImage(); }}
             className="fixed left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur shadow-lg border border-neutral-200 text-neutral-600 hover:text-black md:hidden z-50"
             aria-label="Previous"
           >
             <ChevronLeft className="w-5 h-5" />
           </button>
           
           <button 
             onClick={(e) => { e.stopPropagation(); nextImage(); }}
             className="fixed right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur shadow-lg border border-neutral-200 text-neutral-600 hover:text-black md:hidden z-50"
             aria-label="Next"
           >
             <ChevronRight className="w-5 h-5" />
           </button>

           {/* Top Image */}
           <MacWindow className="w-full aspect-[16/9] bg-neutral-100 shadow-xl">
             <div className="relative w-full h-full bg-neutral-50">
               <Image
                 src={currentItem.src}
                 alt={currentItem.caption}
                 fill
                 className="object-contain"
                 sizes="(max-width: 768px) 100vw, 1200px"
                 priority
               />
             </div>
           </MacWindow>

           {/* Middle Text */}
           <div className="max-w-3xl mx-auto text-center space-y-4 px-4">
             <h3 className="text-2xl font-bold text-neutral-900">{currentItem.caption}</h3>
             {currentItem.desc && (
               <p className="text-neutral-600 leading-relaxed text-lg">
                 {currentItem.desc}
               </p>
             )}
           </div>

           {/* Bottom Image */}
           {currentItem.secondarySrc && (
             <MacWindow className="w-full aspect-[16/9] bg-neutral-100 shadow-xl">
               <div className="relative w-full h-full bg-neutral-50">
                 <Image
                   src={currentItem.secondarySrc}
                   alt={`${currentItem.caption} - Secondary`}
                   fill
                   className="object-contain"
                   sizes="(max-width: 768px) 100vw, 1200px"
                 />
               </div>
             </MacWindow>
           )}

           {/* Pagination Dots */}
           <div className="flex justify-center gap-2 pt-4">
             {images.map((_, idx) => (
               <button
                 key={idx}
                 onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                 className={`h-2 rounded-full transition-all duration-300 ${
                   idx === currentIndex 
                     ? "bg-neutral-800 w-8" 
                     : "bg-neutral-300 w-2 hover:bg-neutral-400"
                 }`}
                 aria-label={`Go to page ${idx + 1}`}
               />
             ))}
           </div>
        </div>
      ) : isSplitLayout ? (
        // Split Layout for FoodLens
        <div className="flex flex-col gap-6">
           <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left: Video/Image Area (Narrower, Taller, No Mac Window) */}
            <div className="w-full md:w-4/12 relative group flex items-center justify-center">
              <div className="relative w-full aspect-[9/19] bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-neutral-900/5">
                 {currentItem.videoSrc ? (
                    <video
                      key={currentItem.videoSrc}
                      src={currentItem.videoSrc}
                      poster={currentItem.src}
                      controls
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={currentItem.src}
                      alt={currentItem.caption}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority
                    />
                  )}
                {/* Mobile Navigation Buttons */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur shadow-lg border border-neutral-200 text-neutral-600 hover:text-black md:hidden z-20"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur shadow-lg border border-neutral-200 text-neutral-600 hover:text-black md:hidden z-20"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
               
               {/* Desktop Navigation Buttons */}
               <button 
                 onClick={(e) => { e.stopPropagation(); prevImage(); }}
                 className="absolute -left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-xl border border-neutral-100 text-neutral-400 hover:text-black hover:scale-110 transition-all z-10 opacity-0 group-hover:opacity-100 hidden md:block"
                 aria-label="Previous"
               >
                 <ChevronLeft className="w-6 h-6" />
               </button>
               
               <button 
                 onClick={(e) => { e.stopPropagation(); nextImage(); }}
                 className="absolute -right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-xl border border-neutral-100 text-neutral-400 hover:text-black hover:scale-110 transition-all z-10 opacity-0 group-hover:opacity-100 hidden md:block"
                 aria-label="Next"
               >
                 <ChevronRight className="w-6 h-6" />
               </button>
             </div>

            {/* Right: Text Description Area (Wider) */}
            <div className="w-full md:w-8/12 flex flex-col justify-center space-y-8 py-8 min-h-[400px]">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2 leading-tight">
                  {currentItem.title}
                </h3>
                <p className="text-lg font-medium text-blue-600 mb-6">
                  {currentItem.subtitle}
                </p>
                <div className="prose prose-neutral">
                  <p className="text-neutral-600 leading-relaxed whitespace-pre-line">
                    {currentItem.desc?.split(/(\*\*.*?\*\*)/g).map((part, i) => 
                      part.startsWith('**') && part.endsWith('**') ? 
                      <strong key={i} className="text-neutral-900">{part.slice(2, -2)}</strong> : 
                      part
                    )}
                  </p>
                </div>
              </div>
              
              {/* Pagination Dots */}
              <div className="flex gap-2 pt-4">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex 
                        ? "bg-neutral-800 w-8" 
                        : "bg-neutral-200 w-2 hover:bg-neutral-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom Title (As requested) */}
          <div className="text-center pt-4 border-t border-neutral-100">
             <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest">
                {currentItem.caption || "Project Gallery"}
             </p>
          </div>
        </div>
      ) : (
        // Default Layout (SmartGrade)
        <>
          <div className="relative group">
            <MacWindow className="w-full aspect-[16/10] bg-neutral-100 shadow-2xl">
              <div className="relative w-full h-full bg-neutral-50 flex items-center justify-center">
                {currentItem.videoSrc ? (
                  <video
                    key={currentItem.videoSrc}
                    src={currentItem.videoSrc}
                    poster={currentItem.src}
                    controls
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={currentItem.src}
                    alt={currentItem.caption}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                  />
                )}
              </div>
            </MacWindow>
            
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 backdrop-blur shadow-lg border border-neutral-200 text-neutral-600 hover:text-black hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 backdrop-blur shadow-lg border border-neutral-200 text-neutral-600 hover:text-black hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto text-center">
            <div>
               <h3 className="text-xl font-bold text-neutral-900 mb-4">{currentItem.caption}</h3>
               {currentItem.desc && (
                  <p className="text-neutral-600 leading-relaxed whitespace-pre-line text-left">
                     {currentItem.desc}
                  </p>
               )}
            </div>
            
            <div className="flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? "bg-neutral-800 w-6" 
                      : "bg-neutral-300 w-2 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
