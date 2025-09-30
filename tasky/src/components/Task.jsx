import React from 'react';
import AddTaskForm from './Form';


const Task = (props) =>  {

       return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority">Priority: {props.priority}</p>
            <p>{props.children}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button onClick={props.deleteTask}className='deleteButton'>Delete</button>
            <p style = {{
                backgroundColor: props.priority === 'High' ? 'red' :
                props.priority === 'Medium' ? 'orange' :
                'green',
                padding: "0.2em",
                borderRadius: "0.4em"
                
            }} ></p>
                {props.priority}


        </div>   
    )
}
export default Task;