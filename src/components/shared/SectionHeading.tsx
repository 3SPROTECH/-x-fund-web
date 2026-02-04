import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
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
  
  // Logic to parse the title and apply the gold gradient to the specific substring
  const renderTitle = () => {
    if (!goldifyString) return title;

    // Split title by the goldifyString (case insensitive), capturing the delimiter
    const parts = title.split(new RegExp(`(${goldifyString})`, "gi"));

    return parts.map((part, index) => {
      // Check if the current part matches the target string (case insensitive)
      if (part.toLowerCase() === goldifyString.toLowerCase()) {
        return (
          <span
            key={index}
            className="bg-[linear-gradient(135deg,#AA8C2C_0%,#D4AF37_50%,#AA8C2C_100%)] bg-clip-text text-transparent bg-size-[200%_auto]"
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className={cn("flex flex-col mb-10", className)} {...props}>
      {/* Subtitle */}
      <h3
        className={cn(
          "text-md font-medium text-primary",
          subtitleClassName
        )}
      >
        {subtitle}
      </h3>

      {/* Title */}
      <h2
        className={cn(
          "text-5xl lg:text-6xl font-black text-[#050505] leading-tight whitespace-pre-line",
          titleClassName
        )}
      >
        {renderTitle()}
      </h2>
    </div>
  );
}