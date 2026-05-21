import PageTitle from "../components/PageTitle";
import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();
  return (
    <section className="px-5 sm:px-0">
      <PageTitle subtitle="/gallery" title={t.pages.gallery.title} />
      <p className="prose" style={{ maxWidth: "36rem", marginBottom: "2rem" }}>
        {t.pages.gallery.intro}
      </p>
      <div className="placeholder-box">
        {t.pages.gallery.placeholder}
      </div>
    </section>
  );
}
