import React, { createContext, ReactNode, useState  } from 'react';
import {House} from './types';

type HouseContextType = {
    selectedHouse: House | null;
    setSelectedHouse: (house: House) => void;
}
export  const HouseContext = createContext<HouseContextType  | undefined>(undefined);

const HouseProvider = ({ children }: {children: ReactNode}) => {
const  [selectedHouse, setSelectedHouse] = useState<House | null>(null);

return(
    <HouseContext.Provider value={{selectedHouse, setSelectedHouse}}>
    {children}
    </HouseContext.Provider>
)
}

export default HouseProvider;