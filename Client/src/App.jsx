import {useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from "../redux/taskSlice";
import { fetchUsers } from "../redux/userSlice";
import { useEffect } from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/SideBar/Aside";
import TotalTask from './components/MainBody/TaskCard/Task/TotalTask'
import CompletedTask from "./components/MainBody/TaskCard/Completed/CompletedTask";
import ProgressTask from "./components/MainBody/TaskCard/Progress/ProgressTask";
import TodoTask from "./components/MainBody/TaskCard/Todo/TodoTask";
import CompainedTopCard from "./components/MainBody/TaskCard/CombainerCard/CompainedTopCard";
import TaskListHome from "./components/MainBody/TaskListHome/TaskListHome";
import EmployeeDetails from "./components/MainBody/EmployeeDetails/EmployeeDetails";
import DashBoard from './routers/DashBoard';


function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTasks());
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  //   // Selecting the tasks and users state
  //   const tasksLoading = useSelector((state) => state.tasks.loading);
  //   const usersLoading = useSelector((state) => state.users.loading);

    
  
    // if (tasksLoading || usersLoading) {
    //   return <div>Loading...</div>;
    // }



  return (
    <>

      {/* <section className="d-flex bg-light section_main ">
        <Aside />
        <div className="main_body d-flex flex-column">
          <Header />
          
        </div>
      </section> */}

      <DashBoard/>
    </>
  );
}

export default App;
