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

# Task: Changelog Page with OSS Parsing

## Task Details

- **Task ID**: T-2025-107
- **Status**: complete
- **Priority**: p1
- **Created**: 2026-01-02
- **Completed**: 2026-01-02

## Description

Create changelog page that parses Keep a Changelog format from FloImg OSS and displays with category filtering.

## Acceptance Criteria

- [x] changelog-parser.ts to parse Keep a Changelog format
- [x] ChangelogEntry.astro component
- [x] CategoryFilter component (SDK/Studio/Cloud)
- [x] /changelog/index.astro page
- [x] Fetch OSS changelog from GitHub raw URL
- [x] Category badges based on package names

## Implementation Details

### Technical Approach

Parser extracts version, date, packages, and changes from markdown. Categories auto-detected from package names (@teamflojo/floimg-studio-\* = Studio, etc).

### Files Created

- `packages/frontend/src/lib/changelog-parser.ts`
- `packages/frontend/src/components/changelog/ChangelogEntry.astro`
- `packages/frontend/src/pages/changelog/index.astro`

## PRs

- floimg-web PR #48

## Progress Notes

- **2026-01-02**: Implemented changelog parsing and display
