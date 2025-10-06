import React from 'react';
import styles from './BabyBuddyHome.module.css';

const BabyBuddyHome = () => {
  return (
    <section className={styles['babybuddy-section']}>
      <div className={styles.container}>
        <div className={styles['image-side']}>
          <img src={capahome} alt="Imagem do app BabyBuddy" />
        </div>
        <div className={styles['content-side']}>
          <h2>O que posso fazer com o aplicativo <span>BabyBuddy</span>?</h2>

          <div className={styles['card-babybuddy']}>
            <h3>Acompanhe sua gravidez</h3>
            <p>
              O BabyBuddy facilita o acompanhamento da sua gestação, oferecendo
              informações personalizadas e suporte diário para uma jornada mais
              tranquila e informada.
            </p>
          </div>

          <div className={styles['card-babybuddy']}>
            <h3>Cuide de você</h3>
            <p>
              Cuidar de si mesma durante a gravidez é essencial para garantir saúde e bem-estar para você e seu bebê.
            </p>
          </div>

          <div className={styles['card-babybuddy']}>
            <h3>Acompanhe sua gravidez</h3>
            <p>
              O BabyBuddy facilita o acompanhamento da sua gestação, oferecendo
              informações personalizadas e suporte diário para uma jornada mais
              tranquila e informada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabyBuddyHome;