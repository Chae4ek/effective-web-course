import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CardList } from '../components/Card';
import { switchTheme } from '../themes/themes';
import { Search } from '../components/Search';

export const Comics = () => {
  const comics = [
    {
      id: 1,
      title: 'Fantastic Four: Facsimile Edition (2022) #52',
      description:
        "The first appearance of the Black Panther - from the wild imaginations of Stan Lee and Jack Kirby at the peak of their creative powers! On a mission in the remote African nation of Wakanda, the Fantastic Four encounter T'Challa, the warrior king – and one by one, Reed, Sue, Ben and Johnny are bested by the mighty monarch! But when Wakanda comes under attack by Ulysses Klaw and his monstrous creations made of pure sound, the FF and the Black Panther forge an alliance for the ages – and one of the Marvel Universe's most iconic heroes shows his true mettle! It's one of the all-time great Marvel comic books, boldly re-presented in its original form, ads and all! Reprinting FANTASTIC FOUR (1961) #52.",
      imageUrl:
        'https://i.annihil.us/u/prod/marvel/i/mg/6/c0/63755f7e41d5a/clean.jpg'
    },
    {
      id: 2,
      title: 'Avengers Forever (2021) #11',
      description:
        "The Pillars: Conclusion! The greatest collection of Avengers ever seen has been assembled from across the Multiverse, representing each of the core pillars of the group's infinite incarnations. But for one pivotal figure, there are no other variants to be found anywhere in creation. Robbie Reyes is a Ghost Rider unlike any other. And now at last, his ultimate form must be unleashed. Now rises the All-Rider.",
      imageUrl:
        'https://i.annihil.us/u/prod/marvel/i/mg/c/b0/63755f7fcabd3/clean.jpg'
    },
    {
      id: 3,
      title: 'Alien (2022) #3',
      description:
        "The devil you know...While searching the Xenomorph-infested Tobler-9 for an alien sample that can save humanity, “Steel Team,” the mythical Synthetic Special Operations team, has made a shocking discovery: a colony of humans who have managed to survive there for decades. With only their mutual mistrust in common, the humans and synths strike an uneasy bargain: the alien sample in exchange for Steel Team's help in clearing a subterranean Xenomorph nest. But while the humans have had to sacrifice some of their humanity to survive, Steel Team learns that the ICARUS alien strain has taken on some disturbingly HUMAN tendencies...",
      imageUrl:
        'https://i.annihil.us/u/prod/marvel/i/mg/3/70/63755fa5d1290/clean.jpg'
    },
    {
      id: 4,
      title: 'Star Wars: Revelations (2022) #1',
      description:
        "The can't-miss star wars issue of the year! After WAR OF THE BOUNTY HUNTERS came CRIMSON REIGN…now in the midst of HIDDEN EMPIRE, Qi'ra has shaken the galactic landscape to its core! But what lies beyond for the Rebellion? For the Empire? What role do the bounty hunters play? And what is happening to Doctor Aphra? Witness the next step in the legacy of heroes and scoundrels in the galaxy far, far away as Marc Guggenheim (Han Solo & Chewbacca) is joined by a ragtag team of artists to bring you an explosive tale you won't soon forget! The path to the future of STAR WARS starts here!",
      imageUrl:
        'https://i.annihil.us/u/prod/marvel/i/mg/6/20/637674bea204b/clean.jpg'
    }
  ];

  return (
    <>
      <Header currentPage={2} title="Marvel | Comics" />
      <Search
        title="Comics"
        placeholder="Search for Comics by Title"
        cardList={comics}
        onSearchEvent={switchTheme}
      />
      <CardList cardList={comics} />
      <Footer />
    </>
  );
};
