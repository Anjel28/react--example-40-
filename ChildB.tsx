import React from 'react';

type Props = {
    isOff: boolean;
    toggleTV: () => void;
}

const ChildB: React.FC<Props> = ({isOff, toggleTV}) => {
    return(
        <div>
            <p>TV is {isOff ? 'ON': 'OFF'}</p>
            <button onClick={toggleTV}>Toggle TV</button>
        </div>
    )
}

export default ChildB;