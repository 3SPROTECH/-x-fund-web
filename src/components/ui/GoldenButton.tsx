import * as React from "react";
import { cn } from "@/lib/utils";

export interface GoldenButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ElementType;
}

const GoldenButton = React.forwardRef<HTMLButtonElement, GoldenButtonProps>(
  ({ className, variant = "primary", icon: Icon, children, ...props }, ref) => {
    
    // 1. Base styles shared across all variants
    const baseStyles = "relative overflow-hidden group cursor-pointer inline-flex items-center justify-center rounded-sm px-8 py-4 text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none";

    // 2. Variant-specific styles
    const variants = {
      primary: cn(
        "text-white shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)]",
        "bg-[linear-gradient(135deg,#D4AF37_0%,#AA8C2C_100%)]",
        "hover:-translate-y-[2px] hover:shadow-[0_10px_25px_-5px_rgba(212,175,55,0.4)]",
        "ease-[cubic-bezier(0.4,0,0.2,1)]" 
      ),
      secondary: cn(
        // Changed 'border' to 'border-2' here
        "border-2 border-[#D4AF37] bg-transparent text-primary", 
        "hover:bg-[#D4AF37]/10 hover:border-[#AA8C2C] hover:text-[#AA8C2C]"
      ),
      ghost: cn(
        "bg-transparent text-primary shadow-none p-0 h-auto",
        "hover:text-[#D4AF37] underline-offset-4 hover:underline"
      ),
    };

    // 3. Determine Sheen Color based on variant
    const sheenColor = variant === "primary" 
      ? "via-white/40" 
      : "via-[#D4AF37]/20";

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {/* Universal Sheen Effect */}
        <span 
          className={cn(
            "absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent to-transparent transition-[left] duration-500 group-hover:left-full",
            sheenColor
          )} 
        />

        {/* Content Wrapper */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {Icon && <Icon className="w-5 h-5" />}
        </span>
      </button>
    );
  }
);

GoldenButton.displayName = "GoldenButton";

export { GoldenButton };