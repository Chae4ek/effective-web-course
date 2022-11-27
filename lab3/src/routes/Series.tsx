import { Search } from '../components/Search';
import { switchTheme } from '../themes/themes';
import { CardList } from '../components/Card';
import { seriesStore } from '../store/CardsStore';

export default function Series() {
  seriesStore.fetchStore();

  return (
    <>
      <Search
        title="Series"
        placeholder="Search for Series by Title"
        store={seriesStore}
        onSearchEvent={switchTheme}
      />
      <CardList store={seriesStore} basePath="/series" />
    </>
  );
}
