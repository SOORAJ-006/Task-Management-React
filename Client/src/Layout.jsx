import React , {useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from "../redux/taskSlice";
import { fetchUsers } from "../redux/userSlice";
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Aside from './components/SideBar/Aside'

const Layout = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchUsers());
  }, [dispatch]);

    // Selecting the tasks and users state
    const tasksLoading = useSelector((state) => state.tasks.loading);
    const usersLoading = useSelector((state) => state.users.loading);

    if (tasksLoading || usersLoading) {
      return <div>Loading...</div>;
    }

  return (
    <>
        <section className="d-flex bg-light section_main ">
        <Aside />
        <div className="main_body d-flex flex-column">
          <Header />
          <Outlet />
        </div>
      </section>
    </>
  )
}

export default Layout