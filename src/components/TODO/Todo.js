import React, { useState } from 'react';

import AddTask from './AddTask'
import ListTask from './ListTask';
import './Todo.css';

const Todo = () => {
    const [tasks, setTask] = useState([
       
    ]);

    const addTask = (title) => {
        if(title.trim() !== ""){
            const newTask = [...tasks, {title}];
            setTask(newTask);
        }

    }

    const removeTask = (index) => {
        const newTask = [...tasks];
        newTask.splice(index, 1);
        setTask(newTask);
    }
  return (
    <>
        <div className='todo-container'>
            <div className='header'>TO-DO APP </div>

            <div className='add-task'>
                 <AddTask addTask = {addTask}/> 
            </div>
            <div className='listed-task'> 
                {tasks.map((task, index) => (
                    <ListTask task = {task} removeTask = {removeTask}
                    index = {index} key={index}
                    />
                ))}
                 
            </div>
        </div>
    </>
  )
}

export default Todo