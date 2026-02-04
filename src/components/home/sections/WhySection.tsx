import React from 'react';
import { FeatureItem } from '../FeatureItem';
import { GoldenButton } from '@/components/ui/GoldenButton';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { HeroDescription } from '../HeroDescription';


const XFundFeatures: React.FC = () => {
  return (
    <Section className="relative w-full overflow-hidden bg-[#050505] py-32 text-white font-sans">
      {/* Background Graphic: Radial Gold Glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.08) 0%, #000000 70%)'
        }}
      />

      {/* Decorative Top Vertical Line */}
      <div className="absolute top-0 left-1/2 h-[100px] w-px -translate-x-1/2 bg-gradient-to-b from-[#D4AF37] to-transparent opacity-50" />

      <div className="container relative z-10 mx-auto  max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[100px] items-center">
          
          {/* --- Left Column: Content --- */}
          <div>
            <div className="mb-12">
                <SectionHeading
                    title={`L'excellence immobilière \n X-Fund`} 
                    subtitle='POURQUOI NOUS CHOISIR'
                    titleClassName='text-white'
                    goldifyString='X-Fund'
                />
              
              <HeroDescription className='text-muted' >
                Une approche privilégiée de l'investissement obligataire. X-Fund démocratise l'accès aux opportunités immobilières premium, alliant simplicité digitale et rendements performants.
              </HeroDescription>
            </div>

            {/* Features Grid */}
            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              <FeatureItem 
                title="Accessibilité" 
                subtitle="Entrée exclusive dès 10€."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
              <FeatureItem 
                title="Diversification" 
                subtitle="Répartition optimale des actifs."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                }
              />
              <FeatureItem 
                title="Performance" 
                subtitle="Taux cibles attractifs."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                }
              />
              <FeatureItem 
                title="Simplicité" 
                subtitle="Expérience fluide et intuitive."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                }
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <GoldenButton className='text-black font-normal'>Découvrir l'offre</GoldenButton>
              <GoldenButton variant='ghost' icon={ArrowRight} className='text-white font-normal'>Prendre RDV</GoldenButton>
            </div>
          </div>

          {/* --- Right Column: Image & Stats --- */}
          {/* Note: p-5 ensures there is space for the negative margin outline to show without being cut off */}
          <div className="relative order-first lg:order-last p-5 lg:p-8">
            
            {/* Outline Box - Background Layer */}
            {/* Positioned absolute relative to the column padding box. Negative top/right makes it peek out behind the image. */}
            <div className="absolute -top-4 -right-4 lg:-top-10 lg:-right-10 scale-90 w-full h-full border border-[#D4AF37] opacity-60 z-0 rounded" />
            
            {/* Main Image Frame - Foreground Layer (z-10) */}
            <div className="relative z-10 w-full aspect-square md:aspect-auto md:h-[500px] lg:h-[600px] overflow-hidden shadow-[0_30px_60px_-12px_rgba(5,5,5,0.5),0_0_40px_-10px_rgba(212,175,55,0.15)] group">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Architecture Prestige"
                className="h-full w-full object-cover transition-all duration-500 contrast-[1.1] brightness-90 group-hover:brightness-100 group-hover:contrast-125 rounded"
              />
            </div>

            {/* Floating Stat Badge */}
            <div className="absolute -bottom-5 left-5 lg:bottom-[60px] lg:-left-5 z-20 min-w-[200px] border border-[#D4AF37] bg-[#050505]/90 p-8 backdrop-blur-md shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)] rounded">
              <span className="block text-5xl font-bold leading-none tracking-tighter bg-gradient-to-br from-[#AA8C2C] via-[#D4AF37] to-[#AA8C2C] bg-clip-text text-transparent">
                12.5%
              </span>
              <span className="mt-2 block text-xs font-medium uppercase tracking-[2px] text-white">
                Rendement Cible
              </span>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};


export default XFundFeatures;