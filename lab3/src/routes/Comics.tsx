import { CardList } from '../components/Card';
import { switchTheme } from '../themes/themes';
import { Search } from '../components/Search';
import { comicsStore } from '../store/CardsStore';
import routes from '../config/routes';

export default function Comics() {
  comicsStore.fetchStore();

  return (
    <>
      <Search
        title="Comics"
        placeholder="Search for Comics by Title"
        store={comicsStore}
        onSearchEvent={switchTheme}
      />
      <CardList store={comicsStore} basePath={routes.comics} />
    </>
  );
}
