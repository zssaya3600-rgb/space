import React from "react";
import { Category } from "../types";

interface ProjectCardProps {
  cat: Category;
  projectCount: number;
  isSelected: boolean;
  onSelect: () => void;
  coverImageUrl?: string;
  isAdmin: boolean;
  uploadState?: "uploading" | "saved" | "error" | null;
  onUploadImage?: (file: File) => void;
  renderThumbnail?: (id: string) => React.ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  cat,
  projectCount,
  isSelected,
  onSelect,
}) => {
  const [imgError, setImgError] = React.useState(false);

  // Derive stable image path
  const imgSrc = cat.image || "";

  return (
    <div
      id={`folder-${cat.id}`}
      onClick={onSelect}
      className={`group relative p-5 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
        isSelected
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
          {projectCount} PROJECTS
        </span>
      </div>

      {/* Representative Image Thumbnail Box */}
      <div className="w-full h-32 rounded-lg overflow-hidden flex items-center justify-center mt-3 mb-3 relative bg-[#040608]/65 border border-zinc-900/60">
        {!imgError && imgSrc ? (
          <img
            src={imgSrc}
            alt={cat.title}
            className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Custom Sci-fi styled "IMAGE PREPARING" Placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-zinc-600 font-mono p-4 text-center">
            <div className="border border-sky-500/10 px-3 py-1.5 bg-sky-950/5 rounded">
              <div className="text-[9px] text-sky-400/80 font-bold tracking-widest mb-0.5 animate-pulse">IMAGE PREPARING</div>
              <div className="text-[7px] text-zinc-700">STATIC_RESOURCE_OFFLINE</div>
            </div>
          </div>
        )}

        {/* Coordinate Overlay */}
        <div className="absolute bottom-1 right-2 text-[6px] font-mono text-zinc-600 pointer-events-none">
          SYS: 100.{cat.id} / READY
        </div>
      </div>

      {/* Thin cyan blue divider line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-sky-500/5 via-sky-400/20 to-transparent mb-3"></div>

      {/* Main Category Title Block */}
      <div className="flex-1 min-w-0">
        <h3 className="font-sans text-sm font-semibold tracking-wide text-zinc-200 group-hover:text-white transition-colors">
          {cat.title}
        </h3>
        <p className="text-[11px] text-zinc-500 group-hover:text-zinc-400 transition-colors mt-1 leading-relaxed line-clamp-2">
          {cat.description}
        </p>
      </div>

      {/* Bottom Status bar */}
      <div className="mt-4 pt-2.5 border-t border-zinc-900/40 flex items-center justify-between text-[8px] font-mono text-zinc-600 group-hover:text-sky-400/50 transition-colors">
        <span>ARCHIVE STABLE</span>
        <span className="flex items-center gap-1 font-mono">
          <span className="w-1 h-1 rounded-full bg-sky-500 group-hover:animate-ping"></span>
          READY
        </span>
      </div>
    </div>
  );
};
