import { Link } from "react-router-dom";

const sections = [
  {
    title: "Product",
    links: [
      { to: "/docs", label: "Documentation" },
      { to: "/gallery", label: "Gallery" },
      { to: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Open Source",
    links: [
      { href: "https://github.com/floimg/floimg", label: "floimg Core" },
      { href: "https://github.com/floimg/floimg-studio", label: "floimg Studio" },
      { href: "https://www.npmjs.com/package/floimg", label: "npm" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/docs/getting-started", label: "Getting Started" },
      { to: "/docs/plugins", label: "Plugins" },
      { to: "/docs/mcp", label: "MCP Integration" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <span className="text-lg font-bold text-white">floimg</span>
            <p className="mt-2 text-sm text-zinc-400">
              Universal image workflow engine for developers and AI agents.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to!}
                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
          <p>MIT License. Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
