import React from "react";
import "../css/movietable.css";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";

const MovieTable = ({ movieList, onDelete }) => {
  const navigate = useNavigate();

  let updateAction = (movieData) => {
    navigate("/updatemovie", { state: movieData });
  };

  return (
    <div>
      <h2>Movie Table</h2>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Movie Id</th>
              <th>MovieName</th>
              <th>Category</th>
              <th>Description</th>
              <th>Rating</th>
              <th>Image Path</th>
              <th>Update Action</th>
              <th>Delete Action</th>
            </tr>
          </thead>
          <tbody>
            {movieList.map((curElem) => {
              const {
                movieId,
                category,
                moviename,
                imgPath,
                descript,
                rating,
              } = curElem;

              return (
                <tr key={movieId}>
                  <td>{curElem.movieId}</td>
                  <td>{curElem.moviename}</td>
                  <td>{curElem.category}</td>
                  <td>{curElem.descript}</td>
                  <td>{curElem.rating}</td>
                  <td>{curElem.imgPath}</td>
                  <td>
                    <button
                      className="update"
                      onClick={() => updateAction(curElem)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => onDelete(curElem.moviename)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieTable;
