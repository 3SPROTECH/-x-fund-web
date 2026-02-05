import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { GoldenButton } from '@/components/ui/GoldenButton';
import { SectionHeading } from '@/components/shared/SectionHeading';
import Section from '@/components/ui/Section';

interface FAQItem {
  question: string;
  answer: string;
}
 
const faqData: FAQItem[] = [
  {
    question: "Qu'est-ce que le crowdfunding immobilier en obligations ?",
    answer: "Le crowdfunding immobilier par obligations permet à des particuliers de prêter de l'argent à un promoteur ou un investisseur pour financer un projet spécifique, en échange d'un taux d'intérêt fixe et du remboursement du capital à l'échéance."
  },
  {
    question: "Qu'est-ce qu'une X-fund ?",
    answer: "Une \"X-fund\" est l'unité de base de votre investissement sur notre plateforme. Elle représente une fraction de l'obligation globale associée à un projet immobilier spécifique."
  },
  {
    question: "Qu'est-ce qu'une obligation ?",
    answer: "Une obligation est un titre de créance émis par une entreprise. En y souscrivant, vous devenez créancier de l'émetteur et recevez des intérêts (le coupon) jusqu'au remboursement total."
  },
  {
    question: "Comment fonctionne X-Fund ?",
    answer: "X-Fund sélectionne rigoureusement des projets immobiliers, structure le financement sous forme d'obligations accessibles dès 10€, et assure le suivi des paiements jusqu'à la sortie du projet."
  },
  {
    question: "X-Fund est-elle une société agréée ?",
    answer: "Oui, nous opérons en conformité avec la réglementation européenne. Nous sommes enregistrés en tant que Conseiller en Investissements Participatifs (CIP) ou Prestataire de Services de Financement Participatif (PSFP)."
  },
  {
    question: "Comment investir ?",
    answer: "Créez votre compte, validez votre identité, créditez votre portefeuille et choisissez les projets immobiliers qui vous intéressent parmi notre sélection active."
  },
  {
    question: "Quelle est la fiscalité ?",
    answer: "En France, les gains issus des obligations sont généralement soumis au Prélèvement Forfaitaire Unique (PFU) de 30%, également appelé \"Flat Tax\", sauf option pour l'imposition au barème."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Section className="h-auto bg-[#050505] py-10 sm:py-16 md:py-20 relative overflow-hidden">
      
      {/* --- EFFETS DE FOND --- */}
      <div className="absolute right-[-10%] top-[20%] w-[60%] h-[80%] bg-radial-gradient from-primary/10 to-transparent opacity-50 pointer-events-none blur-[80px]" />
      <div className="absolute left-[-10%] bottom-[10%] w-[40%] h-[50%] bg-radial-gradient from-white/5 to-transparent opacity-10 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start relative z-10">
        
        {/* --- PARTIE GAUCHE : HEADER --- */}
        <div className="lg:col-span-5 lg:sticky lg:top-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <SectionHeading
            subtitle="FAQ"
            goldifyString="fréquentes"
            title="Vos questions les plus fréquentes"
            titleClassName='text-white'
          />
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 mt-4 max-w-md leading-relaxed">
            Nous nous basons sur vos nombreux retours pour répondre à vos questions.
          </p>
          
          <GoldenButton className="w-full sm:w-auto py-3 px-6 uppercase text-xs sm:text-sm tracking-wide">
            En savoir plus sur X-Fund
          </GoldenButton>
        </div>

        {/* --- PARTIE DROITE : ACCORDÉON --- */}
        <div className="lg:col-span-7 space-y-1 mt-8 lg:mt-0">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`border-b border-primary/10 transition-all duration-300 cursor-pointer hover:bg-white/[0.02] py-4 sm:py-5 ${
                activeIndex === index ? 'bg-white/[0.01]' : ''
              }`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className={`text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 ${
                  activeIndex === index ? 'text-primary' : 'text-white hover:text-primary/80'
                }`}>
                  {item.question}
                </h3>
                <div className={`transition-transform duration-300 flex-shrink-0 ${
                  activeIndex === index ? 'rotate-45 text-primary' : 'text-white/50'
                }`}>
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>

              {/* Contenu de la réponse */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed pb-2">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default FAQSection;