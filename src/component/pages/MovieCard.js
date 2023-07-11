import styles from "../css/moviecard.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const MovieCard = ({ movieList }) => {
  return (
    <>
      <div className="card-container">
        {movieList.map((curElem) => {
          const { movieId, category, moviename, imgPath, descript } = curElem;

          return (
            <div className="whole" key={movieId}>
              <div className="wrapper">
                <div className="card">
                  <img src={imgPath} alt={moviename} />
                  <div className="info">
                    <h1>{moviename}</h1>
                    <p>{descript}</p>
                    <h2>
                      <i className="fa fa-star" aria-hidden="true"></i> 8.9
                    </h2>
                    <button className="idea">Stream Now</button>
                    <Link to={`/review2?movieName=${moviename}`}>
                      <button>Rate Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieCard;
