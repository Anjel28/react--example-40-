import React,{ useState } from 'react';
import { LoginContext } from './LoginContext';

const LoginProvider:React.FC<{children: React.ReactNode}> = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return(
        <LoginContext.Provider value={{isLoggedIn, login, logout}}>
         {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;