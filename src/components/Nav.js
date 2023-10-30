import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = () => {
    if (darkMode) {
      setDarkMode(false);
      document.querySelector(".NoMovieSearch").style.color = "black";
      document.querySelector(".p1").style.color = "black";
      document.body.style.backgroundColor = "#f2f2f2";
    } else {
      document.querySelector(".NoMovieSearch").style.color = "white";

      document.querySelector(".p1").style.color = "white";
      setDarkMode(true);
      document.body.style.backgroundColor = "#0a1928";
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container ">
          <a className="navbar-brand" href="">
            Movie DB
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav  navContent">
              <div className="d-flex align-items-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Movies">
                    Movies
                  </Link>
                </li>
              </div>
              <div className="switchBtn">
                <li>
                  <div class="form-check form-switch">
                    <input
                      style={{ border: 1 + "px solid black" }}
                      onClick={darkTheme}
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckChecked"
                    ></label>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Nav;
