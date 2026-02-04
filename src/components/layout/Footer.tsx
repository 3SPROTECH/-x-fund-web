
const Footer = () => {
    return (
        <footer className="w-full bg-linear-to-b from-[#1A1A1A] to-[#050505] text-white relative pt-20 pb-12 overflow-hidden border-t border-white/5">
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large concentric circles centering on the logo area */}
                <div className="absolute w-[800px] h-[800px] top-[-400px] left-1/2 -translate-x-1/2 rounded-full border border-[#D4AF37]/5"></div>
                <div className="absolute w-[600px] h-[600px] top-[-300px] left-1/2 -translate-x-1/2 rounded-full border border-[#D4AF37]/5"></div>
                <div className="absolute w-[400px] h-[400px] top-[-200px] left-1/2 -translate-x-1/2 rounded-full border border-[#D4AF37]/5"></div>

                {/* Subtle Gold sheen passing through */}
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-transparent via-[#D4AF37]/5 to-transparent opacity-30"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col items-center mb-12">
                    <div className="mb-8 relative">
                        <h2 className="text-4xl font-bold tracking-tight text-white relative z-10">
                            X-<span className="bg-linear-to-br from-[#F3E5AB] via-[#D4AF37] to-[#AA8C2C] bg-clip-text text-transparent">Fund</span>
                        </h2>
                        {/* Glow behind logo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#D4AF37]/10 blur-[50px] rounded-full"></div>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {[
                            "Plan de continuité",
                            "Conflits d'intérêts",
                            "Mentions légales",
                            "Confidentialité",
                            "Conditions générales",
                            "Réclamation",
                            "Performances"
                        ].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Stylish Divider */}
                <div className="flex items-center gap-4 mb-10 opacity-30">
                    <div className="h-px bg-linear-to-r from-transparent to-[#D4AF37] flex-1"></div>
                    <div className="w-2 h-2 rotate-45 border border-[#D4AF37]"></div>
                    <div className="h-px bg-linear-to-l from-transparent to-[#D4AF37] flex-1"></div>
                </div>

                {/* Risk Warning (Glassmorphism) */}
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 mb-12 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-[#D4AF37] via-[#AA8C2C] to-[#D4AF37]"></div>
                    <p className="text-sm text-gray-300 leading-relaxed pl-2 font-poppins">
                        <strong className="text-[#D4AF37] font-semibold">*Investir dans des obligations immobilières comporte des risques</strong>, notamment celui de ne pas recevoir les intérêts attendus, ou de perdre une partie ou la totalité du capital investi. N'investissez que l'argent dont vous n'avez pas besoin immédiatement, et diversifiez vos investissements.
                    </p>
                </div>

                {/* Detailed Legal Text (3 Columns for Newspaper feel) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[11px] leading-relaxed text-gray-500 text-justify mb-12 font-poppins">
                    <div className="space-y-4">
                        <p>
                            X-Fund est une plateforme de financement participatif spécialisée en immobilier, agréée par l'Autorité des Marchés Financiers en tant que Prestataire de Services de Financement Participatif sous le N°FP-2023-08.
                        </p>
                        <p>
                            X-Fund est enregistrée sous l'identifiant REGAFI N° 94466 par l'Autorité de Contrôle Prudentiel et de Résolution (ACPR) comme agent prestataire de services de paiement de Lemonway (établissement de paiement dont le siège social est situé au 8 rue du Sentier, 75002 Paris, agréé par l'ACPR sous le numéro 16568).
                        </p>
                    </div>

                    <div className="space-y-4 border-l border-white/5 md:pl-8">
                        <p>
                            <span className="text-[#D4AF37]">AVERTISSEMENT :</span> Nos offres comportent certains risques, notamment le risque de perte totale ou partielle des sommes investies. Les performances passées ne préjugent pas des performances futures. Vous pouvez consulter nos résultats et nos indicateurs de performance directement sur la page "Performances".
                        </p>
                        <p>
                            Si vous avez la moindre question sur les risques associés à nos projets, nos équipes sont disponibles pour y répondre. Les services de financement participatif ne sont pas couverts par le système de garantie des dépôts établi conformément à la directive 2014/49/UE.
                        </p>
                    </div>

                    <div className="space-y-4 border-l border-white/5 md:pl-8">
                        <p>
                            <span className="text-[#D4AF37]">Informations importantes :</span> Les projets présentés sur X-Fund sont portés par des porteurs de projets (PDP) qui sont à l'initiative de la constitution des sociétés de projets (SPV). Dans certains cas, l'actif immobilier concerné, indivisible et non liquide, peut déjà être en partie financé par le PDP.
                        </p>
                        <p>
                            Le succès de l'opération dépend donc du succès de la collecte, et des performances futures du bien immobilier. Nous invitons nos investisseurs à prendre en compte ces éléments lors de leur décision d'investissement.
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600 font-poppins">
                    <p>© 2026 X-Fund. Tous droits réservés.</p>
                    <div className="flex gap-4 mt-4 md:mt-0 items-center">
                        <span className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse"></span>
                        <span>Système opérationnel</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
