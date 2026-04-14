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

  const portfolioItems = [
    {
      title: 'Barbearia Monarch',
      description:
        'Um site com presença forte, visual premium e estrutura pensada para valorizar a marca e facilitar o agendamento.',
      image: 'barbearia.png',
      alt: 'Site para barbearia',
      link: 'https://barbeariamonarch.netlify.app/',
    },
    {
      title: 'Restaurante Multipage',
      description:
        'Uma apresentação moderna e estratégica para restaurantes que querem transmitir qualidade e atrair mais clientes.',
      image: 'restaurante.png',
      alt: 'Site para restaurante',
      link: 'https://restaurantemultipage.netlify.app/',
    },
    {
      title: 'Monarch Store',
      description:
        'Um modelo de loja com identidade marcante, visual sofisticado e uma estrutura feita para destacar produtos com mais impacto.',
      image: 'loja.png',
      alt: 'Site para loja',
      link: 'https://monarchstore.netlify.app/',
    },
  ];

  const services = [
    {
      icon: 'iconesite.png',
      alt: 'Criação de Sites',
      title: 'Sites Profissionais',
      description:
        'Projetos modernos, rápidos e responsivos, criados para fortalecer sua presença digital e gerar mais oportunidades.',
    },
    {
      icon: 'iconesistemas.png',
      alt: 'Integração com WhatsApp',
      title: 'Integração com WhatsApp',
      description:
        'Facilite o contato com seus clientes e transforme visitas em conversas diretas pelo WhatsApp da sua empresa.',
    },
    {
      icon: 'iconeconsultoria.png',
      alt: 'Soluções Personalizadas',
      title: 'Soluções Sob Medida',
      description:
        'Cada negócio tem sua necessidade. Por isso, desenvolvemos soluções personalizadas para melhorar processos e gerar resultado.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
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
        <span className="hero-kicker">AJ Digital</span>

        <h1>Sites profissionais para negócios que querem crescer no digital.</h1>

        <p>
          Criamos experiências digitais com visual forte, carregamento rápido e
          estrutura pensada para transformar visitas em oportunidades reais para
          sua empresa.
        </p>

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
        <div className="section-heading">
          <span className="section-kicker">Portfólio</span>
          <h2>Modelos criados para encantar, posicionar e vender melhor.</h2>
          <p>
            Cada projeto é desenvolvido com foco em apresentação profissional,
            percepção de valor e facilidade de contato com o cliente.
          </p>
        </div>

        <Slider {...settings}>
          {portfolioItems.map((item) => (
            <div key={item.title}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="carousel-image"
                />
              </a>
            </div>
          ))}
        </Slider>

        <div className="portfolio-cards">
          {portfolioItems.map((item) => (
            <div className="portfolio-card" key={item.title}>
              <div className="portfolio-card-content">
                <span className="portfolio-label">Projeto em destaque</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noreferrer">
                  Ver site
                </a>
              </div>
            </div>
          ))}
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
        <span className="section-kicker">Posicionamento</span>
        <h2>Mais do que um site, uma ferramenta de crescimento.</h2>
        <p>
          Na AJ Digital, cada projeto é pensado para valorizar a imagem da sua
          empresa, facilitar o contato com o cliente e criar uma presença
          digital que transmite mais confiança, profissionalismo e resultado.
        </p>
      </section>

      <section id="servicos" ref={servicosRef} className="services-section">
        <div className="section-heading">
          <span className="section-kicker">Serviços</span>
          <h2>O que a AJ Digital pode fazer pelo seu negócio</h2>
          <p>
            Soluções digitais criadas para empresas que querem se destacar,
            vender mais e transmitir um posicionamento mais profissional na
            internet.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-item" key={service.title}>
              <img
                src={service.icon}
                alt={service.alt}
                className="service-icon"
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-content">
          <div>
            <span className="section-kicker">Vamos tirar sua ideia do papel</span>
            <p>
              Seu negócio está pronto para ter um site com visual profissional e
              mais poder de conversão?
            </p>
          </div>

          <a
            href="https://wa.me/5548991087702"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
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