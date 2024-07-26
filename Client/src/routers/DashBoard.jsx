import React from 'react'
import CompainedTopCard from '../components/MainBody/TaskCard/CombainerCard/CompainedTopCard'
import TaskListHome from '../components/MainBody/TaskListHome/TaskListHome'
import EmployeeDetails from '../components/MainBody/EmployeeDetails/EmployeeDetails'


const DashBoard = () => {
  return (
    <>
        <CompainedTopCard />
          <div className="d-flex mt-5 justify-content-around">
            <div className="card shadow rounded border-0 task_title_list" >
              <TaskListHome />
            </div>
            <div className="card shadow rounded border-0 employee_list">
              <EmployeeDetails />
            </div>
          </div>
    </>
  )
}

export default DashBoard