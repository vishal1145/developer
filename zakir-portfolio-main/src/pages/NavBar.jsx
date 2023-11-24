import { useState } from "react";

function NavBar() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (num) => {
    setActiveTab(num);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-nav">
      <a className="navbar-brand" href="#">
        Zakir Design
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#Home"
              onClick={() => handleTabClick(0)}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#About"
              onClick={() => handleTabClick(1)}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#Portfolio"
              onClick={() => handleTabClick(2)}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#Services"
              onClick={() => handleTabClick(3)}
            >
              Services
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#Blog"
              onClick={() => handleTabClick(4)}
            >
              Personal Blog
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#Contact"
              onClick={() => handleTabClick(5)}
            >
              Contact
            </a>
          </li>
        </ul>
        <button className="btn hire-btn" type="submit">
          Hire Me
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
