import PageTitle from "../components/PageTitle";

export default function Blog() {
  return (
    <section className="px-5 sm:px-0">
      <PageTitle subtitle="/blog" title="Blog" />
      <p className="prose" style={{ maxWidth: "36rem", marginBottom: "2rem" }}>
        Writing — technical, personal, or somewhere in between. MDX-powered, written in Vim, pushed to deploy.
      </p>
      <div className="placeholder-box">
        First post coming soon
      </div>
    </section>
  );
}
