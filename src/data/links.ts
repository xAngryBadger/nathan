export interface LinkEntry {
  title: string;
  url: string;
  description?: string;
  category: "social" | "work" | "projects";
}

export const links: LinkEntry[] = [
  {
    title: "GitHub",
    url: "https://github.com/xAngryBadger",
    description: "Meus repositórios e contribuições",
    category: "social",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/isaac-nathan-da-silva-barbosa-815b212ab/",
    description: "Perfil profissional",
    category: "work",
  },
  {
    title: "Isaac Vitae",
    url: "https://xangrybadger.github.io/isaac-vitae/",
    description: "Currículo completo (PT/EN)",
    category: "work",
  },
  {
    title: "GitHub README",
    url: "https://github.com/xAngryBadger/xAngryBadger",
    description: "Meu perfil no GitHub",
    category: "social",
  },
  {
    title: "HarpIA",
    url: "https://github.com/xAngryBadger/harpia",
    description: "Motor de automação criativa com 7+ modelos de IA",
    category: "projects",
  },
  {
    title: "ForestAI",
    url: "https://github.com/xAngryBadger/forestai",
    description: "Detecção de espécies florestais com Deep Learning",
    category: "projects",
  },
  {
    title: "SRF System",
    url: "https://github.com/xAngryBadger/srf-system",
    description: "Planejamento operacional para restauração florestal",
    category: "projects",
  },
];
