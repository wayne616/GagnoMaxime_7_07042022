import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import Header from "../../components/Header/Header";
import "../../styles/Setting.css";

import Axios from 'axios';

function Setting() {

  // Buttom Suppression de l'user de la base de donner et les 
  // messages affilié a l'user  
  const history = useHistory();

  const DeletUser = (Id) => {
    Axios.post(`http://localhost:3000/api/auth/deleteUser/${localStorage.user_id}`)
    .then((response) => {
      console.log(response);
      alert("utilisateur supprimer")
    })
    history.push("/");
    // e.preventDefault(window.location.reload())
  };

  // Afficher les données de l'utilisateur
  const [UserInfo, setUserInfo] = useState([]);

  useEffect(() => {
      Axios.get(`http://localhost:3000/api/auth/getOneUser/${localStorage.user_id}`)
      .then((response) => {
        setUserInfo(response.data);
        console.log(response.data);
      });
  }, []);

  //Update de l'User 
  // const [UpdateUser, setUpdateUser] = useState("");
  const [NewNom,setNewNom] = useState("");
  const [NewPrenom,setNewPrenom] = useState("");
  const [NewEmail, setNewEmail] = useState("");


  const Update = (Id) => { 
    Axios.put(`http://localhost:3000/api/auth/updateUser/${localStorage.user_id}`,
      {Nom : NewNom ,Prenom : NewPrenom , Email : NewEmail}
    ).then((response) => {
      console.log(response);
      alert("utilisateur modifier")
    })
    setNewNom("")
    setNewPrenom("")
    setNewEmail("")
    // Id.preventDefault();
  };

  return (
    <div>
      <Header />
      <section id="section_principal">
        <section id="setting">
          <div>
            <ul id="ul_setting" >
              <li className="li_setting">
                Nom :<input name="" id="Nom" type="text" onChange={(Id)=> {setNewNom(Id.target.value)}}></input>
              </li>
              <li className="li_setting">
                Prénom :<input name="" id="Prenom" type="text" onChange={(Id)=> {setNewPrenom(Id.target.value)}} ></input>
              </li>
              <li className="li_setting">
                Adresse email :
                <input name="" id="Email" type="email" onChange={(Id)=> {setNewEmail(Id.target.value)}} ></input>
              </li>
              <li className="li_setting">
                <button onClick={Update}>Modifier compte</button>
              </li>
              <li className="li_setting">
                <button onClick={DeletUser}>Supprimer compte </button>
              </li>
            </ul>
          </div>
        </section>
        {UserInfo.map((val) => {
        return <div>
          <section id="statut">
          <div>
            <div id="infos">
              <h3>Infos compte</h3>
              <ul id="ul_infos">
                <li className="li_infos">
                  Nom :<div className="infos_bdd">{val.Nom}</div>
                </li>
                <li className="li_infos">
                  Prénom :<div className="infos_bdd">{val.Prenom}</div>
                </li>
                <li className="li_infos">
                  Adresse-email :<div className="infos_bdd">{val.Email}</div>
                </li>
              </ul>
            </div>
            {/* <div id="statut">
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
            </div> */}
          </div>
        </section>
        </div>
        })
        }
      </section>
      <footer>
      </footer>
    </div>
  );
}

export default Setting;