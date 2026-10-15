import { configureStore } from '@reduxjs/toolkit';
import stagiaireReducer from './stagiaireSlice';

export const store = configureStore({
  reducer: {
    stagiaires: stagiaireReducer,
  },
});