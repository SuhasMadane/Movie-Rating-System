import React, { useState } from "react";
import "../css/addmovie.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddMoviee = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    movieName: "",
    category: "",
    descript: "",
    imgPath: "",
  });

  // const goToMainAction = () => {
  //   navigate("/main");
  // };

  // const goToTodoHome = () => {
  //   navigate("/");
  // };

  // const goTosignin = () => {
  //   navigate("/");
  // };

  // const validateEmail = (email) => {
  //   // A simple email validation pattern
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailPattern.test(email);
  // };

  // const validatePassword = (password) => {
  //   return password.length >= 8;
  // };

  const addMovieAction = async () => {
    // Validate form inputs
    // if (user.Name.length < 5) {
    //   alert("Name should be at least 5 characters long");
    //   return;
    // }

    // if (!validateEmail(user.email)) {
    //   alert("Invalid email address");
    //   return;
    // }

    // if (!validatePassword(user.password)) {
    //   alert("Password should be at least 8 characters long");
    //   return;
    // }

    // Backend registration logic
    try {
      console.log();
      // const url = `http://localhost:4000/adduser?Name=${user.Name}&email=${user.email}&password=${user.password}`;
      const url = `http://localhost:9191/add-movie?moviename=${movie.movieName}&category=${movie.category}&descript=${movie.descript}&imgPath=${movie.imgPath}`;
      // const res = await fetch(url);

      // axios.get(url).then((response) => {
      //   console.log(response.data);
      //   // setListOfTrains(response.data);
      // });

      const response = await axios.get(url);
      console.log(response.data);

      if (response.status === 200) {
        alert("Movie added succesfully");
        navigate("/movieud");
      }
      throw new Error();
    } catch (error) {
      alert("Movie already added");
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
      <div class="wrapper">
        <h2>Add Movie</h2>
        <form action="#">
          <div class="input-box">
            <input
              type="text"
              name="movieName"
              placeholder="Movie Name"
              required
              value={movie.movieName}
              onChange={handlerMovieNameAction}
            />
          </div>
          <div class="input-box">
            <input
              type="text"
              name="category"
              value={movie.category}
              onChange={handlerCategoryAction}
              placeholder="Category"
              required
            />
          </div>
          <div class="input-box">
            <input
              type="text"
              name="descript"
              value={movie.descript}
              onChange={handlerDescriptAction}
              placeholder="Description"
              required
            />
          </div>
          <div class="input-box">
            <input
              type="text"
              name="imgPath"
              value={movie.imgPath}
              onChange={handlerImgPathAction}
              placeholder="Image path"
              required
            />
          </div>
          <div class="input-box button">
            {/* <input type="Submit" value="Add Movie" onClick={addMovieAction} /> */}
            <button type="submit" onClick={addMovieAction}>
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </body>
  );
};

export default AddMoviee;
