import React, { useEffect, useState } from "react";
import "../css/addmovie.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateMovie = () => {
  const [movie, setMovie] = useState({
    movieName: "",
    category: "",
    descript: "",
    imgPath: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const movieData = location.state;

  useEffect(() => {
    setMovie(movieData);
  }, []);

  const addMovieAction = async () => {
    try {
      const url = `http://localhost:9191/update-movie?&category=${movie.category}&descript=${movie.descript}&imgPath=${movie.imgPath}&moviename=${movie.movieName}`;

      const response = await axios.get(url);
      console.log(response.data);

      if (response.status === 200) {
        alert("Movie Updated successfully");
        navigate("/movieud");
      }
      throw new Error();
    } catch (error) {
      alert("Error Ocurred");
      navigate("/movieud");
    }

    setMovie({
      movieName: "",
      category: "",
      descript: "",
      imgPath: "",
    });
  };

  const handlerMovieNameAction = (e) => {
    let newMovie = { ...movie, movieName: e.target.value };
    setMovie(newMovie);
  };

  const handlerCategoryAction = (e) => {
    let newMovie = { ...movie, category: e.target.value };
    setMovie(newMovie);
  };

  const handlerDescriptAction = (e) => {
    let newMovie = { ...movie, descript: e.target.value };
    setMovie(newMovie);
  };

  const handlerImgPathAction = (e) => {
    let newMovie = { ...movie, imgPath: e.target.value };
    setMovie(newMovie);
  };

  return (
    <body>
      <div className="wrapper">
        <h2>Update Movie</h2>
        <form action="#">
          <div className="input-box">
            <input
              type="text"
              name="movieName"
              placeholder="Movie Name"
              required
              value={movie.movieName}
              onChange={handlerMovieNameAction}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="category"
              value={movie.category}
              onChange={handlerCategoryAction}
              placeholder="Category"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="descript"
              value={movie.descript}
              onChange={handlerDescriptAction}
              placeholder="Description"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="imgPath"
              value={movie.imgPath}
              onChange={handlerImgPathAction}
              placeholder="Image path"
              required
            />
          </div>
          <div className="input-box button">
            <button type="submit" onClick={addMovieAction}>
              Update Movie
            </button>
          </div>
        </form>
      </div>
    </body>
  );
};

export default UpdateMovie;
