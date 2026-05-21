import { useState } from "react";
import PageTitle from "../components/PageTitle";
import { albums, genreNotes } from "../data/music";
import Rating from "../components/Rating";
import { motion, AnimatePresence } from "motion/react";

function AlbumCard({ album }: { album: typeof albums[0] }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="card" onClick={toggleExpand} style={{ cursor: "pointer" }}>
      <div className="flex items-center justify-between mb-1">
        <span className="card-title">{album.title}</span>
        <Rating n={album.rating} />
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="card-subtitle">{album.artist}</span>
        {album.genre && (
          <span className="tag">{album.genre}</span>
        )}
      </div>

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
              {album.review && (
                <div className="mb-3">
                  <p className="text-sm text-[var(--color-text-2)] leading-relaxed">{album.review}</p>
                </div>
              )}
              {album.whyItResonates && (
                <div className="mb-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] mb-2">Why It Resonates</h4>
                  <p className="text-sm text-[var(--color-text-2)]">{album.whyItResonates}</p>
                </div>
              )}
              {album.favoriteTracks && album.favoriteTracks.length > 0 && (
                <div className="mb-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-3)] mb-2">Favorite Tracks</h4>
                  <ol className="space-y-1">
                    {album.favoriteTracks.map((track, i) => (
                      <li key={i} className="text-sm text-[var(--color-text-2)]">
                        <span className="text-[var(--color-text-3)] mr-2">{String(i + 1).padStart(2, "0")}.</span>
                        {track}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {album.productionNotes && (
                <div className="mb-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-3)] mb-2">Production Notes</h4>
                  <p className="text-sm text-[var(--color-text-2)]">{album.productionNotes}</p>
                </div>
              )}
              {album.lyricsThatHit && (
                <div className="text-xs text-[var(--color-text-2)] italic border-l-2 border-[var(--color-accent)] pl-3">
                  "{album.lyricsThatHit}"
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Music() {
  return (
    <section className="px-5 sm:px-0">
      <PageTitle subtitle="/music" title="Music" />
      <p className="prose" style={{ maxWidth: "36rem", marginBottom: "2rem" }}>
    Álbuns que eu sempre volto. Rock do HD do meu pai, electronic de rabbit
    holes tarde da noite, trilhas de filmes esquisitos com notas péssimas. Nenhum
    gênero intocado — tenho um exemplo de tudo.
      </p>

      <div className="mb-8">
        <h2 className="section-label section-label-accent">Genre Map</h2>
        <p className="text-sm text-[var(--color-text-3)] mb-3" style={{ maxWidth: "36rem" }}>
          Como encontrei cada canto da minha biblioteca.
        </p>
        <div className="flex flex-wrap gap-2">
          {genreNotes.map((g) => (
            <span key={g.genre} className="tag" title={g.note}>
              {g.genre}
            </span>
          ))}
        </div>
      </div>

      <h2 className="section-label">Albums</h2>
      <div className="flex flex-col gap-3">
        {albums.map((album) => (
          <AlbumCard key={`${album.artist}-${album.title}`} album={album} />
        ))}
      </div>
    </section>
  );
}
