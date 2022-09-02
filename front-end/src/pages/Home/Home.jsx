import React, { useState, useEffect } from 'react';

import moment from 'moment';
import 'moment/locale/fr';

import Axios from 'axios';

import '../../styles/Home.css';


import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Likes from '../../components/btn_likes/btn_likes';


const Home = () => {

    let Admin = JSON.parse(localStorage.getItem(("Admin")));
    let User_id = JSON.parse(localStorage.getItem(("user_id")));

    moment.locale('fr');


    // Affichage des messages
    const [TextListReceived, setTextListReceived] = useState([]);
    useEffect(() => {
        Axios.get(`http://localhost:3000/api/home`)
            .then((response) => {
                setTextListReceived(response.data);
            });
    }, []);

    // suppression du message
    const Delete = (Id) => {
        Axios.delete(`http://localhost:3000/api/home/${Id}`,
        ).then((response) => {
            alert("message supprimer")
            window.location.reload()
        }) 
    };

    // suppression message Admin
    const DeleteAdmin = (Id) => {
        Axios.delete(`http://localhost:3000/api/home/${Id}/${localStorage.Admin}`,
        ).then((response) => {
            alert("message supprimer")
            window.location.reload()
        }) 
    };
    
    // Modification du message 
    const [newText, setnewText] = useState("");
    const [Img, setImg] = useState(null);

    const Update = (e, Id) => {
        e.preventDefault()

        const regExMessage = (value) => {
            return /^[a-zA-Z0-9\s-]{3,250}$/.test(value);
          };
        if(!regExMessage(newText)){
            alert("Le message ne peut pas être vide !")
            return
        }       
        if(!Img) {
            alert("L'image ne peut pas être vide !")
            return
        }
        const formData = new FormData();
        formData.append("text", newText)
        formData.append("image", Img)
        Axios.put(`http://localhost:3000/api/home/${Id}`,
            formData
        ).then((response) => {
            alert("message update")
            window.location.reload()
        })
        setnewText("")
    };

    return (
        <div>
            <Header />
            <section id="Block_Actualité">
                <div id="Block_Contenue">
                    {TextListReceived.map((val, index) => {
                        return <div key={val.Id} id={"index" + index}>
                            <div id="actualiter_received">

                                <div id="block_info">
                                    <div id="info">
                                        <h1 id="UserName">{val.Nom} {val.Prenom}</h1>
                                        <p id="Time">Il y a {moment(val.date).startOf('secondes').fromNow('fr')}</p>
                                        {User_id === val.user_id ?
                                            <div id="item">
                                                <form id="form_txt_rc" className="Btn_Delete">
                                                    <button id="Delete" className="Button" onClick={() => { Delete(val.Id) }}>
                                                        <i className="fa-solid fa-trash-can"></i>
                                                        Supprimer
                                                    </button>
                                                </form>
                                            </div> : null ||
                                            Admin ?
                                            <div id="item">
                                                <form id="form_txt_rc" className="Btn_Delete">
                                                    <button id="Delete" className="Button" onClick={() => { DeleteAdmin(val.Id) }}>
                                                        <i className="fa-solid fa-trash-can"></i>
                                                        Supprimer
                                                    </button>
                                                </form>
                                            </div> : null
                                        }
                                    </div>
                                </div>

                                <div id="block_contenue">
                                    <div id="contenue">
                                        <img id="img" src={val.img} alt=""></img>
                                        <p id="text_received">{val.text}</p>
                                    </div>
                                </div>

                                <div id="block_menu">
                                            {User_id === val.user_id ?
                                                <nav id='nav_home'>
                                                    <form method="PUT" id="form_txt_rc" className="Btn_Update_file">
                                                            <button aria-label={"file" + index} className="Button" id="img_Modify" onClick={(e) => { Update(e, val.Id) }}>
                                                                <i className="far fa-image icone"></i> 
                                                            </button>
                                                                <label htmlFor={"file" + index} className="label sr-only">Photo</label>
                                                                <input className="input_home" id={"file" + index} name='image' type="file" onChange={(e) => { setImg(e.target.files[0]) }} />
                                                    </form>

                                                    <form method="PUT" id="form_txt_rc" className="Btn_Update">
                                                            <label htmlFor={"txt_modify" + index} className="sr-only">Modifier moi</label>
                                                            <input name="text" className='input_home' id={"txt_modify" + index} onChange={(e) => { setnewText(e.target.value) }} placeholder=" Modifier moi !" />
                                                    </form>
                                                
                                                </nav> : null
                                            }
                                    </div>
                                <Likes Id={val.Id + val.likes}/>
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
