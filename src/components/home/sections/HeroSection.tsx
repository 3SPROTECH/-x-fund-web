import Section from "@/components/ui/Section";
import { InvestForm } from "@/components/forms/InvestForm";
import Counter from "@/components/shared/Counter";
import { Button } from "@/components/ui/button";

import blobsImage from "@/assets/blobs.png";
import handWithPhoneImage from "@/assets/hand-with-phone.png";

const Hero = () => {
  return (
    // FIX 1: Corrected typo 'md:py-' to 'md:py-24'
    <Section className="pt-12 md:py-24 bg-[#f5f9f5] overflow-hidden">
      
      {/* FIX 2: Reduced 'gap-10' to 'gap-6' for mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-0 items-center">
        
        {/* Left Column: Content */}
        {/* FIX 3: Removed 'pb-12' to remove extra bottom spacing */}
        <div className="space-y-5 lg:pr-4 xl:pr-10 w-full">
          <div className="space-y-4">
            <h1 className="text-4xl xs:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              L'investissement <br />
              immobilier <span className="text-primary font-medium font-handwriting">dès 10€</span>
            </h1>
            
            <p className="text-base xs:text-lg text-primary w-full leading-relaxed">
              Investissez dans des projets immobiliers dès 10 euros via des obligations et recevez des revenus tous les mois
            </p>
          </div>

          <div className="space-y-4 w-full">
            <div className="w-full max-w-none">
                <InvestForm />
            </div>
            <p className="text-xs text-gray-400">
              Investir comporte des risques de perte en capital et d'illiquidité
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-primary text-white rounded-md px-6 py-3 h-auto w-full xs:w-auto">
              Commencer maintenant
            </Button>
            <Button variant="outline" className="border-gray-300 rounded-md px-6 py-3 h-auto w-full xs:w-auto">
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

        {/* Right Column: Images */}
        {/* FIX 4: Reduced 'mt-12' to 'mt-8' to bring images closer to text on mobile */}
        <div className="relative flex justify-center lg:justify-end items-center lg:mt-0 lg:ml-0 xl:-ml-12 ">
           
           {/* Container with controlled overflow */}
           <div className="
             relative overflow-hidden
             
             /* Mobile: Constrained container */
             w-[75%]               
             max-w-70         
             
             /* Mobile Breakpoints */
             xxs:w-[80%]           
             xs:max-w-[340px]      
             sm:max-w-95      
             md:max-w-105     
             
             /* Laptop & Desktop */
             lg:w-full lg:max-w-100 lg:overflow-visible      
             lap:max-w-[440px]     
             xl:max-w-125    
             desk:max-w-[580px]    
             3xl:max-w-[650px]     
           ">
             {/* Blob background */}
             <img
               src={blobsImage}
               alt=""
               className="
                 absolute top-1/2 left-1/2 
                 -translate-x-1/2 -translate-y-1/2
                 pointer-events-none z-0
                 
                 /* Mobile: Blob matches container (no overflow) */
                 w-full
                 
                 /* Desktop: Blob can overflow for asymmetric effect */
                 lg:w-[140%]
                 lg:-translate-x-[55%]
               "
             />
             
             {/* Phone image */}
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