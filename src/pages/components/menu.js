// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = ({ onScrollToSection }) => { 
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li> 
        <li>
          <button onClick={() => onScrollToSection("servicos")}>Serviços</button>
        </li>
        <li>
          <button onClick={() => onScrollToSection("contato")}>Contato</button>
        </li>
        <li><Link to="/sobre">Sobre Mim</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
