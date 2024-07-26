import React from "react";
import { useSelector } from "react-redux";
import DetailsCardTask from "../components/TaskRoute/DetailsCardTask";

const Task = () => {
  const tasks = useSelector((state) => state.tasks.tasks)
  const todoTasks = tasks.filter((task) => task.stage === 'todo')
 
  return (
    <>
      <div className="d-flex flex-column p-3">
        <h3>ToDo Tasks</h3>
        <div className="row">
            
        {todoTasks.map((task) => (
          <div className="col-4">
            <DetailsCardTask task={task} />
          </div>
        ))}     
        </div>

      </div>

    </>
  );
};

export default Task;
