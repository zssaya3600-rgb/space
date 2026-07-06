import { Category, Project } from "./types";

export const defaultCategories: Category[] = [
  { 
    id: "01", 
    num: "01", 
    title: "Featured Project ATLAS-1", 
    description: "Community Food Hub, mixed-use cultural space, smart farm, shared kitchen, local market regeneration project.", 
    image: "/images/atlas_01.png" 
  },
  { 
    id: "02", 
    num: "02", 
    title: "Exhibition Research", 
    description: "Museum Research · Spatial Archives · Design analysis", 
    image: "/images/project2.jpg" 
  },
  { 
    id: "03", 
    num: "03", 
    title: "Commercial Interior", 
    description: "Commercial space design and interior layout", 
    image: "/images/ezen_03.png" 
  },
  { 
    id: "04", 
    num: "04", 
    title: "Residential Design", 
    description: "Residential space and interior design layout", 
    image: "/images/pangyo_08.png"
  },
  { 
    id: "05", 
    num: "05", 
    title: "Rendering / Modeling", 
    description: "High quality 3D rendering and model study", 
    image: "/images/rendering_01.png" 
  },
  { 
    id: "06", 
    num: "06", 
    title: "Drawing / CAD", 
    description: "Detailed CAD drawing and space planning process", 
    image: "/images/cad_01.png" 
  }
];

