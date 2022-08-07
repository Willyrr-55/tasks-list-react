import React from "react";
import '../stylesheets/TaskForm.css'

function TaskForm(props){
    return (
        <form className="form-task">
            <input className="input-task" placeholder="Enter a task" name="task" type="text" />
            <button className="button-task">Add task</button>
        </form>
    )
}

export default TaskForm;