import React from 'react';
import { Link } from 'react-router-dom';
import styles from './artigos.module.css';

import img1 from '../assets/imgartigo1.png';
import img2 from '../assets/imgartigo2.png';
import img3 from '../assets/imgartigo3.png';

const Artigos = () => {
  return (
<section>
      <h2 className={styles.titulo}>Principais Artigos</h2>
      
      <div className={styles.containerCards}>
        <div className={styles.cardArtigos}>
          <Link to="/cuidados-bebe">
            <img src={img1} alt="Cuidados com o bebê" className={styles.cardImg} />
          </Link>
          <Link to="/cuidados-bebe" className={styles.cardTitle}>
            CUIDADOS COM O BEBÊ
          </Link>
          <p className={styles.cardText}>
            Tudo que você precisa saber para cuidar do seu bebê.
          </p>
        </div>

        <div className={styles.cardArtigos}>
          <Link to="/tentando-engravidar">
            <img src={img2} alt="Tentando engravidar?" className={styles.cardImg} />
          </Link>
          <Link to="/tentando-engravidar" className={styles.cardTitle}>
            TENTANDO ENGRAVIDAR?
          </Link>
          <p className={styles.cardText}>
            Quanto tempo demora a fecundação após a relação sexual?
          </p>
        </div>

        <div className={styles.cardArtigos}>
          <Link to="/periodo-gestacional">
            <img src={img3} alt="Período Gestacional" className={styles.cardImg} />
          </Link>
          <Link to="/periodo-gestacional" className={styles.cardTitle}>
            PERÍODO GESTACIONAL
          </Link>
          <p className={styles.cardText}>
            Tudo que você precisa saber sobre o período gestacional!
          </p>
        </div>
      </div>
</section>  );
};

export default Artigos;
