import React, { useState } from "react";
import "../css/SignInForm.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Name: "",
    email: "",
    password: "",
  });

  const goToMainAction = () => {
    navigate("/main");
  };

  const goToTodoHome = () => {
    navigate("/");
  };

  const goTosignin = () => {
    navigate("/");
  };

  const validateEmail = (email) => {
    // A simple email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const registerAction = async () => {
    // Validate form inputs
    if (user.Name.length < 5) {
      alert("Name should be at least 5 characters long");
      return;
    }

    if (!validateEmail(user.email)) {
      alert("Invalid email address");
      return;
    }

    if (!validatePassword(user.password)) {
      alert("Password should be at least 8 characters long");
      return;
    }

    // Backend registration logic
    try {
      // const url = `http://localhost:4000/adduser?Name=${user.Name}&email=${user.email}&password=${user.password}`;
      const url = `http://localhost:9191/add-user?username=${user.Name}&useremail=${user.email}&password=${user.password}`;
      // const res = await fetch(url);

      // axios.get(url).then((response) => {
      //   console.log(response.data);
      //   // setListOfTrains(response.data);
      // });

      const response = await axios.get(url);
      console.log(response.data);

      if (response.status === 400) {
        throw new Error();
      }

      localStorage.setItem("loginstatus", "true");
      localStorage.setItem("username", `${user.Name}`);
      alert("Sign up successful");
      navigate("/signin");
    } catch (error) {
      alert("Email already registered");
    }

    setUser({
      Name: "",
      email: "",
      password: "",
    });
  };

  const handlerNameAction = (e) => {
    let newuser = { ...user, Name: e.target.value };
    setUser(newuser);
  };

  const handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  const handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  return (
    <div className="container1">
      <div className="formbox">
        <h1 id="title">Sign Up</h1>
        <form>
          <div className="input-group">
            <div className="input-field" id="namefield">
              <input
                minLength={5}
                type="text"
                name="Name"
                value={user.Name}
                onChange={handlerNameAction}
                placeholder="Name"
                required
              />
            </div>

            <div className="input-field">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handlerEmailAction}
                placeholder="Email"
                required
              />
            </div>

            <div className="input-field">
              <input
                minLength={8}
                type="password"
                name="password"
                value={user.password}
                onChange={handlerPasswordAction}
                placeholder="Password"
                required
              />
            </div>
            <p style={{ color: "black" }}>
              Lost Password? <a href="../MainPage/home.html">Click here</a>
            </p>
          </div>
          <div className="btn-field">
            <button type="button" onClick={registerAction} id="SignUpBtn">
              Sign Up
            </button>

            <button
              type="button"
              onClick={goTosignin}
              id="SignInBtn"
              className="Disable1"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
