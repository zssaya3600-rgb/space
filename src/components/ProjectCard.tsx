import React from "react";
import { Category } from "../types";
import { Loader2, CheckCircle, AlertTriangle } from "lucide-react";

interface ProjectCardProps {
  cat: Category;
  projectCount: number;
  isSelected: boolean;
  onSelect: () => void;
  coverImageUrl?: string;
  isAdmin: boolean;
  uploadState?: "uploading" | "saved" | "error" | null;
  onUploadImage: (file: File) => void;
  renderThumbnail: (id: string) => React.ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  cat,
  projectCount,
  isSelected,
  onSelect,
  coverImageUrl,
  isAdmin,
  uploadState,
  onUploadImage,
  renderThumbnail
}) => {
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
          {cat.id === "08" ? "PROFILE" : `${projectCount} PROJECTS`}
        </span>
      </div>

      {/* Architectural Vector Thumbnail Box */}
      <div
        className="w-full h-24 rounded-lg overflow-hidden flex items-center justify-center mt-3 mb-3 relative transition-all duration-300 bg-[#040608]/65 border border-zinc-900/60 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation(); // Prevent scroll jump!
          onSelect();
        }}
      >
        {coverImageUrl ? (
          <img
            src={coverImageUrl}
            alt={cat.title}
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
        ) : cat.image ? (
          <img
            src={cat.image.startsWith("images/") ? "/" + cat.image : cat.image}
            alt={cat.title}
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
        ) : (
          renderThumbnail(cat.id)
        )}

        {/* Upload Status Overlay */}
        {uploadState && (
          <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center font-mono text-[9px] text-sky-400 gap-1.5 z-10">
            {uploadState === "uploading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-sky-400" />
                <span>Uploading...</span>
              </>
            ) : uploadState === "saved" ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Saved</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span className="text-rose-400 font-bold">Failed</span>
              </>
            )}
          </div>
        )}

        {/* Admin Upload Overlay Button */}
        {isAdmin && (
          <div
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10"
            onClick={(e) => {
              e.stopPropagation();
              const inputEl = document.getElementById(`upload-input-${cat.id}`);
              if (inputEl) {
                (inputEl as HTMLInputElement).click();
              }
            }}
          >
            <span className="bg-sky-950/80 hover:bg-sky-900 border border-sky-400/50 text-sky-200 px-2 py-1 rounded text-[8px] font-mono tracking-widest font-bold text-center">
              CLICK TO UPLOAD PROJECT IMAGE
            </span>
            <input
              type="file"
              id={`upload-input-${cat.id}`}
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  onUploadImage(file);
                }
              }}
              className="hidden"
            />
          </div>
        )}

        {/* Coordinate Overlay */}
        <div className="absolute bottom-1 right-2 text-[6px] font-mono text-zinc-600 pointer-events-none">
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
        <p className="text-[11px] text-zinc-500 group-hover:text-zinc-400 transition-colors mt-1 leading-relaxed line-clamp-2">
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
};
