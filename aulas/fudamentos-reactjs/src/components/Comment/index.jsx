import React from 'react';
import styles from "./styles.module.css";

export const Comment = () => {
  return (
    <div className={styles.comment}>
        <img src="https://github.com/tarcisioCarvalho.png"/>
        <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header></header>
                    <p></p>
                </div>
                <footer>
                    Aplaudir
                </footer>
        </div>
    </div>
  )
}
