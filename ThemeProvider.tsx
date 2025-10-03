import React, { useState } from 'react';
import { ThemeContext, Theme } from './ThemeContext';

const ThemeProvider:React.FC<{children: React.ReactNode }>  = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('Light');

    const toggleTheme = () => {
        setTheme(prev => (prev === 'Light' ? 'Dark' : 'Light'));
    }
    return(
        <>
        <ThemeContext.Provider value={{theme, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
        </>
    )
}

export default ThemeProvider;