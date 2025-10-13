import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ onScrollTo }) => {
  const location = useLocation();

  const handleScrollOrNavigate = (section) => {
    
    onScrollTo(section);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <nav className={styles.navLinks}>
          <button onClick={() => handleScrollOrNavigate("babyBuddyHome")}>BabyBuddy</button>
          <button onClick={() => handleScrollOrNavigate("babyBuddyHome")}>Sobre</button>
          <button onClick={() => handleScrollOrNavigate("contato")}>Aplicativo </button>
          <button onClick={() => handleScrollOrNavigate("artigos")}>Artigos</button>
        </nav>

        <div className={styles.cadastroWrapper}>
          <button className={styles.cadastroLink} onClick={() => handleScrollOrNavigate("cadastro")}>
            Cadastre-se
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
