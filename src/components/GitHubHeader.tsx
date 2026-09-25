import React from 'react';
import { 
  BookOpen, 
  FolderGit2, 
  KanbanSquare, 
  Package, 
  Star, 
  Github, 
  Search, 
  Bell, 
  Plus, 
  ExternalLink,
  Code2,
  Sparkles,
  Download,
  Copy,
  Check
} from 'lucide-react';

interface GitHubHeaderProps {
  activeTab: 'overview' | 'repositories' | 'markdown' | 'banner';
  onTabChange: (tab: 'overview' | 'repositories' | 'markdown' | 'banner') => void;
  onCopyReadme: () => void;
  isCopied: boolean;
  onDownloadReadme: () => void;
  onDownloadBanner: () => void;
}

export const GitHubHeader: React.FC<GitHubHeaderProps> = ({
  activeTab,
  onTabChange,
  onCopyReadme,
  isCopied,
  onDownloadReadme,
  onDownloadBanner
}) => {
  return (
    <header className="border-b border-[#30363d] bg-[#161b22] sticky top-0 z-40">
      {/* Top GitHub System Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between text-xs text-[#c9d1d9]">
        <div className="flex items-center gap-3">
          <a 
            href="https://github.com/Vinith-s177" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold text-white hover:text-purple-400 transition-colors"
          >
            <Github className="w-6 h-6 text-white" />
            <span className="hidden sm:inline">Vinith-s177</span>
          </a>
          <span className="text-[#484f58] hidden sm:inline">/</span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] bg-purple-900/40 text-purple-300 border border-purple-700/50">
            Special Profile Repository
          </span>
        </div>

        {/* Global Action Toolbar */}
        <div className="flex items-center gap-2">
          <button
            onClick={onCopyReadme}
            className={`px-3 py-1.5 rounded-md font-semibold flex items-center gap-1.5 transition-all text-xs shadow-sm ${
              isCopied 
                ? 'bg-emerald-600 text-white border border-emerald-500' 
                : 'bg-purple-600 hover:bg-purple-500 text-white border border-purple-500 hover:shadow-purple-500/20'
            }`}
            title="Copy complete README.md directly to paste into GitHub"
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied README!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy README.md</span>
              </>
            )}
          </button>

          <button
            onClick={onDownloadReadme}
            className="hidden md:flex px-2.5 py-1.5 rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] border border-[#30363d] items-center gap-1.5 transition-colors text-xs"
            title="Download README.md file"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>README.md</span>
          </button>

          <button
            onClick={onDownloadBanner}
            className="hidden md:flex px-2.5 py-1.5 rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] border border-[#30363d] items-center gap-1.5 transition-colors text-xs"
            title="Download banner.svg file"
          >
            <Download className="w-3.5 h-3.5 text-purple-400" />
            <span>banner.svg</span>
          </button>

          <a
            href="https://github.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-md bg-[#238636] hover:bg-[#2ea043] text-white font-medium flex items-center gap-1 transition-colors text-xs"
            title="Open GitHub repo creator"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">New Repo</span>
          </a>
        </div>
      </div>

      {/* GitHub Profile Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 overflow-x-auto scrollbar-none border-t border-[#21262d]">
        <button
          onClick={() => onTabChange('overview')}
          className={`flex items-center gap-2 py-3 px-3.5 text-xs font-semibold border-b-2 transition-all shrink-0 ${
            activeTab === 'overview'
              ? 'border-[#f78166] text-white font-bold'
              : 'border-transparent text-[#8b949e] hover:text-[#c9d1d9] hover:border-[#8b949e]'
          }`}
        >
          <BookOpen className="w-4 h-4 text-purple-400" />
          <span>Overview</span>
          <span className="px-1.5 py-0.2 rounded-full bg-[#30363d] text-[10px] text-[#c9d1d9]">
            Live Profile
          </span>
        </button>

        <button
          onClick={() => onTabChange('repositories')}
          className={`flex items-center gap-2 py-3 px-3.5 text-xs font-semibold border-b-2 transition-all shrink-0 ${
            activeTab === 'repositories'
              ? 'border-[#f78166] text-white font-bold'
              : 'border-transparent text-[#8b949e] hover:text-[#c9d1d9] hover:border-[#8b949e]'
          }`}
        >
          <FolderGit2 className="w-4 h-4 text-blue-400" />
          <span>Repositories</span>
          <span className="px-1.5 py-0.2 rounded-full bg-[#30363d] text-[10px] text-[#c9d1d9]">
            6
          </span>
        </button>

        <button
          onClick={() => onTabChange('markdown')}
          className={`flex items-center gap-2 py-3 px-3.5 text-xs font-semibold border-b-2 transition-all shrink-0 ${
            activeTab === 'markdown'
              ? 'border-[#f78166] text-white font-bold'
              : 'border-transparent text-[#8b949e] hover:text-[#c9d1d9] hover:border-[#8b949e]'
          }`}
        >
          <Code2 className="w-4 h-4 text-emerald-400" />
          <span>Raw Markdown & Editor</span>
          <span className="px-1.5 py-0.2 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/40 text-[10px]">
            Direct Copy
          </span>
        </button>

        <button
          onClick={() => onTabChange('banner')}
          className={`flex items-center gap-2 py-3 px-3.5 text-xs font-semibold border-b-2 transition-all shrink-0 ${
            activeTab === 'banner'
              ? 'border-[#f78166] text-white font-bold'
              : 'border-transparent text-[#8b949e] hover:text-[#c9d1d9] hover:border-[#8b949e]'
          }`}
        >
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>Banner Studio</span>
          <span className="px-1.5 py-0.2 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/40 text-[10px]">
            SVG Vector
          </span>
        </button>
      </div>
    </header>
  );
};
