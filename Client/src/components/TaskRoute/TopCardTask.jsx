import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './TaskRoute.css'
import AddTask from '../Forms/AddTask'

const TopCardTask = ({name}) => {

    const [showForm , setShowForm] = useState(false)
    const handleChange = () => {
        setShowForm(true)
    }

    const handleClose = () => {
        setShowForm(false)
    }

  return (
    <>
        <Card className='top_card'> 
            <div className='d-flex justify-content-between p-2'>
                <div className='d-flex justify-content-center align-items-center gap-2 '>
                    <div className={`${name == 'ToDo' ? 'bg-primary' : name == 'Completed' ? 'bg-success' : 'bg-warning'} circle rounded-4`}></div> <span className='fs-4'>{name}</span>
                </div>

                <div className='d-flex justify-content-center align-items-center felx-1 '>
                    <svg onClick={handleChange} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                    </svg>
                </div>
            </div>
        </Card>



      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
           
            <AddTask handleClose={handleClose} status={name}/>
          </div>
        </div>
      )}
    </>
  )
}

export default TopCardTask