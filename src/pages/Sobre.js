import React from 'react';
import './sobre.css';

const Sobre = () => {
  return (
    <main className="sobre-page">
      <div className="sobre-container">
        <section className="sobre-hero">
          <span className="sobre-badge">AJ Digital</span>
          <h1>
            Criamos sites profissionais para empresas que querem crescer com
            mais presença, confiança e resultado no digital.
          </h1>
          <p>
            Desenvolvemos projetos modernos, rápidos e estratégicos, pensados
            para valorizar sua marca, transmitir profissionalismo e transformar
            visitas em oportunidades reais.
          </p>
        </section>

        <section className="sobre-section">
          <div className="sobre-content-box">
            <span className="sobre-kicker">Quem está por trás</span>
            <h2>Uma marca construída para entregar presença digital de verdade.</h2>

            <p>
              Meu nome é <strong>André Filipe Jacinto</strong>, desenvolvedor
              focado em criar sites que ajudam empresas a se posicionarem melhor
              no digital e conquistarem mais clientes.
            </p>

            <p>
              Meu objetivo é entregar projetos profissionais, rápidos e com uma
              estrutura pensada para gerar resultado, fortalecer a imagem da
              empresa e facilitar o contato com novos clientes.
            </p>

            <p>
              A <strong>AJ Digital</strong> nasce com o propósito de desenvolver
              soluções com visual profissional, alta performance e uma
              experiência que transmite confiança desde o primeiro acesso.
            </p>
          </div>
        </section>

        <section className="sobre-section">
          <div className="sobre-section-heading">
            <span className="sobre-kicker">O que entregamos</span>
            <h2>Soluções criadas para destacar empresas no ambiente digital</h2>
            <p>
              Mais do que presença online, desenvolvemos estruturas que ajudam a
              valorizar a marca, melhorar a comunicação e gerar mais
              oportunidades.
            </p>
          </div>

          <div className="sobre-grid">
            <article className="sobre-card">
              <h3>Sites Profissionais</h3>
              <p>
                Sites modernos, rápidos e responsivos, criados para transmitir
                mais confiança e gerar mais oportunidades para sua empresa.
              </p>
            </article>

            <article className="sobre-card">
              <h3>Soluções Personalizadas</h3>
              <p>
                Projetos sob medida para atender a necessidade de cada negócio,
                com foco em estrutura, funcionalidade e resultado.
              </p>
            </article>

            <article className="sobre-card">
              <h3>Presença Digital</h3>
              <p>
                Uma apresentação visual e estratégica para fortalecer sua marca
                e mostrar mais profissionalismo no ambiente online.
              </p>
            </article>
          </div>
        </section>

        <section className="sobre-cta-section">
          <div className="sobre-cta-box">
            <span className="sobre-kicker">Vamos construir sua presença digital</span>
            <h2>Seu negócio merece um site com aparência profissional e mais força para vender.</h2>
            <p>
              Um site bem feito transmite mais confiança, valoriza sua empresa e
              ajuda a transformar visitantes em clientes com muito mais
              consistência.
            </p>

            <a
              href="https://wa.me/5548991087702"
              target="_blank"
              rel="noreferrer"
              className="sobre-cta-button"
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Sobre;