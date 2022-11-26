import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Search } from '../components/Search';
import { switchTheme } from '../themes/themes';
import { CardList } from '../components/Card';

export const Series = () => {
  const series = [
    {
      id: 1,
      title: 'Ant-Man and the Wasp: Quantumania',
      description: 'No description provided',
      imageUrl:
        'https://terrigen-cdn-dev.marvel.com/content/prod/1x/antmanandthewaspquantumania_lob_crd_02.jpg'
    },
    {
      id: 2,
      title: 'Thor: Love and Thunder',
      description:
        "Marvel Studios' “Thor: Love and Thunder” finds the God of Thunder on a journey unlike anything he's ever faced—one of self-discovery. But his efforts are interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who—to Thor's surprise—inexplicably wields his magical hammer, Mjolnir, as the Mighty Thor.",
      imageUrl:
        'https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_04.jpg'
    },
    {
      id: 3,
      title: 'Doctor Strange in the Multiverse of Madness',
      description:
        "Marvel Studios' “Doctor Strange in the Multiverse of Madness“—a thrilling ride through the Multiverse with Doctor Strange, his trusted friend Wong and Wanda Maximoff, aka Scarlet Witch. “Doctor Strange in the Multiverse of Madness“ opens in U.S. theaters on May 6, 2022.",
      imageUrl:
        'https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg'
    },
    {
      id: 4,
      title: 'Spider-Man: No Way Home',
      description: 'No description provided',
      imageUrl:
        'https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg'
    }
  ];

  return (
    <>
      <Header currentPage={3} title="Marvel | Series" />
      <Search
        title="Series"
        placeholder="Search for Series by Title"
        cardList={series}
        onSearchEvent={switchTheme}
      />
      <CardList cardList={series} />
      <Footer />
    </>
  );
};
