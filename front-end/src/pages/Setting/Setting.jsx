import React, { useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

import Header from "../../components/Header/Header";

import "../../styles/Setting.css";

import Axios from 'axios';

function Setting() {

  // Buttom Suppression de l'user de la base de donner et les 
  const history = useHistory();

  const DeletUser = (e) => {
    Axios.post(`http://localhost:3000/api/auth/deleteUser/${localStorage.user_id}`)
    .then((response) => {
      alert("utilisateur supprimer")
    })
    history.push("/");
  };

  //Update de l'User

  const [NewNom,setNewNom] = useState("");
  const [NewPrenom,setNewPrenom] = useState("");
  const [NewEmail, setNewEmail] = useState("");

  const Update = (e, Id) => { 
    e.preventDefault()

    const regExemail = (value) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w_]{2,4}$/.test(value);
    };
    if(!regExemail(NewEmail)){
        alert("Email invalid")
        return
    }
    const regExNomPrenom = (value) => {
      return /^[A-Za-z]{3,20}$/.test(value);
    };
  
  if(!regExNomPrenom(NewNom, NewPrenom)){
      alert("Nom, Prenom invalid")
      return
  }

    Axios.put(`http://localhost:3000/api/auth/updateUser/${localStorage.user_id}`,
      {Nom : NewNom ,Prenom : NewPrenom , Email : NewEmail}
    ).then((response) => {
      alert("utilisateur modifier")
      window.location.reload()
    })
    setNewNom("")
    setNewPrenom("")
    setNewEmail("")
    Id.preventDefault();
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

  return (
    <div>
      <Header />
      <section id="section_principal">
        <section id="setting" className="setting_user">
          <div>
            <h1 id='H1'>Modifier mon profil</h1>

            <ul id="ul_setting" >

              <li className="li_setting">
                <label htmlFor="Nom" className="sr-only">Nom</label>
                <span>Nom : </span> 
                <input name="" id="Nom" className="input_setting" type="text" onChange={(Id)=> {setNewNom(Id.target.value)}}></input>
              </li>

              <li className="li_setting">
                <label htmlFor="Prenom" className="sr-only">Prenom</label>
                <span>Prénom : </span>
                <input name="" id="Prenom" className="input_setting" type="text" onChange={(Id)=> {setNewPrenom(Id.target.value)}}></input>
              </li>

              <li className="li_setting">
                <label htmlFor="Email" className="sr-only">Email</label>
                <span>Email : </span>
                <input name="" id="Email" className="input_setting" type="email" onChange={(Id)=> {setNewEmail(Id.target.value)}}></input>
              </li>

              <li className="li_setting">
                <button className="btt_Setting" onClick={(e) => {Update(e)}}>Modifier compte</button>
              </li>

              <li className="li_setting">
                <button className="btt_Setting" onClick={DeletUser}>Supprimer compte </button>
              </li>

            </ul>

          </div>
        </section>
        {UserInfo.map((val) => {
        return <section id="statut" className="setting_user">
            <div id="infos">
              <h1 id='H1'>Infos compte</h1>
              <ul id="ul_setting">
                <li className="li_infos">
                  Nom : <div className="infos_bdd">{val.Nom}</div>
                </li>
                <li className="li_infos">
                  Prénom : <div className="infos_bdd">{val.Prenom}</div>
                </li>
                <li className="li_infos">
                  Email : <div className="infos_bdd">{val.Email}</div>
                </li>
              </ul>
            </div>
        </section>
        })
        }
      </section>
    </div>
  );
}

export default Setting;