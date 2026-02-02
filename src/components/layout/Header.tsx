import { useState } from "react";
import { 
  ChevronDown, ArrowRight, FileText, Building, Users, Newspaper, Mail, UserPlus,
  HelpCircle, Shield, Star, Mic, BookOpen, Map, GraduationCap,
  Menu, X
} from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (menu: string) => {
    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <div className="text-xl font-bold">
          <span className="text-primary">X</span>
          <span className="text-gray-800">-Fund</span>
        </div>

        <nav className="hidden lg:flex gap-10 text-gray-700 font-medium h-full">
          <a href="#" className="hover:text-primary transition-colors flex items-center h-full">
            Investir
          </a>

          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 hover:text-primary transition-colors h-full">
              Se financer
              <ChevronDown
                size={16}
                className="text-primary transition-transform duration-200 group-hover:rotate-180"
              />
            </button>
            
            {/* FIX: Changed 'top-full' to 'top-20' to match the h-20 header height */}
            <div
              className="fixed left-0 right-0 top-20 bg-gray-50 
                      opacity-0 translate-y-[-10px] pointer-events-none
                      transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto border-t border-gray-100 shadow-lg"
            >
              <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex items-start gap-16">
                  <div className="flex-shrink-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Se financer</h3>
                    <p className="text-gray-600">
                      X-fund vous met en relation avec plus de 400 000<br />
                      membres pour obtenir un financement en quelques<br />
                      heures.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 flex-1">
                    <a href="#" className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow group/card">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                          <FileText className="text-primary" size={20} />
                        </div>
                        <span className="font-medium text-gray-800">Porteurs de projets</span>
                      </div>
                      <ArrowRight className="text-gray-400 group-hover/card:text-primary transition-colors" size={20} />
                    </a>
                    <a href="#" className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow group/card">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                          <Building className="text-primary" size={20} />
                        </div>
                        <span className="font-medium text-gray-800">Agents immobilier</span>
                      </div>
                      <ArrowRight className="text-gray-400 group-hover/card:text-primary transition-colors" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 hover:text-primary transition-colors h-full">
              Qui sommes nous
              <ChevronDown
                size={16}
                className="text-primary transition-transform duration-200 group-hover:rotate-180"
              />
            </button>
            {/* FIX: Changed 'top-full' to 'top-20' */}
            <div
              className="fixed left-0 right-0 top-20 bg-gray-50
                      opacity-0 translate-y-[-10px] pointer-events-none
                      transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto border-t border-gray-100 shadow-lg"
            >
              <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex items-start gap-16">
                  <div className="flex-shrink-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Qui sommes nous ?</h3>
                    <p className="text-gray-600 mb-4">
                      Démocratiser l'investissement<br />
                      immobilier en le rendant accessible à<br />
                      tous, à partir de seulement 10€.
                    </p>
                    <a href="#" className="text-primary hover:text-primary font-medium underline">
                      Créer un compte
                    </a>
                  </div>
                  <div className="flex-1 grid grid-cols-3 gap-12">
                    <div>
                      <h4 className="text-gray-400 text-sm font-semibold mb-4 uppercase">À propos</h4>
                      <div className="flex flex-col gap-3">
                        <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group/card">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                              <FileText className="text-primary" size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-800">Notre histoire</span>
                          </div>
                          <ArrowRight className="text-gray-400 group-hover/card:text-primary transition-colors" size={16} />
                        </a>
                        <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group/card">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                              <Users className="text-primary" size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-800">Notre expertise</span>
                          </div>
                          <ArrowRight className="text-gray-400 group-hover/card:text-primary transition-colors" size={16} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm font-semibold mb-4 uppercase">Plus</h4>
                      <div className="flex flex-col gap-3">
                        <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group/card">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                              <Newspaper className="text-primary" size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-800">Presse</span>
                          </div>
                          <ArrowRight className="text-gray-400 group-hover/card:text-primary transition-colors" size={16} />
                        </a>
                        <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group/card">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                              <Mail className="text-primary" size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-800">Contact</span>
                          </div>
                          <ArrowRight className="text-gray-400 group-hover/card:text-primary transition-colors" size={16} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm font-semibold mb-4 uppercase">Team</h4>
                      <div className="flex flex-col gap-3">
                        <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group/card">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                              <UserPlus className="text-primary" size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-800">Nous rejoindre</span>
                          </div>
                          <ArrowRight className="text-gray-400 group-hover/card:text-primary transition-colors" size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 hover:text-primary transition-colors h-full">
              S'informer
              <ChevronDown
                size={16}
                className="text-primary transition-transform duration-200 group-hover:rotate-180"
              />
            </button>
            {/* FIX: Changed 'top-full' to 'top-20' */}
            <div
              className="fixed left-0 right-0 top-20 bg-gray-50
                      opacity-0 translate-y-[-10px] pointer-events-none
                      transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto border-t border-gray-100 shadow-lg"
            >
              <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex items-start gap-16">
                  <div className="flex-shrink-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">S'informer</h3>
                    <p className="text-gray-600 mb-4">
                      Diverses ressources sont à votre<br />
                      disposition afin de vous garantir la<br />
                      meilleure expérience sur X-fund.
                    </p>
                    <a href="#" className="text-primary hover:text-primary font-medium underline">
                      Créer un compte
                    </a>
                  </div>
                  <div className="flex-1 grid grid-cols-3 gap-12">
                    <div>
                      <h4 className="text-gray-400 text-sm font-semibold mb-4 uppercase">Apprendre</h4>
                      <div className="flex flex-col gap-3">
                        <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group/card">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                              <FileText className="text-primary" size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-800">Blog</span>
                          </div>
                          <ArrowRight className="text-gray-400 group-hover/card:text-primary transition-colors" size={16} />
                        </a>
                        <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group/card">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                              <HelpCircle className="text-primary" size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-800">FAQ</span>
                          </div>
                          <ArrowRight className="text-gray-400 group-hover/card:text-primary transition-colors" size={16} />
                        </a>
                        <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group/card">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                              <Shield className="text-primary" size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-800">Nos garanties</span>
                          </div>
                          <ArrowRight className="text-gray-400 group-hover/card:text-primary transition-colors" size={16} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm font-semibold mb-4 uppercase">Communauté</h4>
                      <div className="flex flex-col gap-3">
                        <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group/card">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                              <Star className="text-primary" size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-800">Avis</span>
                          </div>
                          <ArrowRight className="text-gray-400 group-hover/card:text-primary transition-colors" size={16} />
                        </a>
                        <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group/card">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                              <Mic className="text-primary" size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-800">Notre Podcast</span>
                          </div>
                          <ArrowRight className="text-gray-400 group-hover/card:text-primary transition-colors" size={16} />
                        </a>
                        <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group/card">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                              <BookOpen className="text-primary" size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-800">X-fund Stories</span>
                          </div>
                          <ArrowRight className="text-gray-400 group-hover/card:text-primary transition-colors" size={16} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm font-semibold mb-4 uppercase">Bientôt</h4>
                      <div className="flex flex-col gap-3">
                        <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group/card">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                              <Map className="text-primary" size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-800">Roadmap Publique</span>
                          </div>
                          <ArrowRight className="text-gray-400 group-hover/card:text-primary transition-colors" size={16} />
                        </a>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg opacity-50 cursor-not-allowed">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                              <Users className="text-gray-400" size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-400">Communauté X-fund</span>
                          </div>
                          <ArrowRight className="text-gray-300" size={16} />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg opacity-50 cursor-not-allowed">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                              <GraduationCap className="text-gray-400" size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-400">Academy</span>
                          </div>
                          <ArrowRight className="text-gray-300" size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Button className="hidden lg:block bg-primary hover:bg-primary/90 h-12 px-8 rounded-full text-white font-semibold">
           Connexion
        </Button>

        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-20 px-6 pb-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="text-xl font-bold">
              <span className="text-primary">X</span>
              <span className="text-gray-800">-Fund</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-2">
            <a 
              href="#" 
              className="block py-3 text-gray-700 font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Investir
            </a>

            <div>
              <button 
                className="flex items-center justify-between w-full py-3 text-gray-700 font-medium hover:text-primary transition-colors"
                onClick={() => toggleMobileDropdown('financer')}
              >
                <span>Se financer</span>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${openMobileDropdown === 'financer' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {openMobileDropdown === 'financer' && (
                <div className="mt-2 mb-4 space-y-3">
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                        <FileText className="text-primary" size={20} />
                      </div>
                      <span className="font-medium text-gray-800">Porteurs de projets</span>
                    </div>
                    <ArrowRight className="text-gray-400" size={20} />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                        <Building className="text-primary" size={20} />
                      </div>
                      <span className="font-medium text-gray-800">Agents immobilier</span>
                    </div>
                    <ArrowRight className="text-gray-400" size={20} />
                  </a>
                </div>
              )}
            </div>

            <div>
              <button 
                className="flex items-center justify-between w-full py-3 text-gray-700 font-medium hover:text-primary transition-colors"
                onClick={() => toggleMobileDropdown('qui')}
              >
                <span>Qui sommes nous</span>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${openMobileDropdown === 'qui' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {openMobileDropdown === 'qui' && (
                <div className="mt-2 mb-4 space-y-2">
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                        <FileText className="text-primary" size={16} />
                      </div>
                      <span className="text-sm font-medium text-gray-800">Notre histoire</span>
                    </div>
                    <ArrowRight className="text-gray-400" size={16} />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                        <Users className="text-primary" size={16} />
                      </div>
                      <span className="text-sm font-medium text-gray-800">Notre expertise</span>
                    </div>
                    <ArrowRight className="text-gray-400" size={16} />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                        <Newspaper className="text-primary" size={16} />
                      </div>
                      <span className="text-sm font-medium text-gray-800">Presse</span>
                    </div>
                    <ArrowRight className="text-gray-400" size={16} />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                        <Mail className="text-primary" size={16} />
                      </div>
                      <span className="text-sm font-medium text-gray-800">Contact</span>
                    </div>
                    <ArrowRight className="text-gray-400" size={16} />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                        <UserPlus className="text-primary" size={16} />
                      </div>
                      <span className="text-sm font-medium text-gray-800">Nous rejoindre</span>
                    </div>
                    <ArrowRight className="text-gray-400" size={16} />
                  </a>
                </div>
              )}
            </div>

            <div>
              <button 
                className="flex items-center justify-between w-full py-3 text-gray-700 font-medium hover:text-primary transition-colors"
                onClick={() => toggleMobileDropdown('informer')}
              >
                <span>S'informer</span>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${openMobileDropdown === 'informer' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {openMobileDropdown === 'informer' && (
                <div className="mt-2 mb-4 space-y-2">
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                        <FileText className="text-primary" size={16} />
                      </div>
                      <span className="text-sm font-medium text-gray-800">Blog</span>
                    </div>
                    <ArrowRight className="text-gray-400" size={16} />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                        <HelpCircle className="text-primary" size={16} />
                      </div>
                      <span className="text-sm font-medium text-gray-800">FAQ</span>
                    </div>
                    <ArrowRight className="text-gray-400" size={16} />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                        <Shield className="text-primary" size={16} />
                      </div>
                      <span className="text-sm font-medium text-gray-800">Nos garanties</span>
                    </div>
                    <ArrowRight className="text-gray-400" size={16} />
                  </a>
                </div>
              )}
            </div>

            <button 
              className="w-full bg-primary text-white px-4 py-3 rounded-lg shadow-md transition hover:bg-primary font-medium mt-8"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Connexion
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;