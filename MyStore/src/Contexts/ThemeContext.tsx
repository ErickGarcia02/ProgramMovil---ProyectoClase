import React, { createContext, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store"; 
import { setModoOscuro } from "../store/settingslice";

type Theme = {
  background: string;
  text: string;
  card: string;
  border: string;
  backgroundinner: string;
  botonuppercolor: string,
  bontonuppercolorpresionado: string,
  textbottonuppercolor:string,
  textinner: string
};

type ThemeContextType = {
  isDarkMode: boolean;
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de ThemeProvider");
  return ctx;
};

const lightTheme: Theme = {
  background: "#f6ffffff",
  text: "#000000",
  card: "#ffffffff",
  border: "#00043dff",
  backgroundinner: '#ffff',
  botonuppercolor: '#dfffd7ff',
  bontonuppercolorpresionado:'#fff9c5ff',
  textbottonuppercolor:'#000000ff',
  textinner:"#000000"
};

const darkTheme: Theme = {
  background: "#1a1a1a",
  text: "#ffffff",
  card: "#333333",
  border: "#888888",
  backgroundinner: '#ffff',
  botonuppercolor: '#dfffd7ff',
  bontonuppercolorpresionado:'#fff9c5ff',
  textbottonuppercolor:'#000000ff',
  textinner: "#000000"
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state: RootState) => state.settings.modoOscuro);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    dispatch(setModoOscuro(!isDarkMode));
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
