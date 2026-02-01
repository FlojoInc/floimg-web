/**
 * Template Utilities
 *
 * Helper functions for working with templates fetched from the API.
 * Replaces imports from the deleted @teamflojo/floimg-templates package.
 */

// API URL for templates endpoint
const API_URL = import.meta.env.PUBLIC_API_URL || "https://api.floimg.com";

/**
 * Template interface matching the API response shape.
 */
export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  generator: string;
  workflow: {
    nodes: StudioNode[];
    edges: StudioEdge[];
  };
  tags?: string[];
  requiresCloud?: boolean;
  requiresAuth?: boolean;
  preview?: {
    imageUrl: string;
    width?: number;
    height?: number;
    type?: "output" | "workflow" | "composite" | "custom";
  };
  outputs?: {
    imageUrl: string;
    label?: string;
    width: number;
    height: number;
  }[];
  capabilities?: {
    claudeCodeReady?: boolean;
    pipeline?: boolean;
  };
  usesAI?: boolean;
  aiCreditsNeeded?: number;
  valueProp?: string;
  icon?: "sparkles" | "image" | "share" | "chart" | "diagram" | "qr";
  nodeCount?: number;
  forkCount?: number;
  author?: {
    id: string;
    name: string | null;
  } | null;
  isSystem?: boolean;
  createdAt?: string;
  codeExample?: string;
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface StudioNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: Record<string, unknown>;
}

export interface StudioEdge {
  id: string;
  source: string;
  target: string;
  sourceHandle?: string;
  targetHandle?: string;
}

/**
 * Fetch all templates from the API.
 * Used at build time for static generation.
 * Uses cache-busting timestamp to ensure fresh data on each build.
 */
export async function fetchTemplates(): Promise<Template[]> {
  try {
    // Cache-bust with timestamp to ensure fresh data on each build
    const timestamp = Date.now();
    const response = await fetch(`${API_URL}/api/templates?limit=100&_t=${timestamp}`, {
      headers: { "Cache-Control": "no-cache" },
    });
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    return data.templates || [];
  } catch (error) {
    console.error("Failed to fetch templates:", error);
    // Return empty array on failure - build will proceed with no templates
    return [];
  }
}

/**
 * Fetch a single template by ID.
 * Uses cache-busting timestamp to ensure fresh data on each build.
 */
export async function fetchTemplate(id: string): Promise<Template | null> {
  try {
    const timestamp = Date.now();
    const response = await fetch(
      `${API_URL}/api/templates/${encodeURIComponent(id)}?_t=${timestamp}`,
      { headers: { "Cache-Control": "no-cache" } }
    );
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data.template || null;
  } catch (error) {
    console.error(`Failed to fetch template ${id}:`, error);
    return null;
  }
}

/**
 * Get unique categories from a list of templates.
 */
export function getCategories(templates: Template[]): string[] {
  const categories = new Set<string>();
  for (const template of templates) {
    if (template.category) {
      categories.add(template.category);
    }
  }
  // Return in consistent order
  return Array.from(categories).sort((a, b) => {
    const order = ["AI Workflows", "Data Viz", "Marketing", "Utilities"];
    const aIndex = order.indexOf(a);
    const bIndex = order.indexOf(b);
    if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });
}

/**
 * Generate Studio URL for a template.
 * @param template - The template to link to
 * @param baseUrl - Optional base URL (defaults to studio.floimg.com)
 */
export function getStudioUrl(
  template: Template | { id: string },
  baseUrl = "https://studio.floimg.com"
): string {
  return `${baseUrl}/?template=${encodeURIComponent(template.id)}`;
}

/**
 * Get the number of nodes in a template workflow.
 */
export function getNodeCount(template: Template | { workflow?: { nodes?: unknown[] } }): number {
  return template.workflow?.nodes?.length || 0;
}

/**
 * Preview badge information for displaying on template cards.
 * Returns null if no badge should be displayed.
 */
export interface PreviewBadge {
  text: string;
  icon?: string;
}

/**
 * Get the preview badge for a template based on its preview type and outputs.
 * Returns null for standard single-output templates (no badge needed).
 *
 * Badge philosophy: Only show badges that communicate user value.
 * - "N outputs" = You get multiple variations
 * - "AI-powered" = Results will vary based on your prompt
 * - No badge for deterministic single-output templates
 */
export function getPreviewBadge(template: Template): PreviewBadge | null {
  const previewType = template.preview?.type;
  const outputCount = template.outputs?.length || 0;

  // Multi-output templates (composite preview)
  if (previewType === "composite" || outputCount > 1) {
    return {
      text: `${outputCount} outputs`,
      icon: "grid",
    };
  }

  // AI workflow templates - communicate that results vary
  if (template.usesAI) {
    return {
      text: "AI-powered",
      icon: "sparkles",
    };
  }

  // No badge for other templates - keep it clean
  // Pipeline templates, complex workflows, etc. don't need badges
  // The preview image should speak for itself
  return null;
}
