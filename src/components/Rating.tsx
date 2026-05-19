export default function Rating({ n }: { n: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <span className="rating">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`rating-dot${i < n ? " rating-dot-filled" : ""}`} />
      ))}
    </span>
  );
}
