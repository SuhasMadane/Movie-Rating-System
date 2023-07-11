import React from "react";
import "../css/movietable.css";
import { Button } from "bootstrap";
const UserTable = ({ userList }) => {
  return (
    <div>
      <h2>User Table</h2>
      <div class="table-wrapper">
        <table class="fl-table">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Username</th>
              <th>Useremail</th>
              <th>Password</th>
              <th>Update Action</th>
              <th>Delete Action</th>
            </tr>
          </thead>
          <tbody />
          {userList.map((curElem) => {
            const { userId, username, useremail, password } = curElem;
            return (
              <tr>
                <td>{curElem.userId}</td>
                <td>{curElem.username}</td>
                <td>{curElem.useremail}</td>
                <td>{curElem.password}</td>
                <td>
                  <button className="update">Update</button>
                </td>
                <td>
                  <button className="delete">Delete</button>
                </td>
              </tr>
            );
          })}

          <tbody />
        </table>
      </div>
    </div>
  );
};

export default UserTable;
