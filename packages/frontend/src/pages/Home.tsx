import { Link } from "react-router-dom";

const features = [
  {
    title: "Unified API",
    description: "One interface for charts, diagrams, QR codes, screenshots, and AI images.",
    icon: "🔗",
  },
  {
    title: "Deterministic",
    description: "Same inputs, same outputs. Reliable workflows for production.",
    icon: "🎯",
  },
  {
    title: "LLM-Ready",
    description: "MCP integration for Claude and other AI agents out of the box.",
    icon: "🤖",
  },
  {
    title: "Self-Hostable",
    description: "Run anywhere. No vendor lock-in. MIT licensed.",
    icon: "🏠",
  },
];

const generators = [
  { name: "quickchart", desc: "Charts via Chart.js" },
  { name: "mermaid", desc: "Diagrams" },
  { name: "qr", desc: "QR codes" },
  { name: "d3", desc: "D3 visualizations" },
  { name: "screenshot", desc: "Playwright screenshots" },
  { name: "openai", desc: "DALL-E images" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Image workflows for{" "}
            <span className="text-violet-400">developers</span> and{" "}
            <span className="text-violet-400">AI agents</span>
          </h1>
          <p className="mt-6 text-xl text-zinc-400">
            Generate charts, diagrams, QR codes, screenshots, and AI images with a unified API.
            Deterministic execution for reliable production workflows.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              to="/docs/getting-started"
              className="rounded-lg bg-violet-600 px-6 py-3 text-lg font-medium text-white hover:bg-violet-500 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/gallery"
              className="rounded-lg border border-white/20 px-6 py-3 text-lg font-medium text-white hover:bg-white/5 transition-colors"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="border-y border-white/10 bg-zinc-900/50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-6 text-sm">
            <code className="text-zinc-300">
              <span className="text-violet-400">import</span> createClient{" "}
              <span className="text-violet-400">from</span>{" "}
              <span className="text-green-400">'floimg'</span>;{"\n"}
              <span className="text-violet-400">import</span> quickchart{" "}
              <span className="text-violet-400">from</span>{" "}
              <span className="text-green-400">'floimg-quickchart'</span>;{"\n\n"}
              <span className="text-violet-400">const</span> floimg = createClient();{"\n"}
              floimg.registerGenerator(quickchart());{"\n\n"}
              <span className="text-zinc-500">// Generate a chart</span>{"\n"}
              <span className="text-violet-400">const</span> chart ={" "}
              <span className="text-violet-400">await</span> floimg.generate({"{"}
              {"\n"}
              {"  "}generator: <span className="text-green-400">'quickchart'</span>,{"\n"}
              {"  "}params: {"{"} type: <span className="text-green-400">'bar'</span>, data:{" "}
              {"{"} <span className="text-zinc-500">/* Chart.js config */</span> {"}"} {"}"}
              {"\n"}
              {"}"});{"\n\n"}
              <span className="text-zinc-500">// Transform it</span>{"\n"}
              <span className="text-violet-400">const</span> resized ={" "}
              <span className="text-violet-400">await</span> floimg.transform(chart, {"{"}
              {"\n"}
              {"  "}op: <span className="text-green-400">'resize'</span>,{"\n"}
              {"  "}params: {"{"} width: <span className="text-amber-400">800</span> {"}"}
              {"\n"}
              {"}"});{"\n\n"}
              <span className="text-zinc-500">// Save to S3</span>{"\n"}
              <span className="text-violet-400">await</span> floimg.save(resized,{" "}
              <span className="text-green-400">'s3://bucket/chart.png'</span>);
            </code>
          </pre>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">Why floimg?</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-white/10 bg-zinc-900/50 p-6"
              >
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generators */}
      <section className="border-t border-white/10 bg-zinc-900/50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">Generators</h2>
          <p className="mt-4 text-center text-zinc-400">Install only what you need</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {generators.map((gen) => (
              <div
                key={gen.name}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-zinc-950 p-4"
              >
                <code className="text-sm text-violet-400">floimg-{gen.name}</code>
                <span className="text-sm text-zinc-500">{gen.desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/docs/plugins"
              className="text-violet-400 hover:text-violet-300 transition-colors"
            >
              View all plugins →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white">Ready to start?</h2>
          <p className="mt-4 text-zinc-400">
            Install floimg and generate your first image in minutes.
          </p>
          <div className="mt-8">
            <code className="rounded-lg bg-zinc-900 px-4 py-2 text-violet-400">
              npm install floimg
            </code>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              to="/docs/getting-started"
              className="rounded-lg bg-violet-600 px-6 py-3 font-medium text-white hover:bg-violet-500 transition-colors"
            >
              Read the Docs
            </Link>
            <a
              href="https://github.com/floimg/floimg"
              className="rounded-lg border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/5 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
