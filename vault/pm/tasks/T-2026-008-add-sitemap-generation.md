# T-2026-008: Add Sitemap Generation

**Status**: TODO
**Created**: 2026-01-07
**Priority**: P1

## Summary

Add automatic sitemap generation to floimg-web using `@astrojs/sitemap`. This is a critical SEO gap—robots.txt references a sitemap that doesn't exist.

## Background

During an SEO audit, we discovered that:

1. `robots.txt` references `https://floimg.com/sitemap-index.xml`
2. No sitemap is actually generated
3. This hurts search engine discovery and indexing

A sitemap is foundational for both traditional SEO and AEO (Answer Engine Optimization). Search engines and AI crawlers use sitemaps to discover and prioritize content.

## Implementation

### 1. Install @astrojs/sitemap

```bash
pnpm add @astrojs/sitemap
```

### 2. Configure in astro.config.mjs

```javascript
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://floimg.com",
  integrations: [
    // ... existing integrations
    sitemap({
      filter: (page) =>
        !page.includes("/login") &&
        !page.includes("/signup") &&
        !page.includes("/forgot-password") &&
        !page.includes("/reset-password") &&
        !page.includes("/dashboard"),
    }),
  ],
});
```

### 3. Verify robots.txt alignment

Ensure `robots.txt` reference matches generated sitemap path:

- Should be: `Sitemap: https://floimg.com/sitemap-index.xml`

## Files to Modify

| File                                 | Action                  |
| ------------------------------------ | ----------------------- |
| `packages/frontend/package.json`     | Add @astrojs/sitemap    |
| `packages/frontend/astro.config.mjs` | Add sitemap integration |

## Acceptance Criteria

- [ ] `pnpm build` generates sitemap-index.xml
- [ ] Sitemap excludes auth pages (login, signup, etc.)
- [ ] Sitemap includes all public pages
- [ ] robots.txt correctly references the sitemap
- [ ] Sitemap is accessible at https://floimg.com/sitemap-index.xml after deploy

## Related

- [[AEO-Strategy]] - AEO initiative this supports
- T-2026-009 - Meta tag audit (companion task)
