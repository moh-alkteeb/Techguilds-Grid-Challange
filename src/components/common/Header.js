import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: " #e34934", fontWeight: "1000" };
  return (
    <>
      <header id="fh5co-header" role="banner">
        <div className="container text-center">
          <div id="fh5co-logo">
            <a href="index1.html">
              <img
                src={process.env.PUBLIC_URL + "/logo.png"}
                className="imglogo"
                alt="Present Free HTML5 Bootstrap Template"
              ></img>
            </a>
          </div>
          <nav className="intro">
            <ul>
              <li>
                <NavLink to="/" exact activeStyle={activeStyle}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeStyle={activeStyle}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeStyle={activeStyle}>
                  Contact
                </NavLink>
              </li>
              <li></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
