import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link
              className="navbar-brand fs-1 fst-italic fw-bold text-white"
              to="/#">
              TimesNews
              <span className="fs-6 fw-light text-warning">By Amrit Singh</span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbar Supported Content">
              <ul className="navbar-nav me-auto mb-2">
                <li className="nav-item  text-bold">
                  <Link
                    className="nav-Link active text-white fw-bold mx-3"
                    aria-current="page"
                    to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link
                    className="nav-Link active text-white"
                    aria-current="page"
                    to="/enterTainment">
                    EnterTainment
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link
                    className="nav-Link active text-white"
                    aria-current="page"
                    to="/general">
                    General
                  </Link>
                </li>

                <li className="nav-item mx-3">
                  <Link
                    className="nav-Link active text-white"
                    aria-current="page"
                    to="/health">
                    Health
                  </Link>
                </li>

                <li className="nav-item mx-3">
                  <Link
                    className="nav-Link active text-white"
                    aria-current="page"
                    to="/science">
                    Science
                  </Link>
                </li>

                <li className="nav-item  margin-right: 30px;">
                  <Link
                    className="nav-Link active text-white mx=2"
                    aria-current="page"
                    to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
