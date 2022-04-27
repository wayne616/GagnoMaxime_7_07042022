import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import '../../styles/Home.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Home() {

    const [TextList, setTextList] = useState([]); 
    const Modify = {}; 
    useEffect(() => {
        Axios.get("http://localhost:3000/api/home")
        .then((response) => {
           setTextList(response.data);
        });
    }, []);

    const Delete = (text) => {
        // text.preventDefault(window.location.reload());
        Axios.delete(`http://localhost:3000/api/home/`)
        // Axios.delete(`http://localhost:3000/api/home/${text}`);
    };

  return (
<div>
    <Header/>
    <section id="Block_Actualité">
        <div id="Block_Contenue">
            {TextList.map((val) => {
                return  <div id="actualiter_received">
                <h3 id="UserName">Name_test</h3>
                <p id="text_received">{val.text}</p>
                <button id="Delete" class="Button" onClick={ () => {Delete(val.TextList)} }>
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <button id="Modify" class="Button" onClick={Modify}>
                    <i class="fa-solid fa-pen-to-square"></i>
                    {/* <textarea name="" id="" cols="15" rows="1"></textarea> */}
                </button>
                </div>
            })
            }
            <div id="actualiter_send">
                <h3>Name_test</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolor magnam, ratione quam minima
                    reprehenderit, repellendus praesentium possimus et soluta atque rerum. Animi tenetur accusantium
                    placeat natus repellendus temporibus officia.</p>
            </div>

        </div>

    </section>
    <Footer/>
</div>
  );
}


export default Home;
