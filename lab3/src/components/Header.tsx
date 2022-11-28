import { FC } from 'react';
import { Link } from 'react-router-dom';
import marvelLogo from '../static/marvel_logo.svg';
import styles from './styles/Header.module.scss';

interface Props {
  currentPage: number;
  title: string;
}

export const Header: FC<Props> = ({ currentPage, title }) => {
  document.title = title;

  const getStyle = (page: number) => {
    let style = styles.header_link;
    if (currentPage === page) style += ` ${styles.header_link__current_page}`;
    return style;
  };

  return (
    <header className={styles.non_selectable}>
      <img src={marvelLogo} alt="Marvel Logo" className={styles.header_title} />
      <nav>
        <Link className={getStyle(1)} to="/">
          Characters
        </Link>
        <Link className={getStyle(2)} to="/comics">
          Comics
        </Link>
        <Link className={getStyle(3)} to="/series">
          Series
        </Link>
      </nav>
    </header>
  );
};
