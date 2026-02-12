import React, { useRef, useState } from 'react';
import './index.css';
import Menu from './pages/components/menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import emailjs from '@emailjs/browser';
import InputMask from 'react-input-mask';
import Sobre from './pages/Sobre';

// Componente Home separado
function Home({
  form, sendEmail, name, setName, formErrors, setFormErrors, handleCountryChange,
  country, otherCountry, setOtherCountry, handleOtherCountryChange,
  ddd, setDdd, handleDddChange, phone, handlePhoneChange, isPhoneEnabled,
  successMessage, errorMessage, brazilDDDs, servicosRef, contatoRef
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#fff",
        }}
      ></div>
    ),
  };

  return (
    <>
      <div className="topo">
        <img src="serviçodev.png" alt="Seu Serviço Dev" className="logo" />
        <h1>Seu Serviço Dev</h1>
        <p>Desenvolvemos sites e sistemas digitais sob medida, com foco em resultados e experiência do usuário.</p>
      </div>

      <Slider {...settings}>
        <div><img src="moderno.png" alt="Banner 1" className="carousel-image" /></div>
        <div><img src="sites.png" alt="Banner 2" className="carousel-image" /></div>
        <div><img src="promocao.png" alt="Banner 3" className="carousel-image" /></div>
      </Slider>

      <a className="btn" href="https://wa.me/5548991087702" target="_blank" rel="noopener noreferrer">
        Falar no WhatsApp
      </a>

      <section className="about-section">
        <h2>O que fazemos?</h2>
        <p>Somos especialistas em desenvolvimento de soluções web personalizadas, criando sites, sistemas e aplicações focadas em otimização de processos e experiência do usuário.</p>
      </section>

      <section id="servicos" ref={servicosRef} className="services-section">
        <h2>Nossos Serviços</h2>
        <div className="services-grid">
          <div className="service-item">
            <img src="iconesite.png" alt="Desenvolvimento de Sites" className="service-icon" />
            <h3>Desenvolvimento de Sites</h3>
            <p>Sites modernos, responsivos e otimizados para sua empresa se destacar.</p>
          </div>
          <div className="service-item">
            <img src="iconesistemas.png" alt="Sistemas Personalizados" className="service-icon" />
            <h3>Sistemas Personalizados</h3>
            <p>Soluções sob medida para automatizar processos e melhorar resultados.</p>
          </div>
          <div className="service-item">
            <img src="iconeconsultoria.png" alt="Consultoria Digital" className="service-icon" />
            <h3>Consultoria Digital</h3>
            <p>Ajudamos seu negócio a se posicionar no ambiente digital com estratégias eficientes.</p>
          </div>
        </div>
      </section>


      <section id="contato" ref={contatoRef} className="contact-section">
  <svg className="wave-svg" viewBox="0 0 1440 320">
    <path fill="#f15a24" fillOpacity="1" d="M0,160L60,154.7C120,149,240,139,360,122.7C480,107,600,85,720,101.3C840,117,960,171,1080,181.3C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
  </svg>

  <div className="contact-container">
    <div className="contact-left">
      <h2>Quer colaborar?</h2>
      <p>Entre em contato para saber como podemos ajudar.</p>
    </div>

    <div className="contact-right">
      <h3 className="contact-subtitle">
        Estamos aqui para ajudar. Conte-nos um pouco sobre seu projeto e entraremos em contato.
      </h3>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Seu Nome"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {formErrors.name && <p className="error-message">{formErrors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Seu E-mail"
          required
          onChange={(e) => setFormErrors({ ...formErrors, email: '' })}
        />
        {formErrors.email && <p className="error-message">{formErrors.email}</p>}

        <div className="country-container">
          <select value={country} onChange={handleCountryChange} name="country" required>
            <option value="BR">Brasil</option>
            <option value="US">Estados Unidos</option>
            <option value="AR">Argentina</option>
            <option value="OT">Outro</option>
          </select>

          {country === 'OT' && (
            <input
              type="text"
              name="otherCountry"
              value={otherCountry}
              onChange={handleOtherCountryChange}
              placeholder="Qual país?"
            />
          )}

          {country === 'BR' && (
            <select value={ddd} onChange={handleDddChange}>
              {brazilDDDs.map((dddOption) => (
                <option key={dddOption.code} value={dddOption.code}>
                  {dddOption.code} - {dddOption.location}
                </option>
              ))}
            </select>
          )}
        </div>

        <InputMask
          mask="(99) 99999-9999"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          disabled={!isPhoneEnabled}
          className="input-phone"
          placeholder="Seu Telefone"
        />
        {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}

        <textarea name="message" placeholder="Descreva seu projeto" rows="4" required />


        <button type="submit">Enviar</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  </div>
</section>






    </>
  );
}

