import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './menu.css';
import logo from '../../assets/AJDigital.png';

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (section) => {
    if (location.pathname === '/') {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      return;
    }

    navigate('/', { state: { scrollTo: section } });
  };

  return (
    <nav className="menu">
      <div className="menu-container">
        <button
          type="button"
          className="menu-logo"
          onClick={() => goToSection('home')}
        >
          <img src={logo} alt="AJ Digital" />
        </button>

        <ul className="menu-list">
          <li>
            <button
              type="button"
              className="menu-link"
              onClick={() => goToSection('home')}
            >
              Home
            </button>
          </li>

          <li>
            <button
              type="button"
              className="menu-link"
              onClick={() => goToSection('servicos')}
            >
              Serviços
            </button>
          </li>

          <li>
            <button
              type="button"
              className="menu-link"
              onClick={() => goToSection('portfolio')}
            >
              Portfólio
            </button>
          </li>

          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive ? 'menu-link active' : 'menu-link'
              }
            >
              Sobre Mim
            </NavLink>
          </li>
        </ul>

        <a
          href="https://wa.me/5548991087702"
          target="_blank"
          rel="noreferrer"
          className="menu-whatsapp"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default Menu;