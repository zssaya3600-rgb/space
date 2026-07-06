import React, { useState, useEffect, useMemo } from "react";
import { 
  Folder, 
  Clock, 
  Settings, 
  X, 
  Search, 
  Globe, 
  Video, 
  Link, 
  Eye, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap,
  ExternalLink,
  Workflow
} from "lucide-react";
import { defaultCategories, defaultProjects } from "./data";
import { Project, Category } from "./types";
import { ProjectCard } from "./components/ProjectCard";

// Helper to render high-tech CAD blueprint interactive vector drawings
function renderBlueprint(type: string) {
  switch (type) {
    case "exhibition-floor":
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full stroke-sky-400/50 fill-none stroke-[0.8]">
          <rect x="20" y="20" width="360" height="200" className="stroke-zinc-800/80" />
          <line x1="20" y1="120" x2="380" y2="120" className="stroke-zinc-900 stroke-dashed" />
          <line x1="200" y1="20" x2="200" y2="220" className="stroke-zinc-900 stroke-dashed" />
          {/* Booth partitions */}
          <path d="M 60,60 H 140 V 180 H 60" className="stroke-sky-500/30" />
          <path d="M 260,60 H 340 V 180 H 260" className="stroke-sky-500/30" />
          <circle cx="200" cy="120" r="40" className="stroke-sky-400/25 stroke-dashed" />
          <circle cx="200" cy="120" r="15" className="stroke-sky-400/40" />
          {/* Dimension Lines */}
          <line x1="60" y1="50" x2="140" y2="50" className="stroke-zinc-700 stroke-[0.5]" />
          <path d="M 60,47 L 60,53 M 140,47 L 140,53" className="stroke-zinc-700" />
          <text x="90" y="44" className="fill-zinc-600 font-mono text-[7px] stroke-none">W: 8000</text>
          <text x="24" y="32" className="fill-sky-500/50 font-mono text-[6px] stroke-none">SCALE 1:50</text>
          <text x="320" y="212" className="fill-zinc-600 font-mono text-[6px] stroke-none">FLOOR_PLAN_01</text>
        </svg>
      );
    case "retail-layout":
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full stroke-sky-400/50 fill-none stroke-[0.8]">
          <rect x="20" y="20" width="360" height="200" className="stroke-zinc-800/80" />
          <path d="M 30,50 H 370 V 190 H 30 Z" className="stroke-zinc-900" />
          {/* Central counter bar */}
          <rect x="130" y="90" width="140" height="60" className="stroke-sky-400/30 fill-sky-950/10" />
          <circle cx="160" cy="120" r="6" className="stroke-sky-400/40" />
          <circle cx="200" cy="120" r="6" className="stroke-sky-400/40" />
          <circle cx="240" cy="120" r="6" className="stroke-sky-400/40" />
          {/* Backbar */}
          <line x1="130" y1="70" x2="270" y2="70" className="stroke-sky-500/20" />
          <text x="175" y="112" className="fill-sky-400/60 font-mono text-[6px] stroke-none">BAR ISLAND</text>
          <text x="24" y="32" className="fill-sky-500/50 font-mono text-[6px] stroke-none">RETAIL_GRID</text>
        </svg>
      );
    case "minimal-lounge":
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full stroke-sky-400/50 fill-none stroke-[0.8]">
          <rect x="20" y="20" width="360" height="200" className="stroke-zinc-800/80" />
          {/* Sofa Layout */}
          <rect x="100" y="70" width="200" height="100" className="stroke-zinc-900 stroke-dashed" />
          <path d="M 120,90 H 280 V 150 H 120 Z" className="stroke-sky-400/30 fill-sky-950/5" />
          <circle cx="200" cy="120" r="10" className="stroke-sky-500/40" />
          <text x="180" y="112" className="fill-sky-400/60 font-mono text-[6px] stroke-none">LOUNGE VOID</text>
          <text x="24" y="32" className="fill-sky-500/50 font-mono text-[6px] stroke-none">DETAIL 1:20</text>
        </svg>
      );
    case "detail-section":
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full stroke-sky-400/50 fill-none stroke-[0.8]">
          <rect x="20" y="20" width="360" height="200" className="stroke-zinc-800/80" />
          {/* Architectural structural wall section */}
          <line x1="100" y1="40" x2="300" y2="40" className="stroke-zinc-700" />
          <line x1="100" y1="200" x2="300" y2="200" className="stroke-zinc-700" />
          <rect x="180" y="40" width="40" height="160" className="stroke-sky-400/40 fill-sky-950/10" />
          <line x1="180" y1="80" x2="220" y2="80" className="stroke-sky-400/20" />
          <line x1="180" y1="120" x2="220" y2="120" className="stroke-sky-400/20" />
          <line x1="180" y1="160" x2="220" y2="160" className="stroke-sky-400/20" />
          {/* Callouts */}
          <line x1="220" y1="120" x2="280" y2="100" className="stroke-sky-400/40 stroke-dashed" />
          <text x="285" y="102" className="fill-sky-400 font-mono text-[6px] stroke-none">GYPSUM DETAIL</text>
          <text x="24" y="32" className="fill-sky-500/50 font-mono text-[6px] stroke-none">SECTION_A-A'</text>
        </svg>
      );
    case "vr-gallery":
    default:
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full stroke-sky-400/50 fill-none stroke-[0.8]">
          <rect x="20" y="20" width="360" height="200" className="stroke-zinc-800/80" />
          <ellipse cx="200" cy="120" rx="100" ry="60" className="stroke-sky-500/20" />
          <ellipse cx="200" cy="120" rx="60" ry="36" className="stroke-sky-500/40 stroke-dashed" />
          {/* Diagonal grid lines */}
          <line x1="100" y1="60" x2="300" y2="180" className="stroke-zinc-900" />
          <line x1="100" y1="180" x2="300" y2="60" className="stroke-zinc-900" />
          <circle cx="200" cy="120" r="5" className="fill-sky-400 stroke-none" />
          <text x="175" y="112" className="fill-sky-400 font-mono text-[6px] stroke-none">VR HMD SENSOR</text>
          <text x="24" y="32" className="fill-sky-500/50 font-mono text-[6px] stroke-none">PERSPECTIVE_GRID</text>
        </svg>
      );
  }
}

