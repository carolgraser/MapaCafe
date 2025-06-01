import React from 'react'; // Importa o React para permitir criação de componentes
import { Typography, List } from 'antd'; // Importa componentes de tipografia e listas da biblioteca Ant Design
import '../assets/Home.css'; // Importa o arquivo de estilos CSS específico desta página

const { Title, Paragraph } = Typography; 

const funcionalidades = [ // Cria um array de objetos com as principais funcionalidades do app
  {
    title: 'Registre suas Visitas',
    description: 'Adicione detalhes como nome, localização, nota e suas bebidas favoritas.'
  },
  {
    title: 'Avaliações e Comentários',
    description: 'Deixe suas impressões sobre cada local visitado e ajude outros amantes de café.'
  },
  {
    title: 'Organização Fácil',
    description: 'Visualize todas as cafeterias registradas em uma lista prática e organizada.'
  }
];

const Home = () => ( // Define o componente funcional Home
  <div className="home-container">
    <Title level={2} className="home-title">
      Descubra os melhores cafés da cidade e registre cada visita.
    </Title>

    <Paragraph className="home-paragraph">
      No Mapa Café, você encontra as cafeterias mais aconchegantes e charmosas, guarda memórias de cada visita e compartilha suas experiências. Explore novos sabores, avalie seus lugares favoritos e crie uma lista personalizada das melhores cafeterias que já visitou.
    </Paragraph>

    <Title level={4} className="home-subtitle">
      Principais funcionalidades:
    </Title>
    <List
      className="home-features-list"
      itemLayout="vertical"
      dataSource={funcionalidades}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<strong>{item.title}</strong>}
            description={item.description}
          />
        </List.Item>
      )}
    />

    <Paragraph className="home-footer">
      Transforme cada xícara de café em uma memória inesquecível.  
      <br />
      <strong>Mapa Café</strong> – O seu diário de cafeterias, sempre ao seu alcance.
    </Paragraph>
  </div>
);

export default Home; // Exporta a Home para ser usada em outras partes do projeto