//PROPS EXAMPLE INTERFACE 
import React from 'react';

interface Props{
    address: string;
    rooms: number;
    hasGarage?: boolean;
}

const House:React.FC<Props>=({address, rooms, hasGarage})=> {
return(
    <div>
        <h2>Address: {address}</h2>
        <p>Rooms: {rooms}</p>
        <p>Garage: {hasGarage ? "yes": "no"}</p>
    </div>
)
}

export default House;
