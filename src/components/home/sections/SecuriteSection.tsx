import React from 'react';
import { Check } from "lucide-react";
import { SectionHeading } from '@/components/shared/SectionHeading';
import Section from '@/components/ui/Section';

const SecuriteSection: React.FC = () => {
  const pointscles = [
    {
      titre: "Édification de votre héritage",
      description: "Transformez vos revenus en patrimoine tangible et durable."
    },
    {
      titre: "Accélération de vos projets de vie",
      description: "Une performance optimisée pour atteindre vos ambitions plus rapidement."
    },
    {
      titre: "Sérénité pour votre retraite",
      description: "Des revenus réguliers pour anticiper demain en toute tranquillité."
    }
  ];

  return (
    <Section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* --- BLOC VISUEL (IMAGES SUPERPOSÉES) --- */}
        <div className="relative flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Cercle flou décoratif */}
          <div className="absolute w-[120%] h-[120%] bg-[#faf8f2] rounded-full opacity-60 blur-3xl -left-10 sm:-left-16"></div>
          
          {/* Image de fond (inclinée à gauche) */}
          <div className="absolute w-[85%] h-[80%] rounded-2xl bg-gray-100 transform -rotate-6 translate-x-[-5px] shadow-lg overflow-hidden border-4 border-white sm:w-[80%] sm:h-[75%]"></div>

          {/* Image principale (inclinée à droite) */}
          <div className="relative z-10 w-[90%] h-[85%] rounded-2xl transform rotate-3 shadow-2xl overflow-hidden border-4 border-white sm:w-[85%] sm:h-[80%]">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
              alt="Propriété de luxe" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge Statistique 98% */}
          <div className="absolute bottom-2 sm:bottom-4 left-1 sm:-left-4 z-20 bg-white p-3 sm:p-5 rounded-2xl shadow-xl flex flex-col items-start border border-gray-50">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">98%</span>
            <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] text-gray-400 font-extrabold leading-tight mt-1">
              Satisfaction <br /> Client
            </span>
          </div>
        </div>

        {/* --- BLOC TEXTE ET ARGUMENTS --- */}
        <div className="flex flex-col space-y-8 sm:space-y-10">
          <div className="space-y-4">
            <SectionHeading 
              subtitle="Les obligations immobilières" 
              goldifyString="un avenir sécurisé." 
              title="Bien plus qu'un placement, un avenir sécurisé."
            />

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg pt-2 sm:pt-4">
              L'obligation immobilière X-Fund ne se contente pas de générer des intérêts. 
              Elle transforme votre épargne en un outil de protection pour ce que vous avez de plus cher.
            </p>
          </div>

          {/* Liste des bénéfices */}
          <div className="space-y-4">
            {pointscles.map((item, idx) => (
              <div 
                key={idx} 
                className="group flex items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-[1.5rem] bg-[#fdfdfd] border border-gray-50 hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 cursor-default"
              >
                {/* Conteneur de l'icône Check */}
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary stroke-[3px]" />
                </div>
                
                <div>
                  <h4 className="font-bold text-[#1a1a1a] text-sm sm:text-lg">{item.titre}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default SecuriteSection;