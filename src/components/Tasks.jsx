import React from "react";
import '../stylesheets/Tasks.css'
import { AiFillDelete } from "react-icons/ai";

function Task({id, text, complete, completeTaskMethod, deleteTask}){
    return (
        <div className={complete?'task-container complete':'task-container'}>
            <div className="task-text" onClick={()=> completeTaskMethod(id)}>
                {text}
            </div>
            <div className="task-container-icon" onClick={()=>deleteTask(id)}> 
                <AiFillDelete className="task-icon"/>
            </div>
        </div>
    )
}

export default Task
