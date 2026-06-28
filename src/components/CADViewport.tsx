import React, { useState, useEffect } from "react";
import { Compass, RotateCw, Layers, Sliders, Activity } from "lucide-react";

export default function CADViewport() {
  const [coords, setCoords] = useState({ x: 350, y: 180 });
  const [layers, setLayers] = useState({
    grid: true,
    axes: true,
    wireframe: true,
    telemetry: true,
  });
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1.0);

  // Auto-rotating visualization to simulate active CAD render engine
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.4) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Update mock mouse coords inside viewport
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
    });
  };

  const toggleLayer = (layerName: keyof typeof layers) => {
    setLayers((prev) => ({ ...prev, [layerName]: !prev[layerName] }));
  };

  return (
    <div 
      className="relative w-full h-[320px] md:h-[450px] bg-[#0c0d10] border border-sky-950/50 rounded-xl overflow-hidden cad-grid flex flex-col group shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      {/* Top Telemetry strip */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-sky-950/40 bg-zinc-950/60 backdrop-blur-md text-[10px] font-mono text-sky-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
          <span>VIEWPORT [01]: SYSTEM_ACTIVE</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>FPS: 60.00</span>
          <span>SCALE: {scale.toFixed(1)}x</span>
          <span>COORD: X:{coords.x} Y:{coords.y}</span>
        </div>
      </div>

      {/* Main Canvas Drawing Stage */}
      <div className="relative flex-1 flex items-center justify-center crosshair-cursor overflow-hidden p-6">
        {/* Axes lines */}
        {layers.axes && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Horizontal X axis */}
            <div 
              className="absolute w-full h-[1px] bg-sky-500/10" 
              style={{ top: `${coords.y}px` }}
            ></div>
            {/* Vertical Y axis */}
            <div 
              className="absolute h-full w-[1px] bg-sky-500/10" 
              style={{ left: `${coords.x}px` }}
            ></div>
            
            {/* Axis label */}
            <span 
              className="absolute text-[8px] font-mono text-sky-500/40 px-1"
              style={{ top: `${coords.y + 4}px`, left: `${coords.x + 4}px` }}
            >
              ({coords.x}, {coords.y})
            </span>
          </div>
        )}

        {/* Dynamic Architectural Wireframe Mockup */}
        {layers.wireframe && (
          <div 
            className="w-56 h-56 md:w-72 md:h-72 border border-sky-500/15 rounded-full relative flex items-center justify-center transition-transform duration-100 ease-out"
            style={{ transform: `rotate(${rotation}deg) scale(${scale})` }}
          >
            {/* Square Overlay */}
            <div className="absolute w-[80%] h-[80%] border border-sky-500/20 rotate-45"></div>
            {/* Inner detailed radar / compass circles */}
            <div className="absolute w-[60%] h-[60%] border border-dashed border-sky-500/30 rounded-full"></div>
            <div className="absolute w-[40%] h-[40%] border border-sky-500/25 rounded-full flex items-center justify-center">
              {/* Center point mark */}
              <div className="w-2 h-2 bg-sky-400/40 rounded-full"></div>
            </div>

            {/* Simulated zoning divider lines representing an exhibition loop */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-sky-500/30"></div>
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-sky-500/30"></div>

            {/* Orbiting display spots (nodes) */}
            <div className="absolute top-4 left-1/2 w-2 h-2 bg-rose-500 rounded-full transform -translate-x-1/2 shadow-[0_0_8px_rgba(244,63,94,0.8)]"></div>
            <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-emerald-500 rounded-full transform -translate-x-1/2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
            <div className="absolute left-4 top-1/2 w-2 h-2 bg-sky-400 rounded-full transform -translate-y-1/2 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></div>
            
            {/* Connecting spatial flow lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              <path d="M 50,10 A 40,40 0 0,1 90,50 L 50,50 Z" fill="rgba(56, 189, 248, 0.05)" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="0.5" />
              <path d="M 50,90 A 40,40 0 0,1 10,50 L 50,50 Z" fill="rgba(244, 63, 94, 0.03)" stroke="rgba(244, 63, 94, 0.2)" strokeWidth="0.5" />
            </svg>
          </div>
        )}

        {/* CAD Blueprint corner symbols */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-1 font-mono text-[8px] text-zinc-500">
          <div className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-zinc-400">N 37° 33' 59\" | E 126° 58' 40\"</span>
          </div>
          <span>GRID ANGLE: {rotation.toFixed(1)}°</span>
          <span>DAMPING: OPTIMIZED_ON</span>
        </div>

        <div className="absolute top-4 right-4 flex flex-col items-end gap-1 font-mono text-[8px] text-sky-500/60 bg-zinc-950/40 p-2 border border-sky-950/20 rounded">
          <span>PLANE: GROUND_LEVEL</span>
          <span>ZONING: DETECTED_3</span>
          <span>HMD_VR: COMPATIBLE</span>
        </div>
      </div>

      {/* Bottom control layer to switch modes */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-sky-950/40 bg-zinc-950/80 backdrop-blur-md text-[10px] font-mono select-none">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => toggleLayer("grid")}
            className={`flex items-center gap-1 px-1.5 py-0.5 rounded border transition-colors ${layers.grid ? "border-sky-500/40 bg-sky-950/20 text-sky-400" : "border-zinc-800 text-zinc-500"}`}
          >
            <Layers className="w-3 h-3" />
            GRID
          </button>
          <button 
            onClick={() => toggleLayer("axes")}
            className={`flex items-center gap-1 px-1.5 py-0.5 rounded border transition-colors ${layers.axes ? "border-sky-500/40 bg-sky-950/20 text-sky-400" : "border-zinc-800 text-zinc-500"}`}
          >
            <Activity className="w-3 h-3" />
            AXES
          </button>
          <button 
            onClick={() => toggleLayer("wireframe")}
            className={`flex items-center gap-1 px-1.5 py-0.5 rounded border transition-colors ${layers.wireframe ? "border-sky-500/40 bg-sky-950/20 text-sky-400" : "border-zinc-800 text-zinc-500"}`}
          >
            <RotateCw className="w-3 h-3" />
            WIRE
          </button>
        </div>

        {/* Zoom controls */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setScale(prev => Math.max(0.6, prev - 0.2))}
            className="px-2 py-0.5 border border-zinc-800 rounded bg-zinc-900 text-zinc-400 hover:text-sky-400 hover:border-sky-500/30"
          >
            -
          </button>
          <span className="text-zinc-500">{Math.round(scale * 100)}%</span>
          <button 
            onClick={() => setScale(prev => Math.min(1.6, prev + 0.2))}
            className="px-2 py-0.5 border border-zinc-800 rounded bg-zinc-900 text-zinc-400 hover:text-sky-400 hover:border-sky-500/30"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
