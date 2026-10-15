import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ajouterStagiaire } from '../../redux/stagiaireSlice';
import styles from './StagiairePages.module.css';

function AddStagiaire() {
  const [form, setForm] = useState({ image: '', nom: '', prenom: '', filiere: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(ajouterStagiaire(form));
    navigate('/');
  };

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Ajouter un stagiaire</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} name="image" placeholder="Saisir le lien de l'image" value={form.image} onChange={handleChange} />
        <input className={styles.input} name="nom" placeholder="Saisir le nom" value={form.nom} onChange={handleChange} />
        <input className={styles.input} name="prenom" placeholder="Saisir le prénom" value={form.prenom} onChange={handleChange} />
        <input className={styles.input} name="filiere" placeholder="Saisir la filière" value={form.filiere} onChange={handleChange} />
        <button className={styles.button} type="submit">Ajouter</button>
      </form>
    </main>
  );
}

export default AddStagiaire;