import styles  from "./Header.module.css"

import igniteLogo from "../assets/ignite-logo.svg"
/* quando usar o module precisa dar o nome a importação e chamar como se fosse um objeto */

export function Header() {
  return(
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo Ignite" />
    </header>
  )
}