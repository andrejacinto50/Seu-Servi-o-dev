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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 12) {
        document.body.classList.add('page-scrolled');
      } else {
        document.body.classList.remove('page-scrolled');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('page-scrolled');
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="menu">
        <div className="menu-container">
          <button
            type="button"
            className="menu-logo"
            onClick={() => goToSection('home')}
            aria-label="Ir para o topo"
          >
            <img src={logo} alt="AJ Digital" />
          </button>

          <ul className="menu-list">
            <li>
              <button type="button" onClick={() => goToSection('home')}>
                Home
              </button>
            </li>
            <li>
              <button type="button" onClick={() => goToSection('servicos')}>
                Serviços
              </button>
            </li>
            <li>
              <button type="button" onClick={() => goToSection('portfolio')}>
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

          <button
            type="button"
            className={`menu-toggle ${open ? 'open' : ''}`}
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu-overlay ${open ? 'active' : ''}`}
        onClick={() => setOpen(false)}
      >
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <button type="button" onClick={() => goToSection('home')}>
            Home
          </button>
          <button type="button" onClick={() => goToSection('servicos')}>
            Serviços
          </button>
          <button type="button" onClick={() => goToSection('portfolio')}>
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
            onClick={() => setOpen(false)}
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default Menu;