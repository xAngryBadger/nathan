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

export const albums: AlbumEntry[] = [
  {
    title: "In Rainbows",
    artist: "Radiohead",
    rating: 5,
    genre: "Art Rock",
    review: "The pay-what-you-want release changed the industry. The music changed me. Every song is a different kind of beautiful.",
    favoriteTracks: ["Nude", "Weird Fishes/Arpeggi", "Reckoner"],
    whyItResonates: "It's warm, human, and devastating. Thom's voice cracks with vulnerability.",
    productionNotes: "Self-produced, recorded in multiple studios including a barn.",
  },
  {
    title: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    rating: 5,
    genre: "Hip Hop",
    review: "A jazz-rap opus about fame, race, and survival. Kendrick is the greatest storyteller of his generation. This album is exhausting in the best way.",
    favoriteTracks: ["u", "i", "Mortal Man"],
    whyItResonates: "It's demanding and rewarding. Like great literature.",
    lyricsThatHit: "Remember when you tried to copy me? / Remember when you doubted me? / Now you lookin' at me crazy, huh?",
  },
  { title: "Vespertine", artist: "Björk", rating: 5, genre: "Electronic" },
  { title: "Lift Your Skinny Fists Like Antennas to Heaven", artist: "GY!BE", rating: 5, genre: "Post-Rock" },
  { title: "Discovery", artist: "Daft Punk", rating: 5, genre: "Electronic" },
  { title: "OK Computer", artist: "Radiohead", rating: 5, genre: "Alt Rock" },
  { title: "Blonde", artist: "Frank Ocean", rating: 5, genre: "R&B" },
  { title: "Lateralus", artist: "Tool", rating: 4, genre: "Prog Metal" },
  { title: "The Money Store", artist: "Death Grips", rating: 4, genre: "Experimental Hip Hop" },
  { title: "Loveless", artist: "My Bloody Valentine", rating: 5, genre: "Shoegaze" },
];
