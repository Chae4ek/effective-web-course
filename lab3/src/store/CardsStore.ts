import { observable, makeObservable, runInAction } from 'mobx';

import api from '../api/api';
import routes from '../config/routes';
import { PropsCard } from '../types/domain';

export abstract class CardsStore {
  @observable
  cards: PropsCard[] = [];

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  async getCardById(id: string) {
    let cachedCard = this.cards.find((card) => card.id === id);

    if (!cachedCard) {
      await this.fetchStore(); // TODO: replace to fetching by id
      cachedCard = this.cards.find((card) => card.id === id);
    }

    return cachedCard;
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
        id: character.id.toString(),
        title: character.name,
        description:
          character.description === ''
            ? 'No description provided'
            : character.description,
        imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        firstList: {
          title: 'Comics',
          baseUrl: routes.comics,
          links: character.comics.items.map((item) => ({
            title: item.name,
            id: item.resourceURI.split('/').pop() ?? 'unknown_id'
          }))
        },
        secondList: {
          title: 'Series',
          baseUrl: routes.series,
          links: character.series.items.map((item) => ({
            title: item.name,
            id: item.resourceURI.split('/').pop() ?? 'unknown_id'
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
        id: comic.id.toString(),
        title: comic.title,
        description:
          comic.description === ''
            ? 'No description provided'
            : comic.description,
        imageUrl: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        firstList: {
          title: 'Characters',
          baseUrl: routes.characters,
          links: comic.characters.items.map((item) => ({
            title: item.name,
            id: item.resourceURI.split('/').pop() ?? 'unknown_id'
          }))
        },
        secondList: {
          title: 'Series',
          baseUrl: routes.series,
          links: [
            {
              title: comic.series.name,
              id: comic.series.resourceURI.split('/').pop() ?? 'unknown_id'
            }
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
        id: series.id.toString(),
        title: series.title,
        description:
          series.description === ''
            ? 'No description provided'
            : series.description,
        imageUrl: `${series.thumbnail.path}.${series.thumbnail.extension}`,
        firstList: {
          title: 'Characters',
          baseUrl: routes.characters,
          links: series.characters.items.map((item) => ({
            title: item.name,
            id: item.resourceURI.split('/').pop() ?? 'unknown_id'
          }))
        },
        secondList: {
          title: 'Comics',
          baseUrl: routes.comics,
          links: series.comics.items.map((item) => ({
            title: item.name,
            id: item.resourceURI.split('/').pop() ?? 'unknown_id'
          }))
        }
      })
    );
  }
}

export const charactersStore = new CharactersStore();
export const comicsStore = new ComicsStore();
export const seriesStore = new SeriesStore();
