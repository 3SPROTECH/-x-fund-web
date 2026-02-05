import React from 'react';
import ProjectShowcaseList from '@/components/home/ProjectShowcaseList';
import { projectsData } from '@/data/home/projects';
import { GoldenButton } from '@/components/ui/GoldenButton';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';

const CommunitySection: React.FC = () => {


  return (
    <Section>
        <div className="relative z-10 w-full py-24 flex flex-col lg:flex-row items-stretch gap-12 lg:gap-18">
        
        {/* LEFT COLUMN: Ambassador Profile */}
        <div className="w-full lg:w-5/12 relative group">
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
            {/* Image */}
            <img 
                src="https://bookingagentinfo.com/wp-content/uploads/2023/05/frenchmontana-1.jpg" 
                alt="French Montana" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/20 to-transparent"></div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-8 text-white z-20">
                <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gold text-onyx text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Ambassadeur et Investisseur
                </span>
                </div>
                
                <h2 className="text-4xl font-bold uppercase tracking-tight mb-2">
                French<br />Montana
                </h2>
                <p className="text-gray-300 text-sm italic border-l-2 border-gold pl-4 mb-6 leading-relaxed">
                "L'argent ne dort jamais. De Casablanca à New York, en passant par Paris, nous bâtissons l'avenir sans frontières. Avec X-Fund, l'immobilier d'exception devient accessible à tous ceux qui osent rêver grand."
                </p>
            </div>
            </div>

            {/* Decorative Circle Behind */}
            <div className="absolute -top-12 -left-12 w-64 h-64 border border-gold/20 rounded-full z-[-1] animate-pulse-slow"></div>
        </div>

        {/* RIGHT COLUMN: The Track Record */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
            
            <div className="mb-10">
                <SectionHeading 
                    title='Le monde investit ici'
                    subtitle='Un Succès Continu'
                    goldifyString='investit ici'
                />
            <p className="text-gray-500 leading-relaxed">
                Rejoignez un flux continu d'opportunités. Découvrez nos dernières réalisations immobilières et participez à la construction du patrimoine de demain.
            </p>
            </div>

            {/* PROJECTS FEED WIDGET */}
            <ProjectShowcaseList projects={projectsData} />

            {/* CTA Button */}
            <div className="mt-8 flex justify-center md:justify-start">
            <GoldenButton icon={ArrowRight}>Rejoindre le mouvement</GoldenButton>
            </div>

        </div>
        </div>
    </Section>
  );
};

export default CommunitySection;