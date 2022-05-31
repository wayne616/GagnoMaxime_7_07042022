import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import '../../styles/Home.css';
import '../../styles/Mobile.css'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


function Home() {

    // Affichage des messages
    const [TextListReceived, setTextListReceived] = useState([]);
    useEffect(() => {
        Axios.get(`http://localhost:3000/api/home/${localStorage.user_id}`)
            .then((response) => {
                setTextListReceived(response.data);
                console.log(response.data);
            });
    }, []);

    // Affichage des messages
    const [TextList, setTextList] = useState([]);
    useEffect(() => {
        Axios.get(`http://localhost:3000/api/home/user/${localStorage.user_id}`)
            .then((response) => {
                setTextList(response.data);
                console.log(response.data);
            });

    }, []);

    // suppression du message
    const Delete = (Id) => {
        Axios.delete(`http://localhost:3000/api/home/${Id}`);
        Id.preventDefault(window.location.reload());
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
        Id.preventDefault(window.location.reload());
    };

    // création des commentaires 
    // const [NewCom, setNewCom] = useState("");

    // const commentaire_Send = (Id) => {
    //     Axios.post(`http://localhost:3000/api/home/com/${localStorage.user_id}`, {
    //          text : NewCom, 
    //     }).then((response) =>{
    //         console.log(response);
    //         setNewCom(response.data);
    //         console.log(response.data);
    //         // alert("com envoyer")
    //     })
    //     // e.preventDefault(window.location.reload())
    // };

    // //Affchage des commentaires
    // const [ComList, setComList] = useState([]);

    // useEffect(() => {
    //     Axios.get(`http://localhost:3000/api/home/com`)
    //     .then((response) => {
    //        setComList(response.data);
    //     });
    // }, []);

    // suppression du commentaire
    // const DeleteCom = (Id) => {
    //     Axios.delete(`http://localhost:3000/api/home/com/${Id}`)
    //     .then((response) => {
    //         console.log(response);
    //         alert("utilisateur supprimer")
    //       })
    //     // Id.preventDefault(window.location.reload());
    // };

    // Modification du commentaire 
    // const [Updatecom, setUpdateCom] = useState("");

    // const UpdateCom = (Id) => {
    //     Id.preventDefault()
    //     Axios.put(`http://localhost:3000/api/auth/home/com/${localStorage.user_id}`, {
    //         text: Updatecom,
    //     }).then((response) => {
    //         console.log(response);
    //         alert("Commentaire modifié ")
    //       })
    //     setNewCom("")
    //     // Id.preventDefault(window.location.reload());
    // };
    return (
        <div>
            <Header />
            <section id="Block_Actualité">
                <div id="Block_Contenue">
                    {TextListReceived.map((val) => {
                        return <div id="actualiter_received">
                            <div id="contenue">
                                <h3 id="UserName">{val.Prenom} {val.Nom}</h3>
                                <img id="img" src={val.img} alt="" />
                                <p id="text_received">{val.text}</p>
                            </div>
                        </div>
                    })
                    }
                    {TextList.map((val) => {
                        return <div id="actualiter_Send">
                            <div id="contenue">
                                <h3 id="UserName">{val.Prenom} {val.Nom} </h3>                                
                                <div id="block_item">
                                    <ul id="menu">
                                        <li><i className="fa-solid fa-bars"></i>
                                            <ul id="block_menu">
                                                <li>
                                                    <form action="" method="DELETE" id="form_txt_rc">
                                                        <button id="Delete" className="Button" onClick={() => { Delete(val.Id) }}>
                                                            <i className="fa-solid fa-trash-can"></i> Supprimer
                                                        </button>
                                                    </form>
                                                </li>
                                                <br />
                                                <li>
                                                    <form action="" method="PUT" id="form_txt_rc" >
                                                        <button id="Modify" className="Button" onClick={() => { Update(val.Id) }}>
                                                            {/* <input type="text" id=""  placeholder="Modifier" /> */}
                                                            {/* <input name='image' type="file" onChange={(e) => {setImg(e.target.files[0])}}/> */}
                                                            <i className="fa-solid fa-pen-to-square"></i>
                                                        </button>
                                                        <textarea name="text" id="txt_modify" onChange={(e) => { setnewText(e.target.value) }} placeholder=" Modifier moi !"></textarea>
                                                    </form>
                                                </li>
                                                <br />
                                                <li>
                                                    <form action="" method="PUT" id="form_txt_rc">
                                                        <button id="img_Modify" onClick={() => { Update(val.Id) }}>
                                                            <i className="far fa-image icone"></i>
                                                        </button>
                                                        <input id="file" name='image' type="file" onChange={(e) => { setImg(e.target.files[0]) }} />
                                                    </form>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                               
                                <img id="img" src={val.img} alt="" />
                                <p id="text_received">{val.text}</p>

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
