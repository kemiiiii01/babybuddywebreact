import React, {useRef} from 'react';
import styles from './Home.module.css';
import gravidaImg from '../assets/gravida.png'; 
import BabyBuddyHome from './BabyBuddyHome.jsx'; 
import features from './Features.jsx';
import Footer from '../components/Footer.jsx';
import Features from './Features.jsx';
import Artigos from './Artigos.jsx';


function Rolagem() {const}
const Home = () => {
  return (
    <>
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <div className={styles.introImage}>
            <img src={gravidaImg} alt="Gestante capa" />
          </div>
          <div className={styles.introText}>
            <h1>
              BabyBuddy seu app de
              <br />monitoramento gestacional
            </h1>
            <p>
              O <strong>Baby Buddy</strong> é um aplicativo projetado para ajudar mães, especialmente as de
              primeira viagem, a acompanharem o desenvolvimento de seus bebês e
              gerenciarem a maternidade de forma eficiente.
            </p>
          <a href="ok">Sobre Nós</a>
          </div>
        </div>
      </section>

      {/* BabyBuddyHome renderizado logo abaixo da seção acima */}
      <BabyBuddyHome className="ok"/>
      <Features />
      <Artigos/>

    </>
  );
};

export default Home;
