import styles from "./Comment.module.css"
import avatarPhoto from "../assets/avatar.png";
import { Trash, ThumbsUp } from "@phosphor-icons/react";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  //iniciar o estado sempre com o tipo que vai ser utilizado
  const [likeCount, setLikeCount] = useState(0)
  function handleDeleteComment() {
    onDeleteComment(content)
  }
  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }
  return (
    <div className={styles.comment}>
      <img src={avatarPhoto} className={styles.avatar} />

      <div className={styles.contentComment}>

        <div className={styles.mainComent}>
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <strong>José Guerra</strong>
              <time datetime="">Cerca de 2h</time>
            </div>
            <button onClick={handleDeleteComment}><Trash size={25} /></button>
          </header>

          <div className={styles.text}>
            <p>{content}</p>
          </div>
        </div>

          <button onClick={handleLikeComment} className={styles.buttonLike}>
            <ThumbsUp />
            Aplaudir 
            <span className={styles.point}></span>
            <span>{likeCount}</span>
          </button>
          
      </div>
    </div>
  )
}