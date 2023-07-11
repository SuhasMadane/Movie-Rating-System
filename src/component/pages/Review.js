import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import axios from "axios";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Review() {
  const [currentValue, setCurrentValue] = useState(0);
  const [userReview, setUserReview] = useState({
    descript: "",
    rate: currentValue,
    movie: "",
    userEmail: "",
  });

  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
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
      const url = `localhost:9191/add-review?review=${userReview.descript}&movie=${userReview.movie}&useremail=${userReview.userEmail}&rating=${userReview.rate}`;
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
      alert("Email already registered");
    }
  };

  const handleClick = (value) => {
    setCurrentValue(value);
    console.log(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = (e) => {
    // setHoverValue(e.target.value);
    // console.log(e.target.value);
    // let newReview = { ...userReview, rate: e.target.value };
    // setUserReview(newReview);
  };

  const handleTextareaChange = (e) => {
    let newReview = {
      ...userReview,
      descript: e.target.value,
      movie: movieName,
      userEmail: storedUserDetails.email,
    };
    setUserReview(newReview);
  };

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
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                value={userReview.rate}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
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
}

export default Review;
