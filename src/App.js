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
   CONFIG
========================= */
const WHATSAPP_LINK =
  'https://wa.me/5548991087702?text=Olá!%20Vi%20o%20site%20da%20AJ%20Digital%20e%20quero%20entender%20como%20funciona%20para%20criar%20um%20site%20profissional%20para%20meu%20negócio.';

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
  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="hero-premium" ref={homeRef} id="home">
      <div className="hero-premium-blur hero-premium-blur-1"></div>
      <div className="hero-premium-blur hero-premium-blur-2"></div>

      <div className="container hero-premium-grid">
        <div className="hero-premium-left">
          <Reveal>
            <span className="hero-premium-badge">
              AJ Digital • Sites premium para negócios locais
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="hero-premium-title">
              Seu negócio precisa causar uma primeira impressão forte.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="hero-premium-description">
              Criamos sites profissionais para empresas que querem transmitir
              mais confiança, valorizar sua marca e transformar visitantes em
              oportunidades reais pelo WhatsApp.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="hero-premium-actions">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="hero-btn hero-btn-primary"
              >
                Quero um site profissional
              </a>

              <button
                type="button"
                className="hero-btn hero-btn-secondary"
                onClick={scrollToPortfolio}
              >
                Ver modelos criados
              </button>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="hero-premium-stats">
              <div className="hero-premium-stat">
                <strong>Visual premium</strong>
                <span>Design moderno que valoriza sua empresa no primeiro acesso.</span>
              </div>

              <div className="hero-premium-stat">
                <strong>Mais confiança</strong>
                <span>Uma presença digital mais profissional para seus clientes.</span>
              </div>

              <div className="hero-premium-stat">
                <strong>Contato facilitado</strong>
                <span>Estrutura pensada para levar o cliente direto ao WhatsApp.</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={440}>
            <div className="hero-proof-inline">
              <div className="hero-proof-pill">Site rápido e responsivo</div>
              <div className="hero-proof-pill">Visual alinhado ao seu negócio</div>
              <div className="hero-proof-pill">Foco em confiança e conversão</div>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-premium-right" delay={240}>
          <div className="hero-visual-card">
            <div className="hero-visual-grid"></div>

            <div className="hero-visual-main">
              <span className="mini-kicker">Presença digital</span>
              <h3>Seu site trabalhando pela sua marca</h3>
              <p>
                Uma estrutura profissional ajuda o cliente a entender seu valor,
                confiar mais no seu negócio e tomar a decisão de chamar você.
              </p>
            </div>

            <div className="hero-floating-box hero-floating-box-top">
              <span>Mais autoridade</span>
            </div>

            <div className="hero-floating-box hero-floating-box-bottom">
              <span>WhatsApp como conversão</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================
   AUTHORITY
