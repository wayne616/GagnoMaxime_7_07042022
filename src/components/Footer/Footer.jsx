import React, { useState } from 'react';

import Axios from 'axios';

import '../../styles/Footer.css';

function Footer(){

    const [text, setText] = useState('');

    const message_Send = (e) => {
        e.preventDefault(window.location.reload())
        Axios.post("http://localhost:3000/api/home/", {
            text : text ,
        }).then((response) =>{
            console.log(response);
            alert("message envoyer")
        })
    };


    return(
        <footer>
            <div id="Block_txt">
                <div id="champ_txt">
                <form action="" method="post" id="form_txt">
                    <textarea name="text" id="text" onChange={(e) => {setText(e.target.value)}} required placeholder=" Quoi de neuf ?"></textarea>
                    <div id="btn">
                        <button ><i className="far fa-image icone"></i>Photo</button>
                        <button metode="POST" onClick={message_Send}><i className="far fa-paper-plane icone"></i>Envoyer</button>
                    </div>
                </form>
                </div>
            </div>
        </footer>
    
    )
}

export default Footer