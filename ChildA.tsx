import  React  from 'react';

type Props = {
    isOn: boolean;
    toggleTV: () => void;
}

const ChildA: React.FC<Props> = ({isOn, toggleTV}) => {
    return(
    <div>
        <p>TV is {isOn ? 'ON': 'OFF'}</p>
        <button onClick={toggleTV}>Toggle TV</button>
    </div>
    )
}

export default ChildA;