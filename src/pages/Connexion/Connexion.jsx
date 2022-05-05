import React, { useState } from 'react';
// import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import logo from '../../assets/logo.png';
import '../../styles/connexion.css';

// const User_Regex = /^[a-zA-Z] [a-zA-z0-9-_]{3,23}$/;
// const Pwd_Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function Connexion() {
    
    const [nom , setNom] = useState('');
    const [prenom , setPrenom] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const [UserEmail, setUserEmail] = useState('');
    const [UserPassword, setUserPassword] = useState('');

    // const [loginStatus, setLoginStatus] = useState("");

    const history = useHistory();

    // Axios.defaults.withCredentials = true;

    const register = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:3000/api/auth/signup", {
            nom: nom, 
            prenom: prenom, 
            email: email, 
            password: password,
        }).then((response) =>{
            console.log(response);
            // history.push("/home");
            alert("utilisateur créer !!");
        });
    };

    const login = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:3000/api/auth/login", {
            UserEmail: UserEmail, 
            UserPassword: UserPassword,
        }).then((response) =>{
            console.log(response.data.token);
            localStorage.setItem("token", response.data.token)
            history.push("/home");
            alert("utilisateur connecté !!");
        });
        
    };

    
    return (
        <div>
            <nav id="nav_Logo">
                <img id="img_Logo" src={logo} alt="" />
            </nav>
            <section id="box_connexion">
                <section id="section_Login">
                    <div id="Block_Login">
                        <h2 id="txt_Connexion">Connexion</h2>
                        <form action="" method="" id="form_connexion" >
                            <input type="text" name="email" id="email_login" placeholder="Email..." autoComplete="off" onChange={(e) => {setUserEmail(e.target.value)}} required />
                            <br />
                            <input type="password" name="password" id="password_login" placeholder="password..."  onChange={(e) => {setUserPassword(e.target.value)}} required />
                            <br />
                            <button onClick={login}>
                                Connexion !
                            </button>
                            <br />
                        </form>
                    </div>
                </section>
                <section id="section_Singup">
                    <div id="Block_Singup">
                        <h2 id="txt_inscription">Inscription</h2>
                        <form action="" method="post" id="form_inscription">
                            <input type="text" name="nom" id="Nom" placeholder="Nom..." onChange={(e)=> {setNom(e.target.value)}} required />
                            <br />
                            <input type="text" name="prenom" id="Prénom" placeholder="Prénom..." onChange={(e)=> {setPrenom(e.target.value)}} required />
                            <br />
                            <input type="email" name="email" id="email" placeholder="Email..." onChange={(e)=> {setEmail(e.target.value)}} required />
                            <br />
                            <input type="text" name="password" id="password" placeholder="Password..." onChange={(e)=> {setPassword(e.target.value)}} required />
                            <br />
                            <button onClick={register}>
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