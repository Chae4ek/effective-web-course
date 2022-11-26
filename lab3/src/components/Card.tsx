import { FC } from 'react';
import { PropsCard } from '../types/domain';
import styles from './styles/Card.module.scss';

export const Card: FC<PropsCard> = ({ title, description, imageUrl }) => {
  return (
    <section className={styles.card}>
      <div className={styles.card_image_wrapper}>
        <img className={styles.card_image} src={imageUrl} alt={title} />
      </div>
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_description}>{description}</p>
    </section>
  );
};

interface PropsCardList {
  cardList: PropsCard[];
}

export const CardList: FC<PropsCardList> = ({ cardList }) => {
  return (
    <div className={styles.card_list}>
      {cardList.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};
