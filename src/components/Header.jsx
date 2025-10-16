import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    switch (section) {
      case 'home':
        navigate('/#home');
        break;
      case 'babyBuddyHome':
        navigate('/babybuddyhome#');
        break;
      case 'contato':
        navigate('/sobre#contato');
        break;
      case 'artigos':
        navigate('/artigos#lista');
        break;
      case 'cadastro':
        navigate('/cadastro#formulario');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <nav className={styles.navLinks}>
          <button onClick={() => handleNavigation('home')}>Inicio</button>
          <button onClick={() => handleNavigation('babyBuddyHome')}>BabyBuddy</button>
          <button onClick={() => handleNavigation('contato')}>Sobre</button>
          <button onClick={() => handleNavigation('artigos')}>Artigos</button>
        </nav>

        <div className={styles.cadastroWrapper}>
          <button className={styles.cadastroLink} onClick={() => handleNavigation('cadastro')}>
            Cadastre-se
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
