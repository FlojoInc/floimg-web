---
tags: [type/epic]
status: complete
priority: p1
created: 2026-01-02
updated: 2026-01-02
children: [T-2025-106, T-2025-107, T-2025-108, T-2025-109, T-2025-110, T-2025-111]
---

# EPIC-2025-011: Blog and Changelog for floimg.com

## Epic Details

- **Epic ID**: EPIC-2025-011
- **Status**: complete
- **Priority**: p1
- **Created**: 2026-01-02
- **Completed**: 2026-01-02

## Overview

Add a blog (MDX content collection) and unified changelog (aggregating OSS + Cloud updates) to floimg.com. The changelog uses smart category filtering (SDK/Studio/Cloud) rather than audience segmentation.

## Motivation

- Users need to discover new features and understand changes
- RSS feeds enable developer workflows (feed readers, automation)
- Unified changelog prevents fragmentation across multiple sources
- Blog supports announcements, tutorials, and community content

## Scope

- **floimg**: CHANGELOG.md additions for blog/changelog RSS feeds
- **floimg-cloud**: `/api/changelog` endpoint to serve FSC CHANGELOG.md
- **floimg-web**: Blog content collection, changelog page, RSS feeds, navigation

## Linked Tasks

All tasks completed in floimg-web and floimg-cloud:

- T-2025-106: Blog foundation (content collection, components, pages)
- T-2025-107: Changelog page with OSS parsing
- T-2025-108: Changelog automation (merged with T-2025-107)
- T-2025-109: Cloud changelog setup (API endpoint)
- T-2025-110: RSS feeds for blog and changelog
- T-2025-111: Navigation integration and polish

## Status

- [x] Blog foundation (MDX content collection, BlogCard, BlogPostLayout)
- [x] Changelog page with category filtering (SDK/Studio/Cloud)
- [x] Changelog parser for Keep a Changelog format
- [x] FSC changelog API endpoint (api.floimg.com/api/changelog)
- [x] RSS feeds (/blog/feed.xml, /changelog/feed.xml)
- [x] Navigation (header dropdown, footer links)
- [x] Documentation updated (CLAUDE.md, release process docs)

## Key Decisions

1. **URL-based fetching**: floimg-web fetches changelogs via URLs (not filesystem) so external contributors don't need floimg-hq umbrella
2. **Two changelog sources**: OSS from GitHub raw, FSC from API endpoint
3. **Graceful degradation**: If FSC API unavailable, show OSS changelog only
4. **Static MDX for blog**: Version controlled, fits Astro pattern

## PRs

- floimg-web PR #48: Blog and changelog pages
- floimg-web PR #49: URL-based changelog fetching
- floimg PR #76: CHANGELOG.md additions
- floimg-cloud: changelog API endpoint (direct to main)
