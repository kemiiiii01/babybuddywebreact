import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../assets/logo-babybuddy.png'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src={logo} alt="BabyBuddy Logo" />
      <h1>BabyBuddy</h1>
    </div>
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/cadastro">Cadastro</Link>
      <Link to="/cuidadosbebe">Cuidados</Link>
      <Link to="/ferramentas">Ferramentas</Link>
      <Link to="/periodogestacional">Gestação</Link>
      <Link to="/seguranca">Segurança</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/tentandoengravidar">Tentando Engravidar</Link>
      <Link to="/termosdeuso">Termos</Link>
    </nav>
  </header>
)

export default Header
