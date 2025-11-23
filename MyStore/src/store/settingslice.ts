import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modoOscuro: false,
  notificaciones: false,
  idioma: 'English',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setModoOscuro: (state, action) => {
      state.modoOscuro = action.payload;
    },
    setNotificaciones: (state, action) => {
      state.notificaciones = action.payload;
    },
    setIdioma: (state, action) => {
      state.idioma = action.payload;
    },
  },
});

export const { setModoOscuro, setNotificaciones, setIdioma } =
  settingsSlice.actions;

export default settingsSlice.reducer;
