import React, { useEffect, useRef } from 'react';
import './index.css';
import Menu from './pages/components/menu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Sobre from './pages/Sobre';

function Home({ homeRef, servicosRef, portfolioRef }) {
  const location = useLocation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    customPaging: () => (
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: '#fff',
        }}
      />
    ),
  };

  useEffect(() => {
    if (location.pathname !== '/') return;

    const section = location.state?.scrollTo;

    const scrollMap = {
      home: homeRef,
      portfolio: portfolioRef,
      servicos: servicosRef,
    };

    const targetRef = scrollMap[section];

    const timer = setTimeout(() => {
      if (targetRef?.current) {
        targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [location, homeRef, portfolioRef, servicosRef]);

  return (
    <>
      <section className="topo" ref={homeRef} id="home">
        <h1>AJ Digital</h1>
        <p>
        Criamos sites profissionais para empresas e comércios que querem atrair mais clientes.

          <br />
Sites modernos, rápidos e pensados para destacar seu negócio na internet.        </p>

        <div className="hero-buttons">
          <button
            type="button"
            onClick={() =>
              portfolioRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
          >
            Ver modelos
          </button>

          <a
            href="https://wa.me/5548991087702"
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <section className="portfolio-section" ref={portfolioRef} id="portfolio">
        <Slider {...settings}>
          <div>
            <a
              href="https://barbeariamonarch.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="barbearia.png"
                alt="Site para barbearia"
                className="carousel-image"
              />
            </a>
          </div>

          <div>
            <a
              href="https://restaurantemultipage.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="restaurante.png"
                alt="Site para restaurante"
                className="carousel-image"
              />
            </a>
          </div>

          <div>
            <a
              href="https://monarchstore.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="loja.png"
                alt="Site para loja"
                className="carousel-image"
              />
            </a>
          </div>
        </Slider>

        <div className="links-exemplos">
          <a
            href="https://barbeariamonarch.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Ver site da barbearia
          </a>

          <a
            href="https://restaurantemultipage.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Ver site do restaurante
          </a>

          <a
            href="https://monarchstore.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Ver site da loja
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/5548991087702"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        WhatsApp
      </a>

      <section className="about-section">
        <h2>O que fazemos?</h2>
        <p>
         Na AJ Digital, desenvolvemos soluções sob medida para cada negócio, criando sites rápidos, intuitivos e pensados para oferecer a melhor experiência ao cliente. Nosso foco é fortalecer a presença digital da sua empresa, facilitar o contato e gerar mais oportunidades de crescimento.
        </p>
      </section>

      <div className="cta-strip">
        <p>Quer um site profissional para o seu negócio?</p>
        <a
          href="https://wa.me/5548991087702"
          target="_blank"
          rel="noreferrer"
        >
          Solicitar orçamento
        </a>
      </div>

      <section id="servicos" ref={servicosRef} className="services-section">
        <h2>Nossos Serviços</h2>

        <div className="services-grid">
          <div className="service-item">
            <img
              src="iconesite.png"
              alt="Criação de Sites"
              className="service-icon"
            />
            <h3>Criação de Sites Profissionais</h3>
            <p>
Sites modernos, rápidos e responsivos que geram mais oportunidades.
            </p>
          </div>

          <div className="service-item">
            <img
              src="iconesistemas.png"
              alt="Integração com WhatsApp"
              className="service-icon"
            />
            <h3>Integração com WhatsApp</h3>
            <p>
             Receba contatos diretos dos clientes pelo WhatsApp do seu site.
            </p>
          </div>

          <div className="service-item">
            <img
              src="iconeconsultoria.png"
              alt="Soluções Personalizadas"
              className="service-icon"
            />
            <h3>Soluções Personalizadas</h3>
            <p>
            Sob medida para melhorar processos e gerar mais resultados.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function AppContent() {
  const homeRef = useRef(null);
  const servicosRef = useRef(null);
  const portfolioRef = useRef(null);

  return (
    <>
      <Menu />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              homeRef={homeRef}
              servicosRef={servicosRef}
              portfolioRef={portfolioRef}
            />
          }
        />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}