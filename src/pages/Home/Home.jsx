import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import '../../styles/Home.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Home() {

    // Affichage des messages depuis la bdd
    const [TextList, setTextList] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3000/api/home")
        .then((response) => {
           setTextList(response.data);
        });
    }, []);

    // suppresion du message
    const Delete = (Id) => {
        Axios.delete(`http://localhost:3000/api/home/${Id}`);
        Id.preventDefault(window.location.reload());
    };

    // Modification du message 
    const [newText, setnewText] = useState("");

    const Update = (Id) => {
        Axios.put(`http://localhost:3000/api/home/${Id}`, {
            text: newText,
        });
        setnewText("")
        // Id.preventDefault(window.location.reload());
    };

    // création des commentaires 
    const [Com, setCom] = useState('');

    const commentaire_Send = (e) => {
        Axios.post("http://localhost:3000/api/home/com", {
            com : Com ,
        }).then((response) =>{
            console.log(response);
            // alert("com envoyer")
        })
        e.preventDefault(window.location.reload())
    };

    //Affchage des commentaires
    const [ComList, setComList] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3000/api/home/com")
        .then((response) => {
           setComList(response.data);
        });
    }, []);

    // suppresion du message
    const DeleteCom = (Id) => {
        Axios.delete(`http://localhost:3000/api/home/com/${Id}`);
        Id.preventDefault(window.location.reload());
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
                <h3 id="UserName">Name_test</h3>
                <p id="text_received">{val.text}</p>
                <button id="Delete" class="Button" onClick={ () => {Delete(val.Id)} }>Supprimer
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <button id="Modify" class="Button" onClick={()=> {Update(val.text)}}>
                    <input type="text" id="" onChange={(e) => {setnewText(e.target.value)}} required placeholder="Modifier"></input>
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button id="commentaire" class="Button" methode="POST">
                    <input type="text" id="com"  placeholder="commentaire" onChange={(e) => {setCom(e.target.value)}} required></input>
                    <i class="fa-solid fa-comment-dots" onClick={commentaire_Send} ></i>
                </button>
                </div>
                {ComList.map((valCom) => {
                return <div id="Com_received"> 
                        <h3 id="name_com">Name_test</h3>
                        <p id="com_txt">{valCom.Com}</p>
                        <button id="Delete" class="Button" onClick={ () => {DeleteCom(valCom.Id)} }>Supprimer
                        <i class="fa-solid fa-trash-can"></i>
                        </button>
                        <button id="Modify" class="Button" onClick={()=> {UpdateCom(valCom.com)}}>
                            <input type="text" id="" onChange={(e) => {setNewCom(e.target.value)}} placeholder="Modifier"></input>
                            <i class="fa-solid fa-pen-to-square"></i>
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
