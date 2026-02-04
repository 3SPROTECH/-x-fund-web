import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { GoldenButton } from '@/components/ui/GoldenButton';
import appleLogo from '@/assets/logo/apple-logo.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import step1 from '@/assets/steps/step1.png';
import step2 from '@/assets/steps/step2.png';
import step3 from '@/assets/steps/step3.png';
import step4 from '@/assets/steps/step4.png';
import { SectionHeading } from '@/components/shared/SectionHeading';

const processSteps = [
    {
        id: '01',
        title: 'Je sélectionne mon projet',
        description: 'Découvrez nos opportunités d\'investissements immobiliers soigneusement sélectionnées par nos experts.',
        image: step1,
    },
    {
        id: '02',
        title: 'J\'investis* dès 10€',
        description: 'Un investissement accessible dès 10€ via des obligations permettant de diversifier facilement.',
        subtext: '*Investir comporte des risques',
        image: step2,
    },
    {
        id: '03',
        title: 'Je touche mes intérêts',
        description: 'Tous les mois, vos revenus sont versés directement sur votre portefeuille en fonction du nombre de bricks* que vous possédez.',
        subtext: '*Une brick est une obligation d\'une valeur de 10€',
        image: step3,
    },
    {
        id: '04',
        title: 'Suivez vos investissements',
        description: 'X-fund facilite le suivi de vos investissements grâce à notre interface intuitive.',
        image: step4,
    },
];

const ProcessSection: React.FC = () => {
    return (
        <section className="bg-white ">
            {/* White Header Top */}
            <div className="bg-white pt-20 pb-12">
                <div className="container mx-auto px-4 lg:pl-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <SectionHeading title="Comment Investir Dans L'immobilier Avec X-Fund ?" goldifyString="X-Fund" subtitle="LA PLATEFORME" />
                            <p className="text-gray-600 text-lg lg:text-xl">
                                Notre Processus D'inscription Est Rapide Et Facile.
                            </p>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 pb-2 lg:mr-20">
                            <button className="swiper-button-prev-custom w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer bg-primary text-white shadow-lg shadow-primary/20 enabled:hover:bg-primary/90 disabled:bg-primary/10 disabled:text-primary disabled:shadow-none disabled:cursor-not-allowed">
                                <ArrowLeft size={24} />
                            </button>
                            <button className="swiper-button-next-custom w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer bg-primary text-white shadow-lg shadow-primary/20 enabled:hover:bg-primary/90 disabled:bg-primary/10 disabled:text-primary disabled:shadow-none disabled:cursor-not-allowed">
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-white pb-18">
                <div className="container mx-auto px-4 lg:pl-20">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={false}
                        centeredSlides={false}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1.1 },
                            1024: { slidesPerView: 2 },
                            1280: { slidesPerView: 2.4 }
                        }}
                        className="py-16 overflow-visible"
                    >
                        {processSteps.map((step) => (
                            <SwiperSlide key={step.id} className="h-auto">
                                <div className="bg-[#1A1A1A] rounded-[2rem] p-10 lg:p-12 w-full h-[340px] lg:h-[360px] mb-10 hover:shadow-[8px_8px_25px_rgba(212,175,55,0.35)]  flex flex-row items-start gap-8 transition-all duration-500 group">
                                    <div className="flex-[1.2] text-left">
                                        <span className="text-5xl lg:text-6xl font-bold text-primary opacity-90 mb-6 block leading-none">
                                            {step.id}
                                        </span>
                                        <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
                                            {step.title}
                                        </h4>
                                        <div className="space-y-3 pr-4">
                                            <p className="text-gray-400 text-xs lg:text-sm leading-relaxed line-clamp-3">
                                                {step.description}
                                            </p>
                                            {step.subtext && (
                                                <p className="text-gray-500 text-xs italic">
                                                    {step.subtext}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex-1 relative flex justify-end items-center h-full">
                                        {/* Phone reflection/glow effect */}
                                        <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full scale-75 group-hover:scale-90 transition-transform duration-700" />

                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="relative z-10 h-full max-h-[260px] lg:max-h-[300px] w-auto object-contain transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Footer Actions */}
                    <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-16 lg:gap-24 mt-4">
                        <GoldenButton variant="secondary" className="px-10 py-3.5 text-base rounded-lg border-primary text-primary hover:bg-primary/5">
                            Créer mon Compte maintenant
                        </GoldenButton>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a href="#" className="bg-[#1A1A1A] flex items-center gap-3 px-5 py-2 rounded-lg border  transition-all hover:shadow-[8px_8px_25px_rgba(212,175,55,0.35)] hover:border-primary group">
                                <img src={appleLogo} alt="Apple Store" className="w-7 h-7 object-contain" />
                                <div>
                                    <div className="text-[8px] uppercase text-white/60 leading-none font-poppins">App Store</div>
                                    <div className="text-xs font-bold text-white font-poppins">iOS Download</div>
                                </div>
                            </a>
                            <a href="#" className="bg-[#1A1A1A] flex items-center gap-3 px-5 py-2 rounded-lg border  transition-all  hover:shadow-[8px_8px_25px_rgba(212,175,55,0.35)] hover:border-primary group">
                                <svg className="w-6 h-6 fill-white" viewBox="0 0 512 512">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-28.5-1.2-40.8zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
                                </svg>
                                <div>
                                    <div className="text-[8px] uppercase text-white/60 leading-none font-poppins">Play Store</div>
                                    <div className="text-xs font-bold text-white font-poppins">Android App</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