export default function App() {
  const [categories] = useState<Category[]>(defaultCategories);
  const [projects] = useState<Project[]>(defaultProjects);

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [systemNotification, setSystemNotification] = useState<string | null>(null);
  const [time, setTime] = useState("");

  // Running Clock (Local Time)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("ko-KR", { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Set system notifications
  const triggerNotification = (message: string) => {
    setSystemNotification(message);
    setTimeout(() => {
      setSystemNotification(null);
    }, 4000);
  };

  // Filter projects by Search query
  const filteredSearchProjects = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return projects.filter(
      p =>
        p.title.toLowerCase().includes(query) ||
        p.subtitle.toLowerCase().includes(query) ||
        p.concept.toLowerCase().includes(query) ||
        p.role.toLowerCase().includes(query) ||
        p.tools.some(t => t.toLowerCase().includes(query))
    );
  }, [searchQuery, projects]);

  // Gallery image fallback handling
  const handleImageError = (imgSrc: string) => {
    setFailedImages(prev => ({ ...prev, [imgSrc]: true }));
  };

  // Nav actions
  const handleNavClick = (menu: string) => {
    const key = menu.toUpperCase();
    if (key === "WORK") {
      setSelectedCategory(null);
      setSelectedProject(null);
      setTimeout(() => {
        document.getElementById("finder-window-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (key === "PROJECTS") {
      const cat = categories.find(c => c.id === "01");
      if (cat) {
        setSelectedCategory(cat);
        const catProjs = projects.filter(p => p.categoryId === cat.id);
        if (catProjs.length > 0) setSelectedProject(catProjs[0]);
      }
      setTimeout(() => {
        document.getElementById("finder-window-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (key === "ABOUT") {
      setShowAboutModal(true);
    } else if (key === "CONTACT") {
      setShowContactModal(true);
    }
  };

  const handleDownloadPDF = () => {
    alert("SOYOUNG_KIM_SPACE_DESIGN_PORTFOLIO.pdf 다운로드를 시작합니다.");
    triggerNotification("PDF DOWNLOAD INITIATED: 24.5 MB");
  };

  // Project photos gallery array
  const activeProjectImages = useMemo(() => {
    if (!selectedProject) return [];
    return selectedProject.images || [];
  }, [selectedProject]);

  // Sync active index when selecting project
  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-sky-500 selection:text-black font-sans relative overflow-x-hidden">
      
      {/* Sci-fi Scanline background effect */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-40 opacity-[0.07]"></div>
      
      {/* Dynamic System Notification Toast */}
      {systemNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0c1017] border border-sky-500/40 text-sky-400 px-4 py-3 rounded-lg shadow-2xl flex items-center gap-2.5 font-mono text-xs animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
          <span>{systemNotification}</span>
        </div>
      )}

      {/* HEADER BAR */}
      <header className="border-b border-zinc-900/65 bg-black/85 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => { setSelectedCategory(null); setSelectedProject(null); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-7 h-7 border border-sky-500/30 rounded flex items-center justify-center bg-zinc-950/60 overflow-hidden">
              <span className="font-mono text-xs text-sky-400 font-bold group-hover:scale-110 transition-transform">SK</span>
              <div className="absolute inset-0 border border-dashed border-sky-500/10 animate-spin-slow"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-xs font-bold tracking-[0.15em] text-zinc-100">SOYOUNG KIM</span>
              <span className="font-mono text-[8px] tracking-widest text-sky-500/60 uppercase">SPACE DESIGN ARCHIVE</span>
            </div>
          </div>

          {/* Center Navigation menu links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-[10px] tracking-widest text-zinc-400">
            <button onClick={() => handleNavClick("WORK")} className="hover:text-sky-400 transition-colors uppercase">HOME</button>
            <button onClick={() => handleNavClick("PROJECTS")} className="hover:text-sky-400 transition-colors uppercase">PORTFOLIO</button>
            <button onClick={() => handleNavClick("ABOUT")} className="hover:text-sky-400 transition-colors uppercase">ABOUT ME</button>
            <button onClick={() => handleNavClick("CONTACT")} className="hover:text-sky-400 transition-colors uppercase">CONTACT</button>
          </nav>

          {/* Right Header System details */}
          <div className="flex items-center gap-4">
            
            {/* Stable Environment Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded border border-zinc-900 bg-zinc-950/40">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span className="font-mono text-[8px] text-zinc-500 tracking-wider">SECURE CLIENT STATE</span>
            </div>

            {/* Live Clock */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-900">
              <Clock className="w-3.5 h-3.5 text-sky-500/70" />
              <span>{time || "00:00:00"}</span>
            </div>

          </div>
        </div>
      </header>

      {/* CORE HERO SECTION */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-16">
        
        {/* HERO HEADER SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Bold Minimal Architectural Header */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2" id="hero-title-block">
            <div>
              <div className="font-mono text-[9px] text-sky-500/60 mb-4 tracking-[0.25em] uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-sky-400 inline-block"></span>
                <span>SOYOUNG KIM / SPACE EXPERIENCE DESIGN PORTFOLIO</span>
              </div>
              
              <h1 className="font-display font-light text-5xl md:text-6xl lg:text-[72px] tracking-[0.16em] text-zinc-100 flex flex-col leading-[1.3] select-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-sky-400 font-extralight">SPACE</span>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-zinc-400 tracking-[0.18em]">DESIGN</span>
                <span className="tracking-[0.03em] text-zinc-600 hover:text-sky-400 transition-colors duration-700">ARCHIVE</span>
              </h1>

              {/* Manifesto paragraph */}
              <div className="mt-8 border-l-2 border-sky-500/20 pl-4 py-1.5">
                <p className="text-sky-400 font-semibold text-[10px] tracking-[0.25em] font-mono uppercase">
                  EXHIBITION · COMMERCIAL · DETAIL DRAFTING
                </p>
                <p className="text-zinc-400 text-xs tracking-wider mt-2.5 leading-relaxed font-sans">
                  스토리텔링과 유기적 동선 분석, 사실적인 3D 비주얼라이제이션 및 철저한 AutoCAD 도면설계를 융합하여 실재하는 최상의 오프라인 경험 공간을 설계합니다.
                </p>
              </div>

              {/* Quick Action buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button 
                  onClick={() => handleNavClick("WORK")}
                  className="bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/40 hover:border-sky-400 text-sky-300 hover:text-white px-5 py-2.5 text-[10px] font-bold font-mono tracking-widest transition-all duration-300 rounded shadow-[0_0_15px_rgba(56,189,248,0.05)] hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]"
                >
                  VIEW WORKSPACE
                </button>
                <button 
                  onClick={handleDownloadPDF}
                  className="bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white px-5 py-2.5 text-[10px] font-bold font-mono tracking-widest transition-all duration-300 rounded"
                >
                  DOWNLOAD PDF
                </button>
                <button 
                  onClick={() => handleNavClick("ABOUT")}
                  className="bg-zinc-900/60 hover:bg-sky-950/25 border border-zinc-800 hover:border-sky-500/30 text-zinc-400 hover:text-sky-300 px-5 py-2.5 text-[10px] font-bold font-mono tracking-widest transition-all duration-300 rounded"
                >
                  ABOUT ME
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural categories catalog cards list */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-zinc-900">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></span>
                </div>
                <span className="font-mono text-xs text-zinc-400 font-semibold tracking-wider">ROOT_DIRECTORY / PORTFOLIO_INDEX</span>
              </div>
            </div>

            {/* Folders grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((cat) => {
                const projectCount = projects.filter(p => p.categoryId === cat.id).length;
                return (
                  <ProjectCard
                    key={cat.id}
                    cat={cat}
                    projectCount={projectCount}
                    isSelected={selectedCategory?.id === cat.id}
                    onSelect={() => {
                      setSelectedCategory(cat);
                      const catProjs = projects.filter(p => p.categoryId === cat.id);
                      if (catProjs.length > 0) {
                        setSelectedProject(catProjs[0]);
                      } else {
                        setSelectedProject(null);
                      }
                      
                      // Scroll to work station
                      setTimeout(() => {
                        const targetSec = document.getElementById("finder-window-section");
                        if (targetSec) {
                          targetSec.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 100);
                    }}
                    isAdmin={false}
                  />
                );
              })}
            </div>

            {/* Live Search Input Bar */}
            <div className="bg-[#0b0c0e] border border-zinc-900 p-3 rounded-lg flex items-center gap-3">
              <Search className="w-4 h-4 text-zinc-500" />
              <input 
                type="text" 
                placeholder="도면, 설계 프로그램, 또는 핵심 기술 명칭으로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none text-xs text-zinc-300 placeholder-zinc-700 focus:outline-none w-full font-mono"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-zinc-500 hover:text-white text-[9px] font-mono">
                  CLEAR
                </button>
              )}
            </div>

            {/* Search Results overlay block */}
            {searchQuery && (
              <div className="bg-[#0c0f16] border border-sky-950/80 rounded-lg p-4 space-y-2 max-h-60 overflow-y-auto font-mono text-xs">
                <p className="text-[10px] font-mono text-sky-400 font-bold tracking-wider">
                  QUERY RESULTS ({filteredSearchProjects.length}):
                </p>
                {filteredSearchProjects.length === 0 ? (
                  <p className="text-xs text-zinc-600 py-1">일치하는 포트폴리오 기획 및 설계 도면 파일이 없습니다.</p>
                ) : (
                  filteredSearchProjects.map(p => (
                    <div 
                      key={p.id}
                      onClick={() => {
                        const targetCat = categories.find(c => c.id === p.categoryId);
                        if (targetCat) {
                          setSelectedCategory(targetCat);
                          setSelectedProject(p);
                        }
                        setSearchQuery("");
                        setTimeout(() => {
                          document.getElementById("finder-window-section")?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }}
                      className="p-2 rounded bg-zinc-950 hover:bg-sky-950/20 border border-zinc-900 hover:border-sky-500/20 cursor-pointer flex justify-between items-center transition-all"
                    >
                      <span className="text-zinc-300 font-bold">{p.title}</span>
                      <span className="text-[9px] text-sky-400/80 uppercase">{p.role}</span>
                    </div>
                  ))
                )}
              </div>
            )}

          </div>
        </div>

        {/* WORKSTATION VIEW WINDOW SECTION */}
        <section id="finder-window-section" className="w-full mt-4 transition-all duration-300 pt-6">
          
          {selectedCategory ? (
            <div className="w-full bg-[#0a0c0f] border border-sky-950/60 rounded-xl shadow-2xl overflow-hidden flex flex-col min-h-[500px]">
              
              {/* High-end computer window control bar */}
              <div className="bg-[#0e121a] px-4 py-3 border-b border-sky-950/40 flex items-center justify-between select-none">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <button 
                      onClick={() => {
                        setSelectedCategory(null);
                        setSelectedProject(null);
                      }}
                      className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-400 flex items-center justify-center text-[7px] text-rose-900 font-bold"
                      title="Close workspace"
                    >
                      ×
                    </button>
                    <span className="w-3 h-3 rounded-full bg-amber-500/40"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/40"></span>
                  </div>
                  
                  <div className="h-4 w-[1px] bg-zinc-800 mx-2"></div>
                  <span className="font-mono text-xs text-sky-400 font-semibold tracking-wider flex items-center gap-1.5">
                    <Folder className="w-3.5 h-3.5 text-sky-400" />
                    <span>WORK STATION :</span>
                    <span className="text-zinc-300">CAT_0{selectedCategory.id} // {selectedCategory.title}</span>
                  </span>
                </div>
              </div>

              {/* SPLIT SCREEN WORKSPACE LAYOUT */}
              <div className="flex flex-col lg:flex-row bg-[#08090b] flex-1">
                
                {/* Left Split Sidebar: List of plot document items */}
                <div className="w-full lg:w-72 border-r border-sky-950/20 bg-[#090b0e] flex flex-col shrink-0">
                  <div className="p-3.5 border-b border-sky-950/20 bg-[#0c1017]">
                    <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider font-bold">
                      PLOT DOCUMENTS
                    </span>
                  </div>

                  <div className="p-2 space-y-1 overflow-y-auto max-h-[300px] lg:max-h-[600px]">
                    {projects.filter(p => p.categoryId === selectedCategory.id).map((proj) => (
                      <div
                        key={proj.id}
                        onClick={() => {
                          setSelectedProject(proj);
                          if (window.innerWidth < 1024) {
                            setTimeout(() => {
                              document.getElementById("project-detail-view")?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }
                        }}
                        className={`p-3.5 rounded-lg border cursor-pointer text-left transition-all ${
                          selectedProject?.id === proj.id
                            ? "bg-sky-950/30 border-sky-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.05)]"
                            : "bg-transparent border-transparent text-zinc-400 hover:bg-[#11151e] hover:text-zinc-200"
                        }`}
                      >
                        <p className="text-[9px] font-mono text-sky-500 tracking-wider font-semibold mb-1">
                          {proj.role.toUpperCase()}
                        </p>
                        <h4 className="text-xs font-semibold leading-snug">
                          {proj.title}
                        </h4>
                        <div className="mt-2.5 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                          <span>{proj.tools[0] || "CAD"}</span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5" />
                            VIEWING
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Split Panel: Active project detail sheet deep-dive */}
                <div id="project-detail-view" className="flex-1 p-5 md:p-8 space-y-8 overflow-y-auto max-h-[800px] bg-[#08090c]">
                  
                  {selectedProject ? (
                    <div className="space-y-8 animate-fade-in">
                      
                      {/* Project Header block */}
                      <div className="border-b border-zinc-900 pb-5">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-sky-400 bg-sky-950/40 px-2 py-0.5 rounded border border-sky-900/30">
                          ROLE: {selectedProject.role}
                        </span>
                        <h3 className="font-display text-2xl font-bold tracking-tight text-white mt-2">
                          {selectedProject.title}
                        </h3>
                        <p className="text-zinc-400 text-xs mt-1.5 font-sans">
                          {selectedProject.subtitle}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5 text-[9px] font-mono">
                          <span className="text-zinc-500 mr-1 self-center">SOFTWARE_USED:</span>
                          {selectedProject.tools.map((tool, idx) => (
                            <span key={idx} className="bg-zinc-950 border border-zinc-900 text-sky-400 px-2 py-0.5 rounded">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Main Showcase Gallery Render Box */}
                      <div className="space-y-3 font-mono">
                        <div className="flex items-center justify-between">
                          <h4 className="text-[9px] text-sky-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4" />
                            <span>REAL-TIME 3D SPATIAL RENDERS</span>
                          </h4>
                          <span className="text-[9px] text-zinc-600">SYS_PLOT: {selectedProject.id}_VISUALS</span>
                        </div>

                        {activeProjectImages.length > 0 && !failedImages[activeProjectImages[activeImageIndex]] ? (
                          <div className="relative aspect-[16/9] w-full bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden group">
                            
                            {/* Blue drafting coordinate overlays */}
                            <div className="absolute inset-0 pointer-events-none border border-dashed border-sky-500/5 cad-grid"></div>
                            
                            <img 
                              src={activeProjectImages[activeImageIndex]}
                              alt="Spatial render"
                              className="w-full h-full object-cover select-none transition-transform duration-500"
                              referrerPolicy="no-referrer"
                              onError={() => handleImageError(activeProjectImages[activeImageIndex])}
                            />

                            <div className="absolute bottom-2 right-2 bg-black/80 border border-zinc-800 px-2 py-0.5 rounded text-[8px] text-zinc-400 font-mono">
                              RENDER: {activeImageIndex + 1} / {activeProjectImages.length}
                            </div>

                            {/* Chevron controls */}
                            {activeProjectImages.length > 1 && (
                              <>
                                <button 
                                  onClick={() => setActiveImageIndex(prev => (prev - 1 + activeProjectImages.length) % activeProjectImages.length)}
                                  className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/80 border border-zinc-800 hover:border-sky-400 text-zinc-400 hover:text-sky-400 transition-all opacity-0 group-hover:opacity-100"
                                >
                                  <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button 
                                  onClick={() => setActiveImageIndex(prev => (prev + 1) % activeProjectImages.length)}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/80 border border-zinc-800 hover:border-sky-400 text-zinc-400 hover:text-sky-400 transition-all opacity-0 group-hover:opacity-100"
                                >
                                  <ChevronRight className="w-4 h-4" />
                                </button>
                              </>
                            )}
                          </div>
                        ) : (
                          /* Bulletproof High-tech Placeholder if image does not load or is empty */
                          <div className="w-full aspect-[16/9] flex flex-col items-center justify-center bg-zinc-950 border border-dashed border-zinc-800 rounded-lg text-center p-6">
                            <div className="border border-sky-500/10 px-4 py-2.5 bg-sky-950/5 rounded max-w-sm">
                              <div className="text-[10px] text-sky-400 font-bold tracking-widest mb-1 animate-pulse">IMAGE PREPARING</div>
                              <div className="text-[8px] text-zinc-500 font-mono">STATIC_RESOURCE_OFFLINE</div>
                            </div>
                          </div>
                        )}

                        {/* Interactive thumbnails below main render */}
                        {activeProjectImages.length > 1 && (
                          <div className="flex gap-2 overflow-x-auto pt-1 pb-1">
                            {activeProjectImages.map((img, idx) => (
                              <button
                                key={idx}
                                onClick={() => setActiveImageIndex(idx)}
                                className={`w-16 md:w-20 aspect-[16/9] rounded border overflow-hidden shrink-0 transition-all ${
                                  activeImageIndex === idx 
                                    ? "border-sky-400 scale-[1.02] shadow-[0_0_8px_rgba(56,189,248,0.3)]" 
                                    : "border-zinc-800 hover:border-sky-500/50"
                                }`}
                              >
                                {!failedImages[img] ? (
                                  <img src={img} alt="Thumb" className="w-full h-full object-cover" onError={() => handleImageError(img)} />
                                ) : (
                                  <div className="w-full h-full bg-zinc-950 flex items-center justify-center text-[7px] text-zinc-600">PREP</div>
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Concept detail box */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#0c0f16] border border-sky-950/20 p-5 rounded-lg">
                        <div className="md:col-span-3 font-mono text-[9px] text-sky-400 tracking-wider font-bold border-r border-sky-950/30 pr-4 uppercase">
                          SPATIAL CONCEPT DESIGN
                        </div>
                        <div className="md:col-span-9 text-xs leading-relaxed text-zinc-300 font-sans">
                          {selectedProject.concept}
                        </div>
                      </div>

                      {/* Interactive Blueprint Vector Drawing container */}
                      {selectedProject.drawings && selectedProject.drawings.length > 0 && (
                        <div className="space-y-3 font-mono">
                          <h4 className="text-[9px] text-sky-400 font-bold uppercase tracking-widest">
                            CAD INTERACTIVE BLUEPRINT PLOT ({selectedProject.drawings[0].title})
                          </h4>
                          <div className="w-full bg-[#030508] border border-zinc-900 rounded-lg p-4 flex flex-col md:flex-row gap-6 items-center">
                            
                            {/* SVG Box */}
                            <div className="w-full md:w-1/2 aspect-[4/3] bg-black border border-zinc-950 rounded overflow-hidden relative">
                              <div className="absolute inset-0 pointer-events-none border border-dashed border-sky-500/5 cad-grid"></div>
                              {renderBlueprint(selectedProject.drawings[0].svgType)}
                            </div>

                            {/* Spec sheet description on the right */}
                            <div className="w-full md:w-1/2 space-y-3">
                              <span className="font-mono text-[8px] bg-sky-950/40 text-sky-400 border border-sky-800/30 px-2 py-0.5 rounded">
                                PLOT_VERIFIED_SCALE
                              </span>
                              <h5 className="text-sm font-bold text-zinc-200">
                                {selectedProject.drawings[0].title}
                              </h5>
                              <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
                                {selectedProject.drawings[0].description}
                              </p>
                              <div className="pt-2 border-t border-zinc-900 text-[8px] font-mono text-zinc-600 flex justify-between">
                                <span>TYPE: {selectedProject.drawings[0].svgType.toUpperCase()}</span>
                                <span>SYS_STATUS: VERIFIED</span>
                              </div>
                            </div>

                          </div>
                        </div>
                      )}

                      {/* Circulation flow timeline list */}
                      {selectedProject.userFlow && selectedProject.userFlow.length > 0 && (
                        <div className="space-y-4">
                          <h4 className="font-mono text-[9px] text-sky-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                            <Workflow className="w-4 h-4 text-sky-500" />
                            <span>AUDIENCE CIRCULATION & ZONING SCENARIO</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                            {selectedProject.userFlow.map((flow, idx) => (
                              <div key={idx} className="p-4 rounded-lg bg-[#0b0c0e] border border-zinc-900 relative">
                                <span className="absolute top-3 right-3 text-[9px] font-bold text-sky-400 bg-sky-950/50 px-1.5 py-0.2 rounded">
                                  {flow.step}
                                </span>
                                <p className="font-bold text-zinc-200 mt-2">{flow.title}</p>
                                <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                                  {flow.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Materials & Lighting breakdown columns */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-900">
                        
                        <div className="p-4 bg-zinc-950/30 rounded-lg border border-zinc-900 space-y-3">
                          <h5 className="font-mono text-[9px] text-sky-400 font-bold uppercase tracking-wider">
                            MATERIAL SCHEDULE (마감재 세부 계획)
                          </h5>
                          <ul className="space-y-1.5 text-xs text-zinc-400 font-mono">
                            {selectedProject.materialLighting.materials.map((mat, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span>
                                <span>{mat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 bg-zinc-950/30 rounded-lg border border-zinc-900 space-y-3">
                          <h5 className="font-mono text-[9px] text-sky-400 font-bold uppercase tracking-wider">
                            LIGHTING SPECIFICATION (조명 설계안)
                          </h5>
                          <ul className="space-y-1.5 text-xs text-zinc-400 font-mono">
                            {selectedProject.materialLighting.lighting.map((light, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                                <span>{light}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                      {/* Design process steps */}
                      <div className="space-y-3 font-mono">
                        <h4 className="text-[9px] text-zinc-500 font-bold tracking-wider">
                          PROJECT IMPLEMENTATION PROCESS (설계 프로세스 타임라인)
                        </h4>
                        <div className="space-y-2 text-xs">
                          {selectedProject.process.map((step, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <span className="bg-sky-950 border border-sky-400/30 text-sky-300 w-5 h-5 rounded-full flex items-center justify-center font-bold text-[9px] shrink-0">
                                {idx + 1}
                              </span>
                              <p className="text-zinc-400 mt-0.5">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center font-mono">
                      <Folder className="w-12 h-12 text-zinc-700 animate-pulse mb-3" />
                      <p className="text-zinc-500 text-xs">공간 아카이브 도면 파일 로딩 대기 중...</p>
                      <p className="text-[9px] text-zinc-600 mt-1">좌측 도면 목록에서 플롯 파일을 클릭해 주십시오.</p>
                    </div>
                  )}

                </div>

              </div>

              {/* Status footer bar */}
              <div className="bg-[#0c0f16] px-4 py-2 border-t border-sky-950/40 flex items-center justify-between text-[9px] font-mono text-zinc-500 select-none">
                <span>SELECTION_KEY: {selectedProject ? selectedProject.id.toUpperCase() : "NONE"}</span>
                <span>GRID: STABLE (24px)</span>
              </div>

            </div>
          ) : (
            /* Idle workstation layout message */
            <div className="w-full bg-[#0a0c0f]/50 border border-dashed border-zinc-900 rounded-xl p-12 text-center flex flex-col items-center justify-center font-mono">
              <Sparkles className="w-8 h-8 text-sky-400/30 animate-pulse mb-3" />
              <p className="text-zinc-400 text-xs font-semibold tracking-wider">
                SPACE DESIGN ARCHIVE WORKSPACE SYSTEM
              </p>
              <p className="text-[9px] text-zinc-600 max-w-sm mt-1.5">
                상단의 아카이브 폴더 아이콘을 클릭하시면 해당 카테고리의 공간 기획 동선, 평면도, 마감재 정보 및 3D 렌더링 세부 내용을 열람하실 수 있습니다.
              </p>
            </div>
          )}

        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-950/85 bg-black py-12 mt-16 text-center font-mono text-[9px] text-zinc-600 space-y-3">
        <p>© 2026 SOYOUNG KIM. ALL RIGHTS RESERVED.</p>
        <p className="text-zinc-700 tracking-wider">CRAFTED WITH PRECISION SPATIAL PLANNING METHODOLOGY</p>
      </footer>

      {/* ABOUT ME MODAL */}
      {showAboutModal && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#090c10] border border-sky-500/20 max-w-2xl w-full rounded-lg shadow-2xl overflow-hidden font-mono text-zinc-300">
            
            <div className="bg-[#0b0f15] px-4 py-3 border-b border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-sky-500 animate-pulse rounded-full"></span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-sky-400">ARCHIVE_BIO_SOYOUNG_KIM.log</span>
              </div>
              <button onClick={() => setShowAboutModal(false)} className="text-zinc-500 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Visual ID profile placeholder */}
                <div className="md:col-span-5 space-y-4">
                  <div className="relative p-1 rounded border border-sky-500/10 bg-zinc-950 aspect-[3/4] flex flex-col items-center justify-center overflow-hidden cad-grid">
                    <div className="absolute top-2 left-2 text-[7px] text-zinc-700">CAD_PROJECTION_01</div>
                    <div className="absolute bottom-2 right-2 text-[7px] text-sky-500/40">SCALE 1:20</div>
                    <svg className="w-20 h-20 text-sky-400/20 animate-pulse" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                      <polygon points="50,15 90,35 90,75 50,95 10,75 10,35" />
                      <line x1="50" y1="15" x2="50" y2="95" strokeDasharray="2,2" />
                      <line x1="10" y1="35" x2="90" y2="75" strokeDasharray="2,2" />
                      <circle cx="50" cy="55" r="20" stroke="currentColor" strokeOpacity="0.4" />
                    </svg>
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-base font-bold text-zinc-100 tracking-wide font-sans">김소영 (SOYOUNG KIM)</h2>
                    <p className="text-[9px] text-sky-400 mt-1 uppercase tracking-widest font-mono">Exhibition & Space Designer</p>
                  </div>
                </div>

                {/* Profile detail details */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <h4 className="text-[9px] text-sky-400 font-bold uppercase tracking-wider mb-2 border-b border-zinc-900 pb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>Professional Manifesto</span>
                    </h4>
                    <p className="text-[10.5px] leading-relaxed font-sans text-zinc-400">
                      스토리텔링과 정교한 공간 기획, 3D 가상 시각화를 융합하여 몰입감 있는 전시 경험을 연출합니다. 관람자의 동선(Circulation) 흐름을 최적화하고 감각적인 빛과 마감재 스케듈링을 설계하며 높은 공간 품질을 검증하기 위한 상세 드래프팅 훈련을 수료하였습니다.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[9px] text-sky-400 font-bold uppercase tracking-wider mb-2 border-b border-zinc-900 pb-1 flex items-center gap-1.5">
                      <Settings className="w-3.5 h-3.5" />
                      <span>Technical Competency</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[9px]">
                      <div className="flex justify-between border-b border-zinc-900 py-1">
                        <span className="text-zinc-500">AutoCAD Drafting</span>
                        <span className="text-sky-400 font-bold">PROFICIENT</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-900 py-1">
                        <span className="text-zinc-500">SketchUp 3D</span>
                        <span className="text-sky-400 font-bold">EXPERT</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-900 py-1">
                        <span className="text-zinc-500">Enscape Render</span>
                        <span className="text-sky-400 font-bold">EXPERT</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-900 py-1">
                        <span className="text-zinc-500">Concept Planning</span>
                        <span className="text-sky-400 font-bold">EXPERT</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[9px] text-sky-400 font-bold uppercase tracking-wider mb-2 border-b border-zinc-900 pb-1 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Education & Career Focus</span>
                    </h4>
                    <div className="space-y-2 text-[9px]">
                      <div>
                        <div className="flex justify-between text-zinc-200">
                          <span className="font-bold">SPACE DESIGN MASTERCLASS ACADEMY</span>
                          <span className="text-zinc-500 font-mono">2024 - 2025</span>
                        </div>
                        <p className="text-zinc-500 font-sans mt-0.5">전시 공간 디자인, 유기적 동선 수립 및 실시 설계 도면화 수료</p>
                      </div>
                      <div>
                        <div className="flex justify-between text-zinc-200">
                          <span className="font-bold">FINE ARTS & EXHIBITION PLANNING BACHELOR</span>
                          <span className="text-zinc-500 font-mono">2018 - 2023</span>
                        </div>
                        <p className="text-zinc-500 font-sans mt-0.5">스토리텔링 기반 전시 레이아웃 시나리오 시각 커뮤니케이션 이수</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            <div className="bg-[#0b0f15] px-6 py-4 border-t border-zinc-900 flex justify-end gap-3">
              <button
                onClick={() => { setShowAboutModal(false); setShowContactModal(true); }}
                className="bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 text-sky-300 px-4 py-2 rounded text-[10px] font-bold tracking-widest transition-all"
              >
                REQUEST CONTACT
              </button>
              <button onClick={() => setShowAboutModal(false)} className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 px-4 py-2 rounded text-[10px] font-bold tracking-widest transition-all">
                CLOSE
              </button>
            </div>

          </div>
        </div>
      )}

      {/* CONTACT MODAL */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#090c10] border border-sky-500/20 max-w-md w-full rounded-lg shadow-2xl overflow-hidden font-mono text-zinc-300">
            
            <div className="bg-[#0b0f15] px-4 py-3 border-b border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-sky-500 animate-pulse rounded-full"></span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-sky-400">NETWORK_PORT_CONTACT_SOCKET.log</span>
              </div>
              <button onClick={() => setShowContactModal(false)} className="text-zinc-500 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-sky-950/20 border border-sky-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-xs font-bold text-zinc-100 tracking-wider">SECURE CONTACT CHANNELS</h3>
                <p className="text-[9px] text-zinc-500">Exhibition Space Design Applicant — Soyoung Kim</p>
              </div>

              <div className="space-y-3 bg-zinc-950 p-4 rounded border border-zinc-900 text-[10px]">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500">EMAIL:</span>
                  <a href="mailto:zssaya3600@gmail.com" className="text-sky-400 font-bold hover:underline">zssaya3600@gmail.com</a>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500">PHONE:</span>
                  <span className="text-zinc-300 font-bold">+82 (010) 5421-XXXX</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500">LOCATION:</span>
                  <span className="text-zinc-300 font-bold">Seoul, South Korea</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-zinc-500">APPLYING:</span>
                  <span className="text-sky-400 font-bold">SPACE DESIGN DEPT.</span>
                </div>
              </div>

              <button
                onClick={handleDownloadPDF}
                className="w-full bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 hover:border-sky-400 text-sky-300 py-2.5 rounded text-[10px] font-bold tracking-widest transition-all uppercase"
              >
                DOWNLOAD PORTFOLIO PDF (24.5MB)
              </button>
            </div>

            <div className="bg-[#0b0f15] px-6 py-4 border-t border-zinc-900 flex justify-end">
              <button onClick={() => setShowContactModal(false)} className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 px-5 py-2 rounded text-[10px] font-bold tracking-widest transition-all">
                CLOSE SOCKET
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
