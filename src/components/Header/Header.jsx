import React from 'react';
import { useHistory } from "react-router-dom";

import logo from "../../assets/logo.png";
import "../../styles/Header.css";
import "../../styles/Mobile.css";


// import Axios from 'axios';



function Header() {

  const history = useHistory();

  // Gestion buttom logout user
  const Logout = (e) => {
      alert("utilisateur déconnecté");
      history.push("/");
      e.preventDefault(window.localStorage.clear())
  };

  return (
    <div id="header_navbar">
      <div id="header">
      <nav id="nav_Logo">
        <img id="img_Logo" src={logo} alt="" />
      </nav>
      <div id="div_buttom_signout">
          <button action="connexion" type="submit" id="buttom_signout" onClick={Logout} >
            <i className="fas fa-sign-out-alt"></i>
          </button>
      </div>
      </div>
      <nav id="navbar">
        <ul id="nav_liste">
          <a href="Home">
            <li>
              <i className="fas fa-home icone"></i>Actualité
            </li>
          </a>
          <a href="Setting">
            <li>
              <i className="fas fa-user-cog icone"></i>Paramétre
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Header;