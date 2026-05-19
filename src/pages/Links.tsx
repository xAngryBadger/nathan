import { links } from "../data/links";

const categories = [
  { key: "people" as const, label: "People" },
  { key: "sites" as const, label: "Sites" },
  { key: "tools" as const, label: "Tools" },
  { key: "reading" as const, label: "Reading" },
];

import PageTitle from "../components/PageTitle";

export default function Links() {
  return (
    <section className="px-5 sm:px-0">
      <PageTitle subtitle="/links" title="Links" />
      <p className="prose" style={{ maxWidth: "36rem", marginBottom: "2rem" }}>
        Places, people, and tools I keep coming back to. Not comprehensive — just what I actually use and admire.
      </p>

      {categories.map((cat) => {
        const items = links.filter((l) => l.category === cat.key);
        if (items.length === 0) return null;
        return (
          <div key={cat.key} className="mb-8">
            <h2 className="section-label">{cat.label}</h2>
            <div className="flex flex-col gap-2">
              {items.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                >
                  <div>
                    <div className="card-title">{link.title}</div>
                    {link.description && <div className="card-subtitle" style={{ marginTop: "0.15rem" }}>{link.description}</div>}
                  </div>
                  <span className="meta-label">↗</span>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
