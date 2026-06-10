import { SITE_DATA } from './constants';
import './index.css';

// Custom Simple Icons as SVG Strings
const ICONS = {
  mapPin: `<svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  calendar: `<svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  motto: `<svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  cpu: `<svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></svg>`,
  mail: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  github: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  discord: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.27 4.73a16.14 16.14 0 0 0-4.07-1.27c-.1.2-.21.4-.3.6a14.73 14.73 0 0 0-5.8 0 11.23 11.23 0 0 0-.3-.6A16.14 16.14 0 0 0 4.73 4.73a16.3 16.3 0 0 0-3.3 15.04l.11.2a16.42 16.42 0 0 0 4.96 2.52 12.1 12.1 0 0 0 1-.84 10.93 10.93 0 0 1-1.63-1.07c.14-.1.28-.2.4-.31a11.94 11.94 0 0 0 12.44 0l.4.31c-.5.4-.98.76-1.63 1.07.31.28.65.55 1 .84a16.42 16.42 0 0 0 4.96-2.52l.1-.2a16.3 16.3 0 0 0-3.3-15.04M8.52 14.91c-.96 0-1.74-.88-1.74-1.95s.76-1.95 1.74-1.95c.97 0 1.75.88 1.75 1.95s-.76 1.95-1.75 1.95m6.96 0c-.96 0-1.74-.88-1.74-1.95s.76-1.95 1.74-1.95c.97 0 1.75.88 1.75 1.95s-.76 1.95-1.75 1.95"/></svg>`,
  copy: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  check: `<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  briefcase: `<svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  graduationCap: `<svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`,
  star: `<svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  bookOpen: `<svg class="w-5 h-5 text-sky-450" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  clock: `<svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  project: `<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 9.4 7.55 4.24a1.79 1.79 0 0 0-2.5 1.55v12.42a1.79 1.79 0 0 0 2.5 1.55l8.95-5.16a1.79 1.79 0 0 0 0-3.1Z"/></svg>`
};

// Application State
let activeSkillTab: 'strengths' | 'learning' = 'strengths';
let selectedTechFilter: string | null = null;

// Collect all unique technologies used in previous projects for filtering
const allProjectTechs = Array.from(
  new Set(
    SITE_DATA.experiences
      .flatMap(exp => exp.projects || [])
      .flatMap(proj => proj.tech ? proj.tech.split(',').map(t => t.trim()) : [])
  )
).sort();

// Setup UI elements
const root = document.getElementById('root');
if (root) {
  renderApp();
  setupEventListeners();
  startClock();
}

