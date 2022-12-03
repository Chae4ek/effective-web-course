import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardsStore } from '../store/CardsStore';
import { PropsCard } from '../types/domain';
import { observer } from 'mobx-react-lite';
import styles from './styles/Card.module.scss';

export const Card: FC<
  PropsCard & {
    basePath: string;
  }
> = ({ id, title, description, imageUrl, basePath }) => {
  const navigate = useNavigate();

  return (
    <section
      className={styles.card}
      onClick={() => navigate(`${basePath}/${id}`)}
    >
      <div className={styles.card_image_wrapper}>
        <img className={styles.card_image} src={imageUrl} alt={title} />
      </div>
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_description}>{description}</p>
    </section>
  );
};

export const CardList: FC<{
  store: CardsStore;
  basePath: string;
}> = ({ store, basePath }) => {
  const CardListView = observer<{ store: CardsStore }>(({ store }) => (
    <div className={styles.card_list}>
      {store.cards.map((card) => (
        <CardView card={card} key={card.id} />
      ))}
    </div>
  ));

  const CardView = observer<{ card: PropsCard }>(({ card }) => (
    <Card
      id={card.id}
      title={card.title}
      description={card.description}
      imageUrl={card.imageUrl}
      basePath={basePath}
      firstList={card.firstList}
      secondList={card.secondList}
    />
  ));

  return <CardListView store={store} />;
};
