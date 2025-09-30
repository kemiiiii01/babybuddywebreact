import React from 'react';
import './navbar.module.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        {/* Logo, caso necessário */}
        <div className="logo">
          {/* Aqui você pode adicionar a imagem do logo */}
          <img src="logo.png" alt="Logo" />
        </div>

        
        <nav className="nav-links">
          <a href="#">Artigos</a>
          <a href="sobre.html">Sobre Nós</a>
          <a href="#">Contato</a>
        </nav>

        
        <div className="nav-action">
          <a href="cadastro.html" className="btn-cadastro">Cadastre-se</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
