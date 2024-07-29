import React, { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { Button, Card } from "react-bootstrap";
import {addTask , editTask} from '../../../redux/taskSlice'
import "./AddTask.css";

const AddTask = ({ handleClose, status , close , formTitle , userId , task}) => {
  
  const taskPriority = task.priority ? task.priority : 'normal'
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch()
  console.log('usr id : ' , userId);
  const [taskStage, setTaskStage] = useState(status);

 
  const [formData, setFormData] = useState({
    title: task.title || "",
    priority: task.priority || "normal",
    stage: task.stage || status,
    userId: task.userId || "",
  });

  useEffect(() => {
    setTaskStage(task.stage ? task.stage : status);
    console.log("formData : " , formData);
  }, [status , formData]);



  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {


        if(task){

          const response = await fetch(`http://localhost:3001/tasks/${task._id} `, {
            method:'PUT',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
        })
          if(!response){
            alert('response Error')
        }
        const responseData = await response.json()
        console.log("responseData : " , responseData)
        dispatch(editTask(responseData))

        }
        else{

          const response = await fetch('http://localhost:3001/tasks' , {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
        })
          if(!response){
            alert('response Error')
        }
        const responseData = await response.json()
        console.log("responseData : " , responseData)
        dispatch(addTask(responseData));

        }


        
       
        handleClose()

    } catch (error) {
        console.log(error)
    }
    
  };


// Title change
  const handleTitleChange = (e) => {
    e.preventDefault()
    const {name , value} = e.target
    setFormData({
        ...formData,
        title : value
    })
  }

// userChange
const handleUserChange = (e) => {
    e.preventDefault()
    const {name , value} = e.target
    setFormData({
        ...formData,
        userId : value
    })
}

// priority
const handlePriorityChange = (e) => {
    e.preventDefault()
    const {name, value} =e.target
    setFormData({
        ...formData,
        priority: value
    })
}

// stage
const handleTaskStageChange = (e) => {
    e.preventDefault()
    setTaskStage(e.target.value);
    const {value} = e.target
    setFormData({
        ...formData,
        stage: value
    })
    
  };




  return (
    <>
      <Card className="card card_main">
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="d-flex justify-content-between align-items-center top_close mb-3">
            <h5 className="fs-3">{formTitle ? formTitle : 'Add Task'}</h5>
            <svg
              onClick={handleClose}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>

          <form onSubmit={handleFormSubmit} id="form">
            <div className="input_div mb-3">
              <span className="mb-2 fs-5">Task Title</span>
              <input
               onChange={handleTitleChange}
                type="text"
                class="form-control"
                placeholder="Task Title"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                value={formData.title}
              ></input>
            </div>

            <div className="input_div mb-3">
              <span className="mb-2 fs-5">Assign Task To:</span>
              <select onChange={handleUserChange} class="form-select" aria-label="Default select example" >
                <option selected value={userId ? userId._id : ""}>{task ? `${userId.name} , ${userId.role}` : 'Please Select'}</option>
                {users.map((user) => (
                  <option key={user._id} value={user._id}>
                  {user.name}, {user.role}
                </option>
                ))}
              </select>
            </div>

            <div className="input_div mb-3">
              <div className="col px-0 mb-3">
                <span className="mb-2 fs-5">Task Stage</span>
                <select
                   
                  class="form-select"
                  value={formData.stage}
                  onChange={handleTaskStageChange}
                  aria-label="Default select example"
                >
                  <option value="todo">ToDo</option>
                  <option value="pending">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div className="col px-0">
                <span className="mb-2 fs-5">Priority</span>
                <select
                onChange={handlePriorityChange}
                value={formData.priority}
                class="form-select" aria-label="Default select example">
                  <option selected value="normal">
                    Normal
                  </option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            <div className="div_btn d-flex justify-content-end gap-3">
              <Button onClick={handleClose} className="fs-5">
                Cancel
              </Button>
              <Button type="submit" className="fs-5">
                Submit
              </Button>
            </div>
          </form>

        </div>
      </Card>
    </>
  );
};

export default AddTask;
