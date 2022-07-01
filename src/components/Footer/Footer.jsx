import React, { useState } from 'react';

import Axios from 'axios';

import '../../styles/Footer.css';
import '../../styles/Mobile.css';


function Footer() {

    const [text, setText] = useState('');
    const [Img, setImg] = useState(null);


    const message_Send = (e) => {

        // const regExText = (value) => {
        //     return /^[A-Za-z]{2,20}$/.test(value);
        //   };

        // if(!regExText (text)){
        //     alert("Le message ne peut pas être vide !!!")
        //     return
        // }
        const formData = new FormData();
        formData.append("text", text)
        formData.append("image", Img)
        formData.append("user_id", localStorage.user_id)
        Axios.post("http://localhost:3000/api/home/",
            formData
        ).then((response) => {
            console.log(response);
            alert("message envoyer")
        })
        e.preventDefault(window.location.reload())
    };



    return (
        <footer>
            <div id="Block_txt">
                    <form action="" method="post" id="form_txt">
                    <label htmlFor="text" className="sr-only">Quoi de neuf</label>
                        <input name="text" id="text" onChange={(e) => { setText(e.target.value) }} required placeholder=" Quoi de neuf ?"/>
                        <div id="btn">

                            <div className="wrap"> 
                                <button className="btt_footer button">
                                    <i className="far fa-image icone"></i>
                                    <label htmlFor="file" className="label">Photo</label>
                                    <input name='image'className="input-file" type="file" id="file" onChange={(e) => { setImg(e.target.files[0]) }} />
                                </button>
                            </div>

                            <div className="wrap">      
                                <button className="btt_footer button" metode="POST" onClick={message_Send} required ><i className="far fa-paper-plane icone"></i>Envoyer</button>
                            </div>
                        </div>
                    </form>
            </div>
        </footer>

    )
}

export default Footer