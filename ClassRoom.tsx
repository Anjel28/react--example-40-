import React, { useState } from 'react';

const ClassRoom:React.FC = () => {
    const [studentPresent, setStudentPresent] = useState<string[]>([]);

    const markPresent = (name: string) =>{
       setStudentPresent(Prev => [...Prev,name]);
    }

    const markAbsent = (name: string) => {
        setStudentPresent(Prev => Prev.filter(Student => Student !== name));
    }
    return(
        <div>
            <h2>Presents.Students</h2>
            <button onClick={() => markPresent('Amit')}style={{margin:'10px'}}>Mark Amit Present</button>
      <button onClick={() => markPresent('Priya')} style={{margin: '10px'}}>Mark Priya Present</button>
      <button onClick={() => markAbsent('Amit')}style={{color: 'red', margin: '10px'}}>Mark Amit Absent</button>
            <ul>
           {studentPresent.map((student, index) => (
            <li key ={index}>{student}</li>
           ))}
            </ul>
        </div>
    )
}

export default ClassRoom;
