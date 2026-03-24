import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './menu.css';

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
      <ul>
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

        <li>
          <a
            href="https://wa.me/5548991087702"
            target="_blank"
            rel="noreferrer"
            className="menu-whatsapp"
          >
            WhatsApp
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;