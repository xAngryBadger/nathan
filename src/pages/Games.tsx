import { useState } from "react";
import PageTitle from "../components/PageTitle";
import { games } from "../data/games";
import Rating from "../components/Rating";
import { motion, AnimatePresence } from "motion/react";

function GameCard({ game }: { game: typeof games[0] }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="card" onClick={toggleExpand} style={{ cursor: "pointer" }}>
      <div className="flex items-center justify-between mb-1">
        <span className="card-title">{game.title}</span>
        <span className="meta-label">{game.platform}</span>
      </div>
  <div className="flex items-center justify-between mb-2">
    <span className="meta-accent">{game.status}</span>
    {game.rating > 0 ? <Rating n={game.rating} /> : <span className="meta-label">—</span>}
  </div>
    {game.thoughts && <p className="card-thoughts">{game.thoughts}</p>}
    {game.title.includes("Gears") || game.title.includes("Far Cry") ? (
      <p className="card-thoughts" style={{ color: "var(--color-accent)", fontSize: "0.75rem", marginTop: "0.25rem" }}>
        ⚠️ Hard mode only
      </p>
    ) : null}

    <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-3 mt-3 border-t border-[color-mix(in_oklab,var(--color-text)_10%,transparent)]">
              {game.review && (
                <div className="mb-3">
                  <p className="text-sm text-[var(--color-text-2)] leading-relaxed">{game.review}</p>
                </div>
              )}
              {game.playtime && (
                <div className="mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-3)]">Playtime: </span>
                  <span className="text-sm text-[var(--color-text-2)]">{game.playtime}</span>
                </div>
              )}
              {game.mechanics && game.mechanics.length > 0 && (
                <div className="mb-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] mb-2">Mechanics</h4>
                  <div className="flex flex-wrap gap-2">
                    {game.mechanics.map((mech, i) => (
                      <span key={i} className="tag">{mech}</span>
                    ))}
                  </div>
                </div>
              )}
              {game.comparison && (
                <div className="text-xs text-[var(--color-text-3)]">
                  Similar to: {game.comparison}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Games() {
  const playing = games.filter((g) => g.status === "playing");
  const finished = games.filter((g) => g.status === "finished");
  const backlog = games.filter((g) => g.status === "backlog");
  const abandoned = games.filter((g) => g.status === "abandoned");

  return (
    <section className="px-5 sm:px-0">
      <PageTitle subtitle="/games" title="Games" />
      <p className="prose" style={{ maxWidth: "36rem", marginBottom: "2rem" }}>
        Games that left something with me. Not a backlog tracker — these are the ones that matter.
      </p>

      {playing.length > 0 && (
        <>
          <h2 className="section-label section-label-accent">Playing</h2>
          <div className="flex flex-col gap-3 mb-8">
            {playing.map((game) => (
              <GameCard key={game.title} game={game} />
            ))}
          </div>
        </>
      )}

      {finished.length > 0 && (
        <>
          <h2 className="section-label">Finished</h2>
          <div className="flex flex-col gap-3 mb-8">
            {finished.map((game) => (
              <GameCard key={game.title} game={game} />
            ))}
          </div>
        </>
      )}

    {backlog.length > 0 && (
      <>
        <h2 className="section-label">Backlog</h2>
        <div className="flex flex-col gap-3 mb-8">
          {backlog.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>
      </>
    )}

    {abandoned.length > 0 && (
      <>
        <h2 className="section-label">Abandoned</h2>
        <div className="flex flex-col gap-3">
          {abandoned.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>
      </>
    )}
  </section>
  );
}
