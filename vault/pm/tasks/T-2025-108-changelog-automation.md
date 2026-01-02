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

# Task: Changelog Automation

## Task Details

- **Task ID**: T-2025-108
- **Status**: complete
- **Priority**: p2
- **Created**: 2026-01-02
- **Completed**: 2026-01-02

## Description

Automate changelog fetching so floimg-web always has latest data.

## Acceptance Criteria

- [x] Fetch changelog at build time (not require manual sync)
- [x] Handle fetch failures gracefully
- [x] Works for external OSS contributors

## Implementation Details

### Technical Approach

Instead of automation scripts, used URL-based fetching at build time:

- FloImg OSS: `https://raw.githubusercontent.com/TeamFlojo/FloImg/main/CHANGELOG.md`
- FSC: `https://api.floimg.com/api/changelog`

This is simpler than JSON generation scripts and works immediately for all contributors.

## PRs

- floimg-web PR #49

## Progress Notes

- **2026-01-02**: Decided URL-based fetching is simpler than automation scripts
