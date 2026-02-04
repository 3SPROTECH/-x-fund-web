import * as React from "react";
import { cn } from "@/lib/utils";

interface CollectionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export function Badge({ 
  className, 
  text = "Nouvelle Collection Parisienne", 
  ...props 
}: CollectionBadgeProps) {
  return (
    <div 
      className={cn(
        // Layout & Shape
        "inline-flex items-center gap-2 px-3 py-1 rounded-full",
        // Colors: bg-gold-50, border-gold/20
        "bg-[#FBF8EF] border border-[#D4AF37]/20",
        className
      )} 
      {...props}
    >
      {/* The Gold Dot */}
      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
      
      {/* The Text Label */}
      <span className="text-xs font-semibold text-[#AA8C2C] tracking-wide uppercase">
        {text}
      </span>
    </div>
  );
}