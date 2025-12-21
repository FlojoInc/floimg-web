/**
 * Template data for the floimg-web gallery
 *
 * NOTE: This is intentionally separate from floimg-studio/src/templates/
 * - floimg-web needs only metadata (id, name, description) for the gallery
 * - floimg-studio needs full workflow definitions (nodes, edges)
 * - floimg-web is statically built, can't fetch from Studio API
 *
 * When adding new templates to floimg-studio, add the metadata here too.
 * Template IDs must match for "Open in Studio" links to work.
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
  },
  {
    id: "user-growth",
    name: "User Growth Line Chart",
    description: "Monthly user growth with smooth bezier curves",
    category: "Charts",
    generator: "quickchart",
    tags: ["line", "growth", "users", "monthly"],
  },
  // Diagrams
  {
    id: "api-flow",
    name: "API Request Flow",
    description: "Sequence diagram showing API authentication flow",
    category: "Diagrams",
    generator: "mermaid",
    tags: ["sequence", "api", "authentication", "flow"],
  },
  {
    id: "system-architecture",
    name: "System Architecture",
    description: "Microservices architecture diagram",
    category: "Diagrams",
    generator: "mermaid",
    tags: ["architecture", "microservices", "system", "flowchart"],
  },
  {
    id: "git-workflow",
    name: "Git Branch Workflow",
    description: "Git branching strategy with feature and release branches",
    category: "Diagrams",
    generator: "mermaid",
    tags: ["git", "branching", "workflow", "development"],
  },
  // QR Codes
  {
    id: "website-qr",
    name: "Website QR Code",
    description: "QR code linking to your website with custom styling",
    category: "QR Codes",
    generator: "qr",
    tags: ["qr", "website", "link", "url"],
  },
  {
    id: "wifi-qr",
    name: "WiFi QR Code",
    description: "Scannable QR code for WiFi network access",
    category: "QR Codes",
    generator: "qr",
    tags: ["qr", "wifi", "network", "guest"],
  },
  // Pipelines
  {
    id: "chart-watermark",
    name: "Chart with Watermark",
    description: "Bar chart with company watermark and rounded corners",
    category: "Pipelines",
    generator: "quickchart",
    tags: ["chart", "watermark", "branded", "pipeline"],
  },
  {
    id: "diagram-webp",
    name: "Diagram to WebP",
    description: "Mermaid diagram converted to optimized WebP format",
    category: "Pipelines",
    generator: "mermaid",
    tags: ["mermaid", "webp", "optimize", "pipeline"],
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
