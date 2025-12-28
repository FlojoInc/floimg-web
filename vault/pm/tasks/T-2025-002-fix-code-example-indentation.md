# T-2025-002: Fix Code Example Indentation on Homepage

**Status**: COMPLETE
**Created**: 2025-12-28
**Completed**: 2025-12-28

## Summary

Fix incorrect indentation in homepage code examples where whitespace between `<pre>` and `<code>` tags was being rendered as visible content.

## Deliverables

- [x] Remove whitespace between `<pre>` and `<code>` tags in TabbedDemo.astro
- [x] Add prettier-ignore comment to prevent formatter from reverting the fix

## Files Modified

- `packages/frontend/src/components/TabbedDemo.astro`

## PR

https://github.com/TeamFlojo/floimg-web/pull/29
