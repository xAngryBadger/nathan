export interface AlbumEntry {
  title: string;
  artist: string;
  rating: 1 | 2 | 3 | 4 | 5;
  genre?: string;
  review?: string;
  favoriteTracks?: string[];
  whyItResonates?: string;
  productionNotes?: string;
  lyricsThatHit?: string;
}

export interface ArtistEntry {
  artist: string;
  genre?: string;
  notes?: string;
}

export const albums: AlbumEntry[] = [
// Metal / Rock
{
title: "Toxicity",
artist: "System of a Down",
rating: 5,
genre: "Nu Metal / Alternative Metal",
review: "SOAD é caos organizado. Cada música é um protesto com riffs devastadores. Meu pai tinha rock no HD dele, eu criei o meu próprio depois.",
favoriteTracks: ["Toxicity", "Come Alive"],
whyItResonates: "A energia é insubstituível. É punk, é metal, é politico — tudo ao mesmo tempo.",
},
{
title: "The Colour and the Shape",
artist: "Foo Fighters",
rating: 5,
genre: "Alt Rock",
review: "Grohl é uma força da natureza. Foo Fighters é o rock que sempre funciona — de manhã, de noite, em qualquer situação.",
favoriteTracks: ["Everlong", "My Hero", "Monkey Wrench"],
whyItResonates: "Everlong é a música perfeita. Ponto final.",
},
{
title: "White Pony",
artist: "Deftones",
rating: 5,
genre: "Alt Metal / Shoegaze",
review: "Deftones existe num espaço entre agressão e sonho que ninguém mais alcança. Chino Moreno transforma brutalidade em etéreo.",
favoriteTracks: ["Change (In the House of Flies)", "Digital Bath", "Passenger"],
whyItResonates: "É pesado e bonito simultaneamente. Não tem nada igual.",
},
// Electronic / Experimental
{
title: "Crystal Castles",
artist: "Crystal Castles",
rating: 5,
genre: "Electropunk",
review: "Crystal Castles é o som de um Game Boy tendo um colapso nervoso. Lo-fi, agressivo, melancólico ao mesmo tempo.",
favoriteTracks: ["Vanished", "Kerosene", "Crimewave"],
whyItResonates: "É electronic que não tenta ser dance music. É dor digitalizada.",
},
{
title: "III",
artist: "Crystal Castles",
rating: 5,
genre: "Electropunk",
review: "O álbum mais sombrio. Gravado em uma take por faixa, sem computadores. Telepath era pra ser single mas nunca saiu — e ainda assim é perfeito.",
favoriteTracks: ["Telepath"],
whyItResonates: "O III é o Crystal Castles sem máscara. Cada faixa soa como se estivesse desmoronando.",
},
{
title: "+Dome",
artist: "Seekae",
rating: 5,
genre: "IDM / Indietronica",
review: "Descobri Seekae por conta própria — um desses achados que vêm de cavar fundo. Eletrônico esquisito e hipnótico.",
favoriteTracks: ["Tais", "Stars Below", "Test & Recognise"],
whyItResonates: "Eletrônico que não tenta ser dance music. É paisagem sonora. Tais e Stars Below são outro nível.",
},
{
title: "Throne of Blood",
artist: "Sullivan King",
rating: 4,
genre: "Dubstep / Metal",
review: "Sullivan King mistura guitarra ao vivo com dubstep pesado. É o crossover que eu não sabia que precisava.",
whyItResonates: "Quandophonk encontra metal. Pura energia destrutiva organizada.",
},
{
title: "Native",
artist: "OneRepublic",
rating: 4,
genre: "Pop Rock",
review: "Counting Stars foi meu primeiro indie. O que começou como Shazam em loja de shopping virou um álbum inteiro que eu voltava.",
favoriteTracks: ["Counting Stars"],
whyItResonates: "O pop que a gente descobre por acidente e que gruda de verdade.",
},
{
title: "The Best of The Ink Spots",
artist: "The Ink Spots",
rating: 4,
genre: "Vintage / Vocal Jazz",
review: "Se você jogou Fallout, você conhece. Mas eles são mais que uma referência de jogo — são história da música americana.",
favoriteTracks: ["I Don't Want to Set the World on Fire", "Maybe", "We Three"],
whyItResonates: "A nostalgia de uma época que nunca vivi. Contraste perfeito com tudo pesado que ouço.",
},
{
title: "Survive — Hourglass",
artist: "Survive",
rating: 4,
genre: "Synthwave / Soundtrack",
review: "Descobri pelo filme The Guest — que tem notas horríveis mas uma trilha sonora incrível. Às vezes é assim que se encontra ouro.",
favoriteTracks: ["Hourglass"],
whyItResonates: "Um filme esquisito de notas péssimas me ensinou a ouvir isso. Prova que o método de descoberta importa tanto quanto a música.",
},
// Unique discoveries from my 8GB collection
{
title: "Betray (Phonk)",
artist: "Unknown",
rating: 4,
genre: "Phonk",
review: "Achei em 2024. Phonk sujo, batida de cowbell, baixo estourado. É o tipo de faixa que toca quando preciso de energia bruta. Não sei o artista, não procuro — é isso que importa.",
whyItResonates: "Phonk anônimo é a essência: a batida importa, não o nome.",
},
{
title: "Gallowdance (Hardstyle Remix)",
artist: "Various",
rating: 4,
genre: "Hardstyle",
review: "Pegaram 'Gallowdance' do Lebanon Hanover e transformaram num hardstyle. A melancolia original virou euforia. Descobri em 2024.",
whyItResonates: "Darkwave virou hardstyle. É bizarro, funciona.",
},
{
title: "Four Fists — Annihilation",
artist: "Aesop Rock & Home Made",
rating: 5,
genre: "Abstract Hip Hop",
review: "Aesop Rock é o vocabulário mais rico do hip hop. 'Annihilation' é denso, abstrato, lindo. Descobri em 2024. Cada verso é um quebra-cabeça.",
favoriteTracks: ["Annihilation"],
whyItResonates: "Hip hop pra quem gosta de letras que exigem dicionário.",
},
{
title: "Shame (H20$$$PORTS$$$ Remix)",
artist: "Freddie Gibbs & Madlib",
rating: 5,
genre: "Hip Hop / Remix",
review: "Freddie Gibbs + Madlib já é ouro. Esse remix deixa mais sujo, mais lento. Descobri em 2024. O beat é lama, a voz é faca.",
favoriteTracks: ["Shame (Remix)"],
whyItResonates: "Hip hop de verdade. Sem frescura, só flow e batida.",
},
{
title: "Montagem Eligite Aemulatio",
artist: "MC BM Oficial",
rating: 4,
genre: "Montagem / Brazilian Funk",
review: "Montagem brasileira que vicia. Batida de funk, sample repetitivo, letra simples. É o tipo de coisa que você ouve no transporte. Descobri em 2024.",
whyItResonates: "Funk de quebrada que gruda. Simples, eficiente.",
},
{
title: "Beat Anti Rato do Casarão (Slowed Reverb)",
artist: "MC DENADAI & DJ G7",
rating: 4,
genre: "Brazilian Funk / Slowed",
review: "Beat de funk paulista, slowed + reverb. É a versão remixada que deixa a música mais melancólica. Descobri em 2024. O 'anti rato' é icônico.",
whyItResonates: "Funk slowed é outro gênero. A melancolia bate diferente.",
},
{
title: "All I Do Is This",
artist: "Sims x Air Credits x ICETEP",
rating: 4,
genre: "Electronic / Chiptune",
review: "Sims (do Runescape) com Air Credits e ICETEP. É eletrônico com sample de chiptune. Descobri em 2024. Nostálgico, energético.",
favoriteTracks: ["All I Do Is This"],
whyItResonates: "Chiptune encontra eletrônico moderno. Nostalgia pura.",
},
{
title: "Dilatação Hipnótica 9.0",
artist: "Various",
rating: 4,
genre: "Brazilian Psychedelic Funk",
review: "Compilação de funk psicodélico brasileiro. É o tipo de som que toca em rolê. Descobri em 2024. A batida é hipnótica, o baixo é sujo.",
whyItResonates: "Funk psicodélico é a trilha de rolar da quebrada.",
},
{
title: "Assertive (Sorairo Days Remix)",
artist: "Shoko Nakagawa (Remix)",
rating: 4,
genre: "J-Pop / Remix",
review: "Tema de abertura de Gurren Lagann remixado. A original já é foda, esse remix deixa mais eletrônico. Descobri em 2024.",
whyItResonates: "J-pop remixado é o bridge perfeito entre nostalgia e modernidade.",
},
];

