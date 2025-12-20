# floimg-web Deployment

Deployment guide for the floimg marketing site, documentation, and gallery frontend.

## Prerequisites

- Node.js 20+
- pnpm

## Build

```bash
pnpm install
pnpm build
```

The build output is in `packages/frontend/dist/`.

## Deployment Options

### Option 1: Coolify (Docker/nginx)

The included Dockerfile builds and serves the static site with nginx.

```bash
docker build -t floimg-web .
docker run -d -p 80:80 floimg-web
```

#### Coolify Settings

| Setting | Value |
|---------|-------|
| Type | Dockerfile |
| Port | 80 |
| Health Check | / |
| Domains | floimg.com, www.floimg.com |

### Option 2: Static Hosting

Deploy the `packages/frontend/dist/` folder to any static hosting:

- **Cloudflare Pages**: Connect repo, set build command to `pnpm build`, output to `packages/frontend/dist`
- **Vercel**: Connect repo, configure as Vite project
- **Netlify**: Connect repo, set build directory

### Option 3: Manual nginx

Copy `packages/frontend/dist/` to your server and use the provided `nginx.conf`:

```bash
cp -r packages/frontend/dist/* /var/www/floimg.com/
```

## Environment Variables

Build-time variables (set before build):

```bash
VITE_API_URL=https://api.floimg.com
VITE_STUDIO_URL=https://studio.floimg.com
```

## Static Files

The following static files are included in `/public`:
- `robots.txt` - Search engine crawling rules
- `sitemap.xml` - Site structure for SEO

## SSL

When using Coolify or reverse proxy:
- Enable auto-SSL via Let's Encrypt
- Ensure HSTS header is set (included in nginx.conf)

## Caching

The nginx.conf includes:
- 1-year cache for static assets (js, css, images, fonts)
- Gzip compression enabled
- SPA fallback routing

## Health Check

Simply access the root URL:
```bash
curl https://floimg.com/
```
