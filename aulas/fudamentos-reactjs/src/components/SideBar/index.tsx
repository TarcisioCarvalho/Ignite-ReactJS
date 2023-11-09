import React from 'react';
import styles from "./styles.module.css";
import { PencilLine } from 'phosphor-react';

export const SideBar= () => {
  return (
    <aside className={styles.sideBar}>
        <header></header>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className={styles.profile}>
          <img src="https://github.com/tarcisioCarvalho.png" />
          <strong>Tarcísio Carvalho</strong>
          <span>Developer</span>
        </div>
        <footer>
         
          <a href="">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
        
    </aside>
  )
}
