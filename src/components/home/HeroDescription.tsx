import * as React from "react";
import { cn } from "@/lib/utils";

interface HeroDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

export function HeroDescription({ className, children, ...props }: HeroDescriptionProps) {
  return (
    <p
      className={cn(
        // Typography & Layout
        "text-md leading-relaxed max-w-lg",
        // Color (Onyx Muted from your config)
        "text-main", 
        // Decoration (Gold Left Border)
        "border-l-2 border-primary pl-6",
        className
      )}
      {...props}
    >
      {/* Default content if none is provided */}
      {children || (
        <>
          Investissez dans des projets immobiliers de prestige via des obligations. 
          Alliez la sécurité de la pierre à la performance financière, avec des revenus versés chaque mois.
        </>
      )}
    </p>
  );
}