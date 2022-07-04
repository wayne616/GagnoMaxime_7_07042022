import React from "react";
import { useHistory } from "react-router-dom";

import logo from "../../assets/logo.svg";
import "../../styles/Header.css";
import "../../styles/Mobile.css";

// import Axios from 'axios';

function Header() {
  const history = useHistory();

  // Gestion buttom logout user
  const Logout = (e) => {
    alert("utilisateur déconnecté");
    history.push("/");
    e.preventDefault(window.localStorage.clear());
  };

  return (
    <div id="header_navbar">
      <div id="header">
        <img id="img_Logo" src={logo} alt="" />
        <div id="nav">
          <nav id="navbar">
            <ul id="nav_liste">

              <li className="li_nav">
                <a href="Home">
                  HOME
                </a>
              </li>

              <li className="li_nav">
                <a href="Setting">
                  SETTING
                </a>
              </li>

            </ul>
          </nav>
          <button
            value="Logout"
            action="connexion"
            type="submit"
            id="buttom_signout"
            onClick={Logout}
          >
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
