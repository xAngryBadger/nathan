import PageTitle from "../components/PageTitle";

export default function Now() {
  return (
    <section className="px-5 sm:px-0">
      <PageTitle subtitle="/now" title="Now" />
      <p className="prose" style={{ maxWidth: "36rem" }}>
        This is what I'm up to right now. Last updated May 2026.
      </p>
      <div className="prose" style={{ maxWidth: "36rem" }}>
        <h2>Focus</h2>
        <ul>
          <li>Finishing my Computer Engineering degree at UFOP</li>
          <li>Building HarpIA — autonomous AI agent system</li>
          <li>Working on SRF System</li>
          <li>Ricing my CachyOS + Hyprland setup (always)</li>
        </ul>
        <h2>Playing</h2>
        <ul>
          <li>Factorio — the factory must grow</li>
          <li>Baldur's Gate 3 — second playthrough</li>
        </ul>
        <h2>Reading</h2>
        <ul>
          <li>Gödel, Escher, Bach — taking it slow, this one demands attention</li>
          <li>SICP — working through the exercises</li>
        </ul>
        <h2>Listening</h2>
        <ul>
          <li>A lot of GY!BE and Radiohead again</li>
          <li>Revisiting Frank Ocean's Blonde</li>
        </ul>
        <h2>Otherwise</h2>
        <p>
          Living in Mariana, MG. Spending time outdoors when I can.
          This site is my corner of the internet — not a resume, just me.
        </p>
      </div>
    </section>
  );
}
