import styles from "./Post.module.css"
import { Comment } from "./Comment";
import avatarPhoto from "../assets/avatar.png";

/* quando usar o module precisa dar o nome a importação e chamar como se fosse um objeto */

export function Post() {
  return (

    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.userContent}>
          <img src={avatarPhoto} className={styles.avatar}/>
          <div className={styles.nameContent}>
            <strong>José Guerra</strong>
            <span>CEO Afiado</span>
          </div>
        </div>    
        <time title="11 de maio de 2022 ás 08:13" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>
      <main>
        <p>
          Fala galeraa 👋
          <br />
          <br />
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        
        <span></span>
      </main>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeHolder="Escreva um comentário..." className={styles.textArea}/>

        <footer className={styles.footerButton}>
          <button type="submit" className={styles.button}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
      </div>
    </article>
  )
}