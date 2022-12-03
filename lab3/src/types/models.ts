export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Image;
  comics: ComicList;
  series: SeriesList;
}

export interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: Image;
  characters: CharacterList;
  series: SeriesSummary;
}

export interface Series {
  id: number;
  title: string;
  description: string;
  thumbnail: Image;
  characters: CharacterList;
  comics: ComicList;
}

interface Image {
  path: string;
  extension: string;
}

interface CharacterList {
  items: CharacterSummary[];
}

interface CharacterSummary {
  name: string;
  resourceURI: string;
}

interface ComicList {
  items: ComicSummary[];
}

interface ComicSummary {
  name: string;
  resourceURI: string;
}

interface SeriesList {
  items: SeriesSummary[];
}

interface SeriesSummary {
  name: string;
  resourceURI: string;
}

interface ComicSummary {
  name: string;
  resourceURI: string;
}
