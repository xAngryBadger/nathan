export interface BookEntry {
  title: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  status: "reading" | "finished" | "want";
  thoughts?: string;
  review?: string;
  quotes?: string[];
  takeaways?: string[];
  readIfYouLiked?: string;
}

export const books: BookEntry[] = [
  {
    title: "The Pragmatic Programmer",
    author: "Hunt & Thomas",
    rating: 5,
    status: "finished",
    thoughts: "Essential. Re-read annually.",
    review: "This book shaped how I approach problems. It's not about code — it's about thinking. The analogies stick: broken windows, rubber ducks, tracer bullets. I keep a physical copy on my desk.",
    takeaways: [
      "Don't tolerate broken windows — fix bad code immediately",
      "Invest in knowledge portfolios, not just tech stacks",
      "DRY (Don't Repeat Yourself) applies beyond code",
    ],
    quotes: [
      "A broken window is any small defect or bad design decision that you know is wrong but keep ignoring.",
      "Be a catalyst for change.",
    ],
    readIfYouLiked: "Clean Code by Robert Martin",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    rating: 5,
    status: "finished",
    thoughts: "Changed how I think about systems.",
    review: "The definitive guide to distributed systems. Kleppmann explains tradeoffs without preaching solutions. Every chapter answered questions I didn't know I had.",
    takeaways: [
      "There's no single source of truth in distributed systems",
      "Partition tolerance vs consistency is a spectrum, not binary",
      "Log-structured storage is everywhere once you see it",
    ],
  },
  {
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    rating: 5,
    status: "reading",
    thoughts: "Mind-bending. Taking it slow.",
  },
  { title: "The Art of Doing Science and Engineering", author: "Richard Hamming", rating: 4, status: "want" },
  { title: "Structure and Interpretation of Computer Programs", author: "Abelson & Sussman", rating: 4, status: "reading" },
  { title: "The Alchemist", author: "Paulo Coelho", rating: 4, status: "finished", thoughts: "Read it in Portuguese first. Different feel." },
];
