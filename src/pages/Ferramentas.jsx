import React from 'react'
import './Ferramentas.module.css'
import img1 from '../assets/imgartigo1.png'
import img2 from '../assets/imgartigo2.png'
import img3 from '../assets/imgartigo3.png'

const Ferramentas = () => (
  <div className="ferramentas">
    <h2>Ferramentas</h2>
    <div className="artigos">
      <div className="artigo">
        <img src={img1} alt="Artigo 1"/>
        <p>Artigo 1</p>
      </div>
      <div className="artigo">
        <img src={img2} alt="Artigo 2"/>
        <p>Artigo 2</p>
      </div>
      <div className="artigo">
        <img src={img3} alt="Artigo 3"/>
        <p>Artigo 3</p>
      </div>
    </div>
  </div>
)

export default Ferramentas