function renderApp() {
  if (!root) return;

  root.innerHTML = `
    <!-- Sticky Navigation Headings -->
    <header class="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0b]/80 border-b border-white/5 transition-all">
      <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" class="flex items-center gap-2 font-sans font-bold text-lg tracking-wider text-white">
          <span class="bg-gradient-to-r from-indigo-500 to-sky-500 w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm">TY</span>
          山田 太郎 <span class="text-xs text-slate-400 font-normal">Portfolio</span>
        </a>
        <nav class="flex items-center gap-6 text-sm font-medium text-slate-350">
          <a href="#profile" class="hover:text-white transition-colors">自己紹介</a>
          <a href="#skills" class="hover:text-white transition-colors">スキル＆注力技術</a>
          <a href="#career" class="hover:text-white transition-colors">経歴</a>
          <a href="#contact" class="hover:text-white transition-colors">連絡先</a>
          <!-- Real-time dynamic JST clock -->
          <div class="hidden md:flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-mono text-slate-400" id="header-clock-container">
            ${ICONS.clock}
            <span id="header-clock">--:--:-- JST</span>
          </div>
        </nav>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-12 space-y-24">
      
      <!-- 1. Hero Summary Block -->
      <section id="hero" class="relative py-8 md:py-16 space-y-8 overflow-hidden rounded-3xl bg-gradient-to-b from-indigo-950/20 to-transparent p-6 md:p-12 border border-white/5">
        <div class="absolute inset-0 bg-grid-white/[0.02] -z-10 bg-[size:32px_32px]"></div>
        <div class="absolute left-1/2 top-0 -translate-x-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="space-y-6 max-w-4xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs text-indigo-300 font-semibold uppercase tracking-wider">
            <span>フルスタック・エンジニア ✕ テックマネージャー</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold font-sans tracking-tight text-white leading-tight">
            ビジネスと開発を、<br/>
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-500">
              なめらかに繋ぎ合わせる。
            </span>
          </h1>
          <p class="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
            ${SITE_DATA.profile.currentJob} フロントエンド、バックエンド、インフラを含めた技術的なスペシャリティを基盤とし、現在では組織開発やテックマネジメントに挑戦しています。
          </p>
          <div class="flex flex-wrap gap-4 pt-2">
            <a href="#career" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium shadow-lg shadow-indigo-600/20 active:translate-y-0.5 transition-all text-sm">
              経歴と開発プロジェクトを見る
            </a>
            <a href="#contact" class="px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-medium active:translate-y-0.5 transition-all text-sm">
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      <!-- 2. Profile Details Grid -->
      <section id="profile" class="scroll-mt-24 space-y-8">
        <div class="border-l-4 border-indigo-500 pl-4">
          <h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight">自己紹介</h2>
          <p class="text-xs text-slate-400 uppercase font-mono mt-1">Who I am</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Profile Card -->
          <div class="lg:col-span-5 bg-[#161618] rounded-2xl border border-white/5 p-6 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center font-bold text-white text-2xl border border-indigo-500/30">
                  山
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">${SITE_DATA.profile.name}</h3>
                  <div class="flex items-center gap-2 mt-1 text-sm text-slate-400">
                    <span class="flex items-center gap-1">${ICONS.mapPin} ${SITE_DATA.profile.location}</span>
                    <span class="text-slate-600">•</span>
                    <span class="flex items-center gap-1">${ICONS.calendar} ${SITE_DATA.profile.birthday}生</span>
                  </div>
                </div>
              </div>

              <!-- Roles / Positions Badges -->
              <div class="flex flex-wrap gap-2 pt-2">
                ${SITE_DATA.profile.positions.map(pos => `
                  <span class="bg-[#1e1e21] text-[#94a3b8] px-2.5 py-1 rounded-md text-xs font-medium border border-white/5 hover:border-indigo-500/30 transition-all cursor-default">
                    ${pos}
                  </span>
                `).join('')}
              </div>
            </div>

            <div class="border-t border-white/5 pt-4 space-y-4">
              <!-- Motto Block -->
              <div class="flex gap-4 items-start bg-[#0a0a0b] p-4 rounded-xl border border-white/5">
                <div class="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  ${ICONS.motto}
                </div>
                <div>
                  <p class="text-[10px] text-slate-500 font-mono uppercase tracking-wider">座右の銘 / Personal Motto</p>
                  <p class="text-md font-bold text-slate-200 mt-0.5">「 ${SITE_DATA.profile.motto} 」</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Expertise Detail -->
          <div class="lg:col-span-7 bg-[#161618] rounded-2xl border border-white/5 p-8 flex flex-col justify-between">
            <div class="space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                  ${ICONS.cpu}
                </div>
                <div>
                  <h4 class="text-lg font-bold text-white">現在の注力領域</h4>
                  <p class="text-xs text-slate-400 font-mono">Present Focus Area</p>
                </div>
              </div>
              <p class="text-slate-300 leading-relaxed text-sm md:text-base">
                現在、ITスタートアップにおいて、これまでのフルスタック（フロントエンド、バックエンド、インフラ）な開発能力と知識をフルに活用・連動させ、
                テックリードかつマネージャーとしてチームビルディング、他部署とのシステム要件調整、プロジェクト進行管理を推進中。
                <br/><br/>
                単にコードを書く枠に留まらず、ビジネスモデルや要件の本質を理解し、チームメンバーの持ち味を活かしながら適切なアーキテクチャ提案ができるなめらかな開発進行を心がけています。
              </p>
            </div>

            <div class="flex items-center gap-2 mt-6 pt-4 border-t border-white/5 text-xs text-slate-400">
              <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span>フルレンジの技術視野から、ビジネスの最大化を強力にバックアップします。</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Strengths & Learning Technologies Interactive Tabs Section -->
      <section id="skills" class="scroll-mt-24 space-y-8">
        <div class="border-l-4 border-indigo-500 pl-4">
          <h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight">スキル ＆ 注力技術</h2>
          <p class="text-xs text-slate-400 uppercase font-mono mt-1">Interests, Strengths & Techs</p>
        </div>

        <div class="space-y-6">
          <!-- Toggle Tabs -->
          <div class="flex border-b border-white/5">
            <button id="tab-strengths" class="px-6 py-3 text-sm font-semibold border-b-2 transition-all duration-200 outline-none ${activeSkillTab === 'strengths' ? 'border-indigo-500 text-white' : 'border-transparent text-slate-400 hover:text-slate-200'}">
              自身のコアとしての強み (3項目)
            </button>
            <button id="tab-learning" class="px-6 py-3 text-sm font-semibold border-b-2 transition-all duration-200 outline-none ${activeSkillTab === 'learning' ? 'border-indigo-500 text-white' : 'border-transparent text-slate-400 hover:text-slate-200'}">
              現在インプット・実践中の技術 (4項目)
            </button>
          </div>

          <!-- Tab Contents wrapper -->
          <div id="skills-content-area" class="min-h-[320px] transition-all duration-300">
            <!-- Dynamically populated -->
          </div>
        </div>
      </section>

      <!-- 4. Career History with dynamic detail Expansion -->
      <section id="career" class="scroll-mt-24 space-y-8">
        <div class="border-l-4 border-indigo-500 pl-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight">経歴と担当プロジェクト</h2>
            <p class="text-xs text-slate-400 uppercase font-mono mt-1">Career & Projects</p>
          </div>

          <!-- Dynamic Tech Filter -->
          <div class="flex flex-wrap items-center gap-2 bg-[#161618] px-3 py-2 rounded-xl border border-white/5">
            <span class="text-xs font-medium text-slate-400 mr-1 flex items-center gap-1">${ICONS.project} 技術フィルター:</span>
            <button id="tech-filter-all" class="text-xs px-2.5 py-1.5 rounded-md font-medium transition-colors ${selectedTechFilter === null ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'}">
              すべて (${SITE_DATA.experiences.reduce((acc, exp) => acc + (exp.projects?.length || 0), 0)})
            </button>
            ${allProjectTechs.map(tech => `
              <button data-tech="${tech}" class="tech-filter-btn text-xs px-2.5 py-1.5 rounded-md font-medium transition-colors ${selectedTechFilter === tech ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'}">
                ${tech}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Timeline -->
        <div class="relative space-y-12 before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:bg-white/5">
          ${SITE_DATA.experiences.map((experience, expIdx) => {
            // Apply project filtering
            const hasProjects = experience.projects && experience.projects.length > 0;
            const filteredProjects = selectedTechFilter && experience.projects
              ? experience.projects.filter(p => p.tech?.includes(selectedTechFilter!))
              : (experience.projects || []);

            // If we are applying a filter and this milestone has no matching projects, let's blur it or tag it beautifully
            const isFilteredOut = selectedTechFilter !== null && hasProjects && filteredProjects.length === 0;

            let iconHtml = ICONS.briefcase;
            let themeColor = 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400';
            if (experience.period === '学歴') {
              iconHtml = ICONS.graduationCap;
              themeColor = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';
            } else if (experience.period === '現職') {
              themeColor = 'bg-sky-500/10 border-sky-500/30 text-sky-400';
            }

            return `
              <div class="career-node relative flex flex-col md:flex-row transition-all duration-300 ${isFilteredOut ? 'opacity-30 scale-98 pointer-events-none' : 'opacity-100'}" id="career-exp-${expIdx}">
                
                <!-- Timeline bullet -->
                <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full ${themeColor} border flex items-center justify-center z-10 shadow-lg">
                  <span class="w-2.5 h-2.5 rounded-full bg-current"></span>
                </div>

                <!-- Left Column (or Period block on mobile) -->
                <div class="w-full md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0 mb-4 md:mb-0">
                  <div class="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest ${themeColor} border uppercase">
                    ${experience.period}
                  </div>
                  <h3 class="text-xl font-bold text-white mt-2">${experience.title}</h3>
                  ${experience.description ? `<p class="text-sm text-slate-400 mt-1">${experience.description}</p>` : ''}
                </div>

                <!-- Right Column (Details and Projects Grid) -->
                <div class="w-full md:w-1/2 pl-12 md:pl-12 space-y-4">
                  ${hasProjects ? `
                    <div class="bg-[#161618] rounded-2xl border border-white/5 p-6 space-y-4 hover:border-white/10 transition-colors">
                      <div class="flex items-center justify-between border-b border-white/5 pb-2">
                        <span class="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                          ${iconHtml}
                          開発プロジェクト実績 (${filteredProjects.length}/${experience.projects!.length})
                        </span>
                        ${selectedTechFilter ? `
                          <span class="text-[10px] bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20 font-mono">
                            ${selectedTechFilter} にて抽出
                          </span>
                        ` : ''}
                      </div>

                      <div class="grid grid-cols-1 gap-4">
                        ${filteredProjects.map((project, pIdx) => `
                          <div class="bg-[#0a0a0b] hover:bg-[#111113] p-4 rounded-xl border border-white/5 space-y-2.5 hover:shadow-md hover:border-indigo-500/25 transition-all">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <h4 class="font-bold text-white text-md tracking-tight">${project.name}</h4>
                              <span class="text-xs font-bold text-indigo-400 bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/10 inline-self-start sm:inline">
                                役割: ${project.role}
                              </span>
                            </div>

                            ${project.tech ? `
                              <div class="flex flex-wrap gap-1.5 pt-1">
                                ${project.tech.split(',').map(tag => {
                                  const trimmedTag = tag.trim();
                                  const isMatched = selectedTechFilter === trimmedTag;
                                  return `
                                    <span class="text-[11px] font-mono px-2 py-0.5 rounded tracking-wide transition-all ${isMatched ? 'bg-indigo-600 text-white font-semibold' : 'bg-white/5 text-slate-400 border border-white/5'}">
                                      ${trimmedTag}
                                    </span>
                                  `;
                                }).join('')}
                              </div>
                            ` : ''}
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  ` : `
                    <div class="bg-[#161618]/50 rounded-2xl border border-dashed border-white/5 p-6 text-center text-slate-500 text-sm">
                      本期間中は学習・基礎知識インプットを主体に活動。
                    </div>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- 5. Future Goal Card -->
      <section id="goal" class="scroll-mt-24 relative overflow-hidden rounded-3xl bg-gradient-to-tr from-sky-950/20 via-[#161618] to-indigo-950/20 p-8 md:p-12 border border-white/5">
        <div class="absolute right-0 top-0 -translate-y-1/4 w-60 h-60 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div class="max-w-3xl space-y-6">
          <div class="inline-flex items-center gap-1.5 text-indigo-400 font-semibold text-sm">
            ${ICONS.star}
            <span>未来への展望 / Future Goal</span>
          </div>
          <h3 class="text-2xl md:text-3xl font-bold text-white tracking-tight leading-normal">
            "${SITE_DATA.futureGoal}"
          </h3>
          <p class="text-slate-350 text-sm md:text-base leading-relaxed">
            最先端のテクノロジー（Web、Cloud Platform、AIエージェント、生成AI）の開拓はもちろん、現場で培った知見の「共有・育成」にも力を注ぎたいと考えています。
            地方のコミュニティ活性や後進への指導を目的とし、ただ開発をこなすだけでなく周囲に能動的な変化をもたらすエコシステムの創造を目指します。
          </p>
        </div>
      </section>

      <!-- 6. Intersecting Contact section with simulated realistic delivery -->
      <section id="contact" class="scroll-mt-24 space-y-8">
        <div class="border-l-4 border-indigo-500 pl-4">
          <h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight">連絡先とお問い合わせ</h2>
          <p class="text-xs text-slate-400 uppercase font-mono mt-1">Get In Touch</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Socials and Fast Copies -->
          <div class="lg:col-span-5 space-y-6">
            <p class="text-slate-300 text-sm leading-relaxed">
              ご質問やカジュアルなご相談、プロジェクトのご依頼など、どうぞお気軽にご連絡ください。<br/>
              以下の各チャネルまたはお問い合わせフォームからご連絡いただけます。
            </p>

            <div class="space-y-3">
              <!-- Mail widget -->
              <div class="group flex items-center justify-between bg-[#161618] border border-white/5 rounded-2xl p-4 hover:border-indigo-500/30 transition-all">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    ${ICONS.mail}
                  </div>
                  <div>
                    <p class="text-[10px] text-slate-500 font-mono">Mail Address</p>
                    <p class="text-sm font-semibold text-slate-200" id="mail-text">${SITE_DATA.contact.mail}</p>
                  </div>
                </div>
                <button id="copy-mail-btn" class="p-2 hover:bg-neutral-800 rounded-lg text-slate-400 hover:text-white transition-all relative" title="Copy to clipboard">
                  <span id="mail-copy-icon">${ICONS.copy}</span>
                  <span id="mail-tooltip" class="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 bg-indigo-600 text-white text-[11px] px-2 py-1 rounded shadow-lg font-medium tracking-wide transition-all duration-150">
                    コピー完了
                  </span>
                </button>
              </div>

              <!-- GitHub Widget -->
              <a href="https://github.com/${SITE_DATA.contact.github}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between bg-[#161618] border border-white/5 rounded-2xl p-4 hover:border-indigo-500/30 transition-all group">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                    ${ICONS.github}
                  </div>
                  <div>
                    <p class="text-[10px] text-slate-500 font-mono">GitHub Profile</p>
                    <p class="text-sm font-semibold text-slate-200">${SITE_DATA.contact.github}</p>
                  </div>
                </div>
                <span class="text-xs text-slate-400 group-hover:text-white transition-all mr-2">👉 訪問する</span>
              </a>

              <!-- Discord Widget -->
              <div class="group flex items-center justify-between bg-[#161618] border border-white/5 rounded-2xl p-4 hover:border-indigo-500/30 transition-all">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-[#5865F2]/10 text-[#5865F2] flex items-center justify-center">
                    ${ICONS.discord}
                  </div>
                  <div>
                    <p class="text-[10px] text-slate-500 font-mono">Discord Username</p>
                    <p class="text-sm font-semibold text-slate-200" id="discord-text">${SITE_DATA.contact.discord}</p>
                  </div>
                </div>
                <button id="copy-discord-btn" class="p-2 hover:bg-neutral-800 rounded-lg text-slate-400 hover:text-white transition-all relative" title="Copy to clipboard">
                  <span id="discord-copy-icon">${ICONS.copy}</span>
                  <span id="discord-tooltip" class="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 bg-indigo-600 text-white text-[11px] px-2 py-1 rounded shadow-lg font-medium tracking-wide transition-all duration-150">
                    コピー完了
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Contact Message Form -->
          <form id="contact-form" class="lg:col-span-7 bg-[#161618] rounded-2xl border border-white/5 p-6 md:p-8 space-y-5">
            <h3 class="text-lg font-bold text-white">お問い合わせフォーム</h3>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label for="form-name" class="text-xs text-slate-400 font-medium">お名前 <span class="text-indigo-400">*</span></label>
                <input type="text" id="form-name" required placeholder="山田 花子" class="w-full bg-[#0a0a0b] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-all"/>
              </div>
              <div class="space-y-1.5">
                <label for="form-email" class="text-xs text-slate-400 font-medium">メールアドレス <span class="text-indigo-400">*</span></label>
                <input type="email" id="form-email" required placeholder="your.email@example.com" class="w-full bg-[#0a0a0b] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-all"/>
              </div>
            </div>

            <div class="space-y-1.5">
              <label for="form-message" class="text-xs text-slate-400 font-medium">メッセージ内容 <span class="text-indigo-400">*</span></label>
              <textarea id="form-message" required rows="4" placeholder="具体的なお仕事のご相談や、カジュアル面談のご希望などをお書きください。" class="w-full bg-[#0a0a0b] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-all resize-none"></textarea>
            </div>

            <!-- Form Validation Feedback Info -->
            <div id="form-feedback" class="hidden text-xs rounded-xl p-3 border"></div>

            <div class="flex justify-end">
              <button type="submit" id="form-submit-btn" class="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium tracking-wide active:translate-y-0.5 transition-all text-sm flex items-center justify-center gap-2">
                メッセージを送信する
              </button>
            </div>
          </form>
        </div>
      </section>

    </main>

    <footer class="border-t border-white/5 py-12 mt-24 text-center">
      <p class="text-xs text-slate-500 tracking-wide font-mono">
        &copy; ${new Date().getFullYear()} Yamada Taro. All rights reserved. Built with Native TypeScript.
      </p>
    </footer>
  `;
  renderSkillsContent();
}

function renderSkillsContent() {
  const container = document.getElementById('skills-content-area');
  if (!container) return;

  if (activeSkillTab === 'strengths') {
    const bgColors = [
      'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
      'bg-sky-500/10 border-sky-500/20 text-sky-400',
      'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
    ];
    const explanations = [
      "素早い検証のために動くシステム（モックや実働プロトタイプ）を作成するスピードが強みです。要件定義やブレスト、企画段階でUIを視覚的に提示し、迅速な合致をサポートします。",
      "現状のワークフローにおいて退屈なルーティンや手作業の無駄を徹底的に自動化・削減します。CI/CD構築や運用スクリプト化によるプロセス圧縮を得意とします。",
      "個別のコード実装に留まらず、ビジネスモデル・運用ロードマップ・チームパワーから逆算して最適な構成提案を行います。過度のオーバーエンジニアリングを排除します。"
    ];

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
        ${SITE_DATA.strengths.map((str, idx) => `
          <div class="bg-[#161618] rounded-2xl border border-white/5 p-6 flex flex-col space-y-4 hover:border-indigo-500/25 hover:-translate-y-1 transition-all duration-300">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg border ${bgColors[idx % bgColors.length]}">
              0${idx + 1}
            </div>
            <div class="space-y-1">
              <h3 class="text-lg font-bold text-white tracking-tight">${str}</h3>
              <p class="text-xs text-slate-400 font-mono uppercase tracking-wider">Strength Area</p>
            </div>
            <p class="text-sm text-slate-300 leading-relaxed pt-2">
              ${explanations[idx]}
            </p>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    // Learning description mapping
    const descriptions = [
      "最先端のプロダクトエージェント・ワークスペースや、高度なスマートワークフロー/タスク最適化エンジンの可能性を探求しています。",
      "開発サイクルの最大効率化を図るツール群。Gemini SDKなどを用いて独自の自走開発スクリプトなどを日夜テスト中。",
      "「チームメンバーに自走してもらう」ことに着眼し、ただ指示するのではなく対話と気づきから能動的なアプローチを創出する対話技術の研鑽。",
      "技術的ノウハウ・開発スキームの経験を持たない他部署のメンバーやジュニア層に対し、体系的かつ自発的に学習意欲を高めてもらう教育技術の実践。"
    ];

    container.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-fadeIn">
        ${SITE_DATA.learningTechnologies.map((tech, idx) => `
          <div class="bg-[#161618] border border-white/5 rounded-2xl p-6 flex flex-col space-y-4 justify-between hover:border-indigo-500/25 hover:-translate-y-1 transition-all duration-300">
            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-sm shadow-indigo-500/50"></span>
                <span class="font-bold text-sm text-white tracking-wider font-mono">${tech}</span>
              </div>
              <p class="text-xs text-slate-400 leading-relaxed min-h-[96px]">
                ${descriptions[idx] || "さらなる組織強化や自身のフルスタック化に向け、高い熱量で習得を継続しています。"}
              </p>
            </div>
            <span class="text-[10px] font-mono text-indigo-400/90 font-bold tracking-widest uppercase">
              Learning Focus
            </span>
          </div>
        `).join('')}
      </div>
    `;
  }
}

function setupEventListeners() {
  // Tabs for strengths & learning
  const tabStrengths = document.getElementById('tab-strengths');
  const tabLearning = document.getElementById('tab-learning');

  if (tabStrengths && tabLearning) {
    tabStrengths.addEventListener('click', () => {
      if (activeSkillTab !== 'strengths') {
        activeSkillTab = 'strengths';
        tabStrengths.className = `px-6 py-3 text-sm font-semibold border-b-2 transition-all duration-200 outline-none border-indigo-500 text-white`;
        tabLearning.className = `px-6 py-3 text-sm font-semibold border-b-2 transition-all duration-200 outline-none border-transparent text-slate-400 hover:text-slate-200`;
        renderSkillsContent();
      }
    });

    tabLearning.addEventListener('click', () => {
      if (activeSkillTab !== 'learning') {
        activeSkillTab = 'learning';
        tabLearning.className = `px-6 py-3 text-sm font-semibold border-b-2 transition-all duration-200 outline-none border-indigo-500 text-white`;
        tabStrengths.className = `px-6 py-3 text-sm font-semibold border-b-2 transition-all duration-200 outline-none border-transparent text-slate-400 hover:text-slate-200`;
        renderSkillsContent();
      }
    });
  }

  // Tech filters for projects
  const filterAll = document.getElementById('tech-filter-all');
  if (filterAll) {
    filterAll.addEventListener('click', () => {
      selectedTechFilter = null;
      renderApp();
      setupEventListeners(); // re-bind listeners as rendering replaces the markup
    });
  }

  document.querySelectorAll('.tech-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLButtonElement;
      selectedTechFilter = target.getAttribute('data-tech');
      renderApp();
      setupEventListeners(); // re-bind listeners
      
      // Auto scroll to target filtered view smoothly
      const careerSection = document.getElementById('career');
      if (careerSection) {
        careerSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Copy Email Functionality
  const copyMailBtn = document.getElementById('copy-mail-btn');
  const mailTooltip = document.getElementById('mail-tooltip');
  const mailIcon = document.getElementById('mail-copy-icon');

  if (copyMailBtn && mailTooltip && mailIcon) {
    copyMailBtn.addEventListener('click', async () => {
      const textToCopy = SITE_DATA.contact.mail;
      try {
        await navigator.clipboard.writeText(textToCopy);
        
        // Show Tooltip with animations
        mailTooltip.classList.remove('scale-0');
        mailTooltip.classList.add('scale-100');
        mailIcon.innerHTML = ICONS.check;

        setTimeout(() => {
          mailTooltip.classList.remove('scale-100');
          mailTooltip.classList.add('scale-0');
          mailIcon.innerHTML = ICONS.copy;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy mail: ', err);
      }
    });
  }

  // Copy Discord Functionality
  const copyDiscordBtn = document.getElementById('copy-discord-btn');
  const discordTooltip = document.getElementById('discord-tooltip');
  const discordIcon = document.getElementById('discord-copy-icon');

  if (copyDiscordBtn && discordTooltip && discordIcon) {
    copyDiscordBtn.addEventListener('click', async () => {
      const textToCopy = SITE_DATA.contact.discord;
      try {
        await navigator.clipboard.writeText(textToCopy);
        
        // Show Tooltip
        discordTooltip.classList.remove('scale-0');
        discordTooltip.classList.add('scale-100');
        discordIcon.innerHTML = ICONS.check;

        setTimeout(() => {
          discordTooltip.classList.remove('scale-100');
          discordTooltip.classList.add('scale-0');
          discordIcon.innerHTML = ICONS.copy;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy Discord username: ', err);
      }
    });
  }

  // Contact Message form submission simulation
  const contactForm = document.getElementById('contact-form') as HTMLFormElement;
  const formFeedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('form-submit-btn') as HTMLButtonElement;

  if (contactForm && formFeedback && submitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = (document.getElementById('form-name') as HTMLInputElement).value.trim();
      const emailVal = (document.getElementById('form-email') as HTMLInputElement).value.trim();
      const messageVal = (document.getElementById('form-message') as HTMLTextAreaElement).value.trim();

      if (!nameVal || !emailVal || !messageVal) {
        formFeedback.innerText = "すべての項目を入力してください。";
        formFeedback.className = "text-xs rounded-xl p-3 border bg-red-500/10 border-red-500/30 text-red-400 block animate-fadeIn";
        return;
      }

      // Start simulated sending
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        送信中...
      `;

      formFeedback.classList.add('hidden');

      setTimeout(() => {
        // Simulated success delivery feedback
        submitBtn.disabled = false;
        submitBtn.innerHTML = `メッセージを送信する`;
        
        formFeedback.innerText = "ありがとうございます！メッセージは無事に正常に送信されました。改めてご連絡いたします。";
        formFeedback.className = "text-xs rounded-xl p-3 border bg-green-500/10 border-green-500/20 text-green-400 block animate-fadeIn";
        
        contactForm.reset();
      }, 1800);
    });
  }
}

function startClock() {
  function update() {
    const clockEl = document.getElementById('header-clock');
    if (!clockEl) return;

    const now = new Date();
    // Get hours, mins, secs in Japan Standard Time (JST / UTC+9)
    // For convenience of user in Japan, but dynamic local clock works too.
    // Let's print clean formatted absolute local time.
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Tokyo',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    const jstStr = new Intl.DateTimeFormat('ja-JP', options).format(now);
    clockEl.innerText = `${jstStr} JST`;
  }

  update();
  setInterval(update, 1000);
}
