import React, { useState } from 'react'
import { books as bookData } from "../constants/mockData";
import BookCard from './BookCard';
import SideCard from './SideCard';

import styles from "./Books.module.css";
import SearchBox from './SearchBox';

function Books() {
  const [likedBooks , setLikedBooks] = useState([]);
  const [books,setBooks] =useState(bookData);
  const [search,setSearch] =useState([]);

  const likedBoolHandler =(book,status)=>{
      if(status){
        const newList=likedBooks.filter(i=>i.id !== book.id);
        setLikedBooks(newList);
      }else{
        setLikedBooks(likedBooks =>[...likedBooks, book]);
      }
  }

  const searchHandler=()=>{
    if(search){
      const newBooks=bookData.filter(book=>book.title.toLowerCase().includes(search));
      setBooks(newBooks);

    }else{
      setBooks(bookData);
    }
  }

  return (
    <>
    <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler}/>
    <div className={styles.container}>
        <div className={styles.bookList}>
            {books.map((book) => <BookCard key={book.id} data={book} likedBoolHandler={likedBoolHandler}/>)}
        </div>
        
        {!!likedBooks.length && 
        <div className={styles.favorite}>
          <h1>Favorites</h1>
          {likedBooks.map(book=><SideCard key={book.id} data={book}/>)}</div>}
    </div>
    </>
  )
}

export default Books