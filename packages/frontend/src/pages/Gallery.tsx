const galleryItems = [
  { id: "1", title: "Sales Dashboard", type: "chart", author: "demo" },
  { id: "2", title: "System Architecture", type: "mermaid", author: "demo" },
  { id: "3", title: "Product QR Code", type: "qr", author: "demo" },
  { id: "4", title: "Landing Page", type: "screenshot", author: "demo" },
];

export default function Gallery() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Gallery</h1>
        <p className="mt-4 text-zinc-400">
          Images created with floimg. Get inspired and remix workflows.
        </p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button className="rounded-lg bg-zinc-800 px-4 py-2 text-sm text-white hover:bg-zinc-700">
          All
        </button>
        <button className="rounded-lg px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white">
          Charts
        </button>
        <button className="rounded-lg px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white">
          Diagrams
        </button>
        <button className="rounded-lg px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white">
          QR Codes
        </button>
        <button className="rounded-lg px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white">
          Screenshots
        </button>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {galleryItems.map((item) => (
          <a
            key={item.id}
            href={`/gallery/${item.id}`}
            className="group rounded-lg border border-white/10 bg-zinc-900/50 overflow-hidden hover:border-violet-500/50 transition-colors"
          >
            <div className="aspect-video bg-zinc-800 flex items-center justify-center">
              <span className="text-zinc-500 text-sm">Preview</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-white group-hover:text-violet-400 transition-colors">
                {item.title}
              </h3>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-zinc-500">{item.type}</span>
                <span className="text-zinc-500">by {item.author}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-zinc-500">Gallery powered by floimg-cloud API</p>
      </div>
    </div>
  );
}