========================= */
function AuthoritySection() {
  const items = [
    {
      title: 'Primeira impressão forte',
      text: 'Seu cliente decide em poucos segundos se confia ou não na sua empresa. Um site profissional ajuda sua marca a ser levada mais a sério.',
    },
    {
      title: 'Mais valor percebido',
      text: 'Quando sua apresentação digital é forte, o cliente enxerga mais profissionalismo, organização e qualidade no que você oferece.',
    },
    {
      title: 'Mais chances de contato',
      text: 'Com uma estrutura clara, visual atrativo e chamada direta para ação, o site facilita o caminho até o orçamento.',
    },
  ];

  return (
    <section className="authority-section premium-section">
      <div className="container">
        <Reveal>
          <div className="section-heading centered-heading">
            <span className="section-kicker">Autoridade</span>
            <h2>Antes de comprar de você, o cliente precisa confiar em você.</h2>
            <p>
              A AJ Digital cria sites com visual forte, comunicação clara e
              estrutura pensada para aumentar a percepção de valor do seu
              negócio.
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
            <h2>Modelos criados para impressionar no primeiro acesso.</h2>
            <p>
              Exemplos de estruturas que mostram como um site profissional pode
              valorizar diferentes tipos de negócios.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="portfolio-slider-shell premium-shell">
            <Slider {...settings}>
              {portfolioItems.map((item) => (
                <div key={item.title}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir modelo ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="carousel-image premium-carousel-image"
                      loading="lazy"
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
                    Ver modelo
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
    'O cliente percebe mais valor quando sua empresa se apresenta com clareza e profissionalismo.',
    'Um site bem construído passa mais confiança do que depender apenas do Instagram.',
    'A estrutura certa facilita o contato e transforma interesse em conversa no WhatsApp.',
  ];

  return (
    <section className="positioning-premium premium-section">
      <div className="container positioning-premium-grid">
        <Reveal>
          <div className="positioning-premium-content">
            <span className="section-kicker">Posicionamento</span>
            <h2>Seu site não é só presença online. É percepção de valor.</h2>
            <p>
              Mais do que criar páginas bonitas, a AJ Digital constrói uma
              apresentação estratégica para sua empresa parecer mais forte, mais
              confiável e mais preparada para receber clientes.
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
      text: 'Entendemos sua empresa, seu público, seus objetivos e como o site pode ajudar a gerar mais oportunidades.',
    },
    {
      number: '02',
      title: 'Direção visual e estrutura',
      text: 'Definimos a base do projeto com foco em clareza, experiência mobile e apresentação profissional.',
    },
    {
      number: '03',
      title: 'Desenvolvimento premium',
      text: 'Criamos um site moderno, responsivo, rápido e alinhado com o posicionamento que sua empresa precisa transmitir.',
    },
    {
      number: '04',
      title: 'Entrega e ajustes',
      text: 'Finalizamos o projeto com foco em qualidade, conversão e facilidade de contato pelo WhatsApp.',
    },
  ];

  return (
    <section className="process-section premium-section">
      <div className="container">
        <Reveal>
          <div className="section-heading centered-heading">
            <span className="section-kicker">Processo</span>
            <h2>Um processo claro para transformar ideia em presença profissional.</h2>
            <p>
              Cada etapa é pensada para criar um site bonito, estratégico e
              pronto para representar melhor o seu negócio.
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
            <h2>Soluções digitais para negócios que querem crescer com mais presença.</h2>
            <p>
              Sites profissionais, integração com WhatsApp e estruturas sob
              medida para empresas que querem se destacar no digital.
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
                    loading="lazy"
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
              <span className="section-kicker">Próximo passo</span>
              <h2>Quer um site que faça seu negócio parecer mais profissional?</h2>
              <p>
                Me chama no WhatsApp e me conta sobre sua empresa. Vou entender
                seu momento e te orientar sobre a melhor estrutura para começar.
              </p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="hero-btn hero-btn-primary"
            >
              Falar sobre meu site
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
        'Site profissional para barbearias que querem transmitir mais valor, atrair novos clientes e facilitar o agendamento.',
      image: 'barbearia.png',
      alt: 'Modelo de site profissional para barbearia',
      link: 'https://barbeariamonarch.netlify.app/',
      tag: 'Barbearia',
      features: [
        'Visual premium para valorizar o negócio',
        'Mais confiança para novos clientes',
        'Agendamento direto pelo WhatsApp',
      ],
    },
    {
      title: 'Restaurante Multipage',
      description:
        'Modelo estratégico para restaurantes que querem apresentar melhor sua marca, cardápio e experiência.',
      image: 'restaurante.png',
      alt: 'Modelo de site profissional para restaurante',
      link: 'https://restaurantemultipage.netlify.app/',
      tag: 'Restaurante',
      features: [
        'Apresentação profissional do cardápio',
        'Mais credibilidade para o cliente',
        'Estrutura pensada para gerar contato',
      ],
    },
    {
      title: 'Monarch Store',
      description:
        'Estrutura avançada para lojas que querem vender online com mais controle, profissionalismo e percepção de valor.',
      image: 'loja.png',
      alt: 'Modelo de ecommerce profissional para loja',
      link: 'https://monarchstore.netlify.app/',
      tag: 'E-commerce',
      features: [
        'Sistema de vendas integrado',
        'Experiência pensada para conversão',
        'Mais valor percebido para seus produtos',
      ],
    },
  ];

  const services = [
    {
      icon: 'iconesite.png',
      alt: 'Ícone de criação de sites',
      title: 'Sites Profissionais',
      description:
        'Sites modernos, rápidos e responsivos para fortalecer sua marca e gerar mais oportunidades.',
    },
    {
      icon: 'iconesistemas.png',
      alt: 'Ícone de integração com WhatsApp',
      title: 'Conversão pelo WhatsApp',
      description:
        'Estrutura pensada para facilitar o contato e transformar visitantes em conversas reais com sua empresa.',
    },
    {
      icon: 'iconeconsultoria.png',
      alt: 'Ícone de soluções personalizadas',
      title: 'Estruturas Sob Medida',
      description:
        'Cada negócio tem uma necessidade. Criamos soluções alinhadas com seu objetivo, público e posicionamento.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4200,
    arrows: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    customPaging: () => (
      <button
        type="button"
        aria-label="Trocar slide"
        className="custom-slick-dot"
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
        threshold: 0.14,
        rootMargin: '0px 0px -40px 0px',
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
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Falar com a AJ Digital pelo WhatsApp"
      >
        Falar no WhatsApp agora
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
      document.body.classList.toggle('page-scrolled', window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('page-scrolled');
    };
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
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