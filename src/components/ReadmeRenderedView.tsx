import React from 'react';
import { 
  Terminal, 
  ExternalLink, 
  Github, 
  Code, 
  Layers, 
  Cpu, 
  Sparkles, 
  Cloud, 
  FolderGit2, 
  Award, 
  Globe, 
  BookOpen, 
  Copy, 
  Check, 
  Pencil,
  Eye,
  Rocket,
  CheckCircle2
} from 'lucide-react';
import { FEATURED_PROJECTS, PROFILE_INFO } from '../data/readmeContent';

interface ReadmeRenderedViewProps {
  onCopyReadme: () => void;
  isCopied: boolean;
}

interface InteractiveBadgeProps {
  src: string;
  alt: string;
  href?: string;
  glow?: 'purple' | 'amber' | 'blue' | 'emerald' | 'cyan' | 'pink' | 'orange' | 'yellow';
}

const GLOW_MAP: Record<string, string> = {
  purple: 'hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] hover:brightness-110',
  amber: 'hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.7)] hover:brightness-110',
  orange: 'hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.7)] hover:brightness-110',
  blue: 'hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.7)] hover:brightness-110',
  cyan: 'hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.7)] hover:brightness-110',
  emerald: 'hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.7)] hover:brightness-110',
  pink: 'hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.7)] hover:brightness-110',
  yellow: 'hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.7)] hover:brightness-110',
};

const InteractiveBadge: React.FC<InteractiveBadgeProps> = ({
  src,
  alt,
  href,
  glow = 'purple'
}) => {
  const badgeElement = (
    <span
      className={`inline-block transition-all duration-200 ease-out transform hover:-translate-y-0.5 hover:scale-[1.03] active:translate-y-0 active:scale-100 cursor-pointer rounded-[3px] select-none ${GLOW_MAP[glow] || GLOW_MAP.purple}`}
    >
      <img
        src={src}
        alt={alt}
        className="block rounded-[3px] transition-transform duration-200"
      />
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {badgeElement}
      </a>
    );
  }

  return badgeElement;
};

