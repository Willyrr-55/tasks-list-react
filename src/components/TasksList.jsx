import React, {useState} from "react";
import '../stylesheets/TaskList.css'
import TaskForm from "./TaskForm";
import Task from "./Tasks";

function TaskList(){

    const [tasks, setTasks]= useState([]);

    return (
        <>
            <TaskForm/>
            <div className="list-tasks-container">
                  {
                    tasks.map((v)=>
                        <Task text={v.text}/>
                    )
                  }
            </div>
        </>
    )
}

export default TaskList;