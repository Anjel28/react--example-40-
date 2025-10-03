import  { createContext } from 'react';

export const LoginContext = createContext<{
isLoggedIn: boolean;
login: () => void;
logout: () => void;
}>({
    isLoggedIn: false,
    login: () => {},
     logout: () => {},
})