import React, { useState } from 'react';

type RoomState = {
    lightOn: boolean;
    fanSpeed: number;
    temperature: number;
}

const RoomControl = () => {
    const  [room, setRoom] = useState<RoomState>({
        lightOn: false,
        fanSpeed: 0,
        temperature: 24,
    });

    const toggleLight = () => {
        setRoom(Prev => ({...Prev, lightOn: !Prev.lightOn}))
    }

    const increasefanSpeed = () => {
        setRoom(Prev => ({...Prev, fanSpeed: Prev.fanSpeed + 1}))
    }

    const setTemperature = () => {
        setRoom(Prev => ({...Prev,temperature: Prev.temperature }))
    }

    return(
        <div>
            <p>Light: {room.lightOn ? 'On' : 'Off'}</p>
            <p>Fan Speed: {room.fanSpeed}</p>
            <p>Temperature: {room.temperature}°C </p>
            <button onClick ={toggleLight}>Toggle Light</button>
            <button onClick = {increasefanSpeed}>Increase Fan Speed</button>
            <button onClick ={() => setTemperature}>Set Temp to 22°C</button>
        </div>
    )
    
}

export default RoomControl;