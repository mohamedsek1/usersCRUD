import { useState, useEffect } from 'react';

function StagiairesApi() {
  const [stagiaires, setStagiaires] = useState([]);

  useEffect(() => {
    fetch('http://www.ofppt.ma/api/stagiaires')
      .then((res) => res.json())
      .then((data) => setStagiaires(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Image</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Filière</th>
        </tr>
      </thead>
      <tbody>
        {stagiaires.map((s, index) => (
          <tr key={index}>
            <td><img src={s.image} alt={s.nom} width="50" /></td>
            <td>{s.nom}</td>
            <td>{s.prenom}</td>
            <td>{s.filiere}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StagiairesApi;