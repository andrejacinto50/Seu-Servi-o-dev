import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './menu.css';
import logo from '../../assets/AJDigital.png';

const WHATSAPP_LINK =
  'https://wa.me/5548991087702?text=Olá!%20Vi%20o%20site%20da%20AJ%20Digital%20e%20quero%20entender%20como%20funciona%20para%20criar%20um%20site%20profissional%20para%20meu%20negócio.';

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
    document.body.classList.toggle('menu-open', open);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.toggle('page-scrolled', window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

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
      <nav className="menu" aria-label="Menu principal">
        <div className="menu-container">
          <button
            type="button"
            className="menu-logo"
            onClick={() => goToSection('home')}
            aria-label="Ir para o início"
          >
            <img src={logo} alt="AJ Digital" />
          </button>

          <ul className="menu-list">
            <li>
              <button type="button" onClick={() => goToSection('home')}>
                Início
              </button>
            </li>

            <li>
              <button type="button" onClick={() => goToSection('portfolio')}>
                Modelos
              </button>
            </li>

            <li>
              <button type="button" onClick={() => goToSection('servicos')}>
                Serviços
              </button>
            </li>

            <li>
              <NavLink to="/sobre">Sobre</NavLink>
            </li>
          </ul>

          <a
            href={WHATSAPP_LINK}
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
            aria-controls="mobile-menu"
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
        <div
          className="mobile-menu"
          id="mobile-menu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-menu-head">
            <span>AJ Digital</span>
            <small>Presença digital premium</small>
          </div>

          <button type="button" onClick={() => goToSection('home')}>
            <span>01</span>
            Início
          </button>

          <button type="button" onClick={() => goToSection('portfolio')}>
            <span>02</span>
            Modelos
          </button>

          <button type="button" onClick={() => goToSection('servicos')}>
            <span>03</span>
            Serviços
          </button>

          <NavLink to="/sobre" onClick={() => setOpen(false)}>
            <span>04</span>
            Sobre
          </NavLink>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="mobile-cta"
            onClick={() => setOpen(false)}
          >
            Quero um site profissional
          </a>

          <p className="mobile-menu-note">
            Sites modernos, responsivos e pensados para gerar mais confiança e
            contato pelo WhatsApp.
          </p>
        </div>
      </div>
    </>
  );
};

export default Menu;