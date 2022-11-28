import { FC } from 'react';
import marvelLogo from '../static/marvel_logo.svg';
import styles from './styles/Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer>
      <img src={marvelLogo} alt="Marvel Logo" className={styles.footer_title} />
      <p className={styles.footer_rights}>
        Data provided by Marvel. © 2022 MARVEL
        <a className={styles.footer_link} href="https://developer.marvel.com/">
          developer.marvel.com
        </a>
      </p>
    </footer>
  );
};
