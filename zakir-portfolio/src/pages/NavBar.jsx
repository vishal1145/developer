import { useState } from "react";

function NavBar() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (num) => {
    setActiveTab(num);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light fixed-nav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Zakir Design
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="#Home"
                  onClick={() => handleTabClick(0)}
                  style={{ color: activeTab === 0 && "#4e2ac3" }}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#About"
                  onClick={() => handleTabClick(1)}
                  style={{ color: activeTab === 1 && "#4e2ac3" }}
                >
                  About
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#Portfolio"
                  onClick={() => handleTabClick(2)}
                  style={{ color: activeTab === 2 && "#4e2ac3" }}
                >
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#Services"
                  onClick={() => handleTabClick(3)}
                  style={{ color: activeTab === 3 && "#4e2ac3" }}
                >
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#Blog"
                  onClick={() => handleTabClick(4)}
                  style={{ color: activeTab === 4 && "#4e2ac3" }}
                >
                  Personal Blog
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#Contact"
                  onClick={() => handleTabClick(5)}
                  style={{ color: activeTab === 5 && "#4e2ac3" }}
                >
                  Contact
                </a>
              </li>
            </ul>
            <button className="btn hire-btn" type="submit">
              Hire Me
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