export default function App() {
  const form = useRef();
  const servicosRef = useRef(null);
  const contatoRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [country, setCountry] = useState('BR');
  const [otherCountry, setOtherCountry] = useState('');
  const [ddd, setDdd] = useState('');
  const [phone, setPhone] = useState('');

  const [name, setName] = useState('');
  const [isPhoneEnabled, setIsPhoneEnabled] = useState(false);
  const [formErrors, setFormErrors] = useState({ name: '', phone: '', email: '' });

  const brazilDDDs = [
    { code: '11', location: 'São Paulo' }, { code: '21', location: 'Rio de Janeiro' },
    { code: '31', location: 'Belo Horizonte' }, { code: '41', location: 'Curitiba' },
    { code: '48', location: 'Santa Catarina (Florianópolis)' }, { code: '47', location: 'Santa Catarina (Joinville)' },
    { code: '51', location: 'Porto Alegre' }, { code: '61', location: 'Brasília' },
    { code: '71', location: 'Salvador' }, { code: '81', location: 'Recife' },
    { code: '85', location: 'Fortaleza' }, { code: '27', location: 'Vitória' },
    { code: '62', location: 'Goiânia' }, { code: '91', location: 'Belém' },
    { code: '92', location: 'Manaus' }, { code: '98', location: 'São Luís' },
    { code: '99', location: 'Imperatriz' }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.sendForm('service_5be0gwe', 'template_ku6hx9h', form.current, 'JOnbexiGH_-pfssP8')
        .then(() => {
          setSuccessMessage('Mensagem enviada com sucesso!');
          setErrorMessage('');
          form.current.reset();
          setCountry('BR'); setOtherCountry(''); setDdd(''); setPhone('');
          setIsPhoneEnabled(false);
        }, () => {
          setErrorMessage('Erro ao enviar. Tente novamente.');
          setSuccessMessage('');
        });
    } else {
      setErrorMessage('Por favor, corrija os erros antes de enviar.');
      setSuccessMessage('');
    }
  };

  const validateForm = () => {
    let errors = {};
    if (name.length < 5) errors.name = 'O nome precisa ter pelo menos 5 caracteres.';
    const phoneDigits = phone.replace(/[^\d]/g, '');
    if (phoneDigits.length !== 11) errors.phone = 'O telefone precisa ter 11 dígitos.';
    const email = form.current.email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) errors.email = 'O e-mail precisa ser válido.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCountryChange = (e) => {
    const val = e.target.value;
    setCountry(val);
    setDdd('');
    setPhone('');
    setIsPhoneEnabled(val !== 'BR');
    if (val !== 'OT') setOtherCountry('');
  };

  const handleOtherCountryChange = (e) => {
    setOtherCountry(e.target.value);
    if (e.target.value) setIsPhoneEnabled(true);
  };

  const handleDddChange = (e) => {
    const val = e.target.value;
    setDdd(val);
    setPhone(val);
    setIsPhoneEnabled(!!val);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '').slice(0, 11);
    setPhone(value);
  };

  return (
    <div className="App">
      <Router>
        <Menu onScrollToSection={(section) => {
          if (section === 'servicos') servicosRef.current?.scrollIntoView({ behavior: 'smooth' });
          else if (section === 'contato') contatoRef.current?.scrollIntoView({ behavior: 'smooth' });
        }} />
        <Routes>
          <Route path="/" element={
            <Home
              form={form}
              sendEmail={sendEmail}
              name={name}
              setName={setName}
              formErrors={formErrors}
              setFormErrors={setFormErrors}
              handleCountryChange={handleCountryChange}
              country={country}
              otherCountry={otherCountry}
              setOtherCountry={setOtherCountry}
              handleOtherCountryChange={handleOtherCountryChange}
              ddd={ddd}
              setDdd={setDdd}
              handleDddChange={handleDddChange}
              phone={phone}
              handlePhoneChange={handlePhoneChange}
              isPhoneEnabled={isPhoneEnabled}
              successMessage={successMessage}
              errorMessage={errorMessage}
              brazilDDDs={brazilDDDs}
              servicosRef={servicosRef}
              contatoRef={contatoRef}
            />
          } />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </div>
  );
}