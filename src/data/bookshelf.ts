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
// Tier 1: Life-changing
{
title: "No Longer Human",
author: "Osamu Dazai",
rating: 5,
status: "finished",
type: "book",
thoughts: "Dazai escreve como quem já desistiu mas continua observando. O diário de alguém que perdeu a máscara.",
review: "A obra-prima de Dazai é um soco no estômago. Li através do jogo Alter Ego — que me apresentou a Kafka, Camus e Dostoevsky — e foi como olhar dentro de um espelho quebrado. A alienação de Oba Yozo não é metafórica; é visceral, crua. Dazai não escreve sobre perder a humanidade, ele escreve sobre nunca tê-la tido.",
},
{
title: "Night on the Galactic Railroad",
author: "Kenji Miyazawa",
rating: 5,
status: "finished",
type: "book",
thoughts: "Uma viagem de trem pelo cosmos que é na verdade sobre perda e sacrifício. Miyazawa é único.",
review: "Miyazawa escreveu isso como um conto de fadas cósmico sobre morte e redenção. A jornada de trem através da galáxia é uma metáfora budista que não explica — ela experiencia. Giovanni e Campanella me fizeram chorar. Único.",
},
{
title: "The Moon Over the Mountain",
author: "Atsushi Nakajima",
rating: 5,
status: "finished",
type: "book",
thoughts: "Nakajima mistura fábula chinesa com existencialismo japonês. Contos que pesam como pedra.",
review: "Nakajima pegou lendas chinesas e injetou angústia existencial japonesa. 'The Moon Over the Mountain' é sobre solidão cósmica. 'Record of the Moon' é sobre loucura. Cada conto é uma faca diferente no mesmo coração. Leitura obrigatória.",
},
{
title: "The Myth of Sisyphus",
author: "Albert Camus",
rating: 5,
status: "finished",
type: "book",
thoughts: "Il faut imaginer Sisyphe heureux. O absurdo como ponto de partida, não de desistência.",
review: "Camus começa onde outros terminam: o absurdo é inevitável. A questão não é como escapar, mas como viver dentro dele. 'Precisamos imaginar Sísifo feliz' não é otimismo — é resistência. Li isso depois de Dostoevsky e foi como sair de um porão escuro para um deserto iluminado.",
},
// Tier 2: Profound but different weight
{
title: "Notes from Underground",
author: "Fyodor Dostoevsky",
rating: 5,
status: "finished",
type: "book",
thoughts: "O homem do subsolo é a voz da contradição que a gente tenta ignorar. Dostoevsky escreveu sobre a internet antes dela existir.",
review: "O homem do subsolo é o proto-internet troll, o cara que sabe demais e sente de menos. Dostoevsky escreveu isso em 1864 e previu a solidão moderna. Li antes de Camus e fez mais sentido depois. É denso, desconfortável, necessário.",
},
{
title: "Metamorphosis",
author: "Franz Kafka",
rating: 5,
status: "finished",
type: "book",
thoughts: "Descobri pelo Alter Ego. Kafka escreve o pesadelo de se sentir alienado do próprio corpo e família.",
review: "Descobri Kafka através do Alter Ego. Gregor Samsa vira um inseto e a família dele só pensa em como isso atrapalha a vida deles. Kafka não precisa de monstros — a burocracia e a alienação familiar já são horror o suficiente. A tradução que li era boa, mas a sensação de pesadelo burocrático é universal.",
},
{
title: "The Fall of the House of Usher / The Raven",
author: "Edgar Allan Poe",
rating: 5,
status: "finished",
type: "book",
thoughts: "Poe é o mestre do horror que não precisa de monstros — basta a mente se deteriorando.",
review: "'The Fall' é sobre gêmeos e casas que desmoronam junto com a sanidade. 'The Raven' é sobre luto que vira obsessão. Poe não inventou o horror psicológico, mas ele o perfeccionou. Li em inglês — a prosa dele é poesia mesmo quando é terror.",
},
{
title: "Alice in Wonderland",
author: "Lewis Carroll",
rating: 5,
status: "finished",
type: "book",
thoughts: "Lógica absurda que faz mais sentido que a realidade às vezes.",
review: "Carroll escreveu nonsense que faz mais sentido que lógica formal. Alice cai num mundo onde as regras são diferentes, não inexistentes. Li como criança, reli como adulto — é outro livro. O Gato de Cheshire é o único são num mundo de loucos.",
},
{
title: "The Little Prince",
author: "Antoine de Saint-Exupéry",
rating: 5,
status: "finished",
type: "book",
thoughts: "Toda vez que relero é uma leitura diferente. A essência é invisível aos olhos.",
review: "Saint-Exupéry escreveu um conto de fadas que é filosofia disfarçada. 'O essencial é invisível aos olhos' é a lição que mais preciso ouvir. Reli três vezes — cada vez entendi uma camada diferente. A raposa, a rosa, o carneiro na caixa.",
},
// Tier 3: Good but not life-changing
{
title: "Strait Is the Gate",
author: "André Gide",
rating: 4,
status: "finished",
type: "book",
thoughts: "A renúncia como caminho espiritual. Gide é cirúrgico na análise da escolha entre amor e sacrifício.",
review: "Gide escreveu sobre renúncia espiritual com a precisão de um cirurgião. Alissa escolhe Deus sobre o amor humano e se destrói no processo. É bonito, triste, bem escrito. Não me marcou como Dazai ou Miyazawa, mas é sólido.",
},
{
title: "The Strange Case of Dr Jekyll and Mr Hyde",
author: "Robert Louis Stevenson",
rating: 4,
status: "finished",
type: "book",
thoughts: "O dualismo é antigo mas Stevenson faz funcionar como metáfora que nunca envelhece.",
review: "Stevenson pegou o dualismo humano e virou thriller vitoriano. Jekyll não é mau — ele é humano. Hyde não é um monstro separado; é a parte que Jekyll esconde. Curto, direto, eficaz. Li em uma tarde.",
},
{
title: "The Dog of Flanders",
author: "Ouida",
rating: 4,
status: "finished",
type: "book",
thoughts: "Tristeza pura embalada em narrativa infantil. O final é devastador.",
review: "Ouida escreveu um conto infantil que termina com o cachorro e o menino morrendo de frio na frente de uma pintura de Rubens. É devastador. Li criança, chorei, nunca mais reli. Funciona como trauma e como literatura.",
},
{
title: "O Guia do Mochileiro das Galáxias",
author: "Douglas Adams",
rating: 5,
status: "finished",
type: "book",
thoughts: "Don't Panic. The answer is 42. Read it in Portuguese first.",
review: "Adams escreveu ficção científica que é comédia filosófica. 'Don't Panic' é o melhor conselho já dado. A resposta é 42, mas a pergunta é o que importa. Li em português primeiro, depois em inglês — funciona nos dois idiomas.",
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
review: "Martin escreveu um conto de fadas que não parece Game of Thrones. É melancólico, bonito, sobre uma menina e um dragão de gelo. Li depois de ver o nome dele em Game of Thrones. Foi surpresa boa.",
},
// Essays (keep at end)
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
];
