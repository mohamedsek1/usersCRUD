import styles from './Stagiaire.module.css';

function Stagiaire({ image, nom }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={nom} className={styles.image} />
      <p className={styles.nom}>{nom}</p>
    </div>
  );
}

export default Stagiaire;