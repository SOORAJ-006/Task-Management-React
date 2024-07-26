import React from 'react'
import {useSelector} from 'react-redux'
import { Card } from 'react-bootstrap'

const DetailsCardTask = ({task}) => {

    const users = useSelector((state) =>state.users.users)
    const user = users.find((user) => user._id === task.userId);

    const taskDate = new Date(task.date).toLocaleDateString();
    const capitalizedPriority = task.priority.toUpperCase()
  return (
    <>
        <Card className='mb-3'>
            <div className='d-flex flex-column p-3'>

                <div className='d-flex justify-content-between align-items-center mb-3'>   
                    <span>{capitalizedPriority} PRIORITY</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                    </svg>
                </div>

                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-start align-items-center username gap-3'>
                        <div className={ `circle_Details rounded-5 ${task.priority === 'high' ? 'bg-danger' : task.priority === 'medium' ? 'bg-warning' : 'bg-primary'} `}></div> <h5>{task.title}</h5>
                    </div>
                    <div>
                        <span>{taskDate}</span>
                    </div>
                </div>

                <hr />
                <div className='d-flex justify-content-between align-items-center username'>
                    <span >{user.name}</span>
                    <div className='circle_Details bg-primary rounded-5 text-white d-flex justify-content-center align-items-center'>{user.name[0]}</div>
                </div>
                <hr />


            </div>
        </Card>
    </>
  )
}

export default DetailsCardTask