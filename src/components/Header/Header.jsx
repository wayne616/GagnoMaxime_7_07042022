import React from 'react';

import logo from "../../assets/logo.png";
import "../../styles/Header.css";

import Axios from 'axios';

function Header() {

  const Logout = (e) => {
    Axios.post("http://localhost:3000/api/logout")
    .then((response) => {
      console.log(response);
      alert("utilisateur déconnecté")
    })
    // e.preventDefault(window.location.reload());
  };

  return (
    <div>
      <div id="header">
      <nav id="nav_Logo">
        <img id="img_Logo" src={logo} alt="" />
      </nav>
      <div id="div_buttom_signout">
          <button action="connexion" type="submit" id="buttom_signout" onClick={Logout} >
            <i class="fas fa-sign-out-alt"></i>
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