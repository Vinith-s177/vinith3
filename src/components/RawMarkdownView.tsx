import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Download, 
  FileText, 
  ExternalLink, 
  HelpCircle,
  Sparkles,
  Info
} from 'lucide-react';
import { RAW_README_MARKDOWN } from '../data/readmeContent';

interface RawMarkdownViewProps {
  onCopyReadme: () => void;
  isCopied: boolean;
  onDownloadReadme: () => void;
}

export const RawMarkdownView: React.FC<RawMarkdownViewProps> = ({
  onCopyReadme,
  isCopied,
  onDownloadReadme
}) => {
  const [copiedNotification, setCopiedNotification] = useState(false);

  const handleCopy = () => {
    onCopyReadme();
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const lines = RAW_README_MARKDOWN.split('\n');

  return (
    <div className="space-y-4">
      {/* Quick Setup Callout */}
      <div className="p-4 rounded-lg bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-[#161b22] border border-purple-500/30 shadow-md">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-purple-600/20 text-purple-300 border border-purple-500/30 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-white">
              Ready to paste into your GitHub Profile Repository!
            </h3>
            <p className="text-xs text-[#8b949e] mt-1 leading-relaxed">
              1. Open or create the repository <strong className="text-purple-300">Vinith-s177/Vinith-s177</strong> on GitHub.<br />
              2. Upload <strong className="text-purple-300">banner.svg</strong> to the repository root.<br />
              3. Copy the markdown below and paste it into <strong className="text-purple-300">README.md</strong>.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopy}
              className={`px-3.5 py-2 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all shadow-md ${
                isCopied || copiedNotification
                  ? 'bg-emerald-600 text-white'
                  : 'bg-purple-600 hover:bg-purple-500 text-white hover:shadow-purple-500/30'
              }`}
            >
              {isCopied || copiedNotification ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Markdown</span>
                </>
              )}
            </button>
            <button
              onClick={onDownloadReadme}
              className="px-3 py-2 rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] border border-[#30363d] text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download .md</span>
            </button>
          </div>
        </div>
      </div>

      {/* Editor Frame with Line Numbers */}
      <div className="rounded-lg border border-[#30363d] bg-[#0d1117] overflow-hidden shadow-xl">
        <div className="px-4 py-2.5 bg-[#161b22] border-b border-[#30363d] flex items-center justify-between text-xs text-[#8b949e]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-purple-400" />
            <span className="font-mono text-[#c9d1d9]">README.md</span>
            <span>&bull;</span>
            <span>{lines.length} lines</span>
            <span>&bull;</span>
            <span>{RAW_README_MARKDOWN.length} characters</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-purple-400/80 font-mono">UTF-8 • GitHub Flavored Markdown</span>
          </div>
        </div>

        <div className="relative font-mono text-xs overflow-x-auto max-h-[650px] p-4 bg-[#0a0e14]">
          <table className="w-full border-collapse">
            <tbody>
              {lines.map((line, idx) => (
                <tr key={idx} className="hover:bg-[#161b22]/50 group">
                  <td className="py-0.5 pr-4 text-right select-none text-[#484f58] w-12 font-mono text-[11px] group-hover:text-[#8b949e]">
                    {idx + 1}
                  </td>
                  <td className="py-0.5 pl-2 text-[#e6edf3] whitespace-pre font-mono text-[12px] leading-5">
                    {line.startsWith('#') ? (
                      <span className="text-purple-300 font-bold">{line}</span>
                    ) : line.startsWith('<') ? (
                      <span className="text-blue-300">{line}</span>
                    ) : line.startsWith('-') || line.startsWith('|') ? (
                      <span className="text-amber-200">{line}</span>
                    ) : (
                      line
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
