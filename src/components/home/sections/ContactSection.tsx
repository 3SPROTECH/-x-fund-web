import React from 'react';
import {
  CircleCheck,
  ArrowUpRight,
  Instagram,
  Phone,
  Mail,
  Linkedin,
  Clock
} from "lucide-react";

import { GoldenButton } from '@/components/ui/GoldenButton';
import { SectionHeading } from '@/components/shared/SectionHeading';
import Section from '@/components/ui/Section';

const ContactSection: React.FC = () => {
  return (
    <Section className="py-12 md:py-20">
      <div className="overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col lg:flex-row min-h-[auto] lg:min-h-[700px]">

        {/* --- PARTIE GAUCHE : CONTACT --- */}
        <div className="lg:w-2/5 bg-white py-6 sm:p-8 md:py-16 flex flex-col justify-between">
          <div>
            <SectionHeading
              subtitle="Nous contacter"
              goldifyString="vos ambitions"
              title="Parlons de vos ambitions."
            />

            <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-sm">
              Notre équipe d'experts est à votre entière disposition pour analyser vos besoins et vous accompagner.
            </p>

            {/* Liste de Contacts */}
            <div className="space-y-6 md:space-y-8">

              {/* Téléphone */}
              <div className="flex items-center group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center mr-4 sm:mr-5 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">
                    Téléphone
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    00 00 00 00 00
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center mr-4 sm:mr-5 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">
                    Email
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    contact@x-fund.co
                  </p>
                </div>
              </div>

              {/* Service Client */}
              <div className="flex items-center group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center mr-4 sm:mr-5 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">
                    Service Client
                  </p>
                  <p className="text-sm sm:text-lg font-semibold text-gray-900">
                    Lundi au vendredi, 9h00 à 13h00
                  </p>
                  <p className="text-xs mt-0.5 text-primary font-medium italic">
                    Sans rendez-vous
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Socials */}
          <div className="mt-10 md:mt-16 pt-6 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
              Suivez-nous
            </span>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 text-xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 text-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* --- PARTIE DROITE : SOUMISSION --- */}
        <div className="lg:w-3/5 bg-gray-50/50 p-6 sm:p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#faf8f2] rounded-full -mr-40 -mt-40 opacity-60 blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Porteur de <span className="text-primary">projet ?</span>
            </h3>

            <p className="text-gray-500 mb-10 leading-relaxed max-w-md text-sm sm:text-base">
              Transformez votre vision immobilière en réalité. Notre plateforme vous connecte aux financements nécessaires pour concrétiser vos projets les plus audacieux.
            </p>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] mb-10 shadow-sm">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-[#faf8f2] rounded-xl mr-4 text-primary">
                  <CircleCheck className="w-5 h-6" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">
                    Soumettre un dossier
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Éligibilité sous 48h. Processus 100% digitalisé et sécurisé.
                  </p>
                </div>
              </div>

              <GoldenButton icon={ArrowUpRight} className="w-full">
                Proposez votre projet
              </GoldenButton>
            </div>

            <div className="flex items-center justify-center mb-8">
              <div className="h-[1px] bg-gray-200 flex-grow max-w-[50px]"></div>
              <span className="mx-6 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                ou
              </span>
              <div className="h-[1px] bg-gray-200 flex-grow max-w-[50px]"></div>
            </div>

            <div className="text-center">
              <GoldenButton variant="secondary" className="w-full sm:w-auto">
                Prendre Rendez-vous
              </GoldenButton>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default ContactSection;
