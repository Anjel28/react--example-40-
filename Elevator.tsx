import { useState } from 'react';

const Elevator: React.FC = () => {
    const [floor, setFloor] = useState<number>(0);

    const goUp = () => setFloor(floor + 1);
    const goDown = () => setFloor(floor - 1);

    return(
        <div>
            <p>Current Floor: {floor}</p>
            <button onClick={goUp}>GoUp</button>
            <button onClick={goDown}>GoDown</button>
        </div>
    )
}

export default Elevator;