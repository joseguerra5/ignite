
import './global.css'

import styles from "./App.module.css"
import { Header } from './components/header'
import { Aside } from './components/Aside'
import { Post } from './components/Post'
import { Comment } from "./components/Comment";

//author : {avatar_url, name, role}
//publishedAt: Date
//content: string

const posts = [
  {
    id: 1,

    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO Rocketseat",
    },
    content: [
      {type: "paragraph", content: "Fala Galera"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "afiado.eu"},
    ],
    publishedAt: new Date("2024-08-28 20:00:00")
  },

  {
    id: 2,

    author: {
      avatarUrl: "https://github.com/joseguerra5.png",
      name: "José GUerra",
      role: "CEO Afiado",
    },
    content: [
      {type: "paragrapg", content: "Fala Galera"},
      {type: "paragrapg", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "afiado.eu"},
    ],
    publishedAt: new Date("2024-09-14 20:00:00")
  },
];

//iteração (criar estrutura de repetição)
//não pode sert foreach porque não retorna valor

function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Aside />
        
        {posts.map(post => {
          return (<Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />)
        })}

      </div>
    </div>
  )
}

export default App
