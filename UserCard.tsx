//TYPE PROPS EXAMPLE
import React from 'react';

type UserCardProps = {
    name: string;
    age: number;
    isOnline?: boolean;
}

const UserCard:React.FC<UserCardProps> = ({name, age, isOnline}) => {
    return(
        <div style={{border: '1px solid gray',padding: '10px', width:'125px',  }}>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Status: {isOnline? "Online" : "Offline"}</p>
        </div>
    )
}

export default UserCard;