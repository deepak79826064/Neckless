import React from "react";
//import PropTypes from "prop-types";
function navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg" style={{ backgroundColor: "#b4bbc5" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            SB Collection
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  ALL JEWELRY
                </a>
              </li>
              <li className="nav-item dropdown" >
                <a
                  className="nav-link dropdown-toggle text-white" 
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  TYPE
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Ear Rings
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Rings
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Neckpiece
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
