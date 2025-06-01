import '../App.css'; // Importa os estilos globais do app
import { useState } from 'react'; // Importa o hook useState para manipular o estado do menu
import MenuLateral from './ListaMenu';
import '../index'; //Importa o arquivo de entrada principal
import Logo from './Logo';
import { Button, Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const { Sider, Content } = Layout; // Desestruturando o Layout da Ant Design do menu lateral e conteúdo principal

function AppLayout(conteudo) { // Função principal do layout. Recebe como parâmetro o conteúdo (children) a ser exibido

  const [collapsed, setCollapsed] = useState(false); // Cria um estado chamado collapsed, que define se o menu está recolhido (true) ou aberto (false)

  return (
    <>
      <Layout>
        <Layout>
          <Sider width={230} collapsed={collapsed} collapsible trigger={null} className="sidebar">
            <Logo />
            <MenuLateral />
          </Sider>
          <div className="toggle-wrapper">
            <Button
              type="text"
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </div>
          <Content className="content-wrapper" style={{
            padding: '20px',
            overflow: 'auto',
            height: '100vh'
          }}>
            <main className="content" style={{
              flex: 1,
              overflowY: 'auto',
            }}>{conteudo.children}</main>
          </Content>
        </Layout>
      </Layout>

    </>
  );
}
export default AppLayout; 