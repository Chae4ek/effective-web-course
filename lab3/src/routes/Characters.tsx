import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Search } from '../components/Search';
import { CardList } from '../components/Card';
import { switchTheme } from '../themes/themes';

export const Characters = () => {
  const characters = [
    {
      id: 1,
      name: '3-D Man',
      description: 'No description provided',
      imageUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
    },
    {
      id: 2,
      name: 'A-Bomb (HAS)',
      description:
        "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
      imageUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg'
    },
    {
      id: 3,
      name: 'Agents of Atlas',
      description: 'No description provided',
      imageUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5.jpg'
    },
    {
      id: 4,
      name: 'Agent Zero',
      description: 'No description provided',
      imageUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790.jpg'
    }
  ];

  const cardList = characters.map((character) => ({
    id: character.id,
    title: character.name,
    description: character.description,
    imageUrl: character.imageUrl
  }));

  return (
    <>
      <Header currentPage={1} title="Marvel | Characters" />
      <Search
        title="Characters"
        placeholder="Search for Characters by Name"
        cardList={cardList}
        onSearchEvent={switchTheme}
      />
      <CardList cardList={cardList} />
      <Footer />
    </>
  );
};
