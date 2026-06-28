import React from "react";

interface CADDrawingsProps {
  type: "exhibition-floor" | "retail-layout" | "minimal-lounge" | "detail-section" | "vr-gallery";
}

export default function CADDrawings({ type }: CADDrawingsProps) {
  // Common CAD grid and title block pattern
  const renderGrid = () => (
    <defs>
      <pattern id="drawingGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.5" />
      </pattern>
      <pattern id="dashedGrid" width="100" height="100" patternUnits="userSpaceOnUse">
        <rect width="100" height="100" fill="none" />
        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="0.8" strokeDasharray="4,4" />
      </pattern>
    </defs>
  );

  const renderTitleBlock = (drawingName: string, scale: string = "1:50 @ A3") => (
    <g transform="translate(480, 270)" className="font-mono text-[7px] fill-sky-400">
      <rect x="0" y="0" width="210" height="70" fill="#0d1117" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
      <line x1="0" y1="20" x2="210" y2="20" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="0.5" />
      <line x1="0" y1="45" x2="210" y2="45" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="0.5" />
      <line x1="105" y1="45" x2="105" y2="70" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="0.5" />
      
      <text x="8" y="13" className="font-semibold tracking-wider text-[8px]">SPACE DESIGN WORKSTATION</text>
      <text x="8" y="30" className="opacity-70">DRAWING TITLE:</text>
      <text x="8" y="39" className="font-bold fill-white text-[9px]">{drawingName}</text>
      <text x="8" y="55" className="opacity-70">SCALE:</text>
      <text x="8" y="64" className="font-semibold fill-white">{scale}</text>
      <text x="113" y="55" className="opacity-70">DESIGNER:</text>
      <text x="113" y="64" className="font-semibold fill-white">YEONG-JUN KIM</text>
    </g>
  );

  switch (type) {
    case "exhibition-floor":
      return (
        <svg viewBox="0 0 700 350" className="w-full h-auto bg-[#07090d] border border-sky-950/40 rounded-lg shadow-inner overflow-hidden select-none">
          {renderGrid()}
          <rect width="100%" height="100%" fill="#07090d" />
          <rect width="100%" height="100%" fill="url(#drawingGrid)" />
          <rect width="100%" height="100%" fill="url(#dashedGrid)" />

          {/* Outer Border */}
          <rect x="10" y="10" width="680" height="330" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1" />
          <rect x="15" y="15" width="670" height="320" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="0.5" />

          {/* Main Exhibition Hall Walls */}
          <g stroke="rgba(56, 189, 248, 0.8)" strokeWidth="2.5" fill="none" className="blueprint-line">
            <path d="M 50,50 L 450,50 L 450,300 L 50,300 Z" />
            {/* Entrance and Exit gaps */}
            <path d="M 50,110 L 50,50 M 50,290 L 50,230" stroke="#07090d" strokeWidth="4" />
            {/* Real sliding glass or door swing lines */}
            <path d="M 50,110 C 25,110 25,150 50,150" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" strokeDasharray="3,3" />
            <path d="M 50,230 C 25,230 25,190 50,190" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" strokeDasharray="3,3" />
          </g>

          {/* Inner Exhibition Partitions (Zoning) */}
          <g stroke="#38bdf8" strokeWidth="1.8" fill="none" className="blueprint-line">
            {/* Zone A Wall */}
            <path d="M 150,50 L 150,180" />
            <path d="M 150,180 L 220,180" />
            {/* Zone B Curved Wall */}
            <path d="M 270,300 L 270,170 C 270,120 340,120 340,170" />
            {/* Zone C Center Pavilion Island */}
            <rect x="230" y="80" width="100" height="50" rx="3" strokeWidth="1.5" strokeDasharray="1,1" />
            <circle cx="280" cy="105" r="15" />
          </g>

          {/* Dimension Lines */}
          <g stroke="rgba(244, 63, 94, 0.6)" strokeWidth="0.8" fill="none">
            {/* Horizontal top dimension */}
            <line x1="50" y1="35" x2="450" y2="35" />
            <line x1="50" y1="30" x2="50" y2="40" />
            <line x1="450" y1="30" x2="450" y2="40" />
            {/* Vertical left dimension */}
            <line x1="35" y1="50" x2="35" y2="300" />
            <line x1="30" y1="50" x2="40" y2="50" />
            <line x1="30" y1="300" x2="40" y2="300" />
          </g>
          <g fill="rgba(244, 63, 94, 0.85)" className="font-mono text-[8px] font-bold">
            <text x="230" y="31" textAnchor="middle">W: 16,000 mm</text>
            <text x="25" y="180" textAnchor="middle" transform="rotate(-90 25 180)">H: 10,000 mm</text>
          </g>

          {/* Circulation / Visitor flow arrows */}
          <g stroke="#10b981" strokeWidth="1.5" fill="none" strokeDasharray="4,3">
            <path d="M 30,130 L 100,130 C 120,130 120,90 180,90 C 220,90 220,150 280,150 C 350,150 380,200 400,240 L 400,270 L 100,270 L 30,210" />
            {/* Arrowheads */}
            <path d="M 45,126 L 30,130 L 45,134" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M 380,146 L 387,153 L 378,158" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M 40,213 L 30,210 L 36,201" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </g>

          {/* Labels */}
          <g fill="#94a3b8" className="font-mono text-[7px] tracking-widest uppercase">
            <text x="35" y="145" textAnchor="middle" className="fill-emerald-400 font-bold" transform="rotate(-90 35 145)">ENTRANCE</text>
            <text x="35" y="205" textAnchor="middle" className="fill-emerald-400 font-bold" transform="rotate(-90 35 205)">EXIT</text>
            <text x="100" y="75" className="fill-sky-400 font-bold">ZONE A: WELCOME</text>
            <text x="360" y="110" className="fill-sky-400 font-bold">ZONE B: LIGHT IMMERSION</text>
            <text x="280" y="240" textAnchor="middle" className="fill-sky-400 font-bold">ZONE C: REFLECTION WATER</text>
          </g>

          {renderTitleBlock("EXHIBITION SPACE FLOOR & CIRCULATION PLAN")}
        </svg>
      );

    case "detail-section":
      return (
        <svg viewBox="0 0 700 350" className="w-full h-auto bg-[#07090d] border border-sky-950/40 rounded-lg shadow-inner overflow-hidden select-none">
          {renderGrid()}
          <rect width="100%" height="100%" fill="#07090d" />
          <rect width="100%" height="100%" fill="url(#drawingGrid)" />
          
          <rect x="10" y="10" width="680" height="330" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1" />

          {/* Architectural Concrete Slabs (Top and Bottom) */}
          <g stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1" fill="rgba(56, 189, 248, 0.05)">
            <rect x="40" y="35" width="400" height="35" strokeWidth="2" />
            <rect x="40" y="270" width="400" height="45" strokeWidth="2" />
            {/* Concrete Hatch triangles/dots */}
            <path d="M 60,45 L 65,55 L 55,55 Z M 160,40 L 165,50 L 155,50 Z M 320,42 L 325,52 L 315,52 Z" fill="rgba(56, 189, 248, 0.2)" stroke="none" />
            <path d="M 120,285 L 125,295 L 115,295 Z M 260,280 L 265,290 L 255,290 Z M 380,285 L 385,295 L 375,295 Z" fill="rgba(56, 189, 248, 0.2)" stroke="none" />
          </g>

          {/* Louver Steel Framework Wall Section */}
          <g stroke="rgba(56, 189, 248, 0.85)" strokeWidth="2" fill="none">
            {/* Horizontal framing joints */}
            <rect x="100" y="70" width="10" height="200" fill="none" />
            <line x1="100" y1="120" x2="110" y2="120" />
            <line x1="100" y1="170" x2="110" y2="170" />
            <line x1="100" y1="220" x2="110" y2="220" />

            {/* Aluminum Louvers Angled (Suspended) */}
            <g stroke="#38bdf8" strokeWidth="1.5">
              <line x1="140" y1="90" x2="170" y2="110" />
              <line x1="140" y1="120" x2="170" y2="140" />
              <line x1="140" y1="150" x2="170" y2="170" />
              <line x1="140" y1="180" x2="170" y2="200" />
              <line x1="140" y1="210" x2="170" y2="230" />
              <line x1="140" y1="240" x2="170" y2="260" />
            </g>

            {/* Louver Support Anchors */}
            <g stroke="rgba(244, 63, 94, 0.7)" strokeWidth="1.2">
              <line x1="110" y1="100" x2="140" y2="100" />
              <line x1="110" y1="160" x2="140" y2="160" />
              <line x1="110" y1="220" x2="140" y2="220" />
            </g>
          </g>

          {/* Callouts & Technical Notes */}
          <g stroke="rgba(56, 189, 248, 0.4)" strokeWidth="0.8" fill="none">
            {/* Concrete slab label pointer */}
            <polyline points="200,50 250,50 260,60" />
            <circle cx="200" cy="50" r="1.5" fill="#38bdf8" />

            {/* Louver label pointer */}
            <polyline points="155,100 230,100 240,115" />
            <circle cx="155" cy="100" r="1.5" fill="#38bdf8" />

            {/* Anchor pointer */}
            <polyline points="125,160 210,160 220,180" />
            <circle cx="125" cy="160" r="1.5" fill="#38bdf8" />

            {/* Floor slab pointer */}
            <polyline points="200,285 240,285 250,275" />
            <circle cx="200" cy="285" r="1.5" fill="#38bdf8" />
          </g>

          <g fill="#94a3b8" className="font-mono text-[8px]">
            <text x="270" y="63" className="fill-sky-400">400T CONCRETE STRUCTURAL CEILING SLAB</text>
            <text x="250" y="125" className="fill-sky-400">120x15mm RECYCLABLE PRISMATIC LOUVERS (30° FIXED)</text>
            <text x="230" y="190" className="fill-rose-400">TENSION SUPPORT NUT & STEEL THREADED ROD</text>
            <text x="260" y="273" className="fill-sky-400">EPOXY FINISHED CONCRETE SLAB BASE</text>
          </g>

          {/* Structural Dimensions */}
          <g stroke="rgba(244, 63, 94, 0.5)" strokeWidth="0.8" fill="none">
            <line x1="60" y1="70" x2="60" y2="270" />
            <line x1="55" y1="70" x2="65" y2="70" />
            <line x1="55" y1="270" x2="65" y2="270" />
          </g>
          <text x="50" y="170" transform="rotate(-90 50 170)" className="font-mono text-[8px] font-bold fill-rose-400" textAnchor="middle">CH: 4,000 mm (Clear Ceiling Height)</text>

          {renderTitleBlock("WALL LOUVER DETAILED SECTION", "1:15 @ A3")}
        </svg>
      );

    case "retail-layout":
      return (
        <svg viewBox="0 0 700 350" className="w-full h-auto bg-[#07090d] border border-sky-950/40 rounded-lg shadow-inner overflow-hidden select-none">
          {renderGrid()}
          <rect width="100%" height="100%" fill="#07090d" />
          <rect width="100%" height="100%" fill="url(#drawingGrid)" />
          <rect width="100%" height="100%" fill="url(#dashedGrid)" />
          
          <rect x="10" y="10" width="680" height="330" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1" />

          {/* Grid Retail Wall */}
          <g stroke="rgba(56, 189, 248, 0.8)" strokeWidth="2" fill="none" className="blueprint-line">
            <rect x="50" y="60" width="380" height="230" />
            {/* Showroom grid shelves layout */}
            <line x1="50" y1="120" x2="430" y2="120" />
            <line x1="50" y1="180" x2="430" y2="180" />
            <line x1="50" y1="240" x2="430" y2="240" />

            <line x1="120" y1="60" x2="120" y2="290" strokeDasharray="2,2" />
            <line x1="190" y1="60" x2="190" y2="290" />
            <line x1="260" y1="60" x2="260" y2="290" strokeDasharray="2,2" />
            <line x1="330" y1="60" x2="330" y2="290" />
          </g>

          {/* Central counter layout (3D projection outline) */}
          <g stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56, 189, 248, 0.05)">
            <polygon points="120,200 240,200 270,230 150,230" />
            <polygon points="120,200 120,240 150,270 150,230" />
            <polygon points="240,200 240,240 270,270 270,230" />
            <line x1="120" y1="240" x2="240" y2="240" />
            <line x1="150" y1="270" x2="270" y2="270" />
          </g>

          {/* Annotations */}
          <g fill="#94a3b8" className="font-mono text-[7px] uppercase">
            <text x="140" y="195" className="fill-sky-400 font-bold">MODULAR GLASS TOP RECEPTION COUNTER</text>
            <text x="60" y="115">SHELF M01</text>
            <text x="60" y="175">SHELF M02</text>
            <text x="60" y="235">SHELF M03</text>
            <text x="210" y="75" className="fill-emerald-400">CENTRAL STRUCTURAL GRID AXIS</text>
          </g>

          {renderTitleBlock("MODULAR GRID RETAIL DISPLAY & CABINET PLAN")}
        </svg>
      );

    case "minimal-lounge":
      return (
        <svg viewBox="0 0 700 350" className="w-full h-auto bg-[#07090d] border border-sky-950/40 rounded-lg shadow-inner overflow-hidden select-none">
          {renderGrid()}
          <rect width="100%" height="100%" fill="#07090d" />
          <rect width="100%" height="100%" fill="url(#drawingGrid)" />
          
          <rect x="10" y="10" width="680" height="330" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1" />

          {/* Lounge Outer Shell */}
          <path d="M 50,50 L 420,50 L 420,290 L 50,290 Z" fill="none" stroke="rgba(56, 189, 248, 0.7)" strokeWidth="2.5" />

          {/* Multi-pivot rotating panels (Doors swing) */}
          <g stroke="#38bdf8" strokeWidth="1.8" fill="none">
            {/* Pivot Wall 1 (Open Position) */}
            <line x1="150" y1="50" x2="150" y2="150" strokeWidth="2.5" />
            <path d="M 150,150 A 100,100 0 0,1 250,50" strokeDasharray="3,3" strokeWidth="1" />

            {/* Pivot Wall 2 */}
            <line x1="320" y1="290" x2="320" y2="190" strokeWidth="2.5" />
            <path d="M 320,190 A 100,100 0 0,1 220,290" strokeDasharray="3,3" strokeWidth="1" />
          </g>

          {/* Desk and Lounge Seating wireframe */}
          <g stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.2" fill="none">
            {/* Round meeting table */}
            <circle cx="280" cy="110" r="35" />
            <circle cx="280" cy="110" r="12" strokeDasharray="1,1" />

            {/* Ergonomic lounge armchairs */}
            <rect x="225" y="95" width="20" height="25" rx="3" />
            <rect x="315" y="95" width="20" height="25" rx="3" />
            <rect x="270" y="150" width="25" height="20" rx="3" />
            <rect x="270" y="50" width="25" height="20" rx="3" />
          </g>

          {/* Technical labels */}
          <g fill="#94a3b8" className="font-mono text-[7px] uppercase">
            <text x="160" y="100" className="fill-rose-400 font-bold">180° ROTATING PIVOT PARTITION WALL (T12)</text>
            <text x="330" y="240" className="fill-rose-400 font-bold">180° ROTATING PIVOT PARTITION WALL (T13)</text>
            <text x="280" y="113" textAnchor="middle" className="fill-sky-400 font-semibold text-[6px]">COLLABORATIVE TABLE</text>
          </g>

          {renderTitleBlock("ARCHIVE 24 FLEXIBLE OFFICE & PIVOT WALL LAYOUT")}
        </svg>
      );

    case "vr-gallery":
      return (
        <svg viewBox="0 0 700 350" className="w-full h-auto bg-[#07090d] border border-sky-950/40 rounded-lg shadow-inner overflow-hidden select-none">
          {renderGrid()}
          <rect width="100%" height="100%" fill="#07090d" />
          <rect width="100%" height="100%" fill="url(#drawingGrid)" />
          <rect width="100%" height="100%" fill="url(#dashedGrid)" />
          
          <rect x="10" y="10" width="680" height="330" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1" />

          {/* Circular VR Gallery outer wall */}
          <circle cx="240" cy="170" r="110" fill="none" stroke="rgba(56, 189, 248, 0.8)" strokeWidth="2.5" />
          <circle cx="240" cy="170" r="115" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="0.8" strokeDasharray="4,4" />

          {/* Core Central Monument (Sensing Core) */}
          <g stroke="#38bdf8" strokeWidth="1.5" fill="none">
            <rect x="210" y="140" width="60" height="60" rx="4" fill="rgba(56, 189, 248, 0.05)" />
            <circle cx="240" cy="170" r="15" strokeDasharray="2,1" />
          </g>

          {/* VR Calibration/HMD Trackers */}
          <g fill="#2563eb" stroke="#38bdf8" strokeWidth="1">
            <polygon points="150,110 160,110 155,100" />
            <polygon points="320,110 330,110 325,100" />
            <polygon points="150,230 160,230 155,240" />
            <polygon points="320,230 330,230 325,240" />
          </g>

          {/* Safety Ring for VR Walkway */}
          <circle cx="240" cy="170" r="75" fill="none" stroke="#10b981" strokeWidth="1.2" strokeDasharray="5,4" />

          {/* Coordinate Vectors */}
          <g stroke="rgba(244, 63, 94, 0.6)" strokeWidth="0.8">
            <line x1="240" y1="30" x2="240" y2="310" strokeDasharray="1,2" />
            <line x1="100" y1="170" x2="380" y2="170" strokeDasharray="1,2" />
          </g>

          <g fill="#94a3b8" className="font-mono text-[7px] uppercase">
            <text x="240" y="130" textAnchor="middle" className="fill-sky-400 font-bold">CENTRAL FLOATING VIRTUAL MEMOLITH</text>
            <text x="240" y="174" textAnchor="middle" className="fill-sky-400 font-mono text-[6px] font-semibold">COORD: 0.0.0</text>
            <text x="240" y="235" textAnchor="middle" className="fill-emerald-400 font-bold">HMD USER SAFETY GUARDIAN RADIUS (Ø 150m)</text>
            <text x="145" y="93" className="fill-blue-400 font-bold">TRACKER A</text>
            <text x="325" y="93" className="fill-blue-400 font-bold">TRACKER B</text>
          </g>

          {renderTitleBlock("BOUNDLESS VR INTERACTIVE IMMERSIVE MAP")}
        </svg>
      );

    default:
      return null;
  }
}
