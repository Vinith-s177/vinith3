import React from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Star, 
  GitFork, 
  Circle,
  Sparkles,
  Search,
  BookOpen
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/readmeContent';

export const RepositoriesView: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Search and filters bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-lg bg-[#161b22] border border-[#30363d]">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8b949e]" />
          <input
            type="text"
            placeholder="Find a repository..."
            className="w-full pl-9 pr-3 py-1.5 rounded-md bg-[#0d1117] border border-[#30363d] text-xs text-[#c9d1d9] placeholder-[#8b949e] focus:outline-none focus:border-purple-500"
            readOnly
          />
        </div>

        <div className="flex items-center gap-2 text-xs text-[#8b949e]">
          <span className="font-semibold text-white">6</span> public repositories
        </div>
      </div>

      {/* Grid of Repository Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {FEATURED_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="p-4 rounded-lg bg-[#0d1117] border border-[#30363d] hover:border-[#8b949e] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <a
                  href={project.githubUrl || project.demoUrl || 'https://github.com/Vinith-s177'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#58a6ff] hover:underline flex items-center gap-1.5"
                >
                  <FolderGit2 className="w-4 h-4 shrink-0 text-[#8b949e]" />
                  <span className="truncate">{project.name}</span>
                </a>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#30363d] text-[#8b949e] bg-[#161b22]">
                  Public
                </span>
              </div>

              <p className="text-xs text-[#8b949e] mt-2.5 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mt-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded bg-purple-950/40 text-purple-300 border border-purple-800/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#21262d] flex items-center justify-between text-xs text-[#8b949e]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="text-[11px]">Software</span>
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Pin</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-purple-400 hover:text-purple-300 flex items-center gap-0.5 font-medium"
                  >
                    Demo <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#58a6ff] hover:underline flex items-center gap-0.5 font-medium"
                  >
                    Repo <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
