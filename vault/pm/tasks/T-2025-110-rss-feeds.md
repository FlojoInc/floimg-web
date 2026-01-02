---
tags: [type/task]
status: complete
priority: p2
created: 2026-01-02
updated: 2026-01-02
parent:
children: []
epic: EPIC-2025-011
---

# Task: RSS Feeds for Blog and Changelog

## Task Details

- **Task ID**: T-2025-110
- **Status**: complete
- **Priority**: p2
- **Created**: 2026-01-02
- **Completed**: 2026-01-02

## Description

Add RSS feeds for blog and changelog to enable developer workflows.

## Acceptance Criteria

- [x] Install @astrojs/rss
- [x] /blog/feed.xml endpoint
- [x] /changelog/feed.xml endpoint
- [x] Category information in feed items

## Implementation Details

### Technical Approach

Used Astro's RSS integration to generate feeds at build time.

### Files Created

- `packages/frontend/src/pages/blog/feed.xml.ts`
- `packages/frontend/src/pages/changelog/feed.xml.ts`

## PRs

- floimg-web PR #48

## Progress Notes

- **2026-01-02**: Implemented RSS feeds for both blog and changelog
