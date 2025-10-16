import React from 'react';
import styles from './features.module.css';

import facilidadeImg from '../assets/facilidade.png';
import compartilhamentoImg from '../assets/compartilhamento.png';
import privacidadeImg from '../assets/privacidade.png';

const Features = () => {
  return (
    <section id="contato" className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        <div className={styles.featureCard}>
          <img src={facilidadeImg} alt="Facilidade" className={styles.featureImg} />
          <h3>Facilidade</h3>
          <p>
           O BabyBuddy traz praticidade ao reunir todas as informações e atualizações da gravidez em um só lugar, tornando o acompanhamento simples e a jornada mais tranquila.
          </p>
        </div>

        <div className={styles.featureCard}>
          <img src={compartilhamentoImg} alt="Compartilhamento com o parceiro" className={styles.featureImg} />
          <h3>Compartilhamento com o parceiro</h3>
          <p>
            Compartilhe o progresso da gestação com seu parceiro através do app, fortalecendo o vínculo e garantindo que ambos estejam informados e envolvidos em cada etapa.
          </p>
        </div>

        <div className={styles.featureCard}>
          <img src={privacidadeImg} alt="Privacidade" className={styles.featureImg} />
          <h3>Privacidade</h3>
          <p>
            Com o BabyBuddy, você tem total controle. Suas informações pessoais ficam seguras, e seus dados de saúde nunca serão compartilhados fora do aplicativo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
