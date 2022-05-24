import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import '../../styles/Home.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Home() {

    // Affichage des messages
    const [TextList, setTextList] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3000/api/home")
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
            formData.append("text",newText)
            formData.append("image",Img)
        Axios.put(`http://localhost:3000/api/home/${Id}`,
            formData
        ).then((response) =>{
            console.log(response);
            alert("message update")
        })
        setnewText("")
        // Id.preventDefault(window.location.reload());
    };

    // création des commentaires 
    const [Com, setCom] = useState('');

    const commentaire_Send = (e) => {
        Axios.post(`http://localhost:3000/api/home/com/${localStorage.user_id}`, {
            text : Com ,
        }).then((response) =>{
            console.log(response);
            // alert("com envoyer")
        })
        // e.preventDefault(window.location.reload())
    };

    //Affchage des commentaires
    const [ComList, setComList] = useState([]);
    
    useEffect(() => {
        Axios.get(`http://localhost:3000/api/home/com`)
        .then((response) => {
           setComList(response.data);
        });
    }, []);

    // suppression du commentaire
    const DeleteCom = (Id) => {
        Axios.delete(`http://localhost:3000/api/home/com/${localStorage.user_id}`)
        .then((response) => {
            console.log(response);
            alert("utilisateur supprimer")
          })
        // Id.preventDefault(window.location.reload());
    };

    // Modification du commentaire 
    const [newCom, setNewCom] = useState("");

    const UpdateCom = (Id) => {
        Axios.put(`http://localhost:3000/api/home/com/${Id}`, {
            com: newCom,
        });
        setNewCom("")
        // Id.preventDefault(window.location.reload());
    };
  return (
<div>
    <Header/>
    <section id="Block_Actualité">
        <div id="Block_Contenue">
            {TextList.map((val) => {
                return  <div id="actualiter_received">
                    <div id="test">
                <h3 id="UserName">{val.Prenom}</h3>
                <img id="img" src={val.img} alt="" />
                <p id="text_received">{val.text}</p>
                {/* <p>{val.date}</p> */}
                <button id="Delete" className="Button" onClick={ () => {Delete(val.Id)}}>Supprimer
                    <i className="fa-solid fa-trash-can"></i>
                </button>
                <button id="Modify" className="Button" onClick={()=> {Update(val.Id)}}>
                    <input type="text" id="" onChange={(e) => {setnewText(e.target.value)}} required placeholder="Modifier"/>
                    {/* <input name='image' type="file" onChange={(e) => {setImg(e.target.files[0])}}/> */}
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button id="img_Modify">
                    <input name='image' type="file" onChange={ (e) => {setImg(e.target.files[0])}} />
                </button>
                <button id="commentaire" className="Button" methode="POST" onClick={commentaire_Send}>
                    <input type="text" id="com"  placeholder="commentaire" onChange={(e) => {setCom(e.target.value)}} required />
                    <i className="fa-solid fa-comment-dots" ></i>
                </button>
                {/* <button onChange={(e) => {setImg(e.target.files[0])}}>
                        <i classNameName="far fa-image icone"></i>
                        <input name='image' type="file" />
                    </button> */}

                </div>
                {ComList.map((valCom) => {
                return <div id="Com_received"> 
                        <h3 id="name_com">{valCom.Prenom}</h3>
                        <p id="com_txt">{valCom.text}</p>
                        <button id="Delete" className="Button" onClick={ () => {DeleteCom(valCom.Id)} }>Supprimer
                        <i className="fa-solid fa-trash-can"></i>
                        </button>
                        <button id="Modify" className="Button" onClick={()=> {UpdateCom(valCom.Id)}}>
                            <input type="text" id="" onChange={(e) => {setNewCom(e.target.value)}} required placeholder="Modifier"></input>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                      </div>
            })
            }

                </div>
            })
            }
        </div>
    </section>
    <Footer/>
</div>
  );
}


export default Home;
