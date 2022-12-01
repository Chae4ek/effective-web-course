import { Character, Comic, Series } from '../types/models';

const characterList = {
  items: [
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1',
      name: 'Apocalypse'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/2',
      name: 'Blink'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
      name: 'Colossus'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009313',
      name: 'Gambit'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009349',
      name: 'Holocaust (Age of Apocalypse)'
    }
  ]
};

const comicList = {
  items: [
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/comics/1',
      name: 'Avengers: The Initiative (2007) #14'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/comics/2',
      name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/comics/21546',
      name: 'Avengers: The Initiative (2007) #15'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/comics/21741',
      name: 'Avengers: The Initiative (2007) #16'
    }
  ]
};

const seriesList = {
  items: [
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/series/1',
      name: 'Avengers: The Initiative (2007 - 2010)'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
      name: 'Deadpool (1997 - 2002)'
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/series/2045',
      name: 'Marvel Premiere (1972 - 1981)'
    }
  ]
};

export const characters: Character[] = [
  {
    id: 1,
    name: '3-D Man',
    description: 'No description provided',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
      extension: 'jpg'
    },
    comics: comicList,
    series: seriesList
  },
  {
    id: 2,
    name: 'A-Bomb (HAS)',
    description:
      "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
      extension: 'jpg'
    },
    comics: comicList,
    series: seriesList
  },
  {
    id: 3,
    name: 'Agents of Atlas',
    description: 'No description provided',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5',
      extension: 'jpg'
    },
    comics: comicList,
    series: seriesList
  },
  {
    id: 4,
    name: 'Agent Zero',
    description: 'No description provided',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790',
      extension: 'jpg'
    },
    comics: comicList,
    series: seriesList
  }
];

const seriesSummary = {
  resourceURI: 'http://gateway.marvel.com/v1/public/series/551',
  name: 'Ant-Man (2003 - 2004)'
};

export const comics: Comic[] = [
  {
    id: 1,
    title: 'Fantastic Four: Facsimile Edition (2022) #52',
    description:
      "The first appearance of the Black Panther - from the wild imaginations of Stan Lee and Jack Kirby at the peak of their creative powers! On a mission in the remote African nation of Wakanda, the Fantastic Four encounter T'Challa, the warrior king – and one by one, Reed, Sue, Ben and Johnny are bested by the mighty monarch! But when Wakanda comes under attack by Ulysses Klaw and his monstrous creations made of pure sound, the FF and the Black Panther forge an alliance for the ages – and one of the Marvel Universe's most iconic heroes shows his true mettle! It's one of the all-time great Marvel comic books, boldly re-presented in its original form, ads and all! Reprinting FANTASTIC FOUR (1961) #52.",
    thumbnail: {
      path: 'https://i.annihil.us/u/prod/marvel/i/mg/6/c0/63755f7e41d5a/clean',
      extension: 'jpg'
    },
    characters: characterList,
    series: seriesSummary
  },
  {
    id: 2,
    title: 'Avengers Forever (2021) #11',
    description:
      "The Pillars: Conclusion! The greatest collection of Avengers ever seen has been assembled from across the Multiverse, representing each of the core pillars of the group's infinite incarnations. But for one pivotal figure, there are no other variants to be found anywhere in creation. Robbie Reyes is a Ghost Rider unlike any other. And now at last, his ultimate form must be unleashed. Now rises the All-Rider.",
    thumbnail: {
      path: 'https://i.annihil.us/u/prod/marvel/i/mg/c/b0/63755f7fcabd3/clean',
      extension: 'jpg'
    },
    characters: characterList,
    series: seriesSummary
  },
  {
    id: 3,
    title: 'Alien (2022) #3',
    description:
      "The devil you know...While searching the Xenomorph-infested Tobler-9 for an alien sample that can save humanity, “Steel Team,” the mythical Synthetic Special Operations team, has made a shocking discovery: a colony of humans who have managed to survive there for decades. With only their mutual mistrust in common, the humans and synths strike an uneasy bargain: the alien sample in exchange for Steel Team's help in clearing a subterranean Xenomorph nest. But while the humans have had to sacrifice some of their humanity to survive, Steel Team learns that the ICARUS alien strain has taken on some disturbingly HUMAN tendencies...",
    thumbnail: {
      path: 'https://i.annihil.us/u/prod/marvel/i/mg/3/70/63755fa5d1290/clean',
      extension: 'jpg'
    },
    characters: characterList,
    series: seriesSummary
  },
  {
    id: 4,
    title: 'Star Wars: Revelations (2022) #1',
    description:
      "The can't-miss star wars issue of the year! After WAR OF THE BOUNTY HUNTERS came CRIMSON REIGN…now in the midst of HIDDEN EMPIRE, Qi'ra has shaken the galactic landscape to its core! But what lies beyond for the Rebellion? For the Empire? What role do the bounty hunters play? And what is happening to Doctor Aphra? Witness the next step in the legacy of heroes and scoundrels in the galaxy far, far away as Marc Guggenheim (Han Solo & Chewbacca) is joined by a ragtag team of artists to bring you an explosive tale you won't soon forget! The path to the future of STAR WARS starts here!",
    thumbnail: {
      path: 'https://i.annihil.us/u/prod/marvel/i/mg/6/20/637674bea204b/clean',
      extension: 'jpg'
    },
    characters: characterList,
    series: seriesSummary
  }
];

export const series: Series[] = [
  {
    id: 1,
    title: 'Ant-Man and the Wasp: Quantumania',
    description: 'No description provided',
    thumbnail: {
      path: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/antmanandthewaspquantumania_lob_crd_02',
      extension: 'jpg'
    },
    characters: characterList,
    comics: comicList
  },
  {
    id: 2,
    title: 'Thor: Love and Thunder',
    description:
      "Marvel Studios' “Thor: Love and Thunder” finds the God of Thunder on a journey unlike anything he's ever faced—one of self-discovery. But his efforts are interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who—to Thor's surprise—inexplicably wields his magical hammer, Mjolnir, as the Mighty Thor.",
    thumbnail: {
      path: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_04',
      extension: 'jpg'
    },
    characters: characterList,
    comics: comicList
  },
  {
    id: 3,
    title: 'Doctor Strange in the Multiverse of Madness',
    description:
      "Marvel Studios' “Doctor Strange in the Multiverse of Madness“—a thrilling ride through the Multiverse with Doctor Strange, his trusted friend Wong and Wanda Maximoff, aka Scarlet Witch. “Doctor Strange in the Multiverse of Madness“ opens in U.S. theaters on May 6, 2022.",
    thumbnail: {
      path: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3',
      extension: 'jpg'
    },
    characters: characterList,
    comics: comicList
  },
  {
    id: 4,
    title: 'Spider-Man: No Way Home',
    description: 'No description provided',
    thumbnail: {
      path: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03',
      extension: 'jpg'
    },
    characters: characterList,
    comics: comicList
  }
];
