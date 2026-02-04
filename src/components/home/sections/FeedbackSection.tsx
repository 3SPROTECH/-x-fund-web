import { SectionHeading } from "@/components/shared/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Section from "@/components/ui/Section";

const testimonials = [
    {
        id: 1,
        author: "Lamine",
        title: "Satisfaction Totale",
        content: '"Inscrit depuis plusieurs mois, je suis amplement satisfait ! Une plateforme incroyable. Je recommande vivement l\'accompagnement."',
    },
    {
        id: 2,
        author: "Nassim",
        title: "Rigueur & Confiance",
        content: '"L\'un des meilleurs moyens d\'investir en immobilier. Les risques sont clairs, et l\'équipe est d\'une fiabilité remarquable."',
    },
    {
        id: 3,
        author: "Lionel",
        title: "Patrimoine pour tous",
        content: '"Rendement honnête sans aucune démarche de mon côté. Gestion complète par des experts. Un vrai gain de temps."',
    },
    {
        id: 4,
        author: "Christophe",
        title: "Expérience Exceptionnelle",
        content: '"Entreprise sérieuse. Revenu réel conforme aux prévisions annoncées. Longue vie à l\'entreprise !"',
    },
];

const StarIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="url(#feedbackGoldGradient)">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

export const FeedbackSection = () => {
    return (
        <Section className="py-24  bg-slate-50/30 overflow-hidden">
            {/* Global SVG Gradient Definition */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="feedbackGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#AA8C2C" />
                        <stop offset="50%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#F3E5AB" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="">
                {/* Header Section */}
                <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    <div className="max-w-2xl">
                        <SectionHeading
                            subtitle="La voix de nos investisseurs"
                            title={"Une confiance bâtie sur l'excellence immobilière"}
                            goldifyString="excellence immobilière"
                            className=""
                        />
                    </div>
                    <div className="pb-2">
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                            <span className="text-2xl font-bold text-slate-900">4.9</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="w-5 h-5" />
                                ))}
                            </div>
                        </div>
                        <p className="text-slate-400 text-xs uppercase tracking-widest font-medium">
                            Basé sur +500 avis vérifiés
                        </p>
                    </div>
                </div>

                {/* Testimonials Carousel / Grid */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={32}
                    slidesPerView={1.1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                            allowTouchMove: false, // Disable swipe on desktop to feel like a static grid
                        },
                    }}
                    className="feedback-swiper !pb-16 overflow-visible"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="h-auto">
                            <div
                                className="bg-white border border-slate-100 rounded-[20px] p-10 h-full flex flex-col justify-between relative overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(212,175,55,0.08)] hover:border-[#F3E5AB] group"
                            >
                                {/* Quote Icon Background */}
                                <svg className="absolute top-5 right-5 w-10 h-10 opacity-[0.05] fill-slate-900" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V4H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H3.01697C2.46468 8 2.01697 8.44772 2.01697 9V12C2.01697 12.5523 1.56925 13 1.01697 13H0.0169727V4H10.017V15C10.017 18.3137 7.3307 21 4.01697 21H2.01697Z" />
                                </svg>

                                <div>
                                    <div className="flex gap-0.5 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className="w-4 h-4" />
                                        ))}
                                    </div>
                                    <h3 className="font-bold text-lg mb-3 leading-snug text-slate-900">
                                        {testimonial.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                        {testimonial.content}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 before:content-[''] before:w-5 before:h-[1px] before:bg-[#D4AF37]">
                                    <span className="font-semibold text-xs uppercase tracking-widest text-slate-800">
                                        {testimonial.author}
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .feedback-swiper .swiper-pagination-bullet {
                    background: #CBD5E1;
                    opacity: 1;
                }
                .feedback-swiper .swiper-pagination-bullet-active {
                    background: #D4AF37;
                    width: 24px;
                    border-radius: 4px;
                }
                .feedback-swiper .swiper-pagination {
                    bottom: 0 !important;
                }
            `}} />
        </Section>
    );
};

export default FeedbackSection;
