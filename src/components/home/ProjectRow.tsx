import type { ProjectData } from "@/data/home/projects";



export const ProjectRow: React.FC<{ project: ProjectData }> = ({ project }) => {
  const isFullyFunded = project.financedPercentage >= 100;

  return (
    <div className="flex items-center gap-4 p-3 rounded-sm bg-gray-50/50 border border-gray-100 hover:border-gold/30 transition-colors group cursor-default">
      {/* Investor Count Circle */}
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-colors group-hover:bg-gold group-hover:text-onyx
        ${isFullyFunded ? 'bg-onyx text-gold' : 'bg-gold/10 text-gold-dark'}`}>
        {project.investorsCount}
      </div>

      {/* Details */}
      <div className="flex-1">
        <p className="text-sm font-semibold text-onyx">{project.title}</p>
        <p className="text-xs text-gray-500">{project.location}</p>
      </div>

      {/* Financials */}
      <div className="text-right">
        <p className={`text-sm font-bold ${isFullyFunded ? 'text-gold-dark' : 'text-onyx'}`}>
          {project.price}
        </p>
        <p className={`text-[10px] font-medium ${isFullyFunded ? 'text-gold-dark' : 'text-gray-400'}`}>
          Financé à {project.financedPercentage}%
        </p>
      </div>
    </div>
  );
};