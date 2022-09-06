import React, { useState } from 'react';
import Axios from 'axios';

import "../../styles/btn_likes.css";

export default function App(props) {

  // button likes

  const [likes, setLikes] = useState(0);

  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = (e) => {
    e.preventDefault()

    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    } 
    setIsClicked(!isClicked);

    Axios.post(`http://localhost:3000/api/home/likes/${localStorage.user_id}`,
    {post_id : props.Id})
    window.location.reload()
  };

  return (
    <div id="Block_items">
      <button className={`like-button ${isClicked}`} onClick={handleClick}>
      <i class="fa-solid fa-heart"> <span>{`likes | ${props.Likes} `}</span></i>
      </button>
    </div>    
  );
}
