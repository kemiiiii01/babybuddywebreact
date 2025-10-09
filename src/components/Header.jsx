import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ onScrollTo }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollOrNavigate = (section) => {
    // Se for cadastro, navega para a página cadastro
    if (section === 'cadastro') {
      navigate('/cadastro');
      return;
    }

    // Se estamos na home, rola pra seção
    if (location.pathname === '/') {
      onScrollTo(section);
    } else {
      // Se não estamos na home, navega para home com hash
      navigate(`/#${section}`);
    }
  };

  return (
    <header className={styles.header}> 
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          {/* Coloque sua logo aqui, se quiser */}
        </div>

        <nav className={styles.navLinks}>
          <button onClick={() => handleScrollOrNavigate("home")}>Inicio</button>
          <button onClick={() => handleScrollOrNavigate("babyBuddyHome")}>Sobre</button>
          <button onClick={() => handleScrollOrNavigate("artigos")}>Artigos</button>
          <button onClick={() => handleScrollOrNavigate("cadastro")}>Cadastro</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
