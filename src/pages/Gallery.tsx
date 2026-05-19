import PageTitle from "../components/PageTitle";

export default function Gallery() {
  return (
    <section className="px-5 sm:px-0">
      <PageTitle subtitle="/gallery" title="Gallery" />
      <p className="prose" style={{ maxWidth: "36rem", marginBottom: "2rem" }}>
        Screenshots, photos, visual things. Coming soon — need to curate and add images first.
      </p>
      <div className="placeholder-box">
        Images coming soon
      </div>
    </section>
  );
}
