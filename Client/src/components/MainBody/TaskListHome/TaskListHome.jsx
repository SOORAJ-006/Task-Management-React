import React, { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import './TaskListHome.css'
import { Card } from "react-bootstrap";

const TaskListHome = () => {

  const tasks = useSelector((state) =>state.tasks.tasks )
  const users = useSelector((state) => state.users.users)
 
  let user  
  const findUser = (uId) => {
    user = users.find((user) => user._id === uId);
  }

  return (
    <>
      <table class="table fs-5">
        <thead>
          <tr>
            <th scope="col">Task Title</th>
            <th scope="col">Priority</th>
            <th scope="col">Team</th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
            <td className="d-flex align-items-center gap-2"> <div className={`rounded-5 table_priority_color ${task.priority === 'high' ? 'bg-danger' : task.priority === 'medium' ? 'bg-warning' : 'bg-primary' }`}></div> {task.title}</td>
            <td>{task.priority}</td>
            <td>{findUser(task.userId)} {user.name}</td>
            <td>{new Date(task.date).toLocaleDateString()}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TaskListHome;
