/**
 * Template data for the floimg-web gallery
 * These mirror the templates in floimg-studio for "Open in Studio" links
 */

export interface GalleryTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  generator: string;
  tags?: string[];
  preview?: {
    imageUrl: string;
  };
}

export const templates: GalleryTemplate[] = [
  // Charts
  {
    id: "sales-dashboard",
    name: "Sales Dashboard",
    description: "Quarterly revenue bar chart with gradient styling",
    category: "Charts",
    generator: "quickchart",
    tags: ["bar", "sales", "revenue", "quarterly"],
    preview: { imageUrl: "/gallery/sales-dashboard.png" },
  },
  {
    id: "user-growth",
    name: "User Growth Line Chart",
    description: "Monthly user growth with smooth bezier curves",
    category: "Charts",
    generator: "quickchart",
    tags: ["line", "growth", "users", "monthly"],
    preview: { imageUrl: "/gallery/user-growth.png" },
  },
  // Diagrams
  {
    id: "api-flow",
    name: "API Request Flow",
    description: "Sequence diagram showing API authentication flow",
    category: "Diagrams",
    generator: "mermaid",
    tags: ["sequence", "api", "authentication", "flow"],
    preview: { imageUrl: "/gallery/api-flow.png" },
  },
  {
    id: "system-architecture",
    name: "System Architecture",
    description: "Microservices architecture diagram",
    category: "Diagrams",
    generator: "mermaid",
    tags: ["architecture", "microservices", "system", "flowchart"],
    preview: { imageUrl: "/gallery/system-architecture.png" },
  },
  {
    id: "git-workflow",
    name: "Git Branch Workflow",
    description: "Git branching strategy with feature and release branches",
    category: "Diagrams",
    generator: "mermaid",
    tags: ["git", "branching", "workflow", "development"],
    preview: { imageUrl: "/gallery/git-workflow.png" },
  },
  // QR Codes
  {
    id: "website-qr",
    name: "Website QR Code",
    description: "QR code linking to your website with custom styling",
    category: "QR Codes",
    generator: "qr",
    tags: ["qr", "website", "link", "url"],
    preview: { imageUrl: "/gallery/website-qr.png" },
  },
  {
    id: "wifi-qr",
    name: "WiFi QR Code",
    description: "Scannable QR code for WiFi network access",
    category: "QR Codes",
    generator: "qr",
    tags: ["qr", "wifi", "network", "guest"],
    preview: { imageUrl: "/gallery/wifi-qr.png" },
  },
  // Pipelines
  {
    id: "chart-watermark",
    name: "Chart with Watermark",
    description: "Bar chart with company watermark and rounded corners",
    category: "Pipelines",
    generator: "quickchart",
    tags: ["chart", "watermark", "branded", "pipeline"],
    preview: { imageUrl: "/gallery/chart-watermark.png" },
  },
  {
    id: "diagram-webp",
    name: "Diagram to WebP",
    description: "Mermaid diagram converted to optimized WebP format",
    category: "Pipelines",
    generator: "mermaid",
    tags: ["mermaid", "webp", "optimize", "pipeline"],
    preview: { imageUrl: "/gallery/diagram-webp.png" },
  },
];

export function getCategories(): string[] {
  const categories = new Set(templates.map((t) => t.category));
  return Array.from(categories).sort();
}

export function getTemplatesByCategory(category: string): GalleryTemplate[] {
  return templates.filter((t) => t.category === category);
}

export function getStudioUrl(templateId: string): string {
  return `https://studio.floimg.com/?template=${templateId}`;
}
