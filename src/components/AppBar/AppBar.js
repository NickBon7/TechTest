import React from "react";
import { Link } from "react-router-dom";
import "../Styles/AppBar.scss";
import logo from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

const AppBar = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <img src={logo} className="logo" alt="logo" />
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} size="xs" />/ Dashboard/ Analytics
            </Link>
            <h4>Analytics</h4>
          </li>
        </ul>
      </nav>
      <span className="avatar">
        <FontAwesomeIcon
          className="user"
          icon={faUser}
          size="2x"
          color="#58a7ed"
        />
        <div className="info">
          <p>Nikolaos</p>
          <p>Boniatis</p>
        </div>
      </span>
    </div>
  );
};

export default AppBar;
