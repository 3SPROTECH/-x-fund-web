import Section from "@/components/ui/Section";
import { InvestForm } from "@/components/forms/InvestForm";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { FloatingCards } from "../FloatingCards";
import { SocialProof } from "../SocialProof";
import { HeroDescription } from "../HeroDescription";
import { Badge } from "../Badge";

const Hero = () => {
  return (
    <Section className="pt-8 pb-8 overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-0 items-center">
        
        {/* Left Column: Content */}
        {/* UPDATED: Removed 'items-center text-center' and 'lg:...' overrides. 
            Now uses 'items-start text-left' permanently. */}
        <div className="space-y-5 lg:pr-4 xl:pr-10 w-full flex flex-col items-start text-left">
          <div className="">
            <Badge text="Opportunité Exclusive" className="mb-2"/>
            <SectionHeading
              title={`L'investissement immobilier \n dès 10€`} 
              goldifyString="dès 10€"       
            />
            <HeroDescription>
              Investissez dans des projets immobiliers de prestige via des obligations. Alliez la sécurité de la pierre à la performance financière, avec des revenus versés chaque mois.
            </HeroDescription>
          </div>

          <div className="space-y-4 w-full">
            {/* UPDATED: Removed 'justify-center'. Now always 'justify-start'. */}
            <div className="w-full max-w-none flex justify-start">
                <InvestForm />
            </div>
            <p className="text-xs text-gray-400">
              Investir comporte des risques de perte en capital et d'illiquidité
            </p>
          </div>

          <div className="pt-3">
            <SocialProof />
          </div>
        </div>

        {/* Right Column: Images */}
        <div className="relative hidden sm:flex justify-center lg:justify-end items-center lg:mt-0 lg:ml-0 lg:pr-12 lap:pr-20 xl:pr-0 xl:-ml-12 ">
            <FloatingCards 
            mainTitle="Villa Miami"
            mainSubtitle="Miami Beach • Waterfront"
            statValue="14.2%"
            progress={90}
        />
        </div>
      </div>
    </Section>
  );
};

export default Hero;