import React from 'react'
import './Cadastro.module.css'
import applestorelogo from '../assets/applestorelogo.png'
import playstorelogo from '../assets/playstorelogo.png'
import qrcode from '../assets/qrcode.png'

const Cadastro = () => (
  <div className="cadastro">
    <h2>Cadastro</h2>
    <form className="formCadastro">
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Senha" />
      <button type="submit">Cadastrar</button>
    </form>
    <div className="apps">
      <img src={applestorelogo} alt="App Store" />
      <img src={playstorelogo} alt="Play Store" />
    </div>
    <img src={qrcode} alt="QR Code" className="qrcode"/>
  </div>
)

export default Cadastro
