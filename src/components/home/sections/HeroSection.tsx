import Section from "@/components/ui/Section";
import { InvestForm } from "@/components/forms/InvestForm";
import Counter from "@/components/shared/Counter";
import { Button } from "@/components/ui/button";

import blobsImage from "@/assets/blobs.png";
import handWithPhoneImage from "@/assets/hand-with-phone.png";
import sparkImage from "@/assets/spark.png";

const Hero = () => {
  return (
    <Section className="pt-8 pb-8 md:pb-0 bg-[#f5f9f5] overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-0 items-center">
        
        {/* Left Column: Content */}
        {/* FIX: Added 'flex flex-col items-center text-center sm:items-start sm:text-left' 
            to center everything on mobile but align left when the image appears (sm+) */}
        <div className="space-y-5 lg:pr-4 xl:pr-10 w-full flex flex-col items-center text-center sm:items-start sm:text-left">
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
            {/* FIX: Added 'flex justify-center sm:justify-start' to center the form on mobile */}
            <div className="w-full max-w-none flex justify-center sm:justify-start">
                <InvestForm />
            </div>
            <p className="text-xs text-gray-400">
              Investir comporte des risques de perte en capital et d'illiquidité
            </p>
          </div>

          {/* FIX: Added 'justify-center sm:justify-start' to center buttons on mobile */}
          <div className="flex flex-wrap gap-4 pt-4 justify-center sm:justify-start">
            <Button className="bg-primary text-white rounded-full px-6 py-3 h-auto w-full xs:w-auto ">
              Commencer maintenant
            </Button>
            <Button variant="outline" className="border-gray-300 rounded-full px-6 py-3 h-auto w-full xs:w-auto">
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
        {/* Kept 'hidden sm:flex' so it disappears on mobile */}
        <div className="relative hidden sm:flex justify-center lg:justify-end items-center lg:mt-0 lg:ml-0 lg:pr-12 lap:pr-20 xl:pr-0 xl:-ml-12 ">
           
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
             
             /* Laptop & Desktop Sizing */
             lg:w-full lg:max-w-105 lg:overflow-visible      
             lap:max-w-[500px]     
             xl:max-w-150   
             desk:max-w-[650px]    
             3xl:max-w-[700px]     
           ">
             {/* Blob background */}
             <img
               src={blobsImage}
               alt=""
               className="
                 absolute top-1/2 left-1/2 
                 -translate-x-1/2 -translate-y-1/2
                 pointer-events-none z-0
                 w-full
                 lg:w-[140%]
                 lg:-translate-x-[55%]
               "
             />

             {/* Sparks */}
             <img
               src={sparkImage}
               alt=""
               className="absolute top-[28%] left-[20%] w-3 xs:w-5 h-auto z-10 pointer-events-none opacity-90"
             />
             <img
               src={sparkImage}
               alt=""
               className="absolute top-[42%] right-[15%] w-2 xs:w-4 h-auto z-10 pointer-events-none opacity-80"
             />
             <img
               src={sparkImage}
               alt=""
               className="absolute bottom-[25%] right-[22%] w-3 xs:w-4 h-auto z-10 pointer-events-none opacity-90"
             />
             
             {/* Phone image */}
             <img
               src={handWithPhoneImage}
               alt="Application mobile X-Fund"
               className="relative z-20 w-full h-auto drop-shadow-2xl"
             />
           </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;