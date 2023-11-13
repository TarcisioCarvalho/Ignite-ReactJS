import React from 'react'
import styles from "./styles.module.css"

export const Post = () => {
  return <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <img className={styles.avatar} src="https://github.com/tarcisioCarvalho.png"/>
        <div>
          <strong>Tarcísio Carvalho</strong>
          <span>Developer</span>
        </div>
      </div>
     <time title="11 de maio de" dateTime="2022-05-11 08:13:30">
      publica há 1 hora
     </time>
    </header>
    <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p><a href="">👉 jane.design/doctorcare</a></p>
      <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
    </div>

    <form className={styles.commentForm}>
      <strong>Deixe seu Feedback</strong>
      <textarea 
      placeholder="Deixe um comentário"
      />
      <footer>
        <button type="submit">
          Comentar
        </button>
      </footer>
    </form>
  </article>
}
