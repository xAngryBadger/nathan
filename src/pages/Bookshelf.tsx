import { useState } from "react";
import PageTitle from "../components/PageTitle";
import { books } from "../data/bookshelf";
import Rating from "../components/Rating";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

function StatusTag({ status }: { status: string }) {
  return (
    <span className={`status-tag${status === "reading" ? " status-tag-reading" : ""}`}>
      {status}
    </span>
  );
}

function BookCard({ book }: { book: typeof books[0] }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div key={book.title} className="card" onClick={toggleExpand} style={{ cursor: "pointer" }}>
      <div className="flex items-center justify-between mb-1">
        <span className="card-title">{book.title}</span>
        <StatusTag status={book.status} />
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="card-subtitle">{book.author}</span>
        <div className="flex items-center gap-2">
          {book.type === "essay" && <span className="tag">{t.common.essay}</span>}
          <Rating n={book.rating} />
        </div>
      </div>
      {book.thoughts && <p className="card-thoughts">{book.thoughts}</p>}

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
              {book.review && (
                <div className="mb-3">
                  <p className="text-sm text-[var(--color-text-2)] leading-relaxed">{book.review}</p>
                </div>
              )}
              {book.takeaways && book.takeaways.length > 0 && (
                <div className="mb-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] mb-2">{t.common.keyTakeaways}</h4>
                  <ul className="space-y-1">
                    {book.takeaways.map((takeaway, i) => (
                      <li key={i} className="text-sm text-[var(--color-text-2)]">• {takeaway}</li>
                    ))}
                  </ul>
                </div>
              )}
              {book.quotes && book.quotes.length > 0 && (
                <div className="mb-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-3)] mb-2">{t.common.quotes}</h4>
                  <ul className="space-y-2">
                    {book.quotes.map((quote, i) => (
                      <li key={i} className="text-sm text-[var(--color-text-2)] italic border-l-2 border-[var(--color-accent)] pl-3">
                        "{quote}"
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {book.readIfYouLiked && (
                <div className="text-xs text-[var(--color-text-3)]">
                  {t.common.readIfYouLiked}: {book.readIfYouLiked}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Bookshelf() {
  const { t } = useLanguage();
  const reading = books.filter((b) => b.status === "reading");
  const finished = books.filter((b) => b.status === "finished");
  const want = books.filter((b) => b.status === "want");

  return (
    <section className="px-5 sm:px-0">
      <PageTitle subtitle="/bookshelf" title={t.pages.bookshelf.title} />
      <p className="prose" style={{ maxWidth: "36rem", marginBottom: "2rem" }}>
        {t.pages.bookshelf.intro}
      </p>

      {reading.length > 0 && (
        <>
          <h2 className="section-label section-label-accent">{t.pages.bookshelf.currentlyReading}</h2>
          <div className="flex flex-col gap-3 mb-8">
            {reading.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
          </div>
        </>
      )}

      {finished.length > 0 && (
        <>
          <h2 className="section-label">{t.pages.bookshelf.finished}</h2>
          <div className="flex flex-col gap-3 mb-8">
            {finished.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
          </div>
        </>
      )}

      {want.length > 0 && (
        <>
          <h2 className="section-label">{t.pages.bookshelf.wantToRead}</h2>
          <div className="flex flex-col gap-3">
            {want.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
