import logo from "../../assets/logo.png";
import "../../styles/Header.css";

function Header() {
  return (
    <div>
      <div id="header">
      <nav id="nav_Logo">
        <img id="img_Logo" src={logo} alt="" />
      </nav>
      <div id="div_buttom_signout">
          <button action="connexion" type="submit" id="buttom_signout">
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
