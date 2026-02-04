import * as React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a standard shadcn/utils file
import Counter from "../shared/Counter";

interface SocialProofProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars?: string[];
  avatarLimit?: number;
  highlightedMetric?: string;
  primaryText?: string;
  title?: string;
  number?: number;
  prefix?: string;
  suffix?: string;
  secondaryText?: string;
}

export function SocialProof({
  className,
  number=600000,
  title="membres",
  prefix,
  suffix,
  avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
  ],
  avatarLimit = 3,
  highlightedMetric = "+6k",
  primaryText = "+600,000 membres",
  secondaryText = "ont déjà rejoint X-Fund",
  ...props
}: SocialProofProps) {
  
  // Slice avatars to the limit to prevent overflow if too many are passed
  const displayAvatars = avatars.slice(0, avatarLimit);

  return (
    <div className={cn("flex items-center space-x-4", className)} {...props}>
      {/* Avatar Stack */}
      <div className="flex -space-x-3">
        {displayAvatars.map((src, index) => (
          <img
            key={index}
            className="w-10 h-10 rounded-full border-2 border-white object-cover"
            src={src}
            alt={`User ${index + 1}`}
          />
        ))}
        
        {/* Metric Bubble (e.g., +6k) */}
        <div className="w-10 h-10 rounded-full border-2 border-white bg-[#050505] text-[#D4AF37] flex items-center justify-center text-xs font-bold">
          {highlightedMetric}
        </div>
      </div>

      {/* Text Info */}
      <Counter
              number={number}
              prefix={prefix}
              suffix={suffix}
              title={title}
              subtitle={secondaryText}
              contentAlignment="left"
              inline={false}
              config={{ numberColor: "#111827", titleColor: "#111827" }}
            />
    </div>
  );
}