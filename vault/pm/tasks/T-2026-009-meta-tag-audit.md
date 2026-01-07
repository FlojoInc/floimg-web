# T-2026-009: Meta Tag and SEO Audit

**Status**: TODO
**Created**: 2026-01-07
**Priority**: P2

## Summary

Audit all floimg-web pages for SEO completeness: meta tags, OG images, JSON-LD structured data, and title/description coverage.

## Background

An initial audit found that floimg-web has good SEO foundations:

- Meta tags in MarketingLayout.astro
- OpenGraph and Twitter cards
- JSON-LD structured data for SoftwareApplication and BlogPosting

However, a comprehensive audit is needed to:

1. Verify all pages have proper titles and descriptions
2. Check for missing OG images
3. Ensure JSON-LD coverage is complete
4. Identify any gaps for AEO optimization

## Audit Scope

### Pages to Audit

**Marketing pages:**

- [ ] Homepage (`/`)
- [ ] Pricing (`/pricing`)
- [ ] Templates/Gallery (`/templates`)
- [ ] About/Community pages

**Documentation:**

- [ ] Docs landing (`/docs`)
- [ ] Individual doc pages (sample check)

**Dynamic pages:**

- [ ] Showcase items (`/showcase/[id]`)
- [ ] User profiles (`/u/[username]`)

**Blog:**

- [ ] Blog listing (`/blog`)
- [ ] Individual posts (sample check)

### Checklist Per Page

| Item               | Check                                  |
| ------------------ | -------------------------------------- |
| `<title>`          | Unique, descriptive, includes "FloImg" |
| `meta description` | Present, compelling, <160 chars        |
| `og:title`         | Matches or enhances title              |
| `og:description`   | Present                                |
| `og:image`         | Present, correct dimensions (1200x630) |
| `twitter:card`     | Set to `summary_large_image`           |
| Canonical URL      | Present and correct                    |
| JSON-LD            | Appropriate schema type                |

## Deliverables

1. **Audit spreadsheet** documenting status of each page
2. **Gap list** with specific issues to fix
3. **Recommendations** for FAQ sections (AEO optimization)

## Files to Review

| File                            | Purpose                      |
| ------------------------------- | ---------------------------- |
| `layouts/MarketingLayout.astro` | Main meta tag implementation |
| `layouts/BlogPostLayout.astro`  | Blog post meta tags          |
| `pages/showcase/[id].astro`     | Dynamic showcase pages       |
| `pages/u/[username].astro`      | User profile pages           |

## Acceptance Criteria

- [ ] All pages audited and documented
- [ ] Critical gaps identified with fix recommendations
- [ ] Report created in vault or as PR comment
- [ ] Follow-up tasks created for any fixes needed

## Related

- [[AEO-Strategy]] - AEO initiative this supports
- T-2026-008 - Sitemap generation (companion task)
