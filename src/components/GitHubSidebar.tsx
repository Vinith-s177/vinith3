import React from 'react';
import { 
  Users, 
  MapPin, 
  Link as LinkIcon, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Code,
  ExternalLink,
  Github,
  Mail
} from 'lucide-react';
import { PROFILE_INFO } from '../data/readmeContent';

export const GitHubSidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-72 shrink-0 space-y-4">
      {/* Profile Avatar and Name */}
      <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4">
        <div className="relative group">
          <div className="w-24 h-24 lg:w-64 lg:h-64 rounded-full bg-gradient-to-tr from-purple-700 via-indigo-600 to-pink-500 p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-[#0d1117] flex flex-col items-center justify-center text-white border-2 border-purple-500/30">
              <span className="text-3xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 via-indigo-200 to-pink-300 bg-clip-text text-transparent">
                VS
              </span>
              <span className="text-[10px] lg:text-xs text-purple-300/80 font-mono mt-1">
                Vinith S
              </span>
            </div>
          </div>
          <div className="absolute bottom-1 right-1 lg:bottom-4 lg:right-4 w-7 h-7 rounded-full bg-[#161b22] border-2 border-[#30363d] flex items-center justify-center text-amber-400 text-xs shadow-md" title="Status: Learning & Building">
            🎯
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight">
            {PROFILE_INFO.name}
          </h1>
          <p className="text-sm lg:text-base text-[#8b949e] font-normal">
            {PROFILE_INFO.username}
          </p>
          <div className="mt-2 text-xs text-purple-300/90 font-medium inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Software Engineer in the Making
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-[#c9d1d9] leading-relaxed pt-1">
        3rd Year B.E. Computer Science Engineering Student. Passionate about Java, DSA, AI/GenAI, and Cloud. Building practical software projects.
      </p>

      {/* Action Button: Edit Profile / Follow */}
      <div className="pt-1">
        <a
          href={PROFILE_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-1.5 px-3 rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] hover:text-white border border-[#30363d] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
        >
          <Github className="w-3.5 h-3.5" />
          View on GitHub
        </a>
      </div>

      {/* Follower Stats */}
      <div className="flex items-center gap-4 text-xs text-[#8b949e] pt-1">
        <div className="flex items-center gap-1 hover:text-purple-400 transition-colors cursor-pointer">
          <Users className="w-3.5 h-3.5" />
          <span className="font-semibold text-[#c9d1d9]">Connect</span>
          <span>&bull; Open for Opportunities</span>
        </div>
      </div>

      {/* Metadata & Links */}
      <div className="space-y-2 text-xs text-[#8b949e] border-t border-[#21262d] pt-3">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 shrink-0 text-purple-400" />
          <span className="text-[#c9d1d9] truncate">3rd Year B.E. CSE</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 shrink-0 text-slate-400" />
          <span className="text-[#c9d1d9]">India</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 shrink-0 text-rose-400" />
          <a 
            href={`mailto:${PROFILE_INFO.email}`}
            className="text-[#c9d1d9] hover:underline hover:text-white truncate"
          >
            {PROFILE_INFO.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 shrink-0 text-indigo-400" />
          <span className="text-[#c9d1d9] truncate">Microsoft Student Ambassador</span>
        </div>
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 shrink-0 text-amber-400" />
          <a 
            href={PROFILE_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 hover:underline flex items-center gap-1 truncate"
          >
            LeetCode Profile <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <LinkIcon className="w-4 h-4 shrink-0 text-blue-400" />
          <a 
            href={PROFILE_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center gap-1 truncate"
          >
            LinkedIn Profile <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>

      {/* Achievements / Credentials Badges */}
      <div className="border-t border-[#21262d] pt-3">
        <h3 className="text-xs font-semibold text-[#c9d1d9] mb-2 uppercase tracking-wider">
          Verified Learning
        </h3>
        <div className="flex flex-wrap gap-1.5">
          <span className="text-[11px] px-2 py-0.5 rounded bg-[#161b22] border border-[#30363d] text-amber-300">
            Kaggle Python Coder
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded bg-[#161b22] border border-[#30363d] text-orange-300">
            Infosys Java
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded bg-[#161b22] border border-[#30363d] text-blue-300">
            Salesforce Agentforce
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded bg-[#161b22] border border-[#30363d] text-emerald-300">
            GCP Gen AI Academy
          </span>
        </div>
      </div>

      {/* Organizations / Initiatives */}
      <div className="border-t border-[#21262d] pt-3">
        <h3 className="text-xs font-semibold text-[#c9d1d9] mb-2 uppercase tracking-wider">
          Community
        </h3>
        <a 
          href={PROFILE_INFO.msAmbassadorLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 rounded-lg bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] transition-colors group"
        >
          <div className="w-6 h-6 rounded bg-[#0078D4]/20 border border-[#0078D4]/50 flex items-center justify-center text-[#0078D4] text-xs font-bold">
            MS
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-[#c9d1d9] group-hover:text-white truncate">
              Microsoft Student Ambassadors
            </p>
            <p className="text-[10px] text-[#8b949e] truncate">
              Copilot Learning Contributor
            </p>
          </div>
          <ExternalLink className="w-3 h-3 text-[#8b949e] group-hover:text-[#58a6ff]" />
        </a>
      </div>
    </aside>
  );
};
