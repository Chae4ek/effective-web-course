import { useLocation, useParams } from 'react-router-dom';
import {
  CardsStore,
  charactersStore,
  comicsStore,
  seriesStore
} from '../store/CardsStore';
import { observer } from 'mobx-react-lite';
import { PropsLink } from '../types/domain';
import styles from './styles/CardDetails.module.scss';

export default function CardDetails() {
  const store: CardsStore = (() => {
    const location = useLocation();
    if (/^[/]characters/.test(location.pathname)) return charactersStore;
    if (/^[/]comics/.test(location.pathname)) return comicsStore;
    if (/^[/]series/.test(location.pathname)) return seriesStore;
    throw new Error(`unknown location: "${location.pathname}"`);
  })();
  // TODO: replace to fetch only one character/comic/series
  store.fetchStore();

  const { id } = useParams();

  const CardView = observer<{ store: CardsStore }>(({ store }) => {
    const card = store.getCardById(id === undefined ? 0 : parseInt(id));

    return (
      <div className={styles.card_details}>
        <img
          className={styles.card_details__image}
          src={card?.imageUrl}
          alt={card?.title}
        />
        <div className={styles.card_details__columns}>
          <section className={styles.card_details__column}>
            <h2 className={styles.card_details__column_title}>{card?.title}</h2>
            <p className={styles.card_details__column_description}>
              {card?.description}
            </p>
          </section>
          <section className={styles.card_details__column}>
            <h2 className={styles.card_details__column_title}>
              {card?.firstList.title}
            </h2>
            {card?.firstList.links.map((link) => (
              <LinkView link={link} key={card.id} />
            ))}
          </section>
          <section className={styles.card_details__column}>
            <h2 className={styles.card_details__column_title}>
              {card?.secondList.title}
            </h2>
            {card?.secondList.links.map((link) => (
              <LinkView link={link} key={card.id} />
            ))}
          </section>
        </div>
      </div>
    );
  });

  const LinkView = observer<{ link: PropsLink }>(({ link }) => (
    <a className={styles.card_details__column_link} href={link.gateway}>
      {link.title}
    </a>
  ));

  return <CardView store={store} />;
}
