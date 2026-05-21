export interface BookEntry {
  title: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  status: "reading" | "finished" | "want";
  type?: "book" | "essay";
  thoughts?: string;
  review?: string;
  quotes?: string[];
  takeaways?: string[];
  readIfYouLiked?: string;
}

export const books: BookEntry[] = [
  {
    title: "Metamorphosis",
    author: "Franz Kafka",
    rating: 5,
    status: "finished",
    type: "book",
    thoughts: "Descobri pelo Alter Ego. Kafka escreve o pesadelo de se sentir alienado do próprio corpo e família.",
    review: "Descobri esse livro através do jogo Alter Ego, que mistura trilha sonora estranha com literatura. Kafka acerta em cheio o sentimento de ser transformado em algo que ninguém reconhece — literalmente. A alienação é visceral.",
  },
  {
    title: "Notes from Underground",
    author: "Fyodor Dostoevsky",
    rating: 5,
    status: "finished",
    type: "book",
    thoughts: "O homem do subsolo é a voz da contradição que a gente tenta ignorar. Dostoevsky escreveu sobre a internet antes dela existir.",
  },
  {
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    rating: 5,
    status: "finished",
    type: "book",
    thoughts: "Lógica absurda que faz mais sentido que a realidade às vezes.",
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    rating: 5,
    status: "finished",
    type: "book",
    thoughts: "Toda vez que relero é uma leitura diferente. A essência é invisível aos olhos.",
  },
  {
    title: "The Myth of Sisyphus",
    author: "Albert Camus",
    rating: 5,
    status: "finished",
    type: "book",
    thoughts: "Il faut imaginer Sisyphe heureux. O absurdo como ponto de partida, não de desistência.",
  },
  {
    title: "No Longer Human",
    author: "Osamu Dazai",
    rating: 5,
    status: "finished",
    type: "book",
    thoughts: "Dazai escreve como quem já desistiu mas continua observando. O diário de alguém que perdeu a máscara.",
  },
  {
    title: "Strait Is the Gate",
    author: "André Gide",
    rating: 4,
    status: "finished",
    type: "book",
    thoughts: "A renúncia como caminho espiritual. Gide é cirúrgico na análise da escolha entre amor e sacrifício.",
  },
  {
    title: "The Moon Over the Mountain",
    author: "Atsushi Nakajima",
    rating: 4,
    status: "finished",
    type: "book",
    thoughts: "Nakajima mistura fábula chinesa com existencialismo japonês. Contos que pesam como pedra.",
  },
  {
    title: "The Strange Case of Dr Jekyll and Mr Hyde",
    author: "Robert Louis Stevenson",
    rating: 4,
    status: "finished",
    type: "book",
    thoughts: "O dualismo é antigo mas Stevenson faz funcionar como metáfora que nunca envelhece.",
  },
  {
    title: "The Fall of the House of Usher / The Raven",
    author: "Edgar Allan Poe",
    rating: 5,
    status: "finished",
    type: "book",
    thoughts: "Poe é o mestre do horror que não precisa de monstros — basta a mente se deteriorando.",
  },
  {
    title: "The Dog of Flanders",
    author: "Ouida",
    rating: 4,
    status: "finished",
    type: "book",
    thoughts: "Tristeza pura embalada em narrativa infantil. O final é devastador.",
  },
  {
    title: "Night on the Galactic Railroad",
    author: "Kenji Miyazawa",
    rating: 5,
    status: "finished",
    type: "book",
    thoughts: "Uma viagem de trem pelo cosmos que é na verdade sobre perda e sacrifício. Miyazawa é único.",
  },
  {
    title: "How New York Stole the Idea of Modern Art",
    author: "Serge Guilbaut",
    rating: 5,
    status: "finished",
    type: "essay",
    thoughts: "Quintessential read on how art became a geopolitical weapon.",
    review: "Guilbaut established the argument: the U.S. government and elite art institutions co-opted Abstract Expressionism as an ideological tool of 'freedom' to counter Soviet influence. He documented how Nelson Rockefeller used MoMA to fund and build the collections of MAM in São Paulo and Rio to serve U.S. geopolitical interests in Brazil and Latin America.",
    takeaways: [
      "Abstract Expressionism was weaponized as cultural Cold War propaganda",
      "MoMA's international programs were psychological warfare in developing regions",
      "Brazil's modern art scene was actively shaped by U.S. institutional funding",
    ],
  },
  {
    title: "Abstract Expressionism, Weapon of the Cold War",
    author: "Eva Cockcroft",
    rating: 5,
    status: "finished",
    type: "essay",
    thoughts: "The essay that laid bare the CIA–MoMA connection.",
    review: "Cockcroft was the first art historian to expose the explicit links between the CIA, MoMA trustees (John Hay Whitney and Nelson Rockefeller), and secret funding of international touring avant-garde exhibitions. She targeted how the U.S. used MoMA's programs for psychological warfare in Brazil and Latin America.",
    takeaways: [
      "CIA funded art exhibitions as ideological positioning in developing regions",
      "MoMA trustees were directly connected to U.S. intelligence apparatus",
      "Brazil was a primary target for cultural Cold War operations",
    ],
  },
  {
    title: "O Guia do Mochileiro das Galáxias",
    author: "Douglas Adams",
    rating: 5,
    status: "finished",
    type: "book",
    thoughts: "Don't Panic. The answer is 42. Read it in Portuguese first.",
    quotes: [
      "Don't Panic.",
      "The answer to the ultimate question of life, the universe and everything is 42.",
    ],
  },
  {
    title: "O Dragão de Gelo",
    author: "George R.R. Martin",
    rating: 4,
    status: "finished",
    type: "book",
    thoughts: "Fairy tale diferente de tudo dele. Melancólico e bonito.",
  },
];
