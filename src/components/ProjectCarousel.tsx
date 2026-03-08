"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";
import { MacWindow } from "@/components/ui/MacWindow";

interface ProjectCarouselProps {
  images: { 
    src: string; 
    caption: string;
    videoSrc?: string;
  }[];
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [images]);

  // Create a duplicated list for infinite scroll effect
  const duplicatedImages = [...images, ...images];

  return (
    <div 
      className="w-full h-full flex items-center justify-center overflow-hidden bg-neutral-50 relative group"
      ref={carousel}
    >
      <motion.div
        className="flex gap-6 px-6"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        style={{ x }}
        whileHover={{ animationPlayState: "paused" }} // This doesn't work directly with framer motion animate prop usually
        onHoverStart={() => {
           // We can't easily pause a framer motion orchestration like this without using useAnimation or raw CSS
           // Let's use a CSS approach for the marquee which is more robust for pause-on-hover
        }}
      >
         {/* We will switch to a CSS animation approach for better pause-on-hover support */}
      </motion.div>
      
      {/* CSS Animation Implementation */}
      <div className="flex gap-8 animate-infinite-scroll hover:[animation-play-state:paused] w-max">
        {duplicatedImages.map((img, index) => (
          <div key={index} className="w-[400px] flex-shrink-0">
            <MacWindow className="h-full">
              <div className="relative aspect-[16/10] w-full bg-white">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </MacWindow>
          </div>
        ))}
      </div>
      
      {/* Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-neutral-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-neutral-50 to-transparent z-10" />
    </div>
  );
}
