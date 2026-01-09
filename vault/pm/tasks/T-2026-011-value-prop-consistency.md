---
tags: [type/task]
status: in-progress
priority: p1
created: 2026-01-09
updated: 2026-01-09
parent:
children: []
epic:
---

# Task: Align Value Proposition Messaging Across Site

## Task Details

- **Task ID**: T-2026-011
- **Status**: in-progress
- **Priority**: p1
- **Created**: 2026-01-09
- **Completed**:

## Description

FloImg's value proposition was reframed from "Three Problems We Solve" to two core concepts:

1. **Deterministic Transforms** - Precise, repeatable image operations
2. **A Unified API** - Composable pipelines across SDK, CLI, Studio, MCP

This task ensures consistent messaging across the site, with special emphasis on the **composability story**: FloImg lets you mix AI generation with deterministic transforms in the same pipeline.

### Key Messaging Principle

The power isn't just "deterministic" OR "AI" - it's **composing both together**:

- Purely AI workflows (generate → refine → variations)
- Purely practical workflows (resize → caption → upload)
- **Mixed workflows** (AI generate → deterministic resize → caption → S3)

### Messaging Guidelines

- **Be factual**: Don't claim competitors can't do things (Adobe has AI in Photoshop now)
- **Focus on our approach**: Composable, API-first, functional model (image → image)
- **Frame for the user**: "What does this do for me?" not technical differentiators
- **Show, don't just tell**: Examples of mixed workflows are more powerful than claims

## Acceptance Criteria

### Already Completed

- [x] Consolidate about.astro from 3 problems to 2
- [x] Consolidate claude-code.astro from 3 problems to 2
- [x] Update docs/claude-code/index.mdx with 2-point framing
- [x] Update vault/Glossary.md terminology

### Remaining Work

- [ ] **concepts.mdx**: Add AI generators (OpenAI, Stability) to Generators section
- [ ] **concepts.mdx**: Add example showing AI → deterministic workflow
- [ ] **concepts.mdx**: Add three workflow types table
- [ ] **index.astro**: Strengthen "mix AI + deterministic" in features section
- [ ] **mcp/index.mdx**: Reframe comparison as "complement" not "alternative"
- [ ] **about.astro**: Add composability narrative to the two cards
- [ ] Audit for outdated competitive claims (remove any "X can't do Y" language)
- [ ] Build passes, visual check confirms pages render correctly

## Implementation Details

### Files to Modify

| File                                                 | Priority | Change                                             |
| ---------------------------------------------------- | -------- | -------------------------------------------------- |
| `src/content/docs/docs/getting-started/concepts.mdx` | Critical | Add AI generators, show mixed workflow example     |
| `src/pages/index.astro`                              | High     | Feature card showing "Mix AI + Deterministic"      |
| `src/content/docs/docs/mcp/index.mdx`                | High     | Reframe FloImg as AI complement, not alternative   |
| `src/pages/about.astro`                              | Medium   | Weave composability into existing 2-card structure |

### Three Workflow Types (add where missing)

```
| Workflow Type | Example |
|---------------|---------|
| AI + Professional | Generate with DALL-E → resize → caption → S3 |
| Purely Creative | AI generate → AI refine → variations |
| Purely Practical | Chart → resize → format convert → CDN |
```

### Composition Framing (use this language)

Good:

- "Mix AI generation with deterministic transforms in one pipeline"
- "Generate creatively, transform precisely"
- "Composable pipelines that handle any combination"

Avoid:

- "Better than X" or "X can't do Y" (competitive claims)
- "Three problems we solve" (old framing)
- Positioning FloImg _vs_ AI (we complement AI, not compete)

## Dependencies

- **Blocked By**: None
- **Related Tasks**: Builds on homepage redesign (T-2026-007)

## Progress Notes

### Work Log

- **2026-01-09**: Completed initial consolidation (3→2 problems) in about.astro, claude-code.astro, docs/claude-code/index.mdx, Glossary.md
- **2026-01-09**: Audit identified remaining gaps in concepts.mdx, index.astro, mcp/index.mdx

## Review Checklist

- [ ] Build passes (`pnpm build`)
- [ ] No "Three Problems" language remains
- [ ] No outdated competitive claims
- [ ] Composability message clear on key pages
- [ ] Examples show mixed AI + deterministic workflows
