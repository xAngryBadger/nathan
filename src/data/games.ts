export interface GameEntry {
  title: string;
  platform: string;
  rating: 1 | 2 | 3 | 4 | 5;
  status: "playing" | "finished" | "backlog";
  thoughts?: string;
  review?: string;
  playtime?: string;
  mechanics?: string[];
  comparison?: string;
}

export const games: GameEntry[] = [
  {
    title: "Disco Elysium",
    platform: "PC",
    rating: 5,
    status: "finished",
    thoughts: "The best writing in any game. Period.",
    review: "A detective RPG where you play as an amnesiac cop having conversations with his own brain. The writing is literary fiction quality — sharp, funny, devastating. ZA/UM proved games can be art without pretension.",
    playtime: "28 hours",
    mechanics: ["Dialogue trees", "Skill checks", "No combat"],
  },
  {
    title: "Outer Wilds",
    platform: "PC",
    rating: 5,
    status: "finished",
    thoughts: "Changed my understanding of what games can be.",
    review: "You're an astronaut in a 22-minute time loop. The only progression is knowledge. Every discovery feels earned. This is what exploration should feel like.",
    playtime: "18 hours",
    mechanics: ["Time loop", "Physics-based", "No waypoints"],
  },
  {
    title: "Hollow Knight",
    platform: "PC",
    rating: 5,
    status: "finished",
    thoughts: "112% completion. I have a problem.",
    review: "Metroidvania perfected. The map is a character. Every ability unlocks new paths. The boss fights are brutal but fair. Team Cherry made something timeless.",
    playtime: "87 hours",
    mechanics: ["Metroidvania", "Souls-like", "Hand-drawn"],
  },
  { title: "Celeste", platform: "PC", rating: 5, status: "finished" },
  { title: "Hades", platform: "PC", rating: 4, status: "finished" },
  {
    title: "Factorio",
    platform: "PC",
    rating: 5,
    status: "playing",
    thoughts: "The factory must grow.",
    review: "It's not a game, it's a lifestyle. You will build efficiency. You will optimize belts. You will become the machine.",
    mechanics: ["Automation", "Resource management", "Base building"],
  },
  { title: "Baldur's Gate 3", platform: "PC", rating: 5, status: "playing" },
  { title: "Return of the Obra Dinn", platform: "PC", rating: 5, status: "finished" },
  { title: "Stardew Valley", platform: "PC", rating: 4, status: "backlog" },
];
