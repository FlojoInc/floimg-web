import { Link } from "react-router-dom";

export default function Docs() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold text-white">Documentation</h1>
      <p className="mt-4 text-zinc-400">Learn how to use imgflo to build image workflows.</p>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-white">Getting Started</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/docs/getting-started" className="text-violet-400 hover:text-violet-300">
                Quick Start Guide
              </Link>
            </li>
            <li>
              <Link to="/docs/installation" className="text-violet-400 hover:text-violet-300">
                Installation
              </Link>
            </li>
            <li>
              <Link to="/docs/concepts" className="text-violet-400 hover:text-violet-300">
                Core Concepts
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">Generators</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/docs/plugins/quickchart" className="text-violet-400 hover:text-violet-300">
                QuickChart (Charts)
              </Link>
            </li>
            <li>
              <Link to="/docs/plugins/mermaid" className="text-violet-400 hover:text-violet-300">
                Mermaid (Diagrams)
              </Link>
            </li>
            <li>
              <Link to="/docs/plugins/qr" className="text-violet-400 hover:text-violet-300">
                QR Codes
              </Link>
            </li>
            <li>
              <Link to="/docs/plugins/screenshot" className="text-violet-400 hover:text-violet-300">
                Screenshots
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">Integrations</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/docs/mcp" className="text-violet-400 hover:text-violet-300">
                MCP Server (Claude)
              </Link>
            </li>
            <li>
              <Link to="/docs/cli" className="text-violet-400 hover:text-violet-300">
                CLI
              </Link>
            </li>
            <li>
              <Link to="/docs/yaml" className="text-violet-400 hover:text-violet-300">
                YAML Workflows
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">Self-Hosting</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/docs/self-hosting" className="text-violet-400 hover:text-violet-300">
                Self-Hosting Guide
              </Link>
            </li>
            <li>
              <Link to="/docs/studio" className="text-violet-400 hover:text-violet-300">
                imgflo Studio
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
