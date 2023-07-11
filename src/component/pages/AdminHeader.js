import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import "../css/contactus.css";

const AdminHeader = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to={"/main"}> Main</Link>
          <Link to={"/addmovie"}> Add Movie </Link>
          <Link to={"/reviewdb"}>Reviews</Link>
          <Link to={"/user"}>UserList</Link>
        </nav>
      </header>
    </div>
  );
};

export default AdminHeader;
