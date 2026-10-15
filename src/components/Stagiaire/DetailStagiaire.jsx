import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { modifierStagiaire, supprimerStagiaire } from '../../redux/stagiaireSlice';
import styles from './StagiairePages.module.css';

function DetailStagiaire() {
  const { nom } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stagiaire = useSelector((state) =>
    state.stagiaires.liste.find((s) => s.nom === nom)
  );
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ image: '', nom: '', prenom: '', filiere: '' });

  useEffect(() => {
    if (stagiaire) {
      setForm({
        image: stagiaire.image,
        nom: stagiaire.nom,
        prenom: stagiaire.prenom,
        filiere: stagiaire.filiere,
      });
    }
  }, [stagiaire]);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(modifierStagiaire({ nomOriginal: stagiaire.nom, stagiaire: form }));
    setIsEditing(false);
    navigate(`/${encodeURIComponent(form.nom)}`);
  };

  const handleDelete = () => {
    if (window.confirm(`Supprimer le stagiaire ${stagiaire.nom} ?`)) {
      dispatch(supprimerStagiaire(stagiaire.nom));
      navigate('/');
    }
  };

  if (!stagiaire) return <p className={styles.message}>Stagiaire introuvable</p>;

  return (
    <main className={styles.detailContainer}>
      <Link className={styles.backLink} to="/">← Retour aux stagiaires</Link>
      <section className={styles.page}>
        {isEditing ? (
          <>
            <h1 className={styles.title}>Modifier le stagiaire</h1>
            <form className={styles.form} onSubmit={handleUpdate}>
              <input className={styles.input} name="image" aria-label="Lien de l'image" placeholder="Lien de l'image" value={form.image} onChange={handleChange} />
              <input className={styles.input} name="nom" aria-label="Nom" placeholder="Nom" value={form.nom} onChange={handleChange} required />
              <input className={styles.input} name="prenom" aria-label="Prénom" placeholder="Prénom" value={form.prenom} onChange={handleChange} required />
              <input className={styles.input} name="filiere" aria-label="Filière" placeholder="Filière" value={form.filiere} onChange={handleChange} required />
              <div className={styles.actions}>
                <button className={styles.button} type="submit">Enregistrer</button>
                <button className={styles.cancelButton} type="button" onClick={() => setIsEditing(false)}>Annuler</button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h1 className={styles.title}>Fiche du stagiaire</h1>
            <img className={styles.detailImage} src={stagiaire.image} alt={stagiaire.nom} />
            <p className={styles.detailText}><strong>Nom :</strong> {stagiaire.nom}</p>
            <p className={styles.detailText}><strong>Prénom :</strong> {stagiaire.prenom}</p>
            <p className={styles.detailText}><strong>Filière :</strong> {stagiaire.filiere}</p>
            <div className={styles.actions}>
              <button className={styles.button} type="button" onClick={() => setIsEditing(true)}>Modifier</button>
              <button className={styles.deleteButton} type="button" onClick={handleDelete}>Supprimer</button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default DetailStagiaire;