import React, { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import { Card } from "react-bootstrap";

import TopCardTask from "../components/TaskRoute/TopCardTask";
import DetailsCardTask from "../components/TaskRoute/DetailsCardTask";
import { fetchTasks } from "../../redux/taskSlice";
import MenuCard from "../components/Card/MenuCard";
import DeleteTask from "../components/Forms/DeleteTask";

const Task = () => {
  const tasks = useSelector((state) => state.tasks.tasks)
  const dispatch = useDispatch()

  const todoTasks = tasks.filter((task) => task.stage === 'todo')
  const pendingTasks = tasks.filter((task) => task.stage === 'pending')
  const completedTasks = tasks.filter((task) => task.stage === 'completed')
 
  useEffect(()=> {
    dispatch(fetchTasks)
  }, [dispatch])
  return (
    <>
      <div className="d-flex flex-column p-3">
        <h3>Tasks</h3>
        <div className="row">

          <div className="col-4 ">
            <div className="mb-4">
              <TopCardTask name={"todo"} />
            </div>

        {todoTasks.map((task) => (
            <DetailsCardTask task={task} />
        ))}

            
          </div>

          <div className="col-4">
            <div className="mb-4">
              <TopCardTask name={"pending"} />
            </div>

          {pendingTasks.map((task) => (
            <DetailsCardTask task={task}/>
          ))}

          </div>

          <div className="col-4">
            <div className="mb-4">
              <TopCardTask name={"completed"} />
            </div>

          {completedTasks.map((task) => (
            <DetailsCardTask task={task}/>
          ))}

          </div>
        </div>

      </div>

    </>
  );
};

export default Task;
