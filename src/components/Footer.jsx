import React from 'react';
import styles from './Footer.module.css';

import logo from '../assets/logo-babybuddy3.png';
import playstore from '../assets/playstorelogo.png';
import applestore from '../assets/applestorelogo.png';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>

      {/* Coluna 1: Logo + frases + botões */}
      <div className={`${styles.footerCol} ${styles.logoSection}`}>
        <img src={logo} alt="BabyBuddy Logo" className={styles.footerLogo} />
        <p className={styles.footerText}>
          Cuide de você.<br />Proteja seu bebê.
        </p>
        <p className={styles.footerDownloadTitle}>BAIXE O APP BABYBUDDY</p>
        <div className={styles.storeButtons}>
          <a href="https://play.google.com/store/games?hl=pt_BR&pli=1" target="_blank" rel="noopener noreferrer">
            <img src={playstore} alt="Google Play" className={styles.storeImg} />
          </a>
          <a href="https://apps.apple.com/app/id0000000000" target="_blank" rel="noopener noreferrer">
            <img src={applestore} alt="App Store" className={styles.storeImg} />
          </a>
        </div>
      </div>

      {/* Coluna 2: Produto */}
      <div className={styles.footerCol}>
        <h4>PRODUTO</h4>
        <a href="/seguranca">Segurança</a>
      </div>

      {/* Coluna 3: Conteúdo */}
      <div className={styles.footerCol}>
        <h4>CONTEÚDO</h4>
        <a href="/ferramentas">Ferramentas</a>
      </div>

      {/* Coluna 4: Privacidade */}
      <div className={styles.footerCol}>
        <h4>PRIVACIDADE</h4>
        <a href="/termosdeuso">Termos de Uso</a><br />
        <a href="/politicadeprivacidade">Política de Privacidade</a>
      </div>
    </div>

    {/* Rodapé inferior */}
    <div className={styles.footerBottom}>
      &copy; 2025 BabyBuddy. Todos os direitos reservados.
    </div>
  </footer>
);

export default Footer;
