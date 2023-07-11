import React from "react";
import styles from "../css/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
const NavBar = () => {
  let navigate = useNavigate();
  let signOutAction = () => {
    localStorage.removeItem("loginStatus");
    console.log("loginStatus");
    navigate("/", { replace: true });
  };
  return (
    <>
      <nav>
        <h3>Letterboxd</h3>
        <div>
          <button onClick={signOutAction}>Sign out</button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
