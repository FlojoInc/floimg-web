# imgflo-web

Public website for the imgflo ecosystem: marketing, documentation, and gallery.

## Structure

```
packages/
├── frontend/        # React 19 + Vite (marketing, docs, gallery UI)
└── shared/          # Shared types with imgflo-cloud
```

## Tech Stack

- **React 19** + **Vite** - Frontend framework
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **TanStack Query** - Server state management
- **Zustand** - Client state management

## Development

```bash
pnpm install
pnpm dev              # Starts frontend at localhost:5174
```

## Build

```bash
pnpm build
```

## Related Repos

- [imgflo](../imgflo) - Core library
- [imgflo-studio](../imgflo-studio) - Visual builder
- imgflo-cloud (private) - Cloud API that powers gallery and auth
