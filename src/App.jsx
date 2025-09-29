import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Cadastro from './pages/Cadastro.jsx'
import CuidadosBebe from './pages/CuidadosBebe.jsx'
import Ferramentas from './pages/Ferramentas.jsx'
import PeriodoGestacional from './pages/PeriodoGestacional.jsx'
import Seguranca from './pages/Seguranca.jsx'
import Sobre from './pages/Sobre.jsx'
import TentandoEngravidar from './pages/TentandoEngravidar.jsx'
import TermosDeUso from './pages/TermosDeUso.jsx'

const App = () => (
  <Router>
    <Header />
    <main style={{ minHeight: '80vh' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cuidadosbebe" element={<CuidadosBebe />} />
        <Route path="/ferramentas" element={<Ferramentas />} />
        <Route path="/periodogestacional" element={<PeriodoGestacional />} />
        <Route path="/seguranca" element={<Seguranca />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/tentandoengravidar" element={<TentandoEngravidar />} />
        <Route path="/termosdeuso" element={<TermosDeUso />} />
      </Routes>
    </main>
    <Footer />
  </Router>
)

export default App
