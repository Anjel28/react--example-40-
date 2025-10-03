import React,  { useContext } from 'react';
import {ThemeContext } from './ThemeContext';

const Header:React.FC = () => {
    const Context = useContext(ThemeContext);

    if(!Context){
        throw new Error('Header must be used within ThemeProvider');
    }
    const { theme, toggleTheme } = Context;
    return(
        <>
        <header style={{backgroundColor: theme === 'Light'? '#fff' : '#333', color: theme === 'Light'? '#000': '#fff'}}>
            <h1>My App</h1>
            <button onClick={toggleTheme}>Switch to {theme === 'Light'? 'Dark': 'Light'}Mode</button>
        </header>
        </>
    )
}

export default Header;