export const ReadmeRenderedView: React.FC<ReadmeRenderedViewProps> = ({
  onCopyReadme,
  isCopied
}) => {
  return (
    <div className="space-y-6">
      {/* GitHub Repository README Container Frame */}
      <div className="rounded-lg border border-[#30363d] bg-[#0d1117] overflow-hidden shadow-2xl">
        {/* GitHub README Header Bar */}
        <div className="px-4 py-3 bg-[#161b22] border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#c9d1d9]">
            <BookOpen className="w-4 h-4 text-[#8b949e]" />
            <span>Vinith-s177</span>
            <span className="text-[#8b949e]">/</span>
            <span className="text-white">README.md</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onCopyReadme}
              className="text-xs px-2.5 py-1 rounded bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] border border-[#30363d] flex items-center gap-1.5 transition-colors"
              title="Copy RAW Markdown"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy raw</span>
                </>
              )}
            </button>
            <div className="text-xs text-[#8b949e] flex items-center gap-1 pl-2 border-l border-[#30363d]">
              <Pencil className="w-3.5 h-3.5" />
              <span>Preview</span>
            </div>
          </div>
        </div>

        {/* Inner GitHub Markdown Body */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-[#c9d1d9] text-sm leading-relaxed">
          
          {/* ===================================================
              1. HERO BANNER
              =================================================== */}
          <div className="relative rounded-xl overflow-hidden border border-purple-500/30 shadow-2xl bg-[#080b12] group">
            <img 
              src="/banner.svg" 
              alt="Vinith S - Software Engineer in the Making"
              className="w-full h-auto object-cover block"
            />
            {/* Subtle glow edge on hover */}
            <div className="absolute inset-0 border border-purple-500/20 rounded-xl pointer-events-none group-hover:border-purple-500/40 transition-colors"></div>
          </div>

          {/* Social Badges & Visitor Counter */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <InteractiveBadge 
              href={PROFILE_INFO.github}
              src="https://img.shields.io/badge/GitHub-Vinith--s177-181717?style=for-the-badge&logo=github&logoColor=white" 
              alt="GitHub" 
              glow="purple"
            />
            <InteractiveBadge 
              href={PROFILE_INFO.linkedin}
              src="https://img.shields.io/badge/LinkedIn-Vinith_S-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" 
              alt="LinkedIn" 
              glow="blue"
            />
            <InteractiveBadge 
              href={`mailto:${PROFILE_INFO.email}`}
              src="https://img.shields.io/badge/Email-gkthana506%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" 
              alt="Email" 
              glow="orange"
            />
            <InteractiveBadge 
              href={PROFILE_INFO.leetcode}
              src="https://img.shields.io/badge/LeetCode-vini__2006-FFA116?style=for-the-badge&logo=leetcode&logoColor=white" 
              alt="LeetCode" 
              glow="amber"
            />
            <InteractiveBadge 
              src="https://komarev.com/ghpvc/?username=Vinith-s177&color=7c3aed&style=for-the-badge&label=PROFILE+VIEWS" 
              alt="Profile Views" 
              glow="purple"
            />
          </div>

          <hr className="border-[#21262d]" />

          {/* ===================================================
              2. INTRODUCTION SECTION
              =================================================== */}
          <section className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
              <span>👋</span> Hi, I'm Vinith S
            </h1>
            <p className="text-base text-[#c9d1d9] leading-relaxed">
              I am a <strong className="text-white font-semibold">3rd Year B.E. Computer Science Engineering Student</strong> passionate about software engineering, building practical software solutions, and continuously improving my algorithmic problem-solving skills.
            </p>
            <p className="text-[#8b949e] leading-relaxed">
              I am dedicated to writing clean, maintainable code and understanding core engineering principles from the ground up. My primary focus is currently on mastering <strong className="text-[#c9d1d9]">Java</strong> and <strong className="text-[#c9d1d9]">Data Structures & Algorithms</strong>, while actively expanding my hands-on knowledge in <strong className="text-[#c9d1d9]">backend development</strong>, <strong className="text-[#c9d1d9]">Generative AI</strong>, and <strong className="text-[#c9d1d9]">cloud technologies</strong>. I am eager to apply my skills to real-world software engineering challenges and industry opportunities.
            </p>
          </section>

          <hr className="border-[#21262d]" />

          {/* ===================================================
              3. PROFILE HIGHLIGHTS
              =================================================== */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">⚡</span> Profile Highlights
            </h2>
            <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d] font-mono text-xs sm:text-sm text-[#e6edf3] space-y-1.5 shadow-inner">
              <div className="flex items-center gap-2">
                <span className="text-purple-400">🎓</span>
                <span>3rd Year B.E. Computer Science Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">💻</span>
                <span>Java & Backend Development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">🧩</span>
                <span>Data Structures & Algorithms</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-pink-400">🤖</span>
                <span>AI / Generative AI</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">☁️</span>
                <span>Cloud Computing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">🚀</span>
                <span>Building Practical Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-400">📚</span>
                <span>Continuous Learning</span>
              </div>
            </div>
          </section>

          <hr className="border-[#21262d]" />

          {/* ===================================================
              4. CURRENTLY LEARNING
              =================================================== */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400">🚀</span> Currently Learning
              </h2>
              <span className="text-[11px] text-[#8b949e] italic hidden sm:inline">
                Hover badges for preview glow
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <InteractiveBadge 
                src="https://img.shields.io/badge/Java-Problem_Solving-ED8B00?style=flat-square&logo=openjdk&logoColor=white" 
                alt="Java" 
                glow="orange"
              />
              <InteractiveBadge 
                src="https://img.shields.io/badge/DSA-Data_Structures_%26_Algorithms-FFA116?style=flat-square&logo=leetcode&logoColor=white" 
                alt="DSA" 
                glow="amber"
              />
              <InteractiveBadge 
                src="https://img.shields.io/badge/Python-Foundations_%26_AI-3776AB?style=flat-square&logo=python&logoColor=white" 
                alt="Python" 
                glow="blue"
              />
              <InteractiveBadge 
                src="https://img.shields.io/badge/AI_%2F_ML-Machine_Learning-FF6F00?style=flat-square&logo=tensorflow&logoColor=white" 
                alt="AI/ML" 
                glow="orange"
              />
              <InteractiveBadge 
                src="https://img.shields.io/badge/Generative_AI-LLMs_%26_Agents-8A2BE2?style=flat-square&logo=openai&logoColor=white" 
                alt="Generative AI" 
                glow="purple"
              />
              <InteractiveBadge 
                src="https://img.shields.io/badge/Backend-REST_APIs_%26_Architecture-00599C?style=flat-square&logo=springboot&logoColor=white" 
                alt="Backend" 
                glow="cyan"
              />
              <InteractiveBadge 
                src="https://img.shields.io/badge/Cloud-GCP_%26_Azure-4285F4?style=flat-square&logo=googlecloud&logoColor=white" 
                alt="Cloud" 
                glow="blue"
              />
            </div>

            <ul className="space-y-2 text-[#8b949e] list-disc list-inside">
              <li>
                <strong className="text-[#c9d1d9]">☕ Java & DSA:</strong> Practicing algorithmic problem solving and writing clean object-oriented code.
              </li>
              <li>
                <strong className="text-[#c9d1d9]">🐍 Python & AI:</strong> Exploring foundational machine learning workflows and Generative AI applications.
              </li>
              <li>
                <strong className="text-[#c9d1d9]">🌐 Backend Engineering:</strong> Understanding RESTful architecture, relational schemas, and application logic.
              </li>
              <li>
                <strong className="text-[#c9d1d9]">☁️ Cloud Computing:</strong> Exploring cloud infrastructure principles across Google Cloud and Microsoft Azure.
              </li>
            </ul>
          </section>

          <hr className="border-[#21262d]" />

          {/* ===================================================
              5. TECH STACK
              =================================================== */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>🛠️</span> Tech Stack
              </h2>
              <span className="text-[11px] text-[#8b949e] italic hidden sm:inline">
                Interactive glowing badges
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" 
                    alt="Java" 
                    glow="orange"
                  />
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" 
                    alt="Python" 
                    glow="blue"
                  />
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" 
                    alt="JavaScript" 
                    glow="yellow"
                  />
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" 
                    alt="HTML5" 
                    glow="orange"
                  />
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" 
                    alt="CSS3" 
                    glow="cyan"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2">
                  Backend & Databases
                </h3>
                <div className="flex flex-wrap gap-2">
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/REST_APIs-005571?style=for-the-badge&logo=fastapi&logoColor=white" 
                    alt="REST APIs" 
                    glow="cyan"
                  />
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" 
                    alt="Spring Boot" 
                    glow="emerald"
                  />
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" 
                    alt="MySQL" 
                    glow="blue"
                  />
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" 
                    alt="MongoDB" 
                    glow="emerald"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2">
                  Artificial Intelligence
                </h3>
                <div className="flex flex-wrap gap-2">
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/Generative_AI-8A2BE2?style=for-the-badge&logo=sparkles&logoColor=white" 
                    alt="Generative AI" 
                    glow="purple"
                  />
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/AI%20%2F%20ML-FF6F00?style=for-the-badge&logo=scikitlearn&logoColor=white" 
                    alt="AI / ML" 
                    glow="orange"
                  />
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/AI_Agents-6366F1?style=for-the-badge&logo=probot&logoColor=white" 
                    alt="AI Agents" 
                    glow="purple"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2">
                  Cloud & Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" 
                    alt="Google Cloud" 
                    glow="blue"
                  />
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/Microsoft_Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white" 
                    alt="Microsoft Azure" 
                    glow="cyan"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2">
                  Developer Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" 
                    alt="Git" 
                    glow="orange"
                  />
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" 
                    alt="GitHub" 
                    glow="purple"
                  />
                  <InteractiveBadge 
                    src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" 
                    alt="VS Code" 
                    glow="blue"
                  />
                </div>
              </div>
            </div>
          </section>

          <hr className="border-[#21262d]" />

          {/* ===================================================
              6. FEATURED PROJECTS
              =================================================== */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>📌</span> Featured Projects
            </h2>

            {/* GitHub-style table view */}
            <div className="overflow-x-auto rounded-lg border border-[#30363d]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#161b22] text-[#8b949e] border-b border-[#30363d]">
                    <th className="py-2.5 px-3 font-semibold">Project</th>
                    <th className="py-2.5 px-3 font-semibold">Description</th>
                    <th className="py-2.5 px-3 font-semibold">Tech Stack</th>
                    <th className="py-2.5 px-3 font-semibold text-right">Links</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#21262d]">
                  {FEATURED_PROJECTS.map((project) => (
                    <tr key={project.id} className="hover:bg-[#161b22]/60 transition-colors">
                      <td className="py-3 px-3 font-semibold text-white whitespace-nowrap">
                        {project.name}
                      </td>
                      <td className="py-3 px-3 text-[#8b949e] max-w-sm">
                        {project.description}
                      </td>
                      <td className="py-3 px-3 text-[#c9d1d9] whitespace-nowrap">
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.map((tech, idx) => (
                            <span key={idx} className="px-1.5 py-0.5 rounded bg-[#21262d] text-[#8b949e] text-[10px]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-3 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-1 rounded bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-700/50 text-[11px] font-medium inline-flex items-center gap-1"
                            >
                              🚀 Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-1 rounded bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] border border-[#30363d] text-[11px] font-medium inline-flex items-center gap-1"
                            >
                              💻 Repo
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Visual Bento Cards for Top Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d] hover:border-purple-500/50 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-base flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      PlaceMate AI
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/40">
                      Live App
                    </span>
                  </div>
                  <p className="text-xs text-[#8b949e] mt-2 leading-relaxed">
                    AI-powered career and placement preparation platform with features around DSA practice, resume analysis, mock interview preparation, and career development.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#21262d] flex items-center justify-between">
                  <span className="text-[11px] text-[#8b949e]">AI • GenAI • DSA Prep</span>
                  <a
                    href="https://placemate-vqgxetcj.manus.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-1"
                  >
                    Launch Demo <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d] hover:border-blue-500/50 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-base flex items-center gap-1.5">
                      <FolderGit2 className="w-4 h-4 text-blue-400" />
                      DayFlow HRMS
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/40">
                      Repository
                    </span>
                  </div>
                  <p className="text-xs text-[#8b949e] mt-2 leading-relaxed">
                    Human Resource Management System project streamlining workforce data, employee attendance, and operational company workflows.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#21262d] flex items-center justify-between">
                  <span className="text-[11px] text-[#8b949e]">Full-Stack • HR Architecture</span>
                  <a
                    href="https://github.com/Vinith-s177/dayflow-hrms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
                  >
                    View Code <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-[#21262d]" />

          {/* ===================================================
              7. PROBLEM SOLVING (DSA)
              =================================================== */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">🧩</span> Problem Solving
            </h2>
            <p className="text-[#8b949e] leading-relaxed">
              I am actively strengthening my <strong className="text-[#c9d1d9]">Data Structures & Algorithms</strong> skills using <strong className="text-[#c9d1d9]">Java</strong> and practicing coding problems to build intuitive algorithmic thinking and rigorous problem-solving discipline.
            </p>

            <div className="pt-1">
              <InteractiveBadge
                href={PROFILE_INFO.leetcode}
                src="https://img.shields.io/badge/LeetCode-Profile_vini__2006-FFA116?style=for-the-badge&logo=leetcode&logoColor=white" 
                alt="LeetCode Profile vini_2006" 
                glow="amber"
              />
            </div>

            <ul className="space-y-1.5 text-xs text-[#8b949e] list-disc list-inside pt-1">
              <li><strong className="text-[#c9d1d9]">Core Focus Areas:</strong> Arrays, Strings, Linked Lists, Stacks & Queues, Trees, Recursion, Sorting & Searching algorithms.</li>
              <li><strong className="text-[#c9d1d9]">Language of Choice:</strong> Java</li>
            </ul>
          </section>

          <hr className="border-[#21262d]" />

          {/* ===================================================
              8. CERTIFICATIONS & LEARNING
              =================================================== */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-purple-400">🏆</span> Certifications & Learning
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              <div className="p-3 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center gap-2.5 hover:border-purple-500/40 hover:shadow-md hover:shadow-purple-500/10 transition-all">
                <span className="text-lg">🏅</span>
                <span className="text-xs font-semibold text-white">Kaggle Python Coder</span>
              </div>
              <div className="p-3 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center gap-2.5 hover:border-orange-500/40 hover:shadow-md hover:shadow-orange-500/10 transition-all">
                <span className="text-lg">🏅</span>
                <span className="text-xs font-semibold text-white">Infosys Java</span>
              </div>
              <div className="p-3 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center gap-2.5 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/10 transition-all">
                <span className="text-lg">🏅</span>
                <span className="text-xs font-semibold text-white">Salesforce Agentforce</span>
              </div>
              <div className="p-3 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center gap-2.5 hover:border-cyan-500/40 hover:shadow-md hover:shadow-cyan-500/10 transition-all">
                <span className="text-lg">🏅</span>
                <span className="text-xs font-semibold text-white">Google Cloud Gen AI Academy APAC 2026</span>
              </div>
              <div className="p-3 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center gap-2.5 hover:border-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/10 transition-all">
                <span className="text-lg">🏅</span>
                <span className="text-xs font-semibold text-white">Microsoft Student Ambassadors</span>
              </div>
            </div>
          </section>

          <hr className="border-[#21262d]" />

          {/* ===================================================
              9. MICROSOFT STUDENT AMBASSADORS
              =================================================== */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-blue-400">🌐</span> Microsoft Student Ambassadors
            </h2>
            <p className="text-[#8b949e] leading-relaxed">
              I am an active contributor within the <strong className="text-[#c9d1d9]">Microsoft Student Ambassadors</strong> program, engaging with student developer communities and learning how to leverage intelligent developer tools and generative AI effectively.
            </p>
            <p className="text-xs text-[#8b949e]">
              Explore Microsoft Copilot and developer learning resources through my contributor link:
            </p>
            <div>
              <InteractiveBadge
                href={PROFILE_INFO.msAmbassadorLink}
                src="https://img.shields.io/badge/Microsoft_Copilot-Learning_Resources-0078D4?style=for-the-badge&logo=microsoft&logoColor=white" 
                alt="Microsoft Copilot Learning" 
                glow="cyan"
              />
            </div>
          </section>

          <hr className="border-[#21262d]" />

          {/* ===================================================
              10. GITHUB ACTIVITY & STATS
              =================================================== */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">📊</span> GitHub Activity & Statistics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden border border-[#30363d] bg-[#161b22] p-2 flex items-center justify-center">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=Vinith-s177&show_icons=true&theme=tokyonight&hide_border=true&bg_color=161b22&title_color=a855f7&text_color=c9d1d9&icon_color=38bdf8" 
                  alt="Vinith S GitHub Stats" 
                  className="w-full h-auto max-w-md"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback container if external widget rate-limited
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="p-6 text-center text-xs text-[#8b949e]">
                          <p class="font-semibold text-white mb-1">GitHub Statistics Widget</p>
                          <p>Contributions & Activity live on <a href="https://github.com/Vinith-s177" class="text-purple-400 underline">github.com/Vinith-s177</a></p>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              <div className="rounded-lg overflow-hidden border border-[#30363d] bg-[#161b22] p-2 flex items-center justify-center">
                <img 
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Vinith-s177&layout=compact&theme=tokyonight&hide_border=true&bg_color=161b22&title_color=a855f7&text_color=c9d1d9" 
                  alt="Top Languages" 
                  className="w-full h-auto max-w-md"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="p-6 text-center text-xs text-[#8b949e]">
                          <p class="font-semibold text-white mb-1">Top Languages Breakdown</p>
                          <p>Java • Python • JavaScript • HTML/CSS</p>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
          </section>

          <hr className="border-[#21262d]" />

          {/* ===================================================
              11. CONNECT WITH ME
              =================================================== */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>📬</span> Connect With Me
            </h2>
            <div className="flex flex-wrap gap-2">
              <InteractiveBadge 
                href={PROFILE_INFO.github}
                src="https://img.shields.io/badge/GitHub-Vinith--s177-181717?style=for-the-badge&logo=github&logoColor=white" 
                alt="GitHub" 
                glow="purple"
              />
              <InteractiveBadge 
                href={PROFILE_INFO.linkedin}
                src="https://img.shields.io/badge/LinkedIn-Vinith_S-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" 
                alt="LinkedIn" 
                glow="blue"
              />
              <InteractiveBadge 
                href={`mailto:${PROFILE_INFO.email}`}
                src="https://img.shields.io/badge/Email-gkthana506%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" 
                alt="Email" 
                glow="orange"
              />
              <InteractiveBadge 
                href={PROFILE_INFO.leetcode}
                src="https://img.shields.io/badge/LeetCode-vini__2006-FFA116?style=for-the-badge&logo=leetcode&logoColor=white" 
                alt="LeetCode" 
                glow="amber"
              />
            </div>
          </section>

          <hr className="border-[#21262d]" />

          {/* ===================================================
              12. FOOTER
              =================================================== */}
          <footer className="text-center pt-2 pb-4 space-y-1">
            <p className="text-sm italic font-medium text-[#c9d1d9]">
              "Learn • Build • Solve • Create Impact"
            </p>
            <p className="text-xs text-[#8b949e]">
              Always learning. Always building.
            </p>
          </footer>

        </div>
      </div>
    </div>
  );
};
