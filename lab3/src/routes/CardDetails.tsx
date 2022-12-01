import { Link, useLocation, useParams } from 'react-router-dom';
import {
  CardsStore,
  charactersStore,
  comicsStore,
  seriesStore
} from '../store/CardsStore';
import { observer } from 'mobx-react-lite';
import { PropsCard, PropsLink, PropsLinkList } from '../types/domain';
import styles from './styles/CardDetails.module.scss';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Empty from './Empty';

export default function CardDetails() {
  const store: CardsStore = (() => {
    const location = useLocation();
    if (/^[/]characters/.test(location.pathname)) return charactersStore;
    if (/^[/]comics/.test(location.pathname)) return comicsStore;
    if (/^[/]series/.test(location.pathname)) return seriesStore;
    throw new Error(`unknown location: "${location.pathname}"`);
  })();

  const { id } = useParams();

  const CardView = observer<{ store: CardsStore }>(({ store }) => {
    const [card, setCard] = useState<PropsCard | undefined>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      if (!id) {
        setLoading(false);
        setCard(undefined);
        return;
      }
      setLoading(true);
      store
        .getCardById(id)
        .then((card) => {
          setLoading(false);
          setCard(card);
        })
        .catch(console.error);
    }, [id]);

    if (loading) return <Loading />;
    if (!card) return <Empty />;

    return (
      <div className={styles.card_details}>
        <img
          className={styles.card_details__image}
          src={card.imageUrl}
          alt={card.title}
        />
        <div className={styles.card_details__columns}>
          <section className={styles.card_details__column}>
            <h2 className={styles.card_details__column_title}>{card.title}</h2>
            <p className={styles.card_details__column_description}>
              {card.description}
            </p>
          </section>
          <LinkListView linkList={card.firstList} />
          <LinkListView linkList={card.secondList} />
        </div>
      </div>
    );
  });

  const LinkListView = observer<{ linkList: PropsLinkList }>(({ linkList }) => (
    <section className={styles.card_details__column}>
      <h2 className={styles.card_details__column_title}>{linkList.title}</h2>
      {linkList.links.map((link) => (
        <LinkView link={link} baseUrl={linkList.baseUrl} key={link.id} />
      ))}
    </section>
  ));

  const LinkView = observer<{ link: PropsLink; baseUrl: string }>(
    ({ link, baseUrl }) => (
      <Link
        className={styles.card_details__column_link}
        to={`${baseUrl}/${link.id}`}
      >
        {link.title}
      </Link>
    )
  );

  return <CardView store={store} />;
}
