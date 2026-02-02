import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import step1 from '../../../assets/steps/step1.png';
import step2 from '../../../assets/steps/step2.png';
import step3 from '../../../assets/steps/step3.png';
import step4 from '../../../assets/steps/step4.png';

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
        title: 'Suivez vos\ninvestissements',
        description: 'X-fund facilite le suivi de vos investissements grâce à notre interface intuitive.',
        image: step4,
    },
];

const ProcessSection: React.FC = () => {
    return (
        <section className="bg-[#F4F4F4]">
            {/* Grey Header Top */}
            <div className="bg-[#F4F4F4] pt-20 pb-12">
                <div className="container mx-auto px-4 lg:pl-20 text-center">
                    <h3 className="text-[#32B92D] font-bold text-xl lg:text-3xl uppercase tracking-[0.2em]">
                        LA PLATEFORME
                    </h3>
                </div>
            </div>

            {/* Grey Content Area */}
            <div className="pb-20">
                <div className="container mx-auto px-4 lg:pl-20">
                    {/* Secondary Header */}
                    <div className="mb-16 pt-12 px-4">
                        <div className="flex flex-col md:flex-row justify-between items-end text-left">
                            <div className="max-w-4xl md:-translate-y-8">
                                <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight md:whitespace-nowrap">
                                    Comment Investir Dans L'immobilier Avec X-Fund ?
                                </h2>
                                <p className="text-slate-600 text-lg">
                                    Notre Processus D'inscription Est Rapide Et Facile.
                                </p>
                            </div>

                            {/* Navigation Buttons on the right */}
                            <div className="flex gap-4 mt-8 md:mt-0 md:pr-4 pb-0 md:translate-y-8">
                                <button className="swiper-button-prev-custom w-12 h-12 rounded-full bg-[#A2D9A1]/80 flex items-center justify-center text-white hover:bg-[#A2D9A1] transition-all cursor-pointer shadow-sm">
                                    <ArrowLeft size={24} />
                                </button>
                                <button className="swiper-button-next-custom w-12 h-12 rounded-full bg-[#32B92D] flex items-center justify-center text-white hover:bg-[#2da629] transition-all cursor-pointer shadow-md">
                                    <ArrowRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 2.5,
                                spaceBetween: 24,
                            },
                        }}
                        className="pb-20 pt-4"
                    >
                        {processSteps.map((step) => (
                            <SwiperSlide key={step.id} className="flex px-2 overflow-visible">
                                <div className="bg-white rounded-[2rem] p-8 lg:p-10 w-full shadow-none hover:shadow-[12px_12px_25px_rgba(50,185,45,0.15)] active:shadow-[12px_12px_25px_rgba(50,185,45,0.25)] border border-slate-100/30 flex flex-row items-start gap-4 h-[340px] mb-6 transition-all duration-300 cursor-pointer">
                                    <div className="flex-[1.2] text-left">
                                        <span className="text-4xl lg:text-5xl font-black text-[#32B92D] mb-4 block leading-none">
                                            {step.id}
                                        </span>
                                        <h4 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 leading-tight whitespace-pre-line">
                                            {step.title}
                                        </h4>
                                        <p className="text-slate-600 text-[10px] lg:text-xs leading-relaxed">
                                            {step.description}
                                        </p>
                                        {step.subtext && (
                                            <p className="text-slate-400 text-[9px] mt-2 italic">
                                                {step.subtext}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex-1 flex justify-end items-center h-full self-center">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className={`w-full h-auto object-contain transition-transform duration-500 hover:scale-110 ${step.id === '01'
                                                ? 'max-w-[110px] lg:max-w-[140px]'
                                                : 'max-w-[140px] lg:max-w-[180px]'
                                                }`}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Bottom Actions */}
                    <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 md:pr-4">
                        <button className="px-10 py-4 border border-[#32B92D]/40 text-[#32B92D] font-bold rounded-xl hover:bg-[#32B92D] hover:text-white transition-all cursor-pointer bg-white shadow-[0_0_20px_rgba(50,185,45,0.15)] hover:shadow-[0_0_25px_rgba(50,185,45,0.3)]">
                            Créer mon Compte maintenant
                        </button>

                        <div className="flex items-center gap-6 md:pr-[5%] lg:pr-[10%]">
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
