import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GoldenButton } from '@/components/ui/GoldenButton';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Qu'est-ce que le crowdfunding immobilier en obligations ?",
    answer: "Le crowdfunding immobilier par obligations permet à des particuliers de prêter de l'argent à un promoteur ou un investisseur pour financer un projet spécifique, en échange d'un taux d'intérêt fixe et du remboursement du capital à l'échéance."
  },
  {
    question: "Qu'est-ce qu'une Brick ?",
    answer: "Une \"Brick\" est l'unité de base de votre investissement sur notre plateforme. Elle représente une fraction de l'obligation globale associée à un projet immobilier spécifique."
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

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-[#050505] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Effets de lueur en arrière-plan */}
      <div className="absolute top-1/4 -right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* --- PARTIE GAUCHE : TEXTE --- */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
          <SectionHeading 
            subtitle="FAQ" 
            goldifyString="fréquentes" 
            title="Vos questions les plus fréquentes"
          />
          <p className="text-gray-400 text-lg mt-6 mb-10 max-w-md leading-relaxed">
            Nous nous basons sur vos nombreux retours pour répondre à vos questions.
          </p>
          
          <GoldenButton className="px-10">
            En savoir plus sur X-Fund
          </GoldenButton>
        </div>

        {/* --- PARTIE DROITE : ACCORDÉON --- */}
        <div className="lg:col-span-7 space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div 
                key={index}
                className={`border-b border-primary/15 transition-all duration-300 ${isOpen ? 'bg-white/5' : 'hover:bg-white/[0.02]'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <h3 className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-white group-hover:text-primary/80'}`}>
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-45 text-primary' : 'text-gray-500'}`}>
                    <Plus className="w-6 h-6" />
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-400 leading-relaxed pr-10">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;