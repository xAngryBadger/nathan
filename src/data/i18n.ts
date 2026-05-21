export type Lang = 'pt' | 'en';

export interface Translation {
  nav: {
    now: string;
    about: string;
    bookshelf: string;
    games: string;
    music: string;
    setup: string;
    gallery: string;
    blog: string;
    links: string;
  };
  pages: {
    now: {
      title: string;
      intro: string;
      focus: string;
      discoveries: string;
      playing: string;
      listening: string;
      otherwise: string;
    };
    about: {
      title: string;
      beyondTerminal: string;
      whatShapedMe: string;
      thisSite: string;
    };
    bookshelf: {
      title: string;
      intro: string;
      currentlyReading: string;
      finished: string;
      wantToRead: string;
    };
    games: {
      title: string;
      intro: string;
      playing: string;
      finished: string;
      backlog: string;
      abandoned: string;
    };
    music: {
      title: string;
      intro: string;
      genreMap: string;
      genreMapIntro: string;
      albums: string;
    };
    setup: {
      title: string;
      intro: string;
    };
    gallery: {
      title: string;
      intro: string;
      placeholder: string;
    };
    blog: {
      title: string;
      intro: string;
      placeholder: string;
    };
    links: {
      title: string;
      intro: string;
    };
  };
  common: {
    playtime: string;
    mechanics: string;
    similarTo: string;
    why: string;
    alternatives: string;
    buyLearn: string;
    keyTakeaways: string;
    quotes: string;
    readIfYouLiked: string;
    essay: string;
    hardModeOnly: string;
    footer: {
      email: string;
      copyright: string;
    };
  };
}

export const translations: Record<Lang, Translation> = {
  pt: {
    nav: {
      now: 'Now',
      about: 'About',
      bookshelf: 'Bookshelf',
      games: 'Games',
      music: 'Music',
      setup: 'Setup',
      gallery: 'Gallery',
      blog: 'Blog',
      links: 'Links',
    },
    pages: {
      now: {
        title: 'Now',
        intro: 'O que estou fazendo agora. Última atualização: Maio 2026.',
        focus: 'Foco',
        discoveries: 'Descobertas & Obsessões',
        playing: 'Jogando',
        listening: 'Ouvindo',
        otherwise: 'Otherwise',
      },
      about: {
        title: 'About',
        beyondTerminal: 'Além do terminal',
        whatShapedMe: 'O que me formou',
        thisSite: 'Este site',
      },
      bookshelf: {
        title: 'Bookshelf',
        intro: 'Livros que estou lendo, já li ou quero ler. Não é um blog de resenhas — só o que ficou comigo.',
        currentlyReading: 'Lendo Atualmente',
        finished: 'Finalizados',
        wantToRead: 'Quero Ler',
      },
      games: {
        title: 'Games',
        intro: 'Jogos que deixaram algo em mim. Não é uma lista de backlog — são os que importam.',
        playing: 'Jogando',
        finished: 'Finalizados',
        backlog: 'Backlog',
        abandoned: 'Abandonados',
      },
      music: {
        title: 'Music',
        intro: 'Álbuns que eu sempre volto. Rock do HD do meu pai, electronic de rabbit holes tarde da noite, trilhas de filmes esquisitos com notas péssimas. Nenhum gênero intocado — tenho um exemplo de tudo.',
        genreMap: 'Genre Map',
        genreMapIntro: 'Como encontrei cada canto da minha biblioteca.',
        albums: 'Álbuns',
      },
      setup: {
        title: 'Setup',
        intro: 'Meu workspace digital. Tudo é keyboard-driven, minimal, e customizado pro como meu cérebro funciona.',
      },
      gallery: {
        title: 'Gallery',
        intro: 'Screenshots, fotos, coisas visuais. Em breve — preciso curar e adicionar imagens primeiro.',
        placeholder: 'Imagens em breve',
      },
      blog: {
        title: 'Blog',
        intro: 'Escritos — técnico, pessoal, ou algo no meio. MDX, escrito no Vim, deploy on push.',
        placeholder: 'Primeiro post em breve',
      },
      links: {
        title: 'Links',
        intro: 'Lugares, pessoas e ferramentas que eu sempre volto. Não é comprehensivo — só o que eu realmente uso e admiro.',
      },
    },
    common: {
      playtime: 'Tempo de jogo',
      mechanics: 'Mecânicas',
      similarTo: 'Similar a',
      why: 'Por que',
      alternatives: 'Alternativas',
      buyLearn: 'Comprar / Saber mais →',
      keyTakeaways: 'Principais Ideias',
      quotes: 'Citações',
      readIfYouLiked: 'Leia se gostou de',
      essay: 'ensaio',
      hardModeOnly: '⚠️ Hard mode only',
      footer: {
        email: 'email',
        copyright: '©',
      },
    },
  },
  en: {
    nav: {
      now: 'Now',
      about: 'About',
      bookshelf: 'Bookshelf',
      games: 'Games',
      music: 'Music',
      setup: 'Setup',
      gallery: 'Gallery',
      blog: 'Blog',
      links: 'Links',
    },
    pages: {
      now: {
        title: 'Now',
        intro: 'This is what I\'m up to right now. Last updated May 2026.',
        focus: 'Focus',
        discoveries: 'Discoveries & Obsessions',
        playing: 'Playing',
        listening: 'Listening',
        otherwise: 'Otherwise',
      },
      about: {
        title: 'About',
        beyondTerminal: 'Beyond the terminal',
        whatShapedMe: 'What shaped me',
        thisSite: 'This site',
      },
      bookshelf: {
        title: 'Bookshelf',
        intro: 'Books I\'m reading, have read, or want to. Not a review blog — just what stuck with me.',
        currentlyReading: 'Currently Reading',
        finished: 'Finished',
        wantToRead: 'Want to Read',
      },
      games: {
        title: 'Games',
        intro: 'Games that left something with me. Not a backlog tracker — these are the ones that matter.',
        playing: 'Playing',
        finished: 'Finished',
        backlog: 'Backlog',
        abandoned: 'Abandoned',
      },
      music: {
        title: 'Music',
        intro: 'Albums I keep coming back to. Rock from my dad\'s HD, electronic from late-night rabbit holes, soundtracks from weird movies with terrible ratings. No genre untouched — I have an example of everything.',
        genreMap: 'Genre Map',
        genreMapIntro: 'How I found each corner of my library.',
        albums: 'Albums',
      },
      setup: {
        title: 'Setup',
        intro: 'My digital workspace. Everything is keyboard-driven, minimal, and customized to how my brain works.',
      },
      gallery: {
        title: 'Gallery',
        intro: 'Screenshots, photos, visual things. Coming soon — need to curate and add images first.',
        placeholder: 'Images coming soon',
      },
      blog: {
        title: 'Blog',
        intro: 'Writing — technical, personal, or somewhere in between. MDX-powered, written in Vim, pushed to deploy.',
        placeholder: 'First post coming soon',
      },
      links: {
        title: 'Links',
        intro: 'Places, people, and tools I keep coming back to. Not comprehensive — just what I actually use and admire.',
      },
    },
    common: {
      playtime: 'Playtime',
      mechanics: 'Mechanics',
      similarTo: 'Similar to',
      why: 'Why',
      alternatives: 'Alternatives',
      buyLearn: 'Buy / Learn more →',
      keyTakeaways: 'Key Takeaways',
      quotes: 'Quotes',
      readIfYouLiked: 'Read if you liked',
      essay: 'essay',
      hardModeOnly: '⚠️ Hard mode only',
      footer: {
        email: 'email',
        copyright: '',
      },
    },
  },
};
