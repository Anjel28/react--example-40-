import React, {useContext } from 'react';
import { MeterContext} from './MeterContext';

const MeterDisplay:React.FC=()=> {
    const meter = useContext(MeterContext);

    if(!meter) return<p>Meter Context not Found</p>;
    return<h2>Current Meter Reading: {meter.reading} units</h2>;

}

export default MeterDisplay;