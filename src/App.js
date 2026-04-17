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

/* =========================
   REVEAL
========================= */
function Reveal({ children, className = '', delay = 0 }) {
  return (
    <div
      className={`reveal-block ${className}`}
      data-reveal="true"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* =========================
   HERO
========================= */
function HeroSection({ homeRef, portfolioRef }) {
  return (
    <section className="hero-premium" ref={homeRef} id="home">
      <div className="hero-premium-blur hero-premium-blur-1"></div>
      <div className="hero-premium-blur hero-premium-blur-2"></div>

      <div className="container hero-premium-grid">
        <div className="hero-premium-left">
          <Reveal>
            <span className="hero-premium-badge">
              AJ Digital • Sites com posicionamento premium
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="hero-premium-title">
              Sites profissionais para empresas que querem crescer com mais
              presença, confiança e autoridade.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="hero-premium-description">
              Criamos experiências digitais com visual forte, carregamento
              rápido e estrutura pensada para transformar visitas em
              oportunidades reais para sua empresa.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="hero-premium-actions">
              <button
                type="button"
                className="hero-btn hero-btn-primary"
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
                className="hero-btn hero-btn-secondary"
              >
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="hero-premium-stats">
              <div className="hero-premium-stat">
                <strong>Visual premium</strong>
                <span>Design que valoriza sua marca logo no primeiro acesso.</span>
              </div>

              <div className="hero-premium-stat">
                <strong>Mais confiança</strong>
                <span>Uma presença digital que transmite profissionalismo.</span>
              </div>

              <div className="hero-premium-stat">
                <strong>Mais contato</strong>
                <span>Estrutura pensada para facilitar conversão e orçamento.</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={440}>
            <div className="hero-proof-inline">
              <div className="hero-proof-pill">Projetos com identidade forte</div>
              <div className="hero-proof-pill">Experiência pensada para conversão</div>
              <div className="hero-proof-pill">Sites modernos e responsivos</div>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-premium-right" delay={240}>
          <div className="hero-visual-card">
            <div className="hero-visual-grid"></div>

            <div className="hero-visual-main">
              <span className="mini-kicker">Experiência digital</span>
              <h3>Primeira impressão forte</h3>
              <p>
                Seu site precisa passar valor em segundos. É isso que ajuda o
                cliente a enxergar qualidade, confiança e profissionalismo.
              </p>
            </div>

            <div className="hero-floating-box hero-floating-box-top">
              <span>Presença forte</span>
            </div>

            <div className="hero-floating-box hero-floating-box-bottom">
              <span>Estratégia + visual</span>
            </div>


          
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================
   AUTHORITY / VALUE
========================= */
function AuthoritySection() {
  const items = [
    {
      title: 'Primeira impressão forte',
      text: 'Um site bem apresentado ajuda sua empresa a parecer mais sólida, mais séria e mais preparada para atender.',
    },
    {
      title: 'Mais valor percebido',
      text: 'Quando a apresentação da marca sobe de nível, o cliente entende melhor a qualidade do que você oferece.',
    },
    {
      title: 'Mais chance de contato',
      text: 'Estrutura clara, visual forte e comunicação bem pensada ajudam a transformar visitas em oportunidades.',
    },
  ];

  return (
    <section className="authority-section premium-section">
      <div className="container">
        <Reveal>
          <div className="section-heading centered-heading">
            <span className="section-kicker">Autoridade</span>
            <h2>Seu site precisa vender confiança antes mesmo da conversa começar.</h2>
            <p>
              Presença digital forte não é só estética. É posicionamento,
              percepção de valor e uma estrutura que ajuda sua empresa a ser
              vista como mais profissional.
            </p>
          </div>
        </Reveal>

        <div className="authority-grid">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <article className="authority-card">
                <span className="authority-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   PORTFOLIO
========================= */
function PortfolioSection({ portfolioRef, portfolioItems, settings }) {
  return (
    <section
      className="portfolio-section premium-section"
      ref={portfolioRef}
      id="portfolio"
    >
      <div className="container">
        <Reveal>
          <div className="section-heading centered-heading">
            <span className="section-kicker">Portfólio</span>
            <h2>Modelos criados para encantar, posicionar e vender melhor.</h2>
            <p>
              Cada projeto é desenvolvido com foco em apresentação
              profissional, percepção de valor e facilidade de contato com o
              cliente.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="portfolio-slider-shell premium-shell">
            <Slider {...settings}>
              {portfolioItems.map((item) => (
                <div key={item.title}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="carousel-image premium-carousel-image"
                    />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </Reveal>

        <div className="portfolio-premium-grid portfolio-premium-grid-strong">
          {portfolioItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <div className="portfolio-premium-card portfolio-premium-card-strong">
                <div className="portfolio-card-top">
                  <span className="portfolio-label">Projeto em destaque</span>
                  <span className="portfolio-tag">{item.tag}</span>
                </div>

                <div className="portfolio-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <ul className="portfolio-feature-list">
                    {item.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <a href={item.link} target="_blank" rel="noreferrer">
                    Ver site
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   POSITIONING
========================= */
function PositioningSection() {
  const items = [
    'Um site bem construído aumenta a percepção de valor da sua empresa.',
    'Uma apresentação forte transmite mais confiança logo no primeiro acesso.',
    'Design, clareza e estrutura certa ajudam a transformar interesse em contato.',
  ];

  return (
    <section className="positioning-premium premium-section">
      <div className="container positioning-premium-grid">
        <Reveal>
          <div className="positioning-premium-content">
            <span className="section-kicker">Posicionamento</span>
            <h2>Mais do que um site, uma ferramenta de crescimento.</h2>
            <p>
              Na AJ Digital, cada projeto é pensado para valorizar a imagem da
              sua empresa, facilitar o contato com o cliente e criar uma
              presença digital que transmite mais confiança, profissionalismo e
              resultado.
            </p>
          </div>
        </Reveal>

        <div className="positioning-premium-list">
          {items.map((item, index) => (
            <Reveal key={item} delay={index * 140}>
              <div className="positioning-premium-item">
                <span className="positioning-number">0{index + 1}</span>
                <p>{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   PROCESS
========================= */
function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Entendimento do negócio',
      text: 'Analisamos o que sua empresa precisa comunicar, como deve se posicionar e qual tipo de estrutura faz mais sentido.',
    },
    {
      number: '02',
      title: 'Estrutura e direção visual',
      text: 'Definimos a base do projeto com foco em clareza, experiência do usuário e uma apresentação mais forte da marca.',
    },
    {
      number: '03',
      title: 'Desenvolvimento e refinamento',
      text: 'Construímos um site moderno, rápido, responsivo e alinhado com o objetivo comercial da empresa.',
    },
    {
      number: '04',
      title: 'Entrega com foco em resultado',
      text: 'O projeto é finalizado para transmitir profissionalismo, facilitar contato e gerar mais oportunidades reais.',
    },
  ];

  return (
    <section className="process-section premium-section">
      <div className="container">
        <Reveal>
          <div className="section-heading centered-heading">
            <span className="section-kicker">Processo</span>
            <h2>Uma estrutura profissional do começo ao fim.</h2>
            <p>
              Mais do que design bonito, cada projeto passa por uma construção
              estratégica para gerar impacto visual, clareza e resultado.
            </p>
          </div>
        </Reveal>

        <div className="process-grid">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 110}>
              <article className="process-card">
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   SERVICES
========================= */
function ServicesSection({ servicosRef, services }) {
  return (
    <section
      id="servicos"
      ref={servicosRef}
      className="services-section premium-section"
    >
      <div className="container">
        <Reveal>
          <div className="section-heading centered-heading">
            <span className="section-kicker">Serviços</span>
            <h2>O que a AJ Digital pode fazer pelo seu negócio</h2>
            <p>
              Soluções digitais criadas para empresas que querem se destacar,
              vender mais e transmitir um posicionamento mais profissional na
              internet.
            </p>
          </div>
        </Reveal>

        <div className="services-premium-grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 140}>
              <div className="service-premium-card">
                <div className="service-icon-wrap">
                  <img
                    src={service.icon}
                    alt={service.alt}
                    className="service-icon"
                  />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   CTA
========================= */
function CTASection() {
  return (
    <section className="cta-premium-section">
      <div className="container">
        <Reveal>
          <div className="cta-premium-box">
            <div>
              <span className="section-kicker">Vamos tirar sua ideia do papel</span>
              <h2>
                Seu negócio está pronto para ter um site com visual profissional
                e mais poder de conversão?
              </h2>
              <p>
                Se você quer uma presença digital mais forte, mais valorizada e
                preparada para impressionar clientes de verdade, esse é o
                momento de dar o próximo passo.
              </p>
            </div>

            <a
              href="https://wa.me/5548991087702"
              target="_blank"
              rel="noreferrer"
              className="hero-btn hero-btn-primary"
            >
              Solicitar orçamento
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================
   HOME
========================= */
function Home({ homeRef, servicosRef, portfolioRef }) {
  const location = useLocation();

  const portfolioItems = [
    {
      title: 'Barbearia Monarch',
      description:
        'Site profissional criado para barbearias que querem atrair mais clientes e facilitar o agendamento.',
      image: 'barbearia.png',
      alt: 'Site para barbearia',
      link: 'https://barbeariamonarch.netlify.app/',
      tag: 'Barbearia',
      features: ['Presença visual que valoriza o negócio', 'Mais confiança para novos clientes', 'Agendamento direto pelo WhatsApp'],
    },
    {
      title: 'Restaurante Multipage',
      description:
        'Modelo estratégico para restaurantes que querem se destacar online e atrair mais clientes.',
      image: 'restaurante.png',
      alt: 'Site para restaurante',
      link: 'https://restaurantemultipage.netlify.app/',
      tag: 'Restaurante',
      features: ['Apresentação profissional do cardápio', 'Mais credibilidade para o cliente', 'Estrutura pensada para gerar contato'],
    },
    {
      title: 'Monarch Store',
      description:
        'Estrutura avançada para empresas que querem vender online com mais controle e profissionalismo.',
      image: 'loja.png',
      alt: 'Site para loja',
      link: 'https://monarchstore.netlify.app/',
      tag: 'Loja',
      features: ['Sistema de vendas integrado', 'Experiência pensada para conversão', 'Mais valor percebido para seus produtos'],
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
    speed: 650,
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
          opacity: 0.8,
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
        targetRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [location, homeRef, portfolioRef, servicosRef]);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const elements = document.querySelectorAll('[data-reveal="true"]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location]);

  return (
    <>
      <HeroSection homeRef={homeRef} portfolioRef={portfolioRef} />

      <AuthoritySection />

      <PortfolioSection
        portfolioRef={portfolioRef}
        portfolioItems={portfolioItems}
        settings={settings}
      />

      <a
        href="https://wa.me/5548991087702"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        WhatsApp
      </a>

      <PositioningSection />

      <ProcessSection />

      <ServicesSection servicosRef={servicosRef} services={services} />

      <CTASection />
    </>
  );
}

/* =========================
   APP CONTENT
========================= */
function AppContent() {
  const homeRef = useRef(null);
  const servicosRef = useRef(null);
  const portfolioRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
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
  }, [location.pathname]);

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

/* =========================
   APP
========================= */
export default function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}