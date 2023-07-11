import "../css/main.css";
import { Link, useNavigate } from "react-router-dom";

// import "../css/contactus.css";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieTable from "./MovieTable";

function DisplayMovie() {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

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

  // const handleMovieDelete = (movieName) => {

  //   axios
  //     .try{}
  //     .delete(`http://localhost:9191/movies/${movieName}`)
  //     .then((response) => {
  //       console.log("Movie deleted successfully");
  //       // Update the movie list by filtering out the deleted movie
  //       setMovieList(
  //         movieList.filter((movie) => movie.movieName !== movieName)
  //       );
  //     })
  //     alert("Movie Deleted Succesfully");
  //     .catch((error) => {
  //       console.error("Error deleting movie:", error);
  //       alert("Error ocurred not able to delete movie");
  //     });
  // };

  const handleMovieDelete = async (movieName) => {
    try {
      const url = `http://localhost:9191/delete-movie?moviename=${movieName}`;

      const response = await axios.get(url);
      console.log(response.data);
      setMovieList(movieList.filter((movie) => movie.movieName !== movieName));

      if (response.status === 200) {
        alert("Movie Deleted");
        navigate("/movieud");
      }
      throw new Error();
    } catch (error) {
      alert("Error Ocurred");
      navigate("/movieud");
    }
  };
  return (
    <>
      <Header />
      <MovieTable movieList={movieList} onDelete={handleMovieDelete} />
    </>
  );
}

function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to={"/main"}> Main</Link>
          <Link to={"/userud"}> Users</Link>
          <Link to={"/reviewud"}> Reviews</Link>
          <Link to={"/displaycontact"}> contact us data </Link>
          <Link to={"/addmoviecopy"}> Add Movie </Link>
        </nav>
      </header>
    </>
  );
}

export default DisplayMovie;
