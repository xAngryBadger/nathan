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
    title: "Native",
    artist: "OneRepublic",
    rating: 4,
    genre: "Pop Rock",
    review: "Counting Stars foi meu primeiro indie. O que começou como Shazam em loja de shopping virou um álbum inteiro que eu voltava.",
    favoriteTracks: ["Counting Stars"],
    whyItResonates: "O pop que a gente descobre por acidente e que gruda de verdade.",
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
];

export const artists: ArtistEntry[] = [
  { artist: "System of a Down", genre: "Nu Metal / Alternative Metal", notes: "Acervo de centenas de músicas no HD — veio do rock do meu pai" },
  { artist: "Crystal Castles", genre: "Electropunk", notes: "Lo-fi, agressivo, melancólico. Dor digitalizada." },
  { artist: "OneRepublic", genre: "Pop Rock", notes: "Counting Stars — primeiro indie, Shazam em shopping" },
  { artist: "Seekae", genre: "IDM / Indietronica", notes: "Descoberta solo, eletrônico esquisito" },
];

export const genreNotes: { genre: string; note: string }[] = [
  { genre: "Electropunk", note: "Crystal Castles — Game Boy tendo colapso nervoso" },
  { genre: "Nu Metal", note: "Veio do HD do meu pai — criei meu próprio acervo depois" },
  { genre: "Pop Rock", note: "Counting Stars por Shazam em loja de shopping. Sem preconceito." },
  { genre: "IDM / Indietronica", note: "Seekae — o esquisito que atrai, paisagem sonora" },
  { genre: "Soundtrack", note: "Life is Strange, Alter Ego — jogos como descoberta musical" },
];
