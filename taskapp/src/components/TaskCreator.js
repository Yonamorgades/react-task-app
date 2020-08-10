import React  from 'react';
import { useState } from 'react';

function TaskBanner({userName,taskItems, callback}){
    
    const [newTaskName,
        setNewTaskName] = useState('');
    const updateNewTask = e => setNewTaskName(e.target.value);
    
    const createNewTask = () =>{
        callback(newTaskName);
        setNewTaskName('');
    }
    return(
        <div className="my-1">
            <input type="text" className="form-control" onChange={updateNewTask} value={newTaskName}/>
            <button className="btn btn-primary mt-1" onClick={createNewTask}>Add</button>
        </div>
    )
}
export default TaskBanner;




