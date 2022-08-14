import React, { useState } from "react";
import Axios from 'axios';

import "../../styles/btn_likes.css";

export default function App() {
  const [likes, setLikes] = useState("");
  const [dislikes, setDislikes] = useState("");

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
  };

  const handleClickDislikes = () => {
    if (IsClicked) {
      setDislikes(dislikes - 1);
    } else {
      setDislikes(dislikes + 1);
    }
    console.log(isClicked);
    setIsClickeD(!IsClicked);
  };

      const updateLikes = (Id) => {
        Axios.post(`http://localhost:3000/api/home/likes/${Id}`,
        ).then((response) => {
            console.log(response);
            // window.location.reload()
        }) 
    };

  return (
    <div id="Block_items">
      <div id="btn_likes" onClick={updateLikes}>
        <button className={`like-button ${isClicked}`} onClick={handleClick}>
          <span className="likes-counter">{`Like | ${likes}`}</span>
        </button>
      </div>
      <div id="btn_dislikes" onClick={updateLikes}>
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
