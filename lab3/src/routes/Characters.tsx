import { Search } from '../components/Search';
import { CardList } from '../components/Card';
import { switchTheme } from '../themes/themes';
import { charactersStore } from '../store/CardsStore';
import routes from '../config/routes';

export default function Characters() {
  charactersStore.fetchStore();

  return (
    <>
      <Search
        title="Characters"
        placeholder="Search for Characters by Name"
        store={charactersStore}
        onSearchEvent={switchTheme}
      />
      <CardList store={charactersStore} basePath={routes.characters} />
    </>
  );
}
