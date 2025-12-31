# T-2025-004: GDPR Cookie Consent and Privacy Policy

**Status**: IN_PROGRESS
**Created**: 2025-12-31

## Summary

Implement GDPR-compliant cookie consent for floimg.com. This includes a privacy policy page, cookie consent banner, and cookie settings page for users to manage their preferences.

FloImg uses Umami for privacy-focused analytics (cookieless) and essential session cookies for authentication. This implementation provides transparency and user control over tracking.

## Why This Matters

- **Transparency**: Users deserve to know what data we collect
- **Compliance**: GDPR requires explicit consent for non-essential tracking
- **Trust**: A clear privacy stance builds user confidence
- **Future-ready**: Infrastructure for when/if we add marketing trackers

## Consent Categories

| Category  | Description          | Examples                | Required?       |
| --------- | -------------------- | ----------------------- | --------------- |
| Essential | Required for service | Session cookies         | Yes (always on) |
| Analytics | Usage tracking       | Umami analytics         | Optional        |
| Marketing | Advertising          | Future: GTM, Google Ads | Optional        |

## Deliverables

### Phase 1: Privacy Policy

- [ ] Create `/privacy` page with privacy policy content
- [ ] Add "Privacy Policy" link to footer
- [ ] Reference privacy policy from Terms of Service

### Phase 2: Consent Infrastructure

- [ ] Create `packages/consent/` package with:
  - Zustand store for consent state
  - Cross-subdomain cookie utilities (`Domain=.floimg.com`)
  - React hooks for consent access
  - TypeScript types

### Phase 3: Cookie Banner

- [ ] Create `ConsentBanner` component
  - Fixed to bottom of viewport
  - Three actions: Accept All, Reject All, Customize
  - Anti-flicker pattern (don't show until hydration complete)
- [ ] Create `ConsentDialog` for custom preferences
- [ ] Integrate banner into MarketingLayout.astro

### Phase 4: Cookie Settings Page

- [ ] Create `/cookie-settings` page
- [ ] Show current consent status
- [ ] Allow granular preference changes
- [ ] Add link in footer

### Phase 5: Analytics Gating

- [ ] Gate Umami script loading on analytics consent
- [ ] Update MarketingLayout.astro to check consent before loading Umami

## Technical Notes

### Cross-Subdomain Consent

Consent cookie uses `Domain=.floimg.com` so preferences set on floimg.com also apply to studio.floimg.com.

```typescript
// Cookie structure
{
  hasInteracted: boolean,
  preferences: { essential: true, analytics: boolean, marketing: boolean },
  timestamp: number,
  version: string
}
```

### Anti-Flicker Pattern

The banner must not flash on page navigation. Use an `isStoreReady` flag that's only set after hydration confirms whether the user has already interacted.

### Files to Create

- `packages/consent/` - New package
- `packages/frontend/src/pages/privacy.astro`
- `packages/frontend/src/pages/cookie-settings.astro`

### Files to Modify

- `packages/frontend/src/components/Footer.astro` - Add privacy/cookies links
- `packages/frontend/src/pages/terms.astro` - Reference privacy policy
- `packages/frontend/src/layouts/MarketingLayout.astro` - Add banner, gate Umami

## Acceptance Criteria

- [ ] Privacy policy page is accessible at `/privacy`
- [ ] Cookie banner appears for new visitors
- [ ] Users can accept all, reject all, or customize
- [ ] Preferences persist across sessions and subdomains
- [ ] Cookie settings page allows changing preferences
- [ ] Umami only loads when analytics consent is granted
- [ ] No banner flash on subsequent page loads
