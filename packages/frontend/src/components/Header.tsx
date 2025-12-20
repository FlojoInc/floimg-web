import { Link } from "react-router-dom";

const navItems = [
  { to: "/docs", label: "Docs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/pricing", label: "Pricing" },
  { href: "https://github.com/imgflo/imgflo", label: "GitHub", external: true },
];

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-white">
            imgflo
          </Link>

          <div className="flex items-center gap-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}

            <a
              href="/signup"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
