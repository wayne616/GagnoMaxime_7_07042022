import React, { useState } from 'react';

import Axios from 'axios';

import '../../styles/Footer.css';


function Footer() {

    const [text, setText] = useState('');
    const [Img, setImg] = useState(null);


    const message_Send = (e) => {

        e.preventDefault()

        const regExMessage = (value) => {
            return /^[a-zA-Z0-9\s-]{3,250}$/.test(value);
          };
        if(!regExMessage(text)){
            alert("Le message ne peut pas être vide !")
            return
        }   
        
        const formData = new FormData();
        formData.append("text", text)
        formData.append("image", Img)
        formData.append("user_id", localStorage.user_id)
        Axios.post("http://localhost:3000/api/home/",
            formData
        ).then(() => {
            alert("message envoyer")
            window.location.reload()
        })
    };



    return (
        <footer>
            <div id="Block_txt">
                    <form id="form_txt">
                    <label htmlFor="text" className="sr-only">Quoi de neuf</label>
                        <input name="text" id="text" onChange={(e) => { setText(e.target.value) }} required placeholder=" Quoi de neuf ?"/>
                        <div id="btn">

                            <div className="wrap"> 
                                <div className="btt_footer button">
                                    <i className="far fa-image icone"></i>
                                    <label htmlFor="file" className="label">Photo</label>
                                    <input name='image'className="input-file" type="file" id="file" onChange={(e) => { setImg(e.target.files[0]) }} />
                                </div>
                            </div>

                            <div className="wrap">      
                                <button className="btt_footer button item_btn" metode="POST" onClick={message_Send} required ><i className="far fa-paper-plane icone"></i>Envoyer</button>
                            </div>
                        </div>
                    </form>
            </div>
        </footer>

    )
}

export default Footer