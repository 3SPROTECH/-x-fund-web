import type { ProjectData } from '@/data/home/projects';
import React from 'react';
import { ProjectRow } from './ProjectRow';



interface ProjectShowcaseListProps {
  projects: ProjectData[];
}

const ProjectShowcaseList: React.FC<ProjectShowcaseListProps> = ({ projects }) => {
  // We duplicate the data array to create a seamless infinite scroll loop.
  // The CSS animation moves -50% (the height of one full list), then snaps back to 0.
  const displayProjects = [...projects, ...projects];

  return (
    <div className="relative h-100 w-full bg-white rounded-xl  border drop-shadow-xl border-gray-100 overflow-hidden">
      
      {/* Header of Widget */}
      <div className="absolute top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-20 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-xs font-bold text-onyx uppercase tracking-wide">
            Dernières Réalisations
          </span>
        </div>
        <span className="text-[10px] text-gray-400 font-mono tracking-widest">
          RÉSEAU X-FUND
        </span>
      </div>

      {/* Scrolling List Container */}
      {/* mask-image is used to fade the top and bottom of the scroll area */}
      <div 
        className="h-full w-full relative pt-16"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="absolute w-full animate-scroll-up px-6">
          <div className="flex flex-col gap-2">
            {displayProjects.map((project, index) => (
              <ProjectRow 
                key={`${project.id}-${index}`} 
                project={project} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Gradient Fade at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
    </div>
  );
};


export default ProjectShowcaseList;