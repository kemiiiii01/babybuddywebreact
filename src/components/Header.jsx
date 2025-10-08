import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 

const Header = ({ onScrollTo }) => {
  return (
    <header className={styles.header}> 
      <div className={styles.headerContent}>
        
        <div className={styles.logo}>
          {/* Coloque sua logo aqui, se quiser */}
        </div>

        {/* Barra de navegação (Navbar) */}
        <nav className={styles.navLinks}>
          <button onClick={() => onScrollTo("home")}>Home</button>
          <button onClick={() => onScrollTo("sobre")}>Sobre</button>
          <button onClick={() => onScrollTo("contato")}>Contato</button>
          
          {/* Links de navegação */}
          <button onClick={() => onScrollTo("features")}>Features</button>
          <a href="#">Sobre Nós</a>
          <a href="#">Contato</a>
        </nav>

        {/* Link para cadastro */}
        <div>
          <Link to="/cadastro" className={styles.cadastroLink}>Cadastrar-se</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
