export interface LinkEntry {
  title: string;
  url: string;
  description?: string;
  category: "people" | "tools" | "sites" | "reading";
}

export const links: LinkEntry[] = [
  { title: "Kyrylo Orlov", url: "https://kyryloorlov.com", description: "Design inspiration", category: "sites" },
  { title: "Gwern Branwen", url: "https://gwern.net", description: "The long now of personal sites", category: "sites" },
  { title: "Luke Smith", url: "https://lukesmith.xyz", description: "Linux, simplicity, no-nonsense", category: "people" },
  { title: "The Archive", url: "https://the-archive.xyz", description: "Minimal personal wiki", category: "sites" },
  { title: "Astral", url: "https://astral.sh", description: "Fast Python tooling", category: "tools" },
  { title: "Neovim", url: "https://neovim.io", description: "My editor", category: "tools" },
  { title: "Hyprland", url: "https://hyprland.org", description: "My window manager", category: "tools" },
  { title: "Hacker News", url: "https://news.ycombinator.com", description: "Daily reading", category: "reading" },
  { title: "LessWrong", url: "https://lesswrong.com", description: "Rationality community", category: "reading" },
];
