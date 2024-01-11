import React from 'react'

import styles from "./Layout.module.css";

function Layout({children}) {
  return (
    <div>
        <header className={styles.header}>
           <h1>Books App</h1>
           <p><a href='#'>Bookshop</a>| introducation of Anticipated Books of 2024</p>
        </header>
          {children}
        <footer className={styles.footer}>Developed By parisa</footer>
    </div>
  )
}

export default Layout