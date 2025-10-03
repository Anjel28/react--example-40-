import React, { useContext } from 'react';
import {MeterContext} from './MeterContext';

const MeterControl:React.FC = () => {
    const meter = useContext(MeterContext);

    if (!meter) return null;

    const increase = () => meter.updateReading(meter.reading + 10);

    return <button onClick={increase}>Add 10 units</button>
}

export default MeterControl;