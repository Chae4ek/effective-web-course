import { FC } from 'react';
import styles from './styles/Search.module.scss';
import { PropsCard } from '../types/domain';
import { CardsStore } from '../store/CardsStore';
import { observer } from 'mobx-react-lite';

export const Search: FC<{
  title: string;
  placeholder: string;
  store: CardsStore;
  onSearchEvent: (foundCards: PropsCard[]) => void;
}> = ({ title, placeholder, store, onSearchEvent }) => {
  const CardListLengthView = observer<{ store: CardsStore }>(({ store }) => (
    <span>{` (${store.cards.length})`}</span>
  ));

  return (
    <div className={styles.search}>
      <h1 className={styles.search_title}>
        {title}
        <CardListLengthView store={store} />
      </h1>
      <div className={styles.search_interface}>
        <input
          className={styles.search_input}
          type="text"
          placeholder={placeholder}
        />
        <button
          className={styles.search_button}
          onClick={() => onSearchEvent(store.cards)}
        >
          Search
        </button>
      </div>
    </div>
  );
};
