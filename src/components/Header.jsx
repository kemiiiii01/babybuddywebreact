import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 

const Header = () => {
  return (
    <header className={styles.header}> 
      <div className={styles.headerContent}>
       
        <div className={styles.logo}>
          {/* Coloque sua logo aqui, se quiser */}
        </div>

        <nav className={styles.navLinks}>
          <a href="#">Artigos</a>
          <a href="#">Sobre Nós</a>
          <a href="#">Contato</a>
        </nav>

        <div>
         <Link to="/cadastro" className={styles.cadastroLink}>Cadastrar-se</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
