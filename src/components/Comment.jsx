import styles from "./Comment.module.css"
import avatarPhoto from "../assets/avatar.png";
import { Trash, ThumbsUp } from "@phosphor-icons/react";

export function Comment() {
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
            <button><Trash size={25} /></button>
          </header>

          <div className={styles.text}>
            <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>
        </div>

        <div className={styles.contentButtons}>
          <ThumbsUp />
          <span>Aplaudir</span>
          <span className={styles.point}></span>
          <span>03</span>
        </div>
      </div>
    </div>
  )
}