import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Axios from 'axios';

import logo from "../../assets/logo.png";
import '../../styles/connexion.css';

function Connexion() {

    const history = useHistory();

    //Enregistrement user 
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (e) => {

        e.preventDefault()

        // regEx formulaire inscription 

        const regExemail = (value) => {
            return /^[\w-\.]+@([\w-]+\.)+[\w_]{2,4}$/.test(value);
          };
          if(!regExemail(email)){
              alert("Email invalid")
              return
          }
          const regExNomPrenomPassword = (value) => {
            return /^[A-Za-z]{3,20}$/.test(value);
          };
        if(!regExNomPrenomPassword (nom, prenom, password)){
            alert("Nom, Prenom ,Password invalid")
            return
        }
        // fetch requete post 
        
        Axios.post("http://localhost:3000/api/auth/signup", {
            nom: nom,
            prenom: prenom,
            email: email,
            password: password,
        }).then((response) => {
            console.log(response);
            alert("Utilisateur créer !!");
            alert("Veuillez vous connecter svp !!")
        });
    };

    // Login user 
    const [UserEmail, setUserEmail] = useState('');
    const [UserPassword, setUserPassword] = useState('');

    const login = (e) => {

        e.preventDefault()

        // regEx formulaire connexion 

        const regExemail = (value) => {
            return /^[\w-\.]+@([\w-]+\.)+[\w_]{2,4}$/.test(value);
          };
          if(!regExemail(UserEmail)){
              alert("Email invalid")
              return
          }

        // fetch requete post 

        Axios.post("http://localhost:3000/api/auth/login", {
            UserEmail: UserEmail,
            UserPassword: UserPassword,
        })
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("user_id", response.data.userId)
            localStorage.setItem("Admin", response.data.Admin)
            history.push("/home");
            alert("Utilisateur connecté !!");            
        });

    };

    return (
        <div>
        <nav id="nav_Logo_co">
            <img id="img_Logo_co" src={logo} alt="" />
        </nav>
            <section id="box_connexion">
                <section id="section_Login">
                    <div id="Block_Login">
                        <h1 id="txt_h1">Connexion</h1>
                        <form action="" method="" id="form_connexion" >
                            <label htmlFor="email_login" className="sr-only">email</label>
                            <input className='input_co' type="text" name="email" id="email_login" placeholder="Email..." autoComplete="off" onChange={(e) => { setUserEmail(e.target.value) }} required />
                            <br />
                            <label htmlFor="password_login" className="sr-only">password</label>
                            <input className='input_co' type="password" name="password" id="password_login" placeholder="password..." onChange={(e) => { setUserPassword(e.target.value) }} required />
                            <br />
                            <button className='Button' onClick={login}>
                                Connexion !
                            </button>
                            <br />
                        </form>
                    </div>
                </section>
                <section id="section_Signup">
                    <div id="Block_Signup">
                        <h1 id="txt_h1">Inscription</h1>
                        <form action="" method="post" id="form_inscription">
                            <label htmlFor="Nom" className="sr-only">nom</label>
                            <input className='input_co' type="text" name="nom" id="Nom" placeholder="Nom..." onChange={(e) => { setNom(e.target.value) }} required />
                            <br />
                            <label htmlFor="Prénom" className="sr-only">prenom</label>
                            <input className='input_co' type="text" name="prenom" id="Prénom" placeholder="Prénom..." onChange={(e) => { setPrenom(e.target.value) }} required />
                            <br />
                            <label htmlFor="email" className="sr-only">email</label>
                            <input className='input_co' type="email" name="email" id="email" placeholder="Email..." onChange={(e) => { setEmail(e.target.value) }} required />
                            <br />
                            <label htmlFor="password" className="sr-only">password</label>
                            <input className='input_co' type="password" name="password" id="password" placeholder="Password..." onChange={(e) => { setPassword(e.target.value) }} required />
                            <br />
                            <button className='Button' onClick={register}>
                                Inscription !
                            </button>
                        </form>
                    </div>
                </section>
            </section>
        </div>
    )
}
export default Connexion;