import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  /**
   * The specific part of the title string that should have the golden gradient effect.
   * e.g. If title is "Invest in Future" and goldifyString is "Future".
   */
  goldifyString?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  title,
  subtitle,
  goldifyString,
  className,
  titleClassName,
  subtitleClassName,
  ...props
}: SectionHeadingProps) {
  
  const renderTitle = () => {
    if (!goldifyString) return title;

    const parts = title.split(new RegExp(`(${goldifyString})`, "gi"));

    return parts.map((part, index) => {
      if (part.toLowerCase() === goldifyString.toLowerCase()) {
        return (
          <span
            key={index}
            className="bg-[linear-gradient(135deg,#AA8C2C_0%,#D4AF37_50%,#AA8C2C_100%)] bg-clip-text text-transparent bg-[length:200%_auto]"
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className={cn("flex flex-col mb-6 md:mb-10", className)} {...props}>
      {/* Subtitle */}
      {subtitle && (
        <h3
          className={cn(
            // RESPONSIVE TEXT: sm on mobile -> base on tablet+
            "text-sm md:text-base font-medium text-primary mb-2 md:mb-3",
            subtitleClassName
          )}
        >
          {subtitle}
        </h3>
      )}

      {/* Title */}
      <h2
        className={cn(
          // RESPONSIVE TEXT:
          // text-3xl (Mobile) -> text-4xl (Tablet) -> text-5xl (Desktop) -> text-6xl (Large Screens)
          "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#050505] leading-[1.1] tracking-tight whitespace-pre-line",
          titleClassName
        )}
      >
        {renderTitle()}
      </h2>
    </div>
  );
}