// Shared types between floimg-web and floimg-cloud

export interface GalleryItem {
  id: string;
  title: string;
  type: "chart" | "mermaid" | "qr" | "screenshot" | "openai";
  imageUrl: string;
  thumbnailUrl: string;
  author: string;
  createdAt: string;
  workflowId?: string;
}

export interface GalleryListResponse {
  items: GalleryItem[];
  total: number;
  page: number;
  pageSize: number;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  tier: "free" | "starter" | "pro" | "enterprise";
  createdAt: string;
}

export interface UsageStats {
  imagesGenerated: number;
  imagesLimit: number;
  storageUsedBytes: number;
  storageLimitBytes: number;
  projectsCount: number;
  projectsLimit: number;
}