export const defaultProjects: Project[] = [
  {
    id: "atlas-01",
    categoryId: "01",
    title: "Featured Project ATLAS-1",
    subtitle: "Community Food Hub & Smart Farm System",
    role: "Lead Spatial Designer",
    tools: ["AutoCAD", "SketchUp", "Enscape", "Photoshop"],
    concept: "Community Food Hub, mixed-use cultural space, smart farm, shared kitchen, local market regeneration project.",
    process: ["Research", "Concept Ideation", "3D Modeling", "Detail Drafting"],
    drawings: [{ title: "Overall Layout Plan", description: "전체 층별 동선 레이아웃 및 영역 구획 도면", svgType: "exhibition-floor" }],
    userFlow: [{ step: "01", title: "Smart Farm Foyer", description: "스마트 팜 기술과 수경재배 존의 시작점" }],
    materialLighting: { materials: ["Anodized Steel", "Low-E Glass", "Polished Concrete"], lighting: ["4000K Line LED", "Full-Spectrum Grow Lights"], description: "구조미를 살린 산업용 금속 프레임과 자연광 유입 시스템" },
    renderingUrl: "atlas_01_rendering",
    finalImageUrl: "atlas_01_final",
    images: ["/images/atlas_01.png", "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop"]
  },
  {
    id: "exres-01",
    categoryId: "02",
    title: "01_Museum Research",
    subtitle: "Spatial Archive & Circulation Analysis",
    role: "Museum Spatial Planner",
    tools: ["Figma", "Research Deck", "Illustrator"],
    concept: "국내외 주요 미술관의 동선 흐름 분석 및 전시 가벽 형태 연구. 미디어 아트의 투사 효율성과 관람객 이동 속도의 상관관계 규명.",
    process: ["Case Studies", "Space Syntax Analysis", "Circulation Mapping"],
    drawings: [{ title: "Museum Flow Study", description: "선형 동선과 자유동선의 가벽 구조 비교도", svgType: "exhibition-floor" }],
    userFlow: [{ step: "01", title: "Seamless Passage", description: "정체 구간을 최소화하는 관람 동선 시뮬레이션" }],
    materialLighting: { materials: ["Acoustic Plasterboard", "Eco-friendly Paint"], lighting: ["Low-glare 3000K Track Lights"], description: "작품 집중에 방해 없는 균일한 간접 무지향성 확산광" },
    renderingUrl: "exres_01_rendering",
    finalImageUrl: "exres_01_final",
    images: ["/images/project2.png", "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=1200&auto=format&fit=crop"]
  },
  {
    id: "com-01",
    categoryId: "03",
    title: "Commercial Interior",
    subtitle: "Minimalist Espresso Bar & Brand Cafe Concept",
    role: "Lead Space Designer",
    tools: ["SketchUp", "Enscape", "AutoCAD"],
    concept: "거친 노출 콘크리트 마감과 극도로 세련된 금속 스테인리스 스틸 소재가 완벽히 결합된 미니멀 상업 공간 디자인.",
    process: ["Layout Plan", "Furniture Detailing", "Lighting Design"],
    drawings: [{ title: "Bar Counter Detail Plan", description: "바리스타 동선과 장비 배치를 맞춘 가구 제작 상세 단면도", svgType: "retail-layout" }],
    userFlow: [{ step: "01", title: "Central Espresso Bar", description: "스탠딩 테이블에서 바로 에스프레소를 주문하고 즐기는 직관적 동선" }],
    materialLighting: { materials: ["Stainless Steel 304", "Exposed Concrete", "Oak Veneer"], lighting: ["3000K Warm Pendant", "Under-counter Ambient LED"], description: "금속의 차가움을 상쇄하기 위한 따뜻한 간접 면조명과 포인트 웜 라이팅" },
    renderingUrl: "com_01_rendering",
    finalImageUrl: "com_01_final",
    images: ["/images/commercial_01.png", "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"]
  },
  {
    id: "res-01",
    categoryId: "04",
    title: "Residential Design",
    subtitle: "High-end Private Villa Renovation Project",
    role: "Residential Interior Designer",
    tools: ["AutoCAD", "SketchUp", "Enscape"],
    concept: "판교 복층 단독주택을 위한 프라이빗하고 세련된 가족 친화형 공간 설계. 자연 채광 유입과 효율적인 수납 극대화.",
    process: ["Room Restructuring", "Storage System Design", "Material Palette Spec"],
    drawings: [{ title: "1st Floor Plan", description: "가족 침실과 공용 거실의 동선을 연계한 정밀 치수 평면도", svgType: "exhibition-floor" }],
    userFlow: [{ step: "01", title: "Double-height Living Void", description: "현관을 지나 마주하는 웅장한 천장고와 정원 뷰의 연계" }],
    materialLighting: { materials: ["Travertine Stone", "Walnut Wood Panels", "Silk Wallpaper"], lighting: ["Smart Dimming Control System", "Warm Linear LEDs"], description: "시간대의 자연 광량에 연동되어 조도를 세밀히 조절하는 지능형 간접 등기구 배치" },
    renderingUrl: "res_01_rendering",
    finalImageUrl: "res_01_final",
    images: ["/images/residential_01.png", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"]
  },
  {
    id: "vis-01",
    categoryId: "05",
    title: "Rendering Study",
    subtitle: "3D Rendering and Volumetric Form Study",
    role: "3D Visualization Artist",
    tools: ["SketchUp", "Enscape", "Photoshop"],
    concept: "건축물 외관 파사드의 루버 디테일과 매직 아워 시점의 하늘빛 반사 효과를 사실적으로 표현하는 시각화 연구.",
    process: ["LOD 400 Modeling", "Texture PBR Mapping", "Exposure & Fog Adjustment"],
    drawings: [{ title: "Camera Position Setup", description: "투시 뷰 왜곡 방지 및 2점 투시 정밀 렌더링 뷰포트 평면도", svgType: "vr-gallery" }],
    userFlow: [{ step: "01", title: "Photorealistic View", description: "완성된 렌더링을 바탕으로 한 깊이감 있는 입체적 무드 체감" }],
    materialLighting: { materials: ["Anodized Aluminum", "Brushed Silver", "Water Shaders"], lighting: ["Sunset HDRI Sky System", "IES Spot Profiles"], description: "해질녘 장엄한 노을빛과 빌딩 내부 인테리어 조명이 연출하는 시너지" },
    renderingUrl: "vis_01_rendering",
    finalImageUrl: "vis_01_final",
    images: ["/images/rendering_01.png", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"]
  },
  {
    id: "cad-01",
    categoryId: "06",
    title: "CAD Drawing",
    subtitle: "Detailed CAD Drawing and Space Planning Process",
    role: "Technical Draftsman",
    tools: ["AutoCAD"],
    concept: "시공성을 완벽 검증한 고해상도 상세 평면도, 가벽 조인트 입면도 및 가구 조립 단면 드래프팅 아카이브.",
    process: ["Technical Drafting", "Grid Overlay", "Joint Spec Annotation"],
    drawings: [{ title: "Standard Detail Section", description: "천장 천정틀 및 바닥 마감 결합 부위 표준 상세 단면도", svgType: "detail-section" }],
    userFlow: [{ step: "01", title: "Technical Verification", description: "오차 범위 1mm 미만의 완벽한 현장 시공 가이드 제시" }],
    materialLighting: { materials: ["Galvanized Steel Stud", "Double Gypsum Board", "Neoprene Pad"], lighting: ["Industrial Task Lighting"], description: "정밀 도면 검토를 위한 균일하고 직사적인 백색 주광색 조명 체크" },
    renderingUrl: "cad_01_rendering",
    finalImageUrl: "cad_01_final",
    images: ["/images/cad_01.png", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"]
  }
];
