import React, { useState } from 'react';
import { GitHubHeader } from './components/GitHubHeader';
import { GitHubSidebar } from './components/GitHubSidebar';
import { ReadmeRenderedView } from './components/ReadmeRenderedView';
import { RepositoriesView } from './components/RepositoriesView';
import { RawMarkdownView } from './components/RawMarkdownView';
import { BannerStudioView } from './components/BannerStudioView';
import { RAW_README_MARKDOWN } from './data/readmeContent';
import { Check, Sparkles, AlertCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'repositories' | 'markdown' | 'banner'>('overview');
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopyReadme = async () => {
    try {
      await navigator.clipboard.writeText(RAW_README_MARKDOWN);
      setIsCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setIsCopied(false);
        setShowToast(false);
      }, 3000);
    } catch {
      // Fallback for environments where navigator.clipboard might be restricted
      const textArea = document.createElement('textarea');
      textArea.value = RAW_README_MARKDOWN;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setIsCopied(true);
        setShowToast(true);
        setTimeout(() => {
          setIsCopied(false);
          setShowToast(false);
        }, 3000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
      document.body.removeChild(textArea);
    }
  };

  const handleDownloadReadme = () => {
    const element = document.createElement('a');
    const file = new Blob([RAW_README_MARKDOWN], { type: 'text/markdown;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadBanner = async () => {
    try {
      const response = await fetch('/banner.svg');
      const blob = await response.blob();
      const element = document.createElement('a');
      element.href = URL.createObjectURL(blob);
      element.download = 'banner.svg';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } catch (e) {
      console.error('Could not download banner', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col font-sans selection:bg-purple-900 selection:text-white">
      {/* Top GitHub Bar & Tabs */}
      <GitHubHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onCopyReadme={handleCopyReadme}
        isCopied={isCopied}
        onDownloadReadme={handleDownloadReadme}
        onDownloadBanner={handleDownloadBanner}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Banner Notice on Special Profile Repo */}
        <div className="mb-6 p-3 rounded-lg bg-[#161b22]/90 border border-[#30363d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#8b949e]">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            <span>
              Target Profile: <strong className="text-white">github.com/Vinith-s177</strong> &bull; 3rd Year B.E. CSE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('banner')}
              className="text-purple-400 hover:text-purple-300 font-medium hover:underline text-xs flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inspect Hero Banner</span>
            </button>
            <span className="text-[#30363d]">&bull;</span>
            <button
              onClick={() => setActiveTab('markdown')}
              className="text-emerald-400 hover:text-emerald-300 font-medium hover:underline text-xs"
            >
              View Raw Markdown
            </button>
          </div>
        </div>

        {/* Tab Content Rendering */}
        {activeTab === 'overview' && (
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Authentic GitHub Left Sidebar */}
            <GitHubSidebar />

            {/* Authentic GitHub Right Main Area */}
            <div className="flex-1 min-w-0 w-full">
              <ReadmeRenderedView
                onCopyReadme={handleCopyReadme}
                isCopied={isCopied}
              />
            </div>
          </div>
        )}

        {activeTab === 'repositories' && (
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <GitHubSidebar />
            <div className="flex-1 min-w-0 w-full">
              <RepositoriesView />
            </div>
          </div>
        )}

        {activeTab === 'markdown' && (
          <div className="max-w-5xl mx-auto">
            <RawMarkdownView
              onCopyReadme={handleCopyReadme}
              isCopied={isCopied}
              onDownloadReadme={handleDownloadReadme}
            />
          </div>
        )}

        {activeTab === 'banner' && (
          <div className="max-w-5xl mx-auto">
            <BannerStudioView
              onDownloadBanner={handleDownloadBanner}
            />
          </div>
        )}
      </main>

      {/* Floating Copy Feedback Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-lg bg-emerald-600 text-white shadow-2xl border border-emerald-400/40 text-xs font-semibold animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Check className="w-4 h-4" />
          <span>Full README.md copied! Ready to paste into GitHub.</span>
        </div>
      )}

      {/* Quiet Footer */}
      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#8b949e]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Portfolio &amp; README Suite for <strong className="text-[#c9d1d9]">Vinith S (@Vinith-s177)</strong>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Vinith-s177"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/vinith-s-982716390/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/vini_2006/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LeetCode
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
