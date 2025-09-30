import React from 'react';
import styles from './Header.module.css'; 

const Header = () => {
  return (
    <header className={styles.header}> 
      <div className={styles.headerContent}>
       
        <div className={styles.logo}>
          
        </div>

       
        <nav className={styles.navLinks}>
          <a href="#">Artigos</a>
          <a href="#">Sobre Nós</a>
          <a href="#">Contato</a>
        </nav>

       
        <div className={styles.navAction}>
          <a href="Cadastro.jsx" className={styles.btnCadastro}>Cadastre-se</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
