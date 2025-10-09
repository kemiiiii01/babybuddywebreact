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
            O BabyBuddy oferece facilidade ao reunir todas as informações e atualizações da gravidez em um só lugar, simplificando o acompanhamento e tornando a jornada mais tranquila.
          </p>
        </div>

        <div className={styles.featureCard}>
          <img src={compartilhamentoImg} alt="Compartilhamento com o parceiro" className={styles.featureImg} />
          <h3>Compartilhamento com o parceiro</h3>
          <p>
            Compartilhe o progresso da gravidez com seu parceiro através do app, fortalecendo o vínculo e garantindo que ambos estejam envolvidos e informados a cada etapa.
          </p>
        </div>

        <div className={styles.featureCard}>
          <img src={privacidadeImg} alt="Privacidade" className={styles.featureImg} />
          <h3>Privacidade</h3>
          <p>
            Com o BabyBuddy, você está no comando. Você nos confia suas informações pessoais e nós garantimos sua segurança. Seus dados de saúde nunca serão compartilhados fora do App.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
