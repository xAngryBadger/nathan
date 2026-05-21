import PageTitle from "../components/PageTitle";
import { useLanguage } from "../context/LanguageContext";

export default function Blog() {
  const { t } = useLanguage();
  return (
    <section className="px-5 sm:px-0">
      <PageTitle subtitle="/blog" title={t.pages.blog.title} />
      <p className="prose" style={{ maxWidth: "36rem", marginBottom: "2rem" }}>
        {t.pages.blog.intro}
      </p>
      <div className="placeholder-box">
        {t.pages.blog.placeholder}
      </div>
    </section>
  );
}
