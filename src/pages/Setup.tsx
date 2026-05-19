import { useState } from "react";
import PageTitle from "../components/PageTitle";
import { motion, AnimatePresence } from "motion/react";

interface SetupItem {
  name: string;
  category: string;
  description: string;
  why?: string;
  alternatives?: string[];
  link?: string;
}

const setupItems: SetupItem[] = [
  {
    name: "CachyOS",
    category: "OS",
    description: "Arch-based, performance-optimized. Boot times are instant, AUR has everything, and I control every pixel.",
    why: "Switched from Ubuntu years ago and never looked back.",
  },
  {
    name: "Hyprland",
    category: "Window Manager",
    description: "Wayland compositor with animations that don't feel like bloat. Tiling by default, scratchpad for floating windows.",
    why: "My rice is perpetually a work in progress. Custom keybinds for everything.",
  },
  {
    name: "Neovim",
    category: "Editor",
    description: "LazyVim as a base, heavily customized. LSP, autocomplete, telescope.",
    why: "If I can't do it from nvim I probably don't want to do it.",
  },
  {
    name: "Kitty",
    category: "Terminal",
    description: "GPU-accelerated, supports ligatures, image previews, clean config file.",
    alternatives: ["Alacritty", "WezTerm"],
  },
  {
    name: "Zsh",
    category: "Shell",
    description: "Starship prompt. Aliases for everything. History shared across sessions. vi mode, obviously.",
  },
  {
    name: "Firefox",
    category: "Browser",
    description: "uBlock Origin, sidebery for tree-style tabs, custom userChrome.css to kill the tab bar.",
    alternatives: ["LibreWolf"],
  },
  {
    name: "ThinkPad T14 Gen 3",
    category: "Daily Driver",
    description: "Linux runs perfectly on it.",
  },
  {
    name: "Dell S2421HN",
    category: "Monitor",
    description: "External monitor when I need the space.",
  },
  {
    name: "Keychron K2",
    category: "Keyboard",
    description: "Mechanical, wireless, 75% layout.",
  },
  {
    name: "Logitech MX Anywhere 3",
    category: "Mouse",
    description: "Scroll wheel is unmatched.",
  },
];

function SetupCard({ item }: { item: SetupItem }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="card" onClick={toggleExpand} style={{ cursor: "pointer" }}>
      <div className="flex items-center justify-between mb-1">
        <span className="card-title">{item.name}</span>
        <span className="tag">{item.category}</span>
      </div>
      <p className="card-thoughts mb-2">{item.description}</p>
      
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
              {item.why && (
                <div className="mb-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] mb-2">Why</h4>
                  <p className="text-sm text-[var(--color-text-2)]">{item.why}</p>
                </div>
              )}
              {item.alternatives && item.alternatives.length > 0 && (
                <div className="mb-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-3)] mb-2">Alternatives</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.alternatives.map((alt, i) => (
                      <span key={i} className="text-sm text-[var(--color-text-2)]">{alt}</span>
                    ))}
                  </div>
                </div>
              )}
              {item.link && (
                <a href={item.link} className="text-sm text-[var(--color-accent-light)]" target="_blank" rel="noopener noreferrer">
                  Buy / Learn more →
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Setup() {
  return (
    <section className="px-5 sm:px-0">
      <PageTitle subtitle="/setup" title="Setup" />
      <p className="prose" style={{ maxWidth: "36rem", marginBottom: "2rem" }}>
        My digital workspace. Everything is keyboard-driven, minimal, and customized to how my brain works.
      </p>
      <div className="flex flex-col gap-3">
        {setupItems.map((item) => (
          <SetupCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
