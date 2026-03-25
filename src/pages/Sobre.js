import React from 'react';

const Sobre = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <section style={styles.hero}>
          <span style={styles.badge}>Seu Serviço Dev</span>
          <h1 style={styles.title}>Sites profissionais para empresas que querem crescer no digital.</h1>
          <p style={styles.description}>
            Criamos sites rápidos, modernos e pensados para fazer seu negócio crescer na internet.
          </p>
        </section>

        <section style={styles.section}>
          <div style={styles.contentBox}>
            <h2 style={styles.subTitle}>Quem está por trás</h2>
            <p style={styles.text}>
              Meu nome é <strong>André Filipe Jacinto</strong>, desenvolvedor focado em criar sites que ajudam empresas a se posicionarem melhor na internet e conquistarem mais clientes.

Meu objetivo é simples: entregar um site profissional, rápido e que realmente gere resultado para o seu negócio.
            </p>
            <p style={styles.text}>
              O objetivo da <strong>Seu Serviço Dev</strong> é entregar projetos com visual profissional,
              boa performance e uma estrutura pensada para gerar confiança no cliente desde o primeiro acesso.
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subTitleCenter}>O que entregamos</h2>

          <div style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Sites Profissionais</h3>
              <p style={styles.cardText}>
                Sites modernos, responsivos e pensados para destacar sua empresa e facilitar o contato com clientes.
              </p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Soluções Personalizadas</h3>
              <p style={styles.cardText}>
                Projetos sob medida para organizar processos, melhorar a apresentação do negócio e trazer mais eficiência.
              </p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Presença Digital</h3>
              <p style={styles.cardText}>
                Estrutura visual e estratégica para fortalecer sua marca e transmitir mais confiança no ambiente online.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.ctaSection}>
          <div style={styles.ctaBox}>
            <h2 style={styles.ctaTitle}>Seu negócio merece uma presença online mais profissional.</h2>
            <p style={styles.ctaText}>
              Um site bem feito transmite mais confiança, valoriza sua empresa e ajuda a transformar visitantes em clientes.
            </p>

            <a
              href="https://wa.me/5548991087702"
              target="_blank"
              rel="noreferrer"
              style={styles.ctaButton}
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0b0b0b',
    color: '#ffffff',
    padding: '60px 20px 90px',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  badge: {
    display: 'inline-block',
    padding: '8px 14px',
    border: '1px solid #d4af37',
    borderRadius: '999px',
    color: '#d4af37',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  title: {
    fontSize: '3rem',
    lineHeight: 1.2,
    marginBottom: '18px',
    maxWidth: '900px',
    marginInline: 'auto',
  },
  description: {
    fontSize: '1.1rem',
    color: '#e0e0e0',
    maxWidth: '760px',
    margin: '0 auto',
    lineHeight: 1.7,
  },
  section: {
    marginBottom: '55px',
  },
  contentBox: {
    background: '#141414',
    border: '1px solid #232323',
    borderRadius: '18px',
    padding: '32px',
    boxShadow: '0 14px 30px rgba(0,0,0,0.18)',
  },
  subTitle: {
    fontSize: '2rem',
    marginBottom: '18px',
    color: '#d4af37',
  },
  subTitleCenter: {
    fontSize: '2rem',
    marginBottom: '28px',
    color: '#d4af37',
    textAlign: 'center',
  },
  text: {
    fontSize: '1.05rem',
    lineHeight: 1.8,
    color: '#f0f0f0',
    marginBottom: '14px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '22px',
  },
  card: {
    background: '#161616',
    border: '1px solid #242424',
    borderRadius: '18px',
    padding: '28px 22px',
    boxShadow: '0 12px 28px rgba(0,0,0,0.16)',
  },
  cardTitle: {
    fontSize: '1.35rem',
    color: '#d4af37',
    marginBottom: '12px',
  },
  cardText: {
    fontSize: '1rem',
    color: '#dddddd',
    lineHeight: 1.7,
  },
  ctaSection: {
    marginTop: '20px',
  },
  ctaBox: {
    background: 'linear-gradient(135deg, #111, #1a1a1a)',
    border: '1px solid #2a2a2a',
    borderRadius: '20px',
    padding: '38px 24px',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '2rem',
    marginBottom: '16px',
    color: '#ffffff',
  },
  ctaText: {
    maxWidth: '760px',
    margin: '0 auto 24px',
    fontSize: '1.05rem',
    color: '#d9d9d9',
    lineHeight: 1.7,
  },
  ctaButton: {
    display: 'inline-block',
    background: '#25d366',
    color: '#000',
    padding: '14px 24px',
    borderRadius: '10px',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Sobre;