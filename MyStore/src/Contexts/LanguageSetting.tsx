import React, { createContext, useContext, useState } from "react";
import { setModoOscuro } from "../store/settingslice";

type Modo = {
    modoOscuro: boolean;
}| null;

type ThemeContextType = {
    modo: boolean;
    
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider');
    return context;
}

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {

    const [modo, setModo] = useState(false)
    return (
        <ThemeContext.Provider value={{modo}}>
            {children}
        </ThemeContext.Provider>
    );
}