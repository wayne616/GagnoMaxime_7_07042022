import React, { useState } from "react";
import Axios from 'axios';

import "../../styles/btn_likes.css";

export default function App() {

  // let User_id = JSON.parse(localStorage.getItem(("user_id")));

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const [isClicked, setIsClicked] = useState(false);
  const [IsClicked, setIsClickeD] = useState(false);
  
  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    } 
    console.log(isClicked);
    setIsClicked(!isClicked);

    Axios.post(`http://localhost:3000/api/home/likes/${localStorage.user_id}`,
    ).then((res) => {
      console.log(res);
      
    });
    
    
  };

  const handleClickDislikes = () => {
    if (IsClicked) {
      setDislikes(dislikes - 1);
    } else {
      setDislikes(dislikes + 1);
    }
    console.log(isClicked);
    setIsClickeD(!IsClicked);

    Axios.post(`http://localhost:3000/api/home/dislikes/${localStorage.user_id}`,
    ).then((res) => {
      console.log(res);
    });
  };

  // const btn_like = document.querySelector('#btn_likes').value;
  // const btn_dislike = document.querySelector('#btn_dislikes').value; 
  // const data={
  //   likes : btn_like,
  //   dislikes : btn_dislike
  // };
  // const key=test;
  // window.localStorage.setItem(key, data);

  // const val = JSON.stringify(data);
  // window.localStorage.setItem(key, val);

  // value = JSON.parse(window.localStorage.getItem(key));


  // localStorage.setItem(("likes", "dislikes" , "user_id"), JSON.stringify(likes, dislikes ));
  // const storedLikes = JSON.parse(localStorage.getItem("likes"));
  // console.log(storedLikes);

  // localStorage.likes = JSON.stringify(likes);
  // const storedLikes =JSON.parse(localStorage.likes);

  // function remplissageStockage() {
  //   localStorage.setItem('bgcolor', 'red');
  //   localStorage.setItem('font', 'Helvetica');
  //   localStorage.setItem('image', 'myCat.png');
  // }  
  return (
    <div id="Block_items">
      <div id="btn_likes" >
        <button className={`like-button ${isClicked}`} onClick={handleClick}>
          <span className="likes-counter">{`Like | ${likes}`}</span>
        </button>
      </div>
      <div id="btn_dislikes">
        <button
          className={`like-button ${IsClicked && "dislike"}`}
          onClick={handleClickDislikes}
        >
          <span className="likes-counter">{`Dislike | ${dislikes}`}</span>
        </button>
      </div>
    </div>
  );
}
