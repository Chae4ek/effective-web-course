import { Link } from 'react-router-dom';
import routes from '../config/routes';
import styles from './styles/Empty.module.scss';

export default function Empty() {
  return (
    <div className={styles.info}>
      <h2>Nothing to see here!</h2>
      <Link to={routes.characters}>Go to the characters page</Link>
    </div>
  );
}
