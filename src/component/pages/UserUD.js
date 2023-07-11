import "../css/main.css";
import { Link } from "react-router-dom";

import "../css/contactus.css";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieTable from "./MovieTable";
import UserTable from "./UserTable";
function DisplayUser() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:9191/getUsers");
        setUserList(res.data);
        // alert("Fetched");
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <UserTable userList={userList} />
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

export default DisplayUser;
