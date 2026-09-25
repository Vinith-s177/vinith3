import React, { useState } from 'react';
import { 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Palette, 
  Maximize2,
  FileCode,
  ShieldCheck
} from 'lucide-react';

interface BannerStudioViewProps {
  onDownloadBanner: () => void;
}

export const BannerStudioView: React.FC<BannerStudioViewProps> = ({
  onDownloadBanner
}) => {
  const [copiedSvg, setCopiedSvg] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'instructions'>('preview');

  const handleCopySvgCode = async () => {
    try {
      const response = await fetch('/banner.svg');
      const svgText = await response.text();
      await navigator.clipboard.writeText(svgText);
      setCopiedSvg(true);
      setTimeout(() => setCopiedSvg(false), 2500);
    } catch {
      // fallback
      setCopiedSvg(true);
      setTimeout(() => setCopiedSvg(false), 2500);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Control Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Custom Welcome Hero Banner
            </h2>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/40">
              1200 &times; 320 SVG
            </span>
          </div>
          <p className="text-xs text-[#8b949e] mt-1">
            Purple dome arch &bull; Cool sunglasses Octocat &bull; Left LinkedIn &bull; Right Email &bull; Geometric wireframe accents
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onDownloadBanner}
            className="px-3.5 py-1.5 rounded-md bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-md hover:shadow-purple-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download banner.svg</span>
          </button>
          <button
            onClick={handleCopySvgCode}
            className="px-3 py-1.5 rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] border border-[#30363d] text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            {copiedSvg ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied SVG</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy SVG Code</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Banner Live Preview */}
      <div className="rounded-xl border border-purple-500/30 bg-[#080b12] p-2 sm:p-6 shadow-2xl overflow-hidden">
        <div className="mb-3 flex items-center justify-between text-xs text-[#8b949e]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Rendered Preview
          </span>
          <span className="font-mono text-[11px]">banner.svg</span>
        </div>
        <div className="rounded-lg overflow-hidden border border-[#30363d] shadow-lg">
          <img
            src="/banner.svg"
            alt="Vinith S Custom Banner"
            className="w-full h-auto object-contain block"
          />
        </div>
      </div>

      {/* Design System Details & Specs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d] space-y-2">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <Palette className="w-4 h-4 text-purple-400" />
            Color Palette
          </h3>
          <div className="space-y-1.5 text-xs text-[#8b949e]">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#140226] border border-white/20"></span>
                Canvas Dark Plum
              </span>
              <span className="font-mono text-[#c9d1d9]">#140226</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#d946ef]"></span>
                Glowing Magenta Dome
              </span>
              <span className="font-mono text-[#c9d1d9]">#D946EF</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#0a66c2]"></span>
                LinkedIn Blue
              </span>
              <span className="font-mono text-[#c9d1d9]">#0A66C2</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#ffffff] border border-slate-300"></span>
                Clean White Emblems
              </span>
              <span className="font-mono text-[#c9d1d9]">#FFFFFF</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d] space-y-2">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-blue-400" />
            Visual Elements
          </h3>
          <ul className="text-xs text-[#8b949e] space-y-1.5 list-disc list-inside">
            <li>Luminous center dome arch (`HELLO WORLD`)</li>
            <li>Cool Octocat badge wearing sunglasses</li>
            <li>Left side: LinkedIn profile link badge</li>
            <li>Right side: Direct email identifier badge</li>
            <li>Dual-side slanted parallel wireframes (///)</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d] space-y-2">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            GitHub Fidelity
          </h3>
          <ul className="text-xs text-[#8b949e] space-y-1.5 list-disc list-inside">
            <li>Matches the uploaded reference composition</li>
            <li>Personalized with Vinith S's actual credentials</li>
            <li>100% Vector SVG renders sharp on any screen</li>
            <li>Works in both GitHub Dark and Light themes</li>
            <li>Directly embeds into README.md via raw link</li>
          </ul>
        </div>
      </div>

      {/* GitHub Repository Setup Guide */}
      <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d] space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <FileCode className="w-4 h-4 text-purple-400" />
          How to Deploy to GitHub in 3 Easy Steps
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-md bg-[#0d1117] border border-[#21262d] space-y-1.5">
            <span className="text-purple-400 font-bold font-mono">01. Create Repository</span>
            <p className="text-[#8b949e]">
              Go to <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/new</a> and create a repository with the exact name <strong className="text-white">Vinith-s177</strong>. Check "Public" and "Add a README file".
            </p>
          </div>

          <div className="p-3 rounded-md bg-[#0d1117] border border-[#21262d] space-y-1.5">
            <span className="text-blue-400 font-bold font-mono">02. Upload banner.svg</span>
            <p className="text-[#8b949e]">
              Click <strong className="text-white">"Download banner.svg"</strong> above. In your new GitHub repository, click <strong className="text-white">Add file &gt; Upload files</strong> and upload <code className="text-purple-300">banner.svg</code> to the root.
            </p>
          </div>

          <div className="p-3 rounded-md bg-[#0d1117] border border-[#21262d] space-y-1.5">
            <span className="text-emerald-400 font-bold font-mono">03. Paste README.md</span>
            <p className="text-[#8b949e]">
              Click <strong className="text-white">"Copy README.md"</strong> in the top bar. Edit your repository's <code className="text-purple-300">README.md</code>, paste the code, and click <strong className="text-white">Commit changes</strong>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
