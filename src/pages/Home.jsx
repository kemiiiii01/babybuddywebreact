import React from 'react'
import styles from './Home.module.css'
import capahome from '../assets/capahome.png'

const Home = () => (
  <div className={styles.home}>
    <img src={capahome} alt="Capa Home" className={styles.homeImage} />
    <h2>Bem-vindo ao BabyBuddy</h2>
    <p>Seu guia completo para cuidados com o bebê e gestação.</p>
    <div className={styles.cards}>
      <div className={styles.card}>
        <h3>Cuidados com o bebê</h3>
        <p>Dicas essenciais para cada fase do bebê.</p>
      </div>
      <div className={styles.card}>
        <h3>Gestação saudável</h3>
        <p>Informações importantes para gestantes.</p>
      </div>
      <div className={styles.card}>
        <h3>Dicas de segurança</h3>
        <p>Mantenha seu bebê seguro em casa e fora.</p>
      </div>
    </div>
  </div>
)

export default Home
