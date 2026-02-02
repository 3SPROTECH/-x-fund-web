import Section from "@/components/ui/Section";
import { InvestForm } from "@/components/forms/InvestForm";
import Counter from "@/components/shared/Counter";
import { Button } from "@/components/ui/button";

import blobsImage from "@/assets/blobs.png";
import handWithPhoneImage from "@/assets/hand-with-phone.png";

const Hero = () => {
  return (
    <Section className="py-12 md:py-24 bg-[#F8FAF9] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center">
        
        {/* Left Column: Content */}
        <div className="space-y-5 lg:pr-10">
          <div className="space-y-4">
            {/* RESPONSIVE TEXT: Scales from 4xl -> 5xl -> 6xl to fit better */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              L'investissement <br />
              immobilier <span className="text-primary font-medium font-handwriting">dès 10€</span>
            </h1>
            <p className="text-base md:text-lg text-primary max-w-md leading-relaxed">
              Investissez dans des projets immobiliers dès 10 euros via des obligations et recevez des revenus tous les mois
            </p>
          </div>

          <div className="space-y-4">
            <InvestForm />
            <p className="text-xs text-gray-400">
              Investir comporte des risques de perte en capital et d'illiquidité
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-primary text-white rounded-md px-6 py-3 h-auto w-full sm:w-auto">
              Commencer maintenant
            </Button>
            <Button variant="outline" className="border-gray-300 rounded-md px-6 py-3 h-auto w-full sm:w-auto">
              Voir les projets
            </Button>
          </div>

          <div className="pt-3">
            <Counter
              number={600000}
              prefix="+"
              title="membres"
              subtitle="ont déjà rejoint X-Fund"
              contentAlignment="left"
              inline={true}
              config={{ numberColor: "#111827", titleColor: "#111827" }}
            />
          </div>
        </div>

        {/* Right Column */}
        {/* RESPONSIVE MARGINS: Less negative overlap on LG (-ml-8), more on XL (-ml-12) */}
        <div className="relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0 lg:-ml-8 xl:-ml-12">
           {/* RESPONSIVE SIZING:
               - max-w-[280px]: Small mobile
               - sm:max-w-sm: Large mobile
               - lg:max-w-sm: Small laptop (Shrunk to fit 2-cols)
               - xl:max-w-lg: Large Desktop (Full size)
           */}
           <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-sm xl:max-w-lg transition-all duration-300">
             <img
               src={blobsImage}
               alt=""
               className="absolute top-1/2 left-1/2 w-[140%] -translate-x-[55%] -translate-y-1/2 max-w-none z-0 pointer-events-none"
             />
             
             <img
               src={handWithPhoneImage}
               alt="Application mobile X-Fund"
               className="relative z-10 w-full h-auto drop-shadow-2xl"
             />
           </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;