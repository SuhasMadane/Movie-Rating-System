import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const StarRating = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [userReview, setUserReview] = useState({
    review: "",
    rate: "",
    movie: "",
    userEmail: "",
  });
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const movieName = searchParams.get("movieName");
  console.log(movieName);
  var storedUserDetailsString = localStorage.getItem("userDetails");
  console.log(storedUserDetailsString);
  var storedUserDetails = JSON.parse(storedUserDetailsString);
  console.log(storedUserDetails.email);

  const addReview = async () => {
    try {
      console.log("Hello");
      console.log(userReview);
      const url = `http://localhost:9191/add-review?review=${userReview.review}&movie=${userReview.movie}&useremail=${userReview.userEmail}&rating=${rating}`;
      // const res = await fetch(url);
      // if (res.status === 400) {
      //   throw new Error();
      // }
      // localStorage.setItem("loginstatus", "true");
      // localStorage.setItem("username", `${user.Name}`);
      // alert("Sign up successful");
      // navigate("/signin");

      const response = await axios.get(url);
      console.log(response.data);

      if (response.status === 400) {
        let msg = await response.text();
        throw new Error(msg);
      }
      alert("Review Added");
    } catch (error) {
      alert("Review already submitted");
    }

    setUserReview({
      review: "",
      rate: "",
      movie: "",
      userEmail: "",
    });

    navigate("/");
  };

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleRatingHover = (value) => {
    setHover(value);
  };

  const handleTextareaChange = (e) => {
    let newReview = {
      ...userReview,
      review: e.target.value,
      movie: movieName,
      userEmail: storedUserDetails.email,
      rate: rating,
    };
    setUserReview(newReview);
  };

  console.log(userReview);

  return (
    <div>
      return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#000",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "#fff" }}>Movie Rating</h2>
          <div style={{ display: "flex" }}>
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;

              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={starValue}
                    onClick={() => handleRatingClick(starValue)}
                  />
                  <FaStar
                    size={24}
                    color={
                      starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
                    onMouseEnter={() => handleRatingHover(starValue)}
                    onMouseLeave={() => handleRatingHover(0)}
                  />
                </label>
              );
            })}
          </div>
          <textarea
            placeholder="What's your experience?"
            style={{
              padding: "10px",
              marginTop: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
              height: "100px",
              backgroundColor: "#333",
              color: "#fff",
            }}
            value={userReview.descript}
            onChange={handleTextareaChange}
          />

          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "40px",
              cursor: "pointer",
              width: "100%",
              marginTop: "10px",
            }}
            onClick={addReview}
          >
            Submit
          </button>
        </div>
      </div>
      );
    </div>
  );
};

export default StarRating;
