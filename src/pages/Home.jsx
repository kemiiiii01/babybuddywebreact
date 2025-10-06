import React from 'react';
import styles from './Home.module.css';
import gravidaImg from '../assets/gravida.png'; 
const Home = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.introContainer}>
        <div className={styles.introImage}>
          <img src={gravidaImg} alt="Gestante capa" />
        </div>
        <div className={styles.introText}>
          <h1>
            BabyBuddy seu app de<br />monitoramento gestacional
          </h1>
          <p>
            O <strong>Baby Buddy</strong> é um aplicativo projetado para ajudar mães, especialmente as de
            primeira viagem, a acompanharem o desenvolvimento de seus bebês e
            gerenciarem a maternidade de forma eficiente.
          </p>
        </div>
      </div>
    </section>
  );
};

const BabyBuddySection = () => {
  return (
<section className="babybuddy-section">
<div className="container">
<div className="image-side">
<img src="capahome.png" alt="Imagem do app BabyBuddy" />
</div>
<div className="content-side">
<h2>
            O que posso fazer com o aplicativo <span>BabyBuddy</span>?
</h2>
 
          <div className="card-babybuddy">
<h3>Acompanhe sua gravidez</h3>
<p>
              O BabyBuddy facilita o acompanhamento da sua gestação, oferecendo
              informações personalizadas e suporte diário para uma jornada mais
              tranquila e informada.
</p>
</div>
 
          <div className="card-babybuddy">
<h3>Cuide de você</h3>
<p>
              Cuidar de si mesma durante a gravidez é essencial para garantir
              saúde e bem-estar para você e seu bebê.
</p>
</div>
 
          <div className="card-babybuddy">
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
    



export default Home;
