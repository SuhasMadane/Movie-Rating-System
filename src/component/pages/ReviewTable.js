import React from "react";
import "../css/movietable.css";
import { Button } from "bootstrap";
const ReviewTable = ({ movieList }) => {
  return (
    <div>
      <h2>Movie Table</h2>
      <div class="table-wrapper">
        <table class="fl-table">
          <thead>
            <tr>
              <th>MovieName</th>
              <th>Category</th>
              <th>Description</th>
              <th>Rating</th>
              <th>Image Path</th>
              <th>Update Action</th>
              <th>Delete Action</th>
            </tr>
          </thead>
          <tbody />
          {movieList.map((curElem) => {
            const { movieId, category, moviename, imgPath, descript, rating } =
              curElem;
            return (
              <tr>
                <td>{curElem.moviename}</td>
                <td>{curElem.category}</td>
                <td>{curElem.descript}</td>
                <td>{curElem.rating}</td>
                <td>{curElem.imgPath}</td>
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

export default ReviewTable;
