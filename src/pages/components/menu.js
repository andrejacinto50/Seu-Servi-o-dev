import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './menu.css';
import logo from '../../assets/AJDigital.png';

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const goToSection = (section) => {
    setOpen(false);

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

  // trava scroll quando menu abre
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <>
      <nav className="menu">
        <div className="menu-container">
          <button
            type="button"
            className="menu-logo"
            onClick={() => goToSection('home')}
          >
            <img src={logo} alt="AJ Digital" />
          </button>

          {/* DESKTOP */}
          <ul className="menu-list">
            <li>
              <button onClick={() => goToSection('home')}>Home</button>
            </li>
            <li>
              <button onClick={() => goToSection('servicos')}>
                Serviços
              </button>
            </li>
            <li>
              <button onClick={() => goToSection('portfolio')}>
                Portfólio
              </button>
            </li>
            <li>
              <NavLink to="/sobre">Sobre</NavLink>
            </li>
          </ul>

          <a
            href="https://wa.me/5548991087702"
            target="_blank"
            rel="noreferrer"
            className="menu-whatsapp"
          >
            Falar no WhatsApp
          </a>

          {/* BOTÃO MOBILE */}
          <button
            className={`menu-toggle ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <div className={`mobile-menu-overlay ${open ? 'active' : ''}`}>
        <div className="mobile-menu">
          <button onClick={() => goToSection('home')}>Home</button>
          <button onClick={() => goToSection('servicos')}>
            Serviços
          </button>
          <button onClick={() => goToSection('portfolio')}>
            Portfólio
          </button>

          <NavLink to="/sobre" onClick={() => setOpen(false)}>
            Sobre
          </NavLink>

          <a
            href="https://wa.me/5548991087702"
            target="_blank"
            rel="noreferrer"
            className="mobile-cta"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default Menu;