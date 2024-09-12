
import './global.css'

import styles from "./App.module.css"
import { Header } from './components/header'
import { Aside } from './components/Aside'
import { Post } from './components/Post'
import { Comment } from "./components/Comment";

function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Aside />
        <Post>
        </Post>
        <Post />
        <Post />

      </div>
    </div>
  )
}

export default App
