import { GoldenButton } from "@/components/ui/GoldenButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import appleLogo from "@/assets/logo/apple-logo.png";
import { cn } from "@/lib/utils";

// Local asset imports
import oppImage1 from "@/assets/opportinities/opportinutiesimage1.png";
import oppImage2 from "@/assets/opportinities/opportinutiesimage2.png";
import oppImage3 from "@/assets/opportinities/opportinutiesimage3.png";



// Reusable ActionArea component for responsive placement
const ActionArea = ({ className }: { className?: string }) => (
    <div className={cn("space-y-10", className)}>
        <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start justify-center lg:justify-start">
            <GoldenButton className="px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm w-full sm:w-auto">
                Voir les opportunités
            </GoldenButton>
        </div>

        {/* App Download Links */}
        <div className="pt-8 space-y-4 flex flex-col items-center lg:items-start">
            <p className="text-[10px] uppercase tracking-widest text-[#B0B0B0] font-semibold font-poppins">
                Disponible sur mobiles
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#" className="flex items-center gap-3 px-5 py-2 rounded-lg border border-white/20 transition-all hover:bg-white/5 hover:border-[#D4AF37] group">
                    <img src={appleLogo} alt="Apple Store" className="w-7 h-7 object-contain" />
                    <div>
                        <div className="text-[8px] uppercase text-white/60 leading-none font-poppins">App Store</div>
                        <div className="text-xs font-bold text-white font-poppins">iOS Download</div>
                    </div>
                </a>
                <a href="#" className="flex items-center gap-3 px-5 py-2 rounded-lg border border-white/20 transition-all hover:bg-white/5 hover:border-[#D4AF37] group">
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
);

export const OpportunitiesSection = () => {
    return (
        <section className="relative min-h-screen bg-[#050505] overflow-hidden py-20 px-6 lg:px-24">
            {/* Background Decorative Dot Pattern */}
            <div
                className="absolute top-0 right-0 w-full lg:w-1/3 h-full pointer-events-none opacity-15"
                style={{
                    backgroundImage: 'radial-gradient(#AA8C2C 1px, transparent 1px)',
                    backgroundSize: '200px 200px'
                }}
            />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content area */}
                    <div className="lg:col-span-6 space-y-10">
                        <div className="space-y-6 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                                <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold font-poppins">
                                    Opportunités Variées
                                </span>
                            </div>

                            <SectionHeading
                                title={"Des typologies de \nbiens exclusifs"}
                                subtitle="" // Subtitle handled manually above for custom styling
                                goldifyString="biens exclusifs"
                                className="mb-0 text-center lg:text-left items-center lg:items-start"
                                titleClassName="text-white !text-5xl md:!text-6xl lg:!text-7xl !font-bold leading-[1.1] tracking-tight"
                            />

                            <p className="text-[#B0B0B0] text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-light font-poppins">
                                Nous sélectionnons avec une exigence absolue chaque projet pour offrir à nos investisseurs une collection privée d'opportunités en France et à l'international.
                            </p>
                        </div>

                        {/* DESKTOP Action Area: Hidden on mobile */}
                        <ActionArea className="hidden lg:block" />
                    </div>

                    {/* Right Column: Property Grid */}
                    <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                        {/* Featured Property (Large) */}
                        <div className="col-span-2 relative h-[300px] md:h-[350px] overflow-hidden rounded-sm border border-white/10 transition-all duration-500 hover:border-[#D4AF37] hover:-translate-y-2 group">
                            <img
                                src={oppImage1}
                                alt="Résidentiel Luxe"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-[#050505]/90 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6">
                                <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase font-poppins">Premium</span>
                                <h3 className="text-2xl font-bold mt-1 text-white uppercase font-poppins">Résidentiel</h3>
                            </div>
                        </div>

                        {/* Secondary Property 1 */}
                        <div className="relative h-[200px] md:h-[220px] overflow-hidden rounded-sm border border-white/10 transition-all duration-500 hover:border-[#D4AF37] hover:-translate-y-2 group">
                            <img
                                src={oppImage2}
                                alt="Commerce"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#050505]/90 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-lg font-bold text-white uppercase font-poppins">Commerce</h3>
                            </div>
                        </div>

                        {/* Secondary Property 2 (Exclusive) */}
                        <div className="relative h-[200px] md:h-[220px] overflow-hidden rounded-sm border-2 border-[#D4AF37] transition-all duration-500 hover:-translate-y-2 group">
                            <img
                                src={oppImage3}
                                alt="Portugal"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#050505]/90 via-transparent to-transparent" />
                            <div className="absolute top-4 right-4">
                                <div className="bg-[#D4AF37] text-black text-[10px] font-bold px-2 py-1 uppercase font-poppins">Exclusivité</div>
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-lg font-bold text-white uppercase font-poppins">Portugal</h3>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE Action Area: Shown only on mobile AFTER the images */}
                    <div className="lg:hidden mt-12">
                        <ActionArea />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpportunitiesSection;
