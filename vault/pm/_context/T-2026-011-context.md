# Context: T-2026-011 Value Prop Consistency

**Task**: [[T-2026-011-value-prop-consistency]]
**Created**: 2026-01-09
**Status**: In Progress

## Overview

Ensuring FloImg's value proposition is consistently communicated across the site. The reframing consolidates the old "Three Problems" into two clearer concepts, with emphasis on the **composability story** - mixing AI generation with deterministic transforms.

## The Reframing

### Old (3 overlapping problems)

1. Probabilistic Editing Problem
2. Tool Fragmentation Problem
3. Better Than Glue Code

### New (2 clear concepts)

1. **Deterministic Transforms** - Precise, repeatable operations
2. **A Unified API** - Composable pipelines, one abstraction layer

### The Key Insight (often missed)

The power isn't deterministic OR AI - it's **composing both**:

- AI generates amazing creative content
- Deterministic transforms add precision
- Same pipeline handles both

## Audit Findings

**Strong (composition framing):**

- Value-Proposition.md - "composes AI creativity with professional precision"
- claude-code.astro - Shows the mixed workflow clearly
- README.md - Three workflow types table

**Weak (needs work):**

- concepts.mdx - Doesn't mention AI generators at all (!)
- index.astro - Treats AI and Deterministic as separate features
- mcp/index.mdx - Frames FloImg vs AI instead of with AI

## Key Decisions

1. **No competitive claims** - Adobe has Firefly in Photoshop now. Don't say "X can't do Y"
2. **Focus on our approach** - Composable, API-first, functional model
3. **User-focused framing** - "What does this do for me?" on marketing pages
4. **Show mixed workflows** - Examples are more powerful than claims

## Completed Work

- [x] about.astro - Consolidated to 2 cards
- [x] claude-code.astro - Consolidated to 2 cards
- [x] docs/claude-code/index.mdx - 2-point framing
- [x] Glossary.md - Updated terminology

## Next Steps

1. Fix concepts.mdx (critical - misleads users)
2. Strengthen index.astro features
3. Reframe mcp/index.mdx
4. Add composability to about.astro cards
