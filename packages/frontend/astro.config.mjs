import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://floimg.com',
  integrations: [
    starlight({
      title: 'floimg',
      description: 'Universal image workflow engine for developers and AI agents',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/floimg/floimg' },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
            { label: 'Core Concepts', slug: 'getting-started/concepts' },
          ],
        },
        {
          label: 'SDK',
          items: [
            { label: 'Generate', slug: 'sdk/generate' },
            { label: 'Transform', slug: 'sdk/transform' },
            { label: 'Save', slug: 'sdk/save' },
          ],
        },
        {
          label: 'Plugins',
          items: [
            { label: 'QuickChart', slug: 'plugins/quickchart' },
            { label: 'Mermaid', slug: 'plugins/mermaid' },
            { label: 'QR Code', slug: 'plugins/qr' },
            { label: 'D3', slug: 'plugins/d3' },
            { label: 'Screenshot', slug: 'plugins/screenshot' },
          ],
        },
        {
          label: 'CLI',
          items: [
            { label: 'Overview', slug: 'cli' },
            { label: 'Generate', slug: 'cli/generate' },
            { label: 'Transform', slug: 'cli/transform' },
          ],
        },
        {
          label: 'MCP',
          items: [
            { label: 'Overview', slug: 'mcp' },
            { label: 'Claude Integration', slug: 'mcp/claude-integration' },
            { label: 'Tool Reference', slug: 'mcp/tools' },
            { label: 'Examples', slug: 'mcp/examples' },
          ],
        },
        {
          label: 'Studio',
          items: [
            { label: 'Overview', slug: 'studio' },
            { label: 'Building Workflows', slug: 'studio/workflows' },
            { label: 'Node Reference', slug: 'studio/nodes' },
            { label: 'Self-Hosting', slug: 'studio/self-hosting' },
          ],
        },
      ],
    }),
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});
