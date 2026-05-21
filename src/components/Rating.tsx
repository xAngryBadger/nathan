export default function Rating({ n }: { n: number }) {
  const fullDots = Math.floor(n);
  const hasHalf = n % 1 >= 0.5;
  const emptyDots = 5 - fullDots - (hasHalf ? 1 : 0);

  if (n === 0) {
    return (
      <span className="rating">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="rating-dot" />
        ))}
      </span>
    );
  }

  return (
    <span className="rating">
      {Array.from({ length: fullDots }, (_, i) => (
        <span key={`full-${i}`} className="rating-dot rating-dot-filled" />
      ))}
      {hasHalf && <span className="rating-dot rating-dot-half" />}
      {Array.from({ length: emptyDots }, (_, i) => (
        <span key={`empty-${i}`} className="rating-dot" />
      ))}
    </span>
  );
}
