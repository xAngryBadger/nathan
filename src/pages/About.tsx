import PageTitle from "../components/PageTitle";

export default function About() {
  return (
    <section className="px-5 sm:px-0">
      <PageTitle subtitle="/about" title="About" />
      <div className="prose" style={{ maxWidth: "36rem" }}>
        <p>
          I'm Isaac Nathan — most people just call me Nathan. I'm a Computer Engineering
          student at UFOP, coming from a Chemistry background. That pivot is a story
          for another time, but the short version: I found Python in 2022, fell hard,
          and never looked back.
        </p>
        <p>
          By day I build AI systems with production impact — agent pipelines, LLM integrations,
          full-stack applications. By night I'm a Linux enthusiast running CachyOS with
          a Hyprland rice that I'm never done tweaking. My setup is an extension of how
          I think: minimal, keyboard-driven, custom to my brain.
        </p>
        <h2>Beyond the terminal</h2>
        <p>
          I'm on the autism spectrum (ASD + ADHD, if you care about labels). That means
          I hyperfocus on things that grab me — which is how I end up going deep on stuff
          like obscure Vim plugins or post-rock discographies at 2am.
        </p>
        <p>
          I value quiet, competence, and people who say what they mean. I don't do small
          talk well but I can talk for hours about systems design, game narratives, or
          why Outer Wilds is the greatest game ever made.
        </p>
        <h2>This site</h2>
        <p>
          This is my personal corner of the internet. Not a portfolio, not a CV —
          just a place for the things I care about outside of work. My bookshelf, the games
          I love, what I'm listening to, how my desk looks. The kind of stuff that used
          to live on neocities pages before everything became a brand.
        </p>
        <p>
          Built with React, GSAP, and Tailwind. Inspired by Kyrylo Orlov's split-panel
          layout. Dark because bright screens hurt my eyes at night.
        </p>
      </div>
    </section>
  );
}
