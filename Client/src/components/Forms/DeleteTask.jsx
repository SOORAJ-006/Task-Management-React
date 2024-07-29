import React from 'react'
import './DeleteTask.css'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../../../redux/taskSlice'

const DeleteTask = ({userId , task, handleDeleteClose}) => {

    const dispatch = useDispatch()
    const handleDeleteSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/tasks/${task._id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type' : 'application/json',
                },
            })

            if(!response){
                alert('response Error')
            }
            const responseData = await response.json()
            
            dispatch(deleteTask({ _id: task._id }))
            handleDeleteClose()

        } catch (error) {
            throw new Error(error)
        }
    }
  return (
   <>
    <Card>
        <div className='d-flex flex-column justify-content-center align-items-center p-3'>
            <div>
                <h3>Are you sure ?</h3>
            </div>
            <div>
                <Button onClick={handleDeleteSubmit} className='bg-danger me-3'>Delete</Button>
                <Button onClick={handleDeleteClose}>Cancel</Button>
            </div>
        </div>
    </Card>
   </>
  )
}

export default DeleteTask