function Footer() {
  return (
    <div className="footer">
      <div className="footer-div1">
        <div className="footer-name">ZAKIR DESIGN</div>
        <div className="footer-about">
          Add the variable font stylesheet request to your head tag and the
          current variable axes configuration to icons using CSS.
        </div>
        <div>Follow Me</div>
        <div className="follow-us">
          <div className="follow-box">
            <img
              src={require("./assests/Youtube_logo.png")}
              width={25}
              height={20}
              alt="facebook"
            />
          </div>
          <div className="follow-box">
            <img
              src={require("./assests/linkdien.png")}
              width={20}
              height={20}
              alt="facebook"
            />
          </div>
          <div className="follow-box">
            <img
              src={require("./assests/Logo_of_Twitter.png")}
              width={20}
              height={20}
              alt="facebook"
            />
          </div>
          <div className="follow-box">
            <img
              src={require("./assests/facebook.png")}
              width={15}
              height={20}
              alt="facebook"
            />
          </div>
          <div className="follow-box">
            <img
              src={require("./assests/insta.png")}
              width={20}
              height={20}
              alt="facebook"
            />
          </div>
        </div>
      </div>
      <nav className="navbar-expand-lg navbar-light bg-light navbar">
        <a className="navbar-brand footer-brand" href="#">
          2023 All Rights Klevis Rrapushaj ICT Solutions
        </a>

        <div
          className="collapse navbar-collapse footer-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Blog">
                Personal Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
