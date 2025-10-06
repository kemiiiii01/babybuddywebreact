import React from 'react';
import styles from './CuidadosBebe.module.css'; // Importa CSS Modules
import gravida from '../assets/gravida.png';
import facilidades from '../assets/facilidade.png';
import compartilhamento from '../assets/compartilhamento.png';

const CuidadosBebe = () => (
  <div className={styles.cuidados}>
    <h2>Cuidados com o Bebê</h2>
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src={gravida} alt="Gestante" />
        <p>Dicas para gestantes</p>
      </div>
      <div className={styles.card}>
        <img src={facilidades} alt="Facilidades" />
        <p>Facilidades para o dia a dia</p>
      </div>
      <div className={styles.card}>
        <img src={compartilhamento} alt="Compartilhamento" />
        <p>Compartilhe informações importantes</p>
      </div>
    </div>
  </div>
);

export default CuidadosBebe;
