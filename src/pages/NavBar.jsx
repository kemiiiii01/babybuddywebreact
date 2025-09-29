import React from "react";
import styles from "./navbar.module.css"; 

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContent}>
        <nav className={styles.navLinks}>
          <a href="#">Artigos</a>
          <a href="sobre.html">Sobre Nós</a>
          <a href="#">Contato</a>
        </nav>

        <div className={styles.navAction}>
          <a href="cadastro.html" className={styles.btnCadastro}>
            Cadastre-se
          </a>
        </div>
      </div>
    </header>
  );
}
