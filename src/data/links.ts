export interface LinkEntry {
  title: string;
  url: string;
  description?: string;
  category: "people" | "tools" | "sites" | "reading" | "social" | "work";
}

export const links: LinkEntry[] = [
  {
    title: "Isaac Vitae",
    url: "https://isaacnathan.dev/curriculo",
    description: "Meu currículo completo",
    category: "work",
  },
  {
    title: "GitHub Profile",
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
];
