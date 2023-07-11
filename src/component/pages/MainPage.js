import React, { useEffect, useState } from "react";
import "../css/main.css";
import NavBar from "./NavBar";
import Slider from "./Slider";
import MiniNavBar from "./MiniNavBar";
import MovieCard from "./MovieCard";
import axios from "axios";
import Movie from "./movieApi";
import Footer from "./Footer";

const uniqueList = [
  ...new Set(
    Movie.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

// console.log(uniqueList);

const MainPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  //   axios.get("localhost:8181/getMovies").then((response) => {
  //     console.log(response);
  //   });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:9191/getMovies");
        setMovieList(res.data);
        // alert("Fetched");
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const uniqueList = [
          ...new Set(
            movieList.map((curElem) => {
              return curElem.category;
            })
          ),
          "All",
        ];
        setCategoryList(uniqueList);
        // alert("Fetched");
        console.log(uniqueList);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, []);

  const filterItem = (category) => {
    if (category === "All") {
      setMovieList(movieList);
      return;
    }

    const updatedList = movieList.filter((curElem) => {
      return curElem.category === category;
    });

    setMovieList(updatedList);
  };
  return (
    <>
      <NavBar />
      <Slider />
      <div className="row">
        <div className="col-lg-12 col-sm-12 col-md-6">
          <h1 style={{ textAlign: "center", color: "white" }}>Movies</h1>
        </div>
      </div>
      <MiniNavBar filterItem={filterItem} categoryList={categoryList} />
      <MovieCard movieList={movieList} />
      <Footer />
    </>
  );
};

export default MainPage;
