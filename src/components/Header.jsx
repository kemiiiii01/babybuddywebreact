
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ onScrollTo }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollOrNavigate = (section) => {
    if (section === 'cadastro') {
      navigate('/cadastro');
      return;
    }

    if (location.pathname === '/') {
      onScrollTo(section);
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
       
      
        <nav className={styles.navLinks}>
          <button onClick={() => handleScrollOrNavigate("artigos")}>Artigos</button>
          <button onClick={() => handleScrollOrNavigate("BabyBuddyHome")}>Sobre Nós</button>
          <button onClick={() => handleScrollOrNavigate("contato")}>Contato</button>
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
