// import React, { useState, useEffect } from 'react';
import React from 'react';
// import { useHistory } from "react-router-dom";
import axios from 'axios';
import logo from '../../assets/logo.png';
import '../../styles/connexion.css';
import { state } from '../../../back-end/config/DB';

// const User_Regex = /^[a-zA-Z] [a-zA-z0-9-_]{3,23}$/;
// const Pwd_Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function Connexion() {

    // const [nom , setNom] = useState('');
    // const [prenom , setPrenom] = useState('');
    // const [email , setEmail] = useState('');
    // const [password , setPassword] = useState('');

    // const [UserEmail, setUserEmail] = useState('')
    // const [UserPassword, setUserPassword] = useState('')

    // // const history = useHistory();

    // Axios.defaults.withCredentials = true;

    // const register = () => {
    //     Axios.post('/auth', {
    //         nom: nom, 
    //         prenom: prenom, 
    //         email: email, 
    //         password: password,
    //     }).then((reponse) =>{
    //         console.log(reponse);
    //         alert("utilisateur créer !!");
    //     });
    // };

    // const login = () => {
    //     Axios.post('/login', {
    //         UserEmail: UserEmail, 
    //         UserPassword: UserPassword,
    //     }).then((reponse) =>{
    //         console.log(reponse.data);
    //         alert("utilisateur connecte !!");
    //     });
        
    // };

    // useEffect(()=>{
    //     Axios.get('/login')
    //     .then((reponse) =>{
    //         console.log(reponse);
    //     })
    // }, []);
    state = {
        nom : '',
        prenom : '',
        email : '',
        password : '',
    }

    handleChange = event => {
        this.setState({ 
            nom: event.target.value, 
            prenom: event.target.value, 
            email: event.target.value, 
            password: event.target.value,

        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: this.state.name
        };
    
        axios.post(`http://localhost:3001/auth`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    
    return (
        <div>
            <nav id="nav_Logo">
                <img id="img_Logo" src={logo} alt="" />
            </nav>
            <section id="box_connexion">
                <section id="section_Login">
                    <div id="Block_Login">
                        <h2 id="txt_Connexion">Connexion</h2>
                        <form onSubmit={this.handleSubmit} action="" method="post" id="form_connexion" >
                            <input type="text" name="email" id="email_login" placeholder="Email..." onChange={this.handleChange} required />
                            <br />
                            <input type="password" name="password" id="password_login" placeholder="password..."  onChange={this.handleChange} required />
                            <br />
                            <button type="submit">
                                Connexion !
                            </button>
                            <br />
                        </form>
                    </div>
                </section>
                <section id="section_Singup">
                    <div id="Block_Singup">
                        <h2 id="txt_inscription">Inscription</h2>
                        <form onSubmit={this.handleSubmit} action="" method="post" id="form_inscription">
                            <input type="text" name="nom" id="Nom" placeholder="Nom..." onChange={this.handleChange} required />
                            <br />
                            <input type="text" name="prenom" id="Prénom" placeholder="Prénom..." onChange={this.handleChange} required />
                            <br />
                            <input type="email" name="email" id="email" placeholder="Email..." onChange={this.handleChange} required />
                            <br />
                            <input type="text" name="password" id="password" placeholder="Password..." onChange={this.handleChange} required />
                            <br />
                            <button type="submit">
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