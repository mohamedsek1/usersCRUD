import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <nav className={styles.header}>
      <Link to="/" className={styles.lien}>Liste des stagiaires</Link>
      <Link to="/add" className={styles.lien}>Ajouter un stagiaire</Link>
    </nav>
  );
}

export default Header;