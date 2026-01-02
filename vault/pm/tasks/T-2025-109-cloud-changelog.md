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

# Task: Cloud Changelog Setup

## Task Details

- **Task ID**: T-2025-109
- **Status**: complete
- **Priority**: p2
- **Created**: 2026-01-02
- **Completed**: 2026-01-02

## Description

Set up FSC changelog infrastructure so cloud platform updates appear on floimg.com/changelog.

## Acceptance Criteria

- [x] Create CHANGELOG.md in floimg-cloud root
- [x] API endpoint to serve changelog content
- [x] Document changelog format requirements
- [x] Update CLAUDE.md with changelog guidelines

## Implementation Details

### Technical Approach

Created `/api/changelog` endpoint in floimg-cloud that serves CHANGELOG.md content as text/plain. floimg-web fetches this URL at build time.

### Files Created

- `floimg-cloud/CHANGELOG.md` - FSC changelog file
- `floimg-cloud/packages/api/src/routes/changelog.ts` - API endpoint

### Key Decision

FSC changelog content is public (served via API) so only include user-facing, non-proprietary information.

## PRs

- floimg-cloud: Direct to main (private repo)

## Progress Notes

- **2026-01-02**: Created API endpoint and changelog file
- **2026-01-02**: Updated CLAUDE.md with changelog maintenance guidelines
