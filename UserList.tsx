import React, { useState } from 'react';

const UserList: React.FC = ()=> {
    const [task, setTask] = useState<string[]>([]);

    const addItem = (item: string) => {
        setTask([...task,item]);
    }

    const removeItem = (index: number) => {
        const updateTask = task.filter((_,i ) => i !== index);
        setTask(updateTask);
    }
    return(
        <div>
            <h2>My To-Do-List Task</h2>
            <button onClick={()=> addItem('name')}>Add Name</button>
             <button onClick={()=> addItem('username')}>Add UserName</button>
              <button onClick={()=> addItem('email')}>Add Email</button>
              <ul>
                {task.map((item, index) => (
                    <li key={index}>
                        {item}<button onClick={()=>removeItem(index)}></button>
                    </li>
                ))}
              </ul>
        </div>
    )
}

export default UserList;