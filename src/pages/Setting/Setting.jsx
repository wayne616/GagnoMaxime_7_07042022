import Header from "../../components/Header/Header";
import "../../styles/Setting.css";

function Setting() {
  return (
    <div>
      <Header />
      <section id="section_principal">
        <section id="setting">
          <div>
            <ul id="ul_setting">
              <li className="li_setting">
                Nom :<textarea name="" id="" cols="10" rows="1"></textarea>
              </li>
              <li className="li_setting">
                Prénom :<textarea name="" id="" cols="10" rows="1"></textarea>
              </li>
              <li className="li_setting">
                Adresse email :
                <textarea name="" id="" cols="10" rows="1"></textarea>
              </li>
              <li className="li_setting">
                Mots de passe :
                <textarea name="" id="" cols="10" rows="1"></textarea>
              </li>
              <li className="li_setting">
                <button>Modifier compte</button>
              </li>
              <li className="li_setting">
                <button>Supprimer compte </button>
              </li>
            </ul>
          </div>
        </section>
        <section id="statut">
          <div>
            <div id="infos">
              <h3>Infos compte</h3>
              <ul id="ul_infos">
                <li className="li_infos">
                  Nom :<div className="infos_bdd">aaaaaa</div>
                </li>
                <li className="li_infos">
                  Prénom :<div className="infos_bdd">aaaaaa</div>
                </li>
                <li className="li_infos">
                  Adresse :<div className="infos_bdd">aaaaaa@aaaaaa.aaa</div>
                </li>
              </ul>
            </div>
            <div id="statut">
              <h3>statut</h3>
              <ul id="ul_statut">
                <li>
                  <button>
                    Connecté
                    <i className="far fa-check-circle"></i>
                  </button>
                </li>
                <li>
                  <button>
                    Hors ligne
                    <i className="fas fa-circle"></i>
                  </button>
                </li>
                <li>
                  <button>
                    Do not disturb
                    <i className="fas fa-ban"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <footer>
      </footer>
    </div>
  );
}

export default Setting;
