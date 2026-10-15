import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Stagiaire from './Stagiaire';
import styles from './ListStagiaire.module.css';

function ListStagiaire() {
  const stagiaires = useSelector((state) => state.stagiaires.liste);

  return (
    <div className={styles.liste}>
      {stagiaires.map((s) => (
        <Link key={s.nom} to={`/${s.nom}`}>
          <Stagiaire image={s.image} nom={s.nom} />
        </Link>
      ))}
    </div>
  );
}

export default ListStagiaire;