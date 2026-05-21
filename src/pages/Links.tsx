import { links } from "../data/links";
import { useLanguage } from "../context/LanguageContext";

const categories = [
  { key: "social" as const, label: "Social" },
  { key: "work" as const, label: "Work" },
  { key: "projects" as const, label: "Projects" },
];

import PageTitle from "../components/PageTitle";

export default function Links() {
  const { t } = useLanguage();
  return (
    <section className="px-5 sm:px-0">
      <PageTitle subtitle="/links" title={t.pages.links.title} />
      <p className="prose" style={{ maxWidth: "36rem", marginBottom: "2rem" }}>
        {t.pages.links.intro}
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
