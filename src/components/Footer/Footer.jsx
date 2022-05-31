import React, { useState } from 'react';

import Axios from 'axios';

import '../../styles/Footer.css';

function Footer() {

    const [text, setText] = useState('');
    const [Img, setImg] = useState(null);


    const message_Send = (e) => {
        const formData = new FormData();
        formData.append("text", text)
        formData.append("image", Img)
        formData.append("user_id", localStorage.user_id)
        Axios.post("http://localhost:3000/api/home/",
            formData
        ).then((response) => {
            console.log(response);
            // alert("message envoyer")
        })
        e.preventDefault(window.location.reload())
    };



    return (
        <footer>
            <div id="Block_txt">
                <div id="champ_txt">
                    <form action="" method="post" id="form_txt">
                        <textarea name="text" id="text" onChange={(e) => { setText(e.target.value) }} required placeholder=" Quoi de neuf ?"></textarea>
                        <div id="btn">
                            <button >
                                <i className="far fa-image icone"></i>
                                <input name='image' type="file" onChange={(e) => { setImg(e.target.files[0]) }} />
                            </button>
                            <button metode="POST" onClick={message_Send} required ><i className="far fa-paper-plane icone"></i>Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </footer>

    )
}

export default Footer