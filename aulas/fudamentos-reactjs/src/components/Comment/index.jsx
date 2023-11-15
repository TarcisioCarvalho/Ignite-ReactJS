import React from 'react';
import styles from "./styles.module.css";

export const Comment = () => {
  return (
    <div className={styles.comment}>
        <img src="https://github.com/tarcisioCarvalho.png"/>
        <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                      <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
                      </div>
                      <button title="Deletar Comentário"></button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    Aplaudir
                </footer>
        </div>
    </div>
  )
}
