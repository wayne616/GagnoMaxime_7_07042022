import React, { useState, useEffect } from 'react';
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

  // Affichage des messages

  const [Likes, getlikes] = useState("");

  // const getAllLikes = () => { 
  //     Axios.get(`http://localhost:3000/api/home/likes`)
  //     .then((response) => {
  //       const AllLikes = response.data.Likes;
  //       getlikes(AllLikes);
  //     })
  //     .catch(error => console.error(`Error : ${error}`)); 
  //   }

    // useEffect(() => {
    //   getAllLikes(props.Id);
    //   console.log(getAllLikes);
    // }, [props.Id]);
 
  useEffect(() => {
      Axios.get(`http://localhost:3000/api/home/likes`,
      ).then((results) => {
        console.log(results.props.likes, "jsx");
          getlikes(results.props.likes)
      });

  }, [props.likes]);

  return (
    <div id="Block_items">
      <button className={`like-button ${isClicked}`} onClick={handleClick}>
        <span>{`likes | ${Likes} `}</span>
      </button>
    </div>    
  );
}
