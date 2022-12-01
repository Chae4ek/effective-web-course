import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from '../config/routes';
import marvelLogo from '../static/marvel_logo.svg';
import styles from './styles/Header.module.scss';

export const Header: FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const setPage = (page: number, title: string) => {
    document.title = title;
    setCurrentPage(page);
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const trySetPage = (page: number, title: string, pattern: RegExp) => {
      if (pattern.test(pathname)) setPage(page, title);
    };
    setPage(0, 'Marvel');
    trySetPage(1, 'Marvel | Characters', RegExp(`^${routes.characters}`));
    trySetPage(2, 'Marvel | Comics', RegExp(`^${routes.comics}`));
    trySetPage(3, 'Marvel | Series', RegExp(`^${routes.series}`));
  }, [pathname]);

  const getStyle = (page: number) => {
    let style = styles.header_link;
    if (currentPage === page) style += ` ${styles.header_link__current_page}`;
    return style;
  };

  return (
    <header className={styles.non_selectable}>
      <img src={marvelLogo} alt="Marvel Logo" className={styles.header_title} />
      <nav>
        <Link className={getStyle(1)} to={routes.characters}>
          Characters
        </Link>
        <Link className={getStyle(2)} to={routes.comics}>
          Comics
        </Link>
        <Link className={getStyle(3)} to={routes.series}>
          Series
        </Link>
      </nav>
    </header>
  );
};
