# Gallery Integration

floimg-web provides a public template gallery that showcases floimg capabilities and links to FloImg Studio.

## Architecture

**API-first with build-time fetch:**

```
┌────────────────────────────────────────────────────────────────┐
│                api.floimg.com                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ GET /api/templates                                        │  │
│  │ - Returns all public templates with full workflow data    │  │
│  │ - Source of truth for template data                       │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────┘
                               ▲
                               │ Build-time fetch
                               │
┌────────────────────────────────────────────────────────────────┐
│                floimg-web (Astro SSG)                           │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ /templates page                                           │  │
│  │ - Fetches from API at build time                         │  │
│  │ - Generates static HTML for SEO                          │  │
│  │ - "Open in Studio" links to studio.floimg.com            │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────┘
                               │
                               │ URL: studio.floimg.com/?template=<id>
                               ▼
┌────────────────────────────────────────────────────────────────┐
│                FloImg Studio                                    │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Template Loading                                          │  │
│  │ - Fetches from API at runtime                            │  │
│  │ - Falls back to localStorage cache or seed data           │  │
│  │ - Applies template workflow to editor                     │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────┘
```

## How It Works

Templates are served from `GET /api/templates`. floimg-web fetches at build time and generates static HTML pages for SEO.

| Consumer      | When       | Fallback                               |
| ------------- | ---------- | -------------------------------------- |
| floimg-web    | Build time | None (build fails if API unavailable)  |
| FloImg Studio | Runtime    | localStorage cache → bundled seed data |

## Template Type

Templates fetched from API include full workflow data:

```typescript
interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  generator: string;
  workflow: { nodes: StudioNode[]; edges: StudioEdge[] };
  tags?: string[];
  requiresCloud?: boolean;
  requiresAuth?: boolean;
  preview?: { imageUrl: string };
  forkCount?: number;
  author?: { id: string; name: string | null } | null;
  isSystem?: boolean;
}
```

Type definition: `src/utils/templates.ts`

## Key Files

| File                                | Purpose                          |
| ----------------------------------- | -------------------------------- |
| `src/utils/templates.ts`            | Template type, API fetch helpers |
| `src/pages/templates.astro`         | Gallery listing page             |
| `src/pages/templates/[id].astro`    | Template detail pages            |
| `src/components/TemplateCard.astro` | Card component                   |

## URL Scheme

Gallery items link to Studio with the template ID:

```
https://studio.floimg.com/?template=<template-id>
```

Studio parses this URL parameter on load, fetches the template from API, and applies it to the workflow editor.

## Related Docs

- `src/utils/templates.ts` - Template utilities
