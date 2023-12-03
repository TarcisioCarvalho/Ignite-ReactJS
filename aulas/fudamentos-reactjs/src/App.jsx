import { useState } from 'react'
import { Header } from './components/Header'

import styles from './styles.module.css'

import './global.css';
import { Post } from './components/Post';
import { SideBar } from './components/SideBar';


function App() {
  return (
    <div >
      <Header/>
      <div className={styles.wrapper}>
         <SideBar/>
          <main>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </main>
          
      </div>
    </div>
  )
}

export default App
