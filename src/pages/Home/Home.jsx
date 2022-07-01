import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import '../../styles/Home.css';
import '../../styles/Mobile.css'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {

    let Admin = JSON.parse(localStorage.getItem(("Admin")));
    let User_id = JSON.parse(localStorage.getItem(("user_id")));
    console.log(Admin);
    console.log(User_id);

    // Affichage des messages
    const [TextListReceived, setTextListReceived] = useState([]);
    useEffect(() => {
        Axios.get(`http://localhost:3000/api/home/${localStorage.user_id}`)
            .then((response) => {
                setTextListReceived(response.data);
            });
    }, []);

    // suppression du message
    const Delete = (Id) => {
        Axios.delete(`http://localhost:3000/api/home/${Id}`,
        ).then((response) => {
            console.log(response);
            alert("message supprimer")
        }) 
    };

    // Modification du message 
    const [newText, setnewText] = useState("");
    const [Img, setImg] = useState(null);

    const Update = (Id) => {
        const formData = new FormData();
        formData.append("text", newText)
        formData.append("image", Img)
        Axios.put(`http://localhost:3000/api/home/${Id}`,
            formData
        ).then((response) => {
            console.log(response);
            alert("message update")
        })
        setnewText("")
    };

    return (
        <div>
            <Header />
            <section id="Block_Actualité">
                <div id="Block_Contenue">
                    {TextListReceived.map((val, index) => {
                        return <div id={"index" + index}>
                            <div id="actualiter_received">

                                <div id="block_info">
                                    <div>
                                        <h3 id="UserName">{val.Prenom} {val.Nom}</h3>
                                        <p id="Time">{val.date}</p>
                                    </div>
                                </div>

                                <div id="block_contenue">
                                    <div id="contenue">
                                        <img id="img" src={val.img} alt=""></img>
                                        <p id="text_received">{val.text}</p>
                                    </div>
                                </div>

                                <div id="block_menu">
                                            {User_id ?
                                                <nav id='nav'>
                                                    <form method="PUT" id="form_txt_rc" className="Btn_Update_file">
                                                            <button className="Button" id="img_Modify" onClick={() => { Update(val.Id) }}>
                                                                <i className="far fa-image icone"></i> 
                                                            </button>
                                                                <label htmlFor={"file" + index} className="label sr-only">Photo</label>
                                                                <input className="input_home" id={"file" + index} name='image' type="file" onChange={(e) => { setImg(e.target.files[0]) }} />
                                                    </form>

                                                    <form method="PUT" id="form_txt_rc" className="Btn_Update">
                                                        <button id="Modify" className="Button" onClick={() => { Update(val.Id) }}>
                                                            <i className="fa-solid fa-pen-to-square"></i>
                                                        </button>
                                                            <label htmlFor={"txt_modify" + index} className="sr-only">Modifier moi</label>
                                                            <input name="text" className='input_home' id={"txt_modify" + index} onChange={(e) => { setnewText(e.target.value) }} placeholder=" Modifier moi !" />
                                                    </form>
                                                
                                                    <form method="DELETE" id="form_txt_rc" className="Btn_Delete">
                                                        <button id="Delete" className="Button" onClick={() => { Delete(val.user_id, val.Admin) }}>
                                                            <i className="fa-solid fa-trash-can"></i>
                                                            Supprimer
                                                        </button>
                                                    </form>
                                                </nav> : null
                                            }
                                    </div>


                            </div>
                        </div>
                    })
                    }
                </div>
            </section>
            <Footer />
        </div>
    );
}


export default Home;
