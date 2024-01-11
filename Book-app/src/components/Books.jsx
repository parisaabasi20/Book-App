import React, { useState } from 'react'
import { books } from "../constants/mockData";
import BookCard from './BookCard';
import SideCard from './SideCard';

import styles from "./Books.module.css";

function Books() {
  const [likedBooks , setLikedBooks] = useState([]);

  const likedBoolHandler =(book,status)=>{
      if(status){
        const newList=likedBooks.filter(i=>i.id !== book.id);
        setLikedBooks(newList);
      }else{
        setLikedBooks(likedBooks =>[...likedBooks, book]);
      }
  }
  return (
    <div className={styles.container}>
        <div className={styles.bookList}>
            {books.map((book) => <BookCard key={book.id} data={book} likedBoolHandler={likedBoolHandler}/>)}
        </div>
        
        {!!likedBooks.length && 
        <div className={styles.favorite}>
          <h1>Favorites</h1>
          {likedBooks.map(book=><SideCard key={book.id} data={book}/>)}</div>}
    </div>
  )
}

export default Books