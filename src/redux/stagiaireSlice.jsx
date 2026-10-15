import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  liste: [
    { image: 'zaid.jpg', nom: 'Zaid', prenom: 'Riyad', filiere: 'TDI' },
    { image: 'salah.jpg', nom: 'Mohamed', prenom: 'Salah', filiere: 'TBA' },
    { image: 'mahrez.jpg', nom: 'Riyad', prenom: 'Mahrez', filiere: 'NPM' },
    { image: 'bono.jpg', nom: 'Yassine', prenom: 'Bono', filiere: 'NGL' }
  ],
};

const stagiaireSlice = createSlice({
  name: 'stagiaires',
  initialState,
  reducers: {
    ajouterStagiaire: (state, action) => {
      state.liste.push(action.payload);
    },
    modifierStagiaire: (state, action) => {
      const { nomOriginal, stagiaire } = action.payload;
      const index = state.liste.findIndex((item) => item.nom === nomOriginal);

      if (index !== -1) {
        state.liste[index] = stagiaire;
      }
    },
    supprimerStagiaire: (state, action) => {
      const index = state.liste.findIndex((item) => item.nom === action.payload);

      if (index !== -1) {
        state.liste.splice(index, 1);
      }
    },
  },
});

export const { ajouterStagiaire, modifierStagiaire, supprimerStagiaire } = stagiaireSlice.actions;
export default stagiaireSlice.reducer;