import { Character, Comic, Series } from '../types/models';
import { characters, comics, series } from './mock';

export default {
  async getCharactersList(): Promise<Character[]> {
    return characters;
  },

  async getCharacter(id: number): Promise<Character | undefined> {
    return characters.find((character) => character.id === id);
  },

  async getComicsList(): Promise<Comic[]> {
    return comics;
  },

  async getComic(id: number): Promise<Comic | undefined> {
    return comics.find((comic) => comic.id === id);
  },

  async getSeriesList(): Promise<Series[]> {
    return series;
  },

  async getSeries(id: number): Promise<Series | undefined> {
    return series.find((series) => series.id === id);
  }
};
