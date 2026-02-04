import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { GoldenButton } from '@/components/ui/GoldenButton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import step1 from '@/assets/steps/step1.png';
import step2 from '@/assets/steps/step2.png';
import step3 from '@/assets/steps/step3.png';
import step4 from '@/assets/steps/step4.png';

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
        <section className="bg-white overflow-hidden">
            {/* White Header Top */}
            <div className="bg-white pt-20 pb-12">
                <div className="container mx-auto px-4 lg:pl-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">
                                LA PLATEFORME
                            </span>
                            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Comment Investir Dans L'immobilier Avec <span className="text-primary">X-Fund</span> ?
                            </h2>
                            <p className="text-gray-600 text-lg lg:text-xl">
                                Notre Processus D'inscription Est Rapide Et Facile.
                            </p>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 pb-2">
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
            <div className="bg-white pb-24">
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
                                <div className="bg-[#1A1A1A] rounded-[2rem] p-10 lg:p-12 w-full h-[340px] lg:h-[360px] shadow-2xl flex flex-row items-start gap-8 transition-all duration-500 hover:-translate-y-2 group">
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
                    <div className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24 mt-16">
                        <GoldenButton variant="secondary" className="px-12 py-5 text-lg rounded-xl border-primary text-primary hover:bg-primary/5">
                            Créer mon Compte maintenant
                        </GoldenButton>

                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:scale-105 transition-transform duration-300">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Google Play"
                                    className="h-[64px] rounded-lg border border-white/10 grayscale brightness-[2.5]"
                                />
                            </a>
                            <a href="#" className="hover:scale-105 transition-transform duration-300">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-[64px] rounded-lg border border-white/10" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
