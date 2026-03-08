import React from "react";
import { cn } from "@/lib/utils";

interface MacWindowProps {
  children: React.ReactNode;
  className?: string;
}

export function MacWindow({ children, className }: MacWindowProps) {
  return (
    <div className={cn("rounded-lg overflow-hidden border border-neutral-200 shadow-xl bg-white flex flex-col", className)}>
      <div className="h-6 bg-neutral-100 border-b border-neutral-200 flex items-center px-3 gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] border border-[#E0443E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] border border-[#D89E24]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840] border border-[#1AAB29]" />
      </div>
      <div className="relative bg-white flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
