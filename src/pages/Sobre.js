import React from 'react';
import './sobre.css';

const WHATSAPP_LINK =
  'https://wa.me/5548991087702?text=Olá!%20Vi%20a%20página%20sobre%20da%20AJ%20Digital%20e%20quero%20entender%20como%20funciona%20para%20criar%20um%20site%20profissional%20para%20meu%20negócio.';

const Sobre = () => {
  return (
    <main className="sobre-page">
      <div className="sobre-blur sobre-blur-1"></div>
      <div className="sobre-blur sobre-blur-2"></div>

      <div className="sobre-container">
        <section className="sobre-hero">
          <span className="sobre-badge">AJ Digital • Presença premium</span>

          <h1>
            Sites profissionais para empresas que querem parecer mais fortes,
            confiáveis e preparadas para vender.
          </h1>

          <p>
            A AJ Digital cria experiências digitais modernas, rápidas e
            estratégicas para valorizar marcas, gerar mais confiança e facilitar
            o contato com novos clientes.
          </p>

          <div className="sobre-hero-actions">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="sobre-cta-button"
            >
              Quero um site profissional
            </a>

            <span>Atendimento direto pelo WhatsApp</span>
          </div>
        </section>

        <section className="sobre-section">
          <div className="sobre-intro-grid">
            <div className="sobre-content-box">
              <span className="sobre-kicker">Quem está por trás</span>
              <h2>Uma marca criada para transformar presença digital em percepção de valor.</h2>

              <p>
                Meu nome é <strong>André Filipe Jacinto</strong>, desenvolvedor
                e criador da <strong>AJ Digital</strong>. Meu foco é desenvolver
                sites profissionais para empresas que precisam se posicionar
                melhor no digital.
              </p>

              <p>
                Um bom site não serve apenas para “estar na internet”. Ele precisa
                transmitir confiança, apresentar sua empresa com clareza e ajudar
                o cliente a dar o próximo passo.
              </p>

              <p>
                Por isso, cada projeto é pensado com visual forte, experiência
                mobile, carregamento rápido e uma estrutura direcionada para
                conversão pelo WhatsApp.
              </p>
            </div>

            <div className="sobre-side-card">
              <span className="sobre-kicker">Nosso foco</span>
              <h3>Sites com visual premium, estratégia e clareza para vender melhor.</h3>

              <ul className="sobre-side-list">
                <li>Visual profissional para valorizar sua marca</li>
                <li>Experiência mobile pensada para o cliente</li>
                <li>Comunicação clara e objetiva</li>
                <li>Estrutura com foco em contato e orçamento</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sobre-section">
          <div className="sobre-section-heading">
            <span className="sobre-kicker">O que entregamos</span>
            <h2>Soluções digitais para empresas que querem sair do comum.</h2>
            <p>
              Criamos estruturas que ajudam sua empresa a parecer mais
              profissional, melhorar sua apresentação e gerar mais oportunidades.
            </p>
          </div>

          <div className="sobre-grid">
            <article className="sobre-card">
              <span className="sobre-card-number">01</span>
              <h3>Sites Profissionais</h3>
              <p>
                Sites modernos, rápidos e responsivos para transmitir confiança,
                destacar sua marca e facilitar o contato com clientes.
              </p>
            </article>

            <article className="sobre-card">
              <span className="sobre-card-number">02</span>
              <h3>Estruturas Personalizadas</h3>
              <p>
                Cada projeto é criado de acordo com o objetivo do negócio, com
                foco em posicionamento, clareza e experiência do usuário.
              </p>
            </article>

            <article className="sobre-card">
              <span className="sobre-card-number">03</span>
              <h3>Conversão pelo WhatsApp</h3>
              <p>
                O site é pensado para facilitar o caminho do visitante até o
                contato, tornando o orçamento mais simples e direto.
              </p>
            </article>
          </div>
        </section>

        <section className="sobre-values-section">
          <div className="sobre-values-heading">
            <span className="sobre-kicker">Por que isso importa</span>
            <h2>Seu site precisa trabalhar pela imagem do seu negócio todos os dias.</h2>
          </div>

          <div className="sobre-values-grid">
            <div className="sobre-value-item">
              <strong>Primeira impressão forte</strong>
              <p>
                Em poucos segundos, o cliente já cria uma percepção sobre sua
                empresa. Um site profissional muda essa percepção.
              </p>
            </div>

            <div className="sobre-value-item">
              <strong>Mais confiança</strong>
              <p>
                Uma apresentação bem feita transmite organização, seriedade e
                mais segurança para quem ainda não conhece sua marca.
              </p>
            </div>

            <div className="sobre-value-item">
              <strong>Mais oportunidades</strong>
              <p>
                Quando o site é claro, bonito e direto, o cliente entende melhor
                o valor da empresa e tem mais facilidade para chamar.
              </p>
            </div>
          </div>
        </section>

        <section className="sobre-cta-section">
          <div className="sobre-cta-box">
            <span className="sobre-kicker">Vamos construir sua presença digital</span>
            <h2>Seu negócio merece um site que passe confiança antes mesmo da conversa.</h2>
            <p>
              Me chama no WhatsApp e me conta sobre sua empresa. Vou te orientar
              sobre a melhor estrutura para começar com uma presença digital mais
              profissional.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="sobre-cta-button"
            >
              Falar sobre meu site
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Sobre;