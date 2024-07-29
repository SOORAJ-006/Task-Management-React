import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./EmployeeDetails.css";

const EmployeeDetails = () => {

  const users = useSelector((state) => state.users.users);
  
  useEffect(() => {
      console.log('the users data from EmployeeDetails : ' , users)
  } , [])

  return (
    <>
      <table class="table fs-5">
        <thead>
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Status</th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="d-flex align-items-center gap-2">
                {}
                <div className="Employee_Details_Icon text-white bg-primary rounded-5 d-flex justify-content-center align-items-center">
                  {}
                </div>
                {user.name}
              </td>
              <td>{user.status}</td>
              <td>{user.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeDetails;