export const artists: ArtistEntry[] = [
  { artist: "System of a Down", genre: "Nu Metal / Alternative Metal", notes: "Acervo de centenas de músicas no HD — veio do rock do meu pai" },
  { artist: "Foo Fighters", genre: "Alt Rock", notes: "O rock que sempre funciona" },
  { artist: "Deftones", genre: "Alt Metal / Shoegaze", notes: "Pesado e etéreo ao mesmo tempo" },
  { artist: "Crystal Castles", genre: "Electropunk", notes: "Lo-fi, agressivo, melancólico. Dor digitalizada." },
  { artist: "OneRepublic", genre: "Pop Rock", notes: "Counting Stars — primeiro indie, Shazam em shopping" },
  { artist: "Seekae", genre: "IDM / Indietronica", notes: "Descoberta solo, eletrônico esquisito" },
  { artist: "Sullivan King", genre: "Dubstep / Metal", notes: "Phonk encontra guitarra" },
  { artist: "The Ink Spots", genre: "Vintage Jazz", notes: "Fallout OST e além" },
  { artist: "Survive", genre: "Synthwave", notes: "The Guest me ensinou" },
];

export const genreNotes: { genre: string; note: string }[] = [
  { genre: "Rock", note: "Veio do HD do meu pai — criei meu próprio acervo depois" },
  { genre: "Electronic", note: "Seekae, phonk, jungle — o esquisito me atrai" },
  { genre: "Synthwave", note: "The Guest → Survive. Filmes ruins, trilhas boas" },
  { genre: "Country", note: "Far Cry 5 me transformou em cowboy virtual" },
  { genre: "Phonk", note: "Sullivan King e além — bass e agressão" },
  { genre: "Pop", note: "Shazam em lojas de shopping. Sem preconceito." },
  { genre: "Jungle", note: "O BPM rápido que limpa a mente" },
  { genre: "Soundtrack", note: "Life is Strange, Alter Ego — jogos como descoberta musical" },
];
