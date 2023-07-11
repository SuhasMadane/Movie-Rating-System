import React, { useRef, useState } from "react";
import "../css/SignInForm.css";
import { Link, useNavigate } from "react-router-dom";

let Admin = () => {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  let inputrefpass = useRef();
  let navigate = useNavigate();

  let goToMainAction = () => {
    navigate("/main");
  };

  let goToTodoSignup = () => {
    alert("Admins can not register pls sign in");
  };

  let goToRegistrationAction = () => {
    navigate("/registration");
  };

  async function handleSignInClick() {
    try {
      // Simulated database check
      let email = "vikram@gmail.com";

      if (user.email === email && user.password === "8888888888") {
        localStorage.setItem("loginstatus", "true");
        alert("Login successful");
        navigate("/users");
      } else {
        throw new Error();
      }
    } catch (error) {
      alert(error.message);
    }
  }

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
    <div className="container1">
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

export default Admin;
