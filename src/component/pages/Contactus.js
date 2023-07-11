import React from "react";
import { useState } from "react";
import "../css/contactus.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Contact1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value;
    const numbersOnly = inputValue.replace(/[^0-9]/g, ""); // Remove non-digit characters
    setPhoneNumber(numbersOnly);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form submission here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Message:", message);
  };

  const [user, setUser] = useState({
    Name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  let handlerNameAction = (e) => {
    let newuser = { ...user, Name: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerphoneNumberAction = (e) => {
    let newuser = { ...user, phoneNumber: e.target.value };
    setUser(newuser);
  };

  let handlermessageAction = (e) => {
    let newuser = { ...user, message: e.target.value };
    setUser(newuser);
  };

  let registerAction = async () => {
    // BACKEND
    let url = `http://localhost:4000/contactinfo?Name=${user.Name}&email=${user.email}&phoneNumber=${user.phoneNumber}&message=${user.message}`;
    await fetch(url);

    let newuser = {
      Name: "",
      email: "",
      phoneNumber: "",
      message: "",
    };
    setUser(newuser);
  };

  return (
    <div>
      <header>
        <nav>
          <Link to={"/"}> Home </Link>
          <Link to={"/main"}> Main </Link>
          <Link to={"/movies"}> movies </Link>
          <Link to={"/tvshows"}> Tv Shows</Link>
          <Link to={"/contactus"}> Contact us </Link>
        </nav>
      </header>

      <section
        className="contact-section"
        style={{ background: "white", padding: "40px" }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Contact Us
        </h1>
        <h3 style={{ textAlign: "center", marginBottom: "40px" }}>
          Please drop your details and message. We usually respond within 1-2
          business days.
        </h3>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label
            htmlFor="name"
            style={{ marginBottom: "10px", fontWeight: "bold" }}
          >
            Name:
          </label>
          <textarea
            id="name"
            name="Name"
            required
            value={user.Name}
            onChange={handlerNameAction}
            placeholder="Name"
            style={{
              width: "100%",
              height: "40px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              marginBottom: "20px",
            }}
          />

          <label
            htmlFor="email"
            style={{ marginBottom: "10px", fontWeight: "bold" }}
          >
            Email:
          </label>
          <textarea
            id="email"
            name="email"
            required
            value={user.email}
            onChange={handlerEmailAction}
            placeholder="Email"
            type="email"
            style={{
              width: "100%",
              height: "40px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              marginBottom: "20px",
            }}
          />

          <label
            htmlFor="number"
            style={{ marginBottom: "10px", fontWeight: "bold" }}
          >
            Phone Number:
          </label>
          <textarea
            id="phoneNumber"
            name="phoneNumber"
            required
            value={user.phoneNumber}
            onChange={handlerphoneNumberAction}
            placeholder="Phone Number"
            type="number"
            minLength={10}
            style={{
              width: "100%",
              height: "40px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              marginBottom: "20px",
            }}
          />

          <label
            htmlFor="message"
            style={{ marginBottom: "10px", fontWeight: "bold" }}
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={user.message}
            onChange={handlermessageAction}
            minLength={10}
            style={{
              width: "100%",
              height: "100px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              marginBottom: "20px",
            }}
          ></textarea>

          <button
            type="submit"
            onClick={registerAction}
            id="SignUpBtn"
            style={{
              backgroundColor: "navy",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

function Contact() {
  return (
    <>
      <Contact1 />

      <Footer />
    </>
  );
}
export { Contact1 };
export default Contact;
