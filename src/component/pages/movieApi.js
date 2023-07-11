import axios from "axios";
let Movie = [axios.get("http://localhost:8181/getMovies")];
console.log(Movie);
export default Movie;
