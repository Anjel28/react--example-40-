import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';


const Parent:React.FC = () => {
    const [isOn, setIsOn] = useState(false);

    const  toggleTV = () => setIsOn(Prev => !Prev);

    return(
        <>
        <ChildA isOn={isOn} toggleTV = {toggleTV}></ChildA>
        <ChildB isOff={isOn} toggleTV ={toggleTV}></ChildB>
        </>
    )
}

export default Parent;