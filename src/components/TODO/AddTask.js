import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [value, setValue] = useState('');

    const addItem = () => {
        addTask(value);
        setValue("");
    }
  return ( 
    <div>
        <div className='input-container'>
            <input 
            className='input-box' type='text'
            placeholder='Add new Task'
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
            }}
            />
            <button onClick={addItem} className='add-btn'>ADD</button>
        </div>
    </div>
  )
}

export default AddTask