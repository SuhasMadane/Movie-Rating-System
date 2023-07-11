import React, { useRef, useState } from "react";
import "../css/SignInForm.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

let Signup = () => {
  let inputrefpass = useRef();
  let navigate = useNavigate();
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let goToMainAction = () => {
    navigate("/main");
  };

  let goToTodoSignup = () => {
    navigate("/signup");
  };

  let goToRegistrationAction = () => {
    navigate("/registration");
  };

  let handleSignInClick = async () => {
    if (user.email === "suhas@gmail.com" && user.password === "8888888888") {
      localStorage.setItem("loginstatus", "true");
      alert("Login successful");
      navigate("/movies");
    } else {
      try {
        // let url = `http://localhost:9191/get-user?useremail=${user.email}&password=${user.password}`;
        let url = `http://localhost:9191/get-user?useremail=${user.email}&password=${user.password}`;
        // let res = await fetch(url);
        const response = await axios.get(url);

        if (response.status === 400) {
          let msg = await response.text();
          throw new Error(msg);
        }
        localStorage.setItem("loginstatus", "true");
        console.log("loginStatus");
        var userDetailsString = JSON.stringify(user);
        localStorage.setItem("userDetails", userDetailsString);

        alert("Login successful");
        navigate("/main");
      } catch (error) {
        alert(error.message);
        return;
      }
    }
  };

  let handlerEmailAction = (e) => {
    let newEmail = e.target.value;
    let newEmailError = "";

    let newuser = { ...user, email: newEmail, emailError: newEmailError };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newPassword = e.target.value;
    let newPasswordError = "";

    // Password length validation
    if (newPassword.length < 8) {
      newPasswordError = "Password should be at least 8 characters long";
    }

    // Add more validations as per your requirements
    // ...

    let newuser = {
      ...user,
      password: newPassword,
      passwordError: newPasswordError,
    };
    setUser(newuser);
  };

  return (
    <div style={{ className: "container1" }}>
      <div className="formbox">
        <h1 id="title">Sign In</h1>
        <form>
          <div className="input-group">
            <div className="input-field">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handlerEmailAction}
                required
                placeholder="Email"
              />
            </div>

            <div className="input-field">
              <input
                ref={inputrefpass}
                type="password"
                name="password"
                value={user.password}
                onChange={handlerPasswordAction}
                required
                placeholder="Password"
              />
            </div>
            <p style={{ color: "black" }}>
              Lost Password? <a href="../MainPage/home.html">Click here</a>
            </p>
          </div>
          <div className="btn-field">
            <button onClick={goToTodoSignup} type="submit" id="SignUpBtn">
              Sign Up
            </button>
            <button type="button" onClick={handleSignInClick} id="SignInBtn">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
