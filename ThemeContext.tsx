import React, { createContext } from 'react';

export type Theme = 'Light' | 'Dark';

interface ThemeContextType{
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);