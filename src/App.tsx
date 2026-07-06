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
  Upload,
  HelpCircle,
  FileCode,
  Workflow,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Eye,
  GraduationCap,
  AlertCircle,
  Globe,
  Video,
  Link
} from "lucide-react";
import { defaultCategories as fallbackCategories, defaultProjects as fallbackProjects } from "./data";
import { Category, Project } from "./types";
import savedData from "./saved_data.json";

const defaultCategories: Category[] = (savedData?.categories as Category[]) || fallbackCategories;
const defaultProjects: Project[] = (savedData?.projects as Project[]) || fallbackProjects;


function renderCategoryThumbnail(catId: string) {
  switch (catId) {
    case "01": // ATLAS-1 Featured
      return (
        <svg viewBox="0 0 100 60" className="w-full h-full stroke-sky-400/40 fill-none stroke-[0.75] transition-all duration-300">
          <circle cx="50" cy="30" r="22" className="stroke-sky-500/15" />
          <circle cx="50" cy="30" r="14" className="stroke-sky-500/25 stroke-dashed" />
          <circle cx="50" cy="30" r="6" className="stroke-sky-400/40" />
          <line x1="15" y1="30" x2="85" y2="30" className="stroke-sky-500/5 stroke-dashed" />
          <line x1="50" y1="5" x2="50" y2="55" className="stroke-sky-500/5 stroke-dashed" />
          <path d="M 30,30 L 50,5 L 70,30 L 50,55 Z" className="stroke-sky-400/20" />
          <circle cx="50" cy="5" r="1.5" className="fill-sky-400 stroke-none" />
          <circle cx="30" cy="30" r="1.5" className="fill-sky-400/60 stroke-none" />
          <circle cx="70" cy="30" r="1.5" className="fill-sky-400/60 stroke-none" />
          <text x="8" y="10" className="fill-sky-500/50 font-mono text-[4px] stroke-none tracking-wider">LAT: 37.33°</text>
          <text x="68" y="52" className="fill-sky-500/50 font-mono text-[4px] stroke-none tracking-wider">PORTAL_01</text>
        </svg>
      );
    case "02": // Exhibition Design
      return (
        <svg viewBox="0 0 100 60" className="w-full h-full stroke-sky-400/30 fill-none stroke-[0.6]">
          <path d="M 50,12 L 85,30 L 50,48 L 15,30 Z" className="stroke-zinc-800" />
          <path d="M 50,12 L 50,48" className="stroke-zinc-850" />
          <path d="M 15,30 L 85,30" className="stroke-zinc-850" />
          <path d="M 32,21 L 32,39 L 50,48" className="stroke-sky-500/40" />
          <path d="M 68,21 L 68,39 L 50,48" className="stroke-sky-500/40" />
          <line x1="32" y1="21" x2="50" y2="12" className="stroke-sky-500/30 stroke-dashed" />
          <line x1="68" y1="21" x2="50" y2="12" className="stroke-sky-500/30 stroke-dashed" />
          <path d="M 50,34 L 58,38 L 50,42 L 42,38 Z" className="stroke-sky-400/30 fill-sky-950/10" />
          <line x1="50" y1="42" x2="50" y2="48" className="stroke-sky-400/30" />
          <text x="8" y="10" className="fill-zinc-600 font-mono text-[4px] stroke-none tracking-wider">GRID: BOOTH</text>
        </svg>
      );
    case "03": // Interior Design
      return (
        <svg viewBox="0 0 100 60" className="w-full h-full stroke-sky-400/30 fill-none stroke-[0.6]">
          <path d="M 15,10 H 85 V 50 H 15 Z" className="stroke-zinc-800" />
          <path d="M 15,32 H 55 V 50" className="stroke-sky-500/30" />
          <path d="M 55,38 A 12,12 0 0,1 67,50" className="stroke-sky-400/30 stroke-dashed" />
          <line x1="55" y1="50" x2="55" y2="38" className="stroke-sky-400/30" />
          <rect x="22" y="16" width="18" height="10" className="stroke-sky-500/15 fill-zinc-950/20" />
          <circle cx="31" cy="21" r="2.5" className="stroke-sky-400/15" />
          <rect x="68" y="16" width="10" height="24" className="stroke-sky-500/10" />
          <text x="8" y="10" className="fill-zinc-600 font-mono text-[4px] stroke-none tracking-wider">PLAN_L-02</text>
        </svg>
      );
    case "04": // 3D Visualization
      return (
        <svg viewBox="0 0 100 60" className="w-full h-full stroke-sky-400/30 fill-none stroke-[0.6]">
          <polygon points="50,10 75,25 65,48 35,48 25,25" className="stroke-sky-500/15" />
          <polygon points="50,10 50,32 75,25" className="stroke-sky-500/30" />
          <polygon points="50,32 65,48 50,52" className="stroke-sky-400/30" />
          <polygon points="25,25 50,32 35,48" className="stroke-sky-500/20" />
          <ellipse cx="50" cy="30" rx="38" ry="12" className="stroke-zinc-800 stroke-dashed" />
          <circle cx="50" cy="32" r="1.5" className="fill-sky-400 stroke-none" />
          <text x="8" y="10" className="fill-zinc-600 font-mono text-[4px] stroke-none tracking-wider">MESH_3D</text>
        </svg>
      );
    case "05": // Research Archive
      return (
        <svg viewBox="0 0 100 60" className="w-full h-full stroke-sky-400/30 fill-none stroke-[0.6]">
          <circle cx="35" cy="25" r="11" className="stroke-sky-400/20 fill-sky-950/5" />
          <circle cx="65" cy="32" r="9" className="stroke-sky-400/15 fill-sky-950/5" />
          <circle cx="50" cy="42" r="7" className="stroke-sky-400/10 fill-sky-950/5" />
          <path d="M 45,22 Q 50,25 55,28" className="stroke-sky-400/30" />
          <path d="M 59,38 Q 50,40 44,34" className="stroke-sky-400/20 stroke-dashed" />
          <line x1="15" y1="12" x2="85" y2="48" className="stroke-zinc-850" />
          <line x1="85" y1="12" x2="15" y2="48" className="stroke-zinc-850" />
          <text x="8" y="10" className="fill-zinc-600 font-mono text-[4px] stroke-none tracking-wider">ANLY_ZONE</text>
        </svg>
      );
    case "06": // Branding & Graphic
      return (
        <svg viewBox="0 0 100 60" className="w-full h-full stroke-sky-400/30 fill-none stroke-[0.6]">
          <rect x="25" y="10" width="50" height="40" className="stroke-zinc-800 stroke-dashed" />
          <line x1="50" y1="10" x2="50" y2="50" className="stroke-zinc-850" />
          <line x1="25" y1="30" x2="75" y2="30" className="stroke-zinc-850" />
          <circle cx="50" cy="30" r="16" className="stroke-sky-400/25" />
          <circle cx="42" cy="30" r="8" className="stroke-sky-400/15" />
          <text x="8" y="10" className="fill-zinc-600 font-mono text-[4px] stroke-none tracking-wider">GRAPHIC_1.618</text>
        </svg>
      );
    case "07": // Design Process
      return (
        <svg viewBox="0 0 100 60" className="w-full h-full stroke-sky-400/30 fill-none stroke-[0.6]">
          <path d="M 20,45 L 35,25 H 65 L 80,45 Z" className="stroke-sky-500/25 fill-sky-950/5" />
          <line x1="10" y1="45" x2="90" y2="45" className="stroke-sky-400/30" />
          <line x1="35" y1="18" x2="65" y2="18" className="stroke-sky-400/15" />
          <line x1="35" y1="16" x2="35" y2="20" className="stroke-sky-400/15" />
          <line x1="65" y1="16" x2="65" y2="20" className="stroke-sky-400/15" />
          <line x1="75" y1="25" x2="75" y2="45" className="stroke-sky-400/15 stroke-dashed" />
          <text x="76" y="34" className="fill-zinc-600 font-mono text-[3.5px] stroke-none">H: 3.2M</text>
          <text x="8" y="10" className="fill-zinc-600 font-mono text-[4px] stroke-none tracking-wider">ELEV_B-B'</text>
        </svg>
      );
    case "08": // AI Workflow
    default:
      return (
        <svg viewBox="0 0 100 60" className="w-full h-full stroke-sky-400/30 fill-none stroke-[0.6]">
          <circle cx="30" cy="30" r="4" className="stroke-sky-500 fill-sky-950/40" />
          <circle cx="50" cy="18" r="4" className="stroke-sky-500 fill-sky-950/40" />
          <circle cx="50" cy="42" r="4" className="stroke-sky-500 fill-sky-950/40" />
          <circle cx="70" cy="30" r="4" className="stroke-sky-500 fill-sky-950/40" />
          <line x1="34" y1="30" x2="46" y2="18" className="stroke-sky-400/40" />
          <line x1="34" y1="30" x2="46" y2="42" className="stroke-sky-400/40" />
          <line x1="54" y1="18" x2="66" y2="30" className="stroke-sky-400/40" />
          <line x1="54" y1="42" x2="66" y2="30" className="stroke-sky-400/40" />
          <line x1="34" y1="30" x2="66" y2="30" className="stroke-sky-400/20 stroke-dashed" />
          <text x="8" y="10" className="fill-zinc-600 font-mono text-[4px] stroke-none tracking-wider">AI_NODE_MATRIX</text>
        </svg>
      );
  }
}

export default function App() {
  // Application Data States (persisted in localStorage)
  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem("workspace_categories");
    if (saved) {
      const parsed = JSON.parse(saved) as Category[];
      // Reset if old structure is detected or the new "Exhibition Research" / "AI Workflow" category is missing
      if (
        !parsed.some(c => c.title === "Exhibition Research") ||
        !parsed.some(c => c.title === "AI Workflow") ||
        parsed.some(c => c.title === "Research & Concept")
      ) {
        localStorage.setItem("workspace_categories", JSON.stringify(defaultCategories));
        return defaultCategories;
      }
      return parsed;
    }
    return defaultCategories;
  });
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem("workspace_projects");
    if (saved) {
      const parsed = JSON.parse(saved) as Project[];
      // Update cache if using old structure or missing the new "aiwf-01" project
      if (
        parsed.some(p => p.id === "ex-01" || p.id === "ex-02" || p.id === "in-01") ||
        !parsed.some(p => p.id === "aiwf-01")
      ) {
        localStorage.setItem("workspace_projects", JSON.stringify(defaultProjects));
        return defaultProjects;
      }
      return parsed;
    }
    return defaultProjects;
  });

  // Selected state
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Custom About/Contact Modal states
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  
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
  const [formPanoramaUrl, setFormPanoramaUrl] = useState("");
  const [formVideoUrl, setFormVideoUrl] = useState("");
  const [formArchiveUrl, setFormArchiveUrl] = useState("");
  const [formArchiveLabel, setFormArchiveLabel] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isDetailDragging, setIsDetailDragging] = useState(false);

  // Session-level preview state mapping for uploaded files (maps /images/filename.png to transient blob or base64)
  const [sessionPreviews, setSessionPreviews] = useState<Record<string, string>>(() => {
    try {
      const saved = sessionStorage.getItem("session_image_previews");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const saveSessionPreviews = (updated: Record<string, string>) => {
    setSessionPreviews(updated);
    try {
      sessionStorage.setItem("session_image_previews", JSON.stringify(updated));
    } catch (e) {
      console.warn("sessionStorage storage limit exceeded", e);
    }
  };

  const [uploadError, setUploadError] = useState<string | null>(null);
  const [linkError, setLinkError] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [pathInputWarning, setPathInputWarning] = useState<string | null>(null);
  const [manualPathInput, setManualPathInput] = useState("");
  const [formSelectedImageIndex, setFormSelectedImageIndex] = useState<number | null>(null);
  const [syncStatus, setSyncStatus] = useState<"idle" | "syncing" | "success" | "error">("idle");

  useEffect(() => {
    const val = manualPathInput.trim();
    if (val === "") {
      setPathInputWarning(null);
      return;
    }
    if (!val.startsWith("http") && !val.startsWith("data:") && !val.startsWith("/images/")) {
      setPathInputWarning("경고: 로컬 이미지 경로는 반드시 /images/ 로 시작해야 브라우저에서 정상 표시됩니다 (예: /images/파일명.png).");
    } else {
      setPathInputWarning(null);
    }
  }, [manualPathInput]);

  const handleImageError = (src: string) => {
    if (src) {
      setFailedImages(prev => ({ ...prev, [src]: true }));
    }
  };

  const handleImageLoad = (src: string) => {
    if (src && failedImages[src]) {
      setFailedImages(prev => {
        const updated = { ...prev };
        delete updated[src];
        return updated;
      });
    }
  };

  // Helper to ensure URL starts with http:// or https://
  const ensureAbsoluteUrl = (url: string | undefined): string => {
    if (!url) return "";
    const trimmed = url.trim();
    if (!trimmed) return "";
    if (/^https?:\/\//i.test(trimmed)) {
      return trimmed;
    }
    return `https://${trimmed}`;
  };

  // Helper to validate URL structure
  const isValidUrl = (url: string | undefined): boolean => {
    if (!url) return false;
    const target = ensureAbsoluteUrl(url);
    try {
      new URL(target);
      return true;
    } catch {
      return false;
    }
  };

  // Helper to sanitize filenames to prevent encoding or space issues
  const sanitizeFilename = (filename: string): string => {
    const lastDotIdx = filename.lastIndexOf('.');
    const ext = lastDotIdx !== -1 ? filename.slice(lastDotIdx).toLowerCase() : '.png';
    let nameWithoutExt = lastDotIdx !== -1 ? filename.slice(0, lastDotIdx) : filename;
    
    // Clean spaces, brackets, special characters
    let cleanName = nameWithoutExt
      .replace(/[\s()\[\]{}]/g, "_")
      .replace(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣_]/g, "") // Keep alphanumeric, Korean and underscores
      .replace(/__+/g, "_")
      .replace(/^_+|_+$/g, "");

    if (!cleanName) {
      cleanName = "uploaded_image_" + Math.floor(Math.random() * 1000);
    }

    return `${cleanName}${ext}`;
  };

  // Helper to resolve actual rendering src from path or URL
  const resolveImageSrc = (src: string): string => {
    if (!src) return "";
    if (sessionPreviews[src]) {
      return sessionPreviews[src];
    }
    return src;
  };

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

  // Auto-sync client local storage back to the agent container (so we can grab the user's browser-only edits)
  useEffect(() => {
    const syncData = () => {
      try {
        const cats = localStorage.getItem("workspace_categories");
        const projs = localStorage.getItem("workspace_projects");
        if (cats && projs) {
          fetch("/api/save-localstorage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ categories: JSON.parse(cats), projects: JSON.parse(projs) }),
          }).catch(e => console.error("Sync back error", e));
        }
      } catch (err) {
        console.error("Local storage sync parsing error", err);
      }
    };
    syncData();
  }, [categories, projects]);

  // Sync to localStorage
  const saveAllData = (updatedCategories: Category[], updatedProjects: Project[]) => {
    localStorage.setItem("workspace_categories", JSON.stringify(updatedCategories));
    localStorage.setItem("workspace_projects", JSON.stringify(updatedProjects));
  };

  const handleCategoryIconUpload = (catId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      setUploadError("이미지 경로 또는 파일 용량을 확인해주세요");
      alert("JPG, PNG, WEBP 형식의 이미지 파일만 업로드할 수 있습니다.");
      return;
    }

    const isLarge = file.size > 1.5 * 1024 * 1024;
    if (isLarge) {
      const wantCompress = window.confirm(
        `업로드하려는 파일("${file.name}")의 크기가 큽니다 (${(file.size / 1024 / 1024).toFixed(1)}MB).\n성능 최적화 및 브라우저 저장을 위해 자동으로 압축하여 등록할까요?`
      );
      if (!wantCompress) {
        const sanitized = sanitizeFilename(file.name);
        const imagePath = `/images/category_${catId}_${sanitized}`;
        
        const previewUrl = URL.createObjectURL(file);
        saveSessionPreviews({
          ...sessionPreviews,
          [imagePath]: previewUrl
        });

        setCategories(prevCategories => {
          const updated = prevCategories.map(c => {
            if (c.id === catId) {
              return { ...c, image: imagePath };
            }
            return c;
          });
          saveAllData(updated, projects);
          return updated;
        });
        triggerNotification(`CATEGORY "${catId}" THUMBNAIL REGISTERED.`);
        return;
      }
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const MAX_WIDTH = 400;
        const MAX_HEIGHT = 400;
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
          const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
          
          const sanitized = sanitizeFilename(file.name);
          const imagePath = `/images/category_${catId}_${sanitized}`;

          saveSessionPreviews({
            ...sessionPreviews,
            [imagePath]: compressedBase64
          });

          setCategories(prevCategories => {
            const updated = prevCategories.map(c => {
              if (c.id === catId) {
                return { ...c, image: imagePath };
              }
              return c;
            });
            saveAllData(updated, projects);
            return updated;
          });
          triggerNotification(`CATEGORY "${catId}" THUMBNAIL UPDATED.`);
        }
      };
      img.onerror = () => {
        setUploadError("이미지 경로 또는 파일 용량을 확인해주세요");
        triggerNotification("ERROR: FAILED TO PROCESS CATEGORY IMAGE.");
      };
      img.src = event.target?.result as string;
    };
    reader.onerror = () => {
      setUploadError("이미지 경로 또는 파일 용량을 확인해주세요");
      triggerNotification("ERROR: CATEGORY IMAGE FILE READER ERROR.");
    };
    reader.readAsDataURL(file);
  };

  const handleCategoryIconDelete = (catId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!window.confirm("업로드한 이미지를 삭제하시겠습니까?")) return;

    setCategories(prevCategories => {
      const updated = prevCategories.map(c => {
        if (c.id === catId) {
          const { image, ...rest } = c;
          return rest;
        }
        return c;
      });
      saveAllData(updated, projects);
      return updated;
    });
    triggerNotification(`CATEGORY "${catId}" THUMBNAIL RESTORED.`);
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
      images: formImages,
      panoramaUrl: formPanoramaUrl,
      videoUrl: formVideoUrl,
      archiveUrl: formArchiveUrl,
      archiveLabel: formArchiveLabel
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
    setFormImages((project.images || []).filter(img => img.startsWith("data:") || img.startsWith("blob:") || img.startsWith("http") || img.startsWith("/")));
    
    setFormSelectedImageIndex(null);
    setManualPathInput("");
    
    const flowText = project.userFlow.map(f => `${f.step}:${f.title}:${f.description}`).join("\n");
    setFormUserFlow(flowText);
    
    setFormPanoramaUrl(project.panoramaUrl || "");
    setFormVideoUrl(project.videoUrl || "");
    setFormArchiveUrl(project.archiveUrl || "");
    setFormArchiveLabel(project.archiveLabel || "");
    
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
    
    setFormSelectedImageIndex(null);
    setManualPathInput("");
    
    setFormPanoramaUrl("");
    setFormVideoUrl("");
    setFormArchiveUrl("");
    setFormArchiveLabel("");
    
    setShowAddProjectModal(true);
  };

  // Image upload compression & base64 conversion helper
  const processAndAddImage = (file: File) => {
    setUploadError(null);
    if (!file.type.startsWith("image/")) {
      setUploadError("이미지 경로 또는 파일 용량을 확인해주세요");
      triggerNotification("ERROR: SELECTED FILE IS NOT AN IMAGE.");
      return;
    }

    const isLarge = file.size > 1.5 * 1024 * 1024;
    if (isLarge) {
      const wantCompress = window.confirm(
        `업로드하려는 파일("${file.name}")의 크기가 큽니다 (${(file.size / 1024 / 1024).toFixed(1)}MB).\n성능 최적화 및 브라우저 저장을 위해 자동으로 압축하여 등록할까요?\n\n* "취소"를 누르시면 원본 경로만 등록됩니다.`
      );
      if (!wantCompress) {
        const sanitized = sanitizeFilename(file.name);
        const imagePath = `/images/${sanitized}`;
        
        const previewUrl = URL.createObjectURL(file);
        saveSessionPreviews({
          ...sessionPreviews,
          [imagePath]: previewUrl
        });

        setFormImages(prev => [...prev, imagePath]);
        triggerNotification(`IMAGE REFERENCE "${sanitized}" REGISTERED.`);
        return;
      }
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
          
          const sanitized = sanitizeFilename(file.name);
          const imagePath = `/images/${sanitized}`;

          saveSessionPreviews({
            ...sessionPreviews,
            [imagePath]: compressedBase64
          });

          setFormImages(prev => [...prev, imagePath]);
          triggerNotification("IMAGE LOADED AND COMPRESSED SUCCESSFULLY.");
        }
      };
      img.onerror = () => {
        setUploadError("이미지 경로 또는 파일 용량을 확인해주세요");
        triggerNotification("ERROR: FAILED TO PROCESS IMAGE.");
      };
      img.src = e.target?.result as string;
    };
    reader.onerror = () => {
      setUploadError("이미지 경로 또는 파일 용량을 확인해주세요");
      triggerNotification("ERROR: FILE READER ERROR.");
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
    setFormSelectedImageIndex(null);
    setManualPathInput("");
  };

  const handleDirectImageUpload = (files: FileList) => {
    if (!selectedProject) return;
    setUploadError(null);

    const targetProject = selectedProject;
    const filesArray = Array.from(files);

    filesArray.forEach((file) => {
      if (!file.type.startsWith("image/")) {
        setUploadError("이미지 경로 또는 파일 용량을 확인해주세요");
        triggerNotification("ERROR: SELECTED FILE IS NOT AN IMAGE.");
        return;
      }

      const isLarge = file.size > 1.5 * 1024 * 1024;
      if (isLarge) {
        const wantCompress = window.confirm(
          `업로드하려는 파일("${file.name}")의 크기가 큽니다 (${(file.size / 1024 / 1024).toFixed(1)}MB).\n성능 최적화 및 브라우저 저장을 위해 자동으로 압축하여 업로드하시겠습니까?\n\n* "취소"를 누르시면 원본 경로만 등록됩니다.`
        );
        if (!wantCompress) {
          const sanitized = sanitizeFilename(file.name);
          const imagePath = `/images/${sanitized}`;
          
          const previewUrl = URL.createObjectURL(file);
          const updatedPreviews = { ...sessionPreviews, [imagePath]: previewUrl };
          saveSessionPreviews(updatedPreviews);

          setProjects(prevProjects => {
            const updated = prevProjects.map(p => {
              if (p.id === targetProject.id) {
                const existingImages = p.images || [];
                const newImages = [...existingImages, imagePath];
                
                setSelectedProject(prev => prev && prev.id === targetProject.id ? { ...prev, images: newImages } : prev);
                return { ...p, images: newImages };
              }
              return p;
            });
            saveAllData(categories, updated);
            return updated;
          });
          triggerNotification(`IMAGE REFERENCE "${sanitized}" REGISTERED.`);
          return;
        }
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
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
            
            const sanitized = sanitizeFilename(file.name);
            const imagePath = `/images/${sanitized}`;

            const updatedPreviews = { ...sessionPreviews, [imagePath]: compressedBase64 };
            saveSessionPreviews(updatedPreviews);

            setProjects(prevProjects => {
              const updated = prevProjects.map(p => {
                if (p.id === targetProject.id) {
                  const existingImages = p.images || [];
                  const newImages = [...existingImages, imagePath];
                  
                  setSelectedProject(prev => prev && prev.id === targetProject.id ? { ...prev, images: newImages } : prev);
                  return { ...p, images: newImages };
                }
                return p;
              });
              saveAllData(categories, updated);
              return updated;
            });
            
            triggerNotification(`IMAGE "${file.name}" UPLOADED AND COMPRESSED SUCCESSFULLY.`);
          }
        };
        img.onerror = () => {
          setUploadError("이미지 경로 또는 파일 용량을 확인해주세요");
          triggerNotification("ERROR: FAILED TO PROCESS IMAGE.");
        };
        img.src = e.target?.result as string;
      };
      reader.onerror = () => {
        setUploadError("이미지 경로 또는 파일 용량을 확인해주세요");
        triggerNotification("ERROR: FILE READER ERROR.");
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDirectImageDelete = (indexToDelete: number) => {
    if (!selectedProject) return;
    if (!window.confirm("선택한 이미지를 프로젝트에서 삭제하시겠습니까?")) return;

    const targetImageStr = uploadedImages[indexToDelete];
    if (!targetImageStr) return;

    setProjects(prevProjects => {
      const updated = prevProjects.map(p => {
        if (p.id === selectedProject.id) {
          const existingImages = p.images || [];
          const newImages = existingImages.filter((img) => img !== targetImageStr);
          
          setSelectedProject(prev => prev ? { ...prev, images: newImages } : null);
          setActiveImageIndex(prev => {
            const nextUploadedCount = newImages.filter(img => img.startsWith("data:") || img.startsWith("blob:") || img.startsWith("/") || img.startsWith("http")).length;
            if (nextUploadedCount === 0) return 0;
            if (prev >= nextUploadedCount) return nextUploadedCount - 1;
            return prev;
          });
          return { ...p, images: newImages };
        }
        return p;
      });
      saveAllData(categories, updated);
      return updated;
    });
    triggerNotification("IMAGE REMOVED SUCCESSFULLY.");
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

  const handleSyncToServer = async () => {
    setSyncStatus("syncing");
    try {
      const cats = localStorage.getItem("workspace_categories");
      const projs = localStorage.getItem("workspace_projects");
      if (!cats || !projs) {
        setSyncStatus("error");
        triggerNotification("SYNC FAILED: NO LOCAL DATA TO SEND.");
        return;
      }
      const res = await fetch("/api/save-localstorage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categories: JSON.parse(cats), projects: JSON.parse(projs) }),
      });
      if (res.ok) {
        setSyncStatus("success");
        triggerNotification("DATABASE SAVED TO CONTAINER CODE! (Bake Ready)");
      } else {
        setSyncStatus("error");
        triggerNotification("SYNC FAIL: SERVER RESPONSE NOT OK.");
      }
    } catch (e) {
      console.error(e);
      setSyncStatus("error");
      triggerNotification("SYNC CONNECTION FAILED.");
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

  // PDF & Navigation helper handlers
  const handleDownloadPDF = () => {
    alert("SOYOUNG_KIM_SPACE_DESIGN_PORTFOLIO.pdf 다운로드를 시작합니다.");
    triggerNotification("PDF DOWNLOAD INITIATED: 24.5 MB");
  };

  const handleNavClick = (menu: string) => {
    const lowerMenu = menu.toUpperCase();
    if (lowerMenu === "WORK") {
      setSelectedCategory(null);
      setSelectedProject(null);
      setTimeout(() => {
        document.getElementById("finder-window-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (lowerMenu === "PROJECTS") {
      const cat = categories.find(c => c.id === "01");
      if (cat) {
        setSelectedCategory(cat);
        const catProjs = projects.filter(p => p.categoryId === cat.id);
        if (catProjs.length > 0) setSelectedProject(catProjs[0]);
      }
      setTimeout(() => {
        document.getElementById("finder-window-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (lowerMenu === "RESEARCH") {
      const cat = categories.find(c => c.id === "02");
      if (cat) {
        setSelectedCategory(cat);
        const catProjs = projects.filter(p => p.categoryId === cat.id);
        if (catProjs.length > 0) setSelectedProject(catProjs[0]);
      }
      setTimeout(() => {
        document.getElementById("finder-window-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (lowerMenu === "VISUALIZATION") {
      const cat = categories.find(c => c.id === "05");
      if (cat) {
        setSelectedCategory(cat);
        const catProjs = projects.filter(p => p.categoryId === cat.id);
        if (catProjs.length > 0) setSelectedProject(catProjs[0]);
      }
      setTimeout(() => {
        document.getElementById("finder-window-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (lowerMenu === "PROCESS") {
      const cat = categories.find(c => c.id === "06");
      if (cat) {
        setSelectedCategory(cat);
        const catProjs = projects.filter(p => p.categoryId === cat.id);
        if (catProjs.length > 0) setSelectedProject(catProjs[0]);
      }
      setTimeout(() => {
        document.getElementById("finder-window-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (lowerMenu === "ABOUT") {
      setShowAboutModal(true);
    } else if (lowerMenu === "CONTACT") {
      setShowContactModal(true);
    }
  };

  // Filter selected project images to show both user-uploaded and default portfolio images
  const uploadedImages = selectedProject
    ? (selectedProject.images || []).filter(img => img.startsWith("data:") || img.startsWith("blob:") || img.startsWith("http") || img.startsWith("/"))
    : [];

  return (
    <div className="min-h-screen bg-[#08090b] text-zinc-100 flex flex-col relative font-sans overflow-hidden select-none scanline">
      
      {/* Background Ambience Spark */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* FIXED TOP MENU BAR - Refined Professional Portfolio Header */}
      <header className="w-full min-h-12 border-b border-zinc-900 bg-[#07090c]/90 backdrop-blur-md px-4 py-2 flex flex-col md:flex-row items-center justify-between text-xs font-mono tracking-wider z-40 select-none gap-3 md:gap-0">
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <div 
            onDoubleClick={() => setShowAdminModal(true)}
            className="flex items-center gap-2.5 text-sky-400 font-bold font-sans tracking-wide cursor-default select-none"
            title="Soyoung Kim Space Design Portfolio"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            <span className="text-[11px] uppercase text-zinc-200 tracking-[0.18em]">SOYOUNG KIM <span className="text-sky-500/80 mx-0.5">·</span> SPACE DESIGN PORTFOLIO</span>
          </div>
        </div>

        {/* Dynamic Navigation Menus */}
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-zinc-400 text-[10px] uppercase font-bold tracking-widest">
          {["WORK", "PROJECTS", "RESEARCH", "PROCESS", "VISUALIZATION", "ABOUT", "CONTACT"].map((menu) => (
            <span 
              key={menu}
              onClick={() => handleNavClick(menu)}
              className="hover:text-sky-400 cursor-pointer transition-colors duration-200 py-1"
            >
              {menu}
            </span>
          ))}
        </nav>

        {/* Top bar right area */}
        <div className="flex items-center gap-4">
          {/* Admin Indicator (Sleek and professional) */}
          {isAdmin ? (
            <div className="flex items-center gap-1.5 bg-emerald-950/20 border border-emerald-500/30 px-2 py-0.5 rounded text-emerald-400 text-[9px] font-bold">
              <Shield className="w-3 h-3 text-emerald-400" />
              <span>SECURE CONSOLE</span>
              <button 
                onClick={handleAdminLogout} 
                className="ml-1 text-zinc-400 hover:text-white uppercase text-[8px] underline"
              >
                Exit
              </button>
            </div>
          ) : (
            (typeof window !== "undefined" && window.location.search.includes("admin")) && (
              <button 
                onClick={() => setShowAdminModal(true)}
                className="flex items-center gap-1 bg-zinc-950/80 hover:bg-sky-950/20 border border-zinc-900 hover:border-sky-500/20 px-2 py-0.5 rounded text-zinc-500 hover:text-sky-400 transition-all text-[9px]"
                title="Console login"
              >
                <Settings className="w-2.5 h-2.5 text-zinc-600 group-hover:text-sky-400" />
                <span>CONSOLE</span>
              </button>
            )
          )}

          {/* Clock */}
          <div className="flex items-center gap-1.5 text-sky-400/80 bg-sky-950/5 px-2.5 py-0.5 rounded border border-sky-950/10 font-bold text-[9px]">
            <Clock className="w-3 h-3 text-sky-500/60" />
            <span className="tabular-nums">{time || "08:08:54"}</span>
          </div>
        </div>
      </header>

      {/* NOTIFICATION OVERLAY POPUP */}
      {notification && (
        <div className="fixed top-14 left-1/2 transform -translate-x-1/2 bg-[#06090e] border-l-2 border-sky-400 text-sky-300 px-6 py-3 rounded shadow-2xl z-50 flex items-center gap-3 font-mono text-xs tracking-wide max-w-lg w-full">
          <Terminal className="w-4 h-4 text-sky-400 shrink-0" />
          <div className="flex-1">
            <p className="font-bold text-[9px] text-zinc-500 tracking-wider">PORTFOLIO CONSOLE MESSAGE</p>
            <p>{notification}</p>
          </div>
          <button onClick={() => setNotification(null)} className="text-zinc-500 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* MAIN LAYOUT */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col justify-between gap-10 z-10 relative">
        
        {/* UPPER MAIN SECTION: TITLE & FOLDERS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: VERY LARGE HIGH-END ARCHITECTURAL TYPOGRAPHY */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2 md:pt-4" id="hero-title-block">
            <div>
              {/* Architectural Coord Tag */}
              <div className="font-mono text-[9px] text-sky-500/40 mb-3 tracking-[0.25em] uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-sky-400/80 inline-block"></span>
                <span>SOYOUNG KIM · SPACE DESIGN PORTFOLIO</span>
              </div>
              
              {/* Very large typography with high line spacing */}
              <h1 className="font-display font-light text-5xl md:text-6xl lg:text-[76px] tracking-[0.16em] text-zinc-100 flex flex-col leading-[1.4] md:leading-[1.5]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-sky-400 font-extralight">SPACE</span>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-zinc-400 tracking-[0.18em]">DESIGN</span>
                <span className="tracking-[0.03em] text-zinc-600 hover:text-sky-400 transition-colors duration-700">PORTFOLIO</span>
              </h1>

              {/* Subtitle / Manifesto */}
              <div className="mt-6 md:mt-8 border-l-2 border-sky-500/20 pl-4 py-1.5">
                <p className="text-sky-400 font-semibold text-xs tracking-[0.22em] font-mono uppercase">
                  EXHIBITION · INTERIOR · 3D VISUALIZATION
                </p>
                <p className="text-zinc-400 text-xs tracking-wider mt-2 leading-relaxed">
                  Designing immersive spatial experiences through storytelling, exhibition planning, and visual communication.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button 
                  onClick={() => handleNavClick("WORK")}
                  className="bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/40 hover:border-sky-400 text-sky-300 hover:text-white px-5 py-2.5 text-[11px] font-bold font-mono tracking-widest transition-all duration-300 rounded shadow-[0_0_15px_rgba(56,189,248,0.05)] hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]"
                >
                  VIEW PROJECTS
                </button>
                <button 
                  onClick={handleDownloadPDF}
                  className="bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white px-5 py-2.5 text-[11px] font-bold font-mono tracking-widest transition-all duration-300 rounded"
                >
                  DOWNLOAD PDF
                </button>
                <button 
                  onClick={() => handleNavClick("CONTACT")}
                  className="bg-zinc-900/60 hover:bg-sky-950/20 border border-zinc-800 hover:border-sky-500/30 text-zinc-400 hover:text-sky-300 px-5 py-2.5 text-[11px] font-bold font-mono tracking-widest transition-all duration-300 rounded"
                >
                  CONTACT
                </button>
              </div>
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
              
              {/* Optional Reset/Clear custom changes for demo purposes (Admin Only) */}
              {isAdmin && (
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleSyncToServer}
                    className={`text-[9px] font-mono transition-all font-bold ${
                      syncStatus === "syncing"
                        ? "text-amber-400 animate-pulse"
                        : syncStatus === "success"
                        ? "text-emerald-400"
                        : "text-sky-400 hover:text-sky-300 underline"
                    }`}
                    title="현재 화면에서 수정한 모든 내용을 소스 코드 기본값으로 영구 저장합니다!"
                  >
                    {syncStatus === "idle" && "💾 수정한 데이터 코드에 반영하기"}
                    {syncStatus === "syncing" && "⏳ 저장 중..."}
                    {syncStatus === "success" && "✅ 저장 완료! (개발자 파일 생성됨)"}
                    {syncStatus === "error" && "❌ 저장 실패 (재시도)"}
                  </button>
                  <span className="text-zinc-800">|</span>
                  <button 
                    onClick={handleResetDefaults}
                    className="text-[9px] font-mono text-zinc-500 hover:text-sky-400 transition-colors underline"
                    title="Reset modified mock values to default"
                  >
                    Factory Reset
                  </button>
                </div>
              )}
            </div>

            {/* Folder Grid - Elegant Architectural Folder Cards with Mini Blueprints */}
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
                      // Immediately smooth scroll down to the workspace section for seamless viewing
                      setTimeout(() => {
                        document.getElementById("finder-window-section")?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className={`group relative p-5 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      selectedCategory?.id === cat.id 
                        ? "bg-[#0c1017] border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.12)] translate-y-[-4px]" 
                        : "bg-[#080a0c] hover:bg-[#0c0e12] border-zinc-900 hover:border-sky-500/30 hover:shadow-[0_4px_20px_rgba(56,189,248,0.08)] hover:translate-y-[-3px]"
                    }`}
                  >
                    {/* Folder Corner Accent Line */}
                    <div className="absolute top-0 right-0 w-8 h-[1px] bg-gradient-to-l from-sky-400/40 to-transparent"></div>
                    <div className="absolute top-0 right-0 h-8 w-[1px] bg-gradient-to-b from-sky-400/40 to-transparent"></div>

                    <div className="flex items-start justify-between">
                      {/* Category ID */}
                      <span className="font-mono text-[10px] font-bold text-sky-500/80 tracking-wider">
                        CAT // {cat.num}
                      </span>
                      
                      {/* Project count indicator badge */}
                      <span className="font-mono text-[9px] bg-zinc-950/80 border border-zinc-900 px-2 py-0.5 rounded text-zinc-400 tracking-wider">
                        {cat.id === "08" ? "PROFILE" : `${projectCount} PROJECTS`}
                      </span>
                    </div>

                    {/* Architectural Vector Thumbnail Box */}
                    <div 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent scroll jump!
                        setSelectedCategory(cat); // But still select it!
                        const catProjs = projects.filter(p => p.categoryId === cat.id);
                        if (catProjs.length > 0) {
                          setSelectedProject(catProjs[0]);
                        } else {
                          setSelectedProject(null);
                        }
                        if (isAdmin) {
                          document.getElementById(`file-upload-${cat.id}`)?.click();
                        }
                      }}
                      className={`w-full h-24 rounded-lg overflow-hidden flex items-center justify-center mt-3 mb-3 relative transition-all duration-300 ${
                        isAdmin 
                          ? "bg-[#040608] hover:bg-[#070b11] border border-zinc-950 hover:border-sky-500/40 cursor-pointer group/upload" 
                          : "bg-[#040608]/65 border border-zinc-900/60 cursor-default"
                      } ${cat.image ? "p-0" : "p-2"}`}
                    >
                      {/* Hidden File Input */}
                      {isAdmin && (
                        <input
                          type="file"
                          id={`file-upload-${cat.id}`}
                          accept="image/png, image/jpeg, image/jpg, image/webp"
                          className="hidden"
                          onChange={(e) => handleCategoryIconUpload(cat.id, e)}
                        />
                      )}

                      {cat.image ? (
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                          {failedImages[cat.image] ? (
                            cat.image.startsWith("/images/") ? (
                              <div className="w-full h-full flex flex-col items-center justify-center bg-[#070b11] text-zinc-400 text-[8px] leading-tight text-center p-1.5 font-mono" title="배포 후 public/images 폴더에서 확인됩니다.">
                                <span className="truncate max-w-full text-sky-400/80 font-mono text-[7px] mb-0.5">{cat.image}</span>
                                <span className="text-[6.5px] text-zinc-500 uppercase tracking-widest font-sans font-medium">배포 후 확인 가능</span>
                              </div>
                            ) : (
                              <div className="w-full h-full flex flex-col items-center justify-center bg-[#050709] border border-zinc-900/40 text-zinc-500 select-none">
                                <div className="text-[10px] font-mono tracking-[0.2em] font-medium uppercase text-zinc-600">
                                  IMAGE PREPARING
                                </div>
                              </div>
                            )
                          ) : (
                            <img 
                              src={resolveImageSrc(cat.image)} 
                              alt={cat.title} 
                              className="w-full h-full object-cover object-center select-none"
                              referrerPolicy="no-referrer"
                              onError={() => handleImageError(cat.image)}
                              onLoad={() => handleImageLoad(cat.image)}
                            />
                          )}
                          {/* Hover change overlay indicator (Admin Only) */}
                          {isAdmin && (
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/upload:opacity-100 flex items-center justify-center transition-opacity duration-200">
                              <span className="text-[8px] font-mono text-sky-400 font-bold uppercase tracking-widest">
                                CHANGE IMAGE
                              </span>
                            </div>
                          )}
                          
                          {/* Delete button (Admin Only) */}
                          {isAdmin && (
                            <button
                              type="button"
                              onClick={(e) => handleCategoryIconDelete(cat.id, e)}
                              className="absolute top-1.5 right-1.5 p-1 bg-rose-950/80 hover:bg-rose-900 border border-rose-500/30 hover:border-rose-500 text-rose-300 hover:text-white rounded transition-all z-10"
                              title="이미지 삭제"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      ) : (
                        isAdmin ? (
                          <div className="flex flex-col items-center justify-center gap-1.5 text-zinc-500 group-hover/upload:text-sky-400 transition-colors p-2 text-center select-none">
                            <Upload className="w-4 h-4 text-zinc-600 group-hover/upload:text-sky-400/80 transition-colors animate-pulse" />
                            <span className="text-[9px] font-mono tracking-wider font-bold uppercase">
                              Click to upload project image
                            </span>
                          </div>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-[#050709] border border-zinc-900/40 text-zinc-500 select-none">
                            <div className="text-[10px] font-mono tracking-[0.2em] font-medium uppercase text-zinc-600">
                              IMAGE PREPARING
                            </div>
                          </div>
                        )
                      )}

                      {/* Coordinate Overlay */}
                      <div className="absolute bottom-1 right-2 text-[6px] font-mono text-zinc-600 group-hover/upload:text-sky-500/40 transition-colors pointer-events-none">
                        XYZ: 100.{cat.id} / 60.00
                      </div>
                    </div>

                    {/* Thin cyan blue point line */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-sky-500/5 via-sky-400/40 to-transparent mb-3"></div>

                    {/* Main Category Title Block */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-sans text-sm font-semibold tracking-wide text-zinc-200 group-hover:text-white transition-colors flex items-center gap-1.5">
                        <span>{cat.title}</span>
                      </h3>
                      <p className="text-[11px] text-zinc-500 group-hover:text-zinc-400 transition-colors mt-1 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    {/* Bottom Status bar */}
                    <div className="mt-4 pt-2.5 border-t border-zinc-900/40 flex items-center justify-between text-[8px] font-mono text-zinc-600 group-hover:text-sky-400/50 transition-colors">
                      <span>SECURE ARCHIVE</span>
                      <span className="flex items-center gap-1 font-mono">
                        <span className="w-1 h-1 rounded-full bg-sky-500 group-hover:animate-ping"></span>
                        READY
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
                        // Scroll down to window immediately
                        setTimeout(() => {
                          document.getElementById("finder-window-section")?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
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
                {isAdmin && (
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
              {false ? (
                
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
                          브랜드 가치와 유기적인 동선 시나리오를 바탕으로 한 실재하는 공간 설계.
                        </p>
                        <p>
                          AutoCAD 도면화, SketchUp 컴포넌트 모델링, Enscape 실시간 렌더링을 통한 정밀 시공성 확보.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg border border-zinc-800 bg-[#0a0d11]">
                      <h3 className="font-display text-base font-bold text-zinc-200 mb-4">훈련 분야 (Academy Achievements)</h3>
                      <div className="space-y-4 font-mono text-xs">
                        <div className="flex gap-4">
                          <span className="text-sky-400 font-bold shrink-0">PRESENT</span>
                          <div>
                            <p className="text-zinc-100 font-bold">Space & Exhibition Design Master Class</p>
                            <p className="text-zinc-500 mt-1">
                              SketchUp Pro 고난도 3D 모델링, AutoCAD 도면 드래프팅 훈련, Enscape 및 VR 공간 렌더링 시뮬레이션 구현.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4 border-t border-zinc-900/60 pt-4">
                          <span className="text-zinc-600 font-bold shrink-0">CORE</span>
                          <div>
                            <p className="text-zinc-100 font-bold">Spatial Zoning & Visitor Flow Analytics</p>
                            <p className="text-zinc-500 mt-1">
                              관람자 동선 분산 계획(Circulation), 공간 사인 시스템 연구, 가변 전시 벽체(Pivot Wall) 회전 설계.
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
                            onClick={() => {
                              setSelectedProject(proj);
                              // Smooth scroll to the project details section, especially useful on mobile/small screens where they are stacked vertically.
                              if (window.innerWidth < 1024) {
                                setTimeout(() => {
                                  document.getElementById("project-detail-view")?.scrollIntoView({ behavior: "smooth" });
                                }, 100);
                              }
                            }}
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
                            {/* External Link Badges */}
                            {(proj.panoramaUrl || proj.videoUrl || proj.archiveUrl) && (
                              <div className="mt-1.5 flex flex-wrap gap-1">
                                {proj.panoramaUrl && (
                                  <span className="inline-flex items-center gap-0.5 px-1 py-0.2 rounded bg-sky-950/40 text-[8px] font-mono text-sky-400 border border-sky-800/30">
                                    <Globe className="w-2 h-2 text-sky-400" />
                                    <span>360°</span>
                                  </span>
                                )}
                                {proj.videoUrl && (
                                  <span className="inline-flex items-center gap-0.5 px-1 py-0.2 rounded bg-sky-950/40 text-[8px] font-mono text-sky-400 border border-sky-800/30">
                                    <Video className="w-2 h-2 text-sky-400" />
                                    <span>VIDEO</span>
                                  </span>
                                )}
                                {proj.archiveUrl && (
                                  <span className="inline-flex items-center gap-0.5 px-1 py-0.2 rounded bg-sky-950/40 text-[8px] font-mono text-sky-400 border border-sky-800/30">
                                    <Link className="w-2 h-2 text-sky-400" />
                                    <span>LINK</span>
                                  </span>
                                )}
                              </div>
                            )}
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
                  <div id="project-detail-view" className="flex-1 p-5 md:p-8 space-y-8 overflow-y-auto max-h-[750px] bg-[#08090c]">
                    
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
                            {(selectedProject?.tools || []).map((t, idx) => (
                              <span key={idx} className="bg-zinc-900 border border-zinc-800 text-sky-400 px-2 py-0.5 rounded">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Portfolio Render Showcase */}
                        <div className="space-y-3 font-mono">
                          <div className="flex items-center justify-between">
                            <h4 className="text-[10px] text-sky-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-sky-400" />
                              <span>REAL-TIME 3D SPATIAL RENDERS ({uploadedImages.length})</span>
                            </h4>
                            <span className="text-[9px] text-zinc-500">PLOT_ID: {selectedProject.id}_VISUALS</span>
                          </div>

                          {uploadedImages.length > 0 ? (
                            <>
                              {/* Main Large Visual frame */}
                              <div className="relative aspect-[16/9] w-full bg-zinc-950/40 border border-zinc-900 rounded-lg overflow-hidden group/img">
                                {/* CAD technical coordinate lines overlay */}
                                <div className="absolute inset-0 pointer-events-none border border-dashed border-sky-500/5 cad-grid"></div>
                                <div className="absolute top-2 left-2 pointer-events-none bg-black/70 border border-zinc-800 px-2 py-0.5 rounded text-[8px] text-sky-400">
                                  SYS_RENDER_VIEWPORT [ACTIVE]
                                </div>

                                {isAdmin && (
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDirectImageDelete(activeImageIndex);
                                    }}
                                    className="absolute top-2 right-2 p-1.5 rounded bg-rose-950/80 hover:bg-rose-900 border border-rose-500/40 text-rose-300 hover:text-rose-100 transition-all text-[8px] font-mono flex items-center gap-1 z-10"
                                    title="현재 이미지 삭제"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                    <span className="hidden sm:inline">DELETE</span>
                                  </button>
                                )}

                                <div className="absolute bottom-2 right-2 pointer-events-none bg-black/70 border border-zinc-800 px-2 py-0.5 rounded text-[8px] text-zinc-500">
                                  REF: {activeImageIndex + 1} / {uploadedImages.length}
                                </div>

                                {failedImages[uploadedImages[activeImageIndex]] ? (
                                  uploadedImages[activeImageIndex].startsWith("/images/") ? (
                                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#04070a]/80 text-center font-sans select-none border border-sky-500/10 rounded animate-fade-in">
                                      <div className="w-12 h-12 rounded-full bg-sky-950/20 flex items-center justify-center border border-sky-500/15 mb-3">
                                        <Link className="w-5 h-5 text-sky-400" />
                                      </div>
                                      <p className="text-xs text-sky-400 font-bold tracking-tight">로컬 이미지 준비 완료</p>
                                      <p className="text-[10.5px] text-zinc-400 mt-1.5 max-w-[85%] leading-relaxed">
                                        배포 후 <code className="text-zinc-200 font-mono bg-zinc-900 px-1 py-0.5 rounded">public/images</code> 폴더에서 확인됩니다.
                                      </p>
                                      <div className="mt-4 bg-zinc-950/90 border border-zinc-900 rounded px-2.5 py-1.5 flex items-center gap-2 max-w-[90%] overflow-hidden">
                                        <span className="text-[9px] text-zinc-500 font-mono truncate select-all">{uploadedImages[activeImageIndex]}</span>
                                        <button
                                          type="button"
                                          onClick={() => {
                                            navigator.clipboard.writeText(uploadedImages[activeImageIndex]);
                                            triggerNotification("IMAGE PATH COPIED.");
                                          }}
                                          className="px-1.5 py-0.5 rounded bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-400 hover:text-white transition-all text-[8px] shrink-0 font-mono"
                                        >
                                          COPY
                                        </button>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050709] border border-zinc-900 text-center font-mono select-none">
                                      <div className="text-[11px] font-mono tracking-[0.22em] font-medium text-zinc-600 uppercase animate-pulse">
                                        IMAGE PREPARING
                                      </div>
                                    </div>
                                  )
                                ) : (
                                  <img 
                                    src={resolveImageSrc(uploadedImages[activeImageIndex]) || ""} 
                                    alt={`${selectedProject?.title || ""} rendering`}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover select-none"
                                    onError={() => handleImageError(uploadedImages[activeImageIndex])}
                                    onLoad={() => handleImageLoad(uploadedImages[activeImageIndex])}
                                  />
                                )}

                                {/* Prev / Next buttons inside viewport */}
                                {uploadedImages.length > 1 && (
                                  <>
                                    <button 
                                      type="button"
                                      onClick={() => setActiveImageIndex(prev => (prev - 1 + uploadedImages.length) % uploadedImages.length)}
                                      className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/75 hover:bg-sky-950/90 border border-zinc-800 hover:border-sky-500/40 text-zinc-400 hover:text-sky-400 transition-all opacity-0 group-hover/img:opacity-100"
                                    >
                                      <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button 
                                      type="button"
                                      onClick={() => setActiveImageIndex(prev => (prev + 1) % uploadedImages.length)}
                                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/75 hover:bg-sky-950/90 border border-zinc-800 hover:border-sky-500/40 text-zinc-400 hover:text-sky-400 transition-all opacity-0 group-hover/img:opacity-100"
                                    >
                                      <ChevronRight className="w-4 h-4" />
                                    </button>
                                  </>
                                )}
                              </div>

                              {/* Small thumbnails bar */}
                              {uploadedImages.length > 1 && (
                                <div className="flex gap-2 overflow-x-auto pb-1 max-w-full">
                                  {uploadedImages.map((img, idx) => (
                                    <button
                                      key={idx}
                                      onClick={() => setActiveImageIndex(idx)}
                                      className={`relative w-20 aspect-[16/9] rounded border overflow-hidden shrink-0 transition-all ${
                                        activeImageIndex === idx 
                                          ? "border-sky-400 scale-[1.02] shadow-[0_0_8px_rgba(56,189,248,0.3)]" 
                                          : "border-zinc-800 hover:border-sky-500/50"
                                      }`}
                                    >
                                      {failedImages[img] ? (
                                        img.startsWith("/images/") ? (
                                          <div className="w-full h-full flex flex-col items-center justify-center bg-[#070b11] text-zinc-400 text-[8px] leading-tight text-center p-1.5 font-mono animate-fade-in" title="배포 후 public/images 폴더에서 확인됩니다.">
                                            <span className="truncate max-w-full text-sky-400/80 font-mono text-[7px] mb-0.5">{img.split('/').pop()}</span>
                                            <span className="text-[6.5px] text-zinc-500 font-sans">배포 후 확인</span>
                                          </div>
                                        ) : (
                                          <div className="w-full h-full flex flex-col items-center justify-center bg-rose-950/30 border border-rose-500/30 text-rose-300 text-[8px] leading-tight text-center p-1 font-mono" title="이미지를 찾을 수 없습니다.">
                                            <AlertCircle className="w-3.5 h-3.5 text-rose-400 mb-0.5" />
                                            <span className="truncate max-w-full text-[7px]">ERR</span>
                                          </div>
                                        )
                                      ) : (
                                        <img 
                                          src={resolveImageSrc(img)} 
                                          alt="thumbnail" 
                                          referrerPolicy="no-referrer"
                                          className="w-full h-full object-cover" 
                                          onError={() => handleImageError(img)}
                                          onLoad={() => handleImageLoad(img)}
                                        />
                                      )}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            isAdmin ? (
                              <div className="w-full aspect-[16/9] bg-zinc-950/40 border border-dashed border-zinc-850 rounded-lg flex flex-col items-center justify-center p-6 text-center">
                                <Upload className="w-8 h-8 text-zinc-650 mb-2 animate-pulse" />
                                <p className="text-xs text-zinc-400 font-sans">등록된 포트폴리오 이미지가 없습니다.</p>
                                <p className="text-[10px] text-zinc-500 mt-1 font-sans">아래 업로드 구역에서 컴퓨터의 이미지를 드래그하거나 선택하여 첫 이미지를 추가하세요.</p>
                              </div>
                            ) : (
                              <div className="w-full aspect-[16/9] bg-[#050709] border border-zinc-900 rounded-lg flex flex-col items-center justify-center p-6 text-center select-none">
                                <div className="text-[11px] font-mono tracking-[0.2em] font-medium uppercase text-zinc-600">
                                  IMAGE PREPARING
                                </div>
                              </div>
                            )
                          )}

                          {/* Direct Drag & Drop / Click Upload Area (Admin Only) */}
                          {isAdmin && (
                            <div 
                              onDragOver={(e) => {
                                e.preventDefault();
                                setIsDetailDragging(true);
                              }}
                              onDragLeave={() => setIsDetailDragging(false)}
                              onDrop={(e) => {
                                e.preventDefault();
                                setIsDetailDragging(false);
                                if (e.dataTransfer.files) {
                                  handleDirectImageUpload(e.dataTransfer.files);
                                }
                              }}
                              className={`p-4 rounded-lg border border-dashed transition-all ${
                                isDetailDragging 
                                  ? "border-sky-400 bg-sky-950/25" 
                                  : "border-sky-950/40 bg-[#090c10]/40 hover:bg-[#0c1015]/40"
                              }`}
                            >
                              <div className="space-y-3">
                                {/* Filename guide / manual warning */}
                                <p className="text-[10px] text-zinc-400 leading-relaxed text-center sm:text-left font-sans">
                                  * <span className="text-sky-400 font-bold">안내:</span> 이미지 파일명에 한글, 공백, 특수문자, 괄호가 포함된 경우 자동으로 안전하게 변환됩니다. 가능하면 <span className="text-sky-400 font-bold underline">영문 소문자, 숫자, 언더바(_)</span>만 사용해주세요.
                                </p>

                                {uploadError && (
                                  <div className="p-2.5 bg-rose-950/20 border border-rose-500/30 rounded text-rose-300 text-xs font-mono flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                                    <span>{uploadError}</span>
                                    <button 
                                      type="button" 
                                      onClick={() => setUploadError(null)} 
                                      className="ml-auto text-zinc-500 hover:text-zinc-300 font-sans"
                                    >
                                      ✕
                                    </button>
                                  </div>
                                )}

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                  <div className="space-y-1 text-center sm:text-left">
                                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[11px] text-zinc-300 font-bold">
                                      <Upload className="w-4 h-4 text-sky-400" />
                                      <span>내 컴퓨터 이미지 다중 첨부 (Drag & Drop)</span>
                                    </div>
                                    <p className="text-[10px] text-zinc-500 font-sans">
                                      이미지 파일들을 여기로 드래그하거나 컴퓨터에서 선택하세요. (JPEG, PNG 등 다중 선택 가능)
                                    </p>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => document.getElementById("direct-detail-upload")?.click()}
                                    className="w-full sm:w-auto px-4 py-1.5 rounded bg-[#0e1724] hover:bg-[#132236] border border-sky-500/30 text-sky-300 text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(56,189,248,0.1)] hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                                  >
                                    <Plus className="w-3.5 h-3.5" />
                                    <span>컴퓨터 파일 선택</span>
                                  </button>
                                  <input
                                    type="file"
                                    id="direct-detail-upload"
                                    multiple
                                    accept="image/*"
                                    onChange={(e) => {
                                      if (e.target.files) {
                                        handleDirectImageUpload(e.target.files);
                                      }
                                    }}
                                    className="hidden"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Concept Block with Premium styling */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#0c0f16] border border-sky-950/20 p-5 rounded-lg">
                          <div className="md:col-span-3 font-mono text-[10px] text-sky-400 tracking-wider font-bold border-r border-sky-950/30 pr-4">
                            SPATIAL CONCEPT DESIGN
                          </div>
                          <div className="md:col-span-9 text-xs leading-relaxed text-zinc-300 font-sans">
                            {selectedProject.concept}
                          </div>
                        </div>

                        {/* External Experience Links Section */}
                        <div className="p-5 rounded-lg border border-sky-950/30 bg-[#0a0d14] space-y-4 shadow-[0_0_20px_rgba(56,189,248,0.02)]">
                          <div className="border-b border-zinc-900 pb-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
                            <div>
                              <h4 className="font-mono text-[11px] text-sky-400 font-bold uppercase tracking-widest flex items-center gap-2">
                                <Globe className="w-4 h-4 text-sky-400 animate-pulse" />
                                <span>EXTERNAL EXPERIENCE LINKS</span>
                              </h4>
                              <p className="text-[10px] text-zinc-400 mt-1 font-sans">
                                Explore the project through 360° panorama, video walkthrough, and external archive links.
                              </p>
                              <p className="text-[9px] text-zinc-500 font-sans">
                                360도 파노라마, 영상, 외부 아카이브 링크를 통해 프로젝트를 입체적으로 확인할 수 있습니다.
                              </p>
                            </div>
                            
                            <span className="font-mono text-[9px] text-zinc-400 shrink-0 bg-sky-950/20 px-2 py-0.5 rounded border border-sky-900/30 self-start md:self-auto">
                              STATUS: {[selectedProject.panoramaUrl, selectedProject.videoUrl, selectedProject.archiveUrl].filter(Boolean).length}/3 ACTIVE
                            </span>
                          </div>

                          {linkError && (
                            <div className="p-3 bg-rose-950/20 border border-rose-500/30 rounded text-rose-300 text-xs font-mono flex items-center gap-2">
                              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                              <span>{linkError}</span>
                              <button 
                                type="button" 
                                onClick={() => setLinkError(null)} 
                                className="ml-auto text-zinc-500 hover:text-zinc-300"
                              >
                                ✕
                              </button>
                            </div>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {/* VIEW 360° PANORAMA */}
                            {selectedProject.panoramaUrl ? (
                              <button
                                onClick={() => {
                                  const url = selectedProject.panoramaUrl;
                                  if (!url || !isValidUrl(url)) {
                                    setLinkError("링크 주소를 확인해주세요");
                                    return;
                                  }
                                  setLinkError(null);
                                  window.open(ensureAbsoluteUrl(url), "_blank", "noopener,noreferrer");
                                }}
                                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-sky-950/40 hover:bg-sky-900/60 border border-sky-500/30 hover:border-sky-400/60 text-sky-300 hover:text-sky-200 text-xs font-bold font-mono tracking-wider transition-all shadow-[0_0_10px_rgba(56,189,248,0.05)] hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:-translate-y-0.5"
                              >
                                <Globe className="w-4 h-4 shrink-0" />
                                <span>VIEW 360° PANORAMA</span>
                                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                              </button>
                            ) : (
                              <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-zinc-950/40 border border-zinc-900 text-zinc-600 text-xs font-mono select-none cursor-not-allowed">
                                <Globe className="w-4 h-4 shrink-0 opacity-40" />
                                <span>PANORAMA: LINK NOT SET</span>
                              </div>
                            )}

                            {/* WATCH VIDEO */}
                            {selectedProject.videoUrl ? (
                              <button
                                onClick={() => {
                                  const url = selectedProject.videoUrl;
                                  if (!url || !isValidUrl(url)) {
                                    setLinkError("링크 주소를 확인해주세요");
                                    return;
                                  }
                                  setLinkError(null);
                                  window.open(ensureAbsoluteUrl(url), "_blank", "noopener,noreferrer");
                                }}
                                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-sky-950/40 hover:bg-sky-900/60 border border-sky-500/30 hover:border-sky-400/60 text-sky-300 hover:text-sky-200 text-xs font-bold font-mono tracking-wider transition-all shadow-[0_0_10px_rgba(56,189,248,0.05)] hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:-translate-y-0.5"
                              >
                                <Video className="w-4 h-4 shrink-0" />
                                <span>WATCH VIDEO</span>
                                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                              </button>
                            ) : (
                              <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-zinc-950/40 border border-zinc-900 text-zinc-600 text-xs font-mono select-none cursor-not-allowed">
                                <Video className="w-4 h-4 shrink-0 opacity-40" />
                                <span>VIDEO: LINK NOT SET</span>
                              </div>
                            )}

                            {/* OPEN PROJECT LINK */}
                            {selectedProject.archiveUrl ? (
                              <button
                                onClick={() => {
                                  const url = selectedProject.archiveUrl;
                                  if (!url || !isValidUrl(url)) {
                                    setLinkError("링크 주소를 확인해주세요");
                                    return;
                                  }
                                  setLinkError(null);
                                  window.open(ensureAbsoluteUrl(url), "_blank", "noopener,noreferrer");
                                }}
                                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-sky-950/40 hover:bg-sky-900/60 border border-sky-500/30 hover:border-sky-400/60 text-sky-300 hover:text-sky-200 text-xs font-bold font-mono tracking-wider transition-all shadow-[0_0_10px_rgba(56,189,248,0.05)] hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:-translate-y-0.5"
                              >
                                <Link className="w-4 h-4 shrink-0" />
                                <span>{selectedProject.archiveLabel || "OPEN PROJECT LINK"}</span>
                                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                              </button>
                            ) : (
                              <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-zinc-950/40 border border-zinc-900 text-zinc-600 text-xs font-mono select-none cursor-not-allowed">
                                <Link className="w-4 h-4 shrink-0 opacity-40" />
                                <span>LINK: LINK NOT SET</span>
                              </div>
                            )}
                          </div>
                        </div>



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
                              {(selectedProject?.materialLighting?.materials || []).map((mat, idx) => (
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
                              {(selectedProject?.materialLighting?.lighting || []).map((light, idx) => (
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
                            {(selectedProject?.process || []).map((step, idx) => (
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
              포트폴리오 내용 수정/추가 권한을 획득하기 위해 비밀번호를 입력해주십시오.
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

              {/* External Experience Links Section */}
              <div className="p-4 rounded-lg bg-[#08090d] border border-sky-950/40 space-y-3.5">
                <span className="block text-[10px] text-sky-400 font-bold uppercase tracking-wider">
                  EXTERNAL EXPERIENCE LINKS (외부 아카이브 및 실감 콘텐츠 연결)
                </span>
                
                <p className="text-[9px] text-zinc-500 leading-relaxed font-sans">
                  * 360도 파노라마 VR(키파노 등), 워크스루 비디오, 기타 포트폴리오 아카이브용 외부 주소를 연결할 수 있습니다. <br />
                  * 입력된 링크는 상세 화면에서 각각 전용 버튼으로 표출되며, 비어 있는 경우 비활성화 또는 표시되지 않습니다.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-zinc-500 mb-1 text-[10px]">360° PANORAMA URL (키파노 / VR 파노라마 주소)</label>
                    <input 
                      type="text" 
                      value={formPanoramaUrl}
                      onChange={(e) => setFormPanoramaUrl(e.target.value)}
                      placeholder="예: kuula.co/share/collection/7K7Pz"
                      className="w-full bg-zinc-950 border border-zinc-850 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none text-[11px]"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-500 mb-1 text-[10px]">VIDEO URL (유튜브 / 비메오 / 구글드라이브 영상 주소)</label>
                    <input 
                      type="text" 
                      value={formVideoUrl}
                      onChange={(e) => setFormVideoUrl(e.target.value)}
                      placeholder="예: youtube.com/watch?v=..."
                      className="w-full bg-zinc-950 border border-zinc-850 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none text-[11px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-zinc-500 mb-1 text-[10px]">PROJECT ARCHIVE URL (기타 외부 상세 아카이브 주소)</label>
                    <input 
                      type="text" 
                      value={formArchiveUrl}
                      onChange={(e) => setFormArchiveUrl(e.target.value)}
                      placeholder="예: github.com/username/project"
                      className="w-full bg-zinc-950 border border-zinc-850 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none text-[11px]"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-500 mb-1 text-[10px]">BUTTON LABEL (외부 주소 버튼 명칭)</label>
                    <input 
                      type="text" 
                      value={formArchiveLabel}
                      onChange={(e) => setFormArchiveLabel(e.target.value)}
                      placeholder="예: OPEN PROJECT LINK (미입력 시 기본값)"
                      className="w-full bg-zinc-950 border border-zinc-850 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none text-[11px]"
                    />
                  </div>
                </div>
              </div>

              {/* IMAGE URL & PATH MANAGER (이미지 URL & 경로 매니저) */}
              <div className="space-y-4 border-t border-zinc-900 pt-4">
                <div>
                  <label className="block text-sky-400 font-bold text-[10px] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span>PROJECT IMAGES (프로젝트 이미지 갤러리)</span>
                  </label>
                  <p className="text-[10px] text-zinc-400 leading-normal mb-2.5">
                    프로젝트 이미지 목록입니다. 썸네일을 <strong>클릭</strong>하면 아래 입력창에서 이미지 주소를 직접 수정(REPLACE), 복사(COPY) 또는 삭제(DELETE)할 수 있습니다.
                  </p>

                  {formImages.length === 0 ? (
                    <div className="border border-dashed border-zinc-850 rounded-lg p-6 text-center bg-zinc-950/40">
                      <p className="text-[11px] text-zinc-500">등록된 이미지가 없습니다. 아래 입력창에 이미지 URL을 직접 입력해 추가하세요.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {formImages.map((img, idx) => {
                        const isSelected = formSelectedImageIndex === idx;
                        return (
                          <div 
                            key={idx} 
                            onClick={() => {
                              setFormSelectedImageIndex(idx);
                              setManualPathInput(img);
                              triggerNotification(`IMAGE #${idx + 1} SELECTED.`);
                            }}
                            className={`relative aspect-[16/9] rounded border bg-zinc-950 overflow-hidden cursor-pointer transition-all group ${
                              isSelected 
                                ? "border-sky-400 ring-1 ring-sky-400/50 scale-[1.02] shadow-lg shadow-sky-950/40" 
                                : "border-zinc-850 hover:border-zinc-700 hover:scale-[1.01]"
                            }`}
                          >
                            {failedImages[img] ? (
                              img.startsWith("/images/") ? (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-[#070b11] text-zinc-400 text-[8px] leading-tight text-center p-1 font-mono animate-fade-in" title="배포 후 public/images 폴더에서 확인됩니다.">
                                  <span className="truncate max-w-full text-sky-400/80 font-mono text-[7px] mb-0.5">{img.split('/').pop()}</span>
                                  <span className="text-[6.5px] text-zinc-500 font-sans">배포 후 확인</span>
                                </div>
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-rose-950/30 text-rose-300 text-[8px] font-mono leading-none p-1 text-center" title="이미지를 찾을 수 없습니다.">
                                  <AlertCircle className="w-4 h-4 text-rose-400 mb-1 animate-pulse" />
                                  <span>ERR</span>
                                </div>
                              )
                            ) : (
                              <img
                                src={resolveImageSrc(img)}
                                alt={`render ${idx + 1}`}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                                onError={() => handleImageError(img)}
                                onLoad={() => handleImageLoad(img)}
                              />
                            )}
                            
                            {/* Number badge */}
                            <div className="absolute top-1 left-1 px-1 bg-black/80 border border-zinc-800 rounded text-[8px] font-mono text-zinc-400">
                              #{idx + 1}
                            </div>

                            {/* Selected overlay marker */}
                            {isSelected && (
                              <div className="absolute inset-0 bg-sky-950/25 flex items-center justify-center">
                                <span className="bg-sky-500 text-black text-[8px] font-black tracking-wider px-1.5 py-0.5 rounded uppercase">
                                  EDITING
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Input & Control UI */}
                <div className="space-y-2 bg-[#090d14]/40 border border-zinc-900/80 p-3.5 rounded-lg">
                  <div className="flex items-center justify-between">
                    <label className="block text-zinc-400 font-bold text-[9.5px] uppercase tracking-wider">
                      {formSelectedImageIndex !== null ? `IMAGE #${formSelectedImageIndex + 1} 주소 수정 중` : "새 이미지 URL / 경로 입력"}
                    </label>
                    {formSelectedImageIndex !== null && (
                      <button
                        type="button"
                        onClick={() => {
                          setFormSelectedImageIndex(null);
                          setManualPathInput("");
                        }}
                        className="text-[9px] text-zinc-500 hover:text-zinc-300 font-mono"
                      >
                        [선택 해제]
                      </button>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={manualPathInput}
                      onChange={(e) => setManualPathInput(e.target.value)}
                      placeholder="예: /images/파일명.png 또는 https://images.unsplash.com/..."
                      className="flex-1 bg-zinc-950 border border-zinc-800 focus:border-sky-400 p-2 rounded text-zinc-200 focus:outline-none text-[11.5px] font-mono"
                    />
                    
                    <div className="flex gap-1.5">
                      {formSelectedImageIndex === null ? (
                        <button
                          type="button"
                          disabled={!manualPathInput.trim()}
                          onClick={() => {
                            if (manualPathInput.trim()) {
                              let val = manualPathInput.trim();
                              if (!val.startsWith("http") && !val.startsWith("data:") && !val.startsWith("/")) {
                                val = "/" + val;
                              }
                              setFormImages(prev => [...prev, val]);
                              setManualPathInput("");
                              triggerNotification("NEW IMAGE PATH ADDED.");
                            }
                          }}
                          className={`px-3.5 py-1.5 rounded font-bold text-[10.5px] whitespace-nowrap transition-all ${
                            manualPathInput.trim() 
                              ? "bg-sky-950 hover:bg-sky-900 border border-sky-500/30 text-sky-300"
                              : "bg-zinc-900 border border-zinc-850 text-zinc-600 cursor-not-allowed"
                          }`}
                        >
                          ADD IMAGE (추가)
                        </button>
                      ) : (
                        <>
                          <button
                            type="button"
                            disabled={!manualPathInput.trim()}
                            onClick={() => {
                              if (manualPathInput.trim()) {
                                let val = manualPathInput.trim();
                                if (!val.startsWith("http") && !val.startsWith("data:") && !val.startsWith("/")) {
                                  val = "/" + val;
                                }
                                setFormImages(prev => {
                                  const updated = [...prev];
                                  updated[formSelectedImageIndex] = val;
                                  return updated;
                                });
                                triggerNotification("IMAGE PATH REPLACED.");
                              }
                            }}
                            className={`px-3.5 py-1.5 rounded font-bold text-[10.5px] whitespace-nowrap transition-all ${
                              manualPathInput.trim()
                                ? "bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300"
                                : "bg-zinc-900 border border-zinc-850 text-zinc-600 cursor-not-allowed"
                            }`}
                          >
                            REPLACE (변경)
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              removeFormImage(formSelectedImageIndex);
                              triggerNotification("IMAGE DELETED.");
                            }}
                            className="px-3.5 py-1.5 bg-rose-950 hover:bg-rose-900 border border-rose-500/30 text-rose-300 rounded font-bold text-[10.5px] whitespace-nowrap transition-all"
                          >
                            DELETE (삭제)
                          </button>
                        </>
                      )}

                      <button
                        type="button"
                        disabled={!manualPathInput.trim()}
                        onClick={() => {
                          if (manualPathInput.trim()) {
                            navigator.clipboard.writeText(manualPathInput.trim());
                            triggerNotification("COPIED TO CLIPBOARD.");
                          }
                        }}
                        className={`px-3.5 py-1.5 rounded font-bold text-[10.5px] whitespace-nowrap transition-all ${
                          manualPathInput.trim()
                            ? "bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300"
                            : "bg-zinc-950 border border-zinc-900 text-zinc-600 cursor-not-allowed"
                        }`}
                        title="주소 복사"
                      >
                        COPY (복사)
                      </button>
                    </div>
                  </div>

                  {/* Warning label if the path doesn't start with /images/ */}
                  {pathInputWarning && (
                    <div className="mt-1.5 p-2 bg-amber-950/30 border border-amber-500/35 rounded text-amber-300 text-[10.5px] font-sans flex items-start gap-1.5 leading-relaxed">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5 animate-pulse" />
                      <span>{pathInputWarning}</span>
                    </div>
                  )}

                  {manualPathInput.trim() && (
                    <div className="text-[10px] text-zinc-500 font-mono mt-1 break-all bg-black/30 p-1.5 rounded border border-zinc-900/50 flex justify-between items-center gap-2">
                      <span className="truncate"><span className="text-zinc-600 font-bold">CURRENT PATH:</span> {manualPathInput}</span>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(manualPathInput.trim());
                          triggerNotification("IMAGE PATH COPIED.");
                        }}
                        className="px-1.5 py-0.5 rounded bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-400 text-[8px] shrink-0 font-sans uppercase font-bold"
                      >
                        Copy URL
                      </button>
                    </div>
                  )}
                </div>

                {/* Info Guide Box */}
                <div className="p-4 rounded-lg bg-[#06080c] border border-sky-950/45 space-y-2.5 font-sans mt-3">
                  <div className="flex items-center gap-1.5 text-sky-400 font-bold uppercase tracking-wider text-[10px]">
                    <HelpCircle className="w-4 h-4 text-sky-400" />
                    <span>IMAGE STORAGE & RECOVERY GUIDE (이미지 주소 연동 가이드)</span>
                  </div>
                  
                  <div className="space-y-2 text-[10.5px] text-zinc-400 leading-relaxed">
                    <p>
                      * <strong>안전한 보관 보장:</strong> 이미지 자체를 용량이 큰 base64 파일로 브라우저에 가두어두지 않고, <strong>가볍고 깨끗한 텍스트 주소 문자열만 localStorage에 저장</strong>합니다. 이에 따라 Google AI Studio를 나갔다 다시 돌아와도, 작성된 URL 그대로 이미지를 안전하게 로드할 수 있습니다.
                    </p>
                    <p className="text-sky-300 font-semibold bg-sky-950/20 p-2.5 rounded border border-sky-900/20 leading-snug">
                      “외부 웹 사이트에 올린 이미지 URL 주소(HTTPS)를 복사해서 넣거나, 실제 이미지 파일을 VS Code의 public/images 폴더에 직접 올려서 /images/파일명.png 형식으로 입력하면 아주 안정적으로 사이트에 표시됩니다.”
                    </p>
                    
                    {/* Examples and Best Practices */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-black/40 p-2.5 rounded border border-zinc-900 text-[10px] font-mono">
                      <div>
                        <span className="text-zinc-500 block text-[9px] uppercase">1. 외부 URL (HTTP / HTTPS) 예시</span>
                        <span className="text-sky-400 font-bold">https://example.com/atlas_main_01.png</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[9px] uppercase">2. 내부 폴더 상대 경로 예시</span>
                        <span className="text-sky-400 font-bold">/images/atlas_main_01.png</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Auxiliary File Upload section (보조 기능) */}
                <div className="p-3.5 bg-zinc-950/40 border border-zinc-900 rounded-lg space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500 font-bold text-[9.5px] uppercase tracking-wider">
                      보조 기능: 내컴퓨터 이미지 파일 직접 추가 (Base64 변환)
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-500">
                    로컬 이미지 파일을 사이트에 직접 삽입하고 싶을 때 사용하는 보조 도구입니다. 파일을 선택하면 자동으로 압축된 이미지 데이터 경로가 갤러리에 추가됩니다.
                  </p>
                  
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border border-dashed rounded p-3.5 text-center transition-all cursor-pointer ${
                      isDragging
                        ? "border-sky-400 bg-sky-950/15"
                        : "border-zinc-850 hover:border-sky-500/20 bg-zinc-950/20"
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
                    <div className="flex flex-col items-center justify-center space-y-1">
                      <Sparkles className="w-4 h-4 text-sky-400/50" />
                      <p className="text-[10px] text-zinc-400">
                        여기로 이미지를 드래그하거나 <span className="text-sky-400 underline">클릭하여 선택</span>
                      </p>
                    </div>
                  </div>
                </div>
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

      {/* ABOUT ME MODAL (HIGH-END SPATIAL DESIGNER ARCHIVE PROFILE) */}
      {showAboutModal && (
        <div className="fixed inset-0 bg-[#06080b]/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#090c10] border border-sky-500/20 max-w-2xl w-full rounded-lg shadow-2xl overflow-hidden font-mono text-zinc-300">
            {/* Header */}
            <div className="bg-[#0b0f15] px-4 py-3 border-b border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-sky-500 animate-pulse rounded-full"></span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">ARCHIVE_BIO_SOYOUNG_KIM_REVISED.log</span>
              </div>
              <button 
                onClick={() => setShowAboutModal(false)}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Visual Identity Profile Frame */}
                <div className="md:col-span-5 space-y-4">
                  <div className="relative p-1 rounded-md border border-sky-500/10 bg-zinc-950/60 aspect-[3/4] flex flex-col items-center justify-center overflow-hidden cad-grid">
                    <div className="absolute top-2 left-2 text-[8px] text-zinc-600">CAD_PERSPECTIVE_01</div>
                    <div className="absolute bottom-2 right-2 text-[8px] text-sky-500/50">SCALE 1:20</div>
                    {/* Abstract Spatial Vector Icon */}
                    <svg className="w-20 h-20 text-sky-400/20 animate-pulse" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                      <polygon points="50,15 90,35 90,75 50,95 10,75 10,35" />
                      <line x1="50" y1="15" x2="50" y2="95" strokeDasharray="2,2" />
                      <line x1="10" y1="35" x2="90" y2="75" strokeDasharray="2,2" />
                      <line x1="90" y1="35" x2="10,75" strokeDasharray="2,2" />
                      <circle cx="50" cy="55" r="20" stroke="currentColor" strokeOpacity="0.4" />
                    </svg>
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-lg font-bold text-zinc-100 tracking-wide font-sans">김소영 (SOYOUNG KIM)</h2>
                    <p className="text-[10px] text-sky-400 mt-1 uppercase tracking-widest font-mono">Exhibition & Space Experience Designer</p>
                  </div>
                </div>

                {/* Profile Narrative Spec */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <h4 className="text-[10px] text-sky-400 font-bold uppercase tracking-wider mb-2 border-b border-zinc-900 pb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-sky-400" />
                      <span>Professional Manifesto</span>
                    </h4>
                    <p className="text-[11px] leading-relaxed font-sans text-zinc-400">
                      스토리텔링과 정교한 공간 기획, 3D 가상 시각화를 융합하여 몰입감 있는 전시 경험을 연출합니다. 
                      관람자의 동선(Circulation) 흐름을 최적화하고 감각적인 빛과 마감재 스케듈링을 설계하며, 
                      최근에는 생성형 AI 및 첨단 3D 워크플로우를 도입하여 콘셉트 기획 단계의 완성도와 개발 속도를 극대화하고 있습니다.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] text-sky-400 font-bold uppercase tracking-wider mb-2 border-b border-zinc-900 pb-1 flex items-center gap-1.5">
                      <Settings className="w-3.5 h-3.5 text-sky-400" />
                      <span>Technical Competency</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[10px]">
                      <div className="flex justify-between border-b border-zinc-900/40 py-1">
                        <span className="text-zinc-400">Concept Planning</span>
                        <span className="text-sky-400">EXPERT</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-900/40 py-1">
                        <span className="text-zinc-400">AutoCAD Drafting</span>
                        <span className="text-sky-400">PROFICIENT</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-900/40 py-1">
                        <span className="text-zinc-400">SketchUp 3D</span>
                        <span className="text-sky-400">EXPERT</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-900/40 py-1">
                        <span className="text-zinc-400">Enscape Render</span>
                        <span className="text-sky-400">EXPERT</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-900/40 py-1">
                        <span className="text-zinc-400">AI Midjourney Workflow</span>
                        <span className="text-sky-400">PROFICIENT</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-900/40 py-1">
                        <span className="text-zinc-400">Creative Direction</span>
                        <span className="text-sky-400">EXPERT</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] text-sky-400 font-bold uppercase tracking-wider mb-2 border-b border-zinc-900 pb-1 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                      <span>Education & Career Focus</span>
                    </h4>
                    <div className="space-y-2 text-[10px]">
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
                        <p className="text-zinc-500 font-sans mt-0.5">스토리텔링 기반 전시 레이아웃 시나리오 및 시각 커뮤니케이션 복수전공</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#0b0f15] px-6 py-4 border-t border-zinc-900 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowAboutModal(false);
                  setShowContactModal(true);
                }}
                className="bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 text-sky-300 px-4 py-2 rounded text-[11px] font-bold tracking-widest transition-all"
              >
                REQUEST CONTACT
              </button>
              <button
                onClick={() => setShowAboutModal(false)}
                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 px-4 py-2 rounded text-[11px] font-bold tracking-widest transition-all"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT MODAL */}
      {showContactModal && (
        <div className="fixed inset-0 bg-[#06080b]/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#090c10] border border-sky-500/20 max-w-md w-full rounded-lg shadow-2xl overflow-hidden font-mono text-zinc-300">
            {/* Header */}
            <div className="bg-[#0b0f15] px-4 py-3 border-b border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-sky-500 animate-pulse rounded-full"></span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">NETWORK_PORT_CONTACT_SOCKET.log</span>
              </div>
              <button 
                onClick={() => setShowContactModal(false)}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-sky-950/20 border border-sky-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-sm font-bold text-zinc-100 tracking-wider">SECURE CONTACT CHANNELS</h3>
                <p className="text-[10px] text-zinc-500">Exhibition Space Design Team Applicant — Soyoung Kim</p>
              </div>

              <div className="space-y-3 bg-zinc-950/60 p-4 rounded border border-zinc-900 text-xs">
                <div className="flex items-center justify-between border-b border-zinc-900/80 pb-2">
                  <span className="text-zinc-500">EMAIL ADDR:</span>
                  <a href="mailto:zssaya3600@gmail.com" className="text-sky-400 font-bold hover:underline">zssaya3600@gmail.com</a>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-900/80 pb-2">
                  <span className="text-zinc-500">PHONE LINE:</span>
                  <span className="text-zinc-300 font-bold">+82 (010) 5421-XXXX</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-900/80 pb-2">
                  <span className="text-zinc-500">RESIDENCE:</span>
                  <span className="text-zinc-300 font-bold">Seoul, South Korea</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-zinc-500">APPLY DEPT:</span>
                  <span className="text-sky-400 font-bold">EXHIBITION SPACE DESIGN TEAM</span>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleDownloadPDF}
                  className="w-full bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 hover:border-sky-400 text-sky-300 py-2.5 rounded text-[11px] font-bold tracking-widest transition-all uppercase"
                >
                  DOWNLOAD PORTFOLIO PDF (24.5MB)
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#0b0f15] px-6 py-4 border-t border-zinc-900 flex justify-end">
              <button
                onClick={() => setShowContactModal(false)}
                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 px-5 py-2 rounded text-[11px] font-bold tracking-widest transition-all"
              >
                CLOSE SOCKET
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
