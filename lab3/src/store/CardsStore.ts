import { observable, makeObservable, runInAction } from 'mobx';

import api from '../api/api';
import { PropsCard } from '../types/domain';

export abstract class CardsStore {
  @observable
  cards: PropsCard[] = [];

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  getCardById(id: number) {
    return this.cards.find((card) => card.id === id);
  }

  async fetchStore() {
    try {
      if (this.loading) return;
      runInAction(() => (this.loading = true));

      const cards = await this.getCards();

      runInAction(() => {
        this.cards = cards;
        this.loading = false;
      });
    } catch (error) {
      console.error(error);
      runInAction(() => (this.loading = false));
    }
  }

  protected abstract getCards(): Promise<PropsCard[]>;
}

class CharactersStore extends CardsStore {
  protected async getCards(): Promise<PropsCard[]> {
    const list = await api.getCharactersList();
    return list.map(
      (character): PropsCard => ({
        id: character.id,
        title: character.name,
        description:
          character.description === ''
            ? 'No description provided'
            : character.description,
        imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        firstList: {
          title: 'Comics',
          links: character.comics.items.map((item) => ({
            title: item.name,
            gateway: item.resourceURI
          }))
        },
        secondList: {
          title: 'Series',
          links: character.series.items.map((item) => ({
            title: item.name,
            gateway: item.resourceURI
          }))
        }
      })
    );
  }
}

class ComicsStore extends CardsStore {
  protected async getCards(): Promise<PropsCard[]> {
    const list = await api.getComicsList();
    return list.map(
      (comic): PropsCard => ({
        id: comic.id,
        title: comic.title,
        description:
          comic.description === ''
            ? 'No description provided'
            : comic.description,
        imageUrl: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        firstList: {
          title: 'Characters',
          links: comic.characters.items.map((item) => ({
            title: item.name,
            gateway: item.resourceURI
          }))
        },
        secondList: {
          title: 'Series',
          links: [
            { title: comic.series.name, gateway: comic.series.resourceURI }
          ]
        }
      })
    );
  }
}

class SeriesStore extends CardsStore {
  protected async getCards(): Promise<PropsCard[]> {
    const list = await api.getSeriesList();
    return list.map(
      (series): PropsCard => ({
        id: series.id,
        title: series.title,
        description:
          series.description === ''
            ? 'No description provided'
            : series.description,
        imageUrl: `${series.thumbnail.path}.${series.thumbnail.extension}`,
        firstList: {
          title: 'Characters',
          links: series.characters.items.map((item) => ({
            title: item.name,
            gateway: item.resourceURI
          }))
        },
        secondList: {
          title: 'Comics',
          links: series.comics.items.map((item) => ({
            title: item.name,
            gateway: item.resourceURI
          }))
        }
      })
    );
  }
}

export const charactersStore = new CharactersStore();
export const comicsStore = new ComicsStore();
export const seriesStore = new SeriesStore();
