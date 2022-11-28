import { FC } from 'react';
import styles from './styles/Search.module.scss';
import { PropsCard } from '../types/domain';

interface Props {
  title: string;
  placeholder: string;
  cardList: PropsCard[];
  onSearchEvent: (foundCards: PropsCard[]) => void;
}

export const Search: FC<Props> = ({
  title,
  placeholder,
  cardList,
  onSearchEvent
}) => {
  return (
    <div className={styles.search}>
      <h1 className={styles.search_title}>
        {title}
        <span>{` (${cardList.length})`}</span>
      </h1>
      <div className={styles.search_interface}>
        <input
          className={styles.search_input}
          type="text"
          placeholder={placeholder}
        />
        <button
          className={styles.search_button}
          onClick={() => onSearchEvent(cardList)}
        >
          Search
        </button>
      </div>
    </div>
  );
};
