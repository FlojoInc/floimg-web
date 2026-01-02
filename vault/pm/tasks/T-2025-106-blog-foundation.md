---
tags: [type/task]
status: complete
priority: p1
created: 2026-01-02
updated: 2026-01-02
parent:
children: []
epic: EPIC-2025-011
---

# Task: Blog Foundation

## Task Details

- **Task ID**: T-2025-106
- **Status**: complete
- **Priority**: p1
- **Created**: 2026-01-02
- **Completed**: 2026-01-02

## Description

Add blog content collection infrastructure to floimg-web using Astro's MDX support.

## Acceptance Criteria

- [x] Blog content collection schema in content.config.ts
- [x] BlogCard.astro component for listing
- [x] BlogPostLayout.astro for individual posts
- [x] /blog/index.astro listing page
- [x] /blog/[slug].astro dynamic post pages
- [x] Category filtering (Announcements, Tutorials, Engineering)
- [x] Social sharing metadata

## Implementation Details

### Technical Approach

Used Astro content collections with MDX for blog posts. Categories use frontmatter tags.

### Files Created

- `packages/frontend/src/content/config.ts` - Collection schema
- `packages/frontend/src/content/blog/` - Blog post MDX files
- `packages/frontend/src/components/blog/BlogCard.astro`
- `packages/frontend/src/components/blog/BlogPostLayout.astro`
- `packages/frontend/src/pages/blog/index.astro`
- `packages/frontend/src/pages/blog/[slug].astro`

## PRs

- floimg-web PR #48

## Progress Notes

- **2026-01-02**: Implemented blog foundation as part of EPIC-2025-011
