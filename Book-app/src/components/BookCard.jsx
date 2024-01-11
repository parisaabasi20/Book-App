import React, { useState } from 'react';
import { GoHeartFill } from "react-icons/go";

import styles from './BookCard.module.css';


function BookCard({data}) {
    const {id , title, author,image,pages,language} =data;
    const[like, setLike]=useState(false);

    const likeHandler=()=>{
      setLike(like => !like);
    }

  return (
    <div className={styles.container}>
        <img src={image} alt={title}/>
        <div className={styles.info}>
          <h3>{title}</h3>
          <p>{author}</p>
          <div>
            <span>{language}</span><span>{pages} pages</span>
          </div>
        </div>
        <button onClick={likeHandler}><GoHeartFill font-size="1.5rem" color={like?"red":"#fff"}/></button>

    </div>
  )
}

export default BookCard