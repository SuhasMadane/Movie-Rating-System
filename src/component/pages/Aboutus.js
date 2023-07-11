import React from "react";
import "../css/aboutus.css";
// import vikram from "./images/vikram.png";
// import akshay from "./images/akshay.jpg";
// import rutuja from "./images/rutuja.jpg";
import Footer from "./Footer";
import Signup from "./Signup";

import { Link, useNavigate } from "react-router-dom";
function AboutUs() {
  let navigate = useNavigate();

  let onSignup = () => {
    let userlogin = localStorage.getItem("loginstatus");
    if (userlogin) {
      navigate("/main");
    } else {
      navigate("/signup");
    }
  };
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About us | Show Time</title>
        <link rel="stylesheet" href="aboutus.css" />
        <div className="header">
          <nav>
            Show Time ... all rights reserved
            <div>
              <Link to={"/admin"}>
                <button>Admin Login</button>
              </Link>

              <button onClick={onSignup}>Sign In</button>
            </div>
          </nav>
          <div className="header-content">
            <h1 style={{ justifyContent: "center" }}>About Us</h1>
            <h3>
              Welcome to our video streaming website! We are passionate about
              providing you with the best online video streaming experience. Our
              platform offers a wide variety of movies, TV shows, and original
              content to entertain and inspire you.
            </h3>
            <p>
              Our team is dedicated to delivering a seamless and user-friendly
              streaming platform. We value your satisfaction and work hard to
              provide a smooth and immersive streaming experience on all
              devices. Whether you're watching on your computer, smartphone, or
              smart TV, you can enjoy your favorite videos anytime, anywhere.
            </p>
            <h2 style={{ marginTop: "20px" }}>More About us Below</h2>
          </div>
        </div>
        <div className="features">
          <div className="row">
            <div className="text-col">
              <h2>1.Suhas Madane</h2>
              <p>Prn No - 2303 4052 0105</p>
            </div>
            <div className="img-col">{/* <img src={} /> */}</div>
          </div>
          <div className="row">
            <div className="img-col">{/* <img src={}/> */}</div>
            <div className="text-col">
              <h2>2.Yashashree Gohad</h2>
              <p>Prn No - 2303 4032 0137</p>
            </div>
          </div>
          <div className="row">
            <div className="text-col">
              <h2>3.Saurabh Wagh</h2>
              <p>Prn No - 2303 4032 0098</p>
            </div>
            <div className="img-col">{/* <img src={} /> */}</div>
          </div>
        </div>
        <div className="faq">
          <h2>Frequently Asked Questions About Our App</h2>
          <ul className="accordion">
            <li>
              <input type="radio" name="accordion" id="first" />
              <label htmlFor="first">What is ShowTime</label>
              <div className="content">
                <p>
                  ShowTime is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices. <br />
                  <br />
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="second" />
              <label htmlFor="second">How much does ShowTime cost?</label>
              <div className="content">
                <p>
                  Watch ShowTime on your smartphone, tablet, Smart TV, laptop,
                  or streaming device, all for one fixed monthly fee. Plans
                  range from ₹ 149 to ₹ 649 a month. No extra costs, no
                  contracts.
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="third" />
              <label htmlFor="third">Where can I watch ?</label>
              <div className="content">
                <p>
                  Watch anywhere, anytime. Sign in with your ShowTime account to
                  watch instantly on the web at ShowTime.com from your personal
                  computer or on any internet-connected device that offers the
                  ShowTime app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                  <br />
                  <br />
                  You can also download your favourite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  ShowTime with you anywhere.
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="fourth" />
              <label htmlFor="fourth">How do I cancel?</label>
              <div className="content">
                <p>
                  ShowTime is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="fifth" />
              <label htmlFor="fifth">What can I watch on ShowTime ?</label>
              <div className="content">
                <p>
                  ShowTime has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning ShowTime
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="sixth" />
              <label htmlFor="sixth">Is ShowTime good for kids?</label>
              <div className="content">
                <p>
                  The ShowTime Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space.
                  <br />
                  <br />
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default AboutUs;
