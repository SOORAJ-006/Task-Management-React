import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "../redux/store.js";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Layout from "./Layout.jsx";
import DashBoard from "./routers/DashBoard.jsx";
import Task from "./routers/Task.jsx";
import Completed from "./routers/Completed.jsx";
import Progressive from "./routers/Progressive.jsx";
import Todo from "./routers/Todo.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(

   
    <Route path="/" element={<Layout />}>
      <Route path="dashboard" element={<DashBoard />} />
      <Route path="tasks" element={<Task />}></Route>
      <Route path="completed" element={<Completed />}></Route>
      <Route path="progressive" element={<Progressive />}></Route>
      <Route path="todo" element={<Todo />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
      </Provider>
  </React.StrictMode>
);
