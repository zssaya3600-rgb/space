import React, { useState, useEffect } from "react";
import { 
  Folder, 
  Terminal, 
  Cpu, 
  Layers, 
  FileText, 
  X, 
  Maximize2, 
  Minimize2, 
  Search, 
  Clock, 
  Shield, 
  Plus, 
  Trash2, 
  Edit, 
  Check, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  Code,
  Sliders,
  Settings,
  HelpCircle,
  FileCode,
  Workflow,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Eye
} from "lucide-react";
import { defaultCategories, defaultProjects } from "./data";
import { Category, Project } from "./types";
import CADDrawings from "./components/CADDrawings";
import CADViewport from "./components/CADViewport";

export default function App() {
  // Application Data States (persisted in localStorage)
  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem("workspace_categories");
    return saved ? JSON.parse(saved) : defaultCategories;
  });
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem("workspace_projects");
    return saved ? JSON.parse(saved) : defaultProjects;
  });

  // Selected state
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Real-time states
  const [time, setTime] = useState("");
  const [connectionStatus, setConnectionStatus] = useState("SECURE_DRAFTING");
  
  // Admin & Security states
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  // Project creation/editing states
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Form states for adding/editing project
  const [formTitle, setFormTitle] = useState("");
  const [formSubtitle, setFormSubtitle] = useState("");
  const [formCategory, setFormCategory] = useState("01");
  const [formRole, setFormRole] = useState("");
  const [formTools, setFormTools] = useState("");
  const [formConcept, setFormConcept] = useState("");
  const [formProcess, setFormProcess] = useState("");
  const [formMaterials, setFormMaterials] = useState("");
  const [formLighting, setFormLighting] = useState("");
  const [formMatDesc, setFormMatDesc] = useState("");
  const [formDrawingType, setFormDrawingType] = useState<"exhibition-floor" | "retail-layout" | "minimal-lounge" | "detail-section" | "vr-gallery">("exhibition-floor");
  const [formUserFlow, setFormUserFlow] = useState(""); // JSON format or semi-colon separated
  const [formImages, setFormImages] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // System notification
  const [notification, setNotification] = useState<string | null>(null);

  // Update clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Reset image view index on project change
  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedProject]);

  // Sync to localStorage
  const saveAllData = (updatedCategories: Category[], updatedProjects: Project[]) => {
    localStorage.setItem("workspace_categories", JSON.stringify(updatedCategories));
    localStorage.setItem("workspace_projects", JSON.stringify(updatedProjects));
  };

  const triggerNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  // Login handler
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "1111") {
      setIsAdmin(true);
      setShowAdminModal(false);
      setPasswordInput("");
      setPasswordError("");
      triggerNotification("ADMIN AUTHENTICATION SUCCESSFUL. CAD DRAFTING PERMISSION GRANTED.");
    } else {
      setPasswordError("INVALID PASSWORD. ACCESS DENIED.");
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    triggerNotification("ADMIN LOGGED OUT. RETURNED TO READ-ONLY MODE.");
  };

  // Save Project Handler
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formTitle || !formSubtitle) {
      alert("프로젝트 제목과 부제목은 필수 항목입니다.");
      return;
    }

    const parsedProcess = formProcess.split("\n").filter(line => line.trim() !== "");
    const parsedTools = formTools.split(",").map(t => t.trim()).filter(Boolean);
    const parsedMaterials = formMaterials.split(",").map(m => m.trim()).filter(Boolean);
    const parsedLighting = formLighting.split(",").map(l => l.trim()).filter(Boolean);

    // Parse simple user flow
    const parsedUserFlow = formUserFlow.split("\n").map((line, idx) => {
      const parts = line.split(":");
      return {
        step: parts[0]?.trim() || `Step ${idx + 1}`,
        title: parts[1]?.trim() || "Zoning Step",
        description: parts[2]?.trim() || "Visitor path definition & line of sight calibration."
      };
    });

    const projectData: Project = {
      id: editingProject ? editingProject.id : `custom-${Date.now()}`,
      categoryId: formCategory,
      title: formTitle,
      subtitle: formSubtitle,
      role: formRole || "Space Designer",
      tools: parsedTools.length > 0 ? parsedTools : ["SketchUp", "AutoCAD"],
      concept: formConcept || "공간적 흐름과 빛의 인터랙션을 유도하는 새로운 차원의 시각 아카이빙 솔루션입니다.",
      process: parsedProcess.length > 0 ? parsedProcess : ["기획 연구", "CAD 평면 구성", "3D 스케치업 검증"],
      drawings: [
        {
          title: "설계 평면 및 공간 구성도",
          description: "공간 구획과 최적 동선 시나리오 분석 도면.",
          svgType: formDrawingType
        }
      ],
      userFlow: parsedUserFlow.length > 0 ? parsedUserFlow : [
        { step: "Entrance", title: "Welcome & Induction", description: "관람객의 시선 유입을 부드럽게 유도하는 진입 조닝" }
      ],
      materialLighting: {
        materials: parsedMaterials.length > 0 ? parsedMaterials : ["마이크로시멘트", "강화유리"],
        lighting: parsedLighting.length > 0 ? parsedLighting : ["3000K 간접조명"],
        description: formMatDesc || "시각적 피로감을 배제하고 재질감을 강화하는 은은한 조명 계획."
      },
      renderingUrl: editingProject?.renderingUrl || "custom_render",
      finalImageUrl: editingProject?.finalImageUrl || "custom_final",
      images: formImages
    };

    let newProjects = [...projects];
    if (editingProject) {
      newProjects = projects.map(p => p.id === editingProject.id ? projectData : p);
      triggerNotification(`PROJECT "${formTitle}" SUCCESSFULLY UPDATED.`);
    } else {
      newProjects.push(projectData);
      triggerNotification(`NEW PROJECT "${formTitle}" CREATED.`);
    }

    setProjects(newProjects);
    saveAllData(categories, newProjects);
    setShowAddProjectModal(false);
    setEditingProject(null);
    
    // Auto focus the updated project if it matches current view
    if (selectedCategory?.id === formCategory) {
      setSelectedProject(projectData);
    }
  };

  // Open Edit form
  const openEditProject = (project: Project) => {
    setEditingProject(project);
    setFormTitle(project.title);
    setFormSubtitle(project.subtitle);
    setFormCategory(project.categoryId);
    setFormRole(project.role);
    setFormTools(project.tools.join(", "));
    setFormConcept(project.concept);
    setFormProcess(project.process.join("\n"));
    setFormMaterials(project.materialLighting.materials.join(", "));
    setFormLighting(project.materialLighting.lighting.join(", "));
    setFormMatDesc(project.materialLighting.description);
    setFormDrawingType(project.drawings[0]?.svgType || "exhibition-floor");
    setFormImages(project.images || []);
    
    const flowText = project.userFlow.map(f => `${f.step}:${f.title}:${f.description}`).join("\n");
    setFormUserFlow(flowText);
    
    setShowAddProjectModal(true);
  };

  // Open Add Form
  const openAddProject = () => {
    setEditingProject(null);
    setFormTitle("");
    setFormSubtitle("");
    setFormCategory(selectedCategory?.id || "01");
    setFormRole("Space & Exhibition Designer");
    setFormTools("SketchUp, AutoCAD, Enscape, Photoshop");
    setFormConcept("");
    setFormProcess("Site Analysis\nZoning Plan\nCAD Drafting\n3D Modeling\nRendering");
    setFormMaterials("투명 폴리카보네이트 복층판, 재생 무광 스테인리스 스틸");
    setFormLighting("3000K 고연색성(CRI 95+) LED 라인바, 바닥 매립형 광섬유 포인트 조명");
    setFormMatDesc("공간의 깊이와 자재 본연의 물성을 온전히 강조하는 세심한 은광학 설계.");
    setFormDrawingType("exhibition-floor");
    setFormUserFlow("Zone 1:Welcome Area:관람객의 호기심을 유도하는 낮은 조도의 저밀도 진입동선\nZone 2:Core Experience:브랜드 핵심 콘텐츠가 입체감 있게 전달되는 인터랙티브 존");
    setFormImages([]);
    
    setShowAddProjectModal(true);
  };

  // Image upload compression & base64 conversion helper
  const processAndAddImage = (file: File) => {
    if (!file.type.startsWith("image/")) {
      triggerNotification("ERROR: SELECTED FILE IS NOT AN IMAGE.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // High quality web resizing: max 1200px width/height to protect local storage quota
        const MAX_WIDTH = 1200;
        const MAX_HEIGHT = 1200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedBase64 = canvas.toDataURL("image/jpeg", 0.75);
          setFormImages(prev => [...prev, compressedBase64]);
          triggerNotification("IMAGE LOADED AND COMPRESSED SUCCESSFULLY.");
        }
      };
      img.onerror = () => {
        triggerNotification("ERROR: FAILED TO PROCESS IMAGE.");
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      Array.from(e.dataTransfer.files).forEach((file) => {
        processAndAddImage(file as File);
      });
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      Array.from(e.target.files).forEach((file) => {
        processAndAddImage(file as File);
      });
    }
  };

  const removeFormImage = (indexToRemove: number) => {
    setFormImages(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  // Delete project
  const handleDeleteProject = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete "${name}" from the CAD Workspace?`)) {
      const updated = projects.filter(p => p.id !== id);
      setProjects(updated);
      saveAllData(categories, updated);
      if (selectedProject?.id === id) {
        setSelectedProject(null);
      }
      triggerNotification(`PROJECT "${name}" HAS BEEN REMOVED FROM DATABASE.`);
    }
  };

  // Reset to default action
  const handleResetDefaults = () => {
    if (window.confirm("공간 아카이브를 초기 출고 상태(Default)로 리셋하시겠습니까? (커스텀 데이터 삭제)")) {
      setCategories(defaultCategories);
      setProjects(defaultProjects);
      saveAllData(defaultCategories, defaultProjects);
      setSelectedCategory(null);
      setSelectedProject(null);
      triggerNotification("WORKSPACE RESTORED TO ARCHITECTURAL ORIGIN.");
    }
  };

  // Filter projects for selected category
  const activeCategoryProjects = selectedCategory 
    ? projects.filter(p => p.categoryId === selectedCategory.id) 
    : [];

  // Filter search matches globally
  const filteredSearchProjects = searchQuery.trim() !== ""
    ? projects.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.concept.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  return (
    <div className="min-h-screen bg-[#08090b] text-zinc-100 flex flex-col relative font-sans overflow-hidden select-none scanline">
      
      {/* Background Ambience Spark */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* FIXED TOP MENU BAR - Simulation of High-end CAD OS Interface */}
      <header className="w-full h-11 border-b border-sky-950/40 bg-[#0a0d12]/90 backdrop-blur-md px-4 flex items-center justify-between text-xs font-mono tracking-wider z-40 select-none">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sky-400 font-bold">
            <Cpu className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="tracking-widest">ARCH-WORKSTATION v4.9</span>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-zinc-400">
            <span className="hover:text-sky-400 cursor-pointer transition-colors">File</span>
            <span className="hover:text-sky-400 cursor-pointer transition-colors">Edit</span>
            <span className="hover:text-sky-400 cursor-pointer transition-colors">View</span>
            <span className="hover:text-sky-400 cursor-pointer transition-colors">History</span>
            <span className="hover:text-sky-400 cursor-pointer transition-colors">Window</span>
            <span 
              onClick={() => {
                alert("SPACE DESIGN ARCHIVE WORKSTATION\n--------------------------------\n• AutoCAD & SketchUp 기반 포트폴리오 뷰어\n• 가상 공간 동선 & 관람 흐름 특화 레이아웃\n• 관리 비밀번호: 1111");
              }} 
              className="hover:text-sky-400 cursor-pointer transition-colors flex items-center gap-1 text-sky-500/80"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Help
            </span>
          </nav>
        </div>

        {/* Top bar right area */}
        <div className="flex items-center gap-4">
          {/* Admin Indicator button */}
          {isAdmin ? (
            <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/40 px-3 py-1 rounded text-emerald-400 text-[10px] font-bold">
              <Shield className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>ADMIN: PRIVILEGED</span>
              <button 
                onClick={handleAdminLogout} 
                className="ml-1 bg-emerald-800/60 hover:bg-emerald-700 text-white px-1.5 py-0.2 rounded text-[9px] uppercase tracking-normal"
              >
                Exit
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setShowAdminModal(true)}
              className="flex items-center gap-1.5 bg-zinc-900 hover:bg-sky-950/40 border border-zinc-800 hover:border-sky-500/30 px-3 py-1 rounded text-zinc-400 hover:text-sky-400 transition-all text-[10px]"
            >
              <Settings className="w-3 h-3 text-sky-500/70" />
              <span>Admin Login</span>
            </button>
          )}

          <div className="hidden lg:flex items-center gap-2 bg-[#090b0e] px-2.5 py-1 rounded border border-zinc-800 text-[10px] text-zinc-500">
            <span>SYS_STATUS:</span>
            <span className="text-emerald-400 font-bold">{connectionStatus}</span>
          </div>

          {/* Clock */}
          <div className="flex items-center gap-2 text-sky-400 bg-sky-950/10 px-3 py-1 rounded border border-sky-900/20 font-bold">
            <Clock className="w-3.5 h-3.5 text-sky-400/80" />
            <span className="tabular-nums">{time || "08:08:54"}</span>
          </div>
        </div>
      </header>

      {/* NOTIFICATION OVERLAY POPUP */}
      {notification && (
        <div className="fixed top-14 left-1/2 transform -translate-x-1/2 bg-[#06090e] border-l-4 border-sky-400 text-sky-300 px-6 py-3 rounded shadow-2xl z-50 flex items-center gap-3 font-mono text-xs tracking-wide max-w-lg w-full animate-bounce">
          <Terminal className="w-5 h-5 text-sky-400 shrink-0" />
          <div className="flex-1">
            <p className="font-bold text-[10px] text-zinc-400">ARCH-SYSTEM TELEMETRY</p>
            <p>{notification}</p>
          </div>
          <button onClick={() => setNotification(null)} className="text-zinc-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* MAIN LAYOUT */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col justify-between gap-10 z-10 relative">
        
        {/* UPPER MAIN SECTION: TITLE & FOLDERS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: VERY LARGE HIGH-END ARCHITECTURAL TYPOGRAPHY WITH SPACHIOUS LINE HEIGHT */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4 md:pt-8" id="hero-title-block">
            <div>
              {/* Architectural Coord Tag */}
              <div className="font-mono text-[9px] text-sky-500/60 mb-4 tracking-[0.25em] uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-sky-400 inline-block"></span>
                <span>YEONGJUN KIM • PORTFOLIO CORE [41.7]</span>
              </div>
              
              {/* Very large typography with high line spacing (행간을 많이 띄운 대형 타이포그래피) */}
              <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl tracking-[0.16em] text-zinc-100 flex flex-col leading-[1.65] md:leading-[1.75]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-sky-400">SPACE</span>
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-zinc-400">DESIGN</span>
                <span className="tracking-[0.2em] text-zinc-500 hover:text-sky-400 transition-colors duration-500">PORTFOLIO</span>
              </h1>

              {/* Subtitle / Manifesto in bilingual (Korean & English) */}
              <div className="mt-8 md:mt-12 space-y-4 max-w-md border-l border-sky-950/60 pl-4 py-2">
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed tracking-wide">
                  “저는 공간 기획, 도면화, 3D 모델링, VR 시뮬레이션을 통해 사용자가 경험하는 공간을 설계합니다.”
                </p>
                <p className="text-zinc-500 text-[11px] font-mono leading-relaxed italic">
                  “I design spatial experiences through planning, drawing, 3D modeling, and virtual simulation.”
                </p>
              </div>
            </div>

            {/* Simulated Live CAD Viewport embed on the left side to reinforce technical architecture theme */}
            <div className="mt-8 hidden lg:block">
              <div className="text-[10px] font-mono text-zinc-500 mb-2 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-sky-500" />
                <span>DYNAMIC SPACIAL WIREFRAME ANALYSIS</span>
              </div>
              <CADViewport />
            </div>
          </div>

          {/* RIGHT COLUMN: REVOLUTIONARY Apple Finder / CAD WORKSTATION FOLDER SELECTIONS */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Folder panel header */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></span>
                </div>
                <span className="font-mono text-xs text-zinc-400 font-semibold tracking-wider">ROOT_DIRECTORY / ARCHIVE_CATEGORIES</span>
              </div>
              
              {/* Optional Reset/Clear custom changes for demo purposes */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={handleResetDefaults}
                  className="text-[9px] font-mono text-zinc-500 hover:text-sky-400 transition-colors underline"
                  title="Reset modified mock values to default"
                >
                  Factory Reset
                </button>
              </div>
            </div>

            {/* Folder Grid - Elegant 3D / CAD Minimalistic graphic button frames */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((cat) => {
                const projectCount = projects.filter(p => p.categoryId === cat.id).length;
                return (
                  <div
                    key={cat.id}
                    id={`folder-${cat.id}`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      // Auto-select first project in this category if exists
                      const catProjs = projects.filter(p => p.categoryId === cat.id);
                      if (catProjs.length > 0) {
                        setSelectedProject(catProjs[0]);
                      } else {
                        setSelectedProject(null);
                      }
                      // Smooth scroll down to window if on mobile
                      if (window.innerWidth < 1024) {
                        setTimeout(() => {
                          document.getElementById("finder-window-section")?.scrollIntoView({ behavior: "smooth" });
                        }, 150);
                      }
                    }}
                    className={`group relative p-4 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      selectedCategory?.id === cat.id 
                        ? "bg-[#0f141c] border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)] translate-y-[-4px]" 
                        : "bg-[#0b0c0e] hover:bg-[#0f1115] border-zinc-800 hover:border-sky-500/30 hover:shadow-[0_4px_12px_rgba(56,189,248,0.06)] hover:translate-y-[-3px]"
                    }`}
                  >
                    {/* Folder Corner Accent Line */}
                    <div className="absolute top-0 right-0 w-8 h-[1px] bg-gradient-to-l from-sky-400/40 to-transparent"></div>
                    <div className="absolute top-0 right-0 h-8 w-[1px] bg-gradient-to-b from-sky-400/40 to-transparent"></div>

                    <div className="flex items-start justify-between">
                      {/* Technical Folder Code Tag */}
                      <span className="font-mono text-[9px] font-bold text-zinc-500 group-hover:text-sky-400 transition-colors">
                        SYS_LOC // 00{cat.id}
                      </span>
                      
                      {/* Project count indicator badge */}
                      <span className="font-mono text-[9px] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">
                        {cat.id === "08" ? "PROFILE" : `${projectCount} PLOTS`}
                      </span>
                    </div>

                    {/* Main Category Title Block */}
                    <div className="mt-4 flex items-center gap-3">
                      {/* Elegant Mini Custom Folder Icon */}
                      <div className="p-2.5 rounded-lg bg-sky-950/30 border border-sky-900/20 group-hover:bg-sky-950/50 group-hover:border-sky-400/30 transition-all">
                        <Folder className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-sm font-semibold tracking-wide text-zinc-200 group-hover:text-white transition-colors flex items-center gap-1.5">
                          <span className="text-sky-400/80 font-mono text-xs">{cat.num}</span>
                          <span>{cat.title}</span>
                        </h3>
                        <p className="text-[11px] text-zinc-500 truncate group-hover:text-zinc-400 transition-colors mt-0.5">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Status bar of folders */}
                    <div className="mt-3 pt-2.5 border-t border-zinc-900/50 flex items-center justify-between text-[8px] font-mono text-zinc-600 group-hover:text-sky-400/50 transition-colors">
                      <span>DRAFTING: COMPLETED</span>
                      <span className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-sky-500"></span>
                        ONLINE
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Global Search Block */}
            <div className="bg-[#0b0c0e] border border-zinc-800 p-3 rounded-lg flex items-center gap-3">
              <Search className="w-4 h-4 text-zinc-500" />
              <input 
                type="text" 
                placeholder="공간 기획, 도면, 사용 툴, 또는 키워드로 프로젝트를 검색하세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none text-xs text-zinc-300 placeholder-zinc-600 focus:outline-none w-full font-mono"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-zinc-500 hover:text-white text-[10px] font-mono">
                  CLEAR
                </button>
              )}
            </div>

            {/* Search results popup if query exists */}
            {searchQuery && (
              <div className="bg-[#0c0f16] border border-sky-900/50 rounded-lg p-4 space-y-2 max-h-60 overflow-y-auto">
                <p className="text-[10px] font-mono text-sky-400 font-semibold tracking-wider">
                  SEARCH MATCHES ({filteredSearchProjects.length}):
                </p>
                {filteredSearchProjects.length === 0 ? (
                  <p className="text-xs text-zinc-500 font-mono py-1">일치하는 기획 작업 데이터가 없습니다.</p>
                ) : (
                  filteredSearchProjects.map(p => (
                    <div 
                      key={p.id}
                      onClick={() => {
                        const targetCat = categories.find(c => c.id === p.categoryId);
                        if (targetCat) setSelectedCategory(targetCat);
                        setSelectedProject(p);
                        setSearchQuery("");
                      }}
                      className="p-2 hover:bg-sky-950/20 border border-transparent hover:border-sky-500/20 rounded cursor-pointer transition-colors flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="text-sky-400 font-bold font-mono mr-2">[{categories.find(c => c.id === p.categoryId)?.title}]</span>
                        <span className="text-zinc-300 font-semibold">{p.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">{p.tools[0]}</span>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* LOWER MAIN SECTION: DEEP ARCHIVE DISPLAY WINDOW (Apple Finder / CAD Layout Window) */}
        <section id="finder-window-section" className="w-full mt-4 transition-all duration-300">
          
          {selectedCategory ? (
            <div className="w-full bg-[#0a0c0f] border border-sky-950/60 rounded-xl shadow-2xl overflow-hidden flex flex-col min-h-[500px]">
              
              {/* Window Bar Controls */}
              <div className="bg-[#0e121a] px-4 py-3 border-b border-sky-950/40 flex items-center justify-between select-none">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <button 
                      onClick={() => {
                        setSelectedCategory(null);
                        setSelectedProject(null);
                      }}
                      className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-400 flex items-center justify-center text-[7px] text-rose-900 font-bold"
                      title="Close workspace folder"
                    >
                      ×
                    </button>
                    <span className="w-3 h-3 rounded-full bg-amber-500/40"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/40"></span>
                  </div>
                  
                  {/* Category Path Info */}
                  <div className="h-4 w-[1px] bg-zinc-800 mx-2"></div>
                  <span className="font-mono text-xs text-sky-400 font-semibold tracking-wider flex items-center gap-1.5">
                    <Folder className="w-3.5 h-3.5" />
                    <span>WORK STATION :</span>
                    <span className="text-zinc-300">00{selectedCategory.id} / {selectedCategory.title}</span>
                  </span>
                </div>

                {/* Optional Admin Action inside active Window */}
                {isAdmin && selectedCategory.id !== "08" && (
                  <button 
                    onClick={openAddProject}
                    className="flex items-center gap-1 bg-sky-950/80 border border-sky-400/30 text-sky-300 hover:bg-sky-900 px-2.5 py-1 rounded text-[10px] font-mono font-bold transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>ADD PLOT</span>
                  </button>
                )}
              </div>

              {/* WINDOW WORKSPACE PANEL CONTAINER */}
              {selectedCategory.id === "08" ? (
                
                /* SPECIAL CATEGORY: 08 ABOUT ME (PROFILE WINDOW) */
                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#090b0e]">
                  
                  {/* Profile left aspect */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="relative p-5 rounded-lg border border-sky-950/60 bg-gradient-to-b from-[#0e1219] to-[#0a0d11]">
                      
                      {/* Portrait Wireframe Outline to signify 3D human modeling */}
                      <div className="w-full h-48 bg-zinc-950/60 border border-dashed border-sky-500/25 rounded-md flex flex-col items-center justify-center relative overflow-hidden cad-grid mb-4">
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                          <div className="w-36 h-36 border border-sky-500 rounded-full animate-ping"></div>
                        </div>
                        {/* Human scale vector placeholder */}
                        <svg className="w-24 h-24 text-sky-500/30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                          <circle cx="50" cy="30" r="15" />
                          <path d="M 25,75 C 25,50 75,50 75,75 Z" />
                          <line x1="50" y1="0" x2="50" y2="100" strokeDasharray="2,2" stroke="rgba(56,189,248,0.2)" />
                          <line x1="0" y1="50" x2="100" y2="50" strokeDasharray="2,2" stroke="rgba(56,189,248,0.2)" />
                        </svg>
                        <span className="absolute bottom-2 right-2 text-[8px] font-mono text-sky-500/60">SYS_DRAFT_SCALE 1:1</span>
                        <span className="absolute top-2 left-2 text-[8px] font-mono text-zinc-500">HUMAN_SCALE_CHECK</span>
                      </div>

                      <h2 className="font-display text-xl font-bold tracking-wider text-zinc-100 flex items-center justify-between">
                        <span>김영준</span>
                        <span className="font-mono text-xs text-sky-400 font-normal">Yeong-jun Kim</span>
                      </h2>
                      <p className="font-mono text-[11px] text-zinc-500 mt-1 uppercase tracking-widest">
                        Exhibition Space Planner & 3D Modeler
                      </p>

                      <div className="mt-4 pt-4 border-t border-zinc-900 text-xs space-y-2.5 font-mono text-zinc-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-sky-400/70" />
                          <span>Seoul, South Korea</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-sky-400/70" />
                          <span>zssaya3600@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-sky-400/70" />
                          <span>+82 (010) 5421-XXXX</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-lg border border-zinc-800/80 bg-[#0a0d11]">
                      <h4 className="font-mono text-[10px] text-sky-400 font-bold uppercase tracking-wider mb-3">
                        DRAFTING TOOL PROFICIENCY
                      </h4>
                      <div className="space-y-3 font-mono text-[11px]">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-zinc-300">AutoCAD (실시도면, 디테일 단면)</span>
                            <span className="text-sky-400">90%</span>
                          </div>
                          <div className="w-full bg-zinc-900 h-1.5 rounded overflow-hidden border border-zinc-800">
                            <div className="bg-sky-400 h-full rounded" style={{ width: "90%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-zinc-300">SketchUp (3D 매스, 컴포넌트 모델링)</span>
                            <span className="text-sky-400">95%</span>
                          </div>
                          <div className="w-full bg-zinc-900 h-1.5 rounded overflow-hidden border border-zinc-800">
                            <div className="bg-sky-400 h-full rounded" style={{ width: "95%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-zinc-300">Enscape / Real-time Rendering</span>
                            <span className="text-sky-400">88%</span>
                          </div>
                          <div className="w-full bg-zinc-900 h-1.5 rounded overflow-hidden border border-zinc-800">
                            <div className="bg-sky-400 h-full rounded" style={{ width: "88%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-zinc-300">VR Space Simulation HMD</span>
                            <span className="text-sky-400">85%</span>
                          </div>
                          <div className="w-full bg-zinc-900 h-1.5 rounded overflow-hidden border border-zinc-800">
                            <div className="bg-sky-400 h-full rounded" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Profile right aspect */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-950/20">
                      <h3 className="font-display text-lg font-bold text-zinc-100 flex items-center gap-2">
                        <Award className="w-5 h-5 text-sky-400" />
                        <span>공간 및 전시 디자이너로서의 철학</span>
                      </h3>
                      
                      <div className="mt-4 space-y-4 text-xs text-zinc-400 leading-relaxed font-sans">
                        <p>
                          저는 단순한 장식으로서의 인테리어가 아닌, 브랜드의 가치와 관람객의 최적 동선 시나리오가 유기적으로 얽힌 <strong>'실재하는 시각적 스토리텔링'</strong>을 설계합니다. 
                        </p>
                        <p>
                          현재 학원에서 <strong>AutoCAD</strong>를 통해 가구 철구조 및 상세 단면 도면 작도법을 깊이 있게 연마하고 있으며, <strong>SketchUp 컴포넌트 모델링</strong>과 <strong>Enscape 실시간 렌더링</strong>을 적용해 가공되지 않은 3D 날것의 시공 정밀성을 보장합니다.
                        </p>
                        <p>
                          더 나아가 가상 공간(VR HMD) 환경에 대비하여 사용자의 시선 피로, 조도 변화율, 멀미 저항 반경을 과학적으로 계산하는 <strong>체험형 시뮬레이션</strong> 능력을 축적하고 있습니다. 실제 전시장 시공이 완벽하게 구현되도록 끝까지 조율 가능한 주도적 신입 디자이너를 목표로 합니다.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#0a0d11]">
                      <h3 className="font-display text-base font-bold text-zinc-200 mb-4">학습 & 훈련 성과 (Academy Achievements)</h3>
                      <div className="space-y-4 font-mono text-xs">
                        <div className="flex gap-4">
                          <span className="text-sky-400 font-bold shrink-0">PRESENT</span>
                          <div>
                            <p className="text-zinc-100 font-bold">Space & Exhibition Design Master Class</p>
                            <p className="text-zinc-500 mt-1">
                              SketchUp Pro 고난도 3D 모델링 스터디, AutoCAD 정밀 도면집(Floor / RCP / Elevation) 드래프팅 훈련 이수 중. Enscape/Twinmotion 연동 고해상도 공간 렌더링 및 VR 시선 앵커 시뮬레이션 구현.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4 border-t border-zinc-900/60 pt-4">
                          <span className="text-zinc-600 font-bold shrink-0">CORE</span>
                          <div>
                            <p className="text-zinc-100 font-bold">Spatial Zoning & Visitor Flow Analytics</p>
                            <p className="text-zinc-500 mt-1">
                              관람자 동선 분산 계획(Circulation Zoning), 전시 그래픽 및 웨이파인딩 사인 시스템 연구, 가변형 전시 벽체(Pivot Wall)의 공학적 회전 반경 계산 모형 구축.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              ) : (
                
                /* STANDARD CATEGORIES: DETAILED PROJECT EXPLORATION LAYER */
                <div className="flex-1 flex flex-col lg:flex-row bg-[#08090b]">
                  
                  {/* Left panel of Drawer: List of projects under this active category */}
                  <div className="w-full lg:w-72 border-r border-sky-950/20 bg-[#090b0e] flex flex-col shrink-0">
                    <div className="p-3 border-b border-sky-950/20 bg-[#0c1017] flex items-center justify-between">
                      <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                        PLOT DOCUMENTS ({activeCategoryProjects.length})
                      </span>
                    </div>

                    <div className="flex-1 overflow-y-auto max-h-[300px] lg:max-h-[600px] p-2 space-y-1">
                      {activeCategoryProjects.length === 0 ? (
                        <div className="p-4 text-center text-zinc-600 font-mono text-xs">
                          NO PROJECTS DETECTED.
                        </div>
                      ) : (
                        activeCategoryProjects.map((proj) => (
                          <div
                            key={proj.id}
                            onClick={() => setSelectedProject(proj)}
                            className={`p-3 rounded-lg border cursor-pointer text-left transition-all ${
                              selectedProject?.id === proj.id
                                ? "bg-sky-950/30 border-sky-500 text-white"
                                : "bg-transparent border-transparent text-zinc-400 hover:bg-[#11151e] hover:text-zinc-200"
                            }`}
                          >
                            <p className="text-[10px] font-mono text-sky-500 tracking-wide font-semibold mb-1">
                              {proj.role.split("&")[0]?.trim() || "Designer"}
                            </p>
                            <h4 className="text-xs font-semibold leading-snug line-clamp-2">
                              {proj.title}
                            </h4>
                            <div className="mt-2 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                              <span>{proj.tools[0]}</span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-2.5 h-2.5" />
                                view
                              </span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Right panel of Drawer: Active Deep-Dive Blueprint Viewer & Information Block */}
                  <div className="flex-1 p-5 md:p-8 space-y-8 overflow-y-auto max-h-[750px] bg-[#08090c]">
                    
                    {selectedProject ? (
                      <div className="space-y-8">
                        
                        {/* Project Header Block */}
                        <div className="border-b border-zinc-900 pb-5">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                              <span className="font-mono text-[9px] uppercase tracking-widest text-sky-400 bg-sky-950/40 px-2 py-0.5 rounded border border-sky-900/30">
                                {selectedProject.role}
                              </span>
                              <h3 className="font-display text-2xl font-bold tracking-tight text-white mt-2">
                                {selectedProject.title}
                              </h3>
                              <p className="text-zinc-400 text-xs mt-1.5 font-sans">
                                {selectedProject.subtitle}
                              </p>
                            </div>

                            {/* Project Admin actions */}
                            {isAdmin && (
                              <div className="flex items-center gap-2 font-mono text-xs shrink-0">
                                <button
                                  onClick={() => openEditProject(selectedProject)}
                                  className="flex items-center gap-1 bg-sky-900/40 hover:bg-sky-900 border border-sky-600/40 text-sky-200 px-3 py-1 rounded transition-all"
                                >
                                  <Edit className="w-3.5 h-3.5" />
                                  <span>Edit</span>
                                </button>
                                <button
                                  onClick={() => handleDeleteProject(selectedProject.id, selectedProject.title)}
                                  className="flex items-center gap-1 bg-rose-950/40 hover:bg-rose-900 border border-rose-600/40 text-rose-300 px-3 py-1 rounded transition-all"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                  <span>Delete</span>
                                </button>
                              </div>
                            )}
                          </div>

                          {/* Technical attributes tags */}
                          <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-mono">
                            <span className="text-zinc-500 mr-1 self-center">SOFTWARE USED:</span>
                            {selectedProject.tools.map((t, idx) => (
                              <span key={idx} className="bg-zinc-900 border border-zinc-800 text-sky-400 px-2 py-0.5 rounded">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Portfolio Render Showcase */}
                        {selectedProject.images && selectedProject.images.length > 0 ? (
                          <div className="space-y-3 font-mono">
                            <div className="flex items-center justify-between">
                              <h4 className="text-[10px] text-sky-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                                <Sparkles className="w-4 h-4 text-sky-400" />
                                <span>REAL-TIME 3D SPATIAL RENDERS ({selectedProject.images.length})</span>
                              </h4>
                              <span className="text-[9px] text-zinc-500">PLOT_ID: {selectedProject.id}_VISUALS</span>
                            </div>

                            {/* Main Large Visual frame */}
                            <div className="relative aspect-[16/9] w-full bg-zinc-950/40 border border-zinc-900 rounded-lg overflow-hidden group/img">
                              {/* CAD technical coordinate lines overlay */}
                              <div className="absolute inset-0 pointer-events-none border border-dashed border-sky-500/5 cad-grid"></div>
                              <div className="absolute top-2 left-2 pointer-events-none bg-black/70 border border-zinc-800 px-2 py-0.5 rounded text-[8px] text-sky-400">
                                SYS_RENDER_VIEWPORT [ACTIVE]
                              </div>
                              <div className="absolute bottom-2 right-2 pointer-events-none bg-black/70 border border-zinc-800 px-2 py-0.5 rounded text-[8px] text-zinc-500">
                                REF: {activeImageIndex + 1} / {selectedProject.images.length}
                              </div>

                              <img 
                                src={selectedProject.images[activeImageIndex]} 
                                alt={`${selectedProject.title} rendering`}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover select-none"
                              />

                              {/* Prev / Next buttons inside viewport */}
                              {selectedProject.images.length > 1 && (
                                <>
                                  <button 
                                    type="button"
                                    onClick={() => setActiveImageIndex(prev => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length)}
                                    className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/75 hover:bg-sky-950/90 border border-zinc-800 hover:border-sky-500/40 text-zinc-400 hover:text-sky-400 transition-all opacity-0 group-hover/img:opacity-100"
                                  >
                                    <ChevronLeft className="w-4 h-4" />
                                  </button>
                                  <button 
                                    type="button"
                                    onClick={() => setActiveImageIndex(prev => (prev + 1) % selectedProject.images!.length)}
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/75 hover:bg-sky-950/90 border border-zinc-800 hover:border-sky-500/40 text-zinc-400 hover:text-sky-400 transition-all opacity-0 group-hover/img:opacity-100"
                                  >
                                    <ChevronRight className="w-4 h-4" />
                                  </button>
                                </>
                              )}
                            </div>

                            {/* Small thumbnails bar */}
                            {selectedProject.images.length > 1 && (
                              <div className="flex gap-2 overflow-x-auto pb-1 max-w-full">
                                {selectedProject.images.map((img, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => setActiveImageIndex(idx)}
                                    className={`relative w-20 aspect-[16/9] rounded border overflow-hidden shrink-0 transition-all ${
                                      activeImageIndex === idx 
                                        ? "border-sky-400 scale-[1.02] shadow-[0_0_8px_rgba(56,189,248,0.3)]" 
                                        : "border-zinc-800 hover:border-sky-500/50"
                                    }`}
                                  >
                                    <img 
                                      src={img} 
                                      alt="thumbnail" 
                                      referrerPolicy="no-referrer"
                                      className="w-full h-full object-cover" 
                                    />
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : null}

                        {/* Concept Block with Premium styling */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#0c0f16] border border-sky-950/20 p-5 rounded-lg">
                          <div className="md:col-span-3 font-mono text-[10px] text-sky-400 tracking-wider font-bold border-r border-sky-950/30 pr-4">
                            SPATIAL CONCEPT DESIGN
                          </div>
                          <div className="md:col-span-9 text-xs leading-relaxed text-zinc-300 font-sans">
                            {selectedProject.concept}
                          </div>
                        </div>

                        {/* Interactive CAD Blueprint Drawing (SVG Renderer) */}
                        {selectedProject.drawings && selectedProject.drawings[0] && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <h4 className="font-mono text-[10px] text-sky-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                                <FileCode className="w-4 h-4 text-sky-400" />
                                <span>INTERACTIVE BLUEPRINT DRAFT (VECTOR CAD)</span>
                              </h4>
                              <span className="text-[9px] font-mono text-zinc-500">AUTO-SCALED GRAPHIC</span>
                            </div>

                            <CADDrawings type={selectedProject.drawings[0].svgType} />
                            
                            <div className="p-3 bg-[#0a0d13] border border-zinc-900 rounded-lg">
                              <p className="text-[10px] font-mono text-zinc-500 font-bold">
                                DRAWING ANALYSIS NOTE:
                              </p>
                              <p className="text-xs text-zinc-400 mt-1">
                                {selectedProject.drawings[0].description}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Space Zoning & Audience flow */}
                        {selectedProject.userFlow && selectedProject.userFlow.length > 0 && (
                          <div className="space-y-4">
                            <h4 className="font-mono text-[10px] text-sky-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                              <Workflow className="w-4 h-4 text-sky-500" />
                              <span>AUDIENCE CIRCULATION & ZONING SCENARIO</span>
                            </h4>

                            {/* Continuous Line of Sight Steps */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                              {selectedProject.userFlow.map((flow, idx) => (
                                <div key={idx} className="p-4 rounded-lg bg-[#0b0c0e] border border-zinc-900 relative">
                                  {/* Step Badge */}
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

                        {/* Material & Lighting Plan */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-900">
                          
                          {/* Materials selection */}
                          <div className="p-4 bg-zinc-950/30 rounded-lg border border-zinc-900 space-y-3">
                            <h5 className="font-mono text-[10px] text-sky-400 font-bold uppercase tracking-wider">
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

                          {/* Lighting schedule */}
                          <div className="p-4 bg-zinc-950/30 rounded-lg border border-zinc-900 space-y-3">
                            <h5 className="font-mono text-[10px] text-sky-400 font-bold uppercase tracking-wider">
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

                        {/* Detailed Description block */}
                        <div className="space-y-3 font-mono">
                          <h4 className="text-[10px] text-zinc-500 font-bold tracking-wider">
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
                        <p className="text-zinc-500 text-xs">전시 공간 아카이브 파일이 존재하지 않거나 로드되지 않았습니다.</p>
                        <p className="text-[10px] text-zinc-600 mt-1">좌측 도면 목록에서 플롯 파일을 선택해 주십시오.</p>
                      </div>
                    )}

                  </div>

                </div>
              )}

              {/* Finder Window Bottom Status Bar */}
              <div className="bg-[#0c0f16] px-4 py-2 border-t border-sky-950/40 flex items-center justify-between text-[10px] font-mono text-zinc-500 select-none">
                <span>SELECTION_KEY: {selectedProject ? selectedProject.id : "NONE"}</span>
                <span>GRID: ENABLED (24px)</span>
              </div>

            </div>
          ) : (
            
            /* EMPTY INITIAL DRAWER MESSAGE */
            <div className="w-full bg-[#0a0c0f]/80 border border-dashed border-zinc-800 rounded-xl p-12 text-center flex flex-col items-center justify-center font-mono">
              <Sparkles className="w-8 h-8 text-sky-400/40 animate-pulse mb-3" />
              <p className="text-zinc-400 text-xs font-semibold tracking-wider">
                SPACE DESIGN ARCHIVE WORKSPACE SYSTEM
              </p>
              <p className="text-[10px] text-zinc-600 max-w-sm mt-1">
                상단의 아카이브 폴더 아이콘을 클릭하시면 공간 기획 동선, 평면도, 재질 및 VR 시뮬레이션 상세 내용을 열람하실 수 있습니다.
              </p>
            </div>
          )}

        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full py-6 mt-12 border-t border-sky-950/20 bg-zinc-950/80 backdrop-blur-md text-center text-[10px] font-mono text-zinc-600 tracking-widest relative z-10">
        <p>© 2026 YEONG-JUN KIM. ALL RIGHTS RESERVED. ARCHITECTURAL EXPERIENCE DESIGN STUDIO.</p>
        <p className="text-[9px] text-sky-500/40 mt-1 uppercase">Designed for Leading Exhibition & Interior Spatial Design Firms</p>
      </footer>

      {/* ADMIN SECRET PASSWORD DIALOG MODAL (Password: 1111) */}
      {showAdminModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0b0d12] border border-sky-400/50 rounded-xl p-6 w-full max-w-md shadow-[0_0_30px_rgba(56,189,248,0.25)] space-y-4 font-mono text-xs">
            
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="font-bold text-sky-400 text-sm tracking-wider flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                SECURITY CHECK // DRAFTING_MODE
              </span>
              <button 
                onClick={() => {
                  setShowAdminModal(false);
                  setPasswordInput("");
                  setPasswordError("");
                }}
                className="text-zinc-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-zinc-400 leading-relaxed text-[11px]">
              포트폴리오 내용 수정/추가 권한을 획득하기 위해 비밀번호를 입력해주십시오. (초기 관리번호: <span className="text-sky-400 font-bold">1111</span>)
            </p>

            <form onSubmit={handleAdminLogin} className="space-y-3">
              <div>
                <label className="block text-zinc-500 mb-1 text-[10px]">ADMINSTRATOR SECRET KEY</label>
                <input 
                  type="password" 
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••"
                  maxLength={10}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-sky-400 p-2.5 rounded text-center text-zinc-200 tracking-[0.5em] text-sm focus:outline-none"
                  autoFocus
                />
              </div>

              {passwordError && (
                <p className="text-rose-500 font-bold text-center text-[10px] tracking-wide animate-pulse">{passwordError}</p>
              )}

              <div className="flex gap-2.5 pt-2">
                <button 
                  type="button"
                  onClick={() => {
                    setShowAdminModal(false);
                    setPasswordInput("");
                    setPasswordError("");
                  }}
                  className="flex-1 py-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-2 rounded bg-sky-900/60 hover:bg-sky-800 border border-sky-500 text-white font-bold transition-all"
                >
                  Verify Access
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* DYNAMIC FORM MODAL - Create/Update Projects (ADMIN ONLY) */}
      {showAddProjectModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-[#0b0d13] border border-sky-400/40 rounded-xl p-6 w-full max-w-2xl shadow-[0_0_40px_rgba(56,189,248,0.2)] my-8 space-y-5 font-mono text-xs">
            
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="font-bold text-sky-400 text-sm tracking-wider flex items-center gap-2">
                <FileCode className="w-4 h-4 text-sky-400" />
                <span>{editingProject ? "MODIFY DRAFT DOCUMENT" : "NEW CAD BLUEPRINT DRAFT"}</span>
              </span>
              <button 
                onClick={() => setShowAddProjectModal(false)}
                className="text-zinc-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Category Selection */}
                <div>
                  <label className="block text-zinc-500 mb-1 text-[10px]">CATEGORY DIRECTORY *</label>
                  <select 
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none"
                  >
                    {categories.filter(c => c.id !== "08").map(c => (
                      <option key={c.id} value={c.id}>{c.num} - {c.title}</option>
                    ))}
                  </select>
                </div>

                {/* Role */}
                <div>
                  <label className="block text-zinc-500 mb-1 text-[10px]">DESIGNER ROLE *</label>
                  <input 
                    type="text" 
                    value={formRole}
                    onChange={(e) => setFormRole(e.target.value)}
                    placeholder="e.g. Lead Exhibition Space Planner"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none"
                  />
                </div>

              </div>

              {/* Title and Subtitle */}
              <div className="space-y-3">
                <div>
                  <label className="block text-zinc-500 mb-1 text-[10px]">PROJECT TITLE *</label>
                  <input 
                    type="text" 
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. PROTOTYPE-V: Void Pavilion"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none font-bold"
                  />
                </div>

                <div>
                  <label className="block text-zinc-500 mb-1 text-[10px]">ONE-LINE SUMMARY (부제목) *</label>
                  <input 
                    type="text" 
                    value={formSubtitle}
                    onChange={(e) => setFormSubtitle(e.target.value)}
                    placeholder="e.g. 친환경 가변 목재 루버를 응용한 전시 아카이브 공간"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none"
                  />
                </div>
              </div>

              {/* Concept */}
              <div>
                <label className="block text-zinc-500 mb-1 text-[10px]">DESIGN CONCEPT & SPATIAL INTENT (공간 디자인 콘셉트)</label>
                <textarea 
                  value={formConcept}
                  onChange={(e) => setFormConcept(e.target.value)}
                  placeholder="관람자의 시선과 빛의 굴절, 가벽의 구획을 통해 연출하고자 하는 공간적 특성을 한글로 2-3줄 묘사해 주십시오..."
                  rows={3}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none font-sans"
                />
              </div>

              {/* Tools & Process */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-500 mb-1 text-[10px]">DRAFTING SOFTWARE USED (쉼표 구분)</label>
                  <input 
                    type="text" 
                    value={formTools}
                    onChange={(e) => setFormTools(e.target.value)}
                    placeholder="SketchUp, AutoCAD, Enscape, Twinmotion"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-zinc-500 mb-1 text-[10px]">CAD BLUEPRINT TYPE (도면 종류)</label>
                  <select 
                    value={formDrawingType}
                    onChange={(e) => setFormDrawingType(e.target.value as any)}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none"
                  >
                    <option value="exhibition-floor">01 - Exhibition Flow Floor Plan (전시 평면)</option>
                    <option value="detail-section">02 - Wall Louver Detailed Section (벽체 단면상세)</option>
                    <option value="retail-layout">03 - Cabinet Modular Retail Display (그리드 진열장)</option>
                    <option value="minimal-lounge">04 - Flexible Office Pivot Wall (가변 피벗벽)</option>
                    <option value="vr-gallery">05 - VR Art Gallery Coordinates (VR 좌표 갤러리)</option>
                  </select>
                </div>
              </div>

              {/* Process timeline lines */}
              <div>
                <label className="block text-zinc-500 mb-1 text-[10px]">DESIGN WORKFLOW TIMELINE (줄바꿈으로 구분)</label>
                <textarea 
                  value={formProcess}
                  onChange={(e) => setFormProcess(e.target.value)}
                  placeholder="Site Analysis & Circulation study&#10;Zoning Map Drafting&#10;SketchUp Pro component modeling"
                  rows={3}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none"
                />
              </div>

              {/* Materials & Lighting Schedule */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-500 mb-1 text-[10px]">MATERIALS SCHEDULE (쉼표 구분)</label>
                  <input 
                    type="text" 
                    value={formMaterials}
                    onChange={(e) => setFormMaterials(e.target.value)}
                    placeholder="무광 재생 강판, 샌드블라스트 유리"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-zinc-500 mb-1 text-[10px]">LIGHTING FIXTURE SPEC (쉼표 구분)</label>
                  <input 
                    type="text" 
                    value={formLighting}
                    onChange={(e) => setFormLighting(e.target.value)}
                    placeholder="3000K 매립 라인 LED, 바닥 매립 포인트 조명"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none"
                  />
                </div>
              </div>

              {/* User Flow (Circulation Steps) */}
              <div>
                <label className="block text-zinc-500 mb-1 text-[10px]">
                  AUDIENCE CIRCULATION SEQUENCE (형식: 단계:지정명:설명, 줄바꿈)
                </label>
                <textarea 
                  value={formUserFlow}
                  onChange={(e) => setFormUserFlow(e.target.value)}
                  placeholder="Zone 1:Welcome Area:관람객의 시선을 부드럽게 감속시키는 낮은 조도&#10;Zone 2:Main Pavilion:높이 4.5m 자연광 루버 천장 보이드 감상"
                  rows={3}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none"
                />
              </div>

              {/* Portfolio Image Upload Zone */}
              <div>
                <label className="block text-zinc-500 mb-1 text-[10px]">
                  PORTFOLIO IMAGES (내컴퓨터 이미지 다중 첨부)
                </label>
                
                {/* Drag and drop target wrapper */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border border-dashed rounded-lg p-5 text-center transition-all cursor-pointer ${
                    isDragging
                      ? "border-sky-400 bg-sky-950/20"
                      : "border-zinc-850 hover:border-sky-500/30 bg-zinc-950/40"
                  }`}
                  onClick={() => document.getElementById("portfolio-image-input")?.click()}
                >
                  <input
                    type="file"
                    id="portfolio-image-input"
                    multiple
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center justify-center space-y-1.5">
                    <Sparkles className="w-5 h-5 text-sky-400/70" />
                    <p className="text-[11px] text-zinc-300">
                      이미지 파일을 여기로 드래그앤드롭 하거나 <span className="text-sky-400 underline">클릭해서 선택</span>하세요.
                    </p>
                    <p className="text-[9px] text-zinc-500 font-mono">
                      * 다중 첨부 가능 (CAD-OS 고효율 압축 엔진 탑재)
                    </p>
                  </div>
                </div>

                {/* Previews wrapper if files exist */}
                {formImages.length > 0 && (
                  <div className="mt-3 space-y-1.5">
                    <p className="text-[9px] text-zinc-500 font-mono">ATTACHED RENDERS ({formImages.length} IMAGES):</p>
                    <div className="flex flex-wrap gap-2">
                      {formImages.map((img, idx) => (
                        <div key={idx} className="relative w-16 aspect-[16/9] rounded border border-zinc-800 overflow-hidden group">
                          <img
                            src={img}
                            alt="preview"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFormImage(idx);
                            }}
                            className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-rose-500 hover:text-rose-400"
                            title="Remove image"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Form Actions */}
              <div className="flex justify-end gap-3 pt-3 border-t border-zinc-900">
                <button 
                  type="button"
                  onClick={() => setShowAddProjectModal(false)}
                  className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 px-4 py-2 rounded font-bold transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-sky-900/80 hover:bg-sky-800 border border-sky-400 text-white font-bold px-6 py-2 rounded transition-all"
                >
                  Save Draft Plot
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
