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
          <a href="Message1">
            <li>
              <i className="far fa-comment icone"></i>Message
            </li>
          </a>
          <a href="Forums1">
            <li>
              <i className="far fa-comment-alt icone"></i>Forum
            </li>
          </a>
          <a href="Contacted">
            <li>
              <i className="far fa-address-book icone"></i>Contacte
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
