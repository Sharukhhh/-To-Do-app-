import React from 'react'

const ListTask = ({task, index, removeTask}) => {
  return (
    <>
        <div className='listed-task'>
            {task.title}
            <button onClick={() => {removeTask(index)}} className='delete-btn'>DELETE</button>
        </div>
    </>
  )
}

export default ListTask