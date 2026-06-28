export interface Project {
  id: string;
  categoryId: string;
  title: string;
  subtitle: string;
  role: string;
  tools: string[];
  concept: string;
  process: string[];
  drawings: {
    title: string;
    description: string;
    svgType: "exhibition-floor" | "retail-layout" | "minimal-lounge" | "detail-section" | "vr-gallery";
  }[];
  userFlow: {
    step: string;
    title: string;
    description: string;
  }[];
  materialLighting: {
    materials: string[];
    lighting: string[];
    description: string;
  };
  renderingUrl: string; // Used for generated mockups or custom UI
  finalImageUrl: string;
  images?: string[]; // Multiple uploaded image data URLs or default mockups
}

export interface Category {
  id: string;
  num: string;
  title: string;
  description: string;
}

export interface LoggedUser {
  isAdmin: boolean;
}
