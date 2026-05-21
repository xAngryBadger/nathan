export interface GameEntry {
  title: string;
  platform: string;
  rating: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  status: "playing" | "finished" | "backlog" | "abandoned";
  thoughts?: string;
  review?: string;
  playtime?: string;
  mechanics?: string[];
  comparison?: string;
}

export const games: GameEntry[] = [
  {
    title: "Life is Strange",
    platform: "PC",
    rating: 5,
    status: "finished",
    thoughts: "Minha filosofia de vida vem desse jogo. Zerei duas vezes.",
    review: "Life is Strange me ensinou que escolhas importam, mesmo quando parecem pequenas. A música, a atmosfera, a dor de rewinding — tudo fica. Zerei duas vezes. A trilha sonora é parte da minha identidade.",
    playtime: "2x completo",
    mechanics: ["Choice-based narrative", "Time rewind", "Episodic"],
  },
  {
    title: "Life is Strange: Before the Storm",
    platform: "PC",
    rating: 3.5,
    status: "finished",
    thoughts: "Chloe e Rachel. A música aqui é outra coisa.",
    playtime: "Completo",
    mechanics: ["Choice-based narrative", "Backtalk system", "Episodic"],
    comparison: "Life is Strange prequel",
  },
  {
    title: "Life is Strange: True Colors",
    platform: "PC",
    rating: 0,
    status: "finished",
    thoughts: "Alex Chen e o poder da empatia psíquica. A dor como superpotência.",
    mechanics: ["Choice-based narrative", "Empathy power", "Emotional aura"],
  },
  {
    title: "Life is Strange: Wavelengths",
    platform: "PC",
    rating: 0,
    status: "finished",
    thoughts: "Steph Gingrich como protagonista. Radio DJ, vinyl, e solidão criativa.",
    mechanics: ["Choice-based narrative", "Radio DJ gameplay"],
    comparison: "True Colors DLC — Steph's story",
  },
  {
    title: "Dark Souls",
    platform: "PC / Xbox",
    rating: 5,
    status: "finished",
    thoughts: "Mesmo contra forças imparáveis, podemos ser os escolhidos — não por alguém acima de nós, mas no sentido de protagonismo da própria vida.",
    review: "Dark Souls moldou minha filosofia de vida de forma permanente: a inspiração para lutar por um mundo melhor vem daqui. Cada boss é uma lição sobre persistência, cada death um reshuffling de estratégia. Os jogos possuem lições que em mim ficaram fixadas.",
    playtime: "900h+",
    mechanics: ["Souls-like", "Stamina combat", "Exploration", "NPC storylines"],
  },
  {
    title: "Elden Ring",
    platform: "Xbox One",
    rating: 0,
    status: "finished",
    thoughts: "A culminação de tudo que a FromSoftware construiu. Mundo aberto feito certo.",
    playtime: "250h",
    mechanics: ["Open world", "Souls-like", "Horseback combat", "Spirit summons"],
    comparison: "Dark Souls meets open world",
  },
  {
    title: "BioShock 2",
    platform: "PC",
    rating: 4,
    status: "finished",
    thoughts: "Ser o Big Daddy é uma experiência única. Rapture nunca fica velho.",
    playtime: "15 horas",
    mechanics: ["FPS", "Plasmids", "Morality choices", "Dual wielding"],
  },
  {
    title: "BioShock Infinite",
    platform: "PC",
    rating: 4,
    status: "finished",
    thoughts: "Columbia é linda. O twist é insano. A Elizabeth é a melhor companheira de jogo.",
    playtime: "22 horas",
    mechanics: ["FPS", "Skyline combat", "Vigors", "Companion AI"],
  },
  {
    title: "Far Cry 3",
    platform: "PC",
    rating: 4.5,
    status: "finished",
    thoughts: "O que definiu a fórmula. Vaas é inesquecível.",
    mechanics: ["Open world", "FPS", "Outpost liberation", "Skill trees"],
  },
  {
    title: "League of Legends",
    platform: "PC",
    rating: 0,
    status: "finished",
    thoughts: "Desde 2012. Mais de 1000 horas. O jogo que me ensinou que toxicidade é um problema estrutural, não individual.",
    playtime: "1000h+",
    mechanics: ["MOBA", "5v5", "Ranked", "Champion mastery"],
  },
  {
    title: "CS:GO",
    platform: "PC",
    rating: 0,
    status: "finished",
    thoughts: "150 horas de headshots e economia round. Bom enquanto durou.",
    playtime: "150h",
    mechanics: ["FPS", "Tactical", "Competitive", "Economy system"],
  },
  {
    title: "Valorant",
    platform: "PC",
    rating: 0,
    status: "abandoned",
    thoughts: "Abandonei no Linux. Anti-cheat é o inimigo real.",
    mechanics: ["FPS", "Tactical", "Hero abilities", "Competitive"],
  },
  {
    title: "Alter Ego",
    platform: "Mobile",
    rating: 5,
    status: "finished",
    thoughts: "Mudou muito minha mentalidade. Trilha sonora esquisita misturada com livros profundos.",
    review: "Um jogo que mudou muito minha mentalidade. Mistura uma trilha sonora esquisita com literatura clássica — Kafka, Dostoevsky, Camus, Dazai. Foi assim que descobri esses autores. O jogo te faz pensar sobre identidade de forma que poucos conseguem.",
    mechanics: ["Interactive fiction", "Psychological", "Narrative-driven"],
  },
];
