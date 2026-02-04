interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="group flex flex-col gap-4 border-t border-[#D4AF37]/20 pt-5 transition-all duration-400 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_-10px_20px_-10px_rgba(212,175,55,0.1)]">
      <div className="h-8 w-8 text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-[#888888]">{subtitle}</p>
    </div>
  );
};