import bannerPhoto from "../assets/afiado-banner.png";
import avatarPhoto from "../assets/avatar.png";
import { PencilLine } from "@phosphor-icons/react";

import styles from "./Aside.module.css";

export function Aside() {
  return(
    <aside className={styles.aside}> 
      <img src={bannerPhoto} className={styles.banner} />
      <img src={avatarPhoto} className={styles.avatar} />
      <div className={styles.nameContent}>
        <strong className={styles.userName}>José Guerra</strong>
        <span className={styles.partner}>CEO Afiado</span>
      </div>
      <footer className={styles.footer}>
        <a href="#"> <PencilLine size={18} /> Editar seu perfil</a>
      </footer>
    </aside>
  )
}