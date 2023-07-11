import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./component/pages/Aboutus";
import Contact from "./component/pages/Contactus";
import MainPage from "./component/pages/MainPage";
import SignIn from "./component/pages/Signinform";
import Signup from "./component/pages/Signup";
import Review from "./component/pages/Review";
import StarRating from "./component/pages/Review2";
import Star from "./component/pages/Star";
import Admin from "./component/pages/Admin";
import DisplayReview from "./component/pages/ReviewUD ";
import DisplayUser from "./component/pages/UserUD";
import DisplayMovie from "./component/pages/MovieUD";
import AddMoviee from "./component/pages/AddMovie copy";
import UpdateMovie from "./component/pages/UpdateMovie";
import DeleteMovie from "./component/pages/DeleteMovie";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/updateuser" element={<Updateuser />} />
          <Route path="/admin" element={<Signup1 />} />
          <Route path="/users" element={<DisplayUser />} />
          <Route path="/displaycontact" element={<DisplayContactInfo />} /> */}
          <Route path="/" element={<Signup />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/* <Route path ="/movies" element={<Movies/>}/>
                   <Route path ="/tvshows" element={<TvShows/>} /> */}
          <Route path="/signup" element={<SignIn />} />
          <Route path="/review" element={<Review />} />
          <Route path="/review2" element={<StarRating />} />
          <Route path="/star" element={<Star />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/reviewud" element={<DisplayReview />} />
          <Route path="/userud" element={<DisplayUser />} />
          <Route path="/movieud" element={<DisplayMovie />} />
          <Route path="/addmoviecopy" element={<AddMoviee />} />
          <Route path="/updatemovie" element={<UpdateMovie />} />
          <Route path="/deletemovie" element={<DeleteMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
