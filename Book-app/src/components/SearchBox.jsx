import React from 'react';
import { LuSearch } from "react-icons/lu";


import styles from "./SearchBox.module.css";

function SearchBox({search,setSearch,searchHandler}) {
  return (
    <div>
        <input className={styles.input} value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} placeholder='Search...' type='text'/>
        <button className={styles.button} onClick={searchHandler}><LuSearch /></button>
    </div>
  )
}

export default SearchBox