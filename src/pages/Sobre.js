import React from 'react';

const Sobre = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sobre Mim</h1>

      <section style={styles.section}>
        <p style={styles.text}>
          A <strong>Seu Serviço Dev</strong> nasceu com o propósito de oferecer soluções digitais sob medida,
          combinando tecnologia de ponta com foco em resultado. Atuamos com o desenvolvimento de sites,
          sistemas personalizados e consultoria digital, entregando projetos de alta performance,
          alinhados às reais necessidades de cada cliente.
        </p>

        <p style={styles.text}>
          À frente do projeto está <strong>André Filipe Jacinto</strong>, Analista e Desenvolvedor de Sistemas formado pelo Senac/SC,
          com sólida experiência em desenvolvimento web. Já atuou em empresas como Sesc/SC e Tecnocenter Outsourcing,
          além de diversos projetos autônomos, sempre priorizando qualidade, agilidade e escalabilidade.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>O que entregamos:</h2>

        <div style={styles.flexRow}>
          <div style={styles.card}>
            <h3 style={styles.serviceTitle}>Desenvolvimento de Sites Profissionais</h3>
            <p style={styles.text}>
              Criamos sites modernos, responsivos e otimizados para buscadores (SEO),
              com foco em experiência do usuário e desempenho em todos os dispositivos.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.serviceTitle}>Sistemas Personalizados</h3>
            <p style={styles.text}>
              Soluções web sob demanda para automatizar processos, melhorar a gestão e
              potencializar os resultados da sua empresa. Integrações com APIs, dashboards,
              controle de usuários e muito mais.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.serviceTitle}>Consultoria Digital Estratégica</h3>
            <p style={styles.text}>
              Auxiliamos sua empresa na jornada de transformação digital, com análise técnica,
              planejamento de presença online e melhorias em performance, segurança e usabilidade.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <p style={styles.text}>
          Somos comprometidos em entregar mais do que sistemas:
          entregamos <strong>soluções funcionais, confiáveis e escaláveis</strong> que realmente geram valor para o seu negócio.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#fff',
  },
  section: {
    marginBottom: '40px',
  },
  text: {
    lineHeight: 1.6,
    marginBottom: '15px',
  },
  subTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '30px',
  },
  flexRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    flex: '1 1 30%',
    backgroundColor: '#1e1e1e',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  },
  serviceTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '10px',
  },
};

export default Sobre;
