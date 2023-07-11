import "../css/footer.css";
function Footer() {
  return (
    <div className="footer">
      <h2>Questions ? call 000-000-000</h2>
      <div className="row flex">
        <div className="col">
          <a href="../homepage.html" target="_blank">
            FAQ
          </a>
          <a href="#">Investor Relations</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
        </div>
        <div className="col">
          <a href="../Contact us/contact.html" target="_blank">
            Help Center
          </a>
          <a href="#">Jobs</a>
          <a href="#">Cookies Preferences</a>
          <a href="#">Legal Notices</a>
        </div>
        <div className="col">
          <a href="#">Account</a>
          <a href="#">Ways to watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Only on ShowTime</a>
        </div>
        <div className="col">
          <a href="#">Media Center</a>
          <a href="#">Terms of use</a>
          <a href="#">Corporate Information</a>
          <a href="#">Only on Show Time</a>
        </div>
        <div className="col">
          <a href="#">Media Center</a>
          <a href="#">Terms of use</a>
          <a href="../Contact us/contact.html" target="_blank">
            Contact us
          </a>
        </div>
      </div>
      <p className="copyright-txt">ShowTime India</p>
    </div>
  );
}

export default Footer;
