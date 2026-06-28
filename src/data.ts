import { Category, Project } from "./types";

export const defaultCategories: Category[] = [
  { id: "01", num: "01", title: "Exhibition Space", description: "전시 공간 기획 & 관람 동선 디자인" },
  { id: "02", num: "02", title: "Interior Design", description: "상업 및 가변형 실내 공간 레이아웃" },
  { id: "03", num: "03", title: "SketchUp Modeling", description: "Enscape 실시간 렌더링 및 3D 모델링" },
  { id: "04", num: "04", title: "CAD Drawing", description: "오토캐드 기반 정밀 평면/단면 설계 도면" },
  { id: "05", num: "05", title: "VR Experience", description: "HMD 가상 시뮬레이션 및 공간 몰입 경험" },
  { id: "06", num: "06", title: "Branding & Graphic", description: "전시 그래픽 및 공간 웨이파인딩 사인 시스템" },
  { id: "07", num: "07", title: "Process Archive", description: "아이디어 스케치부터 설계 프로세스 아카이브" },
  { id: "08", num: "08", title: "About Me", description: "공간 디자이너 김영준의 프로필 및 연락처" }
];

export const defaultProjects: Project[] = [
  {
    id: "ex-01",
    categoryId: "01",
    title: "PROTOTYPE-V: Light & Sound Void Pavilion",
    subtitle: "친환경 리사이클 루버를 적용한 전시용 무중력 파빌리온",
    role: "Lead Spatial Planner & 3D Environment Modeler",
    tools: ["SketchUp", "AutoCAD", "Enscape", "Photoshop"],
    concept: "물리적 중력을 거스르는 '빛'과 '보이드'의 공존을 유도합니다. 가벼우면서도 견고한 재생 알루미늄 루버를 주 재료로 삼아, 빛의 투과율과 보는 각도에 따라 파사드가 변화하며 관람자에게 시각적 잔상을 부여하도록 기획했습니다.",
    process: [
      "Site Analysis: 전시장 외부 광원 및 동선 유입 경로 분석 (Circulation Analysis)",
      "Zoning & Form Finding: 가변 벽체를 통한 3단 공간 조닝 (진입-몰입-잔향)",
      "CAD Drafting: AutoCAD를 활용한 정밀 루버 고정 유닛 구조 상세도 설계",
      "3D Modeling: SketchUp 컴포넌트를 활용하여 120개의 파사드 프레임 모델링",
      "Rendering & Feedback: Enscape 조명 시뮬레이션을 거쳐 최적의 천장 슬릿 배치 확정"
    ],
    drawings: [
      {
        title: "전체 공간 동선 평면도 (Floor & Circulation Plan)",
        description: "관람객의 병목 현상을 방지하기 위해 1.8m 이상의 일방통행(One-way) 순환 동선 구조로 설계되었으며, 주요 가구 배치를 오프셋하여 시각적 개방감을 유지했습니다.",
        svgType: "exhibition-floor"
      },
      {
        title: "외벽 루버 시공 단면 상세도 (Louver Connection Section)",
        description: "경량 재생 알루미늄 파이프가 상하부 채널에 슬라이딩 형태로 고정되는 시공 방식으로 구조적 안정성과 가구 철거 시 재활용 가능성을 높였습니다.",
        svgType: "detail-section"
      }
    ],
    userFlow: [
      { step: "Zone 1", title: "Welcome Tunnel (빛의 감쇠)", description: "외부 조도를 15lx 이하로 낮춘 진입로를 설계해, 동공의 이완을 유도하고 다가올 보이드 공간의 광학적 대비를 극대화합니다." },
      { step: "Zone 2", title: "Immersive Void (중앙 광장)", description: "높이 4.5m의 천장 슬릿에서 떨어지는 자연광과 바닥의 거울 연못(Water Mirror)이 맞물려 무중력 공간과 같은 착시를 제공합니다." },
      { step: "Zone 3", title: "Acoustic Reflection (사운드 존)", description: "흡음 패널과 흡음 타공 목재를 배면 처리하여 동선 유도 음향이 은은하게 감돌게 하고 브랜드의 핵심 메시지를 시각+청각적으로 인지하게 만듭니다." }
    ],
    materialLighting: {
      materials: ["재생 프리즘 알루미늄 루버 (Prismatic Aluminum)", "스피겔 유리 바닥 (Mirror Floor Finish)", "노출 콘크리트 마감 플랙트 패널 (Eco-friendly Concrete Paint)"],
      lighting: ["3000K 간접 광섬유 라인 조명", "4000K 천장 보이드 매립 슬림 라인 조명 (CRI 95+)", "바닥 조명용 스팟 에칭 라이팅 (Dimming Controlled)"],
      description: "인위적인 직접 조명은 배제하고, 모든 구조적 조명은 바닥과 천장의 슬릿 내부에 숨겨진 매립식 라인 조명으로 구축하여 형태와 공간의 본질에 시선이 머물도록 조율했습니다."
    },
    renderingUrl: "exhibition_pavilion_rendering",
    finalImageUrl: "exhibition_pavilion_final",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "ex-02",
    categoryId: "01",
    title: "NEXUS: Future Mobility Pavilion",
    subtitle: "유선형 스트림라인을 모티브로 삼은 친환경 자율주행 모빌리티 전시관",
    role: "Exhibition Planner & AutoCAD Draftsman",
    tools: ["AutoCAD", "SketchUp", "Photoshop", "Illustrator"],
    concept: "단순한 이동수단의 전시를 넘어, 차량과 공간이 교감하는 가상의 도시 그리드를 제안합니다. 동선 흐름(Streamline)을 벽면의 라인 조명과 연계하여, 마치 관람자가 자율주행 회로 속에 타고 흐르는 듯한 유기적인 경험을 구현했습니다.",
    process: [
      "Research: 자율주행 센서 피드백 및 모빌리티 인터랙티브 동선 기획",
      "Zoning Layout: 모빌리티 도크, 미디어 아카이브, 체험 콕핏 존 배정",
      "Slab Load Study: 대형 기기 전시를 위한 하부 구조 프레임 강화 및 바닥 하중 분산 설계",
      "Visual Graphics: 동선 바닥 유도선 그래픽 및 타이포 패널 제작"
    ],
    drawings: [
      {
        title: "동선 및 조닝 구성도 (Zoning & Layout Plan)",
        description: "센서 인터랙션을 위한 충분한 이격 거리를 계산하여 동선 폭을 2.5m로 확보하고, 대형 모빌리티가 중앙에 안착할 수 있도록 구성했습니다.",
        svgType: "retail-layout"
      }
    ],
    userFlow: [
      { step: "Step 1", title: "Velocity Check-In", description: "관람객의 RFID 태그를 매핑하여 바닥의 동선 라이트가 사용자 전용 색상으로 가이드라인을 제공합니다." },
      { step: "Step 2", title: "Kinetic Grid Space", description: "가변 기둥 리깅과 키네틱 미디어가 연동되어 가벼운 부피감을 시각적으로 전합니다." }
    ],
    materialLighting: {
      materials: ["헤어라인 스테인리스 스틸", "미러 아크릴 패널", "친환경 저탄소 자갈 테라조 마감"],
      lighting: ["스마트 RGBW 가변 무빙 라인 LED", "바닥 전면 매립형 스트림 패널 바 (4000K)"],
      description: "차갑고 미래적인 알루미늄/스테인리스 스틸 질감에 따스한 테라조 소재를 조합하여 조화로운 균형을 맞췄습니다."
    },
    renderingUrl: "mobility_pavilion_rendering",
    finalImageUrl: "mobility_pavilion_final",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "in-01",
    categoryId: "02",
    title: "ARCHIVE 24: Workspace & Lounge Studio",
    subtitle: "전시와 휴식이 가변적으로 레이어링되는 복합 오피스 공간",
    role: "Interior Designer & Space Layout Strategist",
    tools: ["SketchUp", "Enscape", "Photoshop"],
    concept: "낮에는 오픈 워크스페이스로 활용되고, 저녁에는 신제품 팝업 전시 쇼룸으로 변환되는 2Way 레이아웃 프로젝트입니다. 회전식 회전벽(Pivot Wall)을 적용해 간단한 조작만으로 오피스가 완전한 무대 전시장으로 탈바꿈하는 영리한 조닝을 추구했습니다.",
    process: [
      "Concept Development: 공유 오피스 트렌드 및 가변 메커니즘 리서치",
      "Pivot Wall Modeling: 회전 반경을 정밀 계산한 1:1 디테일 스케치업 검증",
      "Color Palette Definition: 뉴트럴 웜그레이와 실버 스틸을 조합한 차분하고 세련된 톤 앤 매너 설계"
    ],
    drawings: [
      {
        title: "회전벽 적용 가변 평면도 (Flexible Floor Plan Layout)",
        description: "피벗 도어 가동 시의 데드 스페이스를 최소화하고, 전시 모드와 사무 모드 각 상황에 맞는 안전 피난 동선(Egress)을 동시에 확보했습니다.",
        svgType: "minimal-lounge"
      }
    ],
    userFlow: [
      { step: "Mode A", title: "Day: Collaborative Workspace", description: "피벗 월이 격자 형태로 배치되어 부서 간 독립적인 워크 그룹과 집중도를 제공합니다." },
      { step: "Mode B", title: "Night: Open Gallery Workspace", description: "모든 피벗 월이 벽면 평행으로 회전해 80평 규모의 시원한 갤러리로 전환되며 조명이 일제히 전시 무드로 변환됩니다." }
    ],
    materialLighting: {
      materials: ["자작나무 플라이우드", "무광 에폭시 수지 마감", "샌드블라스트 유리 파티션"],
      lighting: ["실린더 형태 레일 스포트라이트 (Dimmer)", "구역 분할 조도 스위칭 모듈"],
      description: "자연 소재인 자작나무에 산업용 유리와 마감을 더하여 내구성과 편안함을 극대화했습니다."
    },
    renderingUrl: "workspace_rendering",
    finalImageUrl: "workspace_final",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "sk-01",
    categoryId: "03",
    title: "THE GRID: Modular Retail Flagship Store",
    subtitle: "격자 그리드를 이용한 브랜딩 결합 플래그십 매스 스터디",
    role: "3D Modeling Expert & Rendering Artist",
    tools: ["SketchUp", "Enscape", "Illustrator"],
    concept: "가장 기본이 되는 기하학 도형인 '정육면체 그리드'의 중첩과 생략을 통해 조형성 있는 수납 공간 and 디스플레이 쇼케이스를 창출했습니다. 가벼운 수직 철골 프레임과 무거운 콘크리트 플랫폼의 대비를 강조하여 시각적 긴장감을 연출했습니다.",
    process: [
      "Grid Setup: 600x600x600 모듈러 유닛 기반 레이아웃 기획",
      "SketchUp Componentization: 스케치업 컴포넌트화를 통해 수천 개의 그리드를 최적화 모델링하여 파일 용량 단축 및 작업 속도 비약적 향상",
      "Material Realism: Enscape 상에서 러프 텍스처와 미세 범프 맵(PBR)을 적용한 하이엔드 실재감 구현"
    ],
    drawings: [
      {
        title: "스케치업 3D 아이소메트릭 그리드 (3D Axonometric Grid Plan)",
        description: "정밀한 그리드가 수직, 수평으로 뻗어 나가며 계단식 구조를 형성하고, 브랜드 상품의 디스플레이 높낮이를 과학적으로 설계한 아이소메트릭 도면입니다.",
        svgType: "retail-layout"
      }
    ],
    userFlow: [
      { step: "Entrance", title: "Low-density Welcome Area", description: "그리드의 밀도를 극도로 낮추어 넓은 개방감을 제공하고, 전시 플래그십 스토어의 대표 랜드마크 요소를 맞닥뜨리게 합니다." },
      { step: "Browse", title: "High-density Grid Showroom", description: "그리드가 촘촘하게 배열되어 동선이 자연스럽게 지그재그 형태로 굽이치며 유입되어 관람자의 제품 체류 시간(Dwell Time)을 유도합니다." }
    ],
    materialLighting: {
      materials: ["헤어라인 스테인리스 스틸 파이프", "마이크로시멘트 노출콘크리트", "투명 폴리카보네이트 복층판"],
      lighting: ["그리드 하부 매립형 확산 LED 스트립", "소형 주광색 스포트라이트"],
      description: "그리드 프레임 하단에 매립된 간접 광원으로 철골 구조가 허공에 떠 있는 듯한 플로팅 효과를 유도했습니다."
    },
    renderingUrl: "modular_retail_rendering",
    finalImageUrl: "modular_retail_final",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "cad-01",
    categoryId: "04",
    title: "MUSEUM MAIN HALL: Execution Drawing Pack",
    subtitle: "설계 구현 가능성에 초점을 맞춘 미술관 메인 전시홀 도면집",
    role: "AutoCAD CAD Draftsman",
    tools: ["AutoCAD", "Excel"],
    concept: "디자이너의 아이디어가 실제 현장에서 숙련된 시공팀에 의해 완벽히 구현되도록 치수와 기호체계를 국제 표준에 부합하게 작성한 실시도면 세트입니다. 벽체의 레이어 단면, 소방 피난 동선 피치, 매립 조명의 전기 아웃렛 배치까지 철저히 반영했습니다.",
    process: [
      "Base Map Cleanup: 원본 건축 도면 스케일 및 정렬 오류 디텍팅 및 수정",
      "Ceiling Coordination: 환기 덕트, 에어컨, 전동 레일, 스프링클러 헤드와 조명 조율",
      "Drawing Compilation: 평면, 입면, 천정, 상세 단면을 포괄하는 PDF 아카이브 일원화"
    ],
    drawings: [
      {
        title: "오토캐드 미술관 메인홀 상세 평면도 (CAD Floor Layout)",
        description: "가벽 두께 150mm를 기준으로 마감선을 디테일하게 작도하고 도어 방향, 중심선, 통행 기준선 등 시공 필수 치수를 오차 없이 삽입했습니다.",
        svgType: "exhibition-floor"
      },
      {
        title: "전시 파티션 월 상세 단면 상세도 (Partition Wall Section)",
        description: "스터드 골조 내부에 전시 하중 지지용 12mm 합판 보강 레이어를 상세 표기하여 대형 회화 및 설치 조각물이 낙하할 위험이 없도록 시공 구조를 표기했습니다.",
        svgType: "detail-section"
      }
    ],
    userFlow: [
      { step: "Drawing 1", title: "전시관 평면도 (Circulation Floor Plan)", description: "동선의 교차점을 최소화하여 코로나 시기 이후 안심 관람이 가능한 교행 동선을 규격화했습니다." },
      { step: "Drawing 2", title: "조명 배선 및 천정도 (Reflected Ceiling Plan)", description: "무대 연출을 극대화하도록 전동식 레일 서포트 조명 위치를 600mm 격자로 타공하는 도면 레이아웃입니다." }
    ],
    materialLighting: {
      materials: ["12T 차음 석고보드 더블 레이어", "백색 친환경 안티스타코 페인트 마감", "방염 처리 집성 자재 원목 바닥재"],
      lighting: ["CRI 97+ 전시 전용 레일 다운스팟", "천장 외곽 T-5 간접 조명 바커스"],
      description: "시공 시 방염 기준 통과와 작품 오염 방지를 위해 저휘발성 유기화합물 자재 및 자외선 방출이 완벽 차단되는 LED 칩셋 규격을 도면 명세에 상세히 박아 넣었습니다."
    },
    renderingUrl: "cad_drawing_rendering",
    finalImageUrl: "cad_drawing_final",
    images: [
      "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "vr-01",
    categoryId: "05",
    title: "BOUNDLESS: Virtual Reality Art Gallery",
    subtitle: "물리적 공간 한계를 초월하는 스케일의 가상 VR 전시장 시뮬레이션",
    role: "VR Space Programmer & Environment Modeler",
    tools: ["SketchUp", "VR Headset Tool", "Enscape VR", "Twinmotion"],
    concept: "가상 현실 내에서 관람객이 공간감을 잃지 않고 최적의 편안함 속에서 작품에 집중할 수 있도록 '인간공학적 랜드마크'와 'Gaze Anchor(시선 앵커)' 기술을 배치한 가상 갤러리 전시입니다.",
    process: [
      "User Behavior Analysis: 헤드셋 착용자의 시점 이동 속도 및 멀미 저항 반경 검출",
      "Spatial Anchor Deployment: 꺾어지는 굽은 지점마다 높이 6m의 대형 모뉴먼트를 배치하여 현재 위치를 가늠할 수 있게 공간 좌표화",
      "Stereoscopic Rendering: 좌우 양안 렌즈에 대응하는 4K 스테레오 파노라마 렌즈 렌더링 셋업"
    ],
    drawings: [
      {
        title: "VR 전용 시각적 앵커 평면 배치도 (VR Spatial Anchoring Layout)",
        description: "가상공간에서 헤매지 않고, 주 시선(Line of Sight)이 자연스럽게 흐르도록 설계된 앵커 스팟을 입체적으로 표시한 도면입니다.",
        svgType: "vr-gallery"
      }
    ],
    userFlow: [
      { step: "Portal", title: "Calibration Zone (조율 공간)", description: "관람자가 헤드셋을 착용한 직후 원통형 방에 배치되어, 밝기와 소리 밸런스에 귀와 눈을 조율(Adapting)하도록 기획된 공간입니다." },
      { step: "Navigate", title: "Continuous Floating Path", description: "계단이 없는 완만한 나선형 램프를 설계하여, VR 컨트롤러 조작 미숙으로 인한 멀미 유발 요인을 원천 봉쇄했습니다." }
    ],
    materialLighting: {
      materials: ["가상 라이팅 셰이더 리플렉트 스킨", "네온 글로우 와이어 프레임 구조", "초현실주의 플로팅 미러 월"],
      lighting: ["실시간 다이내믹 글로벌 일루미네이션 (GI)", "네온 블루 엠비언트 볼륨 라이팅"],
      description: "물리적인 실현은 불가능하지만 시각적으로 환상적인 볼륨 라이트와 발광 텍스처를 적용하여 관람자로 하여금 순수한 차원의 '공간 아카이브'에 흡수되는 몰입감을 보증합니다."
    },
    renderingUrl: "vr_experience_rendering",
    finalImageUrl: "vr_experience_final",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "bg-01",
    categoryId: "06",
    title: "KNOT MUSEUM: Wayfinding System",
    subtitle: "전시관 콘셉트를 시각적 선과 동선으로 통합 연계한 공간 브랜딩 디자인",
    role: "Brand Identity Designer & Exhibition Graphic Specialist",
    tools: ["Illustrator", "Photoshop", "SketchUp"],
    concept: "역사와 미래, 사람과 예술을 '잇다(Knot)'라는 슬로건 하에 실 매듭의 유기적 매커니즘을 공간 기둥의 그래픽 패널 및 도네이션 월, 그리고 비상 탈출 로 유도 라인에 고스란히 담아 통일성 있는 브랜드 경험(BX)을 추구합니다.",
    process: [
      "Logo to Space expansion: 로고 서체의 가로획 비율을 벽면 걸레받이 마감 몰딩 비례와 일치시킴",
      "Materialization: 아크릴 레이저 컷아웃 및 음각 에칭, 가벽 시트지(Graphics vinyl) 도포 설계",
      "Color Spec: 신뢰감을 주는 시그널 실버 그레이와 코발트 블루를 메인 그래픽 톤으로 지정"
    ],
    drawings: [
      {
        title: "웨이파인딩 사인 위치 및 스케일 평면도 (Signage Map & Scale Plan)",
        description: "사인 위치가 지상 1.5m 지점과 입구 부근에 가변 배치된 디렉토리 플랜 뷰.",
        svgType: "exhibition-floor"
      }
    ],
    userFlow: [
      { step: "Entrance", title: "Giant Ribbon Installation (웰컴 그래픽)", description: "천장과 바닥을 나선형으로 연결하는 매듭 형태의 구조물이 메인 입구에서 관람 동선의 물꼬를 트고 시선을 뒤흔듭니다." },
      { step: "Exhibits", title: "Modular Typography Rails (작품 명판)", description: "벽체의 두께와 일체화된 레일을 달아, 전시 성격이 바뀔 때마다 명판 그래픽 스킨을 가볍게 밀어서 슬라이드 교체하도록 개발했습니다." }
    ],
    materialLighting: {
      materials: ["양크 가공 수지 아크릴", "백색 분체 도장 스틸 프레임", "친환경 실크스크린 그래픽 인쇄"],
      lighting: ["고해상도 실리콘 플렉시블 LED (사인 전용)", "스포트라이트 백라이팅"],
      description: "사인 내부의 그림자를 없애고 타이포그래피의 가독성을 극대화하기 위해 초슬림 백라이트 LED 모듈을 내부 격자 배열하여 완벽한 면발광을 실현했습니다."
    },
    renderingUrl: "branding_graphic_rendering",
    finalImageUrl: "branding_graphic_final",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "pa-01",
    categoryId: "07",
    title: "CONCRETE TO LIGHT: Design Ideation & Process",
    subtitle: "디자이너로서 깊은 사고방식과 기획의 변천 과정을 투명하게 공개하는 아카이브",
    role: "Visual Archivist & Content Curator",
    tools: ["SketchUp", "Photoshop", "Hand Sketch", "AutoCAD"],
    concept: "완성된 시각 결과물 뒤에 숨어 있는 치열한 고민, 스케치, 실패했던 대안(Alternative concepts) 분석 및 매스 스터디 과정을 모아 가치 있는 '과정 중심' 전시를 제안합니다.",
    process: [
      "Ideation: 손스케치와 마인드맵을 이용해 공간이 주는 원초적 감정 시각화",
      "Mass Study: 우드락과 폼포드를 자르고 붙이며 최적의 조형 비례 발견",
      "Iteration: Enscape 라이트 시뮬레이션의 미세 조정을 통한 완벽한 빛의 도달 범위 도출"
    ],
    drawings: [
      {
        title: "초기 매스 및 가구 배치 스케치 아카이브 (Initial Sketch Set)",
        description: "머릿속의 파비뇽 콘셉트를 거칠게 그려낸 다이어그램과, 기류 및 음향 반사 경로를 실시간 필기한 초기 노트 레이아웃 모음입니다.",
        svgType: "minimal-lounge"
      }
    ],
    userFlow: [
      { step: "Phase 1", title: "Pen Drawing & Concept Note", description: "디자이너의 최초 영감 노트를 스캔하여, 생각의 흐름과 공간 스토리를 선명하게 전달합니다." },
      { step: "Phase 2", title: "Volumetric Clay Model Study", description: "컴퓨터 속 설계 이전, 매스의 덩어리감과 볼륨을 육안으로 관찰하기 위해 점토 및 우드락으로 스터디한 궤적입니다." }
    ],
    materialLighting: {
      materials: ["트레이싱지 크로키 아카이브", "크라프트지 무광 보드", "황동 클립 핀 유닛"],
      lighting: ["웜 오렌지 에디슨 펜던트 벌브 (2500K)", "아이디어 스포트 라이팅 테이프"],
      description: "차갑고 전문적인 메인 워크스테이션 분위기 속에 자연의 온기를 불어넣는 러프한 아이디어 도록 형식을 아카이브 패널로 기획하여 풍성한 디테일을 가미합니다."
    },
    renderingUrl: "process_archive_rendering",
    finalImageUrl: "process_archive_final",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541829017064-778a67797c42?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];
