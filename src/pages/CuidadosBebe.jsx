import React from 'react'
import './CuidadosBebe.module.css'
import gravida from '../assets/gravida.png'
import facilidades from '../assets/facilidade.png'
import compartilhamento from '../assets/compartilhamento.png'

const CuidadosBebe = () => (
  <div className="cuidados">
    <h2>Cuidados com o Bebê</h2>
    <div className="cards">
      <div className="card">
        <img src={gravida} alt="Gestante"/>
        <p>Dicas para gestantes</p>
      </div>
      <div className="card">
        <img src={facilidades} alt="Facilidades"/>
        <p>Facilidades para o dia a dia</p>
      </div>
      <div className="card">
        <img src={compartilhamento} alt="Compartilhamento"/>
        <p>Compartilhe informações importantes</p>
      </div>
    </div>
  </div>
)

export default CuidadosBebe
