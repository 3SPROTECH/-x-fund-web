import React, { useEffect, useState } from 'react';
import { useMotionValue, useTransform, animate } from 'framer-motion';

interface CounterProps {
  number: number;
  prefix?: string;
  suffix?: string;
  title: string;
  subtitle?: string;
  description?: string;
  /** Alignment of the icon relative to the text content */
  contentAlignment?: 'top' | 'bottom' | 'right' | 'left';
  /** If true, forces everything (icon, number, title, subtitle, desc) into one single line */
  inline?: boolean; 
  icon?: React.ReactNode;
  config?: {
    numberColor?: string;
    titleColor?: string;
  };
  className?: string; // Added className prop for flexibility
}

const Counter: React.FC<CounterProps> = ({
  number,
  prefix,
  suffix,
  title,
  subtitle,
  description,
  contentAlignment = 'left',
  inline = false,
  icon,
  config,
  className = "", // Default to empty string
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, number, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [number, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  // If inline is true, we force specific classes to override the standard alignment
  const containerClasses = inline 
    ? "flex flex-row items-center gap-3 justify-center sm:justify-start" 
    : (() => {
        const map = {
          top: "flex flex-col items-center text-center",
          bottom: "flex flex-col-reverse items-center text-center",
          right: "flex flex-row-reverse items-center gap-4",
          left: "flex flex-row items-center gap-4",
        };
        return map[contentAlignment];
      })();

  return (
    <div className={`${containerClasses} ${className}`}>
      {icon && <div className="shrink-0">{icon}</div>}

      <div className={`flex ${inline ? 'flex-row flex-wrap items-baseline gap-2 justify-center sm:justify-start' : 'flex-col'}`}>
        
        {/* Main Number + Title Block */}
        <div className="flex items-baseline font-bold" style={{ color: config?.numberColor }}>
          {prefix}
          <span>{displayValue.toLocaleString()}</span>
          {suffix}
          <span className={`font-bold ${inline ? 'ml-2 text-base' : 'ml-2 text-lg'}`} style={{ color: config?.titleColor }}>
            {title}
          </span>
        </div>

        {/* Subtitle + Description Block */}
        {(subtitle || description) && (
          <div className={`flex ${inline ? 'flex-row items-baseline gap-2' : 'flex-col'}`}>
            {subtitle && (
              <p className={`${inline ? 'text-base' : 'text-sm'} opacity-80`}>
                {subtitle}
              </p>
            )}
            {description && (
              <p className={`${inline ? 'text-sm text-muted' : 'text-xs mt-1 text-muted'}`}>
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Counter;