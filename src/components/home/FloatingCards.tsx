import * as React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a standard shadcn/utils file

interface FloatingCardsProps {
  className?: string;
  // Main Card Content
  mainImage?: string;
  mainTitle?: string;
  mainSubtitle?: string;
  mainBadge?: string;
  progress?: number; // 0 to 100
  tagText?: string;
  
  // Stats Card Content
  statValue?: string;
  statLabel?: string;
  
  // Notification Content
  notificationText?: string;
  notificationValue?: string;
}

export function FloatingCards({
  className,
  mainImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  mainTitle = "Résidence Haussmann",
  mainSubtitle = "Paris VIIIe • Immobilier Résidentiel",
  mainBadge = "A+",
  progress = 65,
  tagText = "Ouvert à la collecte",
  statValue = "12.5%",
  statLabel = "Rendement",
  notificationText = "Intérêts versés:",
  notificationValue = "+450€",
}: FloatingCardsProps) {
  return (
    <div className={cn("relative h-[600px] w-full max-w-[600px] flex items-center justify-center lg:justify-end group perspective-[1000px]", className)}>
      
      {/* 1. Background Blob (Decorative) */}
      <div className="absolute right-0 top-1/4 w-full max-w-md h-[400px] bg-gradient-to-tr from-[#F3E5AB]/40 to-transparent rounded-[40px] blur-2xl -z-10 animate-[float_8s_ease-in-out_4s_infinite]"></div>

      {/* 2. MAIN CARD: Tilted Hover Effect */}
      <div 
        className="absolute right-0 top-[10%] w-[85%] max-w-md bg-white p-3 rounded-2xl border border-gray-100 z-10 
        shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] 
        transform transition-transform duration-700 ease-out
        rotate-y-[-5deg] rotate-x-[2deg] group-hover:rotate-0 group-hover:translate-y-0"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Image Container */}
        <div className="relative h-[280px] rounded-xl overflow-hidden">
          <img 
            src={mainImage} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt="Property" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          {/* Top Tag */}
          <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            <span className="text-xs font-semibold text-white tracking-wide">{tagText}</span>
          </div>
        </div>
        
        {/* Card Content */}
        <div className="pt-4 px-2 pb-2">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-[#050505]">{mainTitle}</h3>
              <p className="text-sm text-gray-500">{mainSubtitle}</p>
            </div>
            <div className="bg-[#D4AF37]/10 px-3 py-1 rounded-md">
              <span className="text-[#AA8C2C] font-bold text-sm">{mainBadge}</span>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
            <div 
              className="bg-[#D4AF37] h-1.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* 3. STATS CARD: Glassmorphism + Floating Animation */}
      <div className="absolute bottom-[15%] left-0 sm:left-[5%] w-[70%] max-w-xs p-6 rounded-2xl border border-white/60 z-20 backdrop-blur-xl bg-white/85 shadow-[0_30px_60px_-12px_rgba(5,5,5,0.2)] animate-[float_8s_ease-in-out_infinite]">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#050505] rounded-lg text-[#D4AF37]">
              {/* Icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Performance</p>
              <p className="text-lg font-bold text-[#050505]">{statLabel}</p>
            </div>
          </div>
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AA8C2C] to-[#D4AF37]">{statValue}</span>
        </div>

        {/* Fake Chart Bars */}
        <div className="flex items-end justify-between h-24 gap-2">
          <div className="w-full bg-[#D4AF37]/10 rounded-t-sm h-[40%] hover:h-[45%] transition-all hover:bg-[#D4AF37]/20"></div>
          <div className="w-full bg-[#D4AF37]/20 rounded-t-sm h-[60%] hover:h-[65%] transition-all hover:bg-[#D4AF37]/30"></div>
          <div className="w-full bg-[#D4AF37]/30 rounded-t-sm h-[50%] hover:h-[55%] transition-all hover:bg-[#D4AF37]/40"></div>
          <div className="w-full bg-[#D4AF37]/40 rounded-t-sm h-[80%] hover:h-[85%] transition-all hover:bg-[#D4AF37]/50"></div>
          <div className="w-full bg-linear-to-t from-[#D4AF37] to-[#F3E5AB] rounded-t-sm h-[95%] shadow-[0_0_15px_rgba(212,175,55,0.4)]"></div>
        </div>
      </div>

      {/* 4. NOTIFICATION PILL: Bouncing */}
      <div className="absolute top-[25%] -left-[5%] bg-white py-3 px-5 rounded-full shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce z-30 hidden md:flex" style={{ animationDuration: '4s' }}>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-semibold text-[#050505]">
          {notificationText} <span className="text-green-600">{notificationValue}</span>
        </span>
      </div>

      {/* Global Style for Keyframes (to make component self-contained without tailwind.config) */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